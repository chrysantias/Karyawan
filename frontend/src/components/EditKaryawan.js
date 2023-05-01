import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditKaryawan = () => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("Male");
    const [position, setPosition] = useState("Staff");
    const [departement, setDepartement] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getKaryawanById();
    }, []);


    const updateKaryawan = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/karyawan/${id}`, {
                name,
                gender,
                position,
                departement,
            });
            navigate("/karyawan");
        } catch (error) {
            console.log(error)
        }
    }

    const getKaryawanById = async () => {
        const response = await axios.get(`http://localhost:5000/karyawan/${id}`);
        setName(response.data.name);
        setGender(response.data.gender);
        setPosition(response.data.position);
        setDepartement(response.data.departement);
    }
    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updateKaryawan}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input type="text" className='input' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Gender</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Position</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select value={position} onChange={(e) => setPosition(e.target.value)}>
                                    <option value="Staff">Staff</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Head">Head</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Department</label>
                        <div className="control">
                            <input type="text" className='input' value={departement} onChange={(e) => setDepartement(e.target.value)} placeholder='Department' />
                        </div>
                    </div>
                    <div className="field">
                        <button type='submit' className='button is-success'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditKaryawan