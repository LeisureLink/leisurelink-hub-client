# LeisureLink Hub Client

> Node client to ease development against the Public API

[![CircleCI](https://circleci.com/gh/LeisureLink/leisurelink-hub-client.svg?style=svg)](https://circleci.com/gh/LeisureLink/leisurelink-hub-client)


## Table of Contents

* [Installation](#installation)
* [Basic Usage](#basic-usage)
* [API](#api)


### Installation

> Install using NPM

```bash
npm install leisurelink-hub-client --save
```

### Basic Usage

```js
import LeisureLink from 'leisurelink-hub-client';

const client = LeisureLink('some-api-key');

const pmcId = '123456'
client.current.fees.all(pmcId)
  .then(result => {

  })
  .catch(err => {
    // Do soething with the error
  });
```


### API

