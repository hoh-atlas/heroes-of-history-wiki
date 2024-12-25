import "./Card.css";

const Card = ({ title, centered, children, backgroundImage, blurred = false, footer = "" }) => {
  const cardClasses = centered ? "card card-centered" : "card";
  const cardBodyStyles = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {};

  return (
    <div className={cardClasses}>
      <header className="card-header" dangerouslySetInnerHTML={{ __html: title }} />
      <main className={`card-body ${blurred ? 'blurred' : ''}`} style={cardBodyStyles}>
        <div className="card-body-content">
          <p>{children}</p>
        </div>
      </main>
      {footer && (
        <footer className="card-footer" dangerouslySetInnerHTML={{ __html: footer }} />
      )}
    </div>
  );
};

export default Card;
