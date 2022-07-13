import React from "react";
import Card from "../components/card";
import pns from "../assets/pns.png"
import da from '../assets/DA.png'
import py from '../assets/python.jpg'


const Courses = () => {
  return (
    <>
      <div class="grid grid-cols-3 gap-4">
        <div>
          <Card
            title="Data Analytics"
            description="The data analytics process has some components that can help a variety of initiatives. By combining these components, a successful data analytics initiative will provide a clear picture of where you are, where you have been and where you should go."
            image={da}
          />
        </div>
        <div>
          <Card
            title="Probability and Statistics"
            description="Probability is the measure of the likelihood that an event will occur in a Random Experiment. Probability is quantified as a number between 0 and 1, where, loosely speaking, 0 indicates impossibility and 1 indicates certainty."
            image={pns}
          />
        </div>
        <div>
          <Card
            title="Python"
            description="Python is a high-level, interpreted, general-purpose programming language highly used in Data Analytics"
            image={py}
          />
        </div>
      </div>
    </>
  );
};

export default Courses;
