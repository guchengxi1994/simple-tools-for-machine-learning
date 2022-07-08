"""
Descripttion: 
version: 
Author: xiaoshuyui
email: guchengxi1994@qq.com
Date: 2022-06-12 14:23:14
LastEditors: xiaoshuyui
LastEditTime: 2022-06-12 18:25:45
"""

import logging

logger = logging.getLogger("Machine learning tools log")
logging.basicConfig(level="INFO")

concole_handler = logging.StreamHandler()
concole_handler.setLevel(level="WARNING")
formatter = logging.Formatter(
    fmt="[%(name)s]  [%(levelname)s]  [%(asctime)s] [%(message)s ]"
)
concole_handler.setFormatter(formatter)

logger.addHandler(concole_handler)
