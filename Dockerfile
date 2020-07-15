FROM node:12.13.0 as node
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/
ARG FRONTEND_ENV=dev
RUN npm run build:$FRONTEND_ENV
FROM nginx:1.16.1
COPY --from=node /app/dist/ /usr/share/nginx/html