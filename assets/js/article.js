function confirmDelete(event) {
  const confirmed = confirm("Êtes-vous sûr de vouloir supprimer votre compte ?");

  if (!confirmed) {
      event.preventDefault();
      return false;
  }

  const confirmDeleteCheckbox = document.getElementById('confirmDeleteCheckbox');

  if (!confirmDeleteCheckbox.checked) {
      event.preventDefault();
      alert("Veuillez confirmer que cette action est irréversible en cochant la checkbox.");
      return false;
  }
}