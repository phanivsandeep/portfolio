import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Education
          </span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-lg p-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Master of Science in Computer Science</h3>
              <p className="text-xl text-gray-300">University at Buffalo, The State University of New York</p>
            </div>
            <p className="text-gray-400 mt-2 md:mt-0">Dec 2024</p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-300 mb-2">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Algorithms",
                  "Operating Systems",
                  "Database Systems",
                  "Deep Learning",
                  "Machine Learning",
                  "Computer Vision"
                ].map((course, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;