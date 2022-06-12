'''
Descripttion: 
version: 
Author: xiaoshuyui
email: guchengxi1994@qq.com
Date: 2022-06-12 18:33:40
LastEditors: xiaoshuyui
LastEditTime: 2022-06-12 18:51:39
'''

from functools import wraps


def notNull(func):
    @wraps(func)
    def inner(*args, **kwargs):
        print(args)
        for i in args:
            if i is None:
                raise Exception("some parameters are None, please check")

        for k, v in kwargs.items():
            if v is None:
                raise Exception("parameter {} is None".format(k))

        return func(*args, **kwargs)

    return inner