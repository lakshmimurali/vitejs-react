import React, { useState, useEffect } from 'react';

export const APIComponent = () => {
  const [data, setData] = useState();

  useEffect(() => {
    let isMounted = true;
    fetch('/profileName')
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);
  return <div>{data && <div role="contentinfo">Name is {data.name}</div>}</div>;
};
