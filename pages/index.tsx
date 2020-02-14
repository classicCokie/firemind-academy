import Navigation from "../components/Navigation";
import Button from "../components/Button";

const Home = () => (
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Lato:900&display=swap"
      rel="stylesheet"
    ></link>
    <Navigation />
    <h1>Firemind Academy</h1>

    <Button label="Read" onPressed={() => console.log("hay")} />
  </div>
);

export default Home;
