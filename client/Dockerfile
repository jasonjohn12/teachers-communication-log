# base image
FROM node:10.14.2

# Create app directory
RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/

# install and cache app dependencies
RUN npm install
# start app
CMD [ "npm", "start" ]