// (function (global) {
//     var packages = {
//         app: {
//             main: './bootstrap.js',
//             defaultExtension: 'js'
//         }
//     };
//     var paths = {
//         "lib": "node_modules"
//     }
//     var map = {
//         '@angular': 'lib/@angular',
//         'rxjs': 'lib/rxjs'
//     };
//     var ngPackageNames = [
//         'common',
//         'compiler',
//         'core',
//         'forms',
//         'http',
//         'router',
//         'platform-browser',
//         'platform-browser-dynamic',
//     ];
//     ngPackageNames.forEach(function (pkgName) {
//         packages['@angular/' + pkgName] = {
//             main: 'bundles/' + pkgName + '.umd.js',
//             defaultExtension: 'js'
//         };
//     });
//     System.config({
//         paths: paths,
//         defaultJSExtensions: true,
//         transpiler: null,
//         packages: packages,
//         map: map
//     });
// })(this);
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': '../lib/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            'app': './app',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/material': 'npm:@angular/material/bundles/material.umd.js',

            // other libraries
            'rxjs': 'npm:rxjs'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './bootstrap.js',
                defaultExtension: 'js',
                meta: {
                    './*.js': {
                        loader: 'systemjs-angular-loader.js'
                    }
                }
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);    