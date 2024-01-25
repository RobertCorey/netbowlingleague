import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import Faq from "../components/faq";
import Container from "../components/container";

import { useEffect } from "react";

const HubspotContactForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          portalId: "7684074",
          formId: "c72f1669-6505-4b23-85bb-392410eacf4f",
          target: "#hubspotForm",
        });
      }
    });
  }, []);

  return (
    <div className="p-4">
      <div id="hubspotForm"></div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="p-2">
      <Head>
        <title>New England Thing Bowling League</title>
        <meta
          name="description"
          content="The N.E.T Bowling league is a casual social candlepin bowling league that meets at Needham Bowlaway on thursdays."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <div id="getstarted">
        <SectionTitle title="Contact Us!">
          Are you interested in joining the league or learning more about it? Fill out the form below and we'll get in
          contact!
        </SectionTitle>
        <Container>
          <HubspotContactForm />
        </Container>
      </div>

      <div id="learnmore">
        <SectionTitle pretitle="FAQ" title="Frequently Asked Questions"></SectionTitle>
      </div>
      <Faq />
    </div>
  );
};

export default Home;
