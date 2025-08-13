import express from 'express' // Importing express framework
import usersRouter from './users.js' // Importing users router
import logger from './middleware/logger.js' // Importing logger middleware
// Initializing express application
const app = express()
// Middleware to parse JSON bodies
app.use(express.json())
// Middleware to log requests
app.use(logger)
// Using the users router for all routes starting with "/"
app.use("/", usersRouter)
// Starting the server on port 5000
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000')
})