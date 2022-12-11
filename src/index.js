const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here
app.get("/", (req, res) => {
  res.send("Hello World");
});

let maxLimit = 1000000;
let minLimit = -1000000;

//ADD METHOD
app.post("/add", (req, res) => {
  let sum = Number(req.body.num1) + Number(req.body.num2);
  if (Number(req.body.num1) > maxLimit || Number(req.body.num2) > maxLimit || sum > maxLimit) {
    res.json({
      status: "error",
      message: "Overflow"
    })
  } else if (
    Number(req.body.num1) < minLimit || Number(req.body.num2) < minLimit || sum < minLimit) {
    res.json({
      status: "error",
      message: "Underflow"
    })
  } else if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
    res.json({
      status: "error",
      message: "Invalid data types"
    });
  } else {
    res.json({
      status: "success",
      message: "the sum of given two numbers",
      sum: sum
    });
  }
});

//Subtract Method
app.post("/sub", (req, res) => {
  let sub = Number(req.body.num1) - Number(req.body.num2);
  if (Number(req.body.num1) > maxLimit || Number(req.body.num2) > maxLimit || sub > maxLimit) {
    res.json({
      status: "error",
      message: "Overflow"
    })
  } else if (
    Number(req.body.num1) < minLimit || Number(req.body.num2) < minLimit || sub < minLimit) {
    res.json({
      status: "error",
      message: "Underflow"
    })
  } else if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
    res.json({
      status: "error",
      message: "Invalid data types"
    });
  } else {
    res.json({
      status: "success",
      message: `the difference of given two numbers`,
      difference: sub
    });
  }
});

//Multiply
app.post("/multiply", (req, res) => {
  let result = Number(req.body.num1) * Number(req.body.num2);
  if (Number(req.body.num1) > maxLimit || Number(req.body.num2) > maxLimit || result > maxLimit) {
    res.json({
      status: "error",
      message: "Overflow"
    })
  } else if (
    Number(req.body.num1) < minLimit || Number(req.body.num2) < minLimit || result < minLimit) {
    res.json({
      status: "error",
      message: "Underflow"
    })
  } else if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
    res.json({
      status: "error",
      message: "Invalid data types"
    });
  } else {
    res.json({
      status: "success",
      message: `The product of given numbers`,
      result: result
    });
  }
});

//DIVIDE
app.post("/divide", (req, res) => {
  let result = Number(req.body.num1) / Number(req.body.num2);
  if (Number(req.body.num2) == 0) {
    res.json({
      status: "error",
      message: "Cannot divide by zero"
    })
  }
  else if (Number(req.body.num1) > maxLimit || Number(req.body.num2) > maxLimit || result > maxLimit) {
    res.json({
      status: "error",
      message: "Overflow"
    })
  } else if (
    Number(req.body.num1) < minLimit || Number(req.body.num2) < minLimit || result < minLimit) {
    res.json({
      status: "error",
      message: "Underflow"
    })
  } else if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
    res.json({
      status: "error",
      message: "Invalid data types"
    });
  } else {
    res.json({
      status: "success",
      message: `the division of given two numbers`,
      result: result
    });
  }
});

//Default
app.post("*", (req, res) => {
  res.json({
    status: "failure"
  })
})
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
