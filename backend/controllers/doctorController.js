import express from "express";
import Doctor from "../models/Doctor.js";
import { StatusCodes } from "http-status-codes";
import { BadRequest, NotFound } from "../error/index.js";

const getAll = async (req, res) => {
  const doctors = await Doctor.find();
  res.status(StatusCodes.OK).json({
    doctors,
    totalDoctors: doctors.length,
    numOfPages: 1,
  });
};

const getOne = async (req, res) => {
  const { id: doctorId } = req.params;
  const doctor = await Doctor.findOne({ _id: doctorId });
  if (!doctor) {
    throw new NotFound(`No doctor with id ${doctorId}`);
  }
  res.status(StatusCodes.OK).json({
    doctor,
  });
};

export { getAll, getOne};
