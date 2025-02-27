import SidePageContainer from "../../Components/SidePageContainer/SidePageContainer";
import PageWrapper from "./pageWrapper";

const EventsPage = () => {
  return (
    <div className="aboutus-page">
      <SidePageContainer children={<PageWrapper />} />
    </div>
  );
};

export default EventsPage;
