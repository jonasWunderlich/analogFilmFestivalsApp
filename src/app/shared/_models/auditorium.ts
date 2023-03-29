import { Report } from './report';

export const AUDITORIUM_ATTRIBUTES = [
  { id: 'climate', name: 'Klimaanlage' },
  { id: 'pair-seats', name: 'Pärchensitze' },
  { id: 'curved-screen', name: 'gekrümmte Leinwand' },
  { id: 'loge', name: 'Loge' },
  { id: 'leg-space', name: 'Beinfreiheit' },
  { id: 'piano', name: 'Klavier' },
  { id: 'bar', name: 'Bar im Kino' },
];

export const AUDITORIUM_PROJECTORS = [
  { id: '70mm', name: '70mm Projektor :)' },
  { id: '1x35mm', name: 'Nur ein 35mm Projektor' },
  { id: '2x35mm', name: '35mm Überblendbetrieb' },
  { id: 'dcp', name: 'DCP' },
  { id: 'bluray', name: 'Bluray' },
  { id: '16mm', name: '16mm' },
  { id: '8mm', name: '8mm' },
];

export const AUDITORIUM_SOUND = [
  { id: '7.1', name: '7.1' },
  { id: '5.1', name: '5.1' },
  { id: 'stereo', name: 'Stereo' },
  { id: 'mono', name: 'Mono' },
];

export interface AuditoriumCreate {
  title: string;
  attributes: string[];
  projectors: string[];
  screen: string;
  seats: number;
  sound: string[];
  text: string;
}

export interface Auditorium extends AuditoriumCreate {
  id: string;
  createdAt: string;
  lastModifiedAt: string;
  title: string;
  attributes: string[];
  projectors: string[];
  screen: string;
  seats: number;
  sound: string[];
  text: string;

  // TODO: Fix reference models
  reports?: Report[];
  reportRefs?: string[];
}
