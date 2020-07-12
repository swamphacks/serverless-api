# Severless API

Serverless Typescript API deployed on AWS

<br/>

## Structure

### Files

- `src/`
  - `handlers`
  - `controllers`
  - `utils`
  - `models`
  - `tests`

### Architecture

> Everything is being hosting on AWS

- API Gateway
- Lambda
- DynamoDB

<br/>

## Contributing

### Git Flow

> Master is a protected branch – all commits must be made from a non-protected branch and submitted via a pull request

Please follow these naming conventions

- **feature/<`feature-name`>** – branched off of develop
- **hotfix/<`fix-name`>** – branched off of master

### Setup

Install the serverless cli

```bash
npm install -g serverless
```

Install dependencies

``` bash
yarn
```

Run the service offline

``` bash
yarn dev
```

### Tests

Run the test suite and get a coverage report

``` bash
yarn test
```

<br/>

