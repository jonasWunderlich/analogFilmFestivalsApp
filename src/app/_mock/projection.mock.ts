import { sample, uniqueId } from 'lodash';
import { DeepPartial } from '@ngneat/reactive-forms/lib/types';
import { Projection } from '../_models/projection';
import { addDays, mockNumber, randomDate } from './helpers.mock';
import { MOCKED_PROJECTION_NAMES } from './constants';


const PROJECTION_DEFAULT_VALUES: Projection = {
  id: '0',
  createdAt: '2020-10-30T09:32:19.196720000+0000',
  lastModifiedAt: '2020-11-30T10:32:19.196720000+0000',
  name: MOCKED_PROJECTION_NAMES[1],
  reports: [],
  date: randomDate(new Date(), new Date(2023, 6, 0)),
};

/**
 * Create mocked Projection.
 *
 * Simple creation of Projection that only needs the most basic information.
 * All data is filled with PROJECTION_DEFAULT_VALUES and mock values.
 *
 * @param projectionValues: Partial<Projection> data to overwrite default values
 *
 * @example mockProjection({name: 'Hofbauer Kongress'})
 */
export function mockProjection(projectionValues: DeepPartial<Projection>): Projection {
  const id = uniqueId();
  const date = randomDate(new Date(), new Date(2023, 12, 0));
  const defaultValues: Projection = {
    id,
    createdAt: PROJECTION_DEFAULT_VALUES.createdAt,
    lastModifiedAt: PROJECTION_DEFAULT_VALUES.lastModifiedAt,
    name: sample(MOCKED_PROJECTION_NAMES) || 'Time and Tide',
    reports: PROJECTION_DEFAULT_VALUES.reports,
    date,
  };
  return {
    ...defaultValues,
    ...projectionValues,
  } as Projection;
}

/**
 * Create mocked list of Projections.
 *
 * Simple creation of Projection list that only needs the most basic information.
 * All data is filled with PROJECTION_DEFAULT_VALUES and mock values.
 *
 * @param amount: Length of List
 *
 * @example mockProjections(10)
 */
export function mockProjections(amount: number, date: Date, length: number): Projection[] {
  const projections: Projection[] = [];
  for (let i = 0; i < amount; i++) {
    projections.push(mockProjection({date: addDays(date, mockNumber(0, length)), }))
  }
  return projections;
}
