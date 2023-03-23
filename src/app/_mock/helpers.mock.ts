export const CHAR_NUMBERS = '0123456789'
export const CHAR_FULL = 'abcdefghijklmnopqrstuvwxyz0123456789';

export function mockNumber(min: number, max: number): number {
  return Math.round(Math.random() * (max - min)) + min;
}

export function mockCharString(len: number, charset: string): string {
  var text = '';
  for (var i = 0; i < len; i++) {
    text += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return text;
}

export function randomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export function addDays(date: Date, days: number): Date {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function sortByDate(time1: Date, time2: Date): number {
  return new Date(time1).getTime() - new Date(time2).getTime()
}
