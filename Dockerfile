FROM node:18

WORKDIR /usr/src/

COPY . .

EXPOSE 5000

RUN npm i
RUN npm run build

CMD ["npm","run","start:prod"]