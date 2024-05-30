import { useState } from "react";
import "./Services.css";
export default function Services() {
  const [service] = useState([
    {
      id: 1,
      className: "orange",
      title: "branding",
      description:
        "The brand is hope, it is also the source of inspiration for everything you do when you deal with your customers and that is the important and emotional thing. Your Brand and Visual identity represents an intrinsic value to your company.",
      offer: "in focal X agency, we provide: ",
      list: [
        "Visual identity design.",
        "Define Brand Identity.",
        "Define Brand personality.",
        "Building Your brand strategy.",
        "Market research and competitors study.",
      ],
      img: "http://focal-x.com/assets/img/ourservices/brandingpattren.png",
    },
    {
      id: 2,
      className: "purple",
      title: "Marketing",
      description:
        "Talk to your customers and tell them about you and your company's story through us the way you want. Let us plan the content that will bring your audience closer to you.",
      offer: "in our marketing agency, we offer: ",
      list: [
        "E-mail marketing.",
        "Affiliate marketing.",
        "Influencer marketing.",
        "Market research and Analysis.",
        "App store optimization ( ASO ).",
        "Search engine Marketing ( SEM ).",
        "Search engine optimization ( SEO ).",
        "Social media marketing & campaigns.",
      ],
      img: "http://focal-x.com/assets/img/ourservices/markrtingpattren.png",
    },
  ]);

  return (
    <>
      <section className="services-section">
        <h2 className="section-heading">Our Services</h2>
        <div className="content flex">
          {service.map((item) => {
            return (
              <div key={item.id} className="card">
                <h3 className={item.className}>{item.title}</h3>
                <p className="card-desc">{item.description}</p>
                <h4 className="offer-title">{item.offer}</h4>
                <ul className="card-list">
                  {item.list.map((L, i) => {
                    return <li key={i}>{L}</li>;
                  })}
                </ul>
                <img className="card-img" src={item.img} alt="" />
                {item.id === 1 ? <p className="note">We walk with you from A to Z.</p> : ""}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
