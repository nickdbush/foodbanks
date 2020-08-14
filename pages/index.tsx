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
        <div className="introduction">
          <h1>Find your local food hub</h1>
          <p>
            <a
              href="https://childrenwithvoices.wixsite.com/london"
              target="_blank"
              rel="noopener"
            >
              Children with Voices
            </a>{" "}
            runs three food hubs across East London, which are open to
            everybody.
          </p>
        </div>
      </div>
      <div className="bottom">
        <Stack spacing="24px">{cards}</Stack>
        <p className="attribution">
          Base maps and data from OpenStreetMap and OpenStreetMap Foundation
          <br />© OpenStreetMap contributors
        </p>
      </div>

      <style jsx>{`
        .top {
          margin-bottom: 16px;
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 870px) {
          .top {
            flex-direction: row;
            align-items: end;
            margin-bottom: 28px;
          }

          .introduction {
            flex-grow: 1;
            margin-left: 16px;
            position: relative;
            bottom: 25px;
          }
        }

        h1 {
          font-size: 3rem;
          line-height: 1.2em;
          margin: 0;
        }

        .illustration {
          width: 100%;
          max-width: 500px;
          margin-top: 24px;
          margin-bottom: 20px;
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
