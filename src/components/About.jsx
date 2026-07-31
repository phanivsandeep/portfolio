import { motion } from 'framer-motion';
import {
  Code,
  Cloud,
  Database,
  Users,
  Award,
  Zap,
  Target,
  Heart,
  Coffee,
  Rocket,
} from 'lucide-react';
import profilePic from '../assets/sandeep.png';

const About = () => {
  const stats = [
    { icon: Code, label: 'Languages', value: '5+', color: 'blue' },
    { icon: Cloud, label: 'Cloud Platforms', value: '2', color: 'cyan' },
    { icon: Database, label: 'Databases', value: '8+', color: 'green' },
    { icon: Users, label: 'AI Software Engineer', value: 'Cisco Systems', color: 'purple' },
  ];

  const interests = [
    { icon: Rocket, text: 'Cloud Architecture', color: 'blue' },
    { icon: Zap, text: 'AI/ML Solutions', color: 'yellow' },
    { icon: Target, text: 'System Design', color: 'green' },
    { icon: Heart, text: 'Open Source', color: 'red' },
    { icon: Coffee, text: 'Tech Innovation', color: 'orange' },
    { icon: Award, text: 'Leadership', color: 'purple' },
  ];

  return (
    <section id='about' className='py-20'>
      <div className='max-w-7xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-5xl font-bold mb-4'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
              About Me
            </span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Passionate full-stack engineer crafting innovative solutions and
            leading teams to success
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='order-first lg:order-last'
          >
            <div className='relative max-w-md mx-auto'>
              {/* Animated Background */}
              <div className='absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 animate-pulse'></div>
              <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-20 transform rotate-6'></div>

              {/* Profile Image Container */}
              <div className='relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10'>
                <img
                  src={profilePic}
                  alt='Phani V Sandeep Chodavarapu'
                  className='w-full h-[450px] object-cover rounded-xl shadow-2xl'
                />

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className='absolute top-4 right-4 p-2 bg-blue-500/20 rounded-lg text-blue-400'
                >
                  <Code size={20} />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className='absolute bottom-4 left-4 p-2 bg-purple-500/20 rounded-lg text-purple-400'
                >
                  <Cloud size={20} />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='space-y-6'
          >
            <div className='space-y-4 text-gray-300 leading-relaxed'>
              <p className='text-lg'>
                I'm a{' '}
                <span className='text-blue-400 font-semibold'>
                  Full Stack Software Engineer
                </span>{' '}
                with expertise in building scalable web applications, AI
                solutions, and microservices. Currently pursuing my Master's in
                Computer Science at the University at Buffalo, with professional
                experience across healthcare, technology consulting, and
                software development.
              </p>

              <p>
                My work spans developing{' '}
                <span className='text-purple-400 font-semibold'>
                  cloud-native applications
                </span>
                , optimizing backend architectures, and designing intuitive
                front-end interfaces. At Kaleida Health, I architected a
                healthcare platform leveraging AWS, Spring Boot, and React,
                ensuring high availability and HIPAA compliance.
              </p>

              <p>
                I'm passionate about{' '}
                <span className='text-pink-400 font-semibold'>
                  cloud computing
                </span>
                , system design, and building efficient, user-centric
                applications that solve real-world challenges. My diverse
                experience, from leading teams in startups to working with
                global enterprises, enables me to adapt and innovate in dynamic
                tech environments.
              </p>
            </div>

            {/* Quick Stats */}
            <div className='grid grid-cols-2 gap-4 pt-6'>
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className={`p-4 bg-gradient-to-br from-${stat.color}-500/10 to-${stat.color}-600/10 rounded-xl border border-${stat.color}-500/20 hover:border-${stat.color}-500/50 transition-all duration-300`}
                >
                  <div
                    className={`flex items-center gap-3 text-${stat.color}-400 mb-2`}
                  >
                    <stat.icon size={20} />
                    <span className='text-sm font-medium'>{stat.label}</span>
                  </div>
                  <div className='text-white font-bold text-lg'>
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Interests & Passions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700'
        >
          <h3 className='text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-3'>
            <Heart size={28} className='text-red-400' />
            What Drives Me
          </h3>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
            {interests.map((interest, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group text-center p-4 bg-gradient-to-br from-${interest.color}-500/10 to-${interest.color}-600/10 rounded-xl border border-${interest.color}-500/20 hover:border-${interest.color}-500/50 transition-all duration-300 hover:scale-105`}
              >
                <div
                  className={`p-3 bg-${interest.color}-500/20 rounded-lg text-${interest.color}-400 mx-auto mb-3 w-fit group-hover:scale-110 transition-transform duration-300`}
                >
                  <interest.icon size={24} />
                </div>
                <p className='text-gray-300 text-sm font-medium group-hover:text-white transition-colors'>
                  {interest.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
