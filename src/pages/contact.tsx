import type { NextPage } from "next";
import { Seo } from "components/Seo";
import metadata from "utils/metadata";
import Contact from "views/Contact";

const ContactPage: NextPage = () => {
  return (
    <>
      <Seo
        title={metadata.home.title}
        description={metadata.home.description}
      />
      <Contact />
    </>
  );
};

export default ContactPage;
