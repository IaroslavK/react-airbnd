import "./index.css";
import Heading from "../heading";
import { Fragment } from "react";
import Box from "../box";

export default function GuestReviews({ guestReviews }) {
  return (
    <div className="reviews__block">
      <Heading>Відгуки клієнтів</Heading>

      <div className="reviews__list">
        {guestReviews.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="review">
      <div className="review__guest">
        <span className="guest__name">{guestName}</span>
        <span className="guest__rating">Рейтинг: {rating}</span>
      </div>
      <span className="review__text">{review}</span>
    </Box>
  );
}
