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
      title: "Full Stack Web Developer(Co-op)",
      company: "Kaleida Health",
      date: "August 2024 - Present",
      location: "Buffalo, New York",
      description: [
        "Designed and deployed multi-tiered applications with high availability and fault-tolerant features on AWS.",
        "Enhanced scalability and system integration for distributed environments, leveraging AWS cloud services.",
        "Developed secure integration features, focusing on code quality and operational excellence.",
        "Develop responsive front-end and back-end features using React.js, Framer, Tailwind CSS, Spring Boot, and MySQL and deploy and maintain applications on AWS servers.",
        "Maintain admin, patient, and doctor portals with chat functionality between doctors and patients.",
        "Implement a translation feature for patients from diverse language backgrounds."
      ]
    },
    {
      title: "Programmer Analyst",
      company: "Cognizant Technology Solutions",
      date: "July 2021 - May 2023",
      location: "Hyderabad, India",
      description: [
        "Built responsive web applications using React, Redux, and RESTful APIs, improving user engagement by 25% and reducing page load time by 40% through optimized component architecture.",
        "Implemented CI/CD pipelines using BitBucket, Bamboo, and Jenkins, reducing deployment time by 25% and achieving 90% test automation coverage.",
        "Developed microservices using Spring Boot and AWS (ECS, RDS, CloudWatch), supporting 50+ distributed services with 99.9% uptime and 30% improved scalability.",
        "Collaborated with UX team to enhance user interfaces, leading to 15% higher satisfaction rates and 25% increased mobile user retention"
      ]
    },
    {
      title: "Programmer Analyst Trainee",
      company: "Cognizant Technology Solutions",
      date: "March 2021 - July 2023",
      location: "Hyderabad, India",
      description: [
        "Developed scalable applications using Java Spring Boot, Angular, and AWS cloud services",
        "Built RESTful APIs integrated with MySQL databases for high-volume data processing",
        "Participated in agile development cycles with daily stand-ups and sprint planning"
      ]
    },
    {
      title: "Application Development Intern",
      company: "COSUPS",
      date: "March 2020 - June 2020",
      location: "Hyderabad, India",
      description: [
        "Led a team of 5 interns to develop a real-time Android app integrated with Firebase for an event management company and collaborated closely with stakeholders to gather requirements and deliver a user-friendly, high-performance application."
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