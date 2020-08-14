function getMapUrlScheme(): string {
  if (
    typeof window != "undefined" &&
    (navigator.platform.indexOf("iPhone") != -1 ||
      navigator.platform.indexOf("iPad") != -1 ||
      navigator.platform.indexOf("iPod") != -1)
  ) {
    return "maps";
  } else {
    return "https";
  }
}

export function makeMapUrl(coordinates: [number, number]): string {
  const scheme = getMapUrlScheme();
  let url = `${scheme}://maps.google.com/maps/search/?`;
  url += [`api=1`, `query=${encodeURIComponent(coordinates.join())}`].join("&");
  return url;
}

export function makeDirectionsUrl(coordinates: [number, number]): string {
  const scheme = getMapUrlScheme();
  let url = `${scheme}://maps.google.com/maps/dir/?`;
  url += [
    `api=1`,
    `destination=${encodeURIComponent(coordinates.join())}`,
    `travelmode=walking`,
  ].join("&");
  return url;
}
