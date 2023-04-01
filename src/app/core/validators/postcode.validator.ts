import { ValidatorFn } from '@angular/forms';

export const postCodeFormat: ValidatorFn = function (control) {
  if (!control.value) {
    return null;
  }

  const numbers = control.value.replace(/-/g, '');
  const postCodePattern = /(^\d{4}$)|(^\d{5}$)/;

  if (postCodePattern.test(numbers)) {
    return null;
  } else {
    return {
      isbnFormat: { valid: false },
    };
  }
};
