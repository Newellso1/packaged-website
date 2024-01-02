import React from "react";
import Logo_Large from "./logo_large.jpeg";

function Home() {
  return (
    <main className="home">
      <div className="container">
        <img src={Logo_Large} alt="Simon and Alicia"></img>

        <div>
          <h2>Hello and welcome to Packaged Legacy!</h2>
          <p>
            Welcome! We're Simon & Alicia Broadhead, founders of Packaged
            Legacy, a passionate husband and wife team based in South Yorkshire.
            Our goal is to revolutionise property investment through
            professional data analysis, delivering optimal financial growth
            opportunities tailored for you.
          </p>
          <p className="revealing-text">
            Embark on a seamless investment journey with us, where your money
            works smarter. Our analytical expertise ensures your investment's
            safety and maximises your confidence in every move.
          </p>
          <p className="revealing-text">
            Starting with just £30,000, we'll ignite your property investment
            journey with a strategic plan for expansion and success. With
            £100,000 or more, we'll secure 3-5 high-yield properties,
            hassle-free and tailored to your preferences.
          </p>
          <p className="revealing-text">
            Looking to get your cash working as hard for you as you have for it?
            Click 'Schedule a Call' for a no-obligation chat. What's the worst
            that could happen? Well, we discover your needs and our expertise
            aren't a match, in which case we'll provide you with a free 10-step
            property portfolio guide. It's the dictionary definition of a
            win-win!
          </p>
          <p className="revealing-text">
            Let's build your legacy together! Contact us today and embark on a
            prosperous investment journey with Packaged Legacy.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;
