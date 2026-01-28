def gcd(a, b):
    """
    Compute the greatest common divisor (GCD) of two integers a and b
    using the Euclidean algorithm.

    Parameters:
    a (int): First integer
    b (int): Second integer

    Returns:
    int: The GCD of a and b
    """
    while b != 0:
        a, b = b, a % b
    return a


if __name__ == "__main__":
    print(gcd(48, 18))  
    print(gcd(100, 75))  
    print(gcd(17, 13))  
