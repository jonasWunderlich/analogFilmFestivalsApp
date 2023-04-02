import { Router } from '@angular/router';
import { Map, View } from 'ol';
import { FeatureLike } from 'ol/Feature';
import { Coordinate } from 'ol/coordinate';
import { boundingExtent } from 'ol/extent';

export function centerView(map: Map, coords: Coordinate[]): void {
  if (coords) {
    if (coords.length === 1) {
      map.setView(
        new View({
          center: coords[0],
          zoom: 15,
          maxZoom: 17,
        })
      );
    } else {
      map.getView().fit(boundingExtent(coords), { padding: [40, 40, 40, 40] });
      map.getView().setMaxZoom(16);
    }
  }
}

export function addClickHandling(map: Map, router: Router): void {
  map.on('click', (event) => {
    map.forEachFeatureAtPixel(event.pixel, (feature) => {
      if (feature.getProperties()['url']) {
        router.navigate([feature.getProperties()['url']]);
      }
    });
  });
}

export function addPointerHandling(map: Map): void {
  map.on('pointermove', (event) => {
    map.forEachFeatureAtPixel(event.pixel, (feature: FeatureLike) => {
      // TODO: HOVER effect
    });
  });
}
