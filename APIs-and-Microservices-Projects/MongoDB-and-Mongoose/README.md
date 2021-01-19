### Introduction to the MongoDB and Mongoose Challenges

MongoDB is a database that stores data records (documents) for use by an application. Mongo is a non-relational, "NoSQL" database. This means Mongo stores all data associated within one record, instead of storing it across many preset tables as in a SQL database. Some benefits of this storage model are:

+ Scalability: by default, non-relational databases are split (or "sharded") across many systems instead of only one. This makes it easier to improve performance at a lower cost.
+ Flexibility: new datasets and properties can be added to a document without the need to make a new table for that data.
+ Replication: copies of the database run in parallel so if one goes down, one of the copies becomes the new primary data source.

While there are many non-relational databases, Mongo's use of JSON as its document storage structure makes it a logical choice when learning backend JavaScript. Accessing documents and their properties is like accessing objects in JavaScript.

Mongoose.js is an npm module for Node.js that allows you to write objects for Mongo as you would in JavaScript. This can make is easier to construct documents for storage in Mongo.

Working on these challenges will involve you writing your code on Glitch on our starter project. After completing each challenge you can copy your public glitch url (to the homepage of your app) into the challenge screen to test it! Optionally you may choose to write your project on another platform but it must be publicaly visible for our testing.

Start this project on Glitch using this link or clone this repository on GitHub! If you use Glitch, remember to save the link to your project somewhere safe!

### Use mLab to host a free mongodb instance for your projects

+ Create an mLab account.
+ Create a free online database.
+ Create a new admin user on the database, so you can access it.
+ Get the mLab URI, which you will use in your application to connect to your database.


1. Install and Set Up Mongoose
1. Create a Model
1. Create and Save a Record of a Model
1. Create Many Records with model.create()
1. Use model.find() to Search Your Database
1. Use model.findOne() to Return a Single Matching Document from Your Database
1. Use model.findById() to Search Your Database By _id
1. Perform Classic Updates by Running Find, Edit, then Save
1. Perform New Updates on a Document Using model.findOneAndUpdate()
1. Delete One Document Using model.findByIdAndRemove
1. Delete Many Documents with model.remove()
1. Chain Search Query Helpers to Narrow Search Results

You can see this app online on Glitch [link](https://rectangular-ceiling.glitch.me "app")

Check out the code in github repository

