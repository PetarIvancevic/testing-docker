FROM node:5.12.0

RUN mkdir -p /app/src
WORKDIR /app/src

RUN npm install -g webpack
RUN npm install -g webpack-dev-server
COPY . /app/src
