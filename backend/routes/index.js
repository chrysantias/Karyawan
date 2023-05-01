import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/UserController.js";
import { getKaryawanById, getKaryawans, updateKaryawan, deleteKaryawan, createKaryawan } from "../controllers/KaryawanController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.get('/karyawan', getKaryawans);
router.get('/karyawan/:id', getKaryawanById);
router.post('/karyawan', createKaryawan);
router.patch('/karyawan/:id', updateKaryawan);
router.delete('/karyawan/:id', deleteKaryawan);


export default router;