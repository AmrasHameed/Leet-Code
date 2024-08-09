        if (i === j) {
            sum += mat[i][i]
        }
            break;
        sum += mat[i][i];
        sum += mat[j][i];
        sum += mat[i][j];
    while (i <= j) {
        sum += mat[j][j];
        i++
        j--
    }
    return sum
};
[[1,2,3],[4,5,6],[7,8,9]]
[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]
[[5]]
25
8
5
25
8
5
[
