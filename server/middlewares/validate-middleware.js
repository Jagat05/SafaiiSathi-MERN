const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body); // Parse the request body
    req.body = parseBody; // If valid, set the parsed body back to req.body
    return next();
  } catch (err) {
    const status = 422; // Unprocessable Entity
    const message = "Validation Error";
    const extraDetails = err.issues.map((issue) => issue.message); // Collect validation messages
const error={
  status,
  message,
  extraDetails
}
console.log(error);
next(error);
    // return res.status(status).json({
    //   status,
    //   message,
    //   errors: extraDetails, // Provide detailed error messages
    // });
  }
};

module.exports = validate; // Ensure this is correctly exporting
