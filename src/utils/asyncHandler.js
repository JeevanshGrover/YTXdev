const asyncHandler = (requestHandler) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error));
}


export { asyncHandler }

//asyncHandler is higher order function that takes a function as an argument and returns a function.

// -----try-catch method----------

// const asyncHandler = (fn) => async (req, res, next) => {
//     try{
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }