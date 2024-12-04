import AboutUs from "./Components/AboutUs";
import Achievment from "./Components/Achievment";
import Banner from "./Components/Banner";
import Courses from "./Components/Courses";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
export default function Home() {
  return (
    <div className="">
      <Banner />
      <Courses />
      <Achievment />
      <Services />
      <AboutUs />
      <Testimonials />
    </div>
  );
}
