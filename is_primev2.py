# https://www.codewars.com/kata/5262119038c0985a5b00029f
from math import sqrt

def is_prime(num):
    isPrime = True
    if num > 1:
        for i in range(2, int(sqrt(num)) + 1):
            if num % i == 0:
                isPrime = False
                break
    else:
        isPrime = False
    return isPrime
        
