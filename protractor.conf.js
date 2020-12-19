exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    //directConnect: true,
    getPageTimeout: 60000,
    allScriptsTimeout: 50000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    multiCapabilities:[{
      "browserName": 'firefox'

    },{

      "browserName": 'chrome'
    }],

    plugins: [{
      package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
      options:{
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true,
        reportName: 'CucumberJS Report',
        pageFooter: '<div><p>Created by Way2Automation</p></div>',
        pageTitle: 'CucumberJS with Protractor Report',
        customData:{
          title: 'Execution info',
          data:[

            {label: 'Project', value: 'CucumberJS Project'},
            {label: 'Release', value: '7.8.9'},
            {label: 'QA Resource', value: 'Sada Siva Reddy K'}

          ]


        },

        displayDuration: true
      }
  }],

    maxSessions: 2,

    specs: ['features/*.feature'],

    cucumberOpts: {
      // require step definitions
      tags: false,
      format:['json:.tmp/results.json','json:cukereport.json'],
      require: [
        'features/stepDefinitions/stepDefinition.js' // accepts a glob
      ]
    }
  };