import { sample, uniqueId } from 'lodash';
import { DeepPartial } from '@ngneat/reactive-forms/lib/types';

import { Cinema } from '../_models/cinema';
import { CHAR_NUMBERS, mockCharString, mockCoordinates, mockNumber } from './helpers.mock';
import { MOCKED_AUDITORIUM, MOCKED_CINEMA_NAMES, MOCKED_CITIES, MOCKED_STREETS } from './constants';


const CINEMA_DEFAULT_VALUES: Cinema = {
  id: '0',
  createdAt: '2020-10-30T09:32:19.196720000+0000',
  lastModifiedAt: '2020-11-30T10:32:19.196720000+0000',
  geoCoordinates: mockCoordinates(),
  name: MOCKED_CINEMA_NAMES[1],
  text: 'Das gut versteckte Arthouse-Kino im weltberühmten Kunstzentrum Alte Baumwollspinnerei.',
  street: 'Spinnereistrasse 1',
  postcode: '04177',
  city: 'Leipzig',
  auditoriums: [MOCKED_AUDITORIUM],
  mail: 'kontakt@mockedcinema.de',
  phone: '+49123456789',
  linkHomepage: 'https://www.example.com',
  linkProgram: 'https://www.example.com',
  openingHours: '2021-01-30T10:04:25.196720000+0000',
  reports: [],
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
    name: sample(MOCKED_CINEMA_NAMES),
    geoCoordinates: mockCoordinates(),
    text: CINEMA_DEFAULT_VALUES.text,
    openingHours: CINEMA_DEFAULT_VALUES.openingHours,
    reports: CINEMA_DEFAULT_VALUES.reports,
    city: sample(MOCKED_CITIES),
    street: `${sample(MOCKED_STREETS)} ${mockNumber(1, 400)}`,
    postcode: mockCharString(5, CHAR_NUMBERS),
    linkHomepage: CINEMA_DEFAULT_VALUES.linkHomepage,
    linkProgram: CINEMA_DEFAULT_VALUES.linkProgram,
    mail: CINEMA_DEFAULT_VALUES.mail,
    phone: CINEMA_DEFAULT_VALUES.phone,
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
    cinemas.push(mockCinema({}))
  }
  return cinemas;
}
