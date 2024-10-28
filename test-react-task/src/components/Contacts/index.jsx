import "./style.css";
export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts__wrapper">
        <div className="contacts__description">
          <h1>Contact Us</h1>
          <p>
            If you have any questions or inquiries, feel free to reach out to
            us!
          </p>
        </div>

        <div className="contacts__info">
          <h2>Get in Touch</h2>
          <p>
            Email: <a href="mailto:info@artofstyle.com">artfstyle.com</a>
          </p>
          <p>
            Phone: <a href="tel:+77777777">+77777777</a>
          </p>
          <p>Address:Fashion St, Style City</p>
        </div>
        <div className="contacts__year">
          <h2>Creator Information</h2>
          <p>Year of Creation: 2024</p>
          <p>
            Creator: <a href="https://github.com/Nesmeian">Nesmeian</a>
          </p>
        </div>
      </div>
    </section>
  );
}
