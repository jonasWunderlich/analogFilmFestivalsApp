import {
  sample,
  uniqueId,
} from 'lodash';
import { DeepPartial } from '@ngneat/reactive-forms/lib/types';
import { randomDate } from './helpers.mock';
import { Report } from '../_models/report';

const MOCKED_REPORT_NAMES = ['Der Pate (1972)', 'The Dark Knight (2008)', 'Der Pate 2 (1974)', 'Die zwölf Geschworenen (1957)', 'Schindlers Liste (1993)', 'Der Herr der Ringe: Die Rückkehr des Königs (2003)', 'Pulp Fiction (1994)', 'Der Herr der Ringe: Die Gefährten (2001)', 'Zwei glorreiche Halunken (1966)', 'Forrest Gump (1994)', 'Fight Club (1999)', 'Der Herr der Ringe: Die zwei Türme (2002)', 'Inception (2010)', 'Das Imperium schlägt zurück (1980)', 'Matrix (1999)', 'GoodFellas - Drei Jahrzehnte in der Mafia (1990)', 'Einer flog über das Kuckucksnest (1975)', 'Sieben (1995)', 'Die sieben Samurai (1954)', 'Ist das Leben nicht schön? (1946)', 'Das Schweigen der Lämmer (1991)', 'Der Soldat James Ryan (1998)', 'City of God (2002)', 'Interstellar (2014)', 'Das Leben ist schön (1997)', 'The Green Mile (1999)', 'Krieg der Sterne (1977)', 'Terminator 2: Tag der Abrechnung (1991)', 'Zurück in die Zukunft (1985)', 'Chihiros Reise ins Zauberland (2001)', 'Der Pianist (2002)', 'Psycho (1960)', 'Parasite (2019)', 'Léon: Der Profi (1994)', 'Der König der Löwen (1994)', 'Gladiator (2000)', 'American History X (1998)', 'Departed: Unter Feinden (2006)', 'Prestige - Die Meister der Magie (2006)', 'Whiplash (2014)', 'Die üblichen Verdächtigen (1995)', 'Casablanca (1942)', 'Die letzten Glühwürmchen (1988)', 'Harakiri (1962)', 'Ziemlich beste Freunde (2011)', 'Moderne Zeiten (1936)', 'Spiel mir das Lied vom Tod (1968)', 'Cinema Paradiso (1988)', 'Das Fenster zum Hof (1954)', 'Alien - Das unheimliche Wesen aus einer fremden Welt (1979)', 'Lichter der Großstadt - Eine Komödien-Romance als Pantomime (1931)', 'Apocalypse Now (1979)', 'Memento (2000)', 'Django Unchained (2012)', 'Jäger des verlorenen Schatzes (1981)', 'WALL·E - Der Letzte räumt die Erde auf (2008)', 'Das Leben der Anderen (2006)', 'Boulevard der Dämmerung (1950)', 'Wege zum Ruhm (1957)', 'Shining (1980)', 'Der große Diktator (1940)', 'Avengers: Infinity War (2018)', 'Zeugin der Anklage (1957)', 'Alien 2 - Die Rückkehr (1986)', 'Spider-Man: A New Universe (2018)', 'American Beauty (1999)', 'Seltsam oder: Wie ich lernte, die Bombe zu lieben (1964)', 'The Dark Knight Rises (2012)', 'Oldboy (2003)', 'Inglourious Basterds (2009)', 'Amadeus (1984)', 'Coco: Lebendiger als das Leben (2017)', 'Toy Story (1995)', 'Joker (2019)', 'Braveheart (1995)', 'Das Boot (1981)', 'Avengers: Endgame (2019)', 'Prinzessin Mononoke (1997)', 'Es war einmal in Amerika (1984)', 'Good Will Hunting: Der gute Will Hunting (1997)', '(2016)', 'Du sollst mein Glücksstern sein (1952)', '3 Idiots (2009)', 'Requiem for a Dream (2000)', 'Zwischen Himmel und Hölle (1963)', 'Toy Story 3 (2010)', 'Capernaum: Stadt der Hoffnung (2018)', 'Die Rückkehr der Jedi-Ritter (1983)', 'Vergiss mein nicht (2004)', '2001: Odyssee im Weltraum (1968)', 'Komm und sieh (1985)', 'Reservoir Dogs: Wilde Hunde (1992)', 'Die Jagd (2012)', 'Citizen Kane (1941)', 'M: Eine Stadt sucht einen Mörder (1931)', 'Lawrence von Arabien (1962)', 'Der unsichtbare Dritte (1959)', 'Ikiru - Einmal wirklich leben (1952)', 'Aus dem Reich der Toten (1958)', 'Das Appartement (1960)', 'Die fabelhafte Welt der Amelie (2001)', 'Uhrwerk Orange (1971)', 'Frau ohne Gewissen (1944)', 'Full Metal Jacket (1987)', 'Scarface (1983)', 'Hamilton (2020)', 'Die Frau die singt - Incendies (2010)', 'Heat (1995)', 'Wer die Nachtigall stört (1962)', 'Oben (2009)', 'Der Clou (1973)', 'Nader und Simin - eine Trennung (2011)', 'Metropolis (1927)', 'Taxi Driver (1976)', 'Confidential (1997)', 'Stirb langsam (1988)', 'Snatch: Schweine und Diamanten (2000)', 'Indiana Jones und der letzte Kreuzzug (1989)', 'Top Gun: Maverick (2022)', 'Fahrraddiebe'];

export const REPORT_DEFAULT_VALUES: Report = {
  id: '0',
  createdAt: '2020-10-30T09:32:19.196720000+0000',
  lastModifiedAt: '2020-11-30T10:32:19.196720000+0000',
  name: MOCKED_REPORT_NAMES[1],
  text: `Busey ipsum dolor sit amet. You ever roasted doughnuts?Have you urinated? Have you drained your bladder? Are you free? Because if you haven't it will only come out later. I'm giving you some information that your bodily fluids may penetrate your clothing fibre's without warning.
  When you get lost in your imaginatory vagueness, your foresight will become a nimble vagrant.It's good to yell at people and tell people that you're from Tennesee, so that way you'll be safe.Have you urinated? Have you drained your bladder? Are you free? Because if you haven't it will only come out later. I'm giving you some information that your bodily fluids may penetrate your clothing fibre's without warning.
  The magic Indian is a mysterious spiritual force, and we're going to Cathedral Rock, and that's the vortex of the heart.You ever roasted doughnuts?It's good to yell at people and tell people that you're from Tennesee, so that way you'll be safe.Listen to the silence. And when the silence is deafening, you're in the center of your own universe.
  These kind of things only happen for the first time once.When you get lost in your imaginatory vagueness, your foresight will become a nimble vagrant.The best way to communicate is compatible. Compatible communication is listening with open ears and an open mind, and not being fearful or judgemental about what you're hearing.
  I would like to give you a backstage pass to my imagination.You ever roasted doughnuts?The magic Indian is a mysterious spiritual force, and we're going to Cathedral Rock, and that's the vortex of the heart.I wrestled a bear once. A 750lbs black bear.`,
  date: randomDate(new Date(), new Date(2022, 9, 0)),
  images: ['asdf', 'sdfg'],
};


/**
 * Create mocked Report.
 *
 * Simple creation of Report that only needs the most basic information.
 * All data is filled with EVENT_DEFAULT_VALUES and mock values.
 *
 * @param reportValues: Partial<Report> data to overwrite default values
 *
 * @example mockReport({name: 'Hofbauer Kongress'})
 */
export function mockReport(reportValues: DeepPartial<Report>): Report {
  const id = uniqueId();
  const date = randomDate(new Date(), new Date(2023, 12, 0));
  const defaultValues: Report = {
    id,
    createdAt: REPORT_DEFAULT_VALUES.createdAt,
    lastModifiedAt: REPORT_DEFAULT_VALUES.lastModifiedAt,
    name: sample(MOCKED_REPORT_NAMES),
    text: REPORT_DEFAULT_VALUES.text,
    date,
  };
  return {
    ...defaultValues,
    ...reportValues,
  } as Report;
}

/**
 * Create mocked list of Reports.
 *
 * Simple creation of Report list that only needs the most basic information.
 * All data is filled with REPORT_DEFAULT_VALUES and mock values.
 *
 * @param amount: Length of List
 *
 * @example mockReports(10)
 */
export function mockReports(amount: number): Report[] {
  const reports: Report[] = [];
  for (let i = 0; i < amount; i++) {
    reports.push(mockReport({}))
  }
  return reports;
}
