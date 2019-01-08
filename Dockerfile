FROM ubuntu:latest

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt update \
    && apt install -y build-essential curl mc vim wget git python python3 net-tools \
    && apt -y autoclean

ENV TERM linux
ENV DEBIAN_FRONTEND noninteractive
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 10.14.1

RUN mkdir -p $NVM_DIR

# install nvm https://github.com/creationix/nvm#install-script
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# confirm installation
RUN node -v
RUN npm -v
