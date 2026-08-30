FROM node:14-stretch-slim

USER node

WORKDIR /home/node/src

COPY --chown=node:node . .

RUN npm ci

EXPOSE 3000

CMD ["node", "index.js"]