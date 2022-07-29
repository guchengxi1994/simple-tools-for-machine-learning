extension Append on List<Object> {
  void append(Object o) {
    if (isEmpty) {
      add(o);
    } else {
      if (o.runtimeType == first.runtimeType) {
        if (!contains(o)) {
          add(o);
        }
      }
    }
  }
}
