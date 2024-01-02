import Question from "./Question";

export default function Faq({ isOpen, setIsOpen }) {
  return (
    <div className="faq">
      <div className="faq-left">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <p>
            Got a question? Here are our most asked questions. If you don't see
            your question here, please drop us a line on our contact page and
            we'll be sure to get back to you!
          </p>
        </div>
      </div>
      <div className="faq-right">
        <div className="container">
          <div className="questions">
            <Question
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              question="You're quite new to this, how do I know you can do the job properly?"
              answer="Firstly, we invite you to consider who values you more: a small, dedicated start-up like our own, where you are the priority, or a larger corporation where you're just a number vying for the deals presented against their other clientele?
We go all in with our clients, adding as much value as we can muster - you are our highest priority and are treated as such.
Our core values revolve around honesty, integrity and transparency. When faced with questions or challenges outside our expertise, we leverage our extensive network for solutions, rather than tell you what we think you want to hear.
Our background includes a decade of experience as business, process, and data analysts for prominent UK data-driven organizations. We have a real eye for detail and can boil the confusion down to simple, easily digestible metrics for you to make the due diligence less overbearing. We let the data tell the story.​"
            />
            <Question
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              question="I've done a deal before but didn't get the returns I was promised, why should I work with you?"
              answer="The problem is many companies over promise and under deliver as they try to sell the dream, but can only deliver reality. Unlike others, we manage your expectations from the start - we sell the reality and deliver exactly that.
              We do this through in-depth consultations, showing you what's realistically achievable investing in our patches. We develop medium to long term strategies aimed at charting the path towards your desired goals, all the while ensuring your comfort and our compatibility.
              The downside for us is that ultimately, companies selling the dream will win a lot more business, however they'll also let a lot more people down. If you're looking to get rich quick, the only thing you'll be doing is making someone else rich quick and yourself poor even quicker.
            So, if you're looking to build long term wealth with a friendly couple who aren't looking to make a quick quid, but build something lasting (a legacy) - get in touch with Packaged Legacy today and see how we can help!​"
            />
            <Question
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              question="What if the property doesn't value at what was expected, can I have a guarantee?"
              answer="We all know, any investment is a risk and that there are no guarantees in life. The housing market can fluctuate from day to day, but ultimately property prices have historically doubled every 10 years, which sets a trend we can work from. We deliver deep analysis upfront so you can understand the local growth and see first hand how your capital will grow each year with compound interest.
              The real power in property then comes from being able to leverage debt from your assets to accelerate your investment journey and growth in the market.
              Remember property isn't a get rich quick scheme, we are looking to build long term wealth. So if the property is initially down-valued, you haven't lost money, you've banked it in an asset accumulating wealth over decades, so you can stop working hard for your money and start making your money work hard for you!​"
            />
            <Question
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              question="How can I trust that you won't just keep the reservation fee and not deliver?"
              answer="We will review the reservation form and carefully go through the terms and agreements with you to ensure your complete comfort. Our primary objective is not to profit from reservation fees but to establish enduring relationships with our clients.
              The reservation fee serves as a safeguard for both parties. It is retained only under specific circumstances, such as if you were to unexpectedly withdraw from the property or attempt to lower the price without a justifiable cause after an agreed-upon price has been set.
              You can rest assured however that if we were to miscommunicate regarding the property, and it subsequently falls short of your criteria following your own due diligence during the agreed cooling-off period, we will promptly refund your fee.
              Once you have secured the property through reservation, it becomes exclusively yours, eliminating the need for competitive bidding. From there, we will efficiently facilitate the remaining processes for you.
              Still unsure? We're registered with the Property Redress Scheme should you need a third party to facilitate a complaint (though we'll do all we can to ensure you'll never need to!)​"
            />
            <Question
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              question="How do I know that the refurbishment cost will be accurate?"
              answer="When it comes to refurbishments, we recommend including a 5-10% contingency in your budget. While we provide builders estimates, material prices can change, and unforeseen issues may arise, especially in older properties.
              Plan your refurbishment specifications carefully upfront to avoid costly changes along the way. Also, ensure you stick to the agreed timeline, as delays can lead to higher costs and property holding expenses.
              While we strive for precision in our pricing, it's important to acknowledge that certain variables in property investments lie beyond our control. Nevertheless, the enduring benefits far outweigh these short-term challenges, underscoring the significance of maintaining a contingency fund."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
