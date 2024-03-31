# Kubernetes for Beginner
All credits to this tutorial on youtube: [https://youtu.be/s_o8dwzRlu4?si=VPK2q95JEhLg8BUN]([https://youtu.be/pg19Z8LL06w?si=31QRz2Dw8t_9kT2H](https://youtu.be/s_o8dwzRlu4?si=VPK2q95JEhLg8BUN))

## Concepts
### Component of Master Node
![image](https://github.com/chhatrachhorm/learn-container/assets/28259921/e36976a2-fc6c-4a60-88f4-eec0aa701f3c)
### Reference Architecture
![image](https://github.com/chhatrachhorm/learn-container/assets/28259921/001f84c8-6cc2-4d57-b862-2f4c7c32aa94)
### Component of Kubernetes
![image](https://github.com/chhatrachhorm/learn-container/assets/28259921/549bed7d-e87f-46cf-84f2-0968230566ce)


## Setup MiniKube for Local Experiments
Download the MiniKube from [here](https://minikube.sigs.k8s.io/docs/start/) for local setup.
MiniKube needs a containerized tool to run on. 
On Windows, install docker and use docker as the driver for MiniKube to run.
### Basic Commands
```bash
# start minikube with docker as driver
minikube start --driver docker

# check the status
minikube status

# get all info
kubectl get all

# Start with demo app
# create config and secret
kubectl apply -f ./k8s-demo/mongo-config.yml
kubectl apply -f ./k8s-demo/mongo-secret.yml

# create db
kubectl apply -f ./k8s-demo/mongo.yml

# deploy webapp
kubectl apply -f ./k8s-demo/webapp.yml

# get config map
kubectl get configmap
# get secret
kubectl get secret

# get node
kubectl get node
# get pod
kubectl get pod
# see pod detail
kubectl describe pod <pod_name>

# see log of pods
kubectl logs <pod_name>
# stream the logs
kubectl logs <pod_name> -f
```
### Troubleshoot Minikube Docker on Windows
It is possible that you will not be able to access external service (webapp from above config) from minikube IP due to network configuration in minikube.
There are many solution to test this, but the easiest way is to use minikube tunnel to the service
```bash
minikube service <service name like webapp-service>
```
Reference: https://stackoverflow.com/questions/71536310/unable-to-access-minikube-ip-address
