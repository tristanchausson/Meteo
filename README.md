# AJAX Request

### Objectif

Manipuler les données d'une api avec des requêtes ajax pour afficher des informations dynamiquement sur un site web.

### Consigne

> Regarder le wireframe pour la mise en page !

- Récuperer votre clef d'api pour openweathermap (si besoin !)
- Avec la documentation de **[openweathermap](https://www.openweathermap.org/current)** afficher la Météo de cahors
- Dans une jolie **card** afficher le nom de la ville, les coordonnées GPS, la vitesse du vent, le taux d'humidité, la pression, la temperature/min/max (convertie en Celius).
- [wireframe](https://screenshots.firefox.com/R6pn3jl26dmekiwp/wireframe.cc)
- Utiliser [L'HTML5 Boilerplate](https://raw.githubusercontent.com/h5bp/html5-boilerplate/master/src/index.html)
- Votre projet doit contenir un dossier :
```
  ├─assets/
  │ ├─js/
  │ └─scss/
  │   └─components/
  └─dist/
    ├─css/
    ├─img/
    └─js/
```

### Bonus :

- Créer un champ texte qui va ajouter des villes et afficher sa météo,
- Stocker toutes les villes enregistrer dans le **LOCALSTORAGE**,
- Utilisation **[Mustach](https://github.com/janl/mustache.js)**
- avec l'api de **[leaflet](http://leafletjs.com/reference-1.2.0.html)** et la longitude et latitude récupérer grace à openweathermap ajouter un markeur sur la map.
- [wireframe](https://screenshots.firefox.com/slzlhIC4fXZysQLU/wireframe.cc)

### Contrainte : 

- Utiliser Gulp,
- Avoir un css et un js minifier,
- Utilisation de jQuery.
- Utiliser Sass, pas de framework.
