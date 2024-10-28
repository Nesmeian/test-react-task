import { useState } from "react";
import "./style.css";
export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "Custom Tailoring",
      description:
        "Our custom tailoring service offers a unique experience tailored to your individual style and fit. We pride ourselves on using only the finest materials and craftsmanship.",
      listItems: [
        "Personalized fitting sessions to ensure the perfect fit.",
        "Choice of premium fabrics sourced from Italy.",
        "Handcrafted details that reflect your personal taste.",
        "Alterations and adjustments for a flawless finish.",
        "Expert advice on style and fit from our experienced tailors.",
      ],
    },
    {
      title: "Ready-to-Wear Collection",
      description:
        "Explore our exclusive ready-to-wear collection, featuring timeless designs that combine elegance and comfort. Each piece is crafted with attention to detail, ensuring you look your best for any occasion.",
      listItems: [
        "Wide range of styles, from classic to contemporary.",
        "Available in various sizes to accommodate all body types.",
        "Seasonal collections that reflect the latest fashion trends.",
        "Exclusive designs that you won’t find anywhere else.",
        "Quality assurance to guarantee satisfaction with every purchase.",
      ],
    },
    {
      title: "Accessories and Styling",
      description:
        "Complete your look with our selection of high-quality accessories. Our styling experts are here to help you choose the perfect pieces to complement your Italian suit.",
      listItems: [
        "Ties and bow ties crafted from luxurious materials.",
        "Cufflinks and pocket squares to add a touch of elegance.",
        "Belts and shoes that enhance your overall appearance.",
        "Complete styling consultations to ensure you look polished.",
        "Personalized recommendations based on your style preferences.",
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="services-container">
      {services.map((service, index) => (
        <div
          key={index}
          className="service-box"
          onClick={() => toggleAccordion(index)}
        >
          <h2 style={{ cursor: "pointer" }}>{service.title}</h2>
          {activeIndex === index && (
            <div>
              <p>{service.description}</p>
              <ul>
                {service.listItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
