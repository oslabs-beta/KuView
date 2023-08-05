<div align='center'><img width="autopx" src='https://github.com/oslabs-beta/KuView/assets/98173508/52791c2e-012b-4447-85f2-16383ffc9938'/>

---

## Tech Stacks

![Kubernetes](https://img.shields.io/badge/Kubernetes-326ce5?style=for-the-badge&logo=kubernetes&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-0db7ed?style=for-the-badge&logo=docker&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E7532D?style=for-the-badge&logo=prometheus&logoColor=white)
![Prometheus](https://img.shields.io/badge/Grafana-F69920?style=for-the-badge&logo=grafana&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![ReactRouter](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Node](https://img.shields.io/badge/-node-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/express-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Mongo](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

<div align='center'>

• [Introduction](#introduction) • [Prerequisites](#prerequisites) • [Getting started](#getting-started) • [Installation](#installation) • [Considerations](#considerations) • [Open Source](#open-source) • [Meet The Team](#meet-the-team) •

</div>
</div>

## Introduction

Kuview is an open-source tool for simplified Kubernetes metric visualization. It offers a customizable, interactive dashboard to track and monitor local Kubernetes clusters with real-time metrics in a user-friendly UI.

## Prerequisites

This application requires you to have Docker, Minikube, and kubectl installed in order to view your local kubernetes cluster. Please download based on your operating system from the official website or Github releases.

- Docker Desktop: [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)
- Minikube: [https://minikube.sigs.k8s.io/docs/start/](https://minikube.sigs.k8s.io/docs/start/)
- Kubectl: [https://kubernetes.io/docs/tasks/tools/](https://kubernetes.io/docs/tasks/tools/)

After these are installed, start Minikube with Docker:

- Open a terminal or command prompt and run `minikube start --driver=docker`. This will start the local Minikube cluster using Docker as the driver.
- To verify the status of your Minikube cluster, run `minikube status`.
- To interact with your minikube cluster, use the kubectl command line interface tools
- To stop and delete your Minikube cluster, you can run the commands `minikube stop` and `minikube delete`.

## Getting Started

To get started with opening the web application, first clonse this repo onto your machine. In order to have the application work, you will need to create an .env file to store your mongo-URI and a port for the express server to run on. Within your .env file please type the following:

```js
MONGO_URI = '<mongodb URI>';
PORT = 4000;
```

Once that file is created, open the terminal and install all the packages with

```bash
npm install
```

then type in

```bash
npm run dev
```

On your browser, localhost:8080 should appear, and you are now running our application!

If this is your first time using the application, you will need to register an account. If you have already have an account, proceed with logging in.

<img src="./public/gifs/register.gif" width="600px"/>

_Once you type in your username, password, and email, the application will direct you to login._

## Installation

After typing in your credentials and logging in, our application will automatically handle the installation of Prometheus and Grafana on your Kubernetes cluster through helm and apply our custom .yaml files.

<!-- insert gif? -->
