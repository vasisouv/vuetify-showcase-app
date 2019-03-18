# build stage
FROM node:lts-alpine as build-stage
COPY nginx_config/nginx.conf /etc/nginx/nginx.conf
COPY nginx_config/default.conf /etc/nginx/conf.d/default.conf
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/generate-fake-data.js /usr/share/nginx/html/generate-fake-data.js
COPY --from=build-stage /app/start-json-server.sh /usr/share/nginx/html/start-json-server.sh
RUN apk add nodejs
RUN apk add nodejs-npm
RUN npm install -g json-server
RUN npm install -g faker
RUN export NODE_PATH=/usr/lib/node_modules
RUN npm link faker
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
CMD ["sh","/usr/share/nginx/html/start-json-server.sh"]
