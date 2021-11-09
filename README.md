# Rest API with NodeJS + Fastify + Typescript + Jest (Boilerplate)

A fast, simple and clean Node.js RESTful API that is configured to deploy to serverless vis Azure, AWS, or Google Cloud.

# Environment Variables

Note: See the .env.example file for all accepted variables

```
WHITELIST: by default all domains with merce.io are allowed; however, if you wish to add more domains you can add an array of values. Values can be regex or simple strings. Use ### (as a delimiter) if you wish to have multiple values. By default, *.merce.io domains are allowed
SENTRY_DSN: For sentry
```

# Getting Started

Add an .env file to the directory and add your variables. See the .env.example file for more details.

After, fire up the application with NPM

```sh
# Install dependencies
npm install

# Run unit tests
npm test

# Start development live-reload server http://localhost:8082
npm run start:dev

# Start production server:
npm start

```

# Files and folders

- controllers: Business logic. Where the work is done (included some examples)
- middlewares: Intermediate logic to be executed before business code (authentication)
- constants.ts: Define port and server secret
- server.ts: API definition and server configuration (cors)

# CORS

Note: By default, only urls with a merce.io base domain can query against the API server. To set up your local environment so that it can query against the api, you will need to edit the host file located at /etct/hosts on your system and add the following line

```
127.0.0.1 local.merce.io
```

If you wish to connect without setting up the base domain you need to declare the `SECRET_KEY` variable in the env.

# Postman

Any request that doesn't have an origin, needs to pass in a secret key in the header

```
headers.ms_api_secret="qKrg48gVXXRNZH6X"
```

# Redis Cache

PRs Welcomed

# Unit Tests

PRs Welcomed

# Serverless Functions (FaaS)

## Deploy Locally via CLI

- To deploy to Google Cloud Functions or any other Cloud provider, you must first set up your .env variables for all 4 environments. See the deploy/.envs/example.env file for an example of what envs you will need
- Each env will have its file named after the branch: develop.env, staging.env, uat.env, and master.env and will reside in that same folder. Note: they are already added to .gitignore
- After you have envs set up, simply run `npm run deploy-gcp`
- The branch name will automatically get pre-fixed to your function name so there is no chance it will overwrite another function

