
document.addEventListener('DOMContentLoaded', function () {
    initializeAccordion();
});

function initializeAccordion() {
const accordionBtns = document.getElementsByClassName("accordion-button");
if (!accordionBtns.length) return;
for (let i = 0; i < accordionBtns.length; i++) {
  accordionBtns[i].addEventListener("click", function () {
    const currentActiveAcc = document.querySelector(".accordion-button.active");
    if (currentActiveAcc !== null && currentActiveAcc !== this) {
      const currentActiveAccItem = currentActiveAcc.closest(".accordion-item");
      const currentActiveAccBody = currentActiveAccItem.querySelector(".accordion-body");
      currentActiveAcc.classList.remove("active");
      currentActiveAccBody.style.maxHeight = null;
    }
    this.classList.toggle("active");
    const accordionItem = this.closest(".accordion-item");
    const accordionBody = accordionItem.querySelector(".accordion-body");
    accordionBody.style.maxHeight = accordionBody.style.maxHeight ? null : accordionBody.scrollHeight + "px";
  });
}
}