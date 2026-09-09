FROM node:24

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build -w demo-service

CMD ["npm", "run", "start", "-w", "demo-service"]