FROM node:5.12.0

RUN mkdir -p /app/src
RUN mkdir -p /app/install

COPY package.json /app/install
WORKDIR /app/install
RUN npm install
RUN npm install webpack-dev-server -g
ENV NODE_PATH=/app/install/node_modules

WORKDIR /app/src
COPY . /app/src

CMD [ "npm", "start" ]
