module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '..',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'browserify'],

    // list of files / patterns to load in the browser
    files: [
      { pattern: 'node_modules/es6-shim/es6-shim.js', included: true, watched: false },
      { pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: false },
      { pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: false },
      { pattern: 'node_modules/zone.js/dist/jasmine-patch.js', included: true, watched: false },
      { pattern: 'node_modules/zone.js/dist/async-test.js', included: true, watched: false },
      { pattern: 'node_modules/zone.js/dist/fake-async-test.js', included: true, watched: false },
      'config/main.test.ts', // bootstrap test environment
      'typings/index.d.ts', // global typing information (es6-shim)
      'app/**/*.spec.ts', // load application tests
      {pattern: 'www/build/**/*.html', included: false},
    ],

    // don't allow project dependencies tests to get into our tests
    exclude: [
      'node_modules/**/*.spec.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.ts': ['browserify']
    },

    browserify: {
      debug: true,
      transform: [
        ['browserify-istanbul', {
          instrumenter: require('isparta'),
          ignore: ['**/*.spec.ts','**/*.d.ts'],
        }]
      ],
      plugin: [
        ['tsify']
      ]
    },

    // options on how to report coverage:
    coverageReporter: {
      reporters: [
        {type: 'text'},
        {type: 'lcov', dir: 'coverage', subdir: '.'}
      ]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // GOTCHA -- Karma proxies _everything_ through base first..
    //           Also any files you want to serve need to be in the files array above with serverd: true
    proxies: {
      '/build': '/base/www/build'
    },

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'PhantomJS',
    ],

    // https://github.com/lathonez/clicker/issues/82
    // try increasing this value if you see the error "Disconnected (1 times), because no message in 30000 ms."
    browserNoActivityTimeout: 30000
  });
};