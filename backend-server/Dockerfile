FROM node:10.15.1-alpine

WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production
COPY . .

CMD npm start