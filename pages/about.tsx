import { FunctionComponent } from "react";
import Page from "../components/page";
import Link from "next/link";
import { locations } from "../data/locations";
import { printNumber } from "../utils/formatting";
import Stack from "../components/stack";
import ImageCard from "../components/image-card";
import { RiInstagramLine } from "react-icons/ri";

const friends: {
  name: string;
  description?: string;
  quote?: { text: string; from: string };
  insta?: string;
}[] = [
  {
    name: `FareShare`,
    description: `FareShare is the UK’s national network of charitable food redistributors, made up of 17 independent organisations. Together, we take good quality surplus food from right across the food industry and get it to almost 11,000 frontline charities and community groups.
      They have been supporting us for over nine years, and we wouldn't be able to do what we do without them.`,
  },
  {
    name: `Neighbourly`,
    description: `Neighbourly is an award-winning giving platform that helps businesses make a positive impact in their communities by donating volunteer time, money and surplus products, all in one place.`,
  },
  {
    name: `Lloyd's Insurance`,
    description: `Peter, who has been providing meals to us for over 6 months, applied to Lloyd's on our behalf and received funds that will secure his cooking till October.`,
    quote: {
      text: `Wow! Thats amazing well done to you And your team. The more people that see and hear about the great work you are doing the better. Will generate more interest. Raising the profile and hopefully changing things for the better long term. Take care stay safe`,
      from: `Peter`,
    },
    insta: `https://instagram.com/lloydsoflondon`,
  },
  {
    name: `Gallery Cafe`,
    description: `Lena provides great quality organic food and has been doing so for over 4 months now. She too wants to continue to provide these amazing meals to the community.`,
    quote: {
      text: `Hiya Michelle 👋🏾 Sorry it’s take me a little while to come back to you. I really appreciate you taking the time out of your busy schedule to send me this message. I’m just so sorry you’ve had such a difficult time trying to stay on at the Wilton Estate. It sucks and I appreciate it hurts. But no one can take ANYTHING away from all you have done. All the joy you’ve created, all the hope, the love, the connections, the community, the vibes. All the people you’ve empowered, the lives you’ve saved and boosted. The families you’ve bought together. The amount of days you’ve made for delivery drivers and volunteers. This comes as a knock, but you can’t keep a good thing down. Light always finds its way. Keep the faith Michelle. My heart goes to you and you’ve got heaps of positive energy on your side from everyone you help and work with 💛`,
      from: `Lena`,
    },
    insta: `https://instagram.com/the_gallerycafe`,
  },
  {
    name: `Food for All`,
    description: `Food For All is an entirely volunteer run food relief charity based in central London. They provide thousands of meals to vulnerable people every day.`,
    quote: {
      text: `hey Michelle :) hope you've had a great start to the week and the collection yesterday went smoothly`,
      from: `Lawrence`,
    },
    insta: `https://instagram.com/foodforallhq`,
  },
  {
    name: `The Ivy`,
    insta: `https://instagram.com/theivywestst`,
  },
];

const organisationsSupported = [
  "The NHS",
  "Shuttleworth hostel",
  "St Mungo hostel",
  "Edward Gibson hostel",
  "Look ahead project  hostel",
  "The Metropolitan hostel",
  "Esdale hostel",
];

const photos: { url: string; alt: string }[] = [
  { url: "/images/food-at-door.jpg", alt: "A box of food outside a door" },
  { url: "/images/food-boxes.jpg", alt: "A stack of food boxes" },
  {
    url: "/images/food-boxes-2.jpg",
    alt: "Boxes container vegetables, milk, bread, juice",
  },
  { url: "/images/food-in-car.jpg", alt: "Boxes of food being donated" },
  { url: "/images/volunteer.jpg", alt: "One of our volunteers donating food" },
  {
    url: "/images/volunteers.jpg",
    alt: "Some of our volunteers posing for a photograph",
  },
];

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
        , for all the latest updates. You can help out too — drop us a message
        on Insta and we'll get back to you.
      </p>
      <p>
        The community food hub project is run by the non-profit organisation{" "}
        <a href="https://childrenwithvoices.wixsite.com/london" target="_blank">
          Children with Voices
        </a>
        . We run projects for young people across Hackney, teaching life skills
        like cooking, healthy eating, exercise and community building. We
        believe that learning these things at an early age helps children to
        navigate growing up, especially for people in areas that have long been
        ignored by traditional educational programmes.
      </p>
      <h1>Our friends</h1>
      <p>
        We're supported by some fantastic partners. Without their help we would
        not be able to provide the healthy food, fresh fruit and nutritious
        vegetables to our community for free. It's not just companies though: we
        are indebted to all of our friends who donate whatever they can.
      </p>
      {friends.map((org) => (
        <div key={org.name}>
          <h2>
            {org.name}{" "}
            {org.insta && (
              <a href={org.insta} target="_blank" rel="noopener">
                <RiInstagramLine style={{ position: "relative", top: "4px" }} />
              </a>
            )}
          </h2>
          {org.description &&
            org.description.split("\n").map((text, i) => <p key={i}>{text}</p>)}
          {org.quote && (
            <blockquote>
              {org.quote.text}
              {org.quote?.from && <em> — {org.quote.from}</em>}
            </blockquote>
          )}
        </div>
      ))}
      <h1>Organisations we support</h1>
      <ul>
        {organisationsSupported.map((organisation) => (
          <li key={organisation}>{organisation}</li>
        ))}
      </ul>
      <h1 style={{ marginBottom: "0" }}>Press</h1>
      <p>
        <a
          href="https://www.theguardian.com/society/2020/may/03/exclusive-fifth-of-uk-homes-children-hungry-lockdown"
          target="_blank"
          rel="noopener"
        >
          Exclusive: almost a fifth of UK homes with children go hungry in
          lockdown <em>(The Guardian)</em>
        </a>
      </p>
      <p>
        <a
          href="https://www.youtube.com/watch?v=nLyc-33Og9U"
          target="_blank"
          rel="noopener"
        >
          30th Lord Mayor's Dragon Awards - Innovation Award 2017 Keytree{" "}
          <em>(YouTube)</em>
        </a>
      </p>
      <h1>Images</h1>
      <div className="images">
        <Stack spacing="24px" minWidth="250px">
          {photos.map((photo) => (
            <ImageCard key={photo.url} url={photo.url} alt={photo.alt} />
          ))}
        </Stack>
      </div>
      <style jsx>{`
        .illustration {
          margin-top: 16px;
          max-width: 350px;
          cursor: pointer;
        }

        h1,
        p,
        blockquote {
          max-width: 80ch;
        }

        p,
        blockquote {
          line-height: 1.4em;
        }

        blockquote {
          margin-left: 0;
          margin-right: 0;
          padding: 16px;
          background-color: #f7f9fc;
          border-radius: 6px;
          border: 1px solid rgba(0, 0, 0, 0.04);
          box-sizing: border-box;
        }

        .images {
          margin: 32px 0;
        }
      `}</style>
    </Page>
  );
};

export default AboutPage;
