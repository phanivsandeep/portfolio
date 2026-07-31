import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, Award, ChevronRight } from 'lucide-react';
import data from '../data/data.json';

const Experience = () => {
  const getCompanyIcon = company => {
    if (company.toLowerCase().includes('easley'))
      return <Award className='w-5 h-5' />;
    if (company.toLowerCase().includes('kaleida'))
      return <Building2 className='w-5 h-5' />;
    if (company.toLowerCase().includes('metlife'))
      return <Building2 className='w-5 h-5' />;
    if (company.toLowerCase().includes('cognizant'))
      return <Building2 className='w-5 h-5' />;
    return <Building2 className='w-5 h-5' />;
  };

  return (
    <section id='experience' className='py-20'>
      <div className='max-w-6xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-5xl font-bold mb-4'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-purple-500'>
              Professional Journey
            </span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            My career progression showcasing growth from intern to lead
            developer across diverse industries
          </p>
        </motion.div>

        <div className='relative'>
          {/* Timeline Line */}
          <div className='absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500'></div>

          <div className='space-y-12'>
            {data.experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex items-center ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className='absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10'>
                  <div className='w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg'></div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    idx % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10'
                  >
                    {/* Header */}
                    <div className='flex items-start justify-between mb-4'>
                      <div className='flex items-center gap-3'>
                        <div className='p-2 bg-blue-500/20 rounded-lg text-blue-400'>
                          {getCompanyIcon(exp.company)}
                        </div>
                        <div>
                          <h3 className='text-xl font-bold text-white'>
                            {exp.title}
                          </h3>
                          <p className='text-blue-400 font-medium'>
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      {exp.current && (
                        <span className='bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium border border-green-500/30'>
                          Current
                        </span>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className='flex flex-wrap gap-4 mb-4 text-sm text-gray-400'>
                      <div className='flex items-center gap-2'>
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Building2 size={14} />
                        <span>{exp.type}</span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className='space-y-3'>
                      <h4 className='text-gray-300 font-semibold text-sm uppercase tracking-wide'>
                        Key Achievements
                      </h4>
                      <div className='space-y-2'>
                        {exp.responsibilities
                          .slice(0, 3)
                          .map((resp, respIdx) => (
                            <div
                              key={respIdx}
                              className='flex items-start gap-3'
                            >
                              <ChevronRight
                                size={16}
                                className='text-blue-500 mt-0.5 flex-shrink-0'
                              />
                              <p className='text-gray-300 text-sm leading-relaxed'>
                                {resp.length > 150
                                  ? `${resp.substring(0, 150)}...`
                                  : resp}
                              </p>
                            </div>
                          ))}
                        {exp.responsibilities.length > 3 && (
                          <p className='text-gray-500 text-xs italic ml-6'>
                            +{exp.responsibilities.length - 3} more
                            responsibilities
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Gradient Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-6'
        >
          <div className='text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20'>
            <div className='text-3xl font-bold text-blue-400 mb-2'>4+</div>
            <div className='text-gray-300'>Years Experience</div>
          </div>
          <div className='text-center p-6 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl border border-green-500/20'>
            <div className='text-3xl font-bold text-green-400 mb-2'>6</div>
            <div className='text-gray-300'>Companies</div>
          </div>
          <div className='text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20'>
            <div className='text-3xl font-bold text-purple-400 mb-2'>Lead</div>
            <div className='text-gray-300'>Current Role</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
