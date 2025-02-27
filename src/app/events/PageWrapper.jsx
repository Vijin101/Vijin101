import TopBackground from "../../Components/TopBackground/TopBackground";
import EventsLister from "./EventsLister";

const PageWrapper = () => {
  return (
    <>
      <TopBackground />
      <div className="side-page-layer"></div>
      <div className="container">
        <EventsLister />
      </div>
    </>
  );
};

export default PageWrapper;
