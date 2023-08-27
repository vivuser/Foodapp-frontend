import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="p-4 bg-white shadow-md mb-4">
      <h3>{title}</h3>
      <div className="mt-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
      {isVisible && <p className="mt-2">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");

  return (
    <div className="bg-yellow-200 p-4">
      <h1 className="text-2xl font-semibold mb-4">Instamart</h1>
      <div className="font-medium">
      <Section
        title={"Instamart"}
        description={"description of instamart ..."}
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
      />
      </div>
      <div className="font-medium">
      <Section
        title={"team instamart"}
        description={"Instamart is a chain of online convenience stores. Instant meals, snacks, fruits and vegetables, ice creams, and other things are available through these virtual convenience stores.Swiggy provides these things through its partner “dark stores,” which are exclusively available online and its hubs"}
        isVisible={visibleSection === "team"}
        setIsVisible={() => setVisibleSection("team")}
      />
      </div>
      <div className="font-medium">
      <Section
        title={"product instamart"}
        description={"Swiggy has over 20 million monthly users and does 1.5 million orders a day as of June 2021. Its orders have grown 2.5 times, while revenue has grown 2.8 times from June 2020 to June 2021.Based on the insight that households order a limited subset of products every day, Swiggy Instamart promises to deliver your order within 45 minutes, from 7 am to 1 am."}
        isVisible={visibleSection === "product"}
        setIsVisible={() => setVisibleSection("product")}
      />
      </div>
      <div className="font-medium">
      <Section
        title={"detail instamart"}
        description={"You can access Instamart in the Swiggy app by clicking on the Instamart tile on the home page of the Swiggy app.Instamart aims to fulfill the unmet grocery needs of its urban customer, at even the odd times of the day.These deliveries are made within less than an hour so there is no waiting with Instamart.Now you can Download the Swiggy app and try Instamart now."}
        isVisible={visibleSection === "detail"}
        setIsVisible={() => setVisibleSection("detail")}
      />
      </div>
    </div>
  );
};

export default Instamart;
