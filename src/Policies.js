import ComplianceCard from "./Compliance_card";

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
            <h2>Privacy & personal data</h2>
          </div>
        </div>
      </div>
      <div className="polices-bottom">
        <h2>Complaints & Procedures</h2>
      </div>
    </div>
  );
}
