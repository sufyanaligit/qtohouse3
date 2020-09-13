import React from "react";
import "./ProjectDetails.scss";
const ProjectDetails = (props) => {
  return (
    <div className="project-details-container">
      <h1>Project Details</h1>
      <div className="content-header">
        <img
          src="https://embed.widencdn.net/img/lendlease/oizi70yizs/x650px/1000%20South%20Clark_0001_PL.jpeg?u=94eilc"
          alt=""
        />

        <h1>1000 South Clark</h1>
        <div class="column column-text left">
          <div class="column-content">
            <p>
              Lendlease was selected by repeat client, JDL Development, to
              provide construction management services for 1000 South Clark, a
              new 29-story residential tower located in Chicago's South Loop
              neighborhood.
            </p>
            <p>
              At 567,000 gross square feet, the building features 469 one, two
              and three bedroom apartments, townhome and duplex units. The
              building offers modern spaces and versatile floor plans; floor to
              ceiling windows with impressive city and lake views; quartz
              countertops and sleek custom cabinets; and spa quality bathrooms.
            </p>
            <p>
              As a result of the building's large footprint, residents are
              offered a number of indoor resort-style amenities including 10,000
              square feet of fitness space featuring 40 professional grade
              machines plus two Fitness-on-Demand rooms; an indoor/outdoor pool;
              1/6 mile rooftop running track; basketball and racquetball courts;
              4th floor amenity deck with fire pits and outdoor kitchens with
              grill stations; 29th floor skydeck with dramatic lake views; and a
              5,000 square foot outdoor dog run. Additional resident
              conveniences include private library and wine bar; on-site pet
              care facility; and 88,000 square feet of resident-only parking for
              329 vehicles.
            </p>
            <p>
              Built upon the success of Maple Tower, 1225 Old Town and 3740
              North Halsted projects, 1000 South Clark marks Lendlease's fourth
              collaboration with JDL Development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
