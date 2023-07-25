// Cette fonction est exécutée lorsque le document est prêt (DOM est chargé).
$(function(){
  // Sélectionne l'élément avec la classe "hamburger" (bouton de menu) et l'élément avec la classe "navlinks-container" (conteneur des liens de navigation).
  const toggler = document.querySelector(".hamburger");
  const navLinksContainer = document.querySelector(".navlinks-container");
  
  // Fonction qui permet de basculer l'état du menu de navigation (ouvert ou fermé) lors du clic sur le bouton.
  const toggleNav = e => {
    // Animation du bouton : Ajoute ou supprime la classe "open" pour afficher ou masquer la transformation du bouton hamburger en croix.
    toggler.classList.toggle("open");
  
    // Récupère l'attribut "aria-expanded" du bouton hamburger et le modifie pour refléter l'état du menu de navigation.
    const ariaToggle =
      toggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
    toggler.setAttribute("aria-expanded", ariaToggle);
  
    // Slide de la navigation : Ajoute ou supprime la classe "open" pour afficher ou masquer le conteneur des liens de navigation.
    navLinksContainer.classList.toggle("open");
  };
  
  // Ajoute un gestionnaire d'événement "click" au bouton hamburger pour déclencher la fonction toggleNav lorsqu'il est cliqué.
  toggler.addEventListener("click", toggleNav);
  
  // Utilise ResizeObserver pour détecter les changements de taille de la fenêtre et ajuster la transition du menu de navigation en fonction de la largeur.
  new ResizeObserver(entries => {
    // Vérifie si la largeur de la fenêtre est inférieure ou égale à 900 pixels.
    if (entries[0].contentRect.width <= 900){
      // Si la condition est vraie, ajoute une transition au conteneur des liens de navigation pour une animation fluide.
      navLinksContainer.style.transition = "transform 0.4s ease-out";
    } else {
      // Sinon, supprime la transition pour une apparence instantanée sans animation.
      navLinksContainer.style.transition = "none";
    }
  }).observe(document.body); // Observe les changements de taille de la fenêtre en ciblant le corps du document.
});
