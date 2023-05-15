/**
 * @file dataStringParsing.js
 * @module dataStringParsing
 * @description Contains many re-usable test object constants.
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Json Howard
 * @date 2023/04/17
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */
// Internal imports
import * as tst_con from '../../../../tests/constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';

const { bas, wrd, gen } = hayConst;

/**
 * @function xmlPath
 * @description get xml path to are used dataStringParsing.test.js for unit test
 * @author Json Howard
 * @date 2023/04/17
 */
export const xmlPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.csystem + bas.cDot + gen.cxml;
    return baseUrl;
}

/**
 * @function xmlHivePath
 * @description get xml hive path to are used dataStringParsing.test.js for unit test
 * @author Json Howard
 * @date 2023/04/17
 */
export const xmlHivePath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.ctest + bas.cDot + gen.cxml;
    return baseUrl;
}