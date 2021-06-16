import os

c = 0
for i in os.listdir():
    if "jpg" not in i: continue
    os.rename(i, f"{c}.jpg")
    c+=1
