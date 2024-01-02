import Profile from "./profile.png";

function About() {
  return (
    <main className="about-us">
      <div className="container">
        <img src={Profile} alt="Si and Liss"></img>
        <div>
          <h2>About Simon & Alicia</h2>
          <p>
            We are a friendly and professional married couple based in South
            Yorkshire, with a real passion for property. Coupled with nearly 10
            years experience as a data professional, you can rest assured that
            there will be no stone left unturned and you'll be presented with
            only the very best opportunities in South Yorkshire.{" "}
          </p>
          <p className="revealing-text">
            Our mission as a fledgling business is to add value to our clients
            in everything that we do, embracing integrity, championing
            transparency and working ethically for as long as our professional
            relationship should last.
          </p>
          <p className="revealing-text">
            We offer support to anyone looking to invest in property or looking
            to build their property portfolio, completely hands free! (Or
            indeed, as hands on as you would like to be). We specialise in
            Buy-To-Lets, HMO's and BRRR's (Buy, Refurbish, Rent, Refinance)
            covering South Yorkshire.
          </p>
          <p className="revealing-text">
            We work closely with our investors to understand their requirements
            and long term goals and provide a full end to end service, taking
            care of all the legwork so you don't have to! This would include;
            <ul>
              <li>
                Sourcing the property (and providing you with an intensive
                property prospectus)
              </li>
              <li>
                Management of the refurb (while keeping you up to date every
                step of the way)
              </li>
              <li>
                Systemisation of the property with our vetted power team (To
                keep you hands off and your income passive)
              </li>
            </ul>
            This way you can kick back and enjoy the returns from both short
            term cash flow and long term capital growth, without investing your
            precious time!​
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
