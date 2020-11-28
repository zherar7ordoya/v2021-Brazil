import React from "react";
import Link from "next/link";

interface Props {
    link?: string;
}

const Logo: React.FC<Props> = ({ link }) => {
    const href = link || "/";

    return (
        <Link href={href}>
            <a className="logo">
                <img src="./vercel.svg" alt="logo" />
            </a>
        </Link>
    );
};

export default Logo;
