var toggle = false;

// Toggle Mobile Editor (Needs Refactoring to keep it DRY).
function toggleNav() {
  toggle = !toggle;

  if (toggle) {
    document.getElementById("mobileEditor").style.width = "425px";
    document.getElementById("mobile-editor-btn-container").style.width = "462px";
    document.getElementById("left-arrow").style.display = "none";
    document.getElementById("right-arrow").style.display = "block";
  } else {
    document.getElementById("mobileEditor").style.width = "0";
    document.getElementById("mobile-editor-btn-container").style.width = "39px";
    document.getElementById("left-arrow").style.display = "block";
    document.getElementById("right-arrow").style.display = "none";
    document.getElementById("comments-message").style.display = "none";
    document.getElementById("design-links").style.display = "none";
    document.getElementById("content-cards").style.display = "none";
  }
}

function showContent() {
  document.getElementById("comments-message").style.display = "none";
  document.getElementById("design-links").style.display = "none";
  document.getElementById("content-cards").style.display = "flex";
}

function showDesign() {
  document.getElementById("comments-message").style.display = "none";
  document.getElementById("content-cards").style.display = "none";
  document.getElementById("design-links").style.display = "flex";
}

function showComments() {
  document.getElementById("content-cards").style.display = "none";
  document.getElementById("design-links").style.display = "none";
  document.getElementById("comments-message").style.display = "flex";
}