import Karyawan from "../models/KaryawanModel.js";
//2. buat controllernya
export const getKaryawans = async (req, res) => {
    try {
        const response = await Karyawan.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getKaryawanById = async (req, res) => {
    try {
        const response = await Karyawan.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createKaryawan = async (req, res) => {
    try {
        await Karyawan.create(req.body);
        res.status(201).json({ msg: "Karyawan Created" });
    } catch (error) {
        console.log(error.message);
    }
}


export const updateKaryawan = async (req, res) => {
    try {
        await Karyawan.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Karyawan Updated " });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteKaryawan = async (req, res) => {
    try {
        await Karyawan.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Karyawan Deleted " });
    } catch (error) {
        console.log(error.message);
    }
}