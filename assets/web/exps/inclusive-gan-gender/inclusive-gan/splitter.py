import os
import cv2
import numpy as np

from PIL import Image
from tqdm import tqdm

import matplotlib.pyplot as plt

file_extensions = ('.jpg', 'jpeg', '.png')
chunk = 64

def mkdir(path):
    try:
        os.mkdir(path)
    except:
      pass

if __name__ == '__main__':
    for file in tqdm(os.listdir()):
        if file.lower().endswith(file_extensions):

            img = np.asarray(Image.open(file))

            n_chunk = int(img.shape[0]/chunk)
            folder_name = file.split(".")[0].split("_")[-1]
            mkdir(folder_name)
            cv2.imwrite("{}/{}.jpg".format(folder_name, "original"), cv2.cvtColor(img, cv2.COLOR_RGB2BGR))
            i = 0
            for row in range(n_chunk):
                s_row, e_row = row*chunk, row*chunk+chunk
                for col in range(n_chunk):
                    s_col, e_col = col*chunk, col*chunk + chunk

                    single_face = img[s_row:e_row, s_col:e_col]
                    cv2.imwrite("{}/{}.jpg".format(folder_name, i), cv2.cvtColor(single_face, cv2.COLOR_RGB2BGR))
                    i+=1



