export default function ComplianceCard({
  body = "Body name",
  registration = "Registration Number",
  source = "",
}) {
  return (
    <div className="compliance_card">
      <h3>{body}</h3>
      <p>{registration}</p>
      <img src={source} alt={`${body} logo`}></img>
    </div>
  );
}
