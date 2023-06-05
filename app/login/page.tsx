'use client';
import { useState } from 'react';


export default function Login() {
    return (
        <>
            <main className="container">

            <h1>Please login</h1>

            <form action="" method="post">
            <input type="text" placeholder="Username" name="username" />
            <input type="password" placeholder="Password" name="password" />

            <input className="btn btn-default" type="submit" value="Login" />
            </form>

            <p className="error"><strong>Error:</strong></p>

            </main>
        </>
)}
