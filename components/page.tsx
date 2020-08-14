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
          padding: 16px;
        }
      `}</style>
    </div>
  );
};

export default Page;
