import React from "react";

export default function Team({ teamMember }) {
    return (
        <>
            <div>
                <img
                    className="team__img"
                    src={teamMember.photoUrl}
                    alt="Team member photo"
                />
                <p className="team__person">{teamMember.name}</p>
                <p className="team__role">
                    {" "}
                    {teamMember.abbr ? (
                        <p className="team__role">
                            <abbr title={teamMember.abbr}>
                                {teamMember.role}
                            </abbr>
                        </p>
                    ) : (
                        <p className="team__role">{teamMember.role}</p>
                    )}
                </p>
            </div>
        </>
    );
}
