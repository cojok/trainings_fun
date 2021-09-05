# https://www.codewars.com/kata/5432fd1c913a65b28f000342
def multiplication_table(row,col):
    results = []
    for i in range(1, row + 1):
        tmp = []
        for j in range(1, col + 1):
            if i != 1:
                tmp.append((results[0][j - 1] * i ))
            else:
                tmp.append(j)
        results.append(tmp)
    return results
