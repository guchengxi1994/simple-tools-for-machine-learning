from functools import wraps


def UnFullyTestedFeature(func):
    @wraps(func)
    def dep(*args, **kwargs):
        print(func.__name__ + " is unfully tested")
        return func(*args, **kwargs)

    return dep
