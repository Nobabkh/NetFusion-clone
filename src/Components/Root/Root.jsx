import { useState } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import data from '../../Json/SiteData.js';
import Home from '../Home/Home';

const Root = () => {
    const [homeSelector,setHomeSelector] = useState(0);
    const [scroll, setScrollTop] = useState(0);
    const handleScroll = (event) => {
        console.log(event.currentTarget.scrollTop)
        setScrollTop(event.currentTarget.scrollTop);
        // Perform any other actions based on the scroll event
      };
      const animate = scroll > 60;
      console.log(scroll)
    
    return (
        <div onScroll={handleScroll} className='w-full pt-2 mt-10'>
            <Nav selector={(data) => {
                setHomeSelector(data);}} animate={animate}></Nav>
            <Home selector={homeSelector} setSelector={setHomeSelector} />
            <Footer SiteData={data}></Footer>
                       
        </div>
    );
};

export default Root;