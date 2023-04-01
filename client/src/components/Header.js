import React, { useState, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollDelta = currentScrollPos - prevScrollPos;

      if (scrollDelta > 0) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Navbar
      bg="light"
      variant="light"
      fixed="top"
      className={scrollDirection === 'down' ? 'hide-on-scroll' : 'show-on-scroll'}
    >
      <Navbar.Brand href="#home">My App</Navbar.Brand>
    </Navbar>
  );
};

export default Header;