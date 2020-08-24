import { FunctionComponent, Fragment } from "react";
import LocationCard from "../components/location-card";
import { locations } from "../data/locations";
import Page from "../components/page";
import Stack from "../components/stack";
import Link from "next/link";
import { printNumber } from "../utils/formatting";

function interleave(array: any[], x: (i: number) => any): any[] {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i]);
    if (i < array.length - 1) output.push(x(i));
  }
  return output;
}

const IndexPage: FunctionComponent<{}> = ({}) => {
  const cards = locations.map((location) => {
    const addressParts = [
      ...location.address.split(", "),
      location.postcode,
    ].map((part, i) =>
      interleave(part.split(" "), (j) => (
        <Fragment key={[i, j].join()}>&nbsp;</Fragment>
      ))
    );
    const address = interleave(addressParts, () => ", ");
    return (
      <LocationCard
        key={location.name}
        name={location.name}
        address={[location.address, location.postcode].join(", ")}
        mapImage={location.mapImage}
        coordinates={location.coordinates}
      >
        {address}
      </LocationCard>
    );
  });

  return (
    <Page title="Food hubs">
      <div className="top">
        <img src="/logo.svg" className="illustration" />
        <div className="introduction">
          <h1>Find your local food hub</h1>
          <p>
            Children with Voices runs {printNumber(locations.length)} food hubs
            across East London, which are open to everybody.{" "}
            <Link href="/about">Find out more</Link>.
          </p>
        </div>
      </div>
      <div className="bottom">
        <Stack spacing="24px" minWidth="300px">
          {cards}
        </Stack>
        <p className="attribution">Maps © Google {new Date().getFullYear()}</p>
      </div>

      <style jsx>{`
        .top {
          margin-top: 16px;
          margin-bottom: 30px;
        }

        h1 {
          font-size: 2rem;
          line-height: 1.15em;
          margin: 0;
        }

        p {
          margin: 0;
          padding: 0;
          margin-top: 25px;
        }

        .illustration {
          width: 100%;
          max-width: 350px;
          margin-bottom: 30px;
        }

        .attribution {
          margin-top: 48px;
          font-size: 0.8rem;
          margin-bottom: 0;
        }
      `}</style>
    </Page>
  );
};

export default IndexPage;
