import { FunctionComponent, Fragment } from "react";
import LocationCard from "../components/location-card";
import { locations } from "../data/locations";
import Page from "../components/page";
import Stack from "../components/stack";

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
        mapUrl={location.mapUrl}
        coordinates={location.coordinates}
      >
        {address}
      </LocationCard>
    );
  });

  return (
    <Page title="Food hubs">
      <div className="top">
        <img src="/kitchen.svg" className="illustration" />
        <h1>Find your local food hub</h1>
        <p>
          Anybody is welcome at the community foodbanks that{" "}
          <a
            href="https://childrenwithvoices.wixsite.com/london"
            target="_blank"
            rel="noopener"
          >
            Children with Voices
          </a>{" "}
          runs across East London.
        </p>
      </div>
      <Stack spacing="24px">{cards}</Stack>
      <p className="attribution">
        Base maps and data from OpenStreetMap and OpenStreetMap Foundation
        <br />© OpenStreetMap contributors
      </p>

      <style jsx>{`
        h1 {
          font-size: 3rem;
          line-height: 1.2em;
          margin: 0;
        }

        .illustration {
          width: 100%;
          margin-top: 24px;
          margin-bottom: 20px;
        }

        .top {
          margin-bottom: 26px;
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
