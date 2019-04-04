# Node.js Nights 2019 Brno

## Migrations


### Create new migration
npx knex migrate:make create_users --cwd ./src/database --knexfile ./../config/knexfile.js

### Run migrations
npx knex migrate:latest --cwd ./src/database --knexfile ./../config/knexfile.js

### Run seeds
npx knex seed:run --cwd ./src/database --knexfile ./../config/knexfile.js