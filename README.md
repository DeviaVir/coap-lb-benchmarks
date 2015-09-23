# Ignore me

This is for testing purposes only, half if not more is simply broken.


# Running

### CoAp Server

```
docker build -t coap-server ./coap-server
docker run -t --rm -p 5683:5683/udp --name coap-server deviavir/coap-server
```

### CoAp Client

```
cd ./coap-client
npm i
node client.js
```

_Update port in client.js to point to 5683 (server directly) or 5684 (one of the  lb's you're running)_


### Loadbalancers

```
docker build -t coap-pen-benchmark ./pen
docker run -p 5684:5684/udp -d --name coap-pen-benchmark coap-pen-benchmark

docker build -t coap-udpbalancer-benchmark ./udp-balancer
docker run -p 5684:5684/udp -d --name coap-udpbalancer-benchmark coap-udpbalancer-benchmark
```
