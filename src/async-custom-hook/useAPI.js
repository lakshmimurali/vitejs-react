import { useState, useEffect } from 'react';

export function useProfileNameAPI() {
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
  return data;
}
