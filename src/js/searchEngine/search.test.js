import search from "./search";

test("search empty searchString", () => {
	const doc1 = { id: "doc1", text: "I can't shoot straight unless I've had a pint!" };
	const doc2 = { id: "doc2", text: "Don't shoot shoot shoot that thing at me." };
	const doc3 = { id: "doc3", text: "I'm your shooter." };

	const docs = [doc1, doc2, doc3];

	expect(search(docs, "")).toEqual([]);
});

test("search punctuation", () => {
	const doc1 = { id: "doc1", text: "I can't shoot straight unless I've had a pint!" };
	const doc2 = { id: "doc2", text: "Don't shoot shoot shoot that thing at me." };
	const doc3 = { id: "doc3", text: "I'm your shooter." };

	const docs = [doc1, doc2, doc3];

	expect(search(docs, "shooter")).toEqual(["doc3"]);
});

test("search empty docs list", () => {
	expect(search([], "random")).toEqual([]);
});

test("search without punctuation", () => {
	const doc1 = { id: "doc1", text: "I can't shoot straight unless I've had a pint!" };
	const doc2 = { id: "doc2", text: "Don't shoot shoot shoot that thing at me." };
	const doc3 = { id: "doc3", text: "I'm your shooter." };

	const docs = [doc1, doc2, doc3];

	expect(search(docs, "pint")).toEqual(["doc1"]);
});

test("search with punctuation", () => {
	const doc1 = { id: "doc1", text: "I can't shoot straight unless I've had a pint!" };
	const doc2 = { id: "doc2", text: "Don't shoot shoot shoot that thing at me." };
	const doc3 = { id: "doc3", text: "I'm your shooter." };

	const docs = [doc1, doc2, doc3];

	expect(search(docs, "pint!")).toEqual(["doc1"]);
});

test("search relevance", () => {
	const doc1 = { id: "doc1", text: "I can't shoot straight unless I've had a pint!" };
	const doc2 = { id: "doc2", text: "Don't shoot shoot shoot that thing at me." };
	const doc3 = { id: "doc3", text: "I'm your shooter." };

	const docs = [doc1, doc2, doc3];

	expect(search(docs, "shoot")).toEqual(["doc2", "doc1"]);
});