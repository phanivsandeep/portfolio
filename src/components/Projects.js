import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Historical Document Translation and Restoration",
      technologies: ["Python","PyTesseract", "Helsinki-NLP", "OpenCV"],
      description: [
        "Developed an end-to-end pipeline for translating and restoring historical documents, leveraging PyTesseract for OCR, Helsinki-NLP for translation, and OpenCV for image inpainting.",
        "Engineered a solution to maintain the visual integrity of historical documents post-translation by accurately matching the original font style, size, and layout using custom bounding box algorithms.",
        "Optimized text extraction and translation processes, achieving reliable text conversion while preserving document aesthetics.",
        "Implemented advanced image processing techniques, including contour detection and font estimation, ensuring computational efficiency and scalability of the application.",
        "Fine-tuned pre-trained models for OCR and translation, enhancing accuracy and adaptability for historical datasets, contributing to improved data accessibility and preservation."
      ]
    },
    {
      title: "Real-time Twitter Sentiment Analysis",
      technologies: ["PyTorch", "Flask", "React", "AWS S3"],
      description: [
        "Architected a scalable sentiment analysis application using LSTM, BiLSTM, and GRU, achieving model accuracies of 75%, 70%, and 78%, respectively.",
        "Developed a full-stack pipeline with Flask and React, integrating the Twitter API for real-time data retrieval and sentiment prediction.",
        "Deployed the application on AWS S3, ensuring high availability and enabling seamless scaling to handle increased user demand."
      ]
    },
    {
        title: "E-commerce Shopping Database",
        technologies: ["PostgreSQL", "Streamlit", "AWS RDS", "Python", "psycopg2"],
        description: [
            "Engineered a robust e-commerce database architecture using PostgreSQL, hosted on AWS RDS to ensure reliability and scalability with 99.9% uptime.",
            "Developed and integrated a Streamlit-based front end, facilitating secure and efficient CRUD operations, enhancing database interaction speed by 40%.",
            "Implemented ACID principles and advanced security protocols, significantly reducing data vulnerability and ensuring transactional integrity."
        ]
      },
      {
        title: "Mail Order Pharmacy",
        technologies: ["Angular", "Springboot", "Mockito", "MySQL"],
        description: [
            "Built and architected a secure and reliable mail order pharmacy application using MySQL, Angular, SpringBoot.",
            "Integrated with payment processing systems and shipping carriers to automate 80% of order fulfillment process, reducing processing time by 25%."
        ]
      },
      {
        title: "Road Obstacle Detection",
        technologies: ["Python", "OpenCV", "YOLO", "SciKitLearn"],
        description: [
            "Created YOLO-based model for real-time road obstacle detection (e.g., potholes, cones, pedestrians) achieving 83% accuracy in testing."
        ]
      },
      {
        title: "Smart Attendance",
        technologies: ["Java", "Firebase", "Python", "Android Studio"],
        description: [
          "Constructed a highly accurate and consistent attendance-marking application, checks schedules and GPS ranges to eliminate location based attendance errors by 90%.",
          "Register students and instructors by MAC address to ensure accurate attendance marking and eliminate network spoofed attendance errors by 90%."
        ]
      },
      {
        title: "Tracking Speed of Vehicles",
        technologies: ["Java", "Firebase", "Android Studio"],
        description: [
          "Engineered a camera-based checkpoint system, reducing hardware and infrastructure costs by 50%, to capture vehicle timestamps efficiently.",
          "Accomplished a 50% cost reduction by utilizing checkpoint timestamps to calculate vehicle speeds, enhancing traffic monitoring and road safety."
        ]
      },
      
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <div className="text-sm text-gray-600">{project.technologies.join(', ')}</div>
          </div>
          <ul className="list-disc list-inside">
            {project.description.map((item, i) => (
              <li key={i} className="mb-1">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Projects;
