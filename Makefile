IMAGE_NAME=n8n-self-hosted

build:
	docker build -t $(IMAGE_NAME) .

run:
	docker run -it -p 5678:5678 $(IMAGE_NAME)

.PHONY: build run


