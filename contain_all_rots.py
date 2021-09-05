# https://www.codewars.com/kata/5700c9acc1555755be00027e
def contain_all_rots(strng, arr):
    if strng == '':
        return True
    rotations = []
    for i in strng:
        j = 0
        tmp = strng[len(strng) - 1]
        while(j < len(strng) - 1):
            tmp += strng[j]
            j += 1
        rotations.append(tmp)
        strng = tmp
    findAll = all(i in arr for i in rotations)
    return findAll
