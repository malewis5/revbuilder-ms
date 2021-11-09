FROM node:14.8.0-alpine
RUN apk update
RUN apk add --no-cache ca-certificates ${additionalAlpinePackages}
WORKDIR /app
COPY . .
RUN npm install
ENV NODE_ENV=production
EXPOSE 8080
ENTRYPOINT ["npm", "start"]