import { DeepPartial } from '@ngneat/reactive-forms/lib/types';
import { uniqueId } from 'lodash';
import {
  addDays,
  mockNumber,
  pickRandom,
  randomDate,
  sortByISODate,
} from '../utilities/mock-data';
import { Projection } from '../_models/projection';
import { MOCKED_PROJECTION_NAMES, MOCKED_TMDBIDS } from './constants';

const PROJECTION_DEFAULT_VALUES: Projection = {
  id: '0',
  createdAt: '2020-10-30T09:32:19.196720000+0000',
  lastModifiedAt: '2020-11-30T10:32:19.196720000+0000',
  title: 'Time and Tide',
  date: randomDate(new Date(), new Date(2023, 6, 0)).toJSON(),
  tmdb: MOCKED_TMDBIDS[0],
  text: `Have you drained your bladder? Are you free? Because if you haven't it will only come out later. I'm giving you some information that your bodily fluids may penetrate your clothing fibre's without warning.
  When you get lost in your imaginatory vagueness, your foresight will become a nimble vagrant.`,
  agent: 'Lorem Ipsum',
  black: false,
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
export function mockProjection(
  projectionValues: DeepPartial<Projection>
): Projection {
  const id = uniqueId();
  const date = randomDate(new Date(), new Date(2023, 12, 0));
  const defaultValues: Projection = {
    id,
    createdAt: PROJECTION_DEFAULT_VALUES.createdAt,
    lastModifiedAt: PROJECTION_DEFAULT_VALUES.lastModifiedAt,
    title: pickRandom(MOCKED_PROJECTION_NAMES),
    date: date.toJSON(),
    tmdb: pickRandom(MOCKED_TMDBIDS),
    text: PROJECTION_DEFAULT_VALUES.text,
    agent: PROJECTION_DEFAULT_VALUES.agent,
    black: pickRandom([true, false]) || false,
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
 * @param date: The starting Date of projections
 * @param length: the count of days the projections days span to
 *
 * @example mockProjections(10)
 */
export function mockProjections(
  amount: number,
  date: Date,
  length: number,
  cinemaRef?: string
): Projection[] {
  const projections: Projection[] = [];
  for (let i = 0; i < amount; i++) {
    projections.push(
      mockProjection({
        date: addDays(date, mockNumber(0, length)).toJSON(),
        cinemaRef: cinemaRef,
      })
    );
  }
  return projections.sort((a, b) => sortByISODate(a.date, b.date));
}
