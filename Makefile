DOCKER_COMPOSE = docker compose
 
.PHONY: up
up: web
 
.PHONY: web
web: build
	$(DOCKER_COMPOSE) up -d web
 
.PHONY: build
build:
	$(DOCKER_COMPOSE) build --build-arg NODE_VERSION=`cat .node-version`
 
.PHONY: down
down:
	$(DOCKER_COMPOSE) down
