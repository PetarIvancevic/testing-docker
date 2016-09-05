FROM node:5.12.0

RUN mkdir -p /app/src

WORKDIR /app/src
RUN npm install -g sequelize-cli
RUN npm install -g nodemon
COPY . /app/src
