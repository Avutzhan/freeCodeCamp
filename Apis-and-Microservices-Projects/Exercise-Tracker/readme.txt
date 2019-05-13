Exercise Tracker REST API

A microservice project, part of Free Code Camp's curriculum

User Stories

I can create a user by posting form data username to /api/exercise/new-user and returned will be an object with username and _id.

I can get an array of all users by getting api/exercise/users with the same info as when creating a user.

I can add an exercise to any user by posting form data userId(_id), description, duration, and optionally date to /api/exercise/add. If no date supplied it will use current date. Returned will the the user object with also with the exercise fields added.

I can retrieve a full exercise log of any user by getting /api/exercise/log with a parameter of userId(_id). Return will be the user object with added array log and count (total exercise count).

I can retrieve part of the log of any user by also passing along optional parameters of from & to or limit. (Date format yyyy-mm-dd, limit = int)

Apis and Microservices Projects - Exercise Tracker

Build a full stack JavaScript app that is functionally similar to this: https://fuschia-custard.glitch.me/.

Working on this project will involve you writing your code on Glitch on our starter project. After completing this project you can copy your public glitch url (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.

Start this project on Glitch using this link or clone this repository on GitHub! If you use Glitch, remember to save the link to your project somewhere safe!