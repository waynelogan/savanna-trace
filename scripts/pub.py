import json
import random
import subprocess
import time
from paho.mqtt import client as mqtt_client


broker = 'broker.emqx.io'
port = 1883
topic = "savannah"
# Generate a Client ID with the publish prefix.
client_id = f'publish-{random.randint(0, 1000)}'
# username = 'emqx'
# password = 'public'

def connect_mqtt():
    def on_connect(client, userdata, flags, rc):
        if rc == 0:
            print("Connected to MQTT Broker!")
        else:
            print("Failed to connect, return code %d\n", rc)

    client = mqtt_client.Client(client_id)
    # client.username_pw_set(username, password)
    client.on_connect = on_connect
    client.connect(broker, port)
    return client


def publish(client, msg):
    while True:
        result = client.publish(topic, msg)
        status = result[0]
        if status == 0:
            print(f"Sent `{msg}` to topic `{topic}`")
            break
        else:
            print(f"Failed to send message to topic {topic}")


def create_message(ip_address):
    return json.dumps(ip_address)


def run():
    client = connect_mqtt()
    client.loop_start()
    ip_address = get_ip_address()
    message = create_message(ip_address)
    publish(client, message)
    client.loop_stop()


def get_ip_address():
    max_retries = 10
    retry_interval = 5

    for _ in range(max_retries):
        try:
            result = subprocess.run(["hostname", "-I"], capture_output=True, text=True)
            ip_address = result.stdout.strip()
            if ip_address:
                return {"ip_address": ip_address}
            
        except Exception as e:
            print(f"Error: {e}")

        time.sleep(retry_interval)

    return None


if __name__ == '__main__':
    run()
