import os
from os.path import join as j

for i, fname in enumerate(os.listdir("./females")):
	os.rename(j("./females", fname), j("./females", f"{i}.jpg"))


for i, fname in enumerate(os.listdir("./males")):
	os.rename(j("./males", fname), j("./males", f"{i}.jpg"))
