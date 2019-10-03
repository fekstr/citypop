import React from 'react';

const SearchBox = ({ value, onChange, onKeyPress, placeholder }) => {
  return (
    <input
      type='text'
      name='query'
      className='form-control my-3'
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
      onKeyPress={e => onKeyPress(e.key)}
    />
  );
};

export default SearchBox;
