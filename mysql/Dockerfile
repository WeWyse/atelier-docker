FROM mysql:8.0.28

COPY .my.cnf /root/

RUN chmod 600 /root/.my.cnf

COPY initdb.sql /docker-entrypoint-initdb.d/ 

WORKDIR /



