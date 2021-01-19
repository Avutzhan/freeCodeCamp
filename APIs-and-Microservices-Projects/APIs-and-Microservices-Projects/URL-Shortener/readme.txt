Apis and Microservices Projects - URL Shortener Microservice

Build a full stack JavaScript app that is functionally similar to this: https://thread-paper.glitch.me/.

Working on this project will involve you writing your code on Glitch on our starter project. After completing this project you can copy your public glitch url (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.

Start this project on Glitch using this link or clone this repository on GitHub! If you use Glitch, remember to save the link to your project somewhere safe!

API Project: URL Shortener Microservice

User Story:
I can POST a URL to [project_url]/api/shorturl/new and I will receive a shortened URL in the JSON response.
Example : {"original_url":"www.google.com","short_url":1}

If I pass an invalid URL that doesn't follow the http(s)://www.example.com(/more/routes) format, the JSON response will contain an error like {"error":"invalid URL"}
HINT: to be sure that the submitted url points to a valid site you can use the function dns.lookup(host, cb) from the dns core module.

When I visit the shortened URL, it will redirect me to my original link.

Short URL Creation
example: POST [project_url]/api/shorturl/new - https://www.google.com

URL to be shortened   
Example Usage:
[this_project_url]/api/shorturl/3
Will Redirect to:
https://forum.freecodecamp.com

by freeCodeCamp