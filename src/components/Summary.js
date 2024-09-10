import React from 'react';

const Summary = () => {
  return (
    <section className="bg-gray-100 text-center mb-12">
      <h1 className="text-5xl font-bold mb-4">Phani Visweswara Sandeep Chodavarapu</h1>
      <p className="text-xl mb-6">
        M.S. Computer Science graduate student at the University at Buffalo, passionate about Full-Stack Development, Machine Learning, and Data Analysis. With a solid foundation in cutting-edge technologies, I excel at developing scalable solutions that drive business growth and solve real-world problems.
      </p>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Key Projects</h2>
        <ul className="text-lg space-y-2">
          <li><strong>Historical Document Translation and Restoration</strong> – Leveraged OCR and deep learning for seamless translation and restoration of historical documents.</li>
          <li><strong>Real-time Twitter Sentiment Analysis</strong> – Built a full-stack sentiment analysis application using LSTM, Flask, and React with high scalability.</li>
          <li><strong>E-commerce Shopping Database</strong> – Developed a robust database system using PostgreSQL and Streamlit, hosted on AWS RDS.</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Professional Experience</h2>
        <p className="text-lg">
          Programmer Analyst with 2+ years of experience at Cognizant Technology Solutions, implementing full-stack web applications and improving development processes.
        </p>
      </div>
    </section>
  );
};

export default Summary;
