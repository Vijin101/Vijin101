import "./TopBackground.css";

const TopBackground = ({ title = "Title", desc }) => {
  return (
    <section
      className="top-background"
      style={{ backgroundImage: `url(/assets/banner.webp)` }}
    >
      <div className="container top-background-content">
        <h2>{title}</h2>
        {desc && <p>{desc}</p>}
      </div>
    </section>
  );
};

export default TopBackground;
