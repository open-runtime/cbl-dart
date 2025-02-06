import 'dart:io';

import 'package:cbl_native_assets/cbl_native_assets.dart';
import 'package:test/test.dart';

void main() {
  group('CouchbaseLiteNativeAssets', () {
    test('init succeeds', () async {
      final temp_dir = Directory.systemTemp.createTempSync('cbl_native_assets_test_');
      try {
        await CouchbaseLiteNativeAssets.init(filesDir: temp_dir.path);
      } finally {
        temp_dir.deleteSync(recursive: true);
      }
    });
  });
} 