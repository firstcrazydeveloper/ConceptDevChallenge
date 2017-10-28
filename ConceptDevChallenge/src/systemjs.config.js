/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        meta: {
            '*.css': { loader: 'css' }
        },
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            'app': 'src/app',
            'environment': 'src/environments',
            'admin': 'src/admin',
            'common': 'src/common',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.min.js',
            '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@ng-bootstrap/ng-bootstrap': 'npm:@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
            'ng2-toastr': 'npm:ng2-toastr',           
            'moment': 'npm:moment',


            // other libraries
            'rxjs': 'npm:rxjs',
            'css': 'npm:systemjs-plugin-css/css.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                defaultExtension: 'js',
                meta: {
                    './*.js': {
                        loader: 'src/systemjs-angular-loader.js'
                    }
                }
            },
            environment: {
                defaultExtension: 'js',
                meta: {
                    './*.js': {
                        loader: 'src/systemjs-angular-loader.js'
                    }
                }
            },
            admin: {
                defaultExtension: 'js',
                meta: {
                    './*.js': {
                        loader: 'src/systemjs-angular-loader.js'
                    }
                }
            },
            common: {
                defaultExtension: 'js',
                meta: {
                    './*.js': {
                        loader: 'src/systemjs-angular-loader.js'
                    }
                }
            },
            rxjs: {
                defaultExtension: 'js'
            },
            environment: {
                defaultExtension: 'js'
            },

            'src/': {
                meta: {
                    '*.css': { loader: 'css' }
                }
            },
            'ng2-toastr': { main: 'bundles/ng2-toastr.js', defaultExtension: 'js' },
           
            'moment': {
                main: 'moment.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);
