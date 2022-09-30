<h1 align="center">Business Finder</h1>
<h2 align="center">localsearch Full-Stack Engineer Home Assignment</h2>

### Summary
A customized API that sends formated json data to render information about business' name, address and opening hours on [the web application](https://github.com/sigristarisa/localsearch-client).

### How to Run the App Locally
1. Clone the project repository to your local machine
2. Run ``npm install`` to install dependencies in the project root directory
3. Run ``npm start``

### What Does the Application Do?
- Receives get requests and validate the entered place id
- Fetches data from https://storage.googleapis.com/coding-session-rest-api/{place_id} if the place id is valid
- Formats the fetched data into business' name, address and opening hours
- Sends status and data to the web application as a response
- Sends status and error message if the place id is invalid

### What Language/Wireframe is Used?
- Express.js
- Typescript
- CSS
