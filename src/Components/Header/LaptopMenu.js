'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LaptopMenu = ({ menus }) => {
  const router = usePathname();

  const activeRoute = (route) => {
    return router === route ? 'active' : '';
  };
  return (
    <ul className="d-flex align-items-center nav-menu-list">
      {menus.map((e, i) => (
        <li key={i} className="px-3">
          <Link
            className={`nav-menu-item ${activeRoute(e.path) ? 'active' : ''}`}
            href={e.path}
          >
            {e.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LaptopMenu;
