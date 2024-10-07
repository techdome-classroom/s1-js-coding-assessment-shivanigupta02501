function getTotalIsles(map) {
    if (!map || map.length === 0) return 0;

    const rows = map.length;
    const cols = map[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    const directions = [
        [1, 0],  
        [-1, 0], 
        [0, 1],  
        [0, -1]  
    ];

    function dfs(r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || map[r][c] === 'W' || visited[r][c]) {
            return;
        }
        visited[r][c] = true;
        for (const [dr, dc] of directions) {
            dfs(r + dr, c + dc);
        }
    }

    let islandCount = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (map[r][c] === 'L' && !visited[r][c]) {
                dfs(r, c);
                islandCount++;
            }
        }
    }

    return islandCount;
}

module.exports = getTotalIsles;
