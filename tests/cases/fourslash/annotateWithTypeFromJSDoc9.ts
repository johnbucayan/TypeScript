/// <reference path='fourslash.ts' />

/////**
//// * @param {?} x
//// * @returns {number}
//// */
////var f = /*1*/x => x

verify.applicableRefactorAvailableAtMarker('1');
verify.fileAfterApplyingRefactorAtMarker('1',
`/**
 * @param {?} x
 * @returns {number}
 */
var f = (x: any): number => x`, 'Annotate with types from JSDoc', 'annotate');
