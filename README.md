# AnalogCinemaApp

Angular Frontend App für eine Archiv von analogen Filmevents

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## TODOs

- Mocks einmalig generieren
- Popup in Kalender
- Popup in Karte
- Festival als einheitliche Punkte in Karte
- Punkte in Karte schöner gestalten
- Events in Festivals, Reihe und Specials aufteilen

## Geplante Backend Endpunkte

Events: 
`analogkino.net/backend/event`
`analogkino.net/backend/event/:id`
`analogkino.net/backend/event/:id/auditoriums`
`analogkino.net/backend/event/:id/projections`
`analogkino.net/backend/event/:id/reports`
`analogkino.net/backend/event/type/:type`

Kinos:
`analogkino.net/backend/cinema/`
`analogkino.net/backend/cinema/:id`
`analogkino.net/backend/cinema/:id/auditoriums`
`analogkino.net/backend/cinema/:id/projections`
`analogkino.net/backend/cinema/:id/reports`

Erfahrungsberichte:
`analogkino.net/backend/report/`
`analogkino.net/backend/report/:id`

Aufführungen:
`analogkino.net/backend/projection/`
`analogkino.net/backend/projection/:id`
`analogkino.net/backend/cinprojectionema/:id/reports`
