FROM node:22

WORKDIR /app

COPY *.json . 

RUN npm install 

COPY . . 

RUN chmod -R 777 /app

EXPOSE 3000