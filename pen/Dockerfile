FROM debian:jessie

RUN apt-get update && \
    apt-get install -y \
        pen && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

EXPOSE 5684

CMD ["/usr/bin/pen", "-ddddfrU", "5684", "192.168.99.100:5683"]