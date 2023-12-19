import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";
import "./index.css";
import pool from "./pool.svg";
import gym from "./gym.svg";
import breakfast from "./breakfast.svg";
import wiFi from "./wiFi.svg";
import parking from "./parking.svg";
import pets from "./pets.svg";
import airportShuttle from "./airportShuttle.svg";
import concierge from "./concierge.svg";
import roomService from "./roomService.svg";
import childFriendly from "./childFriendly.svg";

export default function Amenities({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <Box className="amenities">
      <Heading border>Зручності</Heading>
      {hasPool && (
        <ListItem imageSrc={pool}>
          <p>Басейн</p>
        </ListItem>
      )}
      {hasGym && (
        <ListItem imageSrc={gym}>
          <p>Спортивний зал</p>
        </ListItem>
      )}
      {hasFreeBreakfast && (
        <ListItem imageSrc={breakfast}>
          <p>Безкоштовний сніданок</p>
        </ListItem>
      )}
      {hasFreeWiFi && (
        <ListItem imageSrc={wiFi}>
          <p>Безкоштовний Wi-Fi</p>
        </ListItem>
      )}
      {hasParking && (
        <ListItem imageSrc={parking}>
          <p>Безкоштовний вуличний паркінг</p>
        </ListItem>
      )}
      {hasPetsAllowed && (
        <ListItem imageSrc={pets}>
          <p>Дозволено розміщення з домашніми тваринами</p>
        </ListItem>
      )}
      {hasAirportShuttle && (
        <ListItem imageSrc={airportShuttle}>
          <p>Трансфер до/з аеропорту</p>
        </ListItem>
      )}
      {hasConciergeService && (
        <ListItem imageSrc={concierge}>
          <p>Консьєрж-сервіс</p>
        </ListItem>
      )}
      {hasRoomService && (
        <ListItem imageSrc={roomService}>
          <p>Обслуговування номерів</p>
        </ListItem>
      )}
      {hasChildFriendly && (
        <ListItem imageSrc={childFriendly}>
          <p>Підходить для дітей</p>
        </ListItem>
      )}
    </Box>
  );
}
