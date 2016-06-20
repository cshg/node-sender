# node docker base image
FROM node:4-onbuild

# official maintainer
MAINTAINER Christian Haug

# create src directory
RUN mkdir -p /src
WORKDIR /src

# copy dependency file and install dependencies
COPY package.json /src
RUN npm install

# copy further files
COPY . /src

# container port to expose
EXPOSE 8080

# run server
CMD ["node", "server.js"]


