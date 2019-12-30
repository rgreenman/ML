# Hello and welcome to my first Python and Angular 8 full stack app!

## Introduction
The goal was to get familiar with both, and then to implement some sort of Machine Learning algorithm.

  First and Foremost we thank Joooosh and Joel for Python/Intellij/Angular set up help and guidance, second Josh (Joooosh and Josh are 2 seperate people) for picking out the idea of an application that monitors Crypto Markets to make predictions on future and determine it's accuracy over time.

### Public API
* https://github.com/binance-exchange/binance-official-api-docs/blob/master/rest-api.md

### Websites
* https://www.binance.com/en
* https://coinmarketcap.com/

**Disclaimer**
  I am not sure if this even needs to be stated, but in the case someone finds this and gets mad. This is intended as a learning exercise at it's core and is not intended to be a money making scheme. Nominal wagers may be placed in each to see growth and how accurate the application can be, but gambling on predictions and looking to pull a profit is not the intent! So please do not pull this repo with that intent.
  
  ## Set up
    
  As stated above the application is full stack with a Python backend, Mysql database and Angular 8 frontend. I am not great with set up and what not but I am assuming to pull and run you will need to have a working Python enviorment. I use Intellij and for that I needed to use a venv and a pipenv for package management. The hope is pulling down the set up given will already just work if you run `main.py`. On the db side you will need to install a MySql instance with the following credentials
  - host = "localhost"
  - user = "root"
  - password = "devdb"
  - db = "ml"
  
  After installing MySql and creating the database,  I decided to use flyway for SQL version control
  https://flywaydb.org
  Follow the instructions for the command line set up and when asked to modify the config file use the following:
  url=jdbc:mysql://localhost:3306/ml - Note your port might be different if you picked something else
  user=root
  password=devdb
  
  Then to run the existing scripts to set up your table go into the SQL folder in this project and move it's contents to youe local flyway folder ( Wherever you downloaded it to). From there a simple `flyway migration` from the flyway folder should run the SQL scripts locally and set up your db!
  
  For the frontend you will need to install angular 8 and the cli
  https://www.javatpoint.com/angular-8-installation
  
  And let's say that all worked out for you below are the following steps.
  1) In the angular folder run `ng build --watch` the --watch is only needed if you wanna have hot loading on the frontend 
  2) In the Python folder `python main.py`
  
  Did it work? If it did you should see a running app on port 5000. You can currently make and delete projects that don't do anything! But it's a good way to test the db connection!
  
## Future

  And it's all downhill from here, but adding TensorFlow, Keras, and a scraper for the crypto data seem like reasonable next steps  
 
