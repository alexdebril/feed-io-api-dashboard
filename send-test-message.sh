#!env bash

docker-compose exec fpm curl -X POST -H "Content-Type: application/json" -d '{"title": "Your magnificent item", "feed_url": "http://test.localhost"}' http://ws:8080/item
