/**
 * @file themeBroker.js
 * @module themeBroker
 * @description Contains many re-usable test object constants.
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Json Howard
 * @date 2023/04/19
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import * as tst_con from '../../tests/constants/test.constants.js';
import { basePath } from '../../tests/utilities/utilities.js';

// External imports
import hayConst from '@haystacks/constants';

const { bas, wrd } = hayConst;

/**
 * @function themePath
 * @description Get test theme path to be used in themeBroker.test.js for unit tests:
 * getNamedThemes_validData
 * getNamedThemes_inValidString
 * getNamedThemes_inValidNumber
 * getNamedThemes_inValidBoolean
 * getNamedThemePath_validData
 * getNamedThemePath_inValidString
 * loadTheme_validData
 * applyTheme_validData
 * @author Json Howard
 * @date 2023/04/19
 */
export const themePath = () => {
    let baseUrl = basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cThemes + bas.cForwardSlash + wrd.cdebug + wrd.cSettings;
    return baseUrl;
}