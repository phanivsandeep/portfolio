import { motion } from 'framer-motion';
import data from '../data/data.json';

const CertificationsAchievements = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Certifications & Achievements
          </span>
        </h2>

        <div className="grid gap-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {data.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 p-4 rounded-lg"
                >
                  <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
                  <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Achievements</h3>
            <div className="grid gap-4">
              {data.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 p-4 rounded-lg"
                >
                  <p className="text-gray-300">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsAchievements;