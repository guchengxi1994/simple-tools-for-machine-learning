import os
import glob

# remove `results` folder
jpgs = glob.glob("test/results/*.jpg")
for i in jpgs:
    os.remove(i)

jpgs = glob.glob("test/*.jpg")
for i in jpgs:
    os.remove(i)
