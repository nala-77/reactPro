import { useState } from "react";
import "./Hosting.css";
export default function Hosting() {
  const [Host] = useState([
    {
      id: 1,
      title: "Basic",
      className: "orange-border",
      description: "for very small businesses and freelancers.",
      price: "2.5/mo",
      list: [
        "Disk Space: 500 M.B",
        "Bandwidth: 500 G.B",
        "SubDomains: Unlimited",
        "Parked Domains: Unlimited",
        "E-mail Accounts: Unlimited",
        "Cpanel (control panel): Yes",
        "Money Back Guarantee: 14 Days",
      ],
      btn: "You will have 1 Gift",
    },
    {
      id: 2,
      title: "Pro",
      className: "purple-border",
      description:
        "for Individuals that need sharing vlogs or need huge portfolio.",
      price: "5/mo",
      list: [
        "Disk Space:  3000 M.B",
        "Bandwidth:  3 TERA",
        "SubDomains: Unlimited",
        "Parked Domains: Unlimited",
        "E-mail Accounts: Unlimited",
        "Cpanel (control panel): Yes",
        "Money Back Guarantee: 14 Days",
      ],
      btn: "1 Gift per/mo for year",
    },
    {
      id: 3,
      title: "Business",
      className: "green-border",
      description: "for Team that need sharing and reporting.",
      price: "8/mo",
      list: [
        "Disk Space:  5000 M.B",
        "Bandwidth: 5 TERA",
        "SubDomains: Unlimited",
        "Parked Domains: Unlimited",
        "E-mail Accounts: Unlimited",
        "Cpanel (control panel): Yes",
        "Money Back Guarantee: 14 Days",
      ],
      btn: "3 Gifts per/mo for year",
    },
    {
      id: 4,
      title: "Enterprise",
      className: "blue-border",
      description: "for large companies that need admins & security.",
      price: "12/mo",
      list: [
        "Disk Space: 10000 M.B",
        "Bandwidth: 10 TERA",
        "SubDomains: Unlimited",
        "Parked Domains: Unlimited",
        "E-mail Accounts: Unlimited",
        "Cpanel (control panel): Yes",
        "Money Back Guarantee: 14 Days",
      ],
      btn: "Just Call Us",
    },
  ]);
  return (
    <>
      <section className="host-section">
        <h2 className="section-heading">Hosting Pricing</h2>
        <div className="host-content flex">
          {Host.map((item) => {
            return (
              <div key={item.id} className={item.className}>
                <h2 className="host-title">{item.title}</h2>
                <p className="host-desc">{item.description}</p>
                <h3 className="host-price"> &#36;{item.price}</h3>
                <ul  className="host-list">
                {item.list.map((L, i) => {
                  return <li key={i}>{L}</li>;
                })}
                </ul>
                <button>{item.btn}</button>
                {item.id === 3 ? <p className="side-note">5% discount during 2022</p> : ""}
                {item.id === 4 ? <p className="side-note">8% discount during 2022</p> : ""}
              </div>
            );
          })}
        </div>
        <div className="host-details">
          <p>
            Support all the features of personal websites, corporate sites, news
            and commercial sites with 24 hours technical support.
          </p>
          <p>
            Go Online, choose your plan and Contact us on:{" "}
            <a href="#">contact@focal-x.com</a> |{" "}
            <a href="tel:+963 935 033 139">+963 935 033 139</a>
          </p>
        </div>
      </section>
    </>
  );
}
