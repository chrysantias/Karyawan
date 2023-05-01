import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const KaryawanList = () => {
    const [karyawans, setKaryawan] = useState([]);

    useEffect(() => {
        getKaryawans();
    }, []);

    const getKaryawans = async () => {
        const response = await axios.get('http://localhost:5000/karyawan');
        setKaryawan(response.data);
    }

    const deleteKaryawan = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/karyawan/${id}`);
            getKaryawans();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <h1 className="title has-text-centered">Management Karyawan</h1>
                <Link to={`add`} className="button is-success">Add Karyawan Baru</Link>
                <table className="table is-bordered is-striped is-fullwidth mt-5">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Gender</th>
                            <th>Posisi</th>
                            <th>Departmen</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {karyawans.map((karyawan, index) => (
                            <tr key={karyawan.id}>
                                <td>{index + 1}</td>
                                <td>{karyawan.name}</td>
                                <td>{karyawan.gender}</td>
                                <td>{karyawan.position}</td>
                                <td>{karyawan.departement}</td>
                                <td>
                                    <Link to={`edit/${karyawan.id}`} className="button is-small is-info mr-3"> Edit</Link>
                                    <button onClick={() => deleteKaryawan(karyawan.id)} className="button is-small is-danger"> Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default KaryawanList;