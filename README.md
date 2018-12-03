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

<sub>P.S. I had this deployed to heroku initially. But after I started using Watir (to read the HTML) which requires chromedriver, I could not get heroku to properly install chromedriver on the server. I apologize for the inconvenience in having to run this locally.</sub>

## Run Test
```
rake
```
