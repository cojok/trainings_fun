# https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
def duplicate_encode(word):
    word = word.lower()
    finalWord = ''
    for i in word:
        if word.count(i) > 1:
            finalWord += ')'
        else:
            finalWord += '('
    return finalWord
