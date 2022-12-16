import express from 'express';
import session from 'express-session';
import mongoose from "mongoose";
import cors from 'cors';
import UsersController from "./controllers/users/users-controller.js";
import HelloController from "./controllers/hello-world.js";
import SessionController from "./session-controller.js";
import EventsController from "./controllers/events/events-controller.js";
import CommentsController from "./controllers/comments/comments-controller.js";
import InterestsController from "./controllers/interests/interests-controller.js";
import TransactionController from "./controllers/transactions/transaction-controller.js";
import TicketsController from "./controllers/tickets/tickets-controller.js";

// Initialise app
const app = express();
app.use(express.json());
let sess = {
  secret: "SECRET",
  cookie: { secure: false }
};
if (process.env.ENV === 'production') {

  app.set('trust proxy', 1)
  sess.cookie.secure = true;
}
app.use(session(sess));
app.use(cors(
  {
    credentials: true,
    origin: process.env.EVENT_ZINGER_ORIGIN || 'http://localhost:3000'
  }
));

// Connect to DB
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/event_zinger';

mongoose.connect(CONNECTION_STRING, options);

// Controllers
UsersController(app);
HelloController(app);
CommentsController(app);
InterestsController(app);
SessionController(app);
EventsController(app);
TransactionController(app);
TicketsController(app);

// Listen on port 5000
app.listen(process.env.PORT || 1000);