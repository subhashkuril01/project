import "./Location.css";

const location =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.9197971447434!2d75.62369489999999!3d31.333588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a598afff01ab1%3A0x4d676314655e801!2sGuru%20Nanak%20Dev%20University%2C%20Regional%20Campus%2C%20Jalandhar!5e0!3m2!1sen!2sin!4v1756496767729!5m2!1sen!2sin";

const Location = () => {
  return (
    <section className="location">
      <iframe
        src={location}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        // loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
    </section>
  );
};

export default Location;
