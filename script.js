const STORAGE_KEY = "nosso-cantinho-data-v1";

const editableLabels = {
  heroTitle: "Título principal",
  heroSubtitle: "Subtítulo",
  heroButton: "Botão principal",
  photoCaption1: "Legenda foto 1",
  photoCaption2: "Legenda foto 2",
  photoCaption3: "Legenda foto 3",
  photoCaption4: "Legenda foto 4",
  momentsSubtitle: "Subtítulo dos momentos",
  moment1Title: "Momento 1",
  moment1Date: "Data 1",
  moment2Title: "Momento 2",
  moment2Date: "Data 2",
  moment3Title: "Momento 3",
  moment3Date: "Data 3",
  moment4Title: "Momento 4",
  moment4Date: "Data 4",
  love1: "Coisa que amo 1",
  love2: "Coisa que amo 2",
  love3: "Coisa que amo 3",
  love4: "Coisa que amo 4",
  love5: "Coisa que amo 5",
  love6: "Coisa que amo 6",
  stickyNote: "Bilhetinho roxo",
  letterText: "Cartinha",
  signature: "Assinatura",
  playlistSubtitle: "Texto da playlist",
  song1Title: "Música 1",
  song1Artist: "Artista 1",
  song2Title: "Música 2",
  song2Artist: "Artista 2",
  song3Title: "Música 3",
  song3Artist: "Artista 3",
  finalTitle: "Título final",
  finalText: "Texto final",
  footerText: "Texto do rodapé"
};

const linkLabels = {
  song1Url: "Link da música 1",
  song2Url: "Link da música 2",
  song3Url: "Link da música 3"
};

let currentData = structuredClone(window.SITE_DATA);

function mergeData(base, override) {
  return {
    texts: { ...base.texts, ...(override?.texts || {}) },
    images: { ...base.images, ...(override?.images || {}) },
    links: { ...base.links, ...(override?.links || {}) }
  };
}

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      currentData = mergeData(window.SITE_DATA, JSON.parse(saved));
    } catch {
      currentData = structuredClone(window.SITE_DATA);
    }
  }
  applyData();
}

function applyData() {
  document.querySelectorAll("[data-edit]").forEach((el) => {
    const key = el.dataset.edit;
    if (currentData.texts[key] !== undefined) {
      el.textContent = currentData.texts[key];
    }
  });

  document.querySelectorAll("[data-img]").forEach((img) => {
    const key = img.dataset.img;
    if (currentData.images[key]) {
      img.src = currentData.images[key];
    }
  });

  document.querySelectorAll("[data-link]").forEach((link) => {
    const key = link.dataset.link;
    if (currentData.links[key]) {
      link.href = currentData.links[key];
    }
  });
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));
  applyData();
  alert("Salvo neste navegador!");
}

function buildTextFields() {
  const fields = document.getElementById("fields");
  fields.innerHTML = "";

  Object.keys(editableLabels).forEach((key) => {
    const wrapper = document.createElement("div");
    wrapper.className = "field";

    const label = document.createElement("label");
    label.textContent = editableLabels[key];

    const isLong = ["letterText", "heroSubtitle", "finalText", "stickyNote"].includes(key);
    const input = document.createElement(isLong ? "textarea" : "input");
    input.value = currentData.texts[key] || "";
    input.dataset.fieldKey = key;

    input.addEventListener("input", () => {
      currentData.texts[key] = input.value;
      applyData();
      highlightElement(key);
    });

    wrapper.append(label, input);
    fields.appendChild(wrapper);
  });
}

function buildLinkFields() {
  const fields = document.getElementById("linkFields");
  fields.innerHTML = "";

  Object.keys(linkLabels).forEach((key) => {
    const wrapper = document.createElement("div");
    wrapper.className = "field";

    const label = document.createElement("label");
    label.textContent = linkLabels[key];

    const input = document.createElement("input");
    input.className = "link-input";
    input.value = currentData.links[key] || "";
    input.placeholder = "Cole o link do Spotify ou YouTube";
    input.addEventListener("input", () => {
      currentData.links[key] = input.value;
      applyData();
    });

    wrapper.append(label, input);
    fields.appendChild(wrapper);
  });
}

function highlightElement(key) {
  const el = document.querySelector(`[data-edit="${key}"]`);
  if (!el) return;
  el.classList.add("editing");
  clearTimeout(el._editingTimer);
  el._editingTimer = setTimeout(() => el.classList.remove("editing"), 650);
}

function setupUploads() {
  document.querySelectorAll("[data-upload]").forEach((input) => {
    input.addEventListener("change", async () => {
      const file = input.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        currentData.images[input.dataset.upload] = reader.result;
        applyData();
        saveData();
      };
      reader.readAsDataURL(file);
    });
  });
}

function downloadDataFile() {
  const content = `window.SITE_DATA = ${JSON.stringify(currentData, null, 2)};`;
  const blob = new Blob([content], { type: "application/javascript;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "site-data.js";
  a.click();
  URL.revokeObjectURL(url);
}

document.getElementById("editToggle").addEventListener("click", () => {
  document.getElementById("editorPanel").classList.add("open");
  document.getElementById("editorPanel").setAttribute("aria-hidden", "false");
  buildTextFields();
  buildLinkFields();
});

document.getElementById("closeEditor").addEventListener("click", () => {
  document.getElementById("editorPanel").classList.remove("open");
  document.getElementById("editorPanel").setAttribute("aria-hidden", "true");
});

document.getElementById("saveData").addEventListener("click", saveData);

document.getElementById("resetData").addEventListener("click", () => {
  if (!confirm("Tem certeza que quer restaurar o modelo original neste navegador?")) return;
  localStorage.removeItem(STORAGE_KEY);
  currentData = structuredClone(window.SITE_DATA);
  applyData();
  buildTextFields();
  buildLinkFields();
});

document.getElementById("downloadData").addEventListener("click", downloadDataFile);

setupUploads();
loadData();
