# Define variables
DOCKER_COMPOSE = docker-compose
DOCKER_COMPOSE_FILE = docker-compose.yml
WEB_CONTAINER = back

# Define rules
all: build

build:
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) build

up:
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) up -d

run:
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) up

down:
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) down

clean:
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) down -v

setup:
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) run --rm $(WEB_CONTAINER) python manage.py makemigrations
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) run --rm $(WEB_CONTAINER) python manage.py migrate
	
migrate:
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) run --rm $(WEB_CONTAINER) python manage.py migrate

makemigrations:
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) run --rm $(WEB_CONTAINER) python manage.py makemigrations

createsuperuser:
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) run --rm $(WEB_CONTAINER) python manage.py createsuperuser

shell:
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) run --rm $(WEB_CONTAINER) python manage.py shell

test:
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) run --rm $(WEB_CONTAINER) python manage.py test