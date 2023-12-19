//links
import Link from "next/link";

//icons
import {RiYoutubeLine, RiInstagramLine, RiFacebookBoxLine, RiPinterestLine} from 'react-icons/ri'

const Socials = () => {
  return ( 
  <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://www.facebook.com/qanh5102/'} className="hover:text-accent transition-all duration-300"><RiFacebookBoxLine /></Link>
    <Link href={'./youtube'} className="hover:text-accent transition-all duration-300"><RiYoutubeLine /></Link>
    <Link href={'https://www.instagram.com/q.anh.20251/'} className="hover:text-accent transition-all duration-300"><RiInstagramLine /></Link>
       <Link href={'./pinterest'} className="hover:text-accent transition-all duration-300"><RiPinterestLine /></Link>
  </div>
  )
};

export default Socials;
