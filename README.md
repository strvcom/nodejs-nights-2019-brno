# Node.js Nights 2019 Brno

## Lecture materials
Here you can find a list of past lessons:

1. [Javascript](./lectures/01-javascript/README.md)

## Lecture Recordings
Here you can find a list of past lecture recordings:

1. [Javascript](https://www.youtube.com/watch?v=2kEYHM8xRcg)
2. [Nodejs](https://www.youtube.com/watch?v=41Hc05L5eJ8&feature=youtu.be)
3. [Project setup](https://www.youtube.com/watch?v=dVmmCZA3g2k&feature=youtu.be)


## Migrations


### Create new migration
npx knex migrate:make create_users --cwd ./src/database --knexfile ./../config/knexfile.js

### Run migrations
npx knex migrate:latest --cwd ./src/database --knexfile ./../config/knexfile.js

### Run seeds
npx knex seed:run --cwd ./src/database --knexfile ./../config/knexfile.js