//components
import WorkSlider from '../../components/WorkSlider';
import Circles from '../../components/Circles';

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Work = () => {
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
            className='h2 xl:mt-12'
            >
              My Work <span className='text-accent'>.</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.4)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'
            className='mb-4 max-w-[400px] mx-auto lg:mx-0'
          >
            Là sinh viên đam mê lập trình và thiết kế, tôi đang nỗ lực để hoàn thiện kiến thức và kỹ năng của mình. Tôi đã có cơ hội thực hành qua các dự án và mong muốn mang lại giá trị thông qua công việc của mình. Hãy cùng nhau tạo ra những trải nghiệm độc đáo và sáng tạo!
            </motion.p>
        </div>
         {/* Slider */}
        <motion.div 
          variants={fadeIn('down', 0.6)} 
          initial='hidden' 
          animate='show' 
          exit='hidden'
          className="w-full xl:max-w-[65%]">
        <WorkSlider />
        </motion.div>
      </div>
    </div>
  </div>;
};

export default Work;
