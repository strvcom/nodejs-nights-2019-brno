# Database & Docker

## Database & Docker

This lecture was meant to talk about databases and how to setup the database connection to your project. For this lecture purpose, we are using [PostgreSQL](https://www.postgresql.org/download/) - a Relational Database Management System (RDBMS) - and we are using the [Objection.js](http://vincit.github.io/objection.js/) module to query the data and create all table structures.

# Homework

1. Set a database for your project
2. Setup your ORM
3. Create your tables & models
4. Update the repository modules
4. Create Dockerfile
5. [OPTIONAL] Setup a different ORM

The homework for this week will consist basically into setting a database & docker and using it in your project.

## 1. Set a database for your project

Install Docker from [this link](https://store.docker.com/search?type=edition&offering=community) and use a PostgreSQL image like [this one](https://hub.docker.com/_/postgres/).
After setting up your system and creating the database (if needed), you can use this branch as a reference on how to create a connection to the database.

Add docker-compose.yaml into project root directory

`docker-compose up -D` in your project root directory

## 2. Setup your ORM

As you can see in this repository, we are already using [Objection.js](http://vincit.github.io/objection.js/) in this branch. You can use the `src/config/default.js` and `src/databases/index.js` here as an example to setup your connection.
Also, don't forget to follow the Objection.js [installation](http://vincit.github.io/objection.js/#installation) steps to ensure that you have installed all your dependencies.

Also if you want to use migrations and seeds CLI please create `knexfile.js`

## 3. Create your tables & models

In this repository you will find the database structure inside the `src/database/migrations` folder. Those migrations are created using [Knex](https://knexjs.org/) module (this module is a dependency to use Objection.js) and, in a nutshell, they will be translated to SQL commands with the table representation.

To create a new migration you need to use the following command:
```shell
npx knex migrate:make NAME_OF_THE_MIGRATION --cwd ./src/database --knexfile ./../config/knexfile.js
```

To create a seed file you need to use following command:
```shell
npx knex seed:make NAME_OF_THE_SEED_FILE --cwd ./src/database --knexfile ./../config/knexfile.js
```

To run a migrations:
```shell
npx knex migrate:latest --cwd ./src/database --knexfile ./../config/knexfile.js
```

To run a seed:
```shell
npx knex seed:run --cwd ./src/database --knexfile ./../config/knexfile.js
```

1. Create migrations for your tables
2. Run migrations
3. Create seed file for your tables
4. Run seed
5. Create models

## 3. Update the repository modules

Now that you have your ORM working in the project and your database and tables were created, you can start to update the code to query the database. Feel free to use this repository as a reference to guide you through your changes.

## 4. Dockerfile

Now we can create container for our application. You can see example Dockerfile included in project root

You can build this Dockerfile using this command:
```shell
docker build -t nodejsnights2019:v1 .
```

You can run created image by using this command:
```shell
docker run nodejsnights2019:v1 -e DB_URI=postgresql://postgres@localhost:5432/nodejsnights
```

## 5. [OPTIONAL] Setup a different ORM

This is an optional step, but it will help you get a better understanding of how useful are the abstractions that we did in previous lessons.
I would suggest for you to try to setup and work with [Sequelize](http://docs.sequelizejs.com/) as it's also one of the "big players" when we talk about ORMs for Node.js.


# Useful Links

- Docker download: [https://store.docker.com/search?type=edition&offering=community](https://store.docker.com/search?type=edition&offering=community)
- PostgreSQL Docker image: [https://hub.docker.com/_/postgres/](https://hub.docker.com/_/postgres/)
- pgAdmin download: [https://www.pgadmin.org/download/](https://www.pgadmin.org/download/)
- Postico download [https://eggerapps.at/postico/](https://eggerapps.at/postico/)
- Objection.js documentation: [http://vincit.github.io/objection.js/](http://vincit.github.io/objection.js/)
- Knex Migrations documentation: [https://knexjs.org/#Migrations](https://knexjs.org/#Migrations)