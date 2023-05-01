import Absen from "../models/AbsenModel.js";
import path from "path";

export const getAbsens = async (req, res) => {
    try {
        const response = await Absen.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getAbsenById = async (req, res) => {
    try {
        const response = await Absen.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
