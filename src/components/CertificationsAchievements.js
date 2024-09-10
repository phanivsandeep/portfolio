import React from 'react';

const CertificationItem = ({ certification, certifier }) => (
  <li className="mb-2">
    <strong>{certification}</strong> from {certifier}
  </li>
);

const AchievementItem = ({ description }) => (
  <li className="mb-2">{description}</li>
);

const CertificationsAchievements = () => {
  const certifications = [
    { certification: "AWS Cloud Practitioner", certifier: "AWS" },
    { certification: "Android Application Development", certifier: "Internshala" },
    { certification: "Introduction to IoT", certifier: "Cisco Networking Academy" },
    { certification: "Programming, Data Structures and Algorithms using Python", certifier: "NPTEL" },
    { certification: "CCNAv7 Enterprise Networking, Security, and Automation", certifier: "Cisco Networking Academy" },
    { certification: "CCNAv7 Switching, Routing, and Wireless Essentials", certifier: "Cisco Networking Academy" },
    { certification: "NDG Linux", certifier: "Cisco Networking Academy" },
    { certification: "User-Centric Computing for Human Computer Interaction", certifier: "NPTEL" },
    { certification: "Oxford Achiever", certifier: "Oxford University Press, Oxford University" },
    { certification: "Spanish Made Simple", certifier: "Udemy" }
  ];

  const achievements = [
    "Resource Manager and Training Coordinator at Advanced Academic Center - Core Committee",
    "Python and Android App Development Trainer, Student Mentor at Advanced Academic Center",
    "Part of World Youth Council Organization Teach from Home",
    "Achieved 2300+ Hackos in HackerRank"
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Certifications and Achievements</h2>
      
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-3">Certifications</h3>
        <ul className="list-disc list-inside">
          {certifications.map((cert, index) => (
            <CertificationItem key={index} {...cert} />
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Achievements</h3>
        <ul className="list-disc list-inside">
          {achievements.map((achievement, index) => (
            <AchievementItem key={index} description={achievement} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CertificationsAchievements;
