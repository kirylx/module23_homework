import React from "react";

import FaqItems from "../components/FaqItems.component";

function Faq() {
    const faqQuestions = [
        {
            question: "May I cancel my reservation?",
            answer: `Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.`,
        },
        {
            question: "Can I get a refund if the car doesn't fit?",
            answer: `Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.`,
        },
        {
            question: "What to do if an accident happened?",
            answer: `Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.`,
        },
        {
            question: "Can I leave the car in a place convenient for me?",
            answer: `Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.`,
        },
        {
            question: "What if the owner asks to pay him directly?",
            answer: `Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.`,
        },
        {
            question: "Do I have to refuel the car?",
            answer: `Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.`,
        },
    ];

    return (
        <>
            <section className="faq" aria-labelledby="faq" role="main">
                <img
                    className="faq__img"
                    src="./assets/faq.svg"
                    alt="Picture of curious people"
                />
                <h1 className="faq__heading">FAQ</h1>
                <p className="faq__description">
                    We will answer the questions you have.
                </p>
                <div className="faq__collapsible">
                    {faqQuestions.map((faqQuestion, index) => (
                        <FaqItems key={index} faqQuestion={faqQuestion} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Faq;
