import {
  sample,
  uniqueId,
} from 'lodash';
import { DeepPartial } from '@ngneat/reactive-forms/lib/types';

import { Cinema } from '../_models/cinema';
import { CHAR_NUMBERS, mockCharString, mockNumber } from './helpers.mock';
import { Auditorium } from '../_models/auditorium';

const MOCKED_CITIES = ['Abensberg', 'Altena', 'Alzey', 'Aschaffenburg', 'Aurich', 'Backnang', 'Backnang', 'Bad Neuenahr', 'Bad Salzungen', 'Bad Schwalbach', 'Bad Vilbel', 'Bad Vilbel', 'Berlin', 'Bernburg', 'Biberach', 'Bocholt', 'Bonn', 'Brake', 'Braunschweig', 'Burgdorf', 'ErlebniskinoBurglengenfeld', 'Buxtehude', 'Chemnitz', 'Damme', 'Dinslaken', 'Düren', 'Essen', 'Finsterwalde', 'Frankenthal', 'Frankfurt am Main', 'Frechen', 'Freudenstadt', 'Geislingen an der Steige', 'Gelnhausen', 'Gera', 'Goch', 'Grünstadt', 'Hachenburg', 'Halle (Saale)', 'Hamburg', 'Hamburg', 'Hannover', 'Herne', 'Hillesheim', 'das KinoHürth', 'Husum', 'Kerpen', 'Kleve', 'Konstanz', 'Langenfeld', 'Lehrte', 'Leipzig', 'Leipzig', 'Lennestadt', 'Leonberg', 'Lohne', 'Marburg', 'Marktheidenfeld', 'Meschede', 'Mönchengladbach', 'Mönchengladbach', 'Mülheim an der Ruhr', 'München', 'Münster', 'Nastätten', 'Neitersen', 'Nettetal', 'Nidda', 'Nürnberg', 'Oberhausen', 'Paderborn', 'Papenburg', 'Plochingen', 'Quakenbrück', 'Quernheim', 'Quickborn', 'Rendsburg', 'Rheine', 'Rinteln', 'Schmelz', 'Schneverdingen', 'Schorndorf', 'Solingen', 'Spenge', 'Straubing', 'Stuttgart', 'Thale', 'Türkheim', 'Uelzen', 'Uetersen', 'Viechtach', 'Walsrode', 'Werne', 'Wildeshausen', 'Wittstock', 'Wolfenbüttel', 'Wolfhagen', 'Wolfsburg', 'Wolnzach', 'Zinnowitz'];
const MOCKED_CINEMA_NAMES = ['Roxy Kino', 'Apollo Service Kino', 'Bali', 'Casino', 'Carolinenhof-Kino', 'Traumpalast Backnang', 'Kino Universum', 'Kino-Center Rhein-Ahr', 'pab Kinocenter', 'Bambi & Camera', 'Open Air Kino im Bad Vilbeler Freibad', 'Kino Alte Mühle', 'Zoo-Palast', 'Thalia', 'Filmtheater Capitol', 'Traumpalast Biberach', 'Kinodrom Multiplex', 'Woki', 'Centraltheater', 'C1 Cinema', 'Kino Universum', 'Neue Schauburg', 'Starmexx', 'City Kino Buxtehude', 'Metropol', 'Dersa Kino-Center', 'Lichtburg Center', 'Das Lumen Filmtheater', 'Lichtburg und Sabu', 'Weltspiegel', 'Lux', 'Cinema', 'Harmonie', 'Linden-Theater', 'Subiaco im Kurhaus', 'Gloria Kino Center', 'Park-Lichtspiele', 'Casino', 'Metropol Kino', 'Goli Theater Goch', 'Filmwelt Grünstadt', 'Cinexx', 'The Light Cinema', 'Savoy', 'Passage Kino Hamburg', 'Astor Grand Cinema', 'Filmwelt', 'Eifel-Film-Bühne', 'Berli Theater', 'Kino-Center', 'Capitol-Theater', 'Tichelpark Kleve', 'Zebra Kommunales Kino Konstanz e.V.', 'Rex', 'Das Andere Kino', 'Regina-Palast', 'Luru-Kino in der Spinnerei', 'Lichtspielhaus', 'Traumpalast Leonberg', 'Capitol-Kinocenter', 'Cineplex', 'Movie im Luitpoldhaus', 'Linden-Lichtspiele', 'Comet Cine Center', 'Haus Zoar', 'Filmpassage', 'Mathäser Filmpalast', 'Gloria-Palast', 'Cineplex', 'Schlosstheater', 'Kinocenter', 'Wied Scala', 'Corso Film Casino', 'Lumos Lichtspiele & Lounge', 'Cinecitta', 'Lichtburg Filmpalast', 'Pollux', 'Kino Papenburg', 'Union-Theater Plochingen', 'Schauburg Filmtheater', 'Lichtburg', 'Beluga Kino', 'Burgtheater', 'Schauburg', 'Cinetech das Erlebniskino', 'Kinocenter', 'Schmelzer Lichtspiele', 'LichtSpiel e.V.', 'Traumpalast Schorndorf', 'Das Lumen Filmtheater', 'Zentral-Theater', 'Citydom', 'Gloria', 'Central Theater', 'Filmhaus-Huber in Türkheim', 'Central-Theater', 'Burg-Theater', 'Neue Post Lichtspiele', 'Capitol-Theater', 'Capitol-Cinema-Center', 'LiLi-Servicekino', 'Kino Astoria', 'Filmpalast', 'Cinema', 'Delphin Palast', 'Amper-Lichtspiele', 'Club-Kino']
const MOCKED_STREETS = ['Brnoer Straße', 'Bruno-Leuschner-Straße', 'Bruno-Plache-Straße', 'Dimitroffstraße zwischen Harkort- und Beethovenstraße', 'Dr.-Kurt-Fischer-Straße', 'Erich-Ferl-Straße', 'Ernst-Grube-Straße', 'Ernst-Thälmann-Straße', 'Frieda-Hockauf-Straße', 'Friedrich-Engels-Platz', 'Friedrich-Ludwig-Jahn-Allee', 'Fritz-Austel-Straße', 'Georgi-Dimitroff-Platz', 'Ho-Chi-Minh-Straße', 'Hugo-Joachim-Straße', 'Karl-Marx-Platz', 'Karl-Marx-Städter-Straße', 'Krakower Straße', 'Kurt-Kühn-Straße', 'Leninstraße', 'Maurice-Thorez-Straße', 'Otto-Nuschke-Straße', 'Paul-Heine-Straße', 'Philipp-Müller-Straße', 'Platz der Republik', 'Richard-Sorge-Straße', 'Rudkowskystraße', 'Rudolf-Hartig-Straße', 'Spartakusstraße', 'Straße der Aktivisten', 'Straße der Bauarbeiter', 'Straße der Befreiung', 'Straße der DSF', 'Straße der Jugend', 'Straße der Jungen Pioniere', 'Straße der Nationalen Volksarmee', 'Straße der Solidarität', 'Straße der Völkerfreundschaft', 'Straße der Waffenbrüderschaft', 'Straße des Komsomol', 'Wilhelm-Liebknecht-Platz', 'Wilhelm-Pieck-Allee', ]


const MOCKED_AUDITORIUM: Auditorium = {
  id: 'a0',
  projectors: ['35mm'],
  screen: '15m * 12m',
  sound: ['5.1', 'stereo', 'mono'],
}

export const CINEMA_DEFAULT_VALUES: Cinema = {
  id: '0',
  createdAt: '2020-10-30T09:32:19.196720000+0000',
  lastModifiedAt: '2020-11-30T10:32:19.196720000+0000',
  lat: 51.32654,
  long: 12.319058,
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
    text: CINEMA_DEFAULT_VALUES.text,
    lat: CINEMA_DEFAULT_VALUES.lat,
    long: CINEMA_DEFAULT_VALUES.long,
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
