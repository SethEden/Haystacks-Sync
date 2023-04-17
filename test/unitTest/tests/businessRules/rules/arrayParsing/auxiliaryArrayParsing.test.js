'use strict';
import { crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter } from "@haystacks/constants/src/constants/business.constants.js";
/**
 * @file auxiliaryArrayParsing.test.js
 * @module auxiliaryArrayParsing.test
 * @description Unit tests for the auxiliaryArrayParsing.js
 * @requires module:auxiliaryArrayParsing
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/04/06
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import auxiliaryArrayParsing from "../../../../../../src/businessRules/rules/arrayParsing/auxiliaryArrayParsing.js";
import * as tst_con from '../../../constants/test.constants.js';
import * as obj_con from '../../../../testData/businessRules/rules/arrayParsing/auxiliaryArrayParsing.js';

// External imports
import hayConst from '@haystacks/constants';
import { beforeAll, beforeEach, expect, jest } from '@jest/globals';

const {bas, msg, sys, wrd, num} = hayConst;
// const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.arrayParsing.auxiliaryArrayParsing.
// const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.carray + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function parseColorRangeInputs
 * @description Tests the positive and negative test cases of the parseColorRangeInputs function.
 * @author Json Howard
 * @date 2023/04/06
 */
describe(tst_con.cparseColorRangeInputs, () => {
  /**
  * @function parseColorRangeInputs_validDataString
  * @description Tests the business rules function parseColorRangeInputs with a valid string input.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cparseColorRangeInputs_validDataString, () => {
    // Arrange
    let returnData = [];

    // Act
    returnData = auxiliaryArrayParsing.parseColorRangeInputs(num.c1, num.c10);

    // Assert
    expect(returnData[0]).toBe(1);
    expect(returnData[1]).toBe(10);
  });

  /**
  * @function parseColorRangeInputs_validDataMixedUse1
  * @description Tests the business rules function parseColorRangeInputs with a valid mixed input.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cparseColorRangeInputs_validDataMixedUse1, () => {
    // Arrange
    let returnData = [];

    // Act
    returnData = auxiliaryArrayParsing.parseColorRangeInputs(1, num.c10);

    // Assert
    expect(returnData[0]).toBe(1);
    expect(returnData[1]).toBe(10);
  })

  /**
  * @function parseColorRangeInputs_validDataMixedUse2
  * @description Tests the business rules function parseColorRangeInputs with a valid mixed input.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cparseColorRangeInputs_validDataMixedUse2, () => {
    // Arrange
    let returnData = [];

    // Act
    returnData = auxiliaryArrayParsing.parseColorRangeInputs(num.c1, 10);

    // Assert
    expect(returnData[0]).toBe(1);
    expect(returnData[1]).toBe(10);
  })

  /**
  * @function parseColorRangeInputs_validDataInteger
  * @description Tests the business rules function parseColorRangeInputs with a valid integer input.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cparseColorRangeInputs_validDataInteger, () => {
    // Arrange
    let returnData = [];

    // Act
    returnData = auxiliaryArrayParsing.parseColorRangeInputs(1, 10);

    // Assert
    expect(returnData[0]).toBe(1);
    expect(returnData[1]).toBe(10);
  });

  /**
  * @function parseColorRangeInputs_inValidInputDataUndefined
  * @description Tests the business rules function parseColorRangeInputs with a invalid undefined input.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cparseColorRangeInputs_inValidInputDataUndefined, () => {
    // Arrange
    let returnData = [];

    // Act
    returnData.push(auxiliaryArrayParsing.parseColorRangeInputs(undefined, 10));
    returnData.push(auxiliaryArrayParsing.parseColorRangeInputs(undefined, num.c10));

    // Assert 
    expect(returnData[0][0]).toBe(0);
    expect(returnData[0][1]).toBe(0);
    expect(returnData[1][0]).toBe(0);
    expect(returnData[1][1]).toBe(0);
  });

  /**
  * @function parseColorRangeInputs_inValidInputDataNaN
  * @description Tests the business rules function parseColorRangeInputs with a invalid nan input.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cparseColorRangeInputs_inValidInputDataNaN, () => {
    // Arrange
    let returnData = [];

    // Act
    returnData.push(auxiliaryArrayParsing.parseColorRangeInputs(NaN, 10));
    returnData.push(auxiliaryArrayParsing.parseColorRangeInputs(NaN, num.c10));

    // Assert
    expect(returnData[0][0]).toBe(0);
    expect(returnData[0][1]).toBe(0);
    expect(returnData[1][0]).toBe(0);
    expect(returnData[1][1]).toBe(0);
  });

  /**
  * @function parseColorRangeInputs_inValidInputMetaDataUndefined
  * @description Tests the business rules function parseColorRangeInputs with a invalid undefined input meta data.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cparseColorRangeInputs_inValidInputMetaDataUndefined, () => {
    // Arrange
    let returnData = [];

    // Act
    returnData.push(auxiliaryArrayParsing.parseColorRangeInputs(0, undefined));
    returnData.push(auxiliaryArrayParsing.parseColorRangeInputs(num.c10, undefined));

    // Assert
    expect(returnData[0][0]).toBe(0);
    expect(returnData[0][1]).toBe(0);
    expect(returnData[1][0]).toBe(0);
    expect(returnData[1][1]).toBe(0);
  });

  /**
  * @function parseColorRangeInputs_inValidInputMetaDataNaN
  * @description Tests the business rules function parseColorRangeInputs with a invalid nan input meta data.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cparseColorRangeInputs_inValidInputMetaDataNaN, () => {
    // Arrange
    let returnData = [];

    // Act
    returnData.push(auxiliaryArrayParsing.parseColorRangeInputs(10, NaN));
    returnData.push(auxiliaryArrayParsing.parseColorRangeInputs(num.c10, NaN));

    // Assert
    expect(returnData[0][0]).toBe(0);
    expect(returnData[0][1]).toBe(0);
    expect(returnData[1][0]).toBe(0);
    expect(returnData[1][1]).toBe(0);
  });
});

/**
 * @function doesArrayContainValue
 * @description Tests the positive and negative test cases of the doesArrayContainValue function.
 * @author Json Howard
 * @date 2023/04/06
 */
describe(tst_con.cdoesArrayContainValue, () => {
  /**
  * @function doesArrayContainValue_validDataInputDataString
  * @description Tests the business rules function doesArrayContainValue with a valid string array input.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cdoesArrayContainValue_validDataInputDataString, () => {
    // Arrange
    let inputData = [[num.c1, num.c2, num.c3, num.c4, num.c5], num.c3];
    let inputMetaData = (a, b) => {
      return a === b ? true : false;
    };
    let returnData;

    // Act
    returnData = auxiliaryArrayParsing.doesArrayContainValue(inputData, inputMetaData);

    // Assert
    expect(returnData).toBe(true);
  });

  /**
  * @function doesArrayContainValue_validDataInputDataInteger
  * @description Tests the business rules function doesArrayContainValue with a valid integer array input.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cdoesArrayContainValue_validDataInputDataInteger, () => {
    // Arrange
    let inputData = [[1, 2, 3, 4, 5], 3];
    let inputMetaData = (a, b) => {
      return a === b ? true : false;
    };
    let returnData;

    // Act
    returnData = auxiliaryArrayParsing.doesArrayContainValue(inputData, inputMetaData);

    // Assert
    expect(returnData).toBe(true);
  });

  /**
  * @function doesArrayContainValue_validDataInputDataBoolean
  * @description Tests the business rules function doesArrayContainValue with a valid boolean array input.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cdoesArrayContainValue_validDataInputDataBoolean, () => {
    // Arrange
    let inputData = [[true, true, false, false, true], true];
    let inputMetaData = (a, b) => {
      return a === b ? true : false;
    };
    let returnData;

    // Act
    returnData = auxiliaryArrayParsing.doesArrayContainValue(inputData, inputMetaData);

    // Assert
    expect(returnData).toBe(true);
  });

  /**
  * @function doesArrayContainValue_validDataInputDataObject
  * @description Tests the business rules function doesArrayContainValue with a valid object array input.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cdoesArrayContainValue_validDataInputDataObject, () => {
    // Arrange
    let inputData = obj_con.JsonObjectArrayOfStrings_01;
    let inputMetaData = (object1, object2) => {
      const keys1 = Object.keys(object1);
      const keys2 = Object.keys(object2);
      if (keys1.length !== keys2.length) return false;
      for (let key of keys1)
        if (object1[key] !== object2[key])
          return false;
      return true;
    };
    let returnData;

    // Act
    returnData = auxiliaryArrayParsing.doesArrayContainValue(inputData, inputMetaData);

    // Assert
    expect(returnData).toBe(true);
  });

  /**
  * @function doesArrayContainValue_inValidInputDataUndefined
  * @description Tests the business rules function doesArrayContainValue with a invalid undefined input.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cdoesArrayContainValue_inValidInputDataUndefined, () => {
    // Arrange
    let inputData = undefined;
    let inputMetaData = (a, b) => {
      return a === b ? true : false;
    };
    let returnData;

    // Act
    returnData = auxiliaryArrayParsing.doesArrayContainValue(inputData, inputMetaData);

    // Assert
    expect(returnData).toBe(false);
  })

  /**
   * @function doesArrayContainValue_inValidInputDataNaN
   * @description Tests the business rules function doesArrayContainValue with a invalid NaN input.
   * @author Json Howard
   * @date 2023/04/06
   */
  test(tst_con.cdoesArrayContainValue_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = (a, b) => {
      return a === b ? true : false;
    };
    let returnData;

    // Act
    returnData = auxiliaryArrayParsing.doesArrayContainValue(inputData, inputMetaData);

    // Assert
    expect(returnData).toBe(false);
  })

  /**
   * @function doesArrayContainValue_inValidDataStorageInputMetaDataInteger
   * @description Tests the business rules function doesArrayContainValue with a invalid integer input meta data.
   * @author Json Howard
   * @date 2023/04/06
   */
  test(tst_con.cdoesArrayContainValue_inValidDataStorageInputMetaDataInteger, () => {
    // Arrange
    let inputData = [[1, 2, 3, 4, 5], 4567];
    let inputMetaData = (a, b) => {
      return a === b ? true : false;
    };
    let returnData;

    // Act
    returnData = auxiliaryArrayParsing.doesArrayContainValue(inputData, inputMetaData);

    // Assert
    expect(returnData).toBe(false);
  })
  
  /**
   * @function doesArrayContainValue_inValidDataStorageInputMetaDataBoolean
   * @description Tests the business rules function doesArrayContainValue with a invalid boolean input meta data.
   * @author Json Howard
   * @date 2023/04/06
   */
   test(tst_con.cdoesArrayContainValue_inValidDataStorageInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [[1, 2, 3, 4, 5], false];
    let inputMetaData = (a, b) => {
      return a === b ? true : false;
    };
    let returnData;

    // Act
    returnData = auxiliaryArrayParsing.doesArrayContainValue(inputData, inputMetaData);

    // Assert
    expect(returnData).toBe(false);
  })
});