/// <reference path="../FormFactor.FormFactorCategoryType/index.d.ts" />
declare class FormFactorModule {
/**
*  
 * get(categoryType: FormFactorCategoryType): FormFactorCategoryBase
 *  
 * 
 * Returns a specific form factor type from the effect's form factors.
 * * `categoryType` - the form factor type to retrieve, as a [`FormFactorCategoryType`](/classes/formfactormodule.formfactorcategorytype) enum value.
 * 
 *  
 * const locFactor = FormFactor.get(FormFactor.FormFactorCategoryType.LOCALE);
 *  
 */
static get(categoryType: FormFactorCategoryType): FormFactorCategoryBase;

/**
*  
 * getAll(): FormFactorCategoryMap
 *  
 * 
 * Retrieves all of the form factors used in the effect.
 * To retrieve a specific form factor type, access the returned [`FormFactorCategoryMap`](/classes/formfactormodule.formfactorcategorymap) array with a [`FormFactorCategoryType`](/classes/formfactormodule.formfactorcategorytype) value:
 * 
 *  
 * const formFactors = FormFactor.getAll();
 * const locFactor = formFactors[FormFactor.FormFactorCategoryType.LOCALE].
 *                                                            formFactorValue;
 *  
 */
static getAll(): FormFactorCategoryMap;

/**
 * The Direction enum describes the stack layout's direction.
 * @property LOCALE Form Factor for the locale of the device
 * @property PLATFORM Form Factor for the platform that runs the effect.
 */
static readonly FormFactorCategoryType: {
  LOCALE: "LOCALE",
  PLATFORM: "PLATFORM",
}
}
export = FormFactorModule;
