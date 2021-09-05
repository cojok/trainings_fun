# https://www.codewars.com/kata/517abf86da9663f1d2000003
import re
def to_camel_case(text):
    if text == '':
        return text
    new_text = re.sub('[-,_]', ' ', text, flags=re.IGNORECASE)
    list = new_text.split(' ')
    first_part = list[0]
    camel_case_text = [string.title() for string in list[1:]]
    second_part = ''.join(camel_case_text)
    return first_part + second_part
