'''
Descripttion: 
version: 
Author: xiaoshuyui
email: guchengxi1994@qq.com
Date: 2022-06-12 18:41:38
LastEditors: xiaoshuyui
LastEditTime: 2022-06-12 18:49:37
'''
import sys

sys.path.append("..")

from mltools.src.decorators import notNull


@notNull
def add(a, b, k):
    return a + b


try:
    add(1, 2, k=None)
except Exception as e:
    print(e)

try:
    add(1, None)
except Exception as e:
    print(e)
