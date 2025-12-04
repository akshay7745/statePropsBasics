import headerImage from "../assets/react-core-concepts.png";
import "./Header.css";
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
const reactDescriptions = ["Fundamental", "Crucial", "Core"];
function Header() {
  const description =
    reactDescriptions[genRandomInt(reactDescriptions.length - 1)];
  return (
    <header>
      <img src={headerImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
