FROM node:16
RUN npm cache verify
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm","start"]