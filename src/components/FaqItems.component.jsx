import React from "react";

export default function FaqItems({ faqQuestion }) {
    const toggleCollapsible = function toggleCollapsibleElementsWhenCLicking(
        event
    ) {
        const answer = event.target.nextElementSibling;
        event.target.classList.toggle("faq__collbutton_open");
        event.target.querySelector("img").classList.toggle("rotate180");
        answer.classList.toggle("faq__answer_visible");
    };

    return (
        <>
            <button
                class="faq__collbutton"
                aria-label="Show/hide question"
                onClick={toggleCollapsible}
            >
                {faqQuestion.question}
                <img
                    class="faq__chevron"
                    src="./assets/chevron-down.svg"
                    alt="Menu icon"
                />
            </button>
            <div class="faq__answer">{faqQuestion.answer}</div>
        </>
    );
}
