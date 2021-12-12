FROM node:14

COPY . /app

WORKDIR /app

RUN npm install
RUN npm install express
RUN npm install mysql
RUN npm install nodemon

COPY . .

EXPOSE 3000

COPY ./wait.sh /wait.sh
RUN chmod +x /wait.sh