FROM node:22

WORKDIR /app

COPY *.json . 

RUN npm install 

COPY . . 

EXPOSE 3000