import React from "react";
import Container from "./container";

const Logo = () => {
  return (
    <div className="flex gap-1 bg-slate-400 h-8 w-8 justify-center items-center rounded-md">
      <div className="flex bg-slate-100 w-1 h-6 rounded-sm items-center justify-center">
        <div className="bg-red-600 w-full h-1"></div>
      </div>
      <div className="flex bg-slate-100 w-1 h-6 rounded-sm items-center justify-center mt-1">
        <div className="bg-red-600 w-full h-1"></div>
      </div>
      <div className="flex bg-slate-100 w-1 h-6 rounded-sm items-center justify-center">
        <div className="bg-red-600 w-full h-1"></div>
      </div>
    </div>
  );
};
const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl flex gap-8 flex-col">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-3">
            <Logo /> <div className="text-xl font-bold">Who?</div>
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            We are open and welcoming to everyone who is interested in playing candlepin bowling!
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-3">
            <Logo /> <div className="text-xl font-bold">What?</div>
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            The N.E.T Bowling League is a casual league where we come together to enjoy each other's company and the
            great game of candlepin bowling. Our members are divided into teams, and at each meeting, you will face a
            different team. Each player receives an individual handicap, ensuring that the winning team is determined by
            who's having a good night, not necessarily by the overall score. You can expect to bowl 3 games each time we
            meet. While your teammates are bowling, you can socialize with other members, enjoy a snack from our member
            snack rotation, or visualize yourself bowling strikes.
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-3">
            <Logo /> <div className="text-xl font-bold">When?</div>
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            The bowling league meet from September to May on Thursday with breaks during the Christmas holiday and
            occasionally during other holidays. Please contact us before coming to make sure the league is running that
            Thursday
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-3">
            <Logo /> <div className="text-xl font-bold">Where?</div>
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            The league is held at{" "}
            <a href="https://www.needhambowl.com/" className="text-teal-500 underline hover:text-teal-800">
              Needham Bowlaway
            </a>{" "}
            16 Chestnut St. Needham, MA 02492
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-3">
            <Logo /> <div className="text-xl font-bold">How much does it cost?</div>
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            Currently it costs $13 each time you come. This covers the cost of the bowling alley.
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Faq;
