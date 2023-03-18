FROM node 

WORKDIR /usr/src/app

RUN apt-get update \ 
&& apt-get -y install vim 

RUN npm install express

RUN npm install http

RUN npm install tail

RUN npm install mysql 

RUN mkdir -p /usr/src/app

COPY index.js /usr/src/app

CMD [ "node", "index.js" ]
