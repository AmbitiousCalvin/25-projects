import "./styles.css";
import Accordion from "./components/Accordion";
import { ScrollIndicator } from "./components/scroll-indicator";
import RandomColor from "./components/random-color";
import { StarRating } from "./components/star-rating";
import { ImageSlider } from "./components/image-slider";

export default function App() {
  return (
    <div className="App" id="app">
      <ScrollIndicator></ScrollIndicator>
      {/* <Accordion></Accordion> */}
      {/* <RandomColor></RandomColor> */}
      {/* <StarRating></StarRating> */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={1}
        limit={10}
      ></ImageSlider>
    </div>
  );
}
