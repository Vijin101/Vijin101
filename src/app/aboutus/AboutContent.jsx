const AboutContent = ({ title, content }) => {
  return (
    <div className="aboutpage-content">
      <h2 className="aboutpage-content-title">{title}</h2>
      <p className="aboutpage-content-para">{content}</p>
    </div>
  );
};

export default AboutContent;
