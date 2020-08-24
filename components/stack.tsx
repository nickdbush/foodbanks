import { FunctionComponent } from "react";

export const minCardWidth = 320;

const Stack: FunctionComponent<{ spacing: string; minWidth: string }> = ({
  children,
  spacing,
  minWidth,
}) => {
  return (
    <div className="container">
      {children}

      <style jsx>{`
        .container {
          display: grid;
          grid-gap: ${spacing};
          grid-template-columns: repeat(auto-fit, minmax(${minWidth}, 1fr));
        }

        @media (max-width: ${parseInt(minWidth.replace("px", "")) * 1.3}px) {
          .container {
            grid-template-columns: minmax(0, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default Stack;
