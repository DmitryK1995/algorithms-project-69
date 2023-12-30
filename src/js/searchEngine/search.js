const search = (arrOfDocuments, searchString) => {
	const arrayOfSearchWords = searchString.split(" ");

	const wordsRepeatCount = arrOfDocuments.reduce((acc, document) => {
		const arrayOfWords = document.text.split(" ");

		arrayOfWords.forEach(word => {
			const currentWordOnlyLetters = word.replace(/[^a-zA-Z]+/g, "");

			if (!arrayOfSearchWords.some(word => currentWordOnlyLetters == word.replace(/[^a-zA-Z]+/g, ""))) return;

			if (!acc[document.id]) {
				acc[document.id] = 1;
			} else acc[document.id] += 1;
		});

		return acc;
	}, {});

	const sorted = Object.entries(wordsRepeatCount).sort(([, a], [, b]) => b - a);

	return sorted.map(([id]) => id);
};

export default search;
