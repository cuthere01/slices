// Напишите тело функции getAllItems.
// Она должна возвращать плоский список, содержащий все id со всех уровней вложенности:
// переданного item, его детей, детей его детей и так далее.

export interface Item {
    id: string;
    children: Item[];
}

const obj: Item = {
    id: "a",
    children: [
        {
            id: "b",
            children: [
                {
                    id: "d",
                    children: [
                        { id: "i", children: [] },
                        {
                            id: "j",
                            children: [{ id: "m", children: [] }],
                        },
                    ],
                },
                { id: "e", children: [] },
                {
                    id: "f",
                    children: [
                        {
                            id: "k",
                            children: [{ id: "n", children: [] }],
                        },
                    ],
                },
            ],
        },
        {
            id: "c",
            children: [
                { id: "g", children: [] },
                {
                    id: "h",
                    children: [{ id: "l", children: [] }],
                },
            ],
        },
    ],
};

export const getAllItems = (item: Item): string[] => {
    let res: string[] = [item.id];

    for (const child of item.children) {
        res.push(...getAllItems(child));
    }

    return res;
    //throw new Error("Not implemented");
};

console.log(getAllItems(obj));

// const service = new ImaginaryIndexedDb();

// const Editor: React.FC<IProps> = ({}) => {
//     const [storageStatus, setStorageStatus] = useState("");
//     useEffect(() => {
//         service
//             .initialize()
//             .then(() => setStorageStatus("initialized"))
//             .catch(() => setStorageStatus("error"));
//     }, []);

//     if (!storageStatus) {
//         return <Loading />;
//     }
//     if (storageStatus === "error") {
//         return <Error />;
//     }

//     return <Textarea onChange={(value) => service.save(value)} />;
// };
