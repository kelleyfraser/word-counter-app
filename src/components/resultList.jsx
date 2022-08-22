import React from 'react';
import ResultCard from './resultCard';

const ResultsList = ({counts, text}) => {
  return (
    <div className="results-container container-fluid">
      <p key={text} className="text-center">{text}</p>
      {counts.map(count => (
        <ResultCard key={counts.id} unit={count.unit} result={count.number} />
      ))}
    </div>
  );
}

export default ResultsList;