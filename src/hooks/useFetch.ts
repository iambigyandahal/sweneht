import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<any>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      }).catch((error) => {
        setIsLoading(false);
      });
  }, [url])

  return { isLoading, data }
}

export default useFetch
