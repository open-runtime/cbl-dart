import 'dart:io';

import 'package:cbl_native_assets/cbl_native_assets.dart';
import 'package:test/test.dart';

void main() {
  group('CouchbaseLiteNativeAssets', () {
    test('init succeeds', () async {
      final tempDir = Directory.systemTemp
          .createTempSync('cbl_native_assets_test_');
      try {
        await CouchbaseLiteNativeAssets.init(filesDir: tempDir.path);
      } finally {
        tempDir.deleteSync(recursive: true);
      }
    });
  });
} 