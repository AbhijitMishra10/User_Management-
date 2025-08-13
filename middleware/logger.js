// middleware/logger.js
function logger(req,res,next) {
    // Log the request method and URL
    console.log(`${req.method} ${req.originalUrl} -> ${req.statusCode}`)
    next() // Call the next middleware in the stack
}
// Export the logger middleware
export default logger