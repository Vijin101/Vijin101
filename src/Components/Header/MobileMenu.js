'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { MdMenu, MdOutlineClose } from 'react-icons/md';

const MobileMenu = ({ menus }) => {
  const router = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const targetRef = useRef(null);
  const targetRef2 = useRef(null);

  const activeRoute = (route) => {
    return router === route ? 'active' : '';
  };

  const toggleMenu = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <section>
      <span onClick={toggleMenu} ref={targetRef2}>
        {!isOpen ? (
          <MdMenu
            // onClick={() => setIsOpen(true)}
            style={{ color: '#fff', fontSize: '25px' }}
          />
        ) : (
          <MdMenu
            // onClick={() => setIsOpen(false)}
            style={{ color: '#fff', fontSize: '25px' }}
          />
        )}
      </span>
      <ul
        ref={targetRef}
        className={`mobile-menu-list ${isOpen ? 'open-menu' : ''}`}
      >
        <div className="text-end p-2">
          {' '}
          <MdOutlineClose
            onClick={() => setIsOpen(false)}
            style={{ color: '#fff', fontSize: '25px' }}
          />
        </div>

        {menus.map((e, i) => (
          <li key={i} className="">
            <Link
              onClick={() => setIsOpen(false)}
              className={`nav-menu-item p-3 ${
                activeRoute(e.path) ? 'active' : ''
              }`}
              href={e.path}
            >
              {e.name}
            </Link>
          </li>
        ))}
        <li key={'login'} className="">
          <Link
            onClick={() => setIsOpen(false)}
            className={`text-white hover:text-gray-300 nav-menu-item p-3 ${
              activeRoute('/login') ? 'active' : ''
            }`}
            href={'/login'}
          >
            Login
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default MobileMenu;
