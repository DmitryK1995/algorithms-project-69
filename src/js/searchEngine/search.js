const search = (arrOfDocuments, searchString) => {
	const searchStringOnlyLetters = searchString.replace(/[^a-zA-Z]+/g, "");

	const wordsRepeatCount = arrOfDocuments.reduce((acc, document) => {
		const arrayOfWords = document.text.split(" ");

		arrayOfWords.forEach(word => {
			const currentWordOnlyLetters = word.replace(/[^a-zA-Z]+/g, "");

			if (currentWordOnlyLetters !== searchStringOnlyLetters) return;

			if (!acc[document.id]) {
				acc[document.id] = 1;
			} else acc[document.id] += 1;
		});

		return acc;
	}, {});

	const sorted = Object.entries(wordsRepeatCount).sort(([, a], [, b]) => b - a);
	console.log(
		"sorted",
		sorted.map(([id]) => id),
	);
	return sorted.map(([id]) => id);
};

export default search;
