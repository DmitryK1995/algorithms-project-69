function wordRepeatCount(text, searchWord, arr, documentsLength) {
	const splittedText = text.split(" ");
	const countOfWords = splittedText.length;
	const lengthOfOccuringDocuments = arr[searchWord].length;

	const wordRepeated = splittedText.reduce(
		(acc, word) => (word.replace(/[^a-zA-Z]+/g, "") == searchWord.replace(/[^a-zA-Z]+/g, "") ? acc + 1 : acc),
		0,
	);

	return (wordRepeated / countOfWords) * Math.log(documentsLength / lengthOfOccuringDocuments);
}

const search = (arrOfDocuments, searchString) => {
	const arrayOfSearchWords = searchString.split(" ");

	const index = arrOfDocuments.reduce((acc, document) => {
		const arrayOfWords = document.text.split(" ");

		arrayOfWords.forEach(word => {
			const currentWordOnlyLetters = word.replace(/[^a-zA-Z]+/g, "");

			if (!acc[currentWordOnlyLetters]) {
				acc[currentWordOnlyLetters] = [].concat(document.id);
			} else {
				acc[currentWordOnlyLetters].includes(document.id) ? acc : acc[currentWordOnlyLetters].push(document.id);
			}
		});
		return acc;
	}, {});

	const arrayOfFound = arrayOfSearchWords.reduce((acc, word) => {
		const searchWord = word.replace(/[^a-zA-Z]+/g, "");

		if (index[searchWord])
			index[searchWord].forEach(docId => {
				if (!acc[docId]) {
					acc[docId] = 1;
				} else {
					acc[docId] += 1;
				}
			});

		return acc;
	}, {});

	const sorted = Object.entries(arrayOfFound).sort(([docName1, a], [docName2, b]) => {
		if (a === b) {
			const relevanceCoefA = arrayOfSearchWords.reduce(
				(acc, word) =>
					acc +
					wordRepeatCount(
						arrOfDocuments.find(el => el.id == docName1).text,
						word,
						index,
						arrOfDocuments.length,
					),
				0,
			);

			const relevanceCoefB = arrayOfSearchWords.reduce(
				(acc, word) =>
					acc +
					wordRepeatCount(
						arrOfDocuments.find(el => el.id == docName2).text,
						word,
						index,
						arrOfDocuments.length,
					),
				0,
			);

			return relevanceCoefB - relevanceCoefA;
		}

		return b - a;
	});

	return sorted.map(([id]) => id);
};

export default search;
