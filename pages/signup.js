import React from "react";
import Header from "../components/Header";

const Signup = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <Header />
                        <h2>Signup Page</h2>
                        <button className="btn btn-primary">
                            Sign Up with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
