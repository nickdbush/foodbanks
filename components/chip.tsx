import { FunctionComponent } from "react";

const Chip: FunctionComponent<{ colour: string }> = ({ colour, children }) => {
  return (
    <div className="container">
      {children}
      <style jsx>{`
        .container {
          display: inline-block;
          background-color: ${colour};
          padding: 8px 16px;
          border-radius: 4px;
          line-height: 1em;
        }
      `}</style>
    </div>
  );
};

export default Chip;
