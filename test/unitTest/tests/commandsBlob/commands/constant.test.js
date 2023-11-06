'use strict';
/* eslint-disable no-undef */
/**
 * @file constant.test.js
 * @module constant.test
 * @description Unit tests for the constant.js
 * @requires module:rulesLibrary
 * @requires module:constant
 * @requires module:commandsLibrary
 * @requires module:configurator
 * @requires module:data
 * @requires module:testData/dataBroker
 * @requires module:testData/stringParsingUtilities
 * @requires module:testData/constant
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/08/18
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import constant from '../../../../../src/commandsBlob/commands/constant';
import * as tst_con from '../../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { wrd, num } = hayConst;

/**
 * @function constantGenerator
 * @description Tests the positive and negative test cases of the constantGenerator
 * @author Json Howard
 * @date 2023/08/18
*/
describe(tst_con.cconstantGenerator, () => {
    /**
     * @function constantsGenerator_validDataString
     * @description Tests the commandsBlob.commands.constant function constantGenerator with a valid input.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsGenerator_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = constant.constantsGenerator(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsGenerator_inValidDataInputDataString
     * @description Tests the commandsBlob.commands.constant function constantGenerator with a invalid input string.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsGenerator_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = constant.constantsGenerator(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsGenerator_inValidDataInputMetaDataString
     * @description Tests the commandsBlob.commands.constant function constantGenerator with a invalid inputMetaData string.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsGenerator_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = wrd.cWorld;

        // Act
        let returnData = constant.constantsGenerator(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsGenerator_inValidInputDataInteger
     * @description Tests the commandsBlob.commands.constant function constantGenerator with a invalid input integer.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsGenerator_inValidInputDataInteger, () => {
        // Arrange
        let inputData = num.c1;
        let inputMetaData = "";

        // Act
        let returnData = constant.constantsGenerator(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsGenerator_inValidInputDataBoolean
     * @description Tests the commandsBlob.commands.constant function constantGenerator with a invalid input boolean.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsGenerator_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "";

        // Act
        let returnData = constant.constantsGenerator(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsGenerator_inValidInputMetaDataInteger
     * @description Tests the commandsBlob.commands.constant function constantGenerator with a invalid inputMetaData integer.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsGenerator_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = num.c123;

        // Act
        let returnData = constant.constantsGenerator(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsGenerator_inValidInputMetaDataBoolean
     * @description Tests the commandsBlob.commands.constant function constantGenerator with a invalid inputMetaData boolean.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsGenerator_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = false;

        // Act
        let returnData = constant.constantsGenerator(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsGenerator_inValidInputDataUndefined
     * @description Tests the commandsBlob.commands.constant function constantGenerator with a invalid input undefined.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsGenerator_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = constant.constantsGenerator(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsGenerator_inValidInputDataNaN
     * @description Tests the commandsBlob.commands.constant function constantGenerator with a invalid input NaN.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsGenerator_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = constant.constantsGenerator(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsGenerator_inValidInputMetaDataUndefined
     * @description Tests the commandsBlob.commands.constant function constantGenerator with a invalid inputMetaData undefined.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsGenerator_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = undefined;

        // Act
        let returnData = constant.constantsGenerator(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsGenerator_inValidInputMetaDataNaN
     * @description Tests the commandsBlob.commands.constant function constantGenerator with a invalid inputMetaData NaN.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsGenerator_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = NaN;

        // Act
        let returnData = constant.constantsGenerator(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function constantsGeneratorList
 * @description Tests the positive and negative test cases of the constantsGeneratorList
 * @author Json Howard
 * @date 2023/08/18
*/
describe(tst_con.cconstantsGeneratorList, () => {
    /**
     * @function constantsGeneratorList_validDataString
     * @description Tests the commandsBlob.commands.constant function constantsGeneratorList with a valid input.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsGeneratorList_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = constant.constantsGeneratorList(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsGeneratorList_inValidDataInputDataString
     * @description Tests the commandsBlob.commands.constant function constantsGeneratorList with a invalid input string.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsGeneratorList_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = constant.constantsGeneratorList(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsGeneratorList_inValidDataInputMetaDataString
     * @description Tests the commandsBlob.commands.constant function constantsGeneratorList with a invalid inputMetaData string.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsGeneratorList_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = wrd.cWorld;

        // Act
        let returnData = constant.constantsGeneratorList(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsGeneratorList_inValidInputDataInteger
     * @description Tests the commandsBlob.commands.constant function constantsGeneratorList with a invalid input integer.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsGeneratorList_inValidInputDataInteger, () => {
        // Arrange
        let inputData = num.c123;
        let inputMetaData = "";

        // Act
        let returnData = constant.constantsGeneratorList(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsGeneratorList_inValidInputDataBoolean
     * @description Tests the commandsBlob.commands.constant function constantsGeneratorList with a invalid input boolean.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsGeneratorList_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "";

        // Act
        let returnData = constant.constantsGeneratorList(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsGeneratorList_inValidInputMetaDataInteger
     * @description Tests the commandsBlob.commands.constant function constantsGeneratorList with a invalid inputMetaData integer.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsGeneratorList_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = num.c123;

        // Act
        let returnData = constant.constantsGeneratorList(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsGeneratorList_inValidInputMetaDataBoolean
     * @description Tests the commandsBlob.commands.constant function constantsGeneratorList with a invalid inputMetaData boolean.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsGeneratorList_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = false;

        // Act
        let returnData = constant.constantsGeneratorList(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsGeneratorList_inValidInputDataUndefined
     * @description Tests the commandsBlob.commands.constant function constantsGeneratorList with a invalid input undefined.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsGeneratorList_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = constant.constantsGeneratorList(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsGeneratorList_inValidInputDataNaN
     * @description Tests the commandsBlob.commands.constant function constantsGeneratorList with a invalid input NaN.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsGeneratorList_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = constant.constantsGeneratorList(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsGeneratorList_inValidInputMetaDataUndefined
     * @description Tests the commandsBlob.commands.constant function constantsGeneratorList with a invalid inputMetaData undefined.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsGeneratorList_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = undefined;

        // Act
        let returnData = constant.constantsGeneratorList(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsGeneratorList_inValidInputMetaDataNaN
     * @description Tests the commandsBlob.commands.constant function constantsGeneratorList with a invalid inputMetaData NaN.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsGeneratorList_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = NaN;

        // Act
        let returnData = constant.constantsGeneratorList(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function constantsPatternRecognizer
 * @description Tests the positive and negative test cases of the constantsPatternRecognizer
 * @author Json Howard
 * @date 2023/08/18
*/
describe(tst_con.cconstantsPatternRecognizer, () => {
    /**
     * @function constantsPatternRecognizer_validDataString
     * @description Tests the commandsBlob.commands.constant function constantsPatternRecognizer with a valid input.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsPatternRecognizer_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = constant.constantsPatternRecognizer(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsPatternRecognizer_inValidDataInputDataString
     * @description Tests the commandsBlob.commands.constant function constantsPatternRecognizer with a invalid input string.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsPatternRecognizer_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = constant.constantsPatternRecognizer(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsPatternRecognizer_inValidDataInputMetaDataString
     * @description Tests the commandsBlob.commands.constant function constantsPatternRecognizer with a invalid inputMetaData string.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsPatternRecognizer_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = wrd.cWorld;

        // Act
        let returnData = constant.constantsPatternRecognizer(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsPatternRecognizer_inValidInputDataInteger
     * @description Tests the commandsBlob.commands.constant function constantsPatternRecognizer with a invalid input integer.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsPatternRecognizer_inValidInputDataInteger, () => {
        // Arrange
        let inputData = num.c123;
        let inputMetaData = "";

        // Act
        let returnData = constant.constantsPatternRecognizer(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsPatternRecognizer_inValidInputDataBoolean
     * @description Tests the commandsBlob.commands.constant function constantsPatternRecognizer with a invalid input boolean.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsPatternRecognizer_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "";

        // Act
        let returnData = constant.constantsPatternRecognizer(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsPatternRecognizer_inValidInputMetaDataInteger
     * @description Tests the commandsBlob.commands.constant function constantsPatternRecognizer with a invalid inputMetaData integer.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsPatternRecognizer_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = num.c123;

        // Act
        let returnData = constant.constantsPatternRecognizer(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsPatternRecognizer_inValidInputMetaDataBoolean
     * @description Tests the commandsBlob.commands.constant function constantsPatternRecognizer with a invalid inputMetaData boolean.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsPatternRecognizer_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = false;

        // Act
        let returnData = constant.constantsPatternRecognizer(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsPatternRecognizer_inValidInputDataUndefined
     * @description Tests the commandsBlob.commands.constant function constantsPatternRecognizer with a invalid input undefined.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsPatternRecognizer_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = constant.constantsPatternRecognizer(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsPatternRecognizer_inValidInputDataNaN
     * @description Tests the commandsBlob.commands.constant function constantsPatternRecognizer with a invalid input NaN.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsPatternRecognizer_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = constant.constantsPatternRecognizer(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsPatternRecognizer_inValidInputMetaDataUndefined
     * @description Tests the commandsBlob.commands.constant function constantsPatternRecognizer with a invalid inputMetaData undefined.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsPatternRecognizer_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = constant.constantsPatternRecognizer(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsPatternRecognizer_inValidInputMetaDataNaN
     * @description Tests the commandsBlob.commands.constant function constantsPatternRecognizer with a invalid inputMetaData NaN.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsPatternRecognizer_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = constant.constantsPatternRecognizer(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function evaluateConstant
 * @description Tests the positive and negative test cases of the evaluateConstant
 * @author Json Howard
 * @date 2023/08/18
*/
describe(tst_con.cevaluateConstant, () => {
    /**
     * @function evaluateConstant_validDataString
     * @description Tests the commandsBlob.commands.constant function evaluateConstant with a valid input.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cevaluateConstant_validDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = "";

        // Act
        let returnData = constant.evaluateConstant(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function evaluateConstant_inValidDataInputDataString
     * @description Tests the commandsBlob.commands.constant function evaluateConstant with a invalid input string.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cevaluateConstant_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = constant.evaluateConstant(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function evaluateConstant_inValidDataInputMetaDataString
     * @description Tests the commandsBlob.commands.constant function evaluateConstant with a invalid inputMetaData string.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cevaluateConstant_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = wrd.cWorld;

        // Act
        let returnData = constant.evaluateConstant(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function evaluateConstant_inValidInputDataInteger
     * @description Tests the commandsBlob.commands.constant function evaluateConstant with a invalid input integer.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cevaluateConstant_inValidInputDataInteger, () => {
        // Arrange
        let inputData = num.c123;
        let inputMetaData = "";

        // Act
        let returnData = constant.evaluateConstant(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function evaluateConstant_inValidInputDataBoolean
     * @description Tests the commandsBlob.commands.constant function evaluateConstant with a invalid input boolean.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cevaluateConstant_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "";

        // Act
        let returnData = constant.evaluateConstant(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function evaluateConstant_inValidInputMetaDataInteger
     * @description Tests the commandsBlob.commands.constant function evaluateConstant with a invalid inputMetaData integer.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cevaluateConstant_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = num.c123;

        // Act
        let returnData = constant.evaluateConstant(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function evaluateConstant_inValidInputMetaDataBoolean
     * @description Tests the commandsBlob.commands.constant function evaluateConstant with a invalid inputMetaData boolean.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cevaluateConstant_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = false;

        // Act
        let returnData = constant.evaluateConstant(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function evaluateConstant_inValidInputDataUndefined
     * @description Tests the commandsBlob.commands.constant function evaluateConstant with a invalid input undefined.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cevaluateConstant_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = constant.evaluateConstant(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function evaluateConstant_inValidInputDataNaN
     * @description Tests the commandsBlob.commands.constant function evaluateConstant with a invalid input NaN.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cevaluateConstant_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = constant.evaluateConstant(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function evaluateConstant_inValidInputMetaDataUndefined
     * @description Tests the commandsBlob.commands.constant function evaluateConstant with a invalid inputMetaData undefined.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cevaluateConstant_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = undefined;

        // Act
        let returnData = constant.evaluateConstant(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function evaluateConstant_inValidInputMetaDataNaN
     * @description Tests the commandsBlob.commands.constant function evaluateConstant with a invalid inputMetaData NaN.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cevaluateConstant_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = NaN;

        // Act
        let returnData = constant.evaluateConstant(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});
