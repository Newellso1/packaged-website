export default function WhySectionFlip({
  source,
  heading,
  paragraph,
  alternative,
}) {
  return (
    <div className="why-section-flip">
      <div className="section-paragraph">
        <h2>{heading}</h2>
        <p>{paragraph}</p>
      </div>
      <div className="section-picture">
        <img src={source} alt={alternative}></img>
      </div>
    </div>
  );
}
