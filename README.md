# CS-465 Full Stack Development with MEAN

## Architecture
### Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
The client-side webpage uses Express HTML to render static content. Handlebars was then integrated into the framework to retrieve data from the database and display it on the browser, offering a more dynamic method of rendering the webpage data. The administrative-side webpage uses Angular to render a single-page application, which dynamically updates site data without requiring a page reload. SPA's offer a seamless and responsive experience. However, the initial loading times when accessing these webpages may take longer than multi-page applications (MPA) since all of the relevant data must be received by the administrative-side. 
### Why did the backend use a NoSQL MongoDB database?
NoSQL databases are flexible and easily adapt to changing data structures, attributes that are particularly useful for applications that require constant communication to and from the server along with frequent data queries. These databases also scale well by adding additional servers as data volumes increase.

## Functionality
### How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Javascript is a web-related programming language that supports methods and functions like other languages. JSON is a data format used to exchange data between different applications. In this case, JSON facilitated data exchanges between the client- and administrative-side webpages and the MongoDB server. In essence, the various interactions users could experience within the website were made possible with Javascript, and JSON helped the different parts of the web application communicate with one another through a standardized format.
### Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.


## Testing
### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

## Reflection
### How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
