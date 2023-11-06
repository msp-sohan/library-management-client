import AboutUs from "../../Component/AboutUs/AboutUs";
import Banner from "../../Component/Banner/Banner";
import Categories from "../../Component/Categories/Categories";
import Testimonial from "../../Component/Testimonial/Testimonial";

const Home = () => {
	return (
		<div className="bg-base-100">
			<Banner></Banner>
			<Categories></Categories>
			<AboutUs></AboutUs>
			<Testimonial></Testimonial>
		</div>
	);
};

export default Home;
