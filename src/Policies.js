import ComplianceCard from "./Compliance_card";
import Question from "./Question";

export default function Policies() {
  return (
    <div className="policies">
      <div className="policies-top">
        <div className="policies-top-left">
          <div className="container">
            <h2>Compliance</h2>
            <p>
              How you know you can trust us and what sets us apart from many
              other deal packagers out there. Packaged Legacy is fully compliant
              and registered with:
            </p>
            <div className="compliance-container">
              <ComplianceCard
                body="The Property Redress Scheme"
                registration="Membership number: PRS041444"
                source="https://static.wixstatic.com/media/3116b3_d8043fa7005d4cbfbac142552a73b8e8~mv2.png/v1/fill/w_195,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3116b3_d8043fa7005d4cbfbac142552a73b8e8~mv2.png"
              />
              <ComplianceCard
                body="Anti-Money Laundering"
                registration="Anti-money laundering register: XJML00000190299"
                source="https://static.wixstatic.com/media/3116b3_1df776e5812e400a9c9f51b835eb2110~mv2.png/v1/fill/w_135,h_75,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3116b3_1df776e5812e400a9c9f51b835eb2110~mv2.png"
              />
              <ComplianceCard
                body="ICO"
                registration="Data protection licence: C1369888"
                source="https://static.wixstatic.com/media/3116b3_da1c8ed641fb48ab9bc904457167cb92~mv2.png/v1/fill/w_90,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3116b3_da1c8ed641fb48ab9bc904457167cb92~mv2.png"
              />
              <ComplianceCard
                body="Professional Indemnity Insured"
                registration="Insurance policy number: #RTT269457-3201551"
                source="https://static.wixstatic.com/media/3116b3_e416ef2ec6694a1c9936c8168822199a~mv2.png/v1/fill/w_104,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3116b3_e416ef2ec6694a1c9936c8168822199a~mv2.png"
              />
            </div>
          </div>
        </div>
        <div className="policies-top-right">
          <div className="container">
            <h2>Privacy & Personal Data</h2>
            <div className="privacy-container">
              <Question
                question="1. Introduction"
                answer="This Privacy Policy outlines the practices of Packaged Legacy regarding the collection, use, disclosure, and protection of personal information when you use our website [www.packagedlegacy.co.uk] and related services."
              />
              <Question
                question="2. Information We Collect"
                answer="a. Personal Information: We may collect personal information that you provide directly to us, such as your name, email address, postal address, phone number, and other contact information when you interact with our Website or services.

b. Usage and Log Data: We collect information about your usage of our Website and may collect log data, including your IP address, browser type, operating system, referral source, and pages visited.

c. Cookies and Tracking Technologies: We use cookies and similar tracking technologies to gather information about your interactions with our Website. You can control cookies through your browser settings."
              />
              <Question
                question="3. Use of Information"
                answer="We may use the collected information for the following purposes:

a. To provide, maintain, and improve our services.

b. To send newsletters, updates, and marketing communications, where permitted by law.

c. To respond to your inquiries, comments, or requests.

d. To monitor and analyze usage patterns, and to conduct research and analysis to improve our services.

"
              />
              <Question
                question="4. Sharing of Information"
                answer="

We do not sell or rent your personal information to third parties. We may share your information with:

a. Service Providers: We may share your information with third-party service providers who assist us in operating our Website and services.

b. Legal Compliance: We may disclose your information if required by law, governmental request, or as necessary to protect our rights or the rights of others."
              />
              <Question
                question="5. Your Choices"
                answer="

You have the following rights regarding your personal information:

a. Access: You can request access to the personal information we hold about you.

b. Correction: You can request that we correct inaccuracies in your personal information.

c. Deletion: You can request that we delete your personal information, subject to legal requirements.

d. Opt-Out: You can opt-out of receiving marketing communications from us by following the instructions in such communications."
              />
              <Question
                question="6. Security"
                answer="

We use reasonable administrative, technical, and physical measures to protect your personal information. However, no data transmission over the internet is completely secure, and we cannot guarantee the security of your information."
              />
              <Question
                question="7. Changes to this Policy."
                answer="

We may update this Privacy Policy from time to time. The updated policy will be posted on our Website with the effective date"
              />
              <Question
                question="8. Contact Us"
                answer="

If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at services@packagedlegacy.co.uk."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="polices-bottom">
        <h2>Complaints & Procedures</h2>
      </div>
    </div>
  );
}
