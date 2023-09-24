// Import the required modules
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Create an instance of express
const app = express();
app.use(bodyParser.json());
// We use the 'body-parser' middleware to parse the incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Create a data store for our student data
const students = require("./model/01-student");

// The GET route for the form
app.get("/StudentForm", (req, res) => {
  // Render the form and pass in the current student data
  res.render("index", { students: students.getStudents() });
});

// The POST route for form submissions
app.post("/", (req, res) => {
  // Add the submitted student data to our data store
  students.addStudent(req.body);

  // Redirect back to the form
  res.redirect("/StudentForm");
});

// PUT Request (Update a Student):
app.put('/StudentForm/:id', (req, res) => {
  const id = parseInt(req.params.id); // Parse the ID from the URL
  const updatedStudent = req.body; // Updated student data from the request body

  // Update the student with the given ID
  const updated = students.updateStudent(id, updatedStudent);

  if (updated) {
    res.status(200).json({ message: 'Student updated successfully', student: updated });
  } else {
    res.status(404).json({ message: 'Student not found' });
  }
});

// DELETE Request (Delete a Student):
app.delete('/StudentForm/:id', (req, res) => {
  const id = parseInt(req.params.id); // Parse the ID from the URL

  // Delete the student with the given ID
  const deleted = students.delSpecificStudent(id);

  if (deleted) {
    res.status(200).json({ message: 'Student deleted successfully' });
  } else {
    res.status(404).json({ message: 'Student not found' });
  }
});


// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
