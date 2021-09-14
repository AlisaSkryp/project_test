let currentStepIndex = 0;
const nextBtn = document.getElementById("nextBtn");
const tabs = document.getElementsByClassName("tab");
const stepIndicators = document.getElementsByClassName("step");
const stepText = document.getElementById("step-text");
const stepTexts = [
    "",
    "",
    "E.g.: New Roads or 70760 We don’ t use postal addresses to contact members directly!",
    "Please enter a valid email address",
    "",
];
const stepTextsStyle = [
    "step-text",
    "step-text",
    "step-text",
    "step-text-red",
    "step-text",
];

window.onload = showStepForm();
window.onload = function() {
    let t = document.getElementsByClassName("hidden");
    for (let i = 0; i < t.length; i++) {
        t[i].style.display = "none";
    }
};

function openForm() {
    let hiddenElements = document.getElementsByClassName("hidden");
    for (let i = 0; i < hiddenElements.length; i++) {
        hiddenElements[i].style.display = "flex";
    }
}

function showStepForm() {
    tabs[currentStepIndex].style.display = "block";

    if (currentStepIndex < tabs.length - 1) {
        nextBtn.innerHTML = "Next step";
    } else {
        nextBtn.className = "button-color";
        nextBtn.style.background = "green";
        nextBtn.innerHTML = "Start now";
    }
    stepText.innerHTML = stepTexts[currentStepIndex];
    stepText.className = stepTextsStyle[currentStepIndex];
    adjustStepIndicator();
}

function adjustStepIndicator() {
    for (let i = 0; i < stepIndicators.length; i++) {
        stepIndicators[i].className = stepIndicators[i].className.replace(
            " active",
            ""
        );
    }
    stepIndicators[currentStepIndex].className += " active";
}

function nextBtnOnClick() {
    if (!validateForm()) {
        return false;
    }
    tabs[currentStepIndex].style.display = "none";
    currentStepIndex++;
    if (currentStepIndex >= tabs.length) {
        document.getElementById("regForm").submit();
        return false;
    }
    showStepForm();
}

function prevBtnOnClick() {
    if (currentStepIndex <= 0) {
        return;
    }
    tabs[currentStepIndex].style.display = "none";
    currentStepIndex--;
    showStepForm();
}

function validateForm() {
    let valid = true;
    let inputFields = tabs[currentStepIndex].getElementsByTagName("input");
    for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value == "") {
            inputFields[i].className += " invalid";
            valid = false;
            break;
        }
    }
    if (valid) {
        stepIndicators[currentStepIndex].className += " finish";
    }
    return valid;
}