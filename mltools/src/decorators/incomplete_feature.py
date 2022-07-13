from functools import wraps


def IncompleteFeature(message: str = ""):
    def dep_decorator(func):
        @wraps(func)
        def dep(*args, **kwargs):
            if message == "":
                print(func.__name__ + " is incomplete .")
            else:
                print(func.__name__ + " is incomplete , because " + message)
            return func(*args, **kwargs)

        return dep

    return dep_decorator
