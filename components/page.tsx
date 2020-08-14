import { FunctionComponent } from "react";
import Head from "next/head";

const Page: FunctionComponent<{ title: string }> = ({ title, children }) => {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
      </Head>
      {children}
      <style jsx>{`
        .container {
          width: 100%;
          max-width: 1400px;
          padding: 16px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default Page;
