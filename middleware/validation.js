// middleware/validation.js
function validateUser(req,res,next) {
   // Check if the request body contains the required fields
   const {id, firstName, lastName, hobby} = req.body
   // If any of the fields are missing, return a 401 Unauthorized response
   if(!id || !firstName || !lastName || !hobby) {
    return res.status(401).json({error: "All of the fields (id, firstName, lastName, hobby) are required to move forward"})
   }
   next() // Proceed to the next middleware or route handler
}
// Export the validation middleware function
export default validateUser