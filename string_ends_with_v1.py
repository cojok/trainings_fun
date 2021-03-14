def solution(string, ending):
    start_index = len(string) - len(ending)
    end_index = len(string)
    last_part_of_string = string[start_index:end_index]
    return last_part_of_string == ending
