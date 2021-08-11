import React from "react";
import Header from "../components/Header";

const Signin = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <Header />
                        <button className="btn btn-primary">
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
