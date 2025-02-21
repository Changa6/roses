
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  /* filepath: /c:/Users/Microsoft/Desktop/rose/script.js */
function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long',
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    document.getElementById('datetime-display').textContent = now.toLocaleDateString('en-US', options);
}

// Update time immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);

// Add this to your existing window.onload function or create one
window.onload = function() {
    document.body.classList.remove('not-loaded');
    updateDateTime();
}