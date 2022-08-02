class CommonResponse:
    def __init__(self, code: int, message: str, data: object) -> None:
        self.code = code
        self.message = message
        self.data = data
