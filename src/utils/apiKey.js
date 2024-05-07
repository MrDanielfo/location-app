export const accessToken =
  "pk.eyJ1IjoibXJkYW5pZWxmbyIsImEiOiJjazBsNnU2cmwwOW51M2hsYXlhZGtleTZlIn0.BPDChpjbrbsm__oLc1ZMrw";

export function retrieveUrl(longitude, latitude, token) {
  const url = `https://api.mapbox.com/search/geocode/v6/reverse?longitude=${longitude}&latitude=${latitude}&access_token=${token}`;
  return url;
}
