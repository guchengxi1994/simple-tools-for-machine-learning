from functools import wraps


def ThirdPartyFeature(fromWhere: str = "", showMessage: bool = True):
    def dep_decorator(func):
        @wraps(func)
        def dep(*args, **kwargs):
            if showMessage:
                if fromWhere == "":
                    print(func.__name__ + " is a third-party function .")
                else:
                    print(
                        func.__name__ + " is a third-party function from " + fromWhere
                    )
            return func(*args, **kwargs)

        return dep

    return dep_decorator
