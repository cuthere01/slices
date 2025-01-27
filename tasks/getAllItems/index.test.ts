import { getAllItems, Item } from "./index";

describe("getAllItems", () => {
    test("должен показывать id 1 уровня при отсутствии детей", () => {
        const item: Item = {
            id: "1",
            children: [],
        };

        expect(getAllItems(item)).toEqual(["1"]);
    });

	test("должен показывать id при наличии ребенка", () => {
        const item: Item = {
            id: "1",
            children: [
				{ id: "1.1", children: [] }
			],
        };

        expect(getAllItems(item)).toEqual(["1", "1.1"]);
    });

	test("должен показывать id при наличии нескольких детей", () => {
        const item: Item = {
            id: "1",
            children: [
				{ id: "1.1", children: [] },
				{ id: "1.2", children: [] }
			],
        };

        expect(getAllItems(item)).toEqual(["1", "1.1", "1.2"]);
    });

	test("должен показывать id при наличии детей у детей (вложенность больше 1)", () => {
        const item: Item = {
            id: "1",
            children: [
                {
                    id: "1.1",
                    children: [
                        {
                            id: "1.1.1",
                            children: [],
                        },
                    ],
                },
            ],
        };

        expect(getAllItems(item)).toEqual(["1", "1.1", "1.1.1"]);
    });

	test("должен показывать id при любой вложенности и при любом количестве детей на уровне", () => {
        const item: Item = {
            id: "1",
            children: [
                {
                    id: "1.1",
                    children: [
                        {
                            id: "1.1.1",
                            children: [
                                { id: "1.1.1.1", children: [] },
                                {
                                    id: "1.1.1.2",
                                    children: [{ id: "1.1.1.2.1", children: [] }],
                                },
                            ],
                        },
                        { id: "1.1.2", children: [] },
                        {
                            id: "1.1.3",
                            children: [
                                {
                                    id: "1.1.3.1",
                                    children: [{ id: "1.1.3.1.1", children: [] }],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "1.3",
                    children: [
                        { id: "1.3.1", children: [] },
                        {
                            id: "1.3.2",
                            children: [{ id: "1.3.2.1", children: [] }],
                        },
                    ],
                },
            ],
        };

        expect(getAllItems(item)).toEqual([
            "1",
            "1.1",
            "1.1.1",
            "1.1.1.1",
            "1.1.1.2",
            "1.1.1.2.1",
            "1.1.2",
            "1.1.3",
            "1.1.3.1",
            "1.1.3.1.1",
            "1.3",
            "1.3.1",
            "1.3.2",
            "1.3.2.1",
        ]);
    });
});
