'use strict';
/* eslint-disable no-undef */
/**
 * @file dataBroker.test.js
 * @module dataBroker.test
 * @description Unit tests for the dataBroker.js
 * @requires module:dataBroker
 * @requires module:rulesLibrary
 * @requires module:data
 * @requires module:testData/dataBroker
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/04/16
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import dataBroker from '../../../../src/brokers/dataBroker.js';
import rulesLibrary from '../../../../src/businessRules/rulesLibrary.js';
import D from '../../../../src/structures/data.js';
import * as obj_con from '../../testData/brokers/dataBroker.js';
import * as tst_con from '../constants/test.constants.js';
import { basePath } from '../utilities/utilities.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { sys, wrd, num, bas, gen } = hayConst;

/**
 * @function scanDataPath
 * @description Tests the positive and negative test cases of the scanDataPath function.
 * @author Json Howard
 * @date 2023/04/16
 */
describe(tst_con.cscanDataPath, () => {
    /**
    * @function scanDataPath_validData
    * @description Tests the brokers.dataBroker.scanDataPath function, with a valid data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cscanDataPath_validData, () => {
        // Arrange
        let dataPath = basePath();
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.scanDataPath(dataPath);

        // Assert
        expect(returnData.length).toBeGreaterThan(1);
    });

    /**
    * @function scanDataPath_inValidString
    * @description Tests the brokers.dataBroker.scanDataPath function, with an invalid string data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cscanDataPath_inValidString, () => {
        // Arrange
        let dataPath = basePath() + num.c123;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.scanDataPath(dataPath);

        // Assert
        expect(returnData).toEqual([]);
    });
});

/**
 * @function findUniversalDebugConfigSetting
 * @description Tests the positive and negative test cases of the findUniversalDebugConfigSetting function.
 * @author Json Howard
 * @date 2023/04/16
 */
describe(tst_con.cfindUniversalDebugConfigSetting, () => {
    /**
    * @function findUniversalDebugConfigSetting_validData
    * @description Tests the brokers.dataBroker.findUniversalDebugConfigSetting function, with a valid data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cfindUniversalDebugConfigSetting_validData, () => {
        // Arrange
        let appConfigFilesToLoad = [obj_con.applicationPath()];
        let frameworkConfigFilesToLoad = [obj_con.frameworkPath()];
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.findUniversalDebugConfigSetting(appConfigFilesToLoad, frameworkConfigFilesToLoad);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function findUniversalDebugConfigSetting_inValidString
    * @description Tests the brokers.dataBroker.findUniversalDebugConfigSetting function, with an invalid string data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cfindUniversalDebugConfigSetting_inValidString, () => {
        // Arrange
        let appConfigFilesToLoad = basePath() + bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.capplication + num.c1 + wrd.csystem + bas.cDot + gen.cjson;
        let frameworkConfigFilesToLoad = obj_con.stringRandomText;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.findUniversalDebugConfigSetting(appConfigFilesToLoad, frameworkConfigFilesToLoad);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function findUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadString
    * @description Tests the brokers.dataBroker.findUniversalDebugConfigSetting function, with an invalid string frameworkConfigFilesToLoad data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadString, () => {
        // Arrange
        let appConfigFilesToLoad = [obj_con.applicationPath()];
        let frameworkConfigFilesToLoad = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.findUniversalDebugConfigSetting(appConfigFilesToLoad, frameworkConfigFilesToLoad);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function findUniversalDebugConfigSetting_inValidNumber
    * @description Tests the brokers.dataBroker.findUniversalDebugConfigSetting function, with an invalid integer frameworkConfigFilesToLoad data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cfindUniversalDebugConfigSetting_inValidNumber, () => {
        // Arrange
        let appConfigFilesToLoad = 546;
        let frameworkConfigFilesToLoad = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.findUniversalDebugConfigSetting(appConfigFilesToLoad, frameworkConfigFilesToLoad);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function findUniversalDebugConfigSetting_inValidBoolean
    * @description Tests the brokers.dataBroker.findUniversalDebugConfigSetting function, with an invalid boolean frameworkConfigFilesToLoad data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cfindUniversalDebugConfigSetting_inValidBoolean, () => {
        // Arrange
        let appConfigFilesToLoad = false;
        let frameworkConfigFilesToLoad = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.findUniversalDebugConfigSetting(appConfigFilesToLoad, frameworkConfigFilesToLoad);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function loadAllCsvData
 * @description Tests the positive and negative test cases of the loadAllCsvData function.
 * @author Json Howard
 * @date 2023/04/16
 */
describe(tst_con.cloadAllCsvData, () => {
    /**
    * @function loadAllCsvData_validData
    * @description Tests the brokers.dataBroker.loadAllCsvData function, with a valid data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadAllCsvData_validData, () => {
        // Arrange
        let filesToLoad = [obj_con.dataBrokerCsvPath()];
        let contextName = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllCsvData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function loadAllCsvData_inValidString
    * @description Tests the brokers.dataBroker.loadAllCsvData function, with an invalid string data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadAllCsvData_inValidString, () => {
        // Arrange
        let filesToLoad = obj_con.dataBrokerCsvPath();
        let contextName = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllCsvData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBe(undefined);
    });

    /**
    * @function loadAllCsvData_inValidContextNameString
    * @description Tests the brokers.dataBroker.loadAllCsvData function, with an invalid string context name.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadAllCsvData_inValidContextNameString, () => {
        // Arrange
        let filesToLoad = [obj_con.dataBrokerCsvPath()];
        let contextName = wrd.cComa;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllCsvData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function loadAllCsvData_inValidNumber
    * @description Tests the brokers.dataBroker.loadAllCsvData function, with an invalid integer context name.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadAllCsvData_inValidNumber, () => {
        // Arrange
        let filesToLoad = 546;
        let contextName = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllCsvData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBe(undefined);
    });

    /**
    * @function loadAllCsvData_inValidBoolean
    * @description Tests the brokers.dataBroker.loadAllCsvData function, with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadAllCsvData_inValidBoolean, () => {
        // Arrange
        let filesToLoad = false;
        let contextName = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllCsvData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBe(undefined);
    });
});

/**
 * @function loadAllXmlData
 * @description Tests the positive and negative test cases of the loadAllXmlData function.
 * @author Json Howard
 * @date 2023/04/16
 */
describe(tst_con.cloadAllXmlData, () => {
    /**
    * @function loadedAllXmlData_validData
    * @description Tests the brokers.dataBroker.loadAllXmlData function, with a valid data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadAllXmlData_validData, () => {
        // Arrange
        let filesToLoad = [obj_con.dataBrokerXmlPath()];
        let contextName = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllXmlData(filesToLoad, contextName);

        // Assert
        expect(returnData).toEqual({});
    });

    /**
    * @function loadedAllXmlData_inValidString
    * @description Tests the brokers.dataBroker.loadAllXmlData function, with an invalid string data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadAllXmlData_inValidString, () => {
        // Arrange
        let filesToLoad = obj_con.dataBrokerXmlPath();
        let contextName = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllXmlData(filesToLoad, contextName);

        // Assert
        expect(returnData).toEqual({});
    });

    /**
    * @function loadAllXmlData_inValidContextNameString
    * @description Tests the brokers.dataBroker.loadAllXmlData function, with an invalid string contextName.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadAllXmlData_inValidContextNameString, () => {
        // Arrange
        let filesToLoad = [obj_con.dataBrokerXmlPath()];
        let contextName = wrd.cComa;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllXmlData(filesToLoad, contextName);

        // Assert
        expect(returnData).toEqual({});
    });

    /**
    * @function loadedAllXmlData_inValidNumber
    * @description Tests the brokers.dataBroker.loadAllXmlData function, with an invalid integer data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadAllXmlData_inValidNumber, () => {
        // Arrange
        let filesToLoad = 546;
        let contextName = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllXmlData(filesToLoad, contextName);

        // Assert
        expect(returnData).toEqual({});
    });

    /**
    * @function loadedAllXmlData_inValidBoolean
    * @description Tests the brokers.dataBroker.loadAllXmlData function, with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadAllXmlData_inValidBoolean, () => {
        // Arrange
        let filesToLoad = false;
        let contextName = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllXmlData(filesToLoad, contextName);

        // Assert
        expect(returnData).toEqual({});
    });
});

/**
 * @function loadAllJsonData
 * @description Tests the positive and negative test cases of the loadAllJsonData function.
 * @author Json Howard
 * @date 2023/04/16
 */
describe(tst_con.cloadAllJsonData, () => {
    /**
    * @function loadAllJsonData_validData
    * @description Tests the brokers.dataBroker.loadAllJsonData function, with a valid data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadAllJsonData_validData, () => {
        // Arrange
        let filesToLoad = [obj_con.dataBrokerJsonPath()];
        let contextName = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllJsonData(filesToLoad, contextName);

        // Assert
        expect(returnData).toEqual({});
    });

    /**
    * @function loadAllJsonData_inValidString
    * @description Tests the brokers.dataBroker.loadAllJsonData function, with an invalid string data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadAllJsonData_inValidString, () => {
        // Arrange
        let filesToLoad = obj_con.dataBrokerJsonPath();
        let contextName = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllJsonData(filesToLoad, contextName);

        // Assert
        expect(returnData).toEqual({});
    });

    /**
    * @function loadAllJsonData_inValidContextNameString
    * @description Tests the brokers.dataBroker.loadAllJsonData function, with an invalid string contextName.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadAllJsonData_inValidContextNameString, () => {
        // Arrange
        let filesToLoad = [obj_con.dataBrokerJsonPath()];
        let contextName = wrd.cComa;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllJsonData(filesToLoad, contextName);

        // Assert
        expect(returnData).toEqual({});
    });

    /**
    * @function loadAllJsonData_inValidNumber
    * @description Tests the brokers.dataBroker.loadAllJsonData function, with an invalid integer path.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadAllJsonData_inValidNumber, () => {
        // Arrange
        let filesToLoad = 546;
        let contextName = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllJsonData(filesToLoad, contextName);

        // Assert
        expect(returnData).toEqual({});
    });

    /**
    * @function loadAllJsonData_inValidBoolean
    * @description Tests the brokers.dataBroker.loadAllJsonData function, with an invalid boolean path.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadAllJsonData_inValidBoolean, () => {
        // Arrange
        let filesToLoad = false;
        let contextName = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllJsonData(filesToLoad, contextName);

        // Assert
        expect(returnData).toEqual({});
    });
});

/**
 * @function processCsvData
 * @description Tests the positive and negative test cases of the processCsvData function.
 * @author Json Howard
 * @date 2023/04/16
 */
describe(tst_con.cprocessCsvData, () => {
    /**
    * @function processCsvData_validData
    * @description Tests the brokers.dataBroker.processCsvData function, with a valid data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cprocessCsvData_validData, () => {
        // Arrange
        let data = obj_con.JsonObjectArrayOfStrings_01;
        let contextName = wrd.ccolors;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.processCsvData(data, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function processCsvData_inValidString
    * @description Tests the brokers.dataBroker.processCsvData function, with an invalid string data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cprocessCsvData_inValidString, () => {
        // Arrange
        let data = obj_con.stringRandomText;
        let contextName = wrd.ccolors;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.processCsvData(data, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function processCsvData_inValidContextNameString
    * @description Tests the brokers.dataBroker.processCsvData function, with an invalid string context name.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cprocessCsvData_inValidContextNameString, () => {
        // Arrange
        let data = obj_con.JsonObjectArrayOfStrings_01;
        let contextName = wrd.cComa;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.processCsvData(data, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function processCsvData_inValidNumber
    * @description Tests the brokers.dataBroker.processCsvData function, with an invalid integer data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cprocessCsvData_inValidNumber, () => {
        // Arrange
        let data = 546;
        let contextName = wrd.ccolors;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.processCsvData(data, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function processCsvData_inValidBoolean
    * @description Tests the brokers.dataBroker.processCsvData function, with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cprocessCsvData_inValidBoolean, () => {
        // Arrange
        let data = false;
        let contextName = wrd.ccolors;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.processCsvData(data, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

// /**
//  * @note processXmlData UnitTest is missing.
//  * @note processXmlLeafNode UnitTest is missing.
//  */
 
/**
 * @function preprocessJsonFile
 * @description Tests the positive and negative test cases of the preprocessJsonFile function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.cpreprocessJsonFile, () => {
    /**
    * @function preprocessJsonFile_validData
    * @description Tests the brokers.dataBroker.preprocessJsonFile function, with a valid data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cpreprocessJsonFile_validData, () => {
        // Arrange
        let fileToLoad = [obj_con.dataBrokerJsonPath()];
        rulesLibrary.initRulesLibrary();

        // Act
        let returnData = dataBroker.preprocessJsonFile(fileToLoad);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function preprocessJsonFile_inValidString
    * @description Tests the brokers.dataBroker.preprocessJsonFile function, with an invalid string data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cpreprocessJsonFile_inValidString, () => {
        // Arrange
        let fileToLoad = obj_con.stringRandomText;
        rulesLibrary.initRulesLibrary();

        // Act
        let returnData = dataBroker.preprocessJsonFile(fileToLoad);

        // Assert
        expect(returnData).toBeUndefined();
    });

    /**
    * @function preprocessJsonFile_inValidNumber
    * @description Tests the brokers.dataBroker.preprocessJsonFile function, with an invalid integer data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cpreprocessJsonFile_inValidNumber, () => {
        // Arrange
        let fileToLoad = 546;
        rulesLibrary.initRulesLibrary();

        // Act
        let returnData = dataBroker.preprocessJsonFile(fileToLoad);

        // Assert
        expect(returnData).toBeUndefined();
    });

    /**
    * @function preprocessJsonFile_inValidBoolean
    * @description Tests the brokers.dataBroker.preprocessJsonFile function, with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cpreprocessJsonFile_inValidBoolean, () => {
        // Arrange
        let fileToLoad = false;
        rulesLibrary.initRulesLibrary();

        // Act
        let returnData = dataBroker.preprocessJsonFile(fileToLoad);

        // Assert
        expect(returnData).toBeUndefined();
    });
});

// /**
//  * @function writeJsonDataToFile
//  * @description Tests the positive and negative test cases of the writeJsonDataToFile function.
//  * @author Json Howard
//  * @date 2023/04/17
//  */
// describe(tst_con.cwriteJsonDataToFile, () => {
//     /**
//     * @function writeJsonDataToFile_validData
//     * @description Tests the brokers.dataBroker.writeJsonDataToFile function, with a valid data.
//     * @author Json Howard
//     * @date 2023/04/16
//     */
//     test(tst_con.cwriteJsonDataToFile_validData, () => {
//         // Arrange
//         let fileToSaveTo = obj_con.writeJsonDataPath();
//         let dataToWriteOut = obj_con.JsonObjectArrayOfStrings_01;
//         // rulesLibrary.initRulesLibrary();

//         // Act
//         let returnData = dataBroker.writeJsonDataToFile(fileToSaveTo, dataToWriteOut);

//         // Assert
//         expect(returnData).toBe(true);
//     });

//     /**
//     * @function writeJsonDataToFile_inValidString
//     * @description Tests the brokers.dataBroker.writeJsonDataToFile function, with an invalid string data.
//     * @author Json Howard
//     * @date 2023/04/16
//     * @NOTE If this test is implemented and executed it will create a garbage file in the root folder called '464gsdsfae8f46', therefore this test is not implemented.
//     */    
//     test(tst_con.cwriteJsonDataToFile_inValidString, () => {
//         // Arrange
//         let fileToSaveTo = wrd.cHello;
//         let dataToWriteOut = obj_con.JsonObjectArrayOfStrings_01;

//         // Act
//         let returnData = dataBroker.writeJsonDataToFile(fileToSaveTo, dataToWriteOut);

//         // Assert
//         expect(returnData).toBe(false);
//     });

//     /**
//     * @function writeJsonDataToFile_inValidDataToWrite
//     * @description Tests the brokers.dataBroker.writeJsonDataToFile function, with an invalid dataToWrite.
//     * @author Json Howard
//     * @date 2023/04/16
//     */
//     test(tst_con.cwriteJsonDataToFile_inValidDataToWrite, () => {
//         // Arrange
//         let fileToSaveTo = obj_con.writeJsonDataPath();
//         let dataToWriteOut = obj_con.JsonObjectArrayOfStrings_01;

//         // Act
//         let returnData = dataBroker.writeJsonDataToFile(fileToSaveTo, dataToWriteOut);

//         // Assert
//         expect(returnData).toBe(true);
//     });

//     /**
//     * @function writeJsonDataToFile_inValidNumber
//     * @description Tests the brokers.dataBroker.writeJsonDataToFile function, with an invalid integer data.
//     * @author Json Howard
//     * @date 2023/04/16
//     */
//     test(tst_con.cwriteJsonDataToFile_inValidNumber, () => {
//         // Arrange
//         let fileToSaveTo = 546;
//         let dataToWriteOut = obj_con.JsonObjectArrayOfStrings_01;

//         // Act
//         let returnData = dataBroker.writeJsonDataToFile(fileToSaveTo, dataToWriteOut);

//         // Assert
//         expect(returnData).toBeUndefined();
//     });

//     /**
//     * @function writeJsonDataToFile_inValidBoolean
//     * @description Tests the brokers.dataBroker.writeJsonDataToFile function, with an invalid boolean data.
//     * @author Json Howard
//     * @date 2023/04/16
//     */
//     test(tst_con.cwriteJsonDataToFile_inValidBoolean, () => {
//         // Arrange
//         let fileToSaveTo = false;
//         let dataToWriteOut = obj_con.JsonObjectArrayOfStrings_01;

//         // Act
//         let returnData = dataBroker.writeJsonDataToFile(fileToSaveTo, dataToWriteOut);

//         // Assert
//         expect(returnData).toBeUndefined();
//     });
// });

/**
 * @function setupDataStorage
 * @description Tests the positive and negative test cases of the setupDataStorage function.
 * @author Json Howard
 * @date 2023/04/17
 * @note setupDataStorage function doesn't have any inputs, but inputData is defined in this unitTest function.
 */
describe(tst_con.csetupDataStorage, () => {
    /**
    * @function setupDataStorage_validData
    * @description Tests the brokers.dataBroker.setupDataStorage function, with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.csetupDataStorage_validData, () => {
        // Act
        dataBroker.setupDataStorage();

        // Assert
        expect(D[sys.cDataStorage]).toEqual({});
    });

    /**
    * @function setupDataStorage_inValidString
    * @description Tests the brokers.dataBroker.setupDataStorage function, with an invalid string data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.csetupDataStorage_inValidString, () => {
        // Arrange
        let input = wrd.cHello + wrd.cWorld;

        // Act
        dataBroker.setupDataStorage(input);

        // Assert
        expect(D[sys.cDataStorage]).toEqual({});
    });

    /**
    * @function setupDataStorage_inValidNumber
    * @description Tests the brokers.dataBroker.setupDataStorage function, with an invalid number data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.csetupDataStorage_inValidNumber, () => {
        // Arrange
        let input = 123;

        // Act
        dataBroker.setupDataStorage(input);

        // Assert
        expect(D[sys.cDataStorage]).toEqual({});
    });

    /**
    * @function setupDataStorage_inValidBoolean
    * @description Tests the brokers.dataBroker.setupDataStorage function, with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.csetupDataStorage_inValidBoolean, () => {
        // Arrange
        let input = false;

        // Act
        dataBroker.setupDataStorage(input);

        // Assert
        expect(D[sys.cDataStorage]).toEqual({});
    });
});

/**
 * @function storeData
 * @description Tests the positive and negative test cases of the storeData function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.cstoreData, () => {
    /**
    * @function storeData_validDataString
    * @description Tests the brokers.dataBroker.storeData function, with a valid string data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cstoreData_validDataString, () => {
        // Arrange
        let dataStorageContextName = wrd.ccolors;
        let dataToStore = wrd.cHello + wrd.cWorld;

        // Act
        let returnData = dataBroker.storeData(dataStorageContextName, dataToStore);

        // Assert
        expect(returnData).toBe(true);
        expect(D[sys.cDataStorage][dataStorageContextName]).toBe(dataToStore);
    });

    /**
    * @function storeData_validDataBoolean
    * @description Tests the brokers.dataBroker.storeData function, with a valid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cstoreData_validDataBoolean, () => {
        // Arrange
        let dataStorageContextName = wrd.ccolors;
        let dataToStore = false;

        // Act
        let returnData = dataBroker.storeData(dataStorageContextName, dataToStore);

        // Assert
        expect(returnData).toBe(true);
        expect(D[sys.cDataStorage][dataStorageContextName]).toBe(dataToStore);
    });

    /**
    * @function storeData_validDataInteger
    * @description Tests the brokers.dataBroker.storeData function, with a valid integer data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cstoreData_validDataInteger, () => {
        // Arrange
        let dataStorageContextName = wrd.ccolors;
        let dataToStore = 123;

        // Act
        let returnData = dataBroker.storeData(dataStorageContextName, dataToStore);

        // Assert
        expect(returnData).toBe(true);
        expect(D[sys.cDataStorage][dataStorageContextName]).toBe(dataToStore);
    });

    /**
    * @function storeData_validDataArray
    * @description Tests the brokers.dataBroker.storeData function, with a valid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cstoreData_validDataArray, () => {
        // Arrange
        let dataStorageContextName = wrd.ccolors;
        let dataToStore = [1, 2, 3, 4, 5];

        // Act
        let returnData = dataBroker.storeData(dataStorageContextName, dataToStore);

        // Assert
        expect(returnData).toBe(true);
        expect(D[sys.cDataStorage][dataStorageContextName]).toBe(dataToStore);
    });

    /**
    * @function storeData_validDataObject
    * @description Tests the brokers.dataBroker.storeData function, with a valid object data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cstoreData_validDataObject, () => {
        // Arrange
        let dataStorageContextName = wrd.ccolors;
        let dataToStore = obj_con.JsonObjectOfStrings_02;

        // Act
        let returnData = dataBroker.storeData(dataStorageContextName, dataToStore);

        // Assert
        expect(returnData).toBe(true);
        expect(D[sys.cDataStorage][dataStorageContextName]).toBe(dataToStore);
    });

    /**
    * @function storeData_inValidDataToStoreUndefined
    * @description Tests the brokers.dataBroker.storeData function, with an invalid undefined data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cstoreData_inValidDataToStoreUndefined, () => {
        // Arrange
        let dataStorageContextName = wrd.ccolors;
        let dataToStore = undefined;

        // Act
        let returnData = dataBroker.storeData(dataStorageContextName, dataToStore);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function storeData_inValidDataToStoreNaN
    * @description Tests the brokers.dataBroker.storeData function, with an invalid NaN data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cstoreData_inValidDataToStoreNaN, () => {
        // Arrange
        let dataStorageContextName = wrd.ccolors;
        let dataToStore = NaN;

        // Act
        let returnData = dataBroker.storeData(dataStorageContextName, dataToStore);

        // Assert
        expect(returnData).toBe(true);
        expect(D[sys.cDataStorage][dataStorageContextName]).toBe(dataToStore);
    });

    /**
    * @function storeData_inValidDataStorageDataToStoreNumber
    * @description Tests the brokers.dataBroker.storeData function, with an invalid number dataStorageContextName.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cstoreData_inValidDataStorageDataToStoreNumber, () => {
        // Arrange
        let dataStorageContextName = 123;
        let dataToStore = [1, 2, 3, 4, 5];

        // Act
        let returnData = dataBroker.storeData(dataStorageContextName, dataToStore);

        // Assert
        expect(returnData).toBe(true);
        expect(D[sys.cDataStorage][dataStorageContextName]).toBe(dataToStore);
    });

    /**
    * @function storeData_inValidDataStorageDataToStoreBoolean
    * @description Tests the brokers.dataBroker.storeData function, with an invalid boolean dataStorageContextName.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cstoreData_inValidDataStorageDataToStoreBoolean, () => {
        // Arrange
        let dataStorageContextName = false;
        let dataToStore = [1, 2, 3, 4, 5];

        // Act
        let returnData = dataBroker.storeData(dataStorageContextName, dataToStore);

        // Assert
        expect(returnData).toBe(true);
        expect(D[sys.cDataStorage][dataStorageContextName]).toBe(dataToStore);
    });
});

/**
 * @function getData
 * @description Tests the positive and negative test cases of the getData function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.cgetData, () => {
    /**
    * @function getData_validData
    * @description Tests the brokers.dataBroker.getData function, with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetData_validData, () => {
        // Arrange
        let dataStorageContextName = wrd.ccolors;

        // Act
        dataBroker.storeData(dataStorageContextName, obj_con.JsonObjectArrayOfStrings_01);
        let returnData = dataBroker.getData(dataStorageContextName);

        // Assert
        expect(returnData).toEqual(obj_con.JsonObjectArrayOfStrings_01);
    });

    /**
    * @function getData_inValidString
    * @description Tests the brokers.dataBroker.getData function, with an invalid string data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetData_inValidString, () => {
        // Arrange
        let dataStorageContextName = obj_con.stringRandomText;

        // Act
        dataBroker.storeData(dataStorageContextName, obj_con.JsonObjectArrayOfStrings_01);
        let returnData = dataBroker.getData(wrd.cHello);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
    * @function getData_inValidNumber
    * @description Tests the brokers.dataBroker.getData function, with an invalid number data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetData_inValidNumber, () => {
        // Arrange
        let dataStorageContextName = 546;

        // Act
        dataBroker.storeData(dataStorageContextName, obj_con.JsonObjectArrayOfStrings_01);
        let returnData = dataBroker.getData(567);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
    * @function getData_inValidBoolean
    * @description Tests the brokers.dataBroker.getData function, with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetData_inValidBoolean, () => {
        // Arrange
        let dataStorageContextName = false;

        // Act
        dataBroker.storeData(dataStorageContextName, obj_con.JsonObjectArrayOfStrings_01);
        let returnData = dataBroker.getData(true);

        // Assert
        expect(returnData).toEqual(false);
    });
});

/**
 * @function clearData
 * @description Tests the positive and negative test cases of the clearData function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.cclearData, () => {
    /**
    * @function clearData_validData
    * @description Tests the brokers.dataBroker.clearData function, with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cclearData_validData, () => {
        // Arrange
        let dataStorageContextName = wrd.ccolors;

        // Act
        dataBroker.storeData(dataStorageContextName, obj_con.JsonObjectArrayOfStrings_01);
        dataBroker.clearData(dataStorageContextName);

        // Assert
        expect(D[sys.cDataStorage][dataStorageContextName]).toEqual({});
    });

    /**
    * @function clearData_inValidUndefined
    * @description Tests the brokers.dataBroker.clearData function, with an invalid undefined data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cclearData_inValidUndefined, () => {
        // Arrange
        let dataStorageContextName = undefined;

        // Act
        dataBroker.storeData(dataStorageContextName, obj_con.JsonObjectArrayOfStrings_01);
        dataBroker.clearData(dataStorageContextName);

        // Assert
        expect(D[sys.cDataStorage][dataStorageContextName]).toEqual({});
    });

    /**
    * @function clearData_inValidNaN
    * @description Tests the brokers.dataBroker.clearData function, with an invalid NaN data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cclearData_inValidNaN, () => {
        // Arrange
        let dataStorageContextName = NaN;

        // Act
        dataBroker.storeData(dataStorageContextName, obj_con.JsonObjectArrayOfStrings_01);
        dataBroker.clearData(dataStorageContextName);

        // Assert
        expect(D[sys.cDataStorage][dataStorageContextName]).toEqual({});
    });

    /**
    * @function clearData_inValidNumber
    * @description Tests the brokers.dataBroker.clearData function, with an invalid number data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cclearData_inValidNumber, () => {
        // Arrange
        let dataStorageContextName = 123;

        // Act
        dataBroker.storeData(dataStorageContextName, obj_con.JsonObjectArrayOfStrings_01);
        dataBroker.clearData(dataStorageContextName);

        // Assert
        expect(D[sys.cDataStorage][dataStorageContextName]).toEqual({});
    });

    /**
    * @function clearData_inValidBoolean
    * @description Tests the brokers.dataBroker.clearData function, with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cclearData_inValidBoolean, () => {
        // Arrange
        let dataStorageContextName = false;

        // Act
        dataBroker.storeData(dataStorageContextName, obj_con.JsonObjectArrayOfStrings_01);
        dataBroker.clearData(dataStorageContextName);

        // Assert
        expect(D[sys.cDataStorage][dataStorageContextName]).toEqual({});
    });
});

/**
 * @function initializeConstantsValidationData
 * @description Tests the positive and negative test cases of the initializeConstantsValidationData function.
 * @author Json Howard
 * @date 2023/04/17
 * @note initializeConstantsValidationData function doesn't have any inputs, but inputData is defined in this unitTest function.
 */
describe(tst_con.cinitializeConstantsValidationData, () => {
    /**
    * @function initializeConstantsValidationData_validData
    * @description Tests the brokers.dataBroker.initializeConstantsValidationData function, with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cinitializeConstantsValidationData_validData, () => {
        // Act
        dataBroker.initializeConstantsValidationData();

        // Assert
        expect(D[sys.cConstantsValidationData]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsShortNames]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsFileNames]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsPrefix]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsFilePaths]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages]).toBeTruthy();
    });

    /**
    * @function initializeConstantsValidationData_inValidString
    * @description Tests the brokers.dataBroker.initializeConstantsValidationData function, with an invalid string data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cinitializeConstantsValidationData_inValidString, () => {
        // Arrange
        let input = wrd.cHello + wrd.cWorld;

        // Act
        dataBroker.initializeConstantsValidationData(input);

        // Assert
        expect(D[sys.cConstantsValidationData]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsShortNames]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsFileNames]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsPrefix]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsFilePaths]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages]).toBeTruthy();
    });

    /**
    * @function initializeConstantsValidationData_inValidNumber
    * @description Tests the brokers.dataBroker.initializeConstantsValidationData function, with an invalid number data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cinitializeConstantsValidationData_inValidNumber, () => {
        // Arrange
        let input = 123;

        // Act
        dataBroker.initializeConstantsValidationData(input);

        // Assert
        expect(D[sys.cConstantsValidationData]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsShortNames]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsFileNames]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsPrefix]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsFilePaths]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages]).toBeTruthy();
    });

    /**
    * @function initializeConstantsValidationData_inValidBoolean
    * @description Tests the brokers.dataBroker.initializeConstantsValidationData function, with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cinitializeConstantsValidationData_inValidBoolean, () => {
        // Arrange
        let input = false;

        // Act
        dataBroker.initializeConstantsValidationData(input);

        // Assert
        expect(D[sys.cConstantsValidationData]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsShortNames]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsFileNames]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsPrefix]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsFilePaths]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages]).toBeTruthy();
        expect(D[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages]).toBeTruthy();
    });
});

/**
 * @function addConstantsValidationData
 * @description Tests the positive and negative test cases of the addConstantsValidationData function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.caddConstantsValidationData, () => {
    /**
    * @function addConstantsValidationData_validData
    * @description Tests the brokers.dataBroker.addConstantsValidationData function, with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddConstantsValidationData_validData, () => {
        // Arrange
        let constantLibraryData = obj_con.jsonObjectOfStrings_03();

        // Act
        dataBroker.addConstantsValidationData(constantLibraryData);

        // Assert
        expect(D[sys.cConstantsValidationData]).toBeTruthy();
    });

    /**
    * @function addConstantsValidationData_inValidString
    * @description Tests the brokers.dataBroker.addConstantsValidationData function, with an invalid string data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddConstantsValidationData_inValidString, () => {
        // Arrange
        let constantLibraryData = wrd.cHello + wrd.cWorld;

        // Act
        dataBroker.addConstantsValidationData(constantLibraryData);

        // Assert
        expect(D[sys.cConstantsValidationData]).toBeTruthy();
    });

    /**
    * @function addConstantsValidationData_inValidNumber
    * @description Tests the brokers.dataBroker.addConstantsValidationData function, with an invalid number data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddConstantsValidationData_inValidNumber, () => {
        // Arrange
        let constantLibraryData = 123;

        // Act
        dataBroker.addConstantsValidationData(constantLibraryData);

        // Assert
        expect(D[sys.cConstantsValidationData]).toBeTruthy();
    });

    /**
    * @function addConstantsValidationData_inValidBoolean
    * @description Tests the brokers.dataBroker.addConstantsValidationData function, with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddConstantsValidationData_inValidBoolean, () => {
        // Arrange
        let constantLibraryData = false;

        // Act
        dataBroker.addConstantsValidationData(constantLibraryData);

        // Assert
        expect(D[sys.cConstantsValidationData]).toBeTruthy();
    });
});

/**
 * @function addDeeplyNestedConstantsValidationData
 * @description Tests the positive and negative test cases of the addDeeplyNestedConstantsValidationData function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.caddDeeplyNestedConstantsValidationData, () => {
    /**
    * @function addDeeplyNestedConstantsValidationData_validData
    * @description Tests the brokers.dataBroker.addDeeplyNestedConstantsValidationData function, with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddDeeplyNestedConstantsValidationData_validData, () => {
        // Arrange
        let contextName = wrd.cConstant;
        let deeplyNestedData = obj_con.JsonObjectOfStrings_02;

        // Act
        D[sys.cConstantsValidationData][contextName] = {};
        dataBroker.addDeeplyNestedConstantsValidationData(contextName, deeplyNestedData);

        // Assert
        expect(D[sys.cConstantsValidationData][contextName]).toBeTruthy();
    });
    
    /**
    * @function addDeeplyNestedConstantsValidationData_inValidDeeplyNestedDataString
    * @description Tests the brokers.dataBroker.addDeeplyNestedConstantsValidationData function, with an invalid string nested data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddDeeplyNestedConstantsValidationData_inValidDeeplyNestedDataString, () => {
        // Arrange
        let contextName = wrd.cConstant;
        let deeplyNestedData = wrd.cWorld;

        // Act
        D[sys.cConstantsValidationData][contextName] = {};
        dataBroker.addDeeplyNestedConstantsValidationData(contextName, deeplyNestedData);

        // Assert
        expect(D[sys.cConstantsValidationData][contextName]).toBeTruthy();
    });
    
    /**
    * @function addDeeplyNestedConstantsValidationData_inValidDeeplyNestedDataNumber
    * @description Tests the brokers.dataBroker.addDeeplyNestedConstantsValidationData function, with an invalid number nested data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddDeeplyNestedConstantsValidationData_inValidDeeplyNestedDataNumber, () => {
        // Arrange
        let contextName = wrd.cConstant;
        let deeplyNestedData = 123;

        // Act
        D[sys.cConstantsValidationData][contextName] = {};
        dataBroker.addDeeplyNestedConstantsValidationData(contextName, deeplyNestedData);

        // Assert
        expect(D[sys.cConstantsValidationData][contextName]).toBeTruthy();
    });
    
    /**
    * @function addDeeplyNestedConstantsValidationData_inValidDeeplyNestedDataBoolean
    * @description Tests the brokers.dataBroker.addDeeplyNestedConstantsValidationData function, with an invalid boolean nested data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddDeeplyNestedConstantsValidationData_inValidDeeplyNestedDataBoolean, () => {
        // Arrange
        let contextName = wrd.cConstant;
        let deeplyNestedData = false;

        // Act
        D[sys.cConstantsValidationData][contextName] = {};
        dataBroker.addDeeplyNestedConstantsValidationData(contextName, deeplyNestedData);

        // Assert
        expect(D[sys.cConstantsValidationData][contextName]).toBeTruthy();
    });
    
    /**
    * @function addDeeplyNestedConstantsValidationData_inValidContextNameUndefined
    * @description Tests the brokers.dataBroker.addDeeplyNestedConstantsValidationData function, with an invalid undefined context name.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddDeeplyNestedConstantsValidationData_inValidContextNameUndefined, () => {
        // Arrange
        let contextName = undefined;
        let deeplyNestedData = obj_con.JsonObjectOfStrings_02;

        // Act
        D[sys.cConstantsValidationData][contextName] = {};
        dataBroker.addDeeplyNestedConstantsValidationData(contextName, deeplyNestedData);

        // Assert
        expect(D[sys.cConstantsValidationData][contextName]).toBeTruthy();
    });
    
    /**
    * @function addDeeplyNestedConstantsValidationData_inValidContextNameNaN
    * @description Tests the brokers.dataBroker.addDeeplyNestedConstantsValidationData function, with an invalid NaN context name.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddDeeplyNestedConstantsValidationData_inValidContextNameNaN, () => {
        // Arrange
        let contextName = NaN;
        let deeplyNestedData = obj_con.JsonObjectOfStrings_02;

        // Act
        D[sys.cConstantsValidationData][contextName] = {};
        dataBroker.addDeeplyNestedConstantsValidationData(contextName, deeplyNestedData);

        // Assert
        expect(D[sys.cConstantsValidationData][contextName]).toBeTruthy();
    });
    
    /**
    * @function addDeeplyNestedConstantsValidationData_inValidContextNameNumber
    * @description Tests the brokers.dataBroker.addDeeplyNestedConstantsValidationData function, with an invalid number context name.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddDeeplyNestedConstantsValidationData_inValidContextNameNumber, () => {
        // Arrange
        let contextName = 123;
        let deeplyNestedData = obj_con.JsonObjectOfStrings_02;

        // Act
        D[sys.cConstantsValidationData][contextName] = {};
        dataBroker.addDeeplyNestedConstantsValidationData(contextName, deeplyNestedData);

        // Assert
        expect(D[sys.cConstantsValidationData][contextName]).toBeTruthy();
    });
    
    /**
    * @function addDeeplyNestedConstantsValidationData_inValidContextNameBoolean
    * @description Tests the brokers.dataBroker.addDeeplyNestedConstantsValidationData function, with an invalid boolean context name.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddDeeplyNestedConstantsValidationData_inValidContextNameBoolean, () => {
        // Arrange
        let contextName = false;
        let deeplyNestedData = obj_con.JsonObjectOfStrings_02;

        // Act
        D[sys.cConstantsValidationData][contextName] = {};
        dataBroker.addDeeplyNestedConstantsValidationData(contextName, deeplyNestedData);

        // Assert
        expect(D[sys.cConstantsValidationData][contextName]).toBeTruthy();
    });
});

/**
 * @note getDataCategoryFromContextName function is not defined.
 * @note getDataCategoryDetailNameFromContextName function is not defined.
 * @note extractDataFromPapaParseObject function is not defined.
 * @note determineMergeTarget function is not defined.
 * @note mergeData function is not defined.
 * @note getDataElement function is not defined.
 * @note getDataElementCount function is not defined.
 */