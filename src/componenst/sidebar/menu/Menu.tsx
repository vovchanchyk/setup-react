import * as React from 'react';

const Menu: React.FC<{ clas: string }> = ({ clas, children }) => (
  <div>
    <h2>{clas}</h2>
    <span>{React.Children.count(children)}</span>
    <nav className="menu__list">
      {React.Children.map(children, (child) => {
        const el = React.cloneElement(child as React.ReactElement, { className: 'column' });
        return el;
      })}
    </nav>
  </div>
);

export default Menu;
