# Exercice 3

# Partie 1

Reprendre l'exercice précédent, installer et configurer sequelize, sqlite3. 
Rendre les données de l'API persistantes

# Partie 2 

Jusque maintenant, nous n'avions qu'une seule bibliothèque pour nos livres donc aucune raison de gérer ce fonctionnement.
L'API souhaite s'étendre, elle souhaite gérer plusieurs bibliothèques.

Ajouter un modèle pour les bibliothèques : une bibliothèque a un nom et une adresse, et possède plusieurs livres.
Un livre est lié à exactement une bibliothèque.

Il n'est pas demandé de faire toutes les routes pour les bibliothèques, mais a minima la route pour créer la bibliothèque, et récupérer la bibliothèque et les livres qu'elle possède
Donc nouveau routeur, nouveau controller, nouveau service et nouveau model.

Démarche conseillée : 

1. Créer le nouveau model Library
2. Modifier le fichier de configuration sequelize
3. Créer le nouveau routeur et le lier à index.js
4. Créer le nouveau controller et le lier au routeur
5. Créer le nouveau service et le lier au controller