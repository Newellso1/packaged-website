import React from "react";
import WhySection from "./Why-section";
import WhySectionFlip from "./Why-Section-Flip";
import Why2 from "./Why2.png";
import Why3 from "./Why3.png";
import Why4 from "./Why4.png";
import Why5 from "./Why5.png";

function Why() {
  return (
    <div className="why-us">
      <div className="why-top">
        <p>
          Ready to start your own property investment journey, or looking to
          expand your portfolio? South Yorkshire is a destination you don't want
          to miss. It's a place where properties are brimming with strategic
          potential, and there are plenty of reasons to get excited about this
          region. From a thriving rental scene and affordability to incredible
          prospects for capital growth from ongoing commercial and residential
          developments, South Yorkshire offers a blend of factors that can make
          your investment journey truly lucrative. Let's dive into the specifics
          and explore why this region should be on your radar for property
          investment.
        </p>
      </div>
      <WhySectionFlip
        heading="Rental demand and Affordability"
        paragraph="South Yorkshire offers a competitive advantage in terms of
            affordability and boasts a robust and diversified rental market. The
            advantage of lower property prices means that investors can enter
            the market with relatively lower capital, resulting in attractive
            rental yields. The presence of universities, healthcare institutions
            and a growing job market ensures a consistent demand for rental
            properties. This diverse tenant base includes students, young
            professionals, families, and retirees, providing a wide pool of
            potential tenants for landlords."
        source={Why2}
        alt="sheffield"
      />
      <WhySection
        heading="Capital growth"
        paragraph="The region has experienced ongoing regeneration and development projects in recent years. These initiatives have contributed to property value appreciation in certain areas.Our job is to identify up-and-coming neighborhoods, so our investors can benefit from the long-term capital growth, adding significant value to their property portfolio."
        source={Why3}
        alt="sheffield"
        className="switch"
      />
      <WhySectionFlip
        heading="Local economy and amenities"
        paragraph="South Yorkshire is home to various industries, including manufacturing, technology, healthcare, and education; As well as offering a range of amenities such as shopping centres', restaurants, theatre, and cultural attractions, such as being on the edge of the peak district. 
The diversity of South Yorkshire enhances the desirability of rental property, increasing it's appeal to potential investors and tenants."
        source={Why4}
        alt="sheffield"
      />
      <WhySection
        heading="Transport Links and Connectivity"
        paragraph="The region has experienced ongoing regeneration and development projects in recent years. These initiatives have contributed to property value appreciation in certain areas.Our job is to identify up-and-coming neighborhoods, so our investors can benefit from the long-term capital growth, adding significant value to their property portfolio."
        source={Why5}
        alt="sheffield"
      />
    </div>
  );
}

export default Why;
