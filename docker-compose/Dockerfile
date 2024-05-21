FROM node 

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN apt-get update \ 
&& apt-get -y install vim 

RUN npm install express

RUN npm install http

RUN npm install tail

RUN npm install mysql 

COPY index.js /usr/src/app

CMD [ "node", "index.js" ]
