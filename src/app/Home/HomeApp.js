import About from "./About";
import Blogs from "./Blogs";
import Hero from "./Hero";
import Section1 from './Section1';
import Sermons from './Sermons';
import Testimonials from './Testimonials';
import UpcomingEvent from './UpcomingEvent';
import Verse from './Verse';
import WorshipServices from './WorshipServices';

const HomeApp = () => {
  return (
    <>
      <Hero />
      <About />
      <WorshipServices />
      <UpcomingEvent />
      <Verse />
      <Sermons />
      <Testimonials />
      <Blogs />
      {/* <Section1 /> */}
    </>
  );
};

export default HomeApp;
