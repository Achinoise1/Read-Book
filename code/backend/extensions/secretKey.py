import os


def secretKey():
    key_bytes = os.urandom(16)
    key = key_bytes.hex()
    return key
