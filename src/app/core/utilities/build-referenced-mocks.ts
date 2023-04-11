/** M O C K S */

import { mockCinemas } from '../_mock/cinema.mock';
import { mockScreeningEvents } from '../_mock/event.mock';
import { mockProjections } from '../_mock/projection.mock';
import { mockReports } from '../_mock/report.mocks';
import { Auditorium } from '../_models/auditorium';
import { Cinema } from '../_models/cinema';
import { Report } from '../_models/report';
import { getRandomSubarray, mockNumber } from './mock-data';
import { ScreeningEvent } from '../_models/screening-event';
import { Projection } from '../_models/projection';
import { ScreeningEventType } from '../_models/sceening-event-type';
import { mockAuditoriums } from '../_mock/auditorium.mock';

const MAX_CINEMAS = 100;
const MAX_EVENTS = 20;
const MAX_REPORTS = 2;

export interface ReferencedMockData {
  cinemas: Cinema[];
  auditoriums: Auditorium[];
  screeningEvents: ScreeningEvent[];
  projections: Projection[];
  reports: Report[];
}

export function buildRefrencedApiMocks(): ReferencedMockData {
  let allAuditoriums: Auditorium[] = [];
  let allProjections: Projection[] = [];
  let allReports: Report[] = [];

  // CREATE CINEMAS
  const allCinemas: Cinema[] = mockCinemas(MAX_CINEMAS);
  // CREATE AUDITORIUMS FOR EACH CINEMA
  allCinemas.forEach((cinema) => {
    const cinemaAuditoriums = mockAuditoriums(mockNumber(1, 12), {
      cinemaRef: cinema.id,
    });
    cinema.auditoriumRefs = cinemaAuditoriums.map((item) => item.id);
    allAuditoriums = allAuditoriums.concat(cinemaAuditoriums);
  });

  // CREATE PROJECTIONS
  const allScreeningEvents = mockScreeningEvents(MAX_EVENTS);

  // FOR EACH PROJECTION CREATE NESTED OBJECTS
  allScreeningEvents.forEach((event) => {
    const filteredCinemas = allCinemas.filter(
      (cinema) => cinema.city == event.city
    );
    const maxEventCinemas =
      event.type === ScreeningEventType.SINGLE ? 1 : filteredCinemas.length;
    const eventCinemas = getRandomSubarray(
      filteredCinemas,
      mockNumber(1, maxEventCinemas)
    );

    // CREATE PROJECTIONS
    eventCinemas.forEach((cinema) => {
      // BUILD EVENT REFERENCE FOR CINEMA
      cinema.eventRefs = cinema?.eventRefs
        ? [...cinema.eventRefs, event.id]
        : [event.id];

      // BUILD PROJECTIONS FOR CINEMA
      const eventCinemaProjections = mockProjections(
        event.type === ScreeningEventType.SINGLE
          ? mockNumber(1, 2)
          : mockNumber(2, 5),
        new Date(event.start),
        400, // TOOD: use event end
        cinema.id
      );

      eventCinemaProjections.forEach((proj) => {
        // BUILD PROJECTION REPORT REFERENCES
        const projectionReports = mockReports(mockNumber(0, MAX_REPORTS), {
          projectionRef: proj.id,
        });
        const reportRefs = projectionReports.map((item) => item.id);
        proj.reportRefs = proj?.reportRefs
          ? [...proj.reportRefs, ...reportRefs]
          : reportRefs;
        allReports = allReports.concat(projectionReports); // ADD TO ALL REPORTS
      });

      // BUILD CINEMA REPORT/EVENT REFERENCES
      const projectionRefs = eventCinemaProjections.map((item) => item.id);
      cinema.projectionRefs = cinema?.projectionRefs
        ? [...cinema.projectionRefs, ...projectionRefs]
        : projectionRefs;
      event.projectionRefs = event?.projectionRefs
        ? [...event.projectionRefs, ...projectionRefs]
        : projectionRefs;
      allProjections = allProjections?.concat(eventCinemaProjections); // ADD TO ALL PROJECTIONS

      // BUILD CINEMA REPORT REFERENCES
      const cineaReports = mockReports(mockNumber(0, MAX_REPORTS), {
        cinemaRef: cinema.id,
      });
      const reportRefs = cineaReports.map((item) => item.id);
      cinema.reportRefs = cinema?.reportRefs
        ? [...cinema.reportRefs, ...reportRefs]
        : reportRefs;
      allReports = allReports.concat(cineaReports); // ADD TO ALL REPORTS
    });

    // BUILD EVENT CINEMA REFERENCES
    const cinemaRefs = eventCinemas.map((item) => item.id);
    event.cinemaRefs = event?.cinemaRefs
      ? [...event.cinemaRefs, ...cinemaRefs]
      : cinemaRefs;

    // BUILD EVENT REPORTS REFERENCES
    const eventReports = mockReports(mockNumber(0, MAX_REPORTS), {
      eventRef: event.id,
    });
    const reportRefs = eventReports.map((item) => item.id);
    event.reportRefs = event?.reportRefs
      ? [...event.reportRefs, ...reportRefs]
      : reportRefs;
    allReports = allReports.concat(eventReports); // ADD TO ALL REPORTS
  });

  return {
    cinemas: allCinemas.filter((cinema) => cinema.eventRefs?.length),
    auditoriums: allAuditoriums,
    screeningEvents: allScreeningEvents,
    projections: allProjections,
    reports: allReports,
  };
}
