import os
import zipfile


def zip_dir(dirpath: str) -> str:
    if dirpath.endswith(os.sep):
        dirpath = dirpath[0:-1]

    outFile = dirpath + ".zip"

    if os.path.exists(outFile):
        return outFile

    zip = zipfile.ZipFile(outFile, "w", zipfile.ZIP_DEFLATED)
    for path, dirnames, filenames in os.walk(dirpath):
        # 去掉目标跟路径，只对目标文件夹下边的文件及文件夹进行压缩
        fpath = path.replace(dirpath, "")

        for filename in filenames:
            zip.write(os.path.join(path, filename), os.path.join(fpath, filename))
    zip.close()

    return outFile
