'use client';
import Cookies from 'js-cookie';

export default function Login() {

    const setCookie = async (event: any) => {
        event.preventDefault();
        Cookies.set('username', event.target.username.value.toString())
        Cookies.set('password', event.target.password.value.toString())
        window.location.replace('/')
    }

    return (
        <>
            <main className="container">

            <h1>Please login</h1>

            <form onSubmit={setCookie} action='/' method='post'>
            <input type="text" placeholder="Username" name="username" />
            <input type="password" placeholder="Password" name="password" />

            <input className="btn btn-default" type="submit" value="Login" />
            </form>

            </main>
        </>
)}
