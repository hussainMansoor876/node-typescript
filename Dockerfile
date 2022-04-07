FROM node:16 as server
WORKDIR /root/

COPY package*.json ./

RUN yarn

# Copy local code to the container image.
COPY . ./

CMD [ "yarn", "start" ]