# Event Zinger Node Server

## Table of Contents
- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Application Architecture](#application-architecture)
- [Folder Structure](#folder-structure)
- [Setting Up MongoDB and Running the Project](#setting-up-mongodb-and-running-the-project)
- [Testing the API and Viewing Data in MongoDB Compass](#testing-the-api-and-viewing-data-in-mongodb-compass)
---

## Overview
Event Zinger is a ticketing platform inspired by Ticketmaster, allowing users to browse and purchase tickets for various events. It offers different levels of access for users, managers, and administrators:
- **Users** can browse and buy tickets.
- **Managers** can sell tickets in addition to standard user actions.
- **Admins** can view and manage all user accounts.

This README provides instructions for setting up and running the project locally, along with an overview of the server's architecture, routing, and technologies used.

**NOTE**: To learn more about the various features and screens of this project, refer to the DESIGN-README.md file.
This project is part of a larger system and relies on the following repositories:
- [React Frontend Repository](https://github.com/skotla1509/event-zinger-react-app) 
- [Node.js Backend Repository](https://github.com/skotla1509/event-zinger-node-app) 

---

## Technologies Used
- **Express.js**: A minimal Node.js framework for creating the server and handling HTTP requests.
- **express-session**: Used to manage user sessions, enabling persistent data across requests.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB, enabling schema definitions and model-based data operations.
- **MongoDB**: The NoSQL database used to store application data such as users, events, tickets, comments, and transactions.
- **CORS**: Middleware that enables cross-origin resource sharing, allowing secure communication between frontend and backend applications.

---

## Application Architecture

### Controllers
Each feature in the application is managed by a dedicated controller, which enables modularity and clear separation of responsibilities. Here’s a brief description of each controller’s purpose:

- **Comments Controller**: Allows users to add comments on events, view comments related to a specific event, and retrieve all comments made by a specific user.

- **Events Controller**: Manages event data, providing functionality to create new events, retrieve a list of all events, and view details of specific events.

- **Interests Controller**: Enables users to mark interest in events, retrieve events a user is interested in, and see which users have shown interest in a specific event.

- **Tickets Controller**: Handles ticket management, allowing users to view available tickets for specific events.

- **Transactions Controller**: Manages transactions related to ticket purchases, enabling the app to record new transactions, retrieve transactions for specific events, and view transactions made by individual users.

- **Users Controller**: Manages user accounts and authentication, including registration, login, password changes, and user profile updates. Admin-specific routes allow viewing, updating, and deleting user accounts.

- **Session Controller**: Manages user session data, providing functionality for login persistence and tracking across requests.

This design makes the codebase easy to maintain, test, and scale, allowing each controller to manage specific resources and tasks independently.

---

## Folder Structure

The project follows a **feature-based modular structure** with each feature organized in its own directory under `controllers`. Each feature folder contains:
- **Controller**: Handles HTTP requests and defines endpoints.
- **DAO (Data Access Object)**: Manages database operations.
- **Model**: Mongoose model for database interaction.
- **Schema**: Defines data structure and validation rules.

Example structure for `users`:
```
event-zinger-node-app/
└── controllers/
    └── users/
        ├── users-controller.js
        ├── users-dao.js
        ├── users-model.js
        └── users-schema.js
```

---

## Setting Up MongoDB and Running the Project

### 1. Install Project Dependencies
Run the following command in the root directory of the project (where `app.js` is located) to install all required dependencies:
```bash
npm install
```

### 2. Set Up MongoDB Using MongoDB Compass
1. **Start MongoDB**:
   - Ensure MongoDB is running locally. If MongoDB is installed locally, it may start automatically.
   - **For Mac/Linux**: Run `mongod` in a terminal.
   - **For Windows**: MongoDB typically runs as a service and may start automatically.

2. **Create a Database in MongoDB Compass** (Optional): A database will be created automatically if not already present when any MongoDB query is run. So this step is optional.
   - Open **MongoDB Compass** and connect to your MongoDB instance at `mongodb://localhost:27017`.
   - Create a new database (e.g., `event_zinger`). **Collections** for each feature (e.g., `users`, `events`, `tickets`) will be created automatically when data is inserted.

### 3. Configure Database Connection in `app.js`
The `app.js` file connects to MongoDB using the default connection string `mongodb://localhost:27017/event_zinger`. If you want to use a different database instance, update the `CONNECTION_STRING` variable in `app.js`:
```javascript
const CONNECTION_STRING = 'mongodb://localhost:27017/event_zinger';
```

### 4. Environment Variables (Optional)
To avoid hardcoding values, you can set environment variables for configuration.

#### Terminal Configuration
```bash
export DB_CONNECTION_STRING="mongodb://localhost:27017/event_zinger"
export PORT=5000
```

#### Using a `.env` File
Create a `.env` file in the root of the project:
```env
DB_CONNECTION_STRING=mongodb://localhost:27017/event_zinger
PORT=5000
```

Update `app.js` to read these variables:
```javascript
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/event_zinger';
const PORT = process.env.PORT || 1000;
```

### 5. Start the Application
With MongoDB and your database set up, start the application by running:
```bash
node app.js
```
or, if you use **Nodemon**:
```bash
nodemon app.js
```

The application will start on the specified port (default: 1000, or 5000 if set in environment variables).

---

## Testing the API and Viewing Data in MongoDB Compass

1. **Testing Endpoints**:
   - Use **Postman** or **curl** to test the API endpoints. MongoDB automatically creates collections when data is inserted, so you don’t need to manually set them up.

2. **Viewing Data in MongoDB Compass**:
   - Open MongoDB Compass, connect to `mongodb://localhost:27017`, and select your `event_zinger` database.
   - You should see collections like `users`, `events`, `tickets`, etc., populated with data as you interact with the API.

---
