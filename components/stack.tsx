import { FunctionComponent } from "react";

const Stack: FunctionComponent<{ spacing: string }> = ({
  children,
  spacing,
}) => {
  return (
    <div className="container">
      {children}

      <style jsx>{`
        .container > :global(*:not(:last-child)) {
          margin-bottom: ${spacing};
        }
      `}</style>
    </div>
  );
};

export default Stack;
