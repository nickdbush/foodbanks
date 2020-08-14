import { FunctionComponent } from "react";
import { RiDirectionLine, RiShareLine } from "react-icons/ri";
import { makeDirectionsUrl, makeMapUrl } from "../utils/map";
import { minCardWidth } from "./stack";

export const mapHeight = 250;

const CardButton: FunctionComponent<{ icon: any; onClick: () => void }> = ({
  icon,
  children,
  onClick,
}) => {
  return (
    <div className="container" onClick={onClick}>
      <div className="icon">{icon}</div>
      <div>{children}</div>
      <style jsx>{`
        .container {
          flex: 1;
          border-top: 1px solid var(--border-colour);
          padding: var(--button-y) var(--padding-x);
          line-height: 1em;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .icon {
          margin-right: 8px;
          position: relative;
          top: 1px;
          font-size: 20px;
        }

        .container:not(:last-of-type) {
          border-right: 1px solid var(--border-colour);
        }
      `}</style>
    </div>
  );
};

const LocationCard: FunctionComponent<{
  mapUrl: string;
  name: string;
  address: string;
  coordinates: [number, number];
}> = ({ name, address, children, mapUrl, coordinates }) => {
  const canShare = typeof window != "undefined" && "share" in window.navigator;
  const openMap = () => {
    const url = makeMapUrl(coordinates);
    window.open(url, "_blank");
  };
  const openDirections = () => {
    const url = makeDirectionsUrl(coordinates);
    window.open(url, "_blank");
  };
  const share = () => {
    navigator.share({
      url: window.location.href,
      title: `${name} community food hub`,
      text: `Community food hub at ${name}\n${address
        .split(", ")
        .join(",\n")}\n\n`,
    });
  };
  return (
    <div className="container">
      <div className="shadow"></div>
      <div className="content">
        <div className="map-container">
          <img
            src={mapUrl}
            className="map"
            onClick={openMap}
            width={minCardWidth * 2}
            height={mapHeight}
          />
        </div>
        {/* <Chip colour={isOpen ? "green" : "grey"}>
        {isOpen ? "Open" : "Closed"}
      </Chip> */}
        <div className="body">
          <div className="name">{name}</div>
          <div className="address">{children}</div>
        </div>
        <div className="buttons">
          <CardButton icon={<RiDirectionLine />} onClick={openDirections}>
            Directions
          </CardButton>
          {canShare && (
            <CardButton icon={<RiShareLine />} onClick={share}>
              Share
            </CardButton>
          )}
        </div>
      </div>
      <style jsx>{`
        --border-colour: #f0f0f0;
        --shadow-offset: 10px;
        --padding-x: 16px;
        --padding-y: 16px;
        --button-y: 16px;

        .container {
          position: relative;
          width: 100%;
        }

        .content {
          height: 100%;
          border-radius: 4px;
          background-color: white;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .shadow {
          z-index: -1;
          position: absolute;
          top: 15px;
          bottom: 0;
          left: var(--shadow-offset);
          right: var(--shadow-offset);
          box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.09);
        }

        .map-container {
          height: ${mapHeight}px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .map {
          background-color: white;
          min-width: ${minCardWidth * 2}px;
          min-height: ${mapHeight}px;
          background-size: cover;
          background-position: center;
          box-shadow: inset 0px -1px 5px rgba(0, 0, 0, 0.06);
          cursor: pointer;
          object-fit: cover;
          object-position: center center;
        }

        .body {
          padding: var(--padding-y) var(--padding-x);
          flex-grow: 1;
        }

        .name {
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 3px;
        }

        .buttons {
          display: flex;
          flex-direction: row;
        }

        .buttons .button:not(:last-of-type) {
          border-right: 1px solid var(--border-colour);
        }
      `}</style>
    </div>
  );
};

export default LocationCard;
