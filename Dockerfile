FROM node:10

RUN mkdir -p /app/node_modules && chown -R node:node /app

WORKDIR /app

COPY package*.json ./

USER node
RUN npm install

COPY --chown=node:node ./src ./src

EXPOSE 3000

CMD [ "node", "src/app.js" ]