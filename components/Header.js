import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <div className="p-3 d-flex justify-content-between">
            <div className="logo">
                <img src="/images/logo.png" alt="" width="100" />
            </div>

            <Link href="/signin">
                <a>Signin</a>
            </Link>
        </div>
    );
};

export default Header;
