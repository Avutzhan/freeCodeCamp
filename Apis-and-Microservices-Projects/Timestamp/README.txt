Apis and Microservices Projects - Timestamp Microservice

Build a full stack JavaScript app that is functionally similar to this: https://curse-arrow.glitch.me/.

Working on this project will involve you writing your code on Glitch on our starter project. After completing this project you can copy your public glitch url (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.

Start this project on Glitch using this link or clone this repository on GitHub! If you use Glitch, remember to save the link to your project somewhere safe!

User Stories (WIP):

The API endpoint is GET [project_url]/api/timestamp/:date_string?

A date string is valid if can be successfully parsed by new Date(date_string).
Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds.
In our test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this will ensure an UTC timestamp.

If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.

If the date string is valid the api returns a JSON having the structure
{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }
e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}

If the date string is invalid the api returns a JSON having the structure 
{"error" : "Invalid Date" }.

Example Usage:
[project url]/api/timestamp/2015-12-25
[project url]/api/timestamp/1450137600

Example Output:
{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}

by freeCodeCamp