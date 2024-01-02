export function metricCalculate(text, searchWord, arr, documentsLength) {
	const splittedText = text.split(" ");

	const countOfWords = splittedText.length;
	const lengthOfOccuringDocuments = arr[searchWord].length;

	const wordRepeated = splittedText.reduce(
		(acc, word) => (word.replace(/[^a-zA-Z]+/g, "") == searchWord.replace(/[^a-zA-Z]+/g, "") ? acc + 1 : acc),
		0,
	);

	return (wordRepeated / countOfWords) * Math.log10(documentsLength / lengthOfOccuringDocuments);
}
