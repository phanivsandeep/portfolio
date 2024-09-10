import React from 'react';

const ExperienceItem = ({ title, company, date, location, description }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-lg font-medium">{company}</p>
    <p className="text-sm text-gray-600 mb-2">{date} | {location}</p>
    <ul className="list-disc list-inside">
      {description.map((item, index) => (
        <li key={index} className="mb-1">{item}</li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: "Programmer Analyst",
      company: "Cognizant Technology Solutions",
      date: "July 2021 - May 2023",
      location: "Hyderabad, India",
      description: [
        "Developed and maintained a full-stack web application using React, jQuery, Java, Spring Boot, and SQL.",
        "Implemented streamlined development processes, enhancing productivity by 25%."
      ]
    },
    {
      title: "Programmer Analyst Trainee",
      company: "Cognizant Technology Solutions",
      date: "March 2021 - July 2023",
      location: "Hyderabad, India",
      description: [
        "Collaborated on Java, SQL, Angular, Spring Boot, JUnit, AWS, Docker projects.",
        "Assisted managers in delivering a real-time customer service project, using insights to improve customer satisfaction by 10%."
      ]
    },
    {
      title: "Application Development Intern",
      company: "COSUPS",
      date: "March 2020 - June 2020",
      location: "Hyderabad, India",
      description: [
        "Led a team of 5 interns and developed a real-time Android application integrated with Firebase for COSUPS, an event management company."
      ]
    },
    
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} {...experience} />
      ))}
    </section>
  );
};

export default Experience;