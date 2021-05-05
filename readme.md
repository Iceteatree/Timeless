![Image of Timeless](https://i.ibb.co/K9BJW0r/Screenshot-from-2021-04-28-02-06-10.png)
# Project Name: Timeless

Project Timeless is a product page design that involves the advertising and selling of an up and coming signature watch brand.  It will feature seamless UI/UX content and contain all the logic needed for admin/user privileges as well as online-store functionality.

# Site
**Deployed to Heroku here
~~ https://timeless-watches-app.herokuapp.com/ ~~
NB. DO NOT CLICK SITE. DOWN FOR MAINTENANCE. TRYING TO FIX HEROKU DEPLOYMENT ISSUES.
PLEASE OPEN UP A LOCAL VERSION ON YOUR PC TO SEE APPLICATION. 

**If you're having trouble viewing the page please watch this video to see the
full functioning site in action.
https://youtu.be/edx3VZlrBRQ

# Installation

* Fork a copy
* Clone a copy using git. ``git clone https://github.com/Iceteatree/Timeless.git``
  * Example in terminal type *https://github.com/Iceteatree/Timeless.git*
  * Rename the local repository's current 'origin' to 'upstream'.
    *"git remote rename origin upstream"*
  * Give the local repository an 'origin' that points to your repository.
    *"git remote add origin https://github.com/your-account/your-repository.git"*
  * Push the local repository to your repository on github.
    *"git push origin master"*

* Alternatively under 'Code' click 'Download as Zip'
* Alternatively click [here]https://github.com/Iceteatree/Timeless/archive/refs/heads/main.zip


# Usage

* ``cd`` into main timeless folder.
* Make sure you have latest NPM components installed by typing ``npm install`` in terminal
* To run type ``npm start`` in terminal.
* Open another terminal
* ``cd`` into timeless frontend folder.
* Make sure you have latest NPM components installed by typing ``npm install`` in terminal
* To run type ``npm start`` in terminal.

### If you are an end-user
* Simply click this [link](https://timeless-watches-app.herokuapp.com/) to open website.
[![Website](https://i.postimg.cc/25hy0Qhh/Screenshot-from-2021-04-28-03-38-41.png)](https://postimg.cc/7CPq6TBZ)
### If you want to play with the admin functions use these login details:
```
email: admin@gmail.com
password: password
```
### If you would like to play with the code
* Open any of the files you would like to edit in the code editor of your choice. Example. Visual Studio Code.
[![Visual Studio Code Example](https://i.postimg.cc/Y9tr8JpB/Screenshot-from-2021-04-28-03-39-01.png)](https://postimg.cc/wtbYj4yw)

# Testing
* If you would like to run the test modules do the following:
  * ``cd`` into main folder
  * Type ``npm test`` into console to run server tests.

  * ``cd`` into frontend folder
  * Type ``npm test`` into console to run frontend tests.

# Third part APIS?
There is only one 3rd part API that we are using.
The app uses the ``Stripe`` payment API.

# Software requirements documentation

This document will be split into two main sections.
1) **System Architecture**
2) **System Requirements Specification**

## System Architecture

### Stack Choice
Those chosen web stack that we will be using to design this web application is the **MERN** stack.

### Motivation
The reason why I've chosen to use the **MERN** stack is because it is an unopinionated stack that allows total freedom in how the developer gets to work to get to the final product. I am really excited to use **React** and in particular Create-React-App for the frontend because I can see the benefits it provides and because I'm the most comfortable with it so far, therefore I am able to push my own abilities farther than they already are. I will be using **Redux** for my state management. I am using **Express** and **Node js** to power the backend and am connecting that to a **Mongo** database. With these in place I can reliably assume that my application will always have 100% run time and can easily scale in the future if I need it to.

### Deployment
The site will be deployed to **Heroku**. They not only have multiple servers around the world ensuring reliability but also all the server side logic can be handled by them allowing me the developer to concentrate more on the controller logic.

### Styling
We will be making use of **Bootstrap** and standard **CSS** for the styling. Bootstrap not only allows use to save time by having beautiful default components but also allows all those components to be responsive as well. This makes the transition between phones and large screens a breeze.

## System Requirements Specification
### How will app work?
This app will be a single page application that advertises the Timeless brand watches. The end user will load onto this landing page that basically contains different components that all are located further down the page. It will have a registration and login page functionality. If not logged in the user will not be able to purchase any items. So authentication will be directly linked to ability to purchase.  There will be multiple call to actions components that show off the product. We will have basic shopping cart functionality. The actual purchasing will be handled by Stripe. There will be no loading into other pages. Everything should be handled by modals that pop up. Either that or we use re-rendering to show the different routed paths. Users will be able to use CRUD functions by posting, editing and deleting product reviews. The admin account will be able to use CRUD functions to add more products to the website. One of these will definitely be implemented in the final version.

### Functional and Non-Functional Requirements

#### Functional Requirements
- The web application shall create new users within a database that will contain that users information.
-  The web application shall maintain and store user and product data.
- The web application shall have a dedicated admin page, where the admin in question can edit product information from the database.
- The web application will have a normal login/registration authentication method.
-  The web application will allow products to be bought.
- The web application will implement a payment system.
- The web application shall implement a review system where the user can add, edit and delete their reviews.

#### Non-Functional Requirements
-  #### Usability
	- The web application shall have a clean, executive interface.
	- The web application shall have a great user experience.
	- The web application shall be documented.
-  #### Reliability
	- The web application shall have a robust backend that has multiple global servers which can act as nodes/backups in the event of failure.
	- The web application shall be divided into smaller modules and components to ensure that it is easy to create tests.
	- The web application shall be tested by multiple developers to ensure reliability.
-  #### Performance
	- The web application will be responsive and performs as smoothly as possible for the users.
	- The web application will inform the user if there are performance issues. (Loading screen and the like)
	- The web application will have a quick recovery time in the event of a failure.
	- The web application shall have a low resource usage on the end users side.
	- The web application shall be cost-effective to maintain.
-  #### Security
	- The web application shall use the latest in web encryption technologies to secure user data.
	- The web application shall inform all relevant parties if a data breach has been detected.

### Users
The people who would use this application are people who enjoy shopping and in particular online-shopping.

### User Stories

 1. As an admin, I can create, edit and delete different products so that I am able to continually inform end-users of the latest products.
 2. As an admin, I want to have access to analytical tools that present easy to understand processed data so that I can improve on my end user experience.(For the future though, definitely not achievable in this project)
 3. As an end-user I want to have a seamless user experience so that I can recommend this website to my friends and family.
 4. As an end-user I want to know that my data is being kept securely so that I do not have to worry if someone has logged into my account and stolen my personal information.
 5. As an end-user I want to be able to see and easily purchase products so that I do not have to waste time scrolling through pages and pages of useless products.
 6. As an end user I want to be able to have a variety of payment options, so that I can conveniently use the payment option I'm most comfortable with.

### Product Comparison

- My product doesn't have complex menus. Everything is easily accessible and understandable.
- Offers a better cost to product ratio than competitors.
- The shopping experience will be smooth.
- A point system that allows the user to exchange for coupons and the like.(To be implemented in the future...possibly...maybe.)


# Credits
### Tutorials
* [Redux Crash Course with React - Brad Traversy](https://www.youtube.com/watch?v=93p3LxR9xfM)
* [Complete React Tutorial(with Redux) - Net Ninja](https://youtube.com/playlist?list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG)
### Bootcamp
* [HyperionDev](https://www.hyperiondev.com/)
* If you would like to leave any feedback and suggestions please feel free to contact me.

##### Alan Kow | Copyright 2021 |
