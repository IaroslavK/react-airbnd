import { Fragment } from "react";
import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";
import "./index.css";

export default function AdditionalProperties({
  houseRules,
  cancellationPolicy,
  localTransportation,
  hostLanguages,
  specialOffers,
  registrationInstructions,
}) {
  return (
    <Box className="properties">
      <Heading border>Додаткові властивості</Heading>
      <ListItem title="Правила дому">{houseRules}</ListItem>
      <ListItem title="Політика скасування">{cancellationPolicy}</ListItem>
      <ListItem title="Місцевий транспорт">{localTransportation}</ListItem>
      <ListItem title="Мови хоста">
        {hostLanguages.map((lang) => (
          <Fragment key={lang}>{lang} </Fragment>
        ))}
      </ListItem>
      <ListItem title="Спеціальні пропозиції:">{specialOffers}</ListItem>
      <ListItem title="Інструкції щодо реєстрації">
        {registrationInstructions}
      </ListItem>
    </Box>
  );
}
