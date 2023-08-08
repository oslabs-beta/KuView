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

KuView is an open-source tool for simplified Kubernetes metric visualization. It offers a customizable, interactive dashboard to track and monitor local Kubernetes clusters with real-time metrics in a user-friendly UI.

## Prerequisites

This application requires you to have Docker, Minikube, and Kubectl installed in order to view your local kubernetes cluster. Please download based on your operating system from the official website or Github releases.

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

**We would highly recommend installing [HomeBrew](https://brew.sh/) manually before using KuView** to avoid possible installation issues.

<img src="./public/gifs/installation.gif" width="600px"/>

The dashboard will be saved onto your account and be displayed afterwards.

<img src="./public/gifs/customize.gif" width="600px"/>

You can now view your cluster metrics in real-time, and the dashboard will update automatically. Feel free to personalize the dashboard and rearrange the layout to your preference!

## Considerations

**As kuView is still early in it's development stage, There are a few things to keep in mind when using this application.**

### Port

KuView requires a number of defult ports to operate. Please **avoid** using the ports listed below.

For more information, execute the following command in your terminal `kubectl get services` after login for the first time.
| Port | Application |
|:---:|:-------------------|
| **8080** | Kuview Dashboard |
| **4000** | Express |
| **9090** | Prometheus |
| **3000** | Grafana |

### Accounts

Currently we are having issue loading the dashboard for any subsequent user, this is duo to a conflict in grafana. Upon a new user login, KuView's attempt to create a new Grafana dashboard with the same name as a previously created one. for a smooth experience, please only use **one** account for the time being.

If you need to create and use a new account, before login please follow the steps listed below:

- Execute the following command in your terminal `kubectl port-forward service/prometheus-grafana 3000:80`
- Once on the dashboard, go to the "Dashboard" section and locate the "General" folder.
- Within the "General" folder, delete the KuView dashboard to prevent any conflicts.

## Contributions

If you would like to contribute and make KuView a better Open Source Porject,we welcome you with open arms.

Below lists a table of features we currently have and future plans.

<div style="display: flex; ">

|        Feature         | Status |
| :--------------------: | :----: |
| Automate installation  |   🎉   |
|  Grafana yaml config   |   🎉   |
|    Custom dashboard    |   🎉   |
|   Password ecryption   |   🎉   |
| Jest Front-end Testing |   🎉   |
| Jest Back-end Testing  |   ⏳   |
| Typescript conversion  |   ⏳   |
|      Alert System      |   🙌   |
| Node health Visualizer |   🙌   |
|   Cluster Visualizer   |   🙌   |

<div style="display: flex; margin-left: 30px; margin-top: 25px ">

- 🎉 = **Completed!**
- ⏳ = **In Development!**
- 🙌 = **Open for Contribution!**

</div>
</div>

## Creators

|       Creators        |                                                                                                                           GitHub                                                                                                                            |                                                                                                                                   LinedIn                                                                                                                                   |
| :-------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Cameron Kirksey** | <a href="https://github.com/CameronKirksey21" target="blank"><img align="center" src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-github-1.png&r=56&g=136&b=255" alt="github" height="30" width="30" /></a> |    <a href="https://www.linkedin.com/in/cameronkirksey/" target="blank"><img align="center" src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-linkedin-3.png&r=56&g=136&b=255" alt="github" height="30" width="30" /></a>    |
|   **Eric Esposito**   |   <a href="https://github.com/Ericesposito" target="blank"><img align="center" src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-github-1.png&r=56&g=136&b=255" alt="github" height="30" width="30" /></a>   |  <a href="https://www.linkedin.com/in/eric-andre-esposito" target="blank"><img align="center" src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-linkedin-3.png&r=56&g=136&b=255" alt="github" height="30" width="30" /></a>  |
|    **Eric Rennie**    |   <a href="https://github.com/ericmrennie" target="blank"><img align="center" src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-github-1.png&r=56&g=136&b=255" alt="github" height="30" width="30" /></a>    |     <a href="https://www.linkedin.com/in/ericmrennie/" target="blank"><img align="center" src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-linkedin-3.png&r=56&g=136&b=255" alt="github" height="30" width="30" /></a>      |
|    **Jason Yeung**    |    <a href="https://github.com/JasonY000" target="blank"><img align="center" src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-github-1.png&r=56&g=136&b=255" alt="github" height="30" width="30" /></a>     | <a href="https://www.linkedin.com/in/jason-yeung-yat-shun/" target="blank"><img align="center" src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-linkedin-3.png&r=56&g=136&b=255" alt="github" height="30" width="30" /></a> |
|    **Richard Dao**    |    <a href="https://github.com/daorichard" target="blank"><img align="center" src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-github-1.png&r=56&g=136&b=255" alt="github" height="30" width="30" /></a>    |         <a href="https://www.linkedin.com/in/rdao" target="blank"><img align="center" src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-linkedin-3.png&r=56&g=136&b=255" alt="github" height="30" width="30" /></a>          |
