import TopBackground from "../../Components/TopBackground/TopBackground";
import "../Styles/Aboutus/Aboutuspage.css";
import AboutContent from "./AboutContent";
import AboutImageRow from "./AboutImageRow";
import SidePageContainer from "../../Components/SidePageContainer/SidePageContainer";
import PageWrapper from "./PageWrapper";

const AboutPage = () => {
  return (
    <div className="aboutus-page">
      <SidePageContainer>
        <PageWrapper />
      </SidePageContainer>
    </div>
  );
};

export default AboutPage;
