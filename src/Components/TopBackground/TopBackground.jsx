import "./TopBackground.css";

const TopBackground = () => {
  return (
    <section
      className="top-background"
      style={{ backgroundImage: `url(/assets/versebg.jpg)` }}
    >
      <div className="container top-background-content">
        <h2>TITLE HERE</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad adipisci.
        </p>
      </div>
    </section>
  );
};

export default TopBackground;
