# WorkDayAgenda
An application that manages work day agenda items

## Description
This project shows the agenda items for a particular work day.  The application has hours between 9 and 5pm with each time block having a text area where the user can add details of what they are working on for that hour. 
The save button on the right hand side, saves the description into local storage which makes it persists throughout the day.  The application also color codes the time blocks relative to the current hour.  So if the hour in question is in the past, 
present or future, there is a different color indicating if it is in the past, current or future items.  The current date is displayed at the top.  All elements on the screen is generated using JQuery/Javascript. 

## Usage
Below is a screenshot of the completed site

![Screenshot of the completed WorkDayAgenda site.](/assets/images/Final_Screen_Shot_WorkDayAgenda.png)

Link to the deployed application is here: https://azukicoconut.github.io/WorkDayAgenda/

## Credits
This application was provided to me with the HTML, and CSS already completed.  I removed the base elements from the HTML and chose to build those structures using JQuery/JavaScript.  I left the CSS as is and made use
of the classes to control the styling of the page.  

The following are the references used in my application:
  1. w3 Schools JQuery Get - https://www.w3schools.com/jquery/jquery_dom_get.asp
  2. w3 Schools JQuery Set - https://www.w3schools.com/jquery/jquery_dom_set.asp
  3. w3 Schools JQuery Add - https://www.w3schools.com/jquery/jquery_dom_add.asp
  4. w3 Schools JQuery Traversing - https://www.w3schools.com/jquery/jquery_traversing.asp
  5. w3 Schools JQuery Events - https://www.w3schools.com/jquery/jquery_ref_events.asp
  6. w3 Schools JavaScript Array Methods - https://www.w3schools.com/js/js_array_methods.asp
  7. Dayjs displaying formatted date - https://day.js.org/docs/en/display/format
  8. Dayjs getting and setting the hour - https://day.js.org/docs/en/get-set/hour

## License
MIT License

Copyright (c) 2023 Matthew Tingley

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.




