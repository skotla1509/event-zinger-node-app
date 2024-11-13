This is the node server for the event zinger app.

This app is a ticket-master inspired ticketing platform. It is an app where users can just buy tickets for various events or register as a manager to buy tickets as usual and have an option to sell tickets. There is also an administrator who will have an additional access to view all users and have an option to delete them. 



## Routing:
The application routes are defined in separate controllers, each handling a specific resource or functionality.

Controllers: Each controller, like UsersController, EventsController, CommentsController, etc., represents a collection of related endpoints. For instance: 
- UsersController manages routes related to user actions (registration, login, user profile).
- EventsController could handle routes related to creating, updating, and fetching event data.

Each controller is initialized by passing the app instance, which allows them to register their respective routes directly on the main app.

SessionController handles session management, allowing the app to store and retrieve session data, making it useful for user login persistence and tracking.

## Application Layers

- Routing Layer: Defines URL endpoints and delegates each endpoint to the appropriate controller. This layer is set up through each controller file, allowing separation of concerns and modularity.
- Controller Layer: Each controller file encapsulates the logic for handling specific routes. They contain the business logic required for each route, including interacting with the database or managing session data.
- Database Layer: The MongoDB database connection is configured here using Mongoose, a MongoDB object modeling library. Mongoose allows for schema definition and provides a higher-level API for working with MongoDB.



## Technologies Used
- Express.js: The primary framework for building the server and handling HTTP requests.
- express-session: Manages user sessions, allowing for persistent user data across requests.
- Mongoose: Manages database interactions with MongoDB, making it easy to define schemas and models for data consistency.
- MongoDB: The NoSQL database used to store application data such as users, events, comments, etc.
- CORS: Enables cross-origin resource sharing, which is essential for allowing frontend applications on different origins (like localhost:3000) to communicate with the API.


## Folder Structure Overview
```
With your `event-zinger-node-app` folder structure, you have organized each feature into its own folder with a clear separation of responsibilities within each feature. This design pattern is known as **feature-based modularization**, where each feature (e.g., `users`) contains its own controller, data access object (DAO), model, and schema. Here’s an explanation of each component and its role within the `users` feature:
event-zinger-node-app/
│
└── controllers/
    └── users/
        ├── users-controller.js
        ├── users-dao.js
        ├── users-model.js
        └── users-schema.js
```

### Explanation of Each File

1. **`users-controller.js`**
   - **Role**: Acts as the primary interface for handling HTTP requests related to the `users` feature.
   - **Responsibilities**:
     - Defines endpoints for user-related operations (e.g., creating a user, logging in, updating profile).
     - Calls functions in `users-dao.js` to perform the necessary database operations.
     - Returns responses (e.g., success, errors) to the client.
   - **Example Functionality**:
     - Route definitions like `POST /users` for creating a user and `GET /users/:id` for retrieving user details.

2. **`users-dao.js`**
   - **Role**: The **Data Access Object (DAO)** layer, which manages data access and interactions with the database for the `users` feature.
   - **Responsibilities**:
     - Encapsulates all database-related operations, interacting directly with the `users-model.js`.
     - Provides functions such as `createUser`, `findUserById`, and `updateUser`.
     - Ensures data integrity and can abstract database logic away from the controller.
   - **Benefits**: Separating the data access layer promotes code reusability and improves maintainability, as any changes to database operations (like query optimizations) can be managed here without modifying the controller.

3. **`users-model.js`**
   - **Role**: Serves as the **Mongoose model** for the `users` collection, allowing the application to interact with MongoDB using the `users-schema.js`.
   - **Responsibilities**:
     - Defines the model based on `users-schema.js`, enabling Mongoose to create and validate `users` documents in MongoDB.
     - Provides an interface for Mongoose operations such as `create`, `find`, `update`, and `delete`.
   - **Example**: Mongoose syntax like `const UserModel = mongoose.model("User", usersSchema);` allows the app to use `UserModel` to access the `users` collection.

4. **`users-schema.js`**
   - **Role**: Defines the **Mongoose schema** for `users`, outlining the structure and data types of each user document in the database.
   - **Responsibilities**:
     - Specifies fields like `username`, `email`, `password`, and `createdAt`, along with their data types and constraints.
     - Can include validation rules (e.g., required fields, unique values).
     - Supports schema-level configuration, such as timestamps or default values.
   - **Example**: By defining fields and constraints here, Mongoose can enforce data consistency whenever user documents are created or modified.

### How These Components Work Together

1. **Request Flow**: A request related to users (e.g., `POST /users`) arrives at the **controller (`users-controller.js`)**, which maps the request to a specific function (e.g., `createUser`).
2. **Data Operations**: The controller calls the appropriate function in **DAO (`users-dao.js`)** to perform the required data operations.
3. **Model Interaction**: The DAO uses the **model (`users-model.js`)** to interact with MongoDB, ensuring data is correctly structured according to the **schema (`users-schema.js`)**.
4. **Response**: The controller then sends a response back to the client, containing the result or error message.

### Benefits of This Structure

- **Modularity**: Each feature has its own dedicated folder and files, making the codebase organized and easier to maintain.
- **Separation of Concerns**: Each layer (Controller, DAO, Model, and Schema) has a clear responsibility, reducing interdependency and making it easier to modify individual components.
- **Scalability**: Adding new features is straightforward—just replicate this folder structure for new features like `events` or `comments`.

Here’s a complete guide to setting up MongoDB with Mongoose and running your project from scratch.

## Step-by-Step Instructions

#### 1. Install Project Dependencies
First, in the root directory of your project (where `app.js` is located), install all required dependencies using npm:
```bash
npm install
```

#### 2. Set Up MongoDB with MongoDB Compass
Since you have MongoDB Compass installed, we’ll use it to set up the initial database.

1. **Start MongoDB**:
   - Make sure MongoDB is running on your system. If MongoDB is installed locally, it may start automatically.
   - **For Mac/Linux**: Run `mongod` in a terminal.
   - **For Windows**: MongoDB typically runs as a service, so it may be active already.

2. **Create a Database in MongoDB Compass (Optional)**:
MongoDB creates a database if it does not already exist. Skipping this step does not have any impact on you running the project.
   - Open **MongoDB Compass**.
   - Connect to your local MongoDB instance at `mongodb://localhost:27017`. 
   - Click **Create Database** and name the database (e.g., `event_zinger` to match the default database name in `app.js`).
   - No need to create collections manually! MongoDB will automatically create collections as your app interacts with it.

#### 3. Update the Database Connection in `app.js`
By default, your `app.js` file connects to `mongodb://localhost:27017/event_zinger`. If you wish to use a different database name, update the `CONNECTION_STRING` variable in `app.js` with the new name.

For example, if you want to use `event_zinger_local`, change this line:
```javascript
const CONNECTION_STRING = 'mongodb://localhost:27017/event_zinger_local';
```

### 4. Configure Environment Variables (Optional)
For flexibility, you can set the database connection string and port as environment variables instead of hardcoding them in `app.js`.

#### Option 1: Setting Variables in the Terminal
Run the following commands to set these variables temporarily:
```bash
export DB_CONNECTION_STRING="mongodb://localhost:27017/event_zinger"
export PORT=5000
```

#### Option 2: Using a `.env` File
Create a `.env` file in the root of the project with:
```env
DB_CONNECTION_STRING=mongodb://localhost:27017/event_zinger
PORT=5000
```

Then, update `app.js` to read these variables:
```javascript
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/event_zinger';
const PORT = process.env.PORT || 1000;
```

### 5. Start the Application
With MongoDB and your database set up, start the application by running:
```bash
node app.js
```

Or, if you have **Nodemon** installed (which restarts the server on code changes):
```bash
nodemon app.js
```

The application will start up and listen on the specified port (default: 1000, or 5000 if set in environment variables).

### 6. Test the Application and Database
1. Use **Postman** or **curl** to test the API endpoints defined in your project. For example, try creating a user or posting an event using endpoints in your controllers.
2. As you interact with the endpoints, MongoDB will automatically create collections as data is inserted. For example, if you post a new user, MongoDB will create a `users` collection if it doesn’t already exist.

### 7. View Data in MongoDB Compass
1. Open MongoDB Compass, connect to `mongodb://localhost:27017`, and select your `event_zinger` database.
2. You should see collections like `users`, `events`, etc., populated with data as you interact with the application.

### Summary
1. **Dependencies**: Install with `npm install`.
2. **Database**: Create a new MongoDB database (collections will be auto-created).
3. **Configuration**: Adjust connection string in `app.js` or set environment variables.
4. **Run the App**: Start with `node app.js` or `nodemon app.js`.
5. **Test and Verify**: Test endpoints and view data in MongoDB Compass.

This setup will allow you to run the application locally with MongoDB, store data in collections, and interact with it via your API. Let me know if you need further clarification!