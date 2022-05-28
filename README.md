
# E-Commerce Backend

An E-Commerce Backend Javascript project, that handles get, post, put, delete requests, using sequelize and mysql.
Idealy to use with a store front end. 


## Screenshots

![Screenshot 2022-05-05 221622](https://user-images.githubusercontent.com/46641259/166921363-9f35784c-ce55-46c4-a1aa-4b8e29634a89.png)


## Demo

No Production Demo at this time. However, see below for .gif's that demo the usage.




## License

[MIT](https://choosealicense.com/licenses/mit/)


## Installation

Install my-project with node package manager

```bash
    git clone https://github.com/jamesthomasbester/NoteTakerApp.git
    cd ~/NoteTakerApp
    npm install
```
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

