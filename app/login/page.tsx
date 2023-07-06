'use client';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'

export default function Login() {

    const router = useRouter()

    const setCookie = async (event: any) => {
        event.preventDefault();
        Cookies.set('key', event.target.password.value.toString())
        router.push('/')
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
