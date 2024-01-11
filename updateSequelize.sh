#!/bin/bash

node node_modules/sequelize-auto/bin/sequelize-auto -o "./src/lib/server/models" -d bjelopic -h localhost -u bjelopicUser -p 3306 -x gaser123 -e mariadb -l ts
