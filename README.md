# Cypress Example

## Required Technologies

- Install Docker Desktop: https://www.docker.com/products/docker-desktop

- Install docker-compose: https://docs.docker.com/compose/install/

## Build Steps

- After cloning the repo on your local, run `npm i` in your terminal to install dependencies
  - To launch containers for the practical application and MongoDB, run `docker-compose up` in your terminal
  - If previous step results in an error, attempt `sudo docker-compose up`
  - After the `swimlane-practical` container is created, visit http://localhost:3000 within a browser to access the application

## Run Tests

- To run Cypress tests, run either `npm run open` (for interactive GUI) or `npm test` (for headless test) in your terminal
