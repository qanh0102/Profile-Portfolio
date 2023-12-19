// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Tạo lập và phát triển hình ảnh thương hiệu để tạo ấn tượng mạnh mẽ và nhận biết của doanh nghiệp.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Tạo ra các giải pháp thiết kế sáng tạo và thu hút để thúc đẩy trải nghiệm người dùng và tương tác.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Xây dựng và phát triển ứng dụng web và các hệ thống phần mềm chất lượng cao để đáp ứng nhu cầu kinh doanh.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Tạo nội dung chất lượng cao và sáng tạo để thu hút và giữ chân khách hàng trên mọi kênh truyền thông.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Tối ưu hóa website để tăng cường khả năng xuất hiện trên các công cụ tìm kiếm và đạt được sự hiện diện trực tuyến mạnh mẽ.',
  },
];


//import swiper react component
import {Swiper, SwiperSlide} from 'swiper/react'

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import required modules
import {FreeMode, Pagination} from 'swiper'

const ServiceSlider = () => {
  return (
    <Swiper breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },

      640: {
        slidesPerView: 3,
        spaceBetween: 15
      },
    }}
    freeMode = { true }
    pagination = {{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className="h-[240px] sm:h-[340px]"
  >
    {serviceData.map((item, index) => {
      return (
      <SwiperSlide key={index}>
        <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col 
        gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65.169,0.15)] transitional duration-300">
          {/* icon */}
          <div className="text-4xl text-accent mb-4">{item.icon}</div>
          {/* title & description */}
          <div className="mb-8">
            <div className="mb-2 text-lg">{item.title}</div>
            <p className="max-w-[350px] leading-normal">{item.description}</p>
          </div>
          {/* arrow */}
          <div className="text-3xl">
            <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
          </div>
        </div>
      </SwiperSlide>
      );
    })}
    </Swiper>
  )
};

export default ServiceSlider;
