import Subheader from "../Components/Subheader/Subheader";
import Courses from "../Components/Courses/Courses";
import Facilities from "../Components/Facilities/Facilities";
import Footer from "../Components/Footer/Footer";

const Course = () => {
  return (
    <>
      <Subheader header="Our Courses" />
      <Courses />
      <Facilities />
      <Footer />
    </>
  );
};

export default Course;
