FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=cars_lorem

COPY ./db.sql /docker-entrypoint-initdb.d/