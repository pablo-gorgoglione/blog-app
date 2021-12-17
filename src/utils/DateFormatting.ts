export function DateFormat(dateNoFormat: String) {
  let newDateNoFormat = dateNoFormat.replace(/T/, ' ').replace(/\..+/, '');
  return newDateNoFormat;
}
