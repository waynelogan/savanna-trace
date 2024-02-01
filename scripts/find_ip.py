import subprocess
import time

def get_ip_address():
    max_retries = 10  # Number of maximum retries
    retry_interval = 5  # Retry interval in seconds

    for _ in range(max_retries):
        try:
            # Run the shell command to get the IP address
            result = subprocess.run(["hostname", "-I"], capture_output=True, text=True)

            # Extract and return the IP address
            ip_address = result.stdout.strip()

            # Check if the result is a valid IP address
            if ip_address and '.' in ip_address:
                return ip_address

        except Exception as e:
            print(f"Error: {e}")

        # Wait before retrying
        time.sleep(retry_interval)

    return None

# Get and print the Raspberry Pi's local IP address
ip_address = get_ip_address()

if ip_address:
    print(f"Raspberry Pi's IP address: {ip_address}")
else:
    print("Unable to retrieve IP address.")

if __name__ == "__main__":
    get_ip_address()
