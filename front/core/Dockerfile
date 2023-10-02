FROM node:16.5.0

ENV PORT 3000
EXPOSE 49153
# Create app directory
#&& chown :root /usr/src/frontend/ && chmod g+rwX /usr/src/frontend/
WORKDIR /front

# Installing dependencies
COPY package*.json /front/

RUN npm install

# Copying source files
COPY . /front

# Building app
#RUN npm run build