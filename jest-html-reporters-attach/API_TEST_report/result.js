window.jest_html_reporters_callback__({"numFailedTestSuites":1,"numFailedTests":2,"numPassedTestSuites":1,"numPassedTests":4,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuites":2,"numTotalTests":6,"startTime":1728462135492,"success":false,"testResults":[{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1728462136721,"runtime":1155,"slow":false,"start":1728462135566},"testFilePath":"/Users/olena/Desktop/aqa-advanced/homework14/_test_/users.test.js","failureMessage":null,"testResults":[{"ancestorTitles":[],"duration":981,"failureMessages":[],"fullName":"Get current user profile","status":"passed","title":"Get current user profile"},{"ancestorTitles":[],"duration":0,"failureMessages":[],"fullName":"Check users settings","status":"passed","title":"Check users settings"}]},{"numFailingTests":2,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1728462137319,"runtime":1753,"slow":false,"start":1728462135566},"testFilePath":"/Users/olena/Desktop/aqa-advanced/homework14/_test_/cars.test.js","failureMessage":"\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mCheck Cars API › User can create a new car with valid data\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\n    Expected: \u001b[32m6\u001b[39m\n    Received: \u001b[31m5\u001b[39m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 27 |\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 28 |\u001b[39m     \u001b[90m// Проверяю, что количество машин увеличилось на 1\u001b[39m\u001b[22m\n\u001b[2m    \u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 29 |\u001b[39m     expect(newCarList\u001b[33m.\u001b[39mlength)\u001b[33m.\u001b[39mtoBe(carList\u001b[33m.\u001b[39mlength \u001b[33m+\u001b[39m \u001b[35m1\u001b[39m)\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m    |\u001b[39m                               \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 30 |\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 31 |\u001b[39m     \u001b[90m// Проверяю, что новая машина находится в списке\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 32 |\u001b[39m     expect(\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.toBe (\u001b[22m\u001b[2m\u001b[0m\u001b[36mhomework14/_test_/cars.test.js\u001b[39m\u001b[0m\u001b[2m:29:31)\u001b[22m\u001b[2m\u001b[22m\n\n\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mCheck Cars API › Fail to create car with invalid mileage (negative)\u001b[39m\u001b[22m\n\n    TypeError: Cannot read properties of undefined (reading '0')\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 63 |\u001b[39m     \u001b[36mconst\u001b[39m brandsResponse \u001b[33m=\u001b[39m \u001b[36mawait\u001b[39m carsController\u001b[33m.\u001b[39mgetBrands()\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 64 |\u001b[39m     \u001b[36mconst\u001b[39m validBrand \u001b[33m=\u001b[39m brandsResponse\u001b[33m.\u001b[39mdata\u001b[33m.\u001b[39mdata[\u001b[35m0\u001b[39m]\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m    \u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 65 |\u001b[39m     \u001b[36mconst\u001b[39m validModel \u001b[33m=\u001b[39m validBrand\u001b[33m.\u001b[39mmodels[\u001b[35m0\u001b[39m]\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m    |\u001b[39m                                         \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 66 |\u001b[39m   \u001b[22m\n\u001b[2m     \u001b[90m 67 |\u001b[39m     \u001b[90m// Создаю машину с некорректным значением пробега (например, -6)\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 68 |\u001b[39m     \u001b[36mtry\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[2m\u001b[0m\u001b[36mhomework14/_test_/cars.test.js\u001b[39m\u001b[0m\u001b[2m:65:41)\u001b[22m\u001b[2m\u001b[22m\n","testResults":[{"ancestorTitles":["Check Cars API"],"duration":146,"failureMessages":["Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\nExpected: \u001b[32m6\u001b[39m\nReceived: \u001b[31m5\u001b[39m\n    at Object.toBe (/Users/olena/Desktop/aqa-advanced/homework14/_test_/cars.test.js:29:31)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)"],"fullName":"Check Cars API User can create a new car with valid data","status":"failed","title":"User can create a new car with valid data"},{"ancestorTitles":["Check Cars API"],"duration":48,"failureMessages":[],"fullName":"Check Cars API Fail to create car with invalid brandId (negative)","status":"passed","title":"Fail to create car with invalid brandId (negative)"},{"ancestorTitles":["Check Cars API"],"duration":92,"failureMessages":[],"fullName":"Check Cars API Fail to create car with invalid modelId (negative)","status":"passed","title":"Fail to create car with invalid modelId (negative)"},{"ancestorTitles":["Check Cars API"],"duration":48,"failureMessages":["TypeError: Cannot read properties of undefined (reading '0')\n    at Object.<anonymous> (/Users/olena/Desktop/aqa-advanced/homework14/_test_/cars.test.js:65:41)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)"],"fullName":"Check Cars API Fail to create car with invalid mileage (negative)","status":"failed","title":"Fail to create car with invalid mileage (negative)"}]}],"config":{"bail":0,"changedFilesWithAncestor":false,"ci":false,"collectCoverage":false,"collectCoverageFrom":[],"coverageDirectory":"/Users/olena/Desktop/aqa-advanced/coverage","coverageProvider":"v8","coverageReporters":["json","text","lcov","clover"],"detectLeaks":false,"detectOpenHandles":false,"errorOnDeprecated":false,"expand":false,"findRelatedTests":false,"forceExit":false,"json":false,"lastCommit":false,"listTests":false,"logHeapUsage":false,"maxConcurrency":5,"maxWorkers":7,"noStackTrace":false,"nonFlagArgs":["homework14"],"notify":false,"notifyMode":"failure-change","onlyChanged":false,"onlyFailures":false,"openHandlesTimeout":1000,"passWithNoTests":false,"projects":[],"reporters":[["default",{}],["/Users/olena/Desktop/aqa-advanced/node_modules/jest-html-reporters/index.js",{"filename":"API_TEST_report.html"}]],"rootDir":"/Users/olena/Desktop/aqa-advanced","runTestsByPath":false,"seed":-910286290,"skipFilter":false,"snapshotFormat":{"escapeString":false,"printBasicPrototype":false},"testFailureExitCode":1,"testPathPattern":"homework14","testSequencer":"/Users/olena/Desktop/aqa-advanced/node_modules/@jest/test-sequencer/build/index.js","updateSnapshot":"new","useStderr":false,"watch":false,"watchAll":false,"watchman":true,"workerThreads":false},"endTime":1728462137334,"_reporterOptions":{"publicPath":"/Users/olena/Desktop/aqa-advanced","filename":"API_TEST_report.html","expand":false,"pageTitle":"","hideIcon":false,"testCommand":"","openReport":false,"failureMessageOnly":0,"enableMergeData":false,"dataMergeLevel":1,"inlineSource":false,"urlForTestFiles":"","darkTheme":false,"includeConsoleLog":false,"stripSkippedTest":false},"logInfoMapping":{},"attachInfos":{}})