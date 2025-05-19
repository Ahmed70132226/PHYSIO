import React from 'react';
import home1 from './Images/home1.png';

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-10 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Physiotherapy / Physical Therapy</h1>
        <p className="text-lg text-gray-600">
          Empowering movement, restoring health, and enhancing lives through evidence-based physiotherapy.
        </p>
      </div>

       <div className="max-w-6xl mx-auto mb-12">
        <img
          src={home1}
          alt="Physiotherapy session"
          className="w-full  rounded-2xl shadow-md object-cover"
        />
      </div>
      <br></br>

      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2 border-gray-300">Terminology</h2>
        <p className="text-gray-700 leading-relaxed">
          Worldwide, the physiotherapy community is divided by name, with three different
          primary titles used: <strong>physiotherapy</strong>, <strong>physical therapy</strong>, and <strong>kinesiotherapy</strong>.
          Within the term physiotherapist, there are also language derivations such as <em>fisio</em>,
          <em>fisicos</em>, <em>fysio</em>, and <em>fiso</em>. Finding a single word to describe the community is challenging.
        </p>
      </section>

      <section className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">What is Physiotherapy?</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Physiotherapy is a treatment that can ease pain and improve movement if you have an injury,
          illness, or disability. It uses exercise, manual therapy, massage, education, and advice to
          help patients restore, maintain, and make the most of their mobility and well-being.
        </p>
      </section>

      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">What Physiotherapy is For</h2>
        <p className="mb-4 text-gray-700">Physiotherapy is used to treat a wide range of problems, including:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Bone, joint, and muscle issues such as arthritis, back/neck pain, or sports injuries.</li>
          <li>Heart and circulation problems like high blood pressure or post-heart attack recovery.</li>
          <li>Movement issues after a stroke or conditions like MS or Parkinson’s disease.</li>
          <li>Breathing difficulties due to asthma or chronic conditions (COPD).</li>
          <li>Pregnancy-related issues like pelvic pain or incontinence.</li>
        </ul>
        <p className="mt-4 text-gray-700">
          It's also commonly used to improve movement, strength, and stamina after surgery.
        </p>
      </section>

      
      <section className="bg-primary/10 rounded-xl shadow-md p-8 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4 ">Our Approach</h2>
        <p className="text-gray-700 leading-relaxed">
          At <strong>Physio</strong>, we tailor every treatment plan to meet individual needs. Our team combines
          clinical expertise with compassion, guiding you through each step of your recovery journey.
          We emphasize patient education and preventive strategies to ensure long-term health benefits.
        </p>
      </section>
    </div>
  );
};

export default Home;
