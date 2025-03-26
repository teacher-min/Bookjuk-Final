FROM node:16 AS build
WORKDIR /bookjuk_frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /bookjuk_frontend/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf