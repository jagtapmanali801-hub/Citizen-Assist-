// Citizen Assist - Checklist functionality

function renderChecklist(steps) {
  const container = document.getElementById("checklistContainer");
  container.innerHTML = "";

  steps.forEach(stepHtml => {
    const label = document.createElement("label");

    label.className =
      "flex items-start space-x-3 bg-slate-50 p-3 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-100 transition";

    label.innerHTML = `
      <input type="checkbox"
             class="checklist-item mt-0.5 w-4 h-4 rounded text-blue-600"
             onchange="calculateChecklistProgress()">
      <span>${stepHtml}</span>
    `;

    container.appendChild(label);
  });

  calculateChecklistProgress();
}

function calculateChecklistProgress() {
  const items = document.querySelectorAll(".checklist-item");
  const output = document.getElementById("guideProgressPercent");

  if (!items.length) {
    output.innerText = "0%";
    return;
  }

  const checked = [...items].filter(item => item.checked).length;
  const percentage = Math.round((checked / items.length) * 100);

  output.innerText = percentage + "%";
}
