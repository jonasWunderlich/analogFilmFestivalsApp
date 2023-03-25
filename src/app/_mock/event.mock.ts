import { sample, uniqueId } from 'lodash';
import { DeepPartial } from '@ngneat/reactive-forms/lib/types';
import { ScreeningEvent } from '../_models/screening-event';
import { ScreeningEventType } from '../_models/sceening-event-type';
import { addDays, CHAR_NUMBERS, mockCharString, mockNumber, randomDate, sortByDate } from './helpers.mock';
import { mockProjections } from './projection.mock';
import { MOCKED_CITIES, MOCKED_EVENT_NAMES, MOCKED_EVENT_TEXTS, MOCKED_STREETS } from './constants';
import { mockReports } from './report.mocks';


const SCREENING_EVENT_DEFAULT_VALUES: ScreeningEvent = {
  id: '0',
  createdAt: '2020-10-30T09:32:19.196720000+0000',
  lastModifiedAt: '2020-11-30T10:32:19.196720000+0000',
  name: MOCKED_EVENT_NAMES[1],
  text: MOCKED_EVENT_TEXTS[1],
  link: 'https://www.kommkino.de/festival/hofbauer-kongress',
  reports: [],
  date: randomDate(new Date(), new Date(2023, 6, 0)),
  dateEnd: randomDate(new Date(), new Date(2023, 12, 0)),
  street: 'Spinnereistrasse 1',
  postcode: '04177',
  city: 'Leipzig',
  mail: 'kontakt@mockedcinema.de',
  phone: '+49123456789',
  linkHomepage: 'https://www.example.com',
  linkProgram: 'https://www.example.com',
};

/**
 * Create mocked ScreeningEvent.
 *
 * Simple creation of Event that only needs the most basic information.
 * All data is filled with SCREENING_EVENT_DEFAULT_VALUES and mock values.
 *
 * @param eventValues: Partial<ScreeningEvent> data to overwrite default values
 *
 * @example mockScreeningEvent({name: 'Hofbauer Kongress'})
 */
export function mockScreeningEvent(eventValues: DeepPartial<ScreeningEvent>): ScreeningEvent {
  const id = uniqueId();
  const date = randomDate(new Date(), new Date(2023, 12, 0));
  const eventLength = mockNumber(1, 14);
  const eventType = sample([ScreeningEventType.FESTIVAL, ScreeningEventType.SERIES, ScreeningEventType.SINGLE]);
  const projectionCount = eventType !== ScreeningEventType.SINGLE ? mockNumber(4, 24) : mockNumber(1,2);
  const defaultValues: ScreeningEvent = {
    id,
    createdAt: SCREENING_EVENT_DEFAULT_VALUES.createdAt,
    lastModifiedAt: SCREENING_EVENT_DEFAULT_VALUES.lastModifiedAt,
    name: sample(MOCKED_EVENT_NAMES),
    type: eventType,
    text: sample(MOCKED_EVENT_TEXTS),
    reports: mockReports(mockNumber(0,3)),
    link: SCREENING_EVENT_DEFAULT_VALUES.link,
    date,
    dateEnd: addDays(date, eventLength),
    projections: mockProjections(projectionCount, date, eventLength).sort((a, b) => sortByDate(a.date, b.date)),
    city: sample(MOCKED_CITIES),
    street: `${sample(MOCKED_STREETS)} ${mockNumber(1, 400)}`,
    postcode: mockCharString(5, CHAR_NUMBERS),
    linkHomepage: SCREENING_EVENT_DEFAULT_VALUES.linkHomepage,
    linkProgram: SCREENING_EVENT_DEFAULT_VALUES.linkProgram,
    mail: SCREENING_EVENT_DEFAULT_VALUES.mail,
    phone: SCREENING_EVENT_DEFAULT_VALUES.phone,
  };
  return {
    ...defaultValues,
    ...eventValues,
  } as ScreeningEvent;
}

/**
 * Create mocked list of ScreeningEvent.
 *
 * Simple creation of Event list that only needs the most basic information.
 * All data is filled with SCREENING_EVENT_DEFAULT_VALUES and mock values.
 *
 * @param amount: Length of List
 *
 * @example mockScreeningEvents(10)
 */
export function mockScreeningEvents(amount: number): ScreeningEvent[] {
  const events: ScreeningEvent[] = [];
  for (let i = 0; i < amount; i++) {
    events.push(mockScreeningEvent({}))
  }
  return events;
}
