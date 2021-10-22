# qa-infrastructure-engineer-practical

## Required Technologies
- Install Docker Desktop: https://www.docker.com/products/docker-desktop

- Install docker-compose: https://docs.docker.com/compose/install/

## Build Steps

- After cloning the repo on your local, run `npm i` in your terminal to install dependencies
  - To launch containers for the practical application and MongoDB, run `docker-compose up` in your terminal
  - If previous step results in an error, attempt `sudo docker-compose up`
  - After the `swimlane-practical` container is created, visit http://localhost:3000 within a browser to access the application
- To run Cypress tests, run either `npx cypress open` (for interactive GUI) or `npx cypress run` (for headless test) in your terminal