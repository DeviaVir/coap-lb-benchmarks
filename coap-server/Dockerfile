FROM node:4.1

MAINTAINER Chase Sillevis <chase@pebble.com>

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app

ADD . /opt/app

EXPOSE 5684

CMD ["node", "server.js"]