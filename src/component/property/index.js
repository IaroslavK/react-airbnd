import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";
import "./index.css";
import guestsSvg from "./guests.svg";
import bedroomsSvg from "./bedrooms.svg";
import bedsSvg from "./beds.svg";
import bathsSvg from "./baths.svg";

export default function Property({ guests, bedrooms, beds, baths }) {
  return (
    <Box shadow className="property">
      <Heading>Деталі властивості:</Heading>
      <ListItem imageSrc={guestsSvg}>
        <span>{guests}</span>
        <p>гості</p>
      </ListItem>
      <ListItem imageSrc={bedroomsSvg}>
        <span>{bedrooms}</span>
        <p>спальня</p>
      </ListItem>
      <ListItem imageSrc={bedsSvg}>
        <span>{beds}</span>
        <p>ліжко</p>
      </ListItem>
      <ListItem imageSrc={bathsSvg}>
        <span>{baths}</span>
        <p>ванна кімната</p>
      </ListItem>
    </Box>
  );
}
