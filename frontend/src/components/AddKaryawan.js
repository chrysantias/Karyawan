import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddKaryawan = () => {
    const [name, setName] = useState("");
    const [gender, SetGender] = useState("Male");
    const [position, setPosition] = useState("Staff");
    const [departement, setDepartement] = useState("");
    const navigate = useNavigate();

    const saveKaryawan = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/karyawan', {
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
    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={saveKaryawan}>
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
                                <select value={gender} onChange={(e) => SetGender(e.target.value)}>
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
                        <label className="label">Departement</label>
                        <div className="control">
                            <input type="text" className='input' value={departement} onChange={(e) => setDepartement(e.target.value)} placeholder='Departement' />
                        </div>
                    </div>
                    <div className="field">
                        <button type='submit' className='button is-success'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddKaryawan