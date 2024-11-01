document.getElementById('emergency-contacts').innerHTML = `
  <h2>Contacts d'Urgence</h2>
  <button onclick="window.location.href='tel:+21612345678'">Appeler la Sécurité</button>
  <button onclick="window.location.href='tel:+21611223344'">Appeler les Pompiers</button>
`;

document.getElementById('first-aid-guide').innerHTML = `
  <h2>Premiers Secours</h2>
  <p>En cas de blessure mineure, nettoyez la plaie et appliquez une pression.</p>
  <p>Appelez immédiatement les secours en cas de blessure grave.</p>
`;

document.getElementById('incident-report-form').innerHTML = `
  <h2>Rapport d'Incident</h2>
  <form id="incident-form">
    <label for="description">Description :</label>
    <textarea id="description" name="description" required></textarea>
    <button type="submit">Envoyer</button>
  </form>
`;

document.getElementById('incident-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const description = document.getElementById('description').value;
  console.log("Incident rapporté :", description);
  alert("Votre rapport a été envoyé.");
});

if ('Notification' in window && navigator.serviceWorker) {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      console.log("Notifications activées.");
    }
  });
}