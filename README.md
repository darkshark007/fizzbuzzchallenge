# Fizz Buzz Challenge
Welcome to PointSixSolutions (a JACL company). We created a simple challenge to incorporate a few elements of our technology stack, and learn more about your coding proficiency and style. Please read the following instructions carefully and complete this challenge. Enjoy!

## Our current software stack
 * Github source control and SCM
 * Travis CI continuous integration and testing server
 * API Gateway
   * Kong API Gateway with Postgres backing
 * Kubernetes managing Docker containers
   * various microservice applications in Node/Express, Python, Golang, C#, or Java
   * APIs serving REST and GraphQL interfaces
   * React / Redux client web apps
   * native mobile client apps
 * Cloud functions
   * Google Cloud Functions (later to migrate to OpenFAAS or similar)
 * Cloud databases
   * Elasticsearch
   * Postgres
   * Redis

## Challenge Part 1
 * Create a free Google Cloud account
 * Create a Google Cloud Function (HTTP) exposing a Fizz Buzz function
   * accept number `max_range`
   * if `max_range` doesn't exist, default to `100`
   * if `max_range` is not a valid number, return `400` error with message
   * iterate from 0 to `max_range` and return output to client with `200` status
   * look up Fizz Buzz for output requirements

## Challenge Part 2
 * Create an API client in your favorite language
 * Package your client in a Docker container (build with Dockerfile)
   * client app will call cloud function and print output to log (stdout)
   * accept ENV override params for:
     * `FUNCTION_URL` (required)
     * `MAX_RANGE` (default 100 if doesn't exist)

## Challenge Part 3
 * Create a Github repo with your client application and share link
   * Include Dockerfile, README, and ignore files in root dir
   * Include your client app source
   * Add a `function` folder and include the `index.js` and `package.json` source of your cloud function

## Expectations
After completing the challenge, please email your company contact with the URL to your Github repository. We expect to be able to clone your repo and build and run your client app in a Docker container. We expect the variable naming to match the specification above, and proper handling of error/edge conditions so your application is reliable.

If you are not well-versed with Docker, it's understandable if you need to get it installed and learn the basic commands. 
 * Part 1/2 should provide enough information to complete this challenge:
   * https://docs.docker.com/get-started/
