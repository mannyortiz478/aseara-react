import React from "react";
import InformationCard from "./InformationCard";
import { faBuilding, faHouse } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Residential Cleaning"
          description="Our residential cleaning services ensure your home is immaculate and well-organized. We provide comprehensive dusting of furniture, frames, baseboards, and more, as well as cobweb removal and thorough vacuuming under furniture and rugs. Kitchens are meticulously cleaned, including countertops, appliance exteriors, sinks, microwaves, stovetops, and cabinet exteriors, followed by a final vacuum and mop of the floor. Bathrooms receive detailed attention with scrubbing and sanitizing of showers, sinks, vanities, bathtubs, and toilets, along with soap scum and mildew removal. Bedrooms are tidied with beds made, sheets changed upon request, and all surfaces dusted and vacuumed. Trash removal and liner replacement are included in all rooms, ensuring a clean and fresh living space."
          icon={faHouse}
        />

        <InformationCard
          title="Commercial Cleaning"
          description="Our commercial cleaning services keep your office space professional and spotless. We handle general dusting of all furniture, frames, lamps, desks, tables, chairs, baseboards, and mini blinds, and remove cobwebs. Thorough vacuuming of rugs, and under and behind furniture is performed to ensure a clean environment. We also clean and sanitize common areas such as halls and glass doors, organize spaces, and manage trash by emptying bins and replacing liners. Additional sterilization of high-touch areas is available upon request to maintain a hygienic workspace, ensuring a productive and inviting atmosphere for your team and visitors."
          icon={faBuilding}
        />
      </div>
    </div>
  );
}

export default Info;
