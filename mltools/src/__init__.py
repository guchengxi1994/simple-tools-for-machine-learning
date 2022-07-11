"""
Descripttion: 
version: 
Author: xiaoshuyui
email: guchengxi1994@qq.com
Date: 2022-06-12 13:29:37
LastEditors: xiaoshuyui
LastEditTime: 2022-06-12 13:29:38
"""
import os


def split_file_name(p: str) -> str:
    s = os.path.split(p)[-1]
    return os.path.splitext(s)[0]
