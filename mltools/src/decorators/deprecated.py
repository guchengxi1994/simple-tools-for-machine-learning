from functools import wraps


def deprecatedFeature(message: str = ""):
    def dep_decorator(func):
        @wraps(func)
        def dep(*args, **kwargs):
            if message == "":
                print(func.__name__ + " is deprecated .")
            else:
                print(message)
            return func(*args, **kwargs)

        return dep

    return dep_decorator
