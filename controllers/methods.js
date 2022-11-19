const Eswdata = require("../models/model");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllData = asyncWrapper(async (req, res) => {
  const eswdata = await Eswdata.find({});
  console.log({ num: eswdata.length, eswdata });
  res.status(200).json({ num: eswdata.length, eswdata });
});

const createCoordinate = asyncWrapper(async (req, res) => {
  console.log(req.body);

  // console.log(req.body["m2m:sgn"]["m2m:nev"]["m2m:rep"]["m2m:cin"]);

  // om2m_string = req.body["m2m:sgn"]["m2m:nev"]["m2m:rep"]["m2m:cin"]["con"];
  // raw_data = om2m_string.split(" ");

  // console.log(raw_data[0], raw_data[1], raw_data[2]);
  // console.log("Recieved Data from om2m\n");

  // const data = new SomeModel({
  //   x: Number(raw_data[0]),
  //   y: Number(raw_data[1]),
  //   t: Number(raw_data[2]),
  // });
  const eswdata = await Eswdata.create(req.body);
  res.status(201).json({ eswdata });
});

const getCoordinate = asyncWrapper(async (req, res) => {
  const { t: index } = req.params;
  console.log(Eswdata.length);
  const coordinate = await Eswdata.findOne({ t: index });
  if (!coordinate) {
    return next(createCustomError(`No coordinate with time : ${index}`, 404));
  }
  res.status(200).json({ coordinate });
});

module.exports = {
  getAllData,
  createCoordinate,
  getCoordinate,
};
