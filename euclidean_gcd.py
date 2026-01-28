def gcd(a: int, b: int) -> int:
    if not isinstance(a, int) or not isinstance(b, int):
        raise ValueError("Inputs must be integers")
    a, b = abs(a), abs(b)
    while b != 0:
        a, b = b, a % b
    return a


if __name__ == "__main__":
    print(gcd(48, 18))
    print(gcd(100, 75))
    print(gcd(17, 13))
    print(gcd(-48, 18))
