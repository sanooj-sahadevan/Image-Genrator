import express from "express";
const app = express();

app.use("/", (req, res) => {
  console.log("hiiiiiiiiiii");
  res.send('hi')
});

app.listen(3000, () => {
  console.log("server running");
});
