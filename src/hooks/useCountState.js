import {useState} from 'react';

const useCountState = (text) => {
  const [counts, setCounts] = useState([]);

  return {
    counts,
    countText: (text) => {
        const newCounts = [];
        let id = 0;
        const chars = text.split('');

        const wordCount = text.split(' ').length;
        const charsCount = chars.length;
        let vowelCount = 0;
        chars.forEach( (char) => {
            if (char === 'a' ||
                char === 'e' ||
                char === 'i' ||
                char === 'o' ||
                char === 'u') {
                    vowelCount++;
                }
        });
        
        newCounts.push({id: ++id, number: charsCount, unit: "characters"});
        newCounts.push({id: ++id, number: vowelCount, unit: "vowels"});
        newCounts.push({id: ++id, number: wordCount, unit: "words"});

        setCounts(newCounts);
    },
    resetWordCounter: () => {
      const newCounts = [];
      setCounts(newCounts);
    }
  };
};

export default useCountState;