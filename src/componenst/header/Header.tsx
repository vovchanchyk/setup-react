import * as React from 'react';
import Menu from '../menu/Menu';
import * as styles from './Header.module.css';

export type MenuItemType = {link:string, title:string}

const headerMenu = [
  { link: 'home', title: 'home' },
  { link: 'about', title: 'about' },
  { link: 'contact', title: 'contact' },
];

const Header:React.FC = () => (
  <div className={styles.default.header}>
    <Menu items={headerMenu} />
  </div>
);

export default Header;
