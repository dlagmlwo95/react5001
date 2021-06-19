import React from 'react';
import Header from '../Header';
import Layout from '../Layout';
import Footer from '../Footer';
import WrapTitle from '../basics/WrapTitle';

function Youtube() {
    return (
        <div id="wrap" className="light">
            <Header info="none" />
            <Layout>
                <section id="YoutubeCount">
                    <div className="container">
                    <WrapTitle text={["Youtube","me"]}/>
                        <div className="Youtube-cont">
                        Youtube
                        </div>
                    </div>
                </section>
            </Layout>
            <Footer />
        </div>
    )
}
export default Youtube;