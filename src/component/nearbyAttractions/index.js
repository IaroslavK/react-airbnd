import "./index.css";
import Heading from "../heading";
import { Fragment } from "react";
import Box from "../box";
import ListItem from "../list-item";

export default function NearbyAttractions({ nearbyAttractions }) {
  return (
    <Box shadow className="attractions__block">
      <Heading border>Пам'ятки поблизу</Heading>

      <div className="attractions__list">
        {nearbyAttractions.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <ListItem className="attraction">
      <a className="attraction__link" href={link}>
        {name}
      </a>
    </ListItem>
  );
}
