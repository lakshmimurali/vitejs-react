import React from 'react';

export const SideBar = ({ items }) => (
  <div>
    {items.map((item) => (
      <div key={item.href}>
        <a role="navigation" href={item.href}>
          {item.name}
        </a>
      </div>
    ))}
  </div>
);
