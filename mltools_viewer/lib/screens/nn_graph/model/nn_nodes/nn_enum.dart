// ignore_for_file: constant_identifier_names

enum NodeType {
  input,
  activation,
  conv,
  pooling,
  fc,
  dropout,
  conv_activation,
  fc_activation_dropout
}

extension ToString on NodeType {
  String toStr() {
    switch (this) {
      case NodeType.input:
        return "输入";
      case NodeType.activation:
        return "激活层";
      case NodeType.conv:
        return "卷积层";
      case NodeType.pooling:
        return "池化层";
      case NodeType.fc:
        return "全连接层";
      case NodeType.dropout:
        return "dropout";
      case NodeType.conv_activation:
        return "包含卷积和激活的复合层";
      case NodeType.fc_activation_dropout:
        return "包含全连接,激活以及dropout的复合层";
    }
  }
}
