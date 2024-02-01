import paho.mqtt.client as mqtt

# MQTT Broker settings
broker_address = "broker.emqx.io" 
port = 1883
topic = "savannah/ip"  

# Callback when a message is received
def on_message(client, userdata, message):
    print(f"Received message on topic '{message.topic}': {message.payload.decode()}")

# Create an MQTT client instance
client = mqtt.Client()

# Set the on_message callback
client.on_message = on_message

# Connect to the MQTT broker
client.connect(broker_address, port, 60)

# Subscribe to the specified topic
client.subscribe(topic)

# Wait for messages
client.loop_forever()
