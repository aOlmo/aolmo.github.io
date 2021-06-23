import os 
import shutil

l = list(os.listdir())

i = 0
for f in l:
    if i == 50: break
    if f.endswith("jpg"):
        shutil.copy(f, f"selected/{i}.jpg")
        i += 1
