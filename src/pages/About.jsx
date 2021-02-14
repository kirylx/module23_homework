import React from "react";

import Team from "../components/Team.component";

function About() {
    const aboutUs = (
        <section className="about" aria-labelledby="about" role="main">
            <img
                className="about__img"
                src="./assets/team.svg"
                alt="Picture of team members"
            />
            <h1 className="about__heading">About us</h1>
            <p className="about__description">
                This training project was created in order to get experience in
                the development of real live web applications.This service
                imitates the work of car sharing, in which you can not only rent
                cars, but also rent them out.
            </p>
        </section>
    );

    const contacts = (
        <section className="contacts">
            <h2 className="contacts__heading">Contacts</h2>
            <div className="contacts__container">
                <div className="contacts__item">
                    <p className="contacts__caption">Email</p>
                    <p className="contacts__method">drive@skillfactory.com</p>
                </div>
                <div className="contacts__delimiter" role="separator"></div>
                <div className="contacts__item">
                    <p className="contacts__caption">Telephone</p>
                    <p className="contacts__method">+7 912 123-45-67</p>
                </div>
            </div>
        </section>
    );

    const teamMembers = [
        {
            photoUrl: "./assets/team1.png",
            name: "Peter Nowland",
            role: "CEO",
            abbr: "Chief Executive Officer",
        },
        {
            photoUrl: "./assets/team2.png",
            name: "Abraham Clausen",
            role: "Frontend developer",
        },
        {
            photoUrl: "./assets/team3.png",
            name: "Russell Elliott",
            role: "Backend developer",
        },
        {
            photoUrl: "./assets/team4.png",
            name: "Kurt Parkes",
            role: "Designer",
        },
        {
            photoUrl: "./assets/team5.png",
            name: "Rosann Gust",
            role: "Copywriter",
        },
        {
            photoUrl: "./assets/team6.png",
            name: "Desiree Knecht",
            role: "SMM",
            abbr: "Social Media Merketing",
        },
    ];

    const team = (
        <section className="team">
            <h2 className="team__heading" aria>
                Team
            </h2>
            <div className="team__container">
                {console.log("FIRED")}
                {teamMembers.map((teamMember, index) => (
                    <Team key={index} teamMember={teamMember} />
                ))}
            </div>
        </section>
    );

    return (
        <>
            {aboutUs}
            {contacts}
            {team}
        </>
    );
}

export default About;
