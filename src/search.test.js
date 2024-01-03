import search from "./index";

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
	expect(search([], "")).toEqual([]);
});

test("search without punctuation", () => {
	const doc1 = { id: "doc1", text: "I can't shoot straight unless I've had a pint!" };
	const doc2 = { id: "doc2", text: "Don't shoot shoot shoot that thing at me." };
	const doc3 = { id: "doc3", text: "I'm your shooter." };

	const docs = [doc1, doc2, doc3];

	expect(search(docs, "pint")).toEqual(["doc1"]);
});

test("search with dot", () => {
	const doc1 = { id: "doc1", text: "I can't shoot straight unless I've had a pint!" };
	const doc2 = { id: "doc2", text: "Don't shoot shoot shoot that thing at me." };
	const doc3 = { id: "doc3", text: "I'm your shooter." };

	const docs = [doc1, doc2, doc3];

	expect(search(docs, "shooter")).toEqual(["doc3"]);
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

test("search inputSentence", () => {
	const doc1 = { id: "doc1", text: "I can't shoot straight unless I've had a pint!" };
	const doc2 = { id: "doc2", text: "Don't shoot shoot shoot that thing at me." };
	const doc3 = { id: "doc3", text: "Don't shoot shoot shoot shoor that thing at me." };
	const doc4 = { id: "doc4", text: "I'm your shooter." };

	const docs = [doc1, doc2, doc3, doc4];

	expect(search(docs, "shoot at me")).toEqual(["doc2", "doc3", "doc1"]);
});

test("search hexlet", () => {
	const doc1 = { id: "doc1", text: "I can't shoot straight unless I've had a pint!" };
	const doc2 = { id: "doc2", text: "Don't shoot shoot shoot that thing at me." };
	const doc3 = { id: "doc3", text: "Don't shoot shoot shoot shoor that thing at me." };
	const doc4 = { id: "doc4", text: "I'm your shooter." };

	const docs = [doc1, doc2, doc3, doc4];

	expect(search(docs, "shoot at me")).toEqual(["doc2", "doc3", "doc1"]);
});

test("short strings", async () => {
	const doc1 = "I can't shoot straight unless I've had a pint!";
	const doc2 = "Don't shoot shoot shoot that thing at me.";
	const doc3 = "I'm your shooter.";
	const docs = [
		{ id: "doc1", text: doc1 },
		{ id: "doc2", text: doc2 },
		{ id: "doc3", text: doc3 },
	];

	expect(search(docs, "shoot at me, nerd")).toEqual(["doc2", "doc1"]);
});
