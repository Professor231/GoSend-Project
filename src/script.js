// for the sample/index page
const messageText = document.getElementById("messageText");
const messagePreview = document.getElementById("messagePreview");

messageText.addEventListener("input", () => {
  messagePreview.value = messageText.value;
});

function saveTemplate() {
  alert("Template saved (mock functionality)");
}

function sendMessage() {
  const numbers = document.getElementById("phoneNumbers").value;
  const message = messageText.value;
  const interval = document.getElementById("interval").value;
  console.log("Sending message:", message);
  console.log("To numbers:", numbers);
  console.log("Interval:", interval);
  alert("Sending messages... (mock functionality)");
}

// for the pro-page

// Real-time message preview (if needed, add preview textarea)
const messageText = document.getElementById("messageText");

messageText.addEventListener("input", () => {
  console.log("Message updated:", messageText.value);
});

function saveTemplate() {
  alert("Template saved (mock functionality)");
}

function sendProMessage() {
  const message = document.getElementById("messageText").value;
  const numbers = document.getElementById("phoneNumbers").value;
  const interval = document.getElementById("interval").value;
  const label = document.getElementById("labelSelect").value;
  const sendLabel = document.getElementById("sendLabel").checked;
  const sendGroup = document.getElementById("sendGroup").checked;

  console.log("Sending message:", message);
  console.log("To numbers:", numbers);
  console.log("Interval:", interval);
  console.log("Label:", label);
  console.log("Send to label individually:", sendLabel);
  console.log("Send group one by one:", sendGroup);

  alert("Sending messages... (mock functionality)");
}

function deleteUploadedNumbers() {
  document.getElementById("excelUpload").value = "";
  alert("Uploaded numbers deleted (mock functionality)");
}

// Mock Excel upload logic
const excelUpload = document.getElementById("excelUpload");

excelUpload.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    console.log("Uploaded file:", file.name);
    alert(`Uploaded: ${file.name} (mock handling)`);
  }
});

// for the stats page

document.addEventListener("DOMContentLoaded", () => {
  const totalMessages = 201;
  let sentSuccess = 0;
  let sentFailed = 0;
  let deduplicated = 0;

  function updateDOM() {
    document.getElementById("sentSuccess").textContent = sentSuccess;
    document.getElementById("sentFailed").textContent = sentFailed;
    document.getElementById("deduplicated").textContent = deduplicated;
    document.getElementById("totalSent").textContent = totalMessages;
    document.getElementById("currentProgress").textContent = `${
      sentSuccess + sentFailed
    }/${totalMessages}`;
  }

  function simulateStats() {
    const interval = setInterval(() => {
      const remaining = totalMessages - (sentSuccess + sentFailed);

      if (remaining <= 0) {
        clearInterval(interval);
        return;
      }

      const messagesToSend = Math.min(5, remaining); // send 1–5 at a time
      const successCount = Math.floor(Math.random() * (messagesToSend + 1)); // up to messagesToSend
      const failCount = messagesToSend - successCount;

      sentSuccess += successCount;
      sentFailed += failCount;

      // Deduplicated entries increase slowly
      if (Math.random() > 0.8) {
        deduplicated += Math.floor(Math.random() * 2); // 0 or 1
      }

      updateDOM();
    }, 2000); // every 2 seconds
  }

  // Button functions still mocked
  window.retryFailed = function () {
    alert("Retrying failed messages... (mock)");
  };

  window.exportResult = function () {
    alert("Exporting results... (mock)");
  };

  window.continueSending = function () {
    alert("Continuing message sending... (mock)");
  };

  // Start simulation on page load
  simulateStats();
});
