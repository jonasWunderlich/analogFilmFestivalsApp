import { sample, uniqueId } from 'lodash';
import { DeepPartial } from '@ngneat/reactive-forms/lib/types';
import { Projection } from '../_models/projection';
import { addDays, mockNumber, randomDate } from '../utilities/mock-data';
import { MOCKED_PROJECTION_NAMES, MOCKED_TMDBIDS } from './constants';

const PROJECTION_DEFAULT_VALUES: Projection = {
  id: '0',
  createdAt: '2020-10-30T09:32:19.196720000+0000',
  lastModifiedAt: '2020-11-30T10:32:19.196720000+0000',
  title: 'Time and Tide',
  reports: [],
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
    title: sample(MOCKED_PROJECTION_NAMES) || PROJECTION_DEFAULT_VALUES.title,
    reports: PROJECTION_DEFAULT_VALUES.reports,
    date: date.toJSON(),
    tmdb: sample(MOCKED_TMDBIDS),
    text: PROJECTION_DEFAULT_VALUES.text,
    agent: PROJECTION_DEFAULT_VALUES.agent,
    black: sample([true, false]) || false,
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
 * @param amount: the count of days the projections days span to
 *
 * @example mockProjections(10)
 */
export function mockProjections(
  amount: number,
  date: Date,
  length: number
): Projection[] {
  const projections: Projection[] = [];
  for (let i = 0; i < amount; i++) {
    projections.push(
      mockProjection({
        id: i.toString(),
        date: addDays(date, mockNumber(0, length)).toJSON(),
      })
    );
  }
  return projections;
}