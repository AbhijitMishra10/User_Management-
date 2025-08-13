import express from 'express' // Importing express framework
import validateUser from './middleware/validation.js' // Importing validation middleware

// Creating a new express router instance
const router = express.Router()

// Sample user data
let users = [
    { id: '1', firstName: 'Anshika', lastName: 'Agarwal', hobby: 'Teaching'}
]

// Get all users
router.get("/users", (req,res) => {
    res.status(200).json({m: "This is the list of all the users in the list", users})
})

// Get user by Id
router.get("/users/:id", (req,res) => {
    const user = users.find((user) => user.id === req.params.id)
    if(!user) {
        return res.status(401).json({error: "User not found"})
    }
    res.status(200).json({m: `Hello ${user}`})
})

//Post new user 

router.post("/user", (req,res) => {
    const newUser = req.body
    users.push(newUser)
    res.status(200).json({message: "User Created", user: newUser})
})

//Put update user by Id

router.put("/user/:id", validateUser, (req,res) => {
    // Find the index of the user to update
    const idx = users.findIndex((user) => user.id === req.params.id)
    // If user not found, return error
    if (idx === -1) return res.status(200).json({error: "User not found"})
    users[idx] = req.body // Update the user at the found index
    // Return success message with updated user
    res.status(200).json({message: "User updated Successfully", user: users[idx]})
})

//Delete user by Id

router.delete("/user/:id", (req,res) => {
    // Find the user by id
    const idx = users.find((user) => user.id === req.params.id)
    // If user not found, return error
    if(!idx) {
        return res.status(401).json({error: "User not found"})
    }
    // Filter out the user from the list
    const filteredUser = users.filter((user) => user.id != idx)
    res.status(201).json({message: "User deleted", filteredUser})
})
// Exporting the router to be used in other files
export default router