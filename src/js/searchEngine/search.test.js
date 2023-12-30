import search from "./search";

test("search Test 1", () => {
	const doc1 = { id: "doc1", text: "I can't shoot straight unless I've had a pint!" };
	const doc2 = { id: "doc2", text: "Don't shoot shoot shoot that thing at me." };
	const doc3 = { id: "doc3", text: "I'm your shooter." };

	const docs = [doc1, doc2, doc3];

	expect(search(docs, "shoot")).toEqual(["doc1", "doc2"]);
});

test("search Test 2", () => {
	const doc1 = { id: "doc1", text: "I can't shoot straight unless I've had a pint!" };
	const doc2 = { id: "doc2", text: "Don't shoot shoot shoot that thing at me." };
	const doc3 = { id: "doc3", text: "I'm your shooter." };

	const docs = [doc1, doc2, doc3];

	expect(search(docs, "")).toEqual([]);
});

test("search Test 3", () => {
	const doc1 = { id: "doc1", text: "I can't shoot straight unless I've had a pint!" };
	const doc2 = { id: "doc2", text: "Don't shoot shoot shoot that thing at me." };
	const doc3 = { id: "doc3", text: "I'm your shooter." };

	const docs = [doc1, doc2, doc3];

	expect(search(docs, "shooter")).toEqual(["doc3"]);
});

test("search Test 4", () => {
	expect(search([], "random")).toEqual([]);
});

test("search Test 5", () => {
	const doc1 = { id: "doc1", text: "I can't shoot straight unless I've had a pint!" };
	const doc2 = { id: "doc2", text: "Don't shoot shoot shoot that thing at me." };
	const doc3 = { id: "doc3", text: "I'm your shooter." };

	const docs = [doc1, doc2, doc3];

	expect(search(docs, "pint")).toEqual(["doc1"]);
});

test("search Test 6", () => {
	const doc1 = { id: "doc1", text: "I can't shoot straight unless I've had a pint!" };
	const doc2 = { id: "doc2", text: "Don't shoot shoot shoot that thing at me." };
	const doc3 = { id: "doc3", text: "I'm your shooter." };

	const docs = [doc1, doc2, doc3];

	expect(search(docs, "pint!")).toEqual(["doc1"]);
});
