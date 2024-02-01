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
pip install
python find_ip.py
```
To exit the virtual environment, run:
```bash
deactivate
```

### How to run on a Raspberry Py
To  run the script on startup, follow the instructions [here](https://www.instructables.com/Raspberry-Pi-Launch-Python-script-on-startup/)


### Test of IP pub sub
<img width="754" alt="image" src="https://github.com/waynelogan/savanna-trace/assets/87014851/8d2962f5-ccb4-4403-a215-55f23276ebd9">

## Frontend
[View Live Demo](https://savannah-trace.netlify.app)
**Disclaimer: the public test broker has extremely high latency and in local tests, it took at least 2 minutes to get a response on our topic**

The frontend is implemented using React and Next JS 14 (with App router).
It uses the `mqtt.js` library to connect to EQMX via websockets.
To run, navigate to the homepage of the project and run the following commands:
```bash
yarn install
yarn dev
```

<img width="960" alt="image" src="https://github.com/waynelogan/savanna-trace/assets/87014851/e07a1258-a13c-487f-81f1-a0f30152ece3">
