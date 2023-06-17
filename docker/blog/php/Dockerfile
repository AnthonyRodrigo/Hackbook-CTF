FROM php:8.1-apache

RUN apt-get update && \
    docker-php-ext-install mysqli pdo pdo_mysql

COPY ./src/blog/site/ /var/www/html

COPY ./src/blog/includes_php/ /var/www/
COPY ./docker/blog/php/conf/ /usr/local/etc/php
COPY ./docker/blog/php/global_apache_conf/ /etc/apache2/sites-enabled



