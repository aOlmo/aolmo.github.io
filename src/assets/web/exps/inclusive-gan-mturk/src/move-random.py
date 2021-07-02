import os
import random
import shutil

source_dir = "inclusive-gan-run3"
dest_dir = "run3-random"
headshots= os.listdir(source_dir)
random.shuffle(headshots)

counter = 0
for f in headshots:
	if f.endswith(".jpg"):
		source_name = os.path.join(source_dir, f)
		dest_name = os.path.join(dest_dir, f"{counter}.jpg")
		shutil.copy(source_name, dest_name)
		counter += 1