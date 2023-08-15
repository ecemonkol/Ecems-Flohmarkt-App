import React, { useState, useEffect } from 'react';
import { IoMdArrowRoundUp } from 'react-icons/io';
import './ScrollToTop.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 1500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };  

    return (
        <button className="btn-scrollTop" style={{display: isVisible ? 'block':'none'}} onClick={goTop}>
	        <IoMdArrowRoundUp/>
        </button>
    );
}

export default ScrollToTop;