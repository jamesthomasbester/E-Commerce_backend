
# E-Commerce Backend

An E-Commerce Backend Javascript project, that handles get, post, put, delete requests, using sequelize and mysql.
Idealy to use with a store front end. 


## Screenshots

![e-com](https://user-images.githubusercontent.com/46641259/170813661-78722f1d-0f79-4db2-8bba-b9cc58398717.png)

## Demo

No Production Demo at this time. However, see below for .gif's that demo the usage.

![ecom](https://user-images.githubusercontent.com/46641259/170813712-b5e59d2f-544e-4e4a-bdf0-83fb5c6975ec.gif)

![ecom2](https://user-images.githubusercontent.com/46641259/170813856-1931e82d-9906-4f53-a0f3-37eb3196e5e0.gif)


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Installation

Install my-project with node package manager

```bash
    git clone https://github.com/jamesthomasbester/E-commerce_backend.git
    cd ~/E-commerce_backend
    npm install
```
![start](https://user-images.githubusercontent.com/46641259/170813866-76d5ce10-4bdc-4d60-a1a5-31630c06076d.gif)

Mysql is a requirment to persistantly store data.
https://www.mysql.com/downloads/

### API Platforms:

https://www.postman.com/downloads/ (Postman) 

https://insomnia.rest/download (insomnia)
## Deployment

sequelize uses dotenv for credentials. so you need an .env in the root folder that is configured.

DB_NAME=ecommerce_db

DB_USER=<username>

DB_PW=<password>

## MYSQL

To Create the database in SQL open a sql commandline session

```bash
  SOURCE <PATH TO : db\schema.sql>
```
To seed the database open a terminal session inside the project
```bash
  node ./seed/index.js
```
Finally to start the service
```bash
  npm start
```



## Acknowledgements

 - [Monash University](https://www.monash.edu/) providing the template for the project.
 



## Feedback

If you have any feedback, please reach out to us at jamesthomasbester@gmail.com

