function countServers(grid: number[][]): number {
    const [rows, columns]: [number[], number[]] = [
        Array(grid.length).fill(0),
        Array(grid[0].length).fill(0),
    ];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                rows[i]++;
                columns[j]++;
            }
        }
    }

    console.log(rows, columns);

    return 1;
}

const grid = [
    [1, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
];

console.log(countServers(grid));
