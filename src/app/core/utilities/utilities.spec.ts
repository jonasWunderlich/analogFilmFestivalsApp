import { TableColType, compare } from './utilities';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Utilities', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
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
    expect(
      compare(
        '2021-01-25T14:15:00+01:00',
        '2021-01-24T14:15:00+01:00',
        true,
        TableColType.DATE
      )
    ).toBe(1);
  });

  it('should sort two dates descending', () => {
    expect(
      compare(
        '2021-01-07T14:15:00+01:00',
        '2021-01-06T14:15:00+01:00',
        false,
        TableColType.DATE
      )
    ).toBe(-1);
  });
});
