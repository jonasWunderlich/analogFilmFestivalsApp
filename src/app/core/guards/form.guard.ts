import { CanDeactivateFn } from '@angular/router';
import { GenericContentFormComponent } from '../generics/generic-content-form.component';
import { Component } from '@angular/core';

export const formGuard: CanDeactivateFn<unknown> = (
  component: any,
  currentRoute,
  currentState,
  nextState
) => {
  return !component.hasUnsavedChanges;
};
