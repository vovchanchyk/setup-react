import * as React from 'react';
import Menu from './menu/Menu';

export type Props = {
  title: string
}

const Sidebar: React.FC<Props> = ({ title }) => (
  <div className="sidebar">
    <h2 className="sidebar__title">{title}</h2>
    <Menu clas="column">
      <li className="menu__item">Home</li>
      <li className="menu__item">stopwatch</li>
      <li className="menu__item">ToDo</li>
      <li className="menu__item">Weather</li>
    </Menu>
  </div>
);

export default Sidebar;
