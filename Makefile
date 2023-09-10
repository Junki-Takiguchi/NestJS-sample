CONTAINER=docker compose exec app

build:
	docker compose build

up:
	docker compose up -d

down:
	docker compose down --rmi local -v

start:
	docker compose start

stop:
	docker compose stop

access:
	$(CONTAINER) /bin/bash

prettier:
	$(CONTAINER) npx prettier --write src

lint:
	$(CONTAINER) npx eslint src --fix

ts-node:
	$(CONTAINER) npx ts-node
