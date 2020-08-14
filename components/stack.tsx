import { FunctionComponent } from "react";

export const minCardWidth = 320;

const Stack: FunctionComponent<{ spacing: string }> = ({
  children,
  spacing,
}) => {
  return (
    <div className="container">
      {children}

      <style jsx>{`
        --min-card-width: 300px;

        .container {
          display: grid;
          grid-gap: ${spacing};
          grid-template-columns: repeat(
            auto-fit,
            minmax(${minCardWidth}px, 1fr)
          );
        }

        @media (max-width: ${minCardWidth * 1.5}px) {
          .container {
            grid-template-columns: minmax(0, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default Stack;
