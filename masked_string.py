# return masked string
def maskify(cc):
    if len(cc) < 4:
        return cc
    start_index = (len(cc) - 4)
    end_index = len(cc)
    first_part_of_cc = cc[0:start_index]
    last_part_of_cc = cc[start_index:end_index]
    masked_first_part_of_cc = ''
    for i in first_part_of_cc:
        masked_first_part_of_cc += '#'
 return masked_first_part_of_cc + last_part_of_cc
 
 
 maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

# "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
