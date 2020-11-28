import React from "react";
import Link from "next/link";

import useTranslation from "../intl/useTranslation";

interface Props {
    className?: string;
}

const Navigation: React.FC<Props> = ({ className }) => {
    const { term, locale } = useTranslation();
    const navClass = className || "navigation";

    return (
        <nav className={navClass}>
            <ul>
                <li>
                    <Link href={`/`} as={`/`}>
                        <a>{term("home")}</a>
                    </Link>
                </li>
                <li>
                    <Link href={`/[lang]/articles`} as={`/${locale}/articles`}>
                        <a>{ term("articles")}</a>
                    </Link>
                </li>
                <li>
                    <Link href={`/about`} as={`/about`}>
                        <a>{ term("about")}</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
