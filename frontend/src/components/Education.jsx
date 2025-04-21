import React from "react";
import ExperienceCard from './ExperienceCard'
import school from "../assets/school.png"
import university from "../assets/university.png"
import Jharkhand from "../assets/Jharkhand.png"

// {logo,name,grade,unit,address,startDate,endDate="present"}

const Education = () => {
  return (
    <section className="py-20 px-4 md:px-12 bg-[#0d0d0d] text-white ">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Education</h2>

        <ExperienceCard logo={university} name={"Lovely Professional University, Punjab"} grade={"B.Tech - CSE - 8.11 CGPA"} address={"Jalandhar, Punjab-144411"} startDate={"Aug 2022"} endDate="present"/>
        
        <ExperienceCard logo={Jharkhand} name={"Plus Two High School Atka"} grade={"XII - PCM - 93.2%"} address={"Atka, Giridih, Jharkhand-825322"} startDate={"Aug 2020"} endDate="July 2022"/>

        <ExperienceCard logo={school} name={"UPG High School Bara"} grade={"X - 86.2%"} address={"Bishnugarh, Hazaribagh, Jharkhand-825322"} startDate={"Mar 2017"} endDate="July 2020"/>
        
      </div>
    </section>
  );
};

export default Education;
