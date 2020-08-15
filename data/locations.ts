enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

interface OpeningTime {
  day: Day;
  opens: string;
  closes: string;
}

interface Location {
  name: string;
  address: string;
  postcode: string;
  mapImage: string;
  openingTimes: OpeningTime[];
  coordinates: [number, number];
}

export const locations: Location[] = [
  {
    name: "De Beauvoir Meeting Room",
    address: "85 Downham Road",
    postcode: "N1 5TR",
    mapImage: "/images/beauvoir",
    openingTimes: [
      { day: Day.Monday, opens: "12:00", closes: "15:00" },
      { day: Day.Thursday, opens: "12:00", closes: "15:00" },
    ],
    coordinates: [51.539268, -0.083863],
  },
  {
    name: "Good Shepherd Mission",
    address: "10 Three Colts Lane, Bethnal Green",
    postcode: "E2 6JL",
    mapImage: "/images/shepherd",
    openingTimes: [{ day: Day.Monday, opens: "12:00", closes: "15:00" }],
    coordinates: [51.52435, -0.05957],
  },
  {
    name: "Gascoyne 1 Community Centre",
    address: "Gascoyne Road, Hackney",
    postcode: "E9 7FA",
    mapImage: "/images/gascoyne",
    openingTimes: [{ day: Day.Wednesday, opens: "14:00", closes: "16:00" }],
    coordinates: [51.5417, -0.03868],
  },
];
