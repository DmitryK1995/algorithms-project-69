export function metricCalculate(text, searchWord, arr, docsCount) {
  const splittedText = text.match(/\w+/g);

  const termCount = arr[searchWord].length;

  const wordRepeated = splittedText.reduce(
    (acc, word) => (word === searchWord ? acc + 1 : acc),
    0,
  );

  return (
    wordRepeated * Math.log2(1 + (docsCount - termCount + 1) / (termCount + 0.5))
  );
}

const searchEngine = (arrOfDocuments, searchString) => {
  const arrayOfSearchWords = searchString.match(/\w+/g);

  if (!arrayOfSearchWords) return [];

  const index = arrOfDocuments.reduce((acc, document) => {
    const arrayOfWords = document.text.split(' ');

    arrayOfWords.forEach((word) => {
      const currentWordOnlyLetter = word.match(/\w+/g);

      if (!currentWordOnlyLetter) return;

      const currentWordOnlyLetters = currentWordOnlyLetter.join('');

      if (!acc[currentWordOnlyLetters]) {
        acc[currentWordOnlyLetters] = [].concat(document.id);
      } else if (!acc[currentWordOnlyLetters].includes(document.id)) {
        acc[currentWordOnlyLetters].push(document.id);
      }
    });
    return acc;
  }, {});

  const arrayOfFound = arrayOfSearchWords.reduce((acc, word) => {
    const searchWord = word;

    if (index[searchWord]) {
      index[searchWord].forEach((docId) => {
        if (!acc[docId]) {
          acc[docId] = 1;
        } else {
          acc[docId] += 1;
        }
      });
    }

    return acc;
  }, {});

  const sortedDocsByRelevance = Object.entries(arrayOfFound).sort(
    ([docName1, a], [docName2, b]) => {
      if (a === b) {
        const relevanceCoefA = arrayOfSearchWords.reduce(
          (acc, word) => acc
+ metricCalculate(
  arrOfDocuments.find((el) => el.id === docName1).text,
  word,
  index,
  arrOfDocuments.length,
),
          0,
        );

        const relevanceCoefB = arrayOfSearchWords.reduce(
          (acc, word) => acc
+ metricCalculate(
  arrOfDocuments.find((el) => el.id === docName2).text,
  word,
  index,
  arrOfDocuments.length,
),
          0,

        );

        return relevanceCoefB - relevanceCoefA;
      }

      return b - a;
    },
  );

  return sortedDocsByRelevance.map(([id]) => id);
};

export default searchEngine;
