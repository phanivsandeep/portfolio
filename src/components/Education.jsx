import { motion } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  Award,
  Calendar,
  MapPin,
  Star,
} from 'lucide-react';

const Education = () => {
  const courses = [
    'Algorithms & Data Structures',
    'Operating Systems',
    'Database Systems',
    'Deep Learning',
    'Machine Learning',
    'Computer Vision',
    'Software Engineering',
    'Distributed Systems',
  ];

  const achievements = [
    {
      title: "Master's Degree",
      description: 'Computer Science',
      icon: GraduationCap,
      color: 'blue',
    },
    {
      title: 'University',
      description: 'University at Buffalo, SUNY',
      icon: MapPin,
      color: 'green',
    },
    {
      title: 'Graduation',
      description: 'December 2024',
      icon: Calendar,
      color: 'purple',
    },
  ];

  return (
    <section id='education' className='py-20'>
      <div className='max-w-6xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-5xl font-bold mb-4'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500'>
              Academic Excellence
            </span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            My educational journey and academic achievements in computer science
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
          {/* Graduate Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='lg:col-span-1'
          >
            <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10 relative overflow-hidden'>
              {/* Background Pattern */}
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl'></div>

              <div className='relative z-10'>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='p-3 bg-yellow-500/20 rounded-xl text-yellow-400'>
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold text-white'>
                      Master of Science
                    </h3>
                    <p className='text-yellow-400 font-medium'>
                      Computer Science
                    </p>
                  </div>
                </div>

                <div className='space-y-4 mb-6'>
                  <div className='flex items-center gap-3 text-gray-300'>
                    <MapPin size={18} className='text-green-400' />
                    <span>
                      University at Buffalo, The State University of New York
                    </span>
                  </div>
                  <div className='flex items-center gap-3 text-gray-300'>
                    <Calendar size={18} className='text-purple-400' />
                    <span>Graduated: December 2024</span>
                  </div>
                  <div className='flex items-center gap-3 text-gray-300'>
                    <Award size={18} className='text-blue-400' />
                    <span>
                      Advanced Academic Center - Core Committee Member
                    </span>
                  </div>
                </div>

                <div className='bg-gray-700/50 rounded-lg p-4'>
                  <h4 className='text-gray-300 font-semibold mb-3 flex items-center gap-2'>
                    <BookOpen size={18} className='text-blue-400' />
                    Academic Focus
                  </h4>
                  <p className='text-gray-400 text-sm leading-relaxed'>
                    Specialized in machine learning, deep learning, and computer
                    vision with hands-on experience in developing scalable
                    software solutions and AI-powered applications.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Undergraduate Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='lg:col-span-1'
          >
            <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='p-3 bg-orange-500/20 rounded-xl text-orange-400'>
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-white'>
                    Bachelor of Technology
                  </h3>
                  <p className='text-orange-400 font-medium'>
                    Computer Science Engineering
                  </p>
                </div>
              </div>

              <div className='space-y-4 mb-6'>
                <div className='flex items-center gap-3 text-gray-300'>
                  <MapPin size={18} className='text-green-400' />
                  <span>JNTU Hyderabad</span>
                </div>
                <div className='flex items-center gap-3 text-gray-300'>
                  <Calendar size={18} className='text-purple-400' />
                  <span>Graduated: 2021</span>
                </div>
              </div>

              <div className='bg-gray-700/50 rounded-lg p-4'>
                <h4 className='text-gray-300 font-semibold mb-3 flex items-center gap-2'>
                  <BookOpen size={18} className='text-orange-400' />
                  Foundation
                </h4>
                <p className='text-gray-400 text-sm leading-relaxed'>
                  Strong foundation in computer science fundamentals, data
                  structures, algorithms, and software engineering principles
                  that form the basis of my technical expertise.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-3 gap-6'
        >
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className='text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10'
            >
              <div
                className={`p-3 bg-${achievement.color}-500/20 rounded-lg text-${achievement.color}-400 mx-auto mb-4 w-fit`}
              >
                <achievement.icon size={24} />
              </div>
              <h5 className='text-lg font-bold text-white mb-2'>
                {achievement.title}
              </h5>
              <p className='text-gray-400 text-sm'>{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mt-12 text-center'
        >
          <div className='bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-yellow-500/20'>
            <h4 className='text-xl font-bold text-white mb-4 flex items-center justify-center gap-3'>
              <Award size={24} className='text-yellow-400' />
              Leadership & Training
            </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300'>
              <div className='flex items-center justify-center gap-2'>
                <Star size={16} className='text-yellow-400' />
                <span>Resource Manager & Training Coordinator</span>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <Star size={16} className='text-yellow-400' />
                <span>Python & Android Development Trainer</span>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <Star size={16} className='text-yellow-400' />
                <span>Student Mentor</span>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <Star size={16} className='text-yellow-400' />
                <span>World Youth Council Organization</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
