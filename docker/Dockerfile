FROM node:22-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY ../backend-my-estimate-me .
CMD ["npm", "run", "dev"]