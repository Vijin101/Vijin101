import "./Typography.css";

const SectionHeader = ({ title, description = null }) => {
  return (
    <>
      <h5 className="section-title">{title}</h5>
      {description ? <h3 className="section-desc">{description}</h3> : null}
    </>
  );
};

export default SectionHeader;
