const search = (arrOfDocuments, searchString) => {
	const searchStringOnlyLetters = searchString.replace(/[^a-zA-Z]+/g, "");

	return arrOfDocuments.reduce((acc, document) => {
		const arrayOfWords = document.text.split(" ");

		return arrayOfWords.some(word => {
			const currentWordOnlyLetters = word.replace(/[^a-zA-Z]+/g, "");

			return currentWordOnlyLetters === searchStringOnlyLetters;
		})
			? acc.concat(document.id)
			: acc;
	}, []);
};

export default search;
