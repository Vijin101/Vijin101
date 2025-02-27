import TopBackground from "../../Components/TopBackground/TopBackground";

import AboutContent from "./AboutContent";
import AboutImageRow from "./AboutImageRow";
import {
  content1,
  content2,
  content3,
  images1,
  images2,
  images3,
} from "./data";

const PageWrapper = () => {
  return (
    <>
      <TopBackground />
      <div className="container">
        <AboutContent title={content1.title} content={content1.content} />
        <AboutImageRow images={images1} />
        <AboutContent title={content2.title} content={content2.content} />
        <AboutImageRow images={images2} />
        <AboutContent title={content3.title} content={content3.content} />
        <AboutImageRow images={images3} />
      </div>
    </>
  );
};

export default PageWrapper;
