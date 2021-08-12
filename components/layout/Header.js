import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <div className="p-3 d-flex justify-content-between">
            <div className="logo">
                <img src="/images/logo.png" alt="" width="100" />
            </div>
            <div>
                <Link href="/signup">
                    <a className="me-5">Signup</a>
                </Link>
                <Link href="/signin">
                    <a>Signin</a>
                </Link>
            </div>
        </div>
    );
};

export default Header;
