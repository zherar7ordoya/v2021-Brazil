import { NextPage } from "next";
import Link from "next/link";

import Layout from "../components/Layout";
import useTranslation from "../intl/useTranslation";

const Home: NextPage = () => {
    const { term } = useTranslation();

    return (
        <Layout title={ term("home")} className="home" >
            <section className="hero">
                <div className="message">
                    <h1>Next INTL</h1>
                    <p>{ term("slogan") }</p>
                    <Link href="/about">
                        <a className="button">{ term("about") }</a>
                    </Link>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
