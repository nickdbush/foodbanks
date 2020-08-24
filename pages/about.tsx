import { FunctionComponent } from "react";
import Page from "../components/page";
import Link from "next/link";
import { locations } from "../data/locations";
import { printNumber } from "../utils/formatting";
import Stack from "../components/stack";
import ImageCard from "../components/image-card";

const AboutPage: FunctionComponent<{}> = ({}) => {
  return (
    <Page title="About">
      <Link href="/">
        <img src="/logo.svg" className="illustration" />
      </Link>
      <h1>About your community food hubs</h1>
      <p>
        Everybody is welcome at our community food hubs, regardless of income or
        background. Using a food hub costs nothing. Healthy eating should be
        accessible to everyone, and we pride ourselves on providing high-quality
        and fresh ingredients.
      </p>
      <p>
        Our {printNumber(locations.length)} locations are staffed by volunteers
        and have limited opening hours, which you can find on our{" "}
        <Link href="/">homepage</Link>. Check out our Instagram,{" "}
        <a href="https://www.instagram.com/community_food_hub/" target="_blank">
          @community_food_hub
        </a>
        , for all the latest updates.
      </p>
      <p>
        The community food hub project is run by the non-profit organisation{" "}
        <a href="https://childrenwithvoices.wixsite.com/london" target="_blank">
          Children with Voices
        </a>
        .
      </p>
      <div className="images">
        <Stack spacing="24px" minWidth="250px">
          <ImageCard
            url="/images/food-at-door.jpg"
            alt="A box of food outside a door"
          />
          <ImageCard url="/images/food-boxes.jpg" alt="A stack of food boxes" />
          <ImageCard
            url="/images/food-boxes-2.jpg"
            alt="Boxes container vegetables, milk, bread, juice"
          />
          <ImageCard
            url="/images/food-in-car.jpg"
            alt="Boxes of food being donated"
          />
          <ImageCard
            url="/images/volunteer.jpg"
            alt="One of our volunteers donating food"
          />
          <ImageCard
            url="/images/volunteers.jpg"
            alt="Some of our volunteers posing for a photograph"
          />
        </Stack>
      </div>
      <style jsx>{`
        .illustration {
          margin-top: 16px;
          max-width: 350px;
        }

        h1,
        p {
          max-width: 80ch;
        }

        p {
          line-height: 1.4em;
        }

        .images {
          margin-top: 32px;
        }
      `}</style>
    </Page>
  );
};

export default AboutPage;
