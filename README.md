# Savannah Trace

Savannah Trace is a project that: 
- connects a Raspberry Pi to an MQTT broker and publishes the dynamic IP address allocated by the WiFi network it is on.
- has a web page that on prompt, displays the IP address of the Raspberry Pi

## Raspberry Pi script
The script is located at `./scripts/find_ip.py`

### How to run locally
Run the following commands from the root of the project
```bash
cd ./scripts
source source venv/bin/activate
python find_ip.py
```
### How to run on a Raspberry Py
To  run the script on startup, follow the instructions [here](https://www.instructables.com/Raspberry-Pi-Launch-Python-script-on-startup/)


