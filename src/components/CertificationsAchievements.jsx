import { motion } from 'framer-motion';
import {
  Award,
  Trophy,
  Star,
  FileText,
  Medal,
  Crown,
  Target,
  Users,
  BookOpen,
  Zap,
  Cloud,
  Smartphone,
  Network,
} from 'lucide-react';
import data from '../data/data.json';

const CertificationsAchievements = () => {
  const getCertIcon = title => {
    if (title.toLowerCase().includes('aws'))
      return <Cloud className='w-6 h-6' />;
    if (title.toLowerCase().includes('android'))
      return <Smartphone className='w-6 h-6' />;
    if (title.toLowerCase().includes('cisco'))
      return <Network className='w-6 h-6' />;
    if (title.toLowerCase().includes('nptel'))
      return <BookOpen className='w-6 h-6' />;
    if (title.toLowerCase().includes('oxford'))
      return <Crown className='w-6 h-6' />;
    return <FileText className='w-6 h-6' />;
  };

  const getCertColor = issuer => {
    const colors = {
      AWS: 'from-orange-500 to-yellow-500',
      Internshala: 'from-blue-500 to-cyan-500',
      Cisco: 'from-blue-600 to-blue-800',
      NPTEL: 'from-red-500 to-pink-500',
      Udemy: 'from-purple-500 to-indigo-500',
      Oxford: 'from-yellow-500 to-orange-500',
    };
    return colors[issuer] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id='achievements' className='py-20'>
      <div className='max-w-7xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-5xl font-bold mb-4'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500'>
              Certifications & Achievements
            </span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Professional certifications and notable achievements throughout my
            career
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10'>
              <div className='flex items-center gap-4 mb-8'>
                <div className='p-3 bg-amber-500/20 rounded-xl text-amber-400'>
                  <Award size={28} />
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-white'>
                    Certifications
                  </h3>
                  <p className='text-gray-400 text-sm'>
                    {data.certifications.length} professional certifications
                  </p>
                </div>
              </div>

              <div className='grid grid-cols-1 gap-4'>
                {data.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className='group relative overflow-hidden'
                  >
                    <div className='bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-xl p-4 border border-gray-600 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10'>
                      <div className='flex items-center gap-4'>
                        <div
                          className={`p-2 bg-gradient-to-r ${getCertColor(cert.issuer)} rounded-lg text-white`}
                        >
                          {getCertIcon(cert.title)}
                        </div>
                        <div className='flex-1'>
                          <h4 className='text-white font-semibold text-sm group-hover:text-amber-400 transition-colors'>
                            {cert.title}
                          </h4>
                          <p className='text-gray-400 text-xs mt-1'>
                            {cert.issuer}
                          </p>
                        </div>
                        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                          <Star size={16} className='text-amber-400' />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10'>
              <div className='flex items-center gap-4 mb-8'>
                <div className='p-3 bg-yellow-500/20 rounded-xl text-yellow-400'>
                  <Trophy size={28} />
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-white'>
                    Achievements
                  </h3>
                  <p className='text-gray-400 text-sm'>
                    {data.achievements.length} notable achievements
                  </p>
                </div>
              </div>

              <div className='space-y-4'>
                {data.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className='group'
                  >
                    <div className='flex items-start gap-4 p-4 bg-gradient-to-r from-gray-700/30 to-gray-800/30 rounded-xl border border-gray-600 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10'>
                      <div className='p-2 bg-yellow-500/20 rounded-lg text-yellow-400 flex-shrink-0 mt-1'>
                        <Medal size={18} />
                      </div>
                      <div className='flex-1'>
                        <p className='text-gray-300 text-sm leading-relaxed group-hover:text-yellow-300 transition-colors'>
                          {achievement}
                        </p>
                      </div>
                      <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0'>
                        <Star size={16} className='text-yellow-400' />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mt-16'
        >
          <div className='bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700'>
            <h3 className='text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-3'>
              <Zap size={28} className='text-yellow-400' />
              Achievement Highlights
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
              <div className='text-center p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-xl border border-orange-500/20'>
                <div className='p-3 bg-orange-500/20 rounded-lg text-orange-400 mx-auto mb-3 w-fit'>
                  <Award size={24} />
                </div>
                <div className='text-2xl font-bold text-white mb-1'>10+</div>
                <div className='text-gray-400 text-sm'>Certifications</div>
              </div>

              <div className='text-center p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20'>
                <div className='p-3 bg-blue-500/20 rounded-lg text-blue-400 mx-auto mb-3 w-fit'>
                  <Users size={24} />
                </div>
                <div className='text-2xl font-bold text-white mb-1'>2300+</div>
                <div className='text-gray-400 text-sm'>HackerRank Points</div>
              </div>

              <div className='text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20'>
                <div className='p-3 bg-green-500/20 rounded-lg text-green-400 mx-auto mb-3 w-fit'>
                  <Target size={24} />
                </div>
                <div className='text-2xl font-bold text-white mb-1'>Lead</div>
                <div className='text-gray-400 text-sm'>Current Role</div>
              </div>

              <div className='text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20'>
                <div className='p-3 bg-purple-500/20 rounded-lg text-purple-400 mx-auto mb-3 w-fit'>
                  <BookOpen size={24} />
                </div>
                <div className='text-2xl font-bold text-white mb-1'>
                  Trainer
                </div>
                <div className='text-gray-400 text-sm'>Mentor Role</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsAchievements;
