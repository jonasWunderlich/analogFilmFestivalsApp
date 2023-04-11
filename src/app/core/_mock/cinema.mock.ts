import { DeepPartial } from '@ngneat/reactive-forms/lib/types';

import { Cinema } from '../_models/cinema';
import {
  CHAR_NUMBERS,
  mockCharString,
  mockCoordinates,
  mockNumber,
  pickRandom,
} from '../utilities/mock-data';
import {
  MOCKED_CINEMA_IMAGES,
  MOCKED_CINEMA_NAMES,
  MOCKED_CITIES,
  MOCKED_STREETS,
} from './constants';
import { mockAuditoriums } from './auditorium.mock';
import { uniqueId } from 'lodash';

const CINEMA_DEFAULT_VALUES: Cinema = {
  id: '0',
  createdAt: '2020-10-30T09:32:19.196720000+0000',
  lastModifiedAt: '2020-11-30T10:32:19.196720000+0000',
  geoCoordinates: [12, 15],
  title: 'Luru Kino in der Spinnerei',
  text: 'Das gut versteckte Arthouse-Kino im weltberühmten Kunstzentrum Alte Baumwollspinnerei.',
  street: 'Spinnereistrasse 1',
  postcode: '04177',
  city: 'Leipzig',
  //auditoriums: mockAuditoriums(2),
  mail: 'kontakt@mockedcinema.de',
  phone: '+49123456789',
  linkHomepage: 'https://www.example.com',
  linkProgram: 'https://www.example.com',
  linkOpeningHours: 'https://www.cinema.de/hours',
  images: [MOCKED_CINEMA_IMAGES[0]],
  reportRefs: [],
  eventRefs: [],
  auditoriumRefs: [],
  projectionRefs: [],
};

/**
 * Create mocked Cinema.
 *
 * Simple creation of Cinema that only needs the most basic information.
 * All data is filled with CINEMA_DEFAULT_VALUES and mock values.
 *
 * @param cinemaValues: Partial<Cinema> data to overwrite default values
 *
 * @example mockCinema({name: 'Luru Kino'})
 */
export function mockCinema(cinemaValues: DeepPartial<Cinema>): Cinema {
  const id = uniqueId();
  const defaultValues: Cinema = {
    id,
    createdAt: CINEMA_DEFAULT_VALUES.createdAt,
    lastModifiedAt: CINEMA_DEFAULT_VALUES.lastModifiedAt,
    title: pickRandom(MOCKED_CINEMA_NAMES),
    geoCoordinates: mockCoordinates(),
    text: CINEMA_DEFAULT_VALUES.text,
    linkOpeningHours: CINEMA_DEFAULT_VALUES.linkOpeningHours,
    city: pickRandom(MOCKED_CITIES),
    street: `${pickRandom(MOCKED_STREETS)} ${mockNumber(1, 400)}`,
    postcode: mockCharString(5, CHAR_NUMBERS),
    linkHomepage: CINEMA_DEFAULT_VALUES.linkHomepage,
    linkProgram: CINEMA_DEFAULT_VALUES.linkProgram,
    mail: CINEMA_DEFAULT_VALUES.mail,
    phone: CINEMA_DEFAULT_VALUES.phone,
    //auditoriums: mockAuditoriums(mockNumber(1, 12), { cinemaRef: id }),
    images: [pickRandom(MOCKED_CINEMA_IMAGES)],
    reportRefs: [],
    eventRefs: [],
    auditoriumRefs: [],
    projectionRefs: [],
  };
  return {
    ...defaultValues,
    ...cinemaValues,
  } as Cinema;
}

/**
 * Create mocked list of Cinemas.
 *
 * Simple creation of Cinema that only needs the most basic information.
 * All data is filled with CINEMA_DEFAULT_VALUES and mock values.
 *
 * @param amount: Length of List
 *
 * @example mockCinemas(10)
 */
export function mockCinemas(amount: number): Cinema[] {
  const cinemas: Cinema[] = [];
  for (let i = 0; i < amount; i++) {
    cinemas.push(mockCinema({}));
  }
  return cinemas;
}
