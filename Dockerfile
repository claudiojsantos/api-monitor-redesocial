FROM node:erbium-stretch-slim

RUN npm i -g @nestjs/cli@8.0.0

USER node

WORKDIR /home/node/app
