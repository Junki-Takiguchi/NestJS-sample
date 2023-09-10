FROM node:latest
WORKDIR /workspace/app
RUN npm install typescript \
    @types/node \
    ts-node

# prettier
RUN npm install prettier

# ESLint
RUN npm install eslint \
    @typescript-eslint/parser \
    @typescript-eslint/eslint-plugin

# ESLint config for Airbnb
RUN npm install eslint-config-airbnb-base \
    eslint-plugin-import \
    eslint-config-airbnb-typescript

# install nest js
RUN npm install -g @nestjs/cli

# install ORM
RUN npm install prisma

RUN npm install
