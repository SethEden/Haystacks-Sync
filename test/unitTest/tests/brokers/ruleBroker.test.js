'use strict';
/* eslint-disable no-undef */
/**
 * @file ruleBroker.test.js
 * @module ruleBroker.test
 * @description Unit tests for the ruleBroker.js
 * @requires module:ruleBroker
 * @requires module:data
 * @requires module:testData/ruleBroker
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/04/17
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import ruleBroker from '../../../../src/brokers/ruleBroker.js';
import D from '../../../../src/structures/data.js';
import * as obj_con from '../../testData/brokers/ruleBroker.js';
import * as tst_con from '../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect } from '@jest/globals';

const { sys, wrd, biz } = hayConst;

/**
 * @function bootStrapBusinessRules
 * @description Tests the positive and negative test cases of the bootStrapBusinessRules function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.cbootStrapBusinessRules, () => {
    /**
    * @function bootStrapBusinessRules_validData
    * @description Tests the brokers.ruleBroker function bootStrapBusinessRules with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cbootStrapBusinessRules_validData, () => {
        // Act
        ruleBroker.bootStrapBusinessRules();

        // Assert
        expect(D[sys.cbusinessRules]).toBeTruthy();
    });

    /**
    * @function bootStrapBusinessRules_inValidString
    * @description Tests the brokers.ruleBroker function bootStrapBusinessRules with an invalid string data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cbootStrapBusinessRules_inValidString, () => {
        // Arrange
        let input = wrd.cWorld;

        // Act
        ruleBroker.bootStrapBusinessRules(input);

        // Assert
        expect(D[sys.cbusinessRules]).toBeTruthy();
    });

    /**
    * @function bootStrapBusinessRules_inValidNumber
    * @description Tests the brokers.ruleBroker function bootStrapBusinessRules with an invalid number data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cbootStrapBusinessRules_inValidNumber, () => {
        // Arrange
        let input = 123;

        // Act
        ruleBroker.bootStrapBusinessRules(input);

        // Assert
        expect(D[sys.cbusinessRules]).toBeTruthy();
    });

    /**
    * @function bootStrapBusinessRules_inValidBoolean
    * @description Tests the brokers.ruleBroker function bootStrapBusinessRules with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cbootStrapBusinessRules_inValidBoolean, () => {
        // Arrange
        let input = false;

        // Act
        ruleBroker.bootStrapBusinessRules(input);

        // Assert
        expect(D[sys.cbusinessRules]).toBeTruthy();
    });
});

/**
 * @function addClientRules
 * @description Tests the positive and negative test cases of the addClientRules function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.caddClientRules, () => {
    /**
    * @function addClientRules_validData
    * @description Tests the brokers.ruleBroker function addClientRules with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddClientRules_validData, () => {
        // Arrange
        let clientRules = obj_con.JsonObjectArrayOfStrings_01;

        // Act
        ruleBroker.addClientRules(clientRules);

        // Assert
        expect(D[sys.cbusinessRules]).toBeTruthy();
    });
    
    /**
    * @function addClientRules_inValidString
    * @description Tests the brokers.ruleBroker function addClientRules with an invalid string data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddClientRules_inValidString, () => {
        // Arrange
        let clientRules = wrd.cHello + wrd.cWorld;

        // Act
        ruleBroker.addClientRules(clientRules);

        // Assert
        expect(D[sys.cbusinessRules]).toBeTruthy();
    });
    
    /**
    * @function addClientRules_inValidNumber
    * @description Tests the brokers.ruleBroker function addClientRules with an invalid number data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddClientRules_inValidNumber, () => {
        // Arrange
        let clientRules = 123;

        // Act
        ruleBroker.addClientRules(clientRules);

        // Assert
        expect(D[sys.cbusinessRules]).toBeTruthy();
    });
    
    /**
    * @function addClientRules_inValidBoolean
    * @description Tests the brokers.ruleBroker function addClientRules with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddClientRules_inValidBoolean, () => {
        // Arrange
        let clientRules = false;

        // Act
        ruleBroker.addClientRules(clientRules);

        // Assert
        expect(D[sys.cbusinessRules]).toBeTruthy();
    });
});

/**
 * @function processRules
 * @description Tests the positive and negative test cases of the processRules function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.cprocessRules, () => {
    /**
    * @function processRules_validData
    * @description Tests the brokers.ruleBroker function processRules with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    * @NOTE To be tested with integration testing. (commented out)
    */
    test(tst_con.cprocessRules_validData, () => {
        // Arrange
        let inputs = [wrd.cHello, wrd.cWorld];
        let rulesToExecute = [biz.cconvertStringToLowerCase];

        // Act
        let returnData = ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toBe(wrd.chello);
    });
    
    /**
    * @function processRules_inValidInputsUndefined
    * @description Tests the brokers.ruleBroker function processRules with an invalid undefined data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cprocessRules_inValidInputsUndefined, () => {
        // Arrange
        let inputs = undefined;
        let rulesToExecute = biz.cconvertStringToLowerCase;

        // Act
        let returnData = ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
    * @function processRules_inValidInputsNaN
    * @description Tests the brokers.ruleBroker function processRules with an invalid NaN data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cprocessRules_inValidInputsNaN, () => {
        // Arrange
        let inputs = NaN;
        let rulesToExecute = biz.cconvertStringToLowerCase;

        // Act
        let returnData = ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
    * @function processRules_inValidRulesToExecuteUndefined
    * @description Tests the brokers.ruleBroker function processRules with an invalid undefined rulesToExecute.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cprocessRules_inValidRulesToExecuteUndefined, () => {
        // Arrange
        let inputs = wrd.cHello + wrd.cWorld;
        let rulesToExecute = undefined;

        // Act
        let returnData = ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toBe(undefined);
    });
    
    /**
    * @function processRules_inValidRulesToExecuteNaN
    * @description Tests the brokers.ruleBroker function processRules with an invalid NaN rulesToExecute.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cprocessRules_inValidRulesToExecuteNaN, () => {
        // Arrange
        let inputs = wrd.cHello + wrd.cWorld;
        let rulesToExecute = NaN;

        // Act
        let returnData = ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toBe(undefined);
    });
    
    /**
    * @function processRules_inValidInputsInteger
    * @description Tests the brokers.ruleBroker function processRules with an invalid integer data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cprocessRules_inValidInputsInteger, () => {
        // Arrange
        let inputs = 1234;
        let rulesToExecute = [1,2,3,4,5];

        // Act
        let returnData = ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
    * @function processRules_inValidInputsBoolean
    * @description Tests the brokers.ruleBroker function processRules with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cprocessRules_inValidInputsBoolean, () => {
        // Arrange
        let inputs = false;
        let rulesToExecute = [1,2,3,4,5];

        // Act
        let returnData = ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
    * @function processRules_inValidRulesToExecuteInteger
    * @description Tests the brokers.ruleBroker function processRules with an invalid integer rulesToExecute.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cprocessRules_inValidRulesToExecuteInteger, () => {
        // Arrange
        let inputs = [1,2,3,4,5];
        let rulesToExecute = 123;

        // Act
        let returnData = ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toBe(undefined);
    });
    
    /**
    * @function processRules_inValidRulesToExecuteBoolean
    * @description Tests the brokers.ruleBroker function processRules with an invalid boolean rulesToExecute.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cprocessRules_inValidRulesToExecuteBoolean, () => {
        // Arrange
        let inputs = [1,2,3,4,5];
        let rulesToExecute = false;

        // Act
        let returnData = ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toBe(undefined);
    });
});
