import React from 'react';

const TextBox = ({ id, className, value, onChange }) => {
  return (
    <input
      type="text"
      id={id}
      className={className}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextBox;
