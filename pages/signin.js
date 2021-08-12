import React from "react";
import Auth from "../components/Auth";
import Header from "../components/Header";
import { signInWithGoogle } from "../firebase/utils";

const Signin = () => {

    const handleSubmit = async e => {
        e.preventDefault()
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <Header />
                        <h2>Sign In Page</h2>
                        <Auth />
                        <form onSubmit={handleSubmit}>
                            <button
                                className="btn btn-primary"
                                onClick={signInWithGoogle}
                            >
                                Sign in with Google
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
