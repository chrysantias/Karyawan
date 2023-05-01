import React, { useState, useEffect } from 'react'
import axios from 'axios'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpired] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        refreshToken();
    }, []);


    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpired(decoded.exp);
        } catch (error) {
            if (error.response) {
                navigate("/dashboard");
            }
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpired(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });


    return (
        <div className="container mt-5">
            <h3 className='bold'>Welcome Back, {name}! </h3>
            <div className="columns is-centered mt-5">
                <div className="column is-half">

                </div>
            </div>
        </div >
    )
}

export default Dashboard