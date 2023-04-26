import React, { useState } from 'react';

export default function TextBox() {
  const [textBoxValue, setTextBoxValue] = useState('');
  let changeHandler = (event) => {
    console.log(event.target.value);
    setTextBoxValue(event.target.value);
  };

  return (
    <div>
      <input
        role="nameinfo"
        type="text"
        value={textBoxValue}
        placeholder="Good Name Please"
        onChange={changeHandler}
      />
    </div>
  );
}
