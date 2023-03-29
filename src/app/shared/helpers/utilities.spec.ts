import {
  compare,
  generateTranslatedSelectOptionsFromArray,
  generateTranslatedSelectOptionsFromBoolean,
  generateTranslatedSelectOptionsFromEnum,
  hasEmptyValue,
  translateSelectOptions
} from './utilities';
import { InputSelectOption, TableColType } from '../_models';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { getTranslocoTestingModule } from '@platform-ui/base/lib/transloco/transloco.utils';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { translate, TranslocoService } from '@ngneat/transloco';

describe('Utilities', () => {
  let translateService: TranslocoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoTestingModule()],
      providers: [TranslocoService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    translateService = TestBed.inject(TranslocoService);
  }));

  it('should create', () => {
    expect(compare).toBeDefined();
  });

  it('should sort two strings ascending', () => {
    expect(compare('a', 'b', true, TableColType.STRING)).toBe(-1);
  });

  it('should sort two strings descending', () => {
    expect(compare('a', 'b', false, TableColType.STRING)).toBe(1);
  });

  it('should sort two numbers ascending', () => {
    expect(compare('2', '10', true, TableColType.NUMBER)).toBe(-1);
  });

  it('should sort two numbers descending', () => {
    expect(compare('1', '2', false, TableColType.NUMBER)).toBe(1);
  });

  it('should sort two decimal ascending', () => {
    expect(compare('2.45', '2.46', true, TableColType.DECIMAL)).toBe(-1);
  });

  it('should sort two decimal descending', () => {
    expect(compare('4.315', '4.355', false, TableColType.DECIMAL)).toBe(1);
  });

  it('should sort two dates ascending', () => {
    expect(compare('2021-01-25T14:15:00+01:00', '2021-01-24T14:15:00+01:00', true, TableColType.DATE)).toBe(1);
  });

  it('should sort two dates descending', () => {
    expect(compare('2021-01-07T14:15:00+01:00', '2021-01-06T14:15:00+01:00', false, TableColType.DATE)).toBe(-1);
  });

  it('should sort undefined variables', () => {
    expect(compare(undefined, undefined, true, TableColType.STRING)).toBe(0);
  });

  it('should sort first undefined variable ASC', () => {
    expect(compare(undefined, '1', true, TableColType.STRING)).toBe(-1);
  });

  it('should sort first undefined variable DESC', () => {
    expect(compare(undefined, '1', false, TableColType.STRING)).toBe(1);
  });

  it('should sort second undefined variable ASC', () => {
    expect(compare('1', undefined, true, TableColType.STRING)).toBe(1);
  });

  it('should sort second undefined variable DESC', () => {
    expect(compare('1', undefined, false, TableColType.STRING)).toBe(-1);
  });

  it('should convert ENUM to InputSelectOption[]', () => {
    translateService.setTranslation({'test.de': 'German', 'test.en': 'English'}, 'en');
    translateService.setActiveLang('en');

    enum TEST {
      de = 'de',
      en = 'en'
    }

    const prefix = 'test.';
    const expectedOptions: InputSelectOption[] = [
      {id: TEST.de, name: translate(`${prefix}${TEST.de}`)},
      {id: TEST.en, name: translate(`${prefix}${TEST.en}`)}
    ];
    const inputOptions = generateTranslatedSelectOptionsFromEnum(prefix, TEST);
    expect(inputOptions).toEqual(expectedOptions);
  });

  it('should update translations for InputSelectOption[]', () => {
    const selectOptions = [
      {
        id: 'petitioner',
        name: 'Petitioner'
      },
      {
        id: 'verifier',
        name: 'Verifier'
      }
    ];

    const currTranslation = {
      petitioner: 'Petitioner translation updated',
      verifier: 'Verifier translation updated'
    };

    const expectedTranslatedSelectOptions = [
      {
        id: 'petitioner',
        name: 'Petitioner translation updated'
      },
      {
        id: 'verifier',
        name: 'Verifier translation updated'
      }
    ];

    const actualTranslatedSelectOptions = translateSelectOptions(selectOptions, currTranslation);

    expect(expectedTranslatedSelectOptions).toEqual(actualTranslatedSelectOptions);
  });

  describe('generateTranslatedSelectOptionsFromArray', () => {
    it('should generate a translated array of selectionOptions', () => {
      translateService.setTranslation({
        'prefix.valueOne': 'Erster Wert',
        'prefix.valueTwo': 'Zweiter Wert'
      }, 'de');
      translateService.setTranslation({
        'prefix.valueOne': 'First Value',
        'prefix.valueTwo': 'Second Value'
      }, 'en');

      const expectedOptionsDe: InputSelectOption[] = [
        {id: 'valueOne', name: 'Erster Wert'},
        {id: 'valueTwo', name: 'Zweiter Wert'}
      ];
      const expectedOptionsEn: InputSelectOption[] = [
        {id: 'valueOne', name: 'First Value'},
        {id: 'valueTwo', name: 'Second Value'}
      ];
      translateService.setActiveLang('de');
      expect(generateTranslatedSelectOptionsFromArray('prefix', ['valueOne', 'valueTwo'])).toEqual(expectedOptionsDe);
      translateService.setActiveLang('en');
      expect(generateTranslatedSelectOptionsFromArray('prefix', ['valueOne', 'valueTwo'])).toEqual(expectedOptionsEn);
    });
  });

  describe('generateTranslatedSelectOptionsFromBoolean', () => {
    it('should generate a translated array of selectionOptions', () => {
      translateService.setTranslation({
        yes: 'Ja',
        no: 'Nein'
      }, 'de');
      translateService.setActiveLang('de');

      const expectedOptions: InputSelectOption[] = [
        {id: true, name: 'Ja'},
        {id: false, name: 'Nein'}
      ];
      expect(generateTranslatedSelectOptionsFromBoolean()).toEqual(expectedOptions);
    });
  });

  describe('hasEmptyValue', () => {
    it('should return true, if "empty" value was provided', () => {
      expect(hasEmptyValue('')).toBeTruthy();
      expect(hasEmptyValue(null)).toBeTruthy();
      expect(hasEmptyValue(undefined)).toBeTruthy();
    });

    it('should return false, if "non-empty" value was provided', () => {
      expect(hasEmptyValue(false)).toBeFalsy();
      expect(hasEmptyValue(0)).toBeFalsy();
      expect(hasEmptyValue('test string')).toBeFalsy();
    });
  });
});
