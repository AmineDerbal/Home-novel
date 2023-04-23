import React, { useState } from 'react';
// import getData from '../services/gerUrlData';

const Url = () => {
  const [url, setUrl] = useState('');
  const handleClick = () => {
    // console.log(getData());
    console.log('hello');
  };
  return (
    <div className="input-url">
      <input
        type="text"
        value={url}
        id="url"
        onChange={(e) => {
          setUrl(e.target.value);
        }}
        placeholder="type a ScribbleHub url"
      />
      <button type="button" className="submit" onClick={handleClick}>
        Download
      </button>
    </div>
  );
};

export default Url;
