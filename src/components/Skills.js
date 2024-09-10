import React from 'react';

const SkillCategory = ({ category, skills }) => (
  <div className="mb-4">
    <h3 className="text-xl font-semibold mb-2">{category}</h3>
    <p className="text-gray-700">{skills.join(', ')}</p>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        "Python", "Java", "JavaScript", "SQL", "C", "C++", "C#", "Bash", "Swift", "Kotlin", 
        "NoSQL", "HTML/CSS", "PHP"
      ]
    },
    {
      category: "Frameworks",
      skills: [
        "TensorFlow", "PyTorch", "React", "Node.js", "Angular", ".NET", "SpringBoot", 
        "Django", "Flask", "JUnit", "Maven", "BootStrap", "JQuery", "RestAPI"
      ]
    },
    {
      category: "Databases",
      skills: [
        "MySQL", "PostgreSQL", "MongoDB", "Oracle", "SQL Server"
      ]
    },
    {
      category: "Tools",
      skills: [
        "Git", "Docker", "Kubernetes", "AWS", "Azure", "GCP", "Jenkins", "Terraform", 
        "JIRA", "Visual Studio Code", "Eclipse", "VMware", "Azure DevOps", "Tableau", 
        "PowerBI", "Android Studio", "XCode", "Unreal Engine", "Unity"
      ]
    },
    {
      category: "Concepts",
      skills: [
        "Machine Learning", "Cloud Computing", "Microservices", "CI/CD", "DevOps", 
        "Data Analytics", "RESTful APIs", "Agile Methodologies", "System Design", 
        "Security Protocols", "Deep Learning", "Computer Vision"
      ]
    },
    
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      {skillCategories.map((category, index) => (
        <SkillCategory key={index} {...category} />
      ))}
    </section>
  );
};

export default Skills;