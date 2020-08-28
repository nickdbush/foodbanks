import { FunctionComponent, useState } from "react";
import { RiDirectionLine, RiShareLine, RiFileCopyLine } from "react-icons/ri";
import { makeDirectionsUrl, makeMapUrl } from "../utils/map";
import { minCardWidth } from "./stack";
import { interleave } from "../utils/interleave";

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
          background-color: white;
          transition: background-color 150ms ease;
        }

        .container:hover {
          background-color: #f5f5f5;
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
  mapImage: string;
  name: string;
  address: string;
  coordinates: [number, number];
  times: string[];
}> = ({ name, address, children, mapImage, coordinates, times }) => {
  const openMap = () => {
    const url = makeMapUrl(coordinates);
    window.open(url, "_blank");
  };
  const openDirections = () => {
    const url = makeDirectionsUrl(coordinates);
    window.open(url, "_blank");
  };

  const shareText = `Community food hub at ${name}
${address.split(", ").join(",\n")}

Open ${times.join(" and ")}`;

  const canShare = typeof window != "undefined" && "share" in window.navigator;
  const share = () => {
    navigator.share({
      url: window.location.href,
      title: `${name} community food hub`,
      text: shareText,
    });
  };

  const canCopy =
    typeof window != "undefined" && "clipboard" in window.navigator;
  const [hasCopied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(shareText);
    setCopied(true);
  };
  const timeText =
    times &&
    interleave(
      times.map((time) =>
        interleave(time.split(" "), (i) => <span key={i + "br"}>&nbsp;</span>)
      ),
      (i) => <span key={i + "sep"}>, </span>
    );
  return (
    <div className="container">
      <div className="shadow"></div>
      <div className="content">
        <div className="map-container" onClick={openMap}>
          <img
            srcSet={`${mapImage}.png 1x, ${mapImage}-2x.png 2x`}
            className="map"
            width={minCardWidth * 2}
            height={mapHeight}
          />
          <div className="map-hover">
            <p>Open map</p>
          </div>
        </div>
        <div className="body">
          <div className="name">{name}</div>
          <div className="address">{children}</div>
          {times && <div className="times">{timeText}</div>}
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
          {!canShare && canCopy && (
            <CardButton icon={<RiFileCopyLine />} onClick={copy}>
              {hasCopied ? "Copied" : "Copy"}
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
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .map-container:hover .map-hover {
          transform: scale(1);
          opacity: 1;
          transition: transform 150ms cubic-bezier(0.17, 0.84, 0.44, 1),
            opacity 150ms ease;
        }

        .map-hover {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background-color: rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(0);
          opacity: 0;
          transition: transform 150ms cubic-bezier(0.9, 0.03, 0.69, 0.22),
            opacity 150ms ease;
          color: white;
          text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.45);
          pointer-events: none;
          font-weight: bold;
        }

        .map-container:hover .map {
          filter: blur(1px) brightness(95%);
        }

        .map {
          background-color: white;
          min-width: ${minCardWidth * 2}px;
          min-height: ${mapHeight}px;
          box-shadow: inset 0px -1px 5px rgba(0, 0, 0, 0.06);
          cursor: pointer;
          object-fit: cover;
          object-position: center center;
          width: auto;
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

        .times {
          margin-top: 16px;
        }

        .buttons {
          display: flex;
          flex-direction: row;
        }

        .buttons > :global(div):not(:last-of-type) {
          border-right: 1px solid var(--border-colour);
        }
      `}</style>
    </div>
  );
};

export default LocationCard;
