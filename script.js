const installOptions = {
  mac: {
    title: "Homebrew",
    note: "Installs both `mb` and `mbd`.",
    code: "brew tap OpenCow42/tap && brew install mb"
  },
  ubuntu24: {
    title: "Ubuntu 24.04",
    note: "Installs the `metabrain` package for amd64.",
    code: [
      "echo 'deb [trusted=yes] https://opencow42.github.io/apt-repo ubuntu24.04 main' | sudo tee /etc/apt/sources.list.d/opencow.list",
      "sudo apt update",
      "sudo apt install metabrain"
    ].join("\n")
  },
  ubuntu26: {
    title: "Ubuntu 26.04",
    note: "Installs the `metabrain` package for amd64.",
    code: [
      "echo 'deb [trusted=yes] https://opencow42.github.io/apt-repo ubuntu26.04 main' | sudo tee /etc/apt/sources.list.d/opencow.list",
      "sudo apt update",
      "sudo apt install metabrain"
    ].join("\n")
  },
  source: {
    title: "Build from source",
    note: "Requires Swift 6.3 or newer.",
    code: [
      "git clone https://github.com/OpenCow42/metaBrain.git",
      "cd metaBrain",
      "swift build"
    ].join("\n")
  }
};

const installCode = document.querySelector("#install-code");
const installHeading = document.querySelector("#install-heading");
const installNote = document.querySelector("#install-note");
const tabButtons = document.querySelectorAll("[data-platform]");

function setInstallOption(platform) {
  const option = installOptions[platform];

  if (!option || !installCode || !installHeading || !installNote) {
    return;
  }

  installHeading.textContent = option.title;
  installNote.textContent = option.note;
  installCode.textContent = option.code;

  tabButtons.forEach((button) => {
    const isActive = button.dataset.platform === platform;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setInstallOption(button.dataset.platform);
  });
});

async function copyFromTarget(button) {
  const targetId = button.dataset.copyTarget;
  const target = targetId ? document.getElementById(targetId) : null;

  if (!target) {
    return;
  }

  const originalLabel = button.textContent;
  const text = target.textContent;

  try {
    if (!navigator.clipboard || !window.isSecureContext) {
      throw new Error("Clipboard API unavailable");
    }

    await navigator.clipboard.writeText(text);
    button.textContent = "Copied";
  } catch {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(target);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      document.execCommand("copy");
      button.textContent = "Copied";
    } catch {
      button.textContent = "Selected";
    }
  }

  window.setTimeout(() => {
    button.textContent = originalLabel;
  }, 1600);
}

document.querySelectorAll("[data-copy-target]").forEach((button) => {
  button.addEventListener("click", () => {
    copyFromTarget(button);
  });
});
