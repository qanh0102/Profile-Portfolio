//components
import ServiceSlider from '../../components/ServiceSlider';
import Circles from '../../components/Circles';

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Services = () => {
  return <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        {/* text */}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2 
            variants={fadeIn('up', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className='h2 xl:mt-8'
            >
              My Services <span className='text-accent'>.</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.4)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'
            className='mb-4 max-w-[400px] mx-auto lg:mx-0'
          >
            Tôi là sinh viên và đang tập trung vào việc học lập trình và thiết kế. Sự sáng tạo và đam mê là động lực của tôi. Hãy cùng nhau chia sẻ và trải nghiệm những ý tưởng mới, và tôi sẽ cố gắng hết mình để hỗ trợ bạn!
            </motion.p>
        </div>
         {/* Slider */}
        <motion.div 
          variants={fadeIn('down', 0.6)} 
          initial='hidden' 
          animate='show' 
          exit='hidden'
          className="w-full xl:max-w-[65%]">
        <ServiceSlider />
        </motion.div>
      </div>
    </div>
  </div>;
};

export default Services;
