Information Security and Quality Assurance Projects - Metric-Imperial Converter

https://quiet-antler.glitch.me

Build a full stack JavaScript app that is functionally similar to this: https://hard-twilight.glitch.me/.

Working on this project will involve you writing your code on Glitch on our starter project. After completing this project you can copy your public glitch url (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.

Start this project on Glitch using this link or clone this repository on GitHub! If you use Glitch, remember to save the link to your project somewhere safe!

User Stories
I will help prevent the client from trying to guess(sniff) the MIME type.
I will prevent cross-site scripting (XSS) attacks.
I can GET /api/convert with a single parameter containing an accepted number and unit and have it converted.
Hint: Split the input by looking for the index of the first character.
I can convert 'gal' to 'L' and vice versa. (1 gal to 3.78541 L)
I can convert 'lbs' to 'kg' and vice versa. (1 lbs to 0.453592 kg)
I can convert 'mi' to 'km' and vice versa. (1 mi to 1.60934 km)
If my unit of measurement is invalid, returned will be 'invalid unit'.
If my number is invalid, returned with will 'invalid number'.
If both are invalid, return will be 'invalid number and unit'.
I can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.
My return will consist of the initNum, initUnit, returnNum, returnUnit, and string spelling out units in format {initNum} {initial_Units} converts to {returnNum} {return_Units} with the result rounded to 5 decimals.
All 16 unit tests are complete and passing.
All 5 functional tests are complete and passing.



