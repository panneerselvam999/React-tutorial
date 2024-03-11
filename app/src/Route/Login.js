import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()

    function nav() {
        navigate("/dashboard")
    }

    return (
        <>
            <h1>Login page </h1>
            <button onClick={nav}>click</button>
        </>
    )
}