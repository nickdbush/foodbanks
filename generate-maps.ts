import dotenv from "dotenv";
import fs from "fs";
import qs from "querystring";
import axios from "axios";
import { locations } from "./data/locations";
import { mapHeight } from "./components/location-card";
import { minCardWidth } from "./components/stack";

dotenv.config({ path: ".env.local" });

const save = (filename: string) => (buffer: any) => {
  fs.writeFileSync(filename, buffer);
  console.log(`Saved ${filename}`);
};

const baseUrl = "https://maps.googleapis.com/maps/api/staticmap";
const densities = [1, 2];

(async () => {
  for (const location of locations) {
    for (const density of densities) {
      const params = {
        center: location.coordinates.join(),
        size: [Math.min(minCardWidth * 2, 640), Math.min(mapHeight, 640)].join(
          "x"
        ),
        maptype: "roadmap",
        scale: density,
        zoom: 13,
        format: "png",
        style: ["poi.attraction", "poi.business", "poi.government"].map(
          (element) => `feature:${element}|visibility:off`
        ),
        markers: [
          `size:small`,
          `scale:${density}`,
          location.coordinates.join(","),
        ].join("|"),
        key: process.env.GOOGLE_API_KEY,
      };
      const url = baseUrl + "?" + qs.stringify(params);
      const response = await axios.get(url, { responseType: "arraybuffer" });
      const buffer = response.data;

      let filename = "./public" + location.mapImage;
      if (density != 1) filename += `-${density}x`;
      filename += ".png";

      save(filename)(buffer);
    }
  }
})()
  .then(() => {
    console.log("Completed");
  })
  .catch((err) => console.error(err));
