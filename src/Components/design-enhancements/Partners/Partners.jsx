import React from 'react';
import './partners.css'; // Import custom CSS

const Partners = () => {
    return (
        <div className="partners-container">
            <h1 className="partners-heading">
                COMPANIES THAT CHOOSE <br /> ZACATECAS
            </h1>
            <span className="underlining"/>
            {/* logo grid */}
            <section className="partners-grid">
                {
                    Array.from({ length: 15 }, (_, i) => (
                        <div 
                        data-aos="fade-up"
                        data-aos-delay={i * 50}
                        data-aos-duration="500"
                        data-aos-offset="200"
                        key={i} className="partner-logo">
                            <img
                                src={`/assets/partners/partner (${i + 1}).png`}
                                alt="logo"
                                className="partner-img"
                            />
                        </div>
                    ))
                }
            </section>
        </div>
    );
};

export default Partners;