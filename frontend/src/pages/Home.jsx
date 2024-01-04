import TopNavBar from '../components/TopNavBar.jsx';
import Footer from '../components/Footer.jsx';


const Home = () => {
  return (
    <div className="home">
      <TopNavBar />
      <div className='descContainer'>
        <h1>Hello!</h1>
        <p>
        This is a personal portfolio in the form of a website where I created a frontend and backend. Some frameworks and packages that I used include
        Vite, React, Node, Express, Bootstrap, etc. The goal for this website was to create something from scratch that displays my skills and goals. 
        I am continuing to learn new 
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
