import { motion } from 'framer-motion';
import profilePic from '../assets/sandeep.png';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            About Me
          </span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
         <div className="text-gray-300 space-y-4">
  <p>
    I'm a Full Stack Software Engineer with expertise in building scalable web applications, AI solutions, and microservices. Currently, I'm pursuing my Master's in Computer Science at the University at Buffalo, with professional experience across healthcare, technology consulting, and software development.
  </p>
  <p>
    My work spans developing cloud-native applications, optimizing backend architectures, and designing intuitive front-end interfaces. At Kaleida Health, I architected a healthcare platform leveraging AWS, Spring Boot, and React, ensuring high availability and HIPAA compliance. Previously, at Cognizant, I built microservices-based insurance solutions for MetLife, streamlining claim processing and CI/CD pipelines.
  </p>
  <p>
    I'm passionate about cloud computing, system design, and building efficient, user-centric applications that solve real-world challenges. My diverse experience, from leading teams in startups to working with global enterprises, enables me to adapt and innovate in dynamic tech environments.
  </p>
</div>

          <motion.div 
            className="order-first md:order-last"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur-lg opacity-50 transform -rotate-6"></div>
              <div className="relative">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-[400px] object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;