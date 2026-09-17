/* EcoTravel Week 2 - Interactive FAQ Accordion */
"use strict";

document.addEventListener("DOMContentLoaded", function () {
    try {
        initializeFAQ();
        initializeCurrentYear();
    } catch (error) {
        console.error("EcoTravel initialization error:", error);
        const errorBox = document.getElementById("faq-error");
        if (errorBox) errorBox.hidden = false;
    }
});

function initializeFAQ() {
    const accordion = document.getElementById("faqAccordion");
    if (!accordion) throw new Error("FAQ accordion element was not found.");

    const buttons = accordion.querySelectorAll(".faq-button");
    if (!buttons.length) throw new Error("No FAQ buttons were found.");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            toggleFAQ(button);
        });
    });
}

function toggleFAQ(button) {
    const answerId = button.getAttribute("aria-controls");
    if (!answerId) return;

    const answer = document.getElementById(answerId);
    if (!answer) return;

    const isOpen = button.getAttribute("aria-expanded") === "true";
    closeAllFAQs(button);

    if (isOpen) {
        closeFAQ(button, answer);
    } else {
        openFAQ(button, answer);
    }
}

function openFAQ(button, answer) {
    button.setAttribute("aria-expanded", "true");
    answer.hidden = false;
    requestAnimationFrame(function () {
        answer.classList.add("is-open");
    });
}

function closeFAQ(button, answer) {
    button.setAttribute("aria-expanded", "false");
    answer.classList.remove("is-open");

    window.setTimeout(function () {
        if (button.getAttribute("aria-expanded") === "false") {
            answer.hidden = true;
        }
    }, 350);
}

function closeAllFAQs(activeButton) {
    document.querySelectorAll(".faq-button").forEach(function (button) {
        if (button === activeButton) return;

        const answer = document.getElementById(
            button.getAttribute("aria-controls")
        );

        if (answer && button.getAttribute("aria-expanded") === "true") {
            closeFAQ(button, answer);
        }
    });
}

function initializeCurrentYear() {
    const yearElement = document.getElementById("currentYear");
    if (yearElement) yearElement.textContent = new Date().getFullYear();
}
