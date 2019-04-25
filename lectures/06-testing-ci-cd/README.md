# Lecture Summary

In this lecture we have discussed testing and continuous integration / continuous delivery (CI/CD). We have seen how to setup testing framework in Node.js app and how to write basic integration and unit tests. We have also seen how to setup CI using Travis. Furthermore, we've seen how to configure continuous deployments with Travis.

Brief summary of tools that we've explored in this lecture:

1. Mocha     - Framework for testing javascript apps
2. Chai      - Assertion library 
3. Sinon     - Stubbing/mocking/faking dependencies in tests
4. Chance.js - Library for generating random data
5. supertest-koa-agent - Converts a Koa app into a supertest compatible agent instance
6. Travis    - Tool for practicing CI

We've also briefly discussed importance of testing and different approaches that can be used, specifically:
- Test-driven development
- Behavior-driven development

# Homework

Homework has 3 parts:

## 1. Write integration test for flow testing creating article with rude content

1. Add another test inside `/tests/integration/articles.test.js` file.
2. Stub "languageService" to return negative sentiment.
3. Verify correct behavior of API (e.g. validation error).


## 2. Write integration tests for users controllers to achieve ~ 95% test coverage for src/controllers/users.js

1. Create new file `/tests/integration/users.test.js`.
2. Write tests (similar to articles.test.js).


## 3. (OPTIONAL) Try to deploy your API to Heroku.
1. Try setting up account with Heroku if you don't have one (https://www.heroku.com).
2. Fork this repository (to make Travis work with your repo).
3. Setup account with Travis if you don't have one.
4. Allow Travis access to your forked repository.
5. Modify .travis.yml (specifically secret api key and repo) and deploy your API to Hereoku.

# Links

1. [Mocha](https://mochajs.org/)
4. [Chai](https://www.chaijs.com/)
2. [Sinon](https://sinonjs.org/)
3. [Travis](https://docs.travis-ci.com/)
5. [Heroku](https://www.heroku.com/)
