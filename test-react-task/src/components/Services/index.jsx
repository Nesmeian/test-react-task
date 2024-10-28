import Accordion from "../Accordion";
import AddSwiper from "../Swipper";
import images from "./servicesData";
import "./style.css";
export default function Services() {
  return (
    <section className="services__wrapper">
      <Accordion />
      <AddSwiper images={images}></AddSwiper>
    </section>
  );
}
