import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/bowling.jpg";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              The "New England Thing" Bowling League
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              The N.E.T Bowling league is a casual social candlepin bowling league that meets at Needham Bowlaway on
              thursdays.
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#getstarted" className="text-blue-500 hover:text-blue-700">
                  Get Started
                </a>
              </li>
              <li>
                <a href="#learnmore" className="text-blue-500 hover:text-blue-700">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
