import re
def disemvowel(string):
    return re.sub(r"a|e|i|o|u", "", string, flags=re.IGNORECASE)
