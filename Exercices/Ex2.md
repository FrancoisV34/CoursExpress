# Exercice 1

Réaliser une API Express de gestion de livres.
peuvent ajouter, mettre à jour, récupérer et supprimer des livres à l'aide des méthodes HTTP GET, POST, PUT et DELETE.

Aucun base de données n'est requise pour le moment.

Exemple de JSON de livre :

```
  {
    "id": 1,
    "titre": "Le Petit Prince",
    "auteur": "Antoine de Saint-Exupéry",
    "annee_publication": 1943,
    "genre": "Conte philosophique",
    "disponible": true
  },
```

Rajouter une route pour GET /available (disponible : true)
Et 1 avec GET /genre pour récupérer les livres du genre policier (/genre?query=policier)
