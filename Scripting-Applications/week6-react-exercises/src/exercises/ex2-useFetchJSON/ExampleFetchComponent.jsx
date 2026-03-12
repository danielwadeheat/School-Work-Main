import React, { useEffect } from 'react';
import useFetchJSON from '../../hooks/useFetchJSON';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';
import './styles.css';

const ExampleFetchComponent = () => {
  const { data, loading, error } = useFetchJSON('https://api.example.com/data');

  useEffect(() => {
    // Additional side effects can be handled here if needed
  }, [data]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className="example-fetch-component">
      <h2>Fetched Data</h2>
      {data && data.length > 0 ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default ExampleFetchComponent;