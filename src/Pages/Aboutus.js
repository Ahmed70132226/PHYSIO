import React from "react";
import faqData from '../Data/faqData';
import about1 from './Images/about1.png';
import about2 from './Images/about2.png';
import about3 from './Images/about3.png';
import about4 from './Images/about4.png';


const AboutPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">

            <h1 className="text-5xl font-bold text-center text-gray-800">About Us</h1>


            <div className="bg-white shadow-xl rounded-3xl px-8 py-10 md:px-16 space-y-8">

                <section className="bg-light p-4 rounded shadow-sm mb-5 text-center">
                    <h2 className="h4 mb-3">  The Physio story begins where a Physiotherapist, a Chiropractor, and an Exercise Physiologist saw a major problem in the private practice model</h2>

                </section>

                <section className="bg-light p-4 rounded shadow-sm mb-5 text-center">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Who We Are</h2>
                    <p className="lead">
                        At <b>Physio</b> we believe in the power of movement to transform lives. Our clinic was founded 
                        with a singular mission: to deliver evidence-based, patient-centered physiotherapy that restores 
                        function, reduces pain, and enhances quality of life.
                        Whether you're recovering from an injury, managing a chronic condition, or seeking to optimize 
                        your physical performance, our experienced team is here to guide you every step of the way.
                        <br /><br />
                        With state-of-the-art facilities and a holistic approach to care, we integrate manual therapy, 
                        rehabilitation exercises, posture correction, and education to empower our patients. Conveniently 
                        located and easily accessible, <b>Physio</b> provides a welcoming environment where your comfort, 
                        progress, and goals are our top priorities.
                    </p>
                </section>

                <div className="mt-8 bg-gray-50 border border-gray-200 p-6 rounded-xl text-center shadow-md">
                    <br></br>
                    <h3 className="text-2xl font-bold mb-4">What We Offer</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {[about1, about2, about3, about4].map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt={`Service ${i + 1}`}
                                className="w-full h-40 object-contain rounded-lg shadow hover:scale-105 transition-transform duration-300 ease-in-out bg-white p-4"
                            />
                        ))}
                    </div>
                </div>
            </div>


            <div className="space-y-20 px-20 md:px-40  ">
                <br></br>
                <h2 className="text-4xl font-bold text-center text-gray-800">Frequently Asked Questions</h2>
                <br></br>
                <div className="grid gap-100 text-center ">
                    {faqData.map((faq, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-xl"
                        >
                            <section className="bg-light p-4 rounded shadow-sm mb-5 text-center">
                                <h2 className="h4 mb-3">{faq.question}</h2>
                                <p className="lead">
                                    {faq.answer}
                                </p>
                            </section>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
