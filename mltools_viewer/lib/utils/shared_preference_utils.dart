import 'package:shared_preferences/shared_preferences.dart';

class PersistenceStorage {
  static final _instance = PersistenceStorage._init();

  factory PersistenceStorage() => _instance;

  static SharedPreferences? _storage;

  PersistenceStorage._init() {
    _initStorage();
  }

  _initStorage() async {
    _storage ??= await SharedPreferences.getInstance();
  }

  Future<bool> isScreenFirstTime(String routeName) async {
    await _initStorage();
    return _storage!.getBool("${routeName}_first_time") ?? true;
  }

  Future setScreenFirstTime(String routeName, bool b) async {
    await _initStorage();
    await _storage!.setBool("${routeName}_first_time", b);
  }
}
