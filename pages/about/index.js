import React, {useState} from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
} from "react-icons/fa";

import {
  SiAdobexd,
  SiAdobephotoshop,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";


//  data
const aboutData = [
  {
    key: 'skills',
    title: 'Kỹ năng',
    info: [
      {
        key: 'web-development',
        title: 'Phát triển Web',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiMongodb key="mongodb" />,
          <SiNodedotjs key="nodejs" />,
        ],
      },
      {
        key: 'ui-ux-design',
        title: 'Thiết kế UI/UX',
        icons: [<SiAdobexd key="adobexd" />, <SiAdobephotoshop key="photoshop" />],
      },
    ],
  },
  {
    key: 'awards',
    title: 'Giải thưởng',
    info: [
      {
        key: 'award-1',
        title: 'NO',
        stage: '2002 - 2023',
      },  
    ],
  },
  {
    key: 'experience',
    title: 'Kinh nghiệm',
    info: [
      {
        key: 'internship',
        title: 'Thực tập',
        stage: '2023 - Nay',
      },
      {
        key: 'study-web-design',
        title: 'Học web design tại đại học',
        stage: '2021 - Nay',
      },
    ],
  },
];


//components
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const About = () => {
  const [index, setIndex] = useState(0)
  console.log(index )
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div 
        variants={fadeIn('right', 0.2)} 
        initial='hidden' 
        animate='show' 
        exit='hidden' 
        className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
      </motion.div >
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <h2>Skills <span className="text-accent ">and</span> Experience</h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">Kĩ năng và kinh nghiệm của tôi sau khi hoàn thành các project</p>
        </div>
        {/* info */}
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div 
                key={itemIndex} 
                className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white 
                after:absolute after:-bottom-1 after:left-0`} onClick={() => setIndex(itemIndex)}>
                  {item.title}</div>
              )
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                {/* title */}
                <div className="font-light mb-2 md:mb-0 ">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {/* icon */}
                  {item.icons?.map((icon, iconIndex) => {
                    return (
                      <div key={iconIndex} className="text-2xl text-white">
                        {icon}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
