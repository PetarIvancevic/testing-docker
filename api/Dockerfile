FROM node:5.12.0

RUN mkdir -p /app/src
WORKDIR /app/src

COPY package.json /app/src
RUN npm install
RUN npm install -g sequelize-cli

COPY . /app/src

CMD [ "npm", "start" ]
