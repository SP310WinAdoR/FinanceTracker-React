import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from "../components/NavBar";
import { ReactComponent as Blob1 } from '../assets/img/BlobsVector-1.svg';
import { ReactComponent as Blob2 } from '../assets/img/BlobsVector-2.svg';
import { ReactComponent as Blob3 } from '../assets/img/BlobsVector-3.svg';



export default function SignInPage() {
    return (
        <>
        <NavBar />
        <div className='login-layout'>

            <div className='image-slider'>
                <div className='form-image'></div>
                <Blob1 className="blob-1" />
                <Blob2 className="blob-2"/>
                <Blob3 className="blob-3"/>

            </div>

        <div className="login-form">

            <h2 className='text-center'>Create a Free Account!</h2>

            <form action="/home">

                <div className="login-fields">

                    <div className='flex-inputs'>
                        <label>Username or email address</label>
                        <input type="text" name="first_name" required />
                    </div>

                    <div className='flex-inputs'>
                        <label>Password</label>
                        <input type="password" name="password" required />
                    </div>

                    <div className='flex-inputs'>
                    <Link to="/forget-password"><label className="right-label">Forgot password?</label></Link>
    <button id="sub_btn" type="submit">Login</button>
                    </div>

<div className='flex-inputs'>

<label className="right-label">Already have an Account?</label>
    <Link to="/login"><label className="right-label">Login</label></Link>
</div>

<h3 id="h3-form" className='text-center'>--- OR ---</h3>

                </div>
            </form>

            <div>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </div>

        </div>

        </div>

        </>
    )
}
