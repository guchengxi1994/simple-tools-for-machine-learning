import os
import glob

# remove `results` folder
jpgs = glob.glob("test/results/*.jpg")
for i in jpgs:
    os.remove(i)

xmls = glob.glob("test/results/*.xml")
for i in xmls:
    os.remove(i)

jsons = glob.glob("test/results/*.json")
for i in jsons:
    os.remove(i)

jpgs = glob.glob("test/*.jpg")
for i in jpgs:
    os.remove(i)
