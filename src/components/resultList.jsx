import React from 'react';
import ResultCard from './resultCard';

const ResultsList = ({counts}) => {
  return (
    <div className="results-container container-fluid">
      {counts.map(count => (
        <ResultCard key={counts.id} unit={count.unit} result={count.number} />
      ))}
    </div>
  );
}

export default ResultsList;