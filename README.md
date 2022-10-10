Expense Tracker App

This app is created to help users monitor, maintain, and categorize their expenses across various customizable labels

Reason behind choosing MERN:

MERN is a full-stack 3-tier architectural pattern involving:
•	Front-end Tier (via React.js)
•	Application Tier (via Express.js and Node.js)
•	Database Tier (MongoDB)

Following this architecture means that JSON data flows naturally from front to back, making it fast to build on and reasonably simple to debug
Application Architecture
Most of the frontend’s logic occurs within Redux store and its interactions with the server. It also uses Material UI framework for styling components
The backend serves the frontend, responds to frontend requests, acts as an intermediary to serve transactions data to the frontend, and fetches data from the MongoDB database

![Untitled](https://user-images.githubusercontent.com/111634860/194803165-4232d698-81f9-44ee-ac8f-4b7f63497732.png)

•	Frontend Technologies Used:
  - React: Besides using react, Expense Tracker also makes extensive use of the technologies and libraries of the React ecosystem
  - Redux: React-redux library is used to manage application state and make fetch requests to the server for data. All transaction information is fetched on page load and kept in the Redux store. While this expensive operation lengthens the initial load time, it also allows for a snappy experience after that load
  - Material UI: Material UI is used to provide elegant, responsive components, and tools for refactoring them to the application's need. There is also a very extensive documentation of Material UI available in the web, that helped resolve the issues that came up during the development process
  
•	Backend Technologies Used:
  - ExpressJS: The minimalism of Express lent itself to the very light-weight responsibilities of Expense Tracker’s server. The server is just a couple of routes and a connection to the database
  - Middlewares:
    - Body Parser: Used to process data sent in an HTTP request body. It provided middleware for parsing JSON, Text, URL-encoded, and raw data sets over an HTTP request body. Before the target controller receives an incoming request, these middleware routines handle it
    - CORS: Allowed requests to skip the Same-origin policy and access resources from remote hosts
    - JSON Web Token and Passport: Used for stateless authentication mechanisms for users maintaining session on the client-side, instead of storing sessions on the server
 - MongoDB: MongoDB was perfect for this project because its collections of JSON-like records made it very easy to store the transaction information, which is in JSON object form. The Mongoose ORM was used to communicate between the database, hosted in MongoDB Atlas, and the server
 - Miscellaneous: 
 - DotEnv: Automatically loads environment variables from a .env file into the process.env object
 - Nodemon: To monito any changes in source code and automatically restart server
