#!/usr/bin/env bash

set -e

editions=(community enterprise)
buildModes=(debug release)
targets=(android ios macos ubuntu20.04-x86_64)
scriptDir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
projectDir="$(cd "$scriptDir/.." && pwd)"
nativeDir="$projectDir/native"
couchbaseLiteCPrebuiltDir="$nativeDir/vendor/couchbase-lite-C-prebuilt"
couchbaseLiteDartDir="$nativeDir/couchbase-lite-dart"
couchbaseLiteDartBuildDir="$couchbaseLiteDartDir/build"
couchbaseLiteVersion="$(cat "$nativeDir/CouchbaseLite.version")"
couchbaseLiteDartVersion="$(cat "$couchbaseLiteDartDir/CouchbaseLiteDart.version")"
cblE2eTestsStandaloneDartDir="$projectDir/packages/cbl_e2e_tests_standalone_dart"
cblE2eTestsStandaloneDartLibDir="$cblE2eTestsStandaloneDartDir/lib"
cblFlutterLocalDir="$projectDir/packages/cbl_flutter_local"
cblFlutterLocalAndroidJniLibsDir="$cblFlutterLocalDir/android/src/main/jniLibs"
cblFlutterLocalIosFrameworksDir="$cblFlutterLocalDir/ios/Frameworks"
cblFlutterLocalMacosLibrariesDir="$cblFlutterLocalDir/macos/Libraries"
cblFlutterLocalLinuxLibDir="$cblFlutterLocalDir/linux/lib"

function prepareNativeLibraries() {
    local edition="${1:-enterprise}"
    local buildMode="${2:-debug}"
    local target="$3"

    if [[ ! " ${editions[*]} " =~ " $edition " ]]; then
        echo "Invalid edition: $edition"
        exit 1
    fi

    if [[ ! " ${buildModes[*]} " =~ " $buildMode " ]]; then
        echo "Invalid build mode: $buildMode"
        exit 1
    fi

    # If no target is given, use the host as the target.
    if [[ -z "$target" ]]; then
        case "$(uname)" in
        Linux)
            target="ubuntu20.04-x86_64"
            ;;
        Darwin)
            target="macos"
            ;;
        *)
            echo "Unsupported host platform: $(uname)"
            exit 1
            ;;
        esac
    fi

    if [[ ! " ${targets[*]} " =~ " $target " ]]; then
        echo "Invalid target: $target"
        exit 1
    fi

    "$nativeDir/tools/download_prebuilt_binaries.sh" "$target"

    local couchbaseLiteCArchiveDir="$couchbaseLiteCPrebuiltDir/$couchbaseLiteVersion-$edition-$target"

    case "$target" in
    android)
        "$couchbaseLiteDartDir/tools/build_android.sh" "$edition" "$buildMode"

        echo "Copying libraries to cbl_flutter_local"
        rm -rf "$cblFlutterLocalAndroidJniLibsDir"
        mkdir -p "$cblFlutterLocalAndroidJniLibsDir"
        cp -a "$couchbaseLiteCArchiveDir/libcblite-"*"/lib/"* "$cblFlutterLocalAndroidJniLibsDir"
        cp -a "$couchbaseLiteDartBuildDir/android/libcblitedart-"*"/lib/"* "$cblFlutterLocalAndroidJniLibsDir"
        rm -rf "$cblFlutterLocalAndroidJniLibsDir/"*"/cmake"
        mv "$cblFlutterLocalAndroidJniLibsDir/aarch64-linux-android" "$cblFlutterLocalAndroidJniLibsDir/arm64-v8a"
        mv "$cblFlutterLocalAndroidJniLibsDir/arm-linux-androideabi" "$cblFlutterLocalAndroidJniLibsDir/armeabi-v7a"
        mv "$cblFlutterLocalAndroidJniLibsDir/i686-linux-android" "$cblFlutterLocalAndroidJniLibsDir/x86"
        mv "$cblFlutterLocalAndroidJniLibsDir/x86_64-linux-android" "$cblFlutterLocalAndroidJniLibsDir/x86_64"
        ;;
    ios)
        "$couchbaseLiteDartDir/tools/build_ios.sh" "$edition" "$buildMode"

        echo "Copying libraries to cbl_flutter_local"
        rm -rf "$cblFlutterLocalIosFrameworksDir"
        mkdir -p "$cblFlutterLocalIosFrameworksDir"
        cp -a "$couchbaseLiteCArchiveDir/CouchbaseLite.xcframework"* "$cblFlutterLocalIosFrameworksDir"
        cp -a "$couchbaseLiteDartBuildDir/ios/CouchbaseLiteDart.xcframework"* "$cblFlutterLocalIosFrameworksDir"
        ;;
    macos)
        "$couchbaseLiteDartDir/tools/build_unix.sh" "$edition" "$buildMode"

        echo "Copying libraries to cbl_e2e_tests_standalone_dart"
        rm -rf "$cblE2eTestsStandaloneDartLibDir"
        mkdir -p "$cblE2eTestsStandaloneDartLibDir"
        cp -a "$couchbaseLiteCArchiveDir/libcblite-"*"/lib/libcblite"* "$cblE2eTestsStandaloneDartLibDir"
        cp -a "$couchbaseLiteDartBuildDir/unix/libcblitedart-"*"/lib/libcblitedart"* "$cblE2eTestsStandaloneDartLibDir"

        echo "Copying libraries to cbl_flutter_local"
        rm -rf "$cblFlutterLocalMacosLibrariesDir"
        mkdir -p "$cblFlutterLocalMacosLibrariesDir"
        cp -L "$couchbaseLiteCArchiveDir/libcblite-"*"/lib/libcblite."?".dylib" "$cblFlutterLocalMacosLibrariesDir"
        cp -L "$couchbaseLiteDartBuildDir/unix/libcblitedart-"*"/lib/libcblitedart."?".dylib" "$cblFlutterLocalMacosLibrariesDir"
        ;;
    ubuntu20.04-x86_64)
        "$couchbaseLiteDartDir/tools/build_unix.sh" "$edition" "$buildMode"

        echo "Copying libraries to cbl_e2e_tests_standalone_dart"
        rm -rf "$cblE2eTestsStandaloneDartLibDir"
        mkdir -p "$cblE2eTestsStandaloneDartLibDir"
        cp -a "$couchbaseLiteCArchiveDir/libcblite-"*"/lib/x86_64-linux-gnu/libcblite"* "$cblE2eTestsStandaloneDartLibDir"
        cp -a "$couchbaseLiteDartBuildDir/unix/libcblitedart-"*"/lib/x86_64-linux-gnu/libcblitedart"* "$cblE2eTestsStandaloneDartLibDir"

        echo "Copying libraries to cbl_flutter_local"
        rm -rf "$cblFlutterLocalLinuxLibDir"
        mkdir -p "$cblFlutterLocalLinuxLibDir"
        cp -a "$couchbaseLiteCArchiveDir/libcblite-"*"/lib/x86_64-linux-gnu/libcblite"* "$cblFlutterLocalLinuxLibDir"
        cp -a "$couchbaseLiteDartBuildDir/unix/libcblitedart-"*"/lib/x86_64-linux-gnu/libcblitedart"* "$cblFlutterLocalLinuxLibDir"
        ;;
    esac
}

"$@"
