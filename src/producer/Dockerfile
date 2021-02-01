FROM node:14-stretch-slim

USER node

WORKDIR /home/node/src

COPY --chown=node:node index.js index.js

CMD ["node", "index.js"]