FROM node:21.7.2-slim

WORKDIR /app

# OS settings
ENV PATH /app/node_modules/.bin:$PATH

# OS lib 
# ps... used for hot-reloading development
# curl... potentially used for self-healthchecking on ECS
RUN apt-get update -qq \
    && apt-get install -qy  \
    curl \ 
    procps \
    --no-install-recommends

# commands

RUN npm install -g prisma@4.16.2

# node_module packages
COPY package*.json ./
RUN npm install

# app code
COPY . .

RUN prisma generate

USER node

CMD [ "npm", "run", "start"]
