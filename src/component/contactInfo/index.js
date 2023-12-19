import "./index.css";

export default function ContactInfo({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="contact">
      <div className="contact__block">
        <img className="contact__image" src={image} alt="contactPhoto" />
        <div className="contact__info">
          <span className="contact__title">Господар – {name}</span>
          <div className="contact__sub-block">
            <span className="contact__sub-value">{phone}</span>
            <span className="contact__sub-value">{response_time}</span>
            <span className="contact__sub-value">
              {response_rate}% відсотків швидкості відгуку
            </span>
          </div>
        </div>
      </div>
      <div className="contact__description">{info}</div>
    </div>
  );
}
