# Amazon Product Details Lookup

## Introduction

This project is built using Ruby on Rails for the backend and React for the frontend.

Since using Amazon API was out of the question I elected to scrape the information needed from the product page.

When a product is searched, the database is checked first to see if it exists there. If it is not in the database
then the product is scraped from the Amazon product page and then stored in the database before being presented to the user.

## Installation
```
bundle && yarn
rake db:setup
rake db:migrate
foreman start -f Procfile.dev-server
```

open http://localhost:3000/

## Run Test
```
rake
```
