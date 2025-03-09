import SidePageContainer from "../../Components/SidePageContainer/SidePageContainer";
import PageWrapper from "./PageWrapper.jsx";

const EventsPage = () => {
  return (
    <div className="aboutus-page">
      <SidePageContainer children={<PageWrapper />} />
    </div>
  );
};

export default EventsPage;
