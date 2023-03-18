FROM mysql

COPY .my.cnf /root/

RUN chmod 600 /root/.my.cnf

COPY initdb.sql /docker-entrypoint-initdb.d/ 

WORKDIR /



