import "./Typography.css";

const SectionHeader = ({ title, description }) => {
  return (
    <>
      <h5 className="section-title">{title}</h5>
      <h3 className="section-desc">{description}</h3>
    </>
  );
};

export default SectionHeader;
