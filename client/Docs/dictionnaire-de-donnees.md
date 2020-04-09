# Dictionnaire de données

## Utilisateur (`user`)

| Champ        | Type         | Spécificités                                    | Description                                         |
| ------------ | ------------ | ----------------------------------------------- | --------------------------------------------------- |
| id           | INT(11)      | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | L'identifiant de l'utilisateur                      |
| firstname    | VARCHAR(100) | NOT NULL                                        | Prénom de l'utilisateur                             |
| lastname     | VARCHAR(100) | NOT NULL                                        | Nom de l'utilisateur                                |
| age          | INT          | NOT NULL                                        | Âge de l'utilisateur                                |
| gender       | VARCHAR(50)  | NOT NULL                                        | Féminin ou masculin                                 |
| phone        | VARCHAR(50)  | NULL                                            | Numero de téléphone (optionnel)                     |
| email        | VARCHAR(150) | NOT NULL, UNIQUE                                | Adresse email                                       |
| password     | VARCHAR(200) | NOT NULL                                        | Mot de passe                                        |
| role         | JSON         | NOT NULL                                        | Rôle de l'utilisateur                               |
| avatar       | VARCHAR(255) | NOT NULL                                        | Avatar de l'utilisateur                             |
| surfStart    | VARCHAR(255) | NULL                                            | Quand et où as-tu commencé le surf                  |
| favoriteSpot | VARCHAR(255) | NULL                                            | Quel est ton spot préféré                           |
| currentBoard | VARCHAR(255) | NULL                                            | Avec quelle planche surfes-tu en ce moment          |
| createdAt    | TIMESTAMP    | NOT NULL, DEFAULT CURRENT_TIMESTAMP             | La date de création de l'utilisateur                |
| updatedAt    | TIMESTAMP    | NULL                                            | La date de la dernière mise à jour de l'utilisateur |
| level_id     | ENTITY       | NOT NULL, UNSIGNED                              | Clé étrangère de la table 'Level'                   |

## Trajets (`ride`)

| Champ           | Type         | Spécificités                                    | Description                                  |
| --------------- | ------------ | ----------------------------------------------- | -------------------------------------------- |
| id              | INT(11)      | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | L'identifiant du trajet                      |
| cityDeparture   | VARCHAR(150) | NOT NULL                                        | Ville de départ                              |
| placeDeparture  | VARCHAR(150) | NOT NULL                                        | Lieu de départ                               |
| departureDate   | DATE         | NOT NULL                                        | Date de départ                               |
| departureHour   | INT          | NOT NULL                                        | Heure de départ                              |
| returnDate      | DATE         | NULL                                            | Date de retour                               |
| returnHour      | INT          | NULL                                            | Heure de retour                              |
| isSameGender    | BOOLEAN      | NOT NULL                                        | Possibilité entre filles ou entre hommes     |
| price           | VARCHAR(100) | NOT NULL, UNSIGNED                              | Tarif/personne                               |
| availableSeats  | TINYINT      | NOT NULL, UNSIGNED                              | Nombre de sièges disponibles                 |
| boardMax        | TINYINT      | NOT NULL, UNSIGNED                              | Nombre max de planche possible               |
| boardSizeMax    | TINYINT      | NOT NULL, UNSIGNED                              | Longueur max de la taille de planche permise |
| rideDescription | TEXT         | NULL                                            | Description additionelle du trajet           |
| isRideOnly      | BOOLEAN      | NOT NULL                                        | Possibilité de surfer ou pas                 |
| createdAt       | TIMESTAMP    | NOT NULL, DEFAULT CURRENT_TIMESTAMP             | La date de création du trajet                |
| updatedAt       | TIMESTAMP    | NULL                                            | La date de la dernière mise à jour du trajet |
| car_id          | ENTITY       | NOT NULL, UNSIGNED                              | Clé étrangère de la table 'Car'              |
| spot_id         | ENTITY       | NOT NULL, UNSIGNED                              | Clé étrangère de la table 'Spot'             |


## Match (`match`)

| Champ          | Type        | Spécificités                                    | Description                                              |
| -------------- | ----------- | ----------------------------------------------- | -------------------------------------------------------- |
| id             | INT(11)     | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | L'identifiant du type                                    |
| is_favorite    | BOOLEAN     | NOT NULL                                        | Identifier si le trajet a été mis en favori              |
| responseStatus | VARCHAR(50) | NOT NULL                                        | Status du trajet en fonction de la réponse du conducteur |
| createdAt      | TIMESTAMP   | NOT NULL, DEFAULT CURRENT_TIMESTAMP             | La date de création du match                             |
| updatedAt      | TIMESTAMP   | NULL                                            | La date de la dernière mise à jour du match              |
| user_id        | ENTITY      | NOT NULL, UNSIGNED                              | Clé étrangère de la table 'User'                         |
| ride_id        | ENTITY      | NOT NULL, UNSIGNED                              | Clé étrangère de la table 'Ride'                         |

## Niveau en surf (`level`)

| Champ      | Type         | Spécificités                                    | Description                                  |
| ---------- | ------------ | ----------------------------------------------- | -------------------------------------------- |
| id         | INT(11)      | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | L'identifiant du type                        |
| name       | VARCHAR(100) | NOT NULL                                        | Intitulé du niveau                           |
| levelOrder | TINYINT      | NOT NULL, UNSIGNED                              | Ordre de tri des niveaux                     |
| createdAt  | TIMESTAMP    | NOT NULL, DEFAULT CURRENT_TIMESTAMP             | La date de création du niveau                |
| updatedAt  | TIMESTAMP    | NULL                                            | La date de la dernière mise à jour du niveau |

## Voiture (`car`)

| Champ     | Type         | Spécificités                                    | Description                                            |
| --------- | ------------ | ----------------------------------------------- | ------------------------------------------------------ |
| id        | INT(11)      | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | L'identifiant du type                                  |
| brand     | VARCHAR(100) | NOT NULL                                        | Marque de la voiture                                   |
| model     | VARCHAR(100) | NOT NULL                                        | Modèle de la voiture                                   |
| createdAt | TIMESTAMP    | NOT NULL, DEFAULT CURRENT_TIMESTAMP             | La date de création de l'entrée voiture                |
| updatedAt | TIMESTAMP    | NULL                                            | La date de la dernière mise à jour de l'entrée voiture |
| user_id   | ENTITY       | NOT NULL, UNSIGNED                              | Clé étrangère de la table 'User'                       |

## Message (`message`)

| Champ     | Type      | Spécificités                                    | Description                                             |
| --------- | --------- | ----------------------------------------------- | ------------------------------------------------------- |
| id        | INT       | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | L'identifiant du type                                   |
| content   | TEXT      | NOT NULL                                        | Contenu du message                                      |
| createdAt | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP             | La date de création du message                          |
| updatedAt | TIMESTAMP | NULL                                            | La date de la dernière mise à jour du profil du message |
| user_id   | ENTITY    | NOT NULL, UNSIGNED                              | Clé étrangère de la table 'User'                        |
| ride_id   | ENTITY    | NOT NULL, UNSIGNED                              | Clé étrangère de la table 'Ride'                        |

## Spots de surf (`spot`)

| Champ     | Type         | Spécificités                                    | Description                                |
| --------- | ------------ | ----------------------------------------------- | ------------------------------------------ |
| id        | INT(11)      | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | L'identifiant du type                      |
| name      | VARCHAR(255) | NOT NULL                                        | Nom du spot                                |
| lat       | DOUBLE       | NOT NULL, SIGNED                                | Lattitude                                  |
| lon       | DOUBLE       | NOT NULL, SIGNED                                | Longitude                                  |
| createdAt | TIMESTAMP    | NOT NULL, DEFAULT CURRENT_TIMESTAMP             | La date de création du spot                |
| updatedAt | TIMESTAMP    | NULL                                            | La date de la dernière mise à jour du spot |





