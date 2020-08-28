FROM ubuntu:latest
FROM node:latest

RUN mkdir /public
WORKDIR /public

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
