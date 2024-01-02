import React from "react";

function Download() {
  return (
    <div className="download">
      <div className="download-paragraph">
        <div className="container">
          <h2>Download our South Yorkshire investment guide today!</h2>
          <p>
            Download our South Yorkshire investment guide today! Discover why
            South Yorkshire is the perfect investment area for property to
            generate long term wealth, and why NOW is the time to get your cash
            working! This comprehensive guide provides you with all of the
            information you need to get going on your portfolio building
            journey! ​ ​ Simply fill out the form with your details to gain
            exclusive access to our guide.{" "}
          </p>
        </div>
      </div>
      <div className="download-form">
        <div className="container">
          <form>
            <h3>Lets Get Started</h3>
            <label for="name">First Name</label>
            <input
              className="input-text"
              type="text"
              name="first-name"
              id="first-name"
              required
            ></input>
            <label for="surname">Surname</label>
            <input
              className="input-text"
              type="text"
              name="surname"
              id="surname"
            ></input>
            <label for="email">Email</label>
            <input
              className="input-text"
              type="email"
              name="email"
              id="email"
              required
            ></input>
            <p>Are you currently looking to invest?</p>
            <div className="invest-radios">
              <div>
                <input
                  type="radio"
                  id="html"
                  name="current-invest"
                  value="Yes"
                />
                <label for="current-invest">Yes</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="html"
                  name="current-invest"
                  value="No"
                />
                <label for="current-invest">No</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="html"
                  name="current-invest"
                  value="I'm Considering"
                />
                <label for="current-invest">I'm Considering</label>
              </div>
            </div>
            <div className="form-check">
              <label for="privacy">
                I agree to the Packaged Legacy to store and process my personal
                data. We will only use your personal information to administer
                your account and provide the products and service you have
                requested from us. We are committed to protecting and respecting
                your privacy, for more information please see our privacy policy
              </label>
              <input type="checkbox" id="privacy" required />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Download;
