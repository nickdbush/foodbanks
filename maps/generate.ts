import osm from "osm-static-maps";
import fs from "fs";
import { locations } from "../data/locations";

function genJson(coordinates: [number, number]): any {
  // For some reason, OSM takes [long, lat] instead of [lat, long]
  return { type: "Point", coordinates: coordinates.reverse() };
}

const save = (filename: string) => (buffer: any) => {
  fs.writeFileSync(filename, buffer);
  console.log(`Saved ${filename}`);
};

locations
  .map((location) => {
    return {
      filename: "./public" + location.mapUrl,
      coordinates: location.coordinates,
    };
  })
  .forEach(({ filename, coordinates }) => {
    osm({
      geojson: genJson(coordinates),
      zoom: 15,
      type: "jpeg",
      imagemin: true,
      attribution: "",
    })
      .then(save(filename))
      .catch((err) => console.error(filename + ": " + err));
  });
