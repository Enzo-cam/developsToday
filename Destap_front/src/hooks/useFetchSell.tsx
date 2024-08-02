import { useState, useEffect } from 'react';

const useFetchSell = (id) => {
  const [sell, setSell] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSell = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${baseUrl}api/purchases/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch sell data');
        }
        const data = await response.json();
        setSell(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getSell();
  }, [id]);

  return { sell, loading, error };
};

export default useFetchSell;
