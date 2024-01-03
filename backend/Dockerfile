FROM node

WORKDIR /app

COPY package.json .

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm
RUN npm install

COPY . ./

EXPOSE 8082

CMD ["npm", "start"]