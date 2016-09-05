FROM node:5.12.0

RUN mkdir -p /app/src
WORKDIR /app/src

COPY package.json /app/src
RUN npm install
COPY . /app/src

RUN npm install webpack-dev-server -g

CMD [ "npm", "start" ]
