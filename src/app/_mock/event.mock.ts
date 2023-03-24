import { sample, uniqueId } from 'lodash';
import { DeepPartial } from '@ngneat/reactive-forms/lib/types';
import { ScreeningEvent } from '../_models/screening-event';
import { ScreeningEventType } from '../_models/sceening-event-type';
import { addDays, mockNumber, randomDate, sortByDate } from './helpers.mock';
import { mockProjections } from './projection.mock';
import { MOCKED_EVENT_NAMES } from './constants';


const SCREENING_EVENT_DEFAULT_VALUES: ScreeningEvent = {
  id: '0',
  createdAt: '2020-10-30T09:32:19.196720000+0000',
  lastModifiedAt: '2020-11-30T10:32:19.196720000+0000',
  name: MOCKED_EVENT_NAMES[1],
  text: 'Streifzüge durch die Seitengassen der deutschen Filmgeschichte verbinden sich mit Schlaglichtern auf das Gegenwartskino (zu Gast: Eckhart Schmidt und Garegin Vanisian) und Ausflügen in andere Länder und Kontinente. Lange wurde in nationalen und internationalen Archiven gegraben, fragile Raritäten geprüft und unglaubliche Zelluloid-Schätze gehoben, die mitunter eine weite Reise angetreten haben - darunter von einem HK-Säulenheiligen inszenierte, schwarz-weiße US-Erotica der 60er, die von der IMDb als verschollen gelistet wird, jedoch von uns aufgespürt wurde. Von deutschen Wohnzimmern, Garagen und Toiletten bis in brasilianische Spelunken, japanische Gemächer und den indischen Ozean führt die filmische Reise für alle, die gegenüber den Besonderheiten und Seltsamkeiten des Kinos aufgeschlossen sind. Lasst euch entführen, verführen und oft einfach überraschen! Das Programm wird spontan ergänzt von „Videoknüppeln“ als nächtlichen Überraschungsfilmen.',
  link: 'https://www.kommkino.de/festival/hofbauer-kongress',
  reports: [],
  date: randomDate(new Date(), new Date(2023, 6, 0)),
  dateEnd: randomDate(new Date(), new Date(2023, 12, 0)),
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
  const defaultValues: ScreeningEvent = {
    id,
    createdAt: SCREENING_EVENT_DEFAULT_VALUES.createdAt,
    lastModifiedAt: SCREENING_EVENT_DEFAULT_VALUES.lastModifiedAt,
    name: sample(MOCKED_EVENT_NAMES),
    type: sample([ScreeningEventType.FESTIVAL, ScreeningEventType.SERIES, ScreeningEventType.SINGLE]),
    text: SCREENING_EVENT_DEFAULT_VALUES.text,
    reports: SCREENING_EVENT_DEFAULT_VALUES.reports,
    link: SCREENING_EVENT_DEFAULT_VALUES.link,
    date,
    dateEnd: addDays(date, eventLength),
    projections: mockProjections(5, date, eventLength).sort((a, b) => sortByDate(a.date, b.date)),
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
