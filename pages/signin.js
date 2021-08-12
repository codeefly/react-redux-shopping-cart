import React from "react";
import Header from "../components/layout/Header";

const Signin = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <Header />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
