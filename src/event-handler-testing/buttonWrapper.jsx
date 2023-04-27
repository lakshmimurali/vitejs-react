import React from 'react';

export const ButtonWrapper = ({ title, ...props }) => (
  <button {...props}>{title}</button>
);
