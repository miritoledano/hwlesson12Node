const express = require("express");
const router = express.Router();
const toysModel = require("../models/toys");

let arr = [
  { id: 1, name: "nni'yn", price: 150 },
  { id: 2, name: "you", price: 150 },
  { id: 3, name: "TIXI 'TIT", price: 40 },
];

router.get("/", (req, res) => {
    toyModel
    .find({})
    .then((alltoys) => {
      res.json(alltoys);
    })
    .catch((err) => {
      // Handle the error
      res.status(500).send("Internal Server Error");
    });
});

router.get("/:toyid", (req, res) => {
  let toy = arr.find((item) => item.id == req.params.bookid);
  if (!toy) return res.status(404).send("ספר לא נמצא");
  res.json(toy);
});

router.delete("/:toyid", (req, res) => {
  let index = arr.findIndex((item) => item.id == req.params.toyid);
  if (index == -1) return res.status(404).send("ספר לא נמצא");
  let toy = arr.splice(index, 1)[0];
  res.json(toy);
});

router.post("/", (req, res) => {
  console.log(req.body);
  req.body.id = arr[arr.length - 1].id + 1;
  arr.push(req.body);
  res.status(201).json(req.body);
});

router.put("/:id", (req, res) => {
  let toy = arr.find((item) => item.id == req.params.id);
  if (!toy) return res.status(404).send("ספר לא נמצא");
  // כאן יש להוסיף לוגיקה לעדכון הספר
  res.json(req.body);
});

module.exports = router;
