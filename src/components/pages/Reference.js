import React from 'react';
import Header from '../Header';
import Layout from '../Layout';
import Footer from '../Footer';
import WrapTitle from '../basics/WrapTitle';

function Refenerce() {
    return (
        <div id="wrap" className="light">
            <Header info="none" />
            <Layout>
                <section id="RefenerceCount">
                    <div className="container">
                    <WrapTitle text={["Reference","me"]}/>
                        <div className="Refenerce-cont">
                        Refenerce
                        </div>
                    </div>
                </section>
            </Layout>
            <Footer />
        </div>
    )
}
export default Refenerce;