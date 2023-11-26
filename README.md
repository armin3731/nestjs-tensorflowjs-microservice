<a href="https://github.com/armin3731/nestjs-tensorflowjs-microservice" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>

<p align="center">
  <img src="statics/nestjs-tensorflowjs-microservice-v3.png" width="800" alt="DeepLearning in Microservices" />
</p>

# DeepLearning in Microservices

Implementation of TensorFlowJs models in NestJs microservice architecture

## Description

This project consists of two microservices. The first microservice is called **_App_** and acts as a gateway. The App receives user's _Text_ and sends it to another microservice called **_Ai_** through a _gRPC_ connection. Ai analyzes the text and returns _toxicity_ as a boolean. Also, the type of toxicity is described in six different categories: `identity_attack`, `insult`, `obscene`, `severe_toxicity`, `sexual_explicit`, and `threat`. The results are produced from a pre-trained network in [_Pre-trained TensorFlow.js models_](https://github.com/tensorflow/tfjs-models/tree/master), specifically the [_Toxicity classifier_](https://github.com/tensorflow/tfjs-models/tree/master/toxicity). You can substitute your own model with the toxicity model and use this API for any custom application.

A straightforward illustration of the project is presented below:

<p align="center">
  <img src="statics/illustration_line.svg" width="500" alt="DeepLearning in Microservices" />
</p>

## Give it a Star! ⭐ 
If you liked the project and find it useful, support me by giving it a star 😉

## Installation

Clone the project

```bash
git clone https://github.com/armin3731/nestjs-tensorflowjs-microservice
```

Go to the project directory

```bash
cd nestjs-tensorflowjs-microservice
```

Install dependencies

```bash
npm install
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file (or simply rename **.env.example** file)

`AI_HOST`

`AI_RPC_PORT`

`APP_HOST`

`APP_HTTP_PORT`

`APP_RPC_PORT`

## Running the app

First, you need to run the App microservice:

```bash
# runs App microservice as default
$ npm run start

# or
$ npm run start app
```

Then open another terminal and run Ai microservice:

```bash
# Ai microservice
$ npm run start ai
```

**Note!** Starting the AI microservice will take some seconds because it loads the model at the start.

**Note!** To my dear friends from Iran. Use a tunneling system while running Ai microservice, because Google Cloud won't let you download the model.

If you use **.env.example** as your ENV variables, you will see a swagger API documentation on `http://localhost:3000/api`

## API Reference

#### Analyzing Toxicity

```http
POST /analyze_toxicity
```

| Parameter | Type     | Description                                                      |
| :-------- | :------- | :--------------------------------------------------------------- |
| `text`    | `string` | **Required**. The Text you want to find out if it's Toxic or Not |

## Screenshots

![API Screenshot](statics/api_screenshot.png)

![API Response](statics/responses.png)

## ToDo

- Caching the model to start faster
- Migration to Nest v10

## Tech Stack

**ML:** TensorflowJs

**Server:** Node, NestJs

## License

[MIT licensed](LICENSE).
