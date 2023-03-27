import { sample, uniqueId } from 'lodash';
import { DeepPartial } from '@ngneat/reactive-forms/lib/types';

import { getRandomSubarray, mockNumber } from './helpers.mock';
import { Auditorium } from '../_models/auditorium';


const AUDITORIUM_DEFAULT_VALUES: Auditorium = {
  id: 'auditorium0000',
  createdAt: '2020-10-30T09:32:19.196720000+0000',
  lastModifiedAt: '2020-11-30T10:32:19.196720000+0000',
  name: 'Saal 1',
  text: 'Ein sehr gemütlicher Saal',
  projectors: ['35mm', '16mm', 'DCP', 'Bluray'],
  sound: ['7.1', '5.1', 'stereo', 'mono'],
  screen: '18m * 16m',
  seats: 240,
  attributes: ['Klimaanlage', 'Klavier', 'Rednerpult', 'absteigend', 'Loge', 'Bar'],
  reports: [],
};

/**
 * Create mocked Auditorium.
 *
 * Simple creation of Auditorium that only needs the most basic information.
 * All data is filled with AUDITORIUM_DEFAULT_VALUES and mock values.
 *
 * @param auditoriumValues: Partial<Auditorium> data to overwrite default values
 *
 * @example mockAuditorium({name: 'Luru Kinosaal'})
 */
export function mockAuditorium(auditoriumValues: DeepPartial<Auditorium>): Auditorium {
  const id = uniqueId();
  const defaultValues: Auditorium = {
    id,
    createdAt: AUDITORIUM_DEFAULT_VALUES.createdAt,
    lastModifiedAt: AUDITORIUM_DEFAULT_VALUES.lastModifiedAt,
    name: `Saal ${mockNumber(1,10)}`,
    text: AUDITORIUM_DEFAULT_VALUES.text,
    projectors: getRandomSubarray(AUDITORIUM_DEFAULT_VALUES.projectors, mockNumber(0, AUDITORIUM_DEFAULT_VALUES.projectors?.length)),
    sound: getRandomSubarray(AUDITORIUM_DEFAULT_VALUES.sound, mockNumber(0, AUDITORIUM_DEFAULT_VALUES.sound?.length)),
    attributes: getRandomSubarray(AUDITORIUM_DEFAULT_VALUES.attributes, mockNumber(0, AUDITORIUM_DEFAULT_VALUES.attributes?.length)),
    seats: sample([40, 300, 200, 90]),
    screen: AUDITORIUM_DEFAULT_VALUES.screen,
    reports: AUDITORIUM_DEFAULT_VALUES.reports,
  };
  return {
    ...defaultValues,
    ...auditoriumValues,
  } as Auditorium;
}

/**
 * Create mocked list of Auditoriums.
 *
 * Simple creation of Auditoriums that only needs the most basic information.
 * All data is filled with AUDITORIUM_DEFAULT_VALUES and mock values.
 *
 * @param amount: Length of List
 *
 * @example mockAuditoriums(10)
 */
export function mockAuditoriums(amount: number): Auditorium[] {
  const auditoriums: Auditorium[] = [];
  for (let i = 0; i < amount; i++) {
    auditoriums.push(mockAuditorium({ id: i.toString() }))
  }
  return auditoriums;
}
