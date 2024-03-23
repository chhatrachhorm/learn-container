# Docker for Beginner
All credits to this tutorial on youtube: [https://youtu.be/pg19Z8LL06w?si=31QRz2Dw8t_9kT2H](https://youtu.be/pg19Z8LL06w?si=31QRz2Dw8t_9kT2H)

## Setup
For windows, download the Docker Desktop and install it.

## Basic Command
```bash
# to list down images
docker images

# to download image
# examples:
docker pull nginx:1.25

# to run container in foreground
docker run nginx:1.25

# to run container in background (--detach mode)
docker run --detach nginx:1.25
docker run -d nginx:1.25

# to run container with port binding (--publish)
docker run --detach --publish 9000:80 nginx:1.25
docker run -d -p 9000:80 nginx:1.25

# to run container with name
docker run --name web_server --detach --publish 9000:80 nginx:1.25

# to stop container
docker stop <container_id>

# to remove container
docker remove <container_id>

# to start container (from previous stopped)
docker start <container_id>


# to list down running container
docker ps

# to list down containers
docker ps --all
docker ps -a

# to see logs of container
docker logs <container_id>
```

## How to build docker container from docker file
```bash
# build one time of the image of that tag
docker build --tag dockerfile-demo-container:1.0 ./dockerfile-demo
docker build -t dockerfile-demo-container:1.0 ./dockerfile-demo

# see the new image
docker images

# to test run the image
docker run --name dockerfile_demo_app --detach --publish 3000:3000 dockerfile-demo-container:1.0
```

## Basic dev-op workflow
![image](https://github.com/chhatrachhorm/learn-docker/assets/28259921/f2ad7d49-dbba-4378-9218-d63ac2379956)
