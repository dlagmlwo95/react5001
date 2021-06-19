import React from 'react';
import Header from '../Header';
import Layout from '../Layout';
import Footer from '../Footer';
import WrapTitle from '../basics/WrapTitle';

function Script() {
    return (
        <div id="wrap" className="light">
            <Header info="none" />
            <Layout>
                <section id="ScriptCount">
                    <div className="container">
                        <WrapTitle text={["Script", "me"]} />
                        <div className="Script-cont">
                            Script
                        </div>
                    </div>
                </section>
            </Layout>
            <Footer />
        </div>
    )
}
export default Script;