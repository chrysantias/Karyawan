import { Sequelize } from "sequelize";
import db from "../config/Database.js";


const { DataTypes } = Sequelize;

const Karyawan = db.define('karyawan', {
    name: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.STRING
    },
    position: {
        type: DataTypes.STRING
    },
    departement: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Karyawan;

(async () => {
    await db.sync();
})();
