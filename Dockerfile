FROM node:alpine

ADD . /app
WORKDIR /app

RUN npm install

CMD npm run start