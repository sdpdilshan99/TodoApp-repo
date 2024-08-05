# To-Do App

A simple to-do application built with Node.js, Express.js, and MongoDB. This application allows users to create, read, update, and delete tasks.

## Features

- **Create**: Add new tasks with a title, description, and timestamps.
- **Read**: View the list of all tasks and individual task details.
- **Update**: Edit the title or description of existing tasks.
- **Delete**: Remove tasks from the list.

## Technologies Used

- **Node.js**: JavaScript runtime environment for building the application.
- **Express.js**: Web framework for Node.js to handle HTTP requests and responses.
- **MongoDB**: NoSQL database to store tasks data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **EJS**: Embedded JavaScript templating for rendering views.
- **Nodemon**: Development tool that automatically restarts the server on file changes.

## Installation

### Prerequisites

- **Node.js** (>= 14.x)
- **MongoDB** (Local or Atlas instance)

### Steps to Set Up

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app

2. **Install Dependencies**

    ```bash
    npm install

3. **Configure MongoDB:**

    Update the config.js or .env file with your MongoDB connection string:

    javascript
    // config.js

    ```bash
    module.exports = {
    dbURI: 'mongodb://localhost:27017/todo-app' // or your MongoDB Atlas connection string
    };

4. **Start the server:**

    ``bash
    npm start

    Or, if you are in development mode:

    ``bash
    npm run dev

## Usage

1. **Navigate to the Application**

    Open http://localhost:8000 to access the to-do app.

2.  **Manage Tasks**
    
    - **Create**: Use the form on the home page to add new tasks.
    - **View**: See the list of tasks and view details by clicking on individual tasks.
    - **Update**: Edit tasks from their detail view.
    - **Delete**: Remove tasks from their detail view or from the list.

## File Structure
    
    - **/models**: Mongoose models for MongoDB.
    - **/views**: EJS templates for rendering HTML pages.
    - **/routes**: Express routes handling different endpoints.
    - **/public**: Static assets like CSS, JavaScript files.
    - **server.js**: Entry point for the application.

## Contributing
    Feel free to fork the repository and submit pull requests. For significant changes, please open an issue first to discuss what you would like to change.

## License

    This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
    For questions or feedback, please reach out to 

    **Sdpdilshan99@gmail.com**