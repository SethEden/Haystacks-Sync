'use strict';
/* eslint-disable no-undef */
/**
 * @file integrationTests.test.js
 * @module constant.test
 * @description Unit tests for the integrationTests.js
 * @requires module:rulesLibrary
 * @requires module:constant
 * @requires module:commandsLibrary
 * @requires module:configurator
 * @requires module:data
 * @requires module:testData/dataBroker
 * @requires module:testData/stringParsingUtilities
 * @requires module:testData/integrationTests
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/08/22
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import integrationTests from '../../../../../src/commandsBlob/commands/integrationTests.js';
import D from '../../../../../src/structures/data.js';
import * as int_con from '../../../testData/commandsBlob/commands/integrationTests.js';
import * as tst_con from '../../constants/test.constants.js';
import { basePath } from '../../utilities/utilities.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { sys, wrd } = hayConst;

/**
 * @function validateConstants
 * @description Tests the positive and negative test cases of the validateConstants
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.cvalidateConstants, () => {
    /**
     * @function validateConstants_validDataString
     * @description Tests the commandsBlob.commands.integrationTests function validateConstants with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cvalidateConstants_validDataString, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[sys.cConstantsValidationData][sys.cConstantsFilePaths] = basePath();
        D[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages] = "Test Constants Phase 1 Validation";
        D[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages] = "Test Constants Phase 2 Validation";

        // Act
        let returnData = integrationTests.validateConstants(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function validateConstants_inValidDataString
     * @description Tests the commandsBlob.commands.integrationTests function validateConstants with a invalid input string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cvalidateConstants_inValidDataString, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[sys.cConstantsValidationData][sys.cConstantsFilePaths] = wrd.cHello;
        D[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages] = "Test Constants Phase 1 Validation";
        D[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages] = "Test Constants Phase 2 Validation";

        // Act
        let returnData = integrationTests.validateConstants(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function validateConstants_inValidDataUndefined1
     * @description Tests the commandsBlob.commands.integrationTests function validateConstants with a invalid input undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cvalidateConstants_inValidDataUndefined1, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[sys.cConstantsValidationData][sys.cConstantsFilePaths] = undefined;
        D[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages] = "Test Constants Phase 1 Validation";
        D[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages] = "Test Constants Phase 2 Validation";

        // Act
        let returnData = integrationTests.validateConstants(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function validateConstants_inValidDataUndefined2
     * @description Tests the commandsBlob.commands.integrationTests function validateConstants with a invalid input undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cvalidateConstants_inValidDataUndefined2, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[sys.cConstantsValidationData][sys.cConstantsFilePaths] = basePath();
        D[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages] = undefined;
        D[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages] = "Test Constants Phase 2 Validation";

        // Act
        let returnData = integrationTests.validateConstants(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function validateConstants_inValidDataUndefined3
     * @description Tests the commandsBlob.commands.integrationTests function validateConstants with a invalid input undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cvalidateConstants_inValidDataUndefined3, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[sys.cConstantsValidationData][sys.cConstantsFilePaths] = basePath();
        D[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages] = "Test Constants Phase 1 Validation";
        D[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages] = undefined;

        // Act
        let returnData = integrationTests.validateConstants(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function validateConstants_inValidDataNaN1
     * @description Tests the commandsBlob.commands.integrationTests function validateConstants with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cvalidateConstants_inValidDataNaN1, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[sys.cConstantsValidationData][sys.cConstantsFilePaths] = NaN;
        D[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages] = "Test Constants Phase 1 Validation";
        D[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages] = "Test Constants Phase 2 Validation";

        // Act
        let returnData = integrationTests.validateConstants(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function validateConstants_inValidDataNaN2
     * @description Tests the commandsBlob.commands.integrationTests function validateConstants with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cvalidateConstants_inValidDataNaN2, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[sys.cConstantsValidationData][sys.cConstantsFilePaths] = basePath();
        D[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages] = NaN;
        D[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages] = "Test Constants Phase 2 Validation";

        // Act
        let returnData = integrationTests.validateConstants(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function validateConstants_inValidDataNaN3
     * @description Tests the commandsBlob.commands.integrationTests function validateConstants with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cvalidateConstants_inValidDataNaN3, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[sys.cConstantsValidationData][sys.cConstantsFilePaths] = basePath();
        D[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages] = "Test Constants Phase 1 Validation";
        D[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages] = NaN;

        // Act
        let returnData = integrationTests.validateConstants(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function validateCommandAliases
 * @description Tests the positive and negative test cases of the validateCommandAliases
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.cvalidateCommandAliases, () => {
    /**
     * @function validateCommandAliases_validDataString
     * @description Tests the commandsBlob.commands.integrationTests function validateCommandAliases with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cvalidateCommandAliases_validDataString, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[sys.cCommandsAliases][wrd.cFramework][wrd.cTest] = int_con.validValidateCommandAliasesArray;

        // Act
        let returnData = integrationTests.validateCommandAliases(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function validateCommandAliases_inValidDataObjectDuplicate
     * @description Tests the commandsBlob.commands.integrationTests function validateCommandAliases with a invalid input duplicated.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cvalidateCommandAliases_inValidDataObjectDuplicate, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[sys.cCommandsAliases][wrd.cFramework][wrd.cTest] = int_con.duplicatedValidateCommandAliasesArray;
        
        // Act
        let returnData = integrationTests.validateCommandAliases(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function validateCommandAliases_inValidDataUndefined
     * @description Tests the commandsBlob.commands.integrationTests function validateCommandAliases with a invalid input undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cvalidateCommandAliases_inValidDataUndefined, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[sys.cCommandsAliases][wrd.cFramework][wrd.cTest] = undefined;
        
        // Act
        let returnData = integrationTests.validateCommandAliases(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function validateCommandAliases_inValidDataNaN
     * @description Tests the commandsBlob.commands.integrationTests function validateCommandAliases with a valid input NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cvalidateCommandAliases_inValidDataNaN, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[sys.cCommandsAliases][wrd.cFramework][wrd.cTest] = NaN;
        
        // Act
        let returnData = integrationTests.validateCommandAliases(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function validateWorkflows
 * @description Tests the positive and negative test cases of the validateWorkflows
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.cvalidateWorkflows, () => {
    /**
     * @function validateWorkflows_validDataString
     * @description Tests the commandsBlob.commands.integrationTests function validateWorkflows with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cvalidateWorkflows_validDataString, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[sys.cCommandsAliases][wrd.cFramework][wrd.cTest] = int_con.validValidateWorkflowsArray;

        // Act
        let returnData = integrationTests.validateWorkflows(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function validateWorkflows_inValidDataObjectDuplicate
     * @description Tests the commandsBlob.commands.integrationTests function validateWorkflows with a invalid input duplicated.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cvalidateWorkflows_inValidDataObjectDuplicate, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[sys.cCommandsAliases][wrd.cFramework][wrd.cTest] = int_con.duplicatedValidateWorkflowsArray;

        // Act
        let returnData = integrationTests.validateWorkflows(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function validateWorkflows_inValidDataUndefined
     * @description Tests the commandsBlob.commands.integrationTests function validateWorkflows with a invalid input undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cvalidateWorkflows_inValidDataUndefined, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[sys.cCommandsAliases][wrd.cFramework][wrd.cTest] = undefined;

        // Act
        let returnData = integrationTests.validateWorkflows(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function validateWorkflows_inValidDataNaN
     * @description Tests the commandsBlob.commands.integrationTests function validateWorkflows with a invalid input NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cvalidateWorkflows_inValidDataNaN, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[sys.cCommandsAliases][wrd.cFramework][wrd.cTest] = NaN;

        // Act
        let returnData = integrationTests.validateWorkflows(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});
