# Node.js app Docker file

FROM kerryhatcher/neteoc-ui:latest

WORKDIR /opt/neteoc-server

COPY ./package.json /opt/neteoc-server
RUN npm install

COPY . /opt/neteoc-server

EXPOSE 3333




CMD ["npm", "start"]
