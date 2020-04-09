# Tableau 

| Titre                                |                  Route                   |  Methode  |               FQCN                | Methode du controller | Qui est en charge |
| :----------------------------------- | :--------------------------------------: | :-------: | :-------------------------------: | :-------------------: | :---------------: |
| Accueil                              |                    /                     |    GET    |   App\Controller\MainController   |         home          |                   |
|                                      |                                          |           |                                   |                       |                   |
| Formulaire d'inscription             |               /inscription               | GET, POST |   App\Controller\UserController   |        userAdd        |                   |
| Formulaire de connexion              |                /connexion                |    GET    | App\Controller\SecurityController |         login         |                   |
| Déconnexion                          |               /deconnexion               |    GET    | App\Controller\SecurityController |        logout         |                   |
| Mon profil                           |              /profil/{slug}              |    GET    |   App\Controller\UserController   |       userShow        |                   |
| Modifier mon profil                  |            /user/{slug}/edit             | GET, POST |   App\Controller\UserController   |       userEdit        |                   |
| Supprimer mon profil                 |           /user/{slug}/delete            |  DELETE   |   App\Controller\UserController   |      userDelete       |                   |
|                                      |                                          |           |                                   |                       |                   |
| Formulaire pour créer un trajet      |                /ride/add                 | GET, POST |   App\Controller\RideController   |        rideAdd        |                   |
| Modification de trajet               |             /ride/{id}/edit              |   POST    |   App\Controller\RideController   |       rideEdit        |                   |
| Suppression de trajet                |            /ride/{id}/delete             |  DELETE   |   App\Controller\RideController   |      rideDelete       |                   |
| Formulaire pour rechercher un trajet |               /ride/search               |    GET    |   App\Controller\RideController   |      rideSearch       |                   |
| Résultats de la recherche            |           /ride/search/results           |    GET    |   App\Controller\RideController   |   rideSearchResults   |                   |
| Trajet sélectionné                   |                /ride/{id}                |    GET    |   App\Controller\RideController   |       rideShow        |                   |
|                                      |                                          |           |                                   |                       |                   |
| Vos trajets en cours                 |               /match/{id}                |    GET    |  App\Controller\matchController   |       matchShow       |                   |
| Accepter un participant              |  /match/{idRide}/accept/{idParticipant}  | GET, POST |  App\Controller\matchController   |      matchAccept      |                   |
| Refuser un participant               |  /match/{idRide}/refuse/{idParticipant}  | GET, POST |  App\Controller\matchController   |      matchRefuse      |                   |
| Modifier la réponse (accès ou refus) |   /match/{idRide}/edit/{idParticipant}   | GET, POST |  App\Controller\matchController   |       matchEdit       |                   |
| Mettre ce trajet en favori           | /match/{idRide}/favorite/{idParticipant} | GET, POST |  App\Controller\matchController   |     matchFavorite     |                   |
| Réserver un trajet                   |   /match/{idRide}/book/{idParticipant}   | GET, POST |  App\Controller\matchController   |       matchBook       |                   |
| Annuler la réservation               |  /match/{idRide}/cancel/{idParticipant}  |   POST    |  App\Controller\matchController   |      matchCancel      |                   |
|                                      |                                          |           |                                   |                       |                   |
| Formulaire pour ajouter une voiture  |                 /car/add                 | GET, POST |   App\Controller\CarController    |        carAdd         |                   |
| Modification de la voiture           |              /car/{id}/edit              |   POST    |   App\Controller\CarController    |        carEdit        |                   |
| Suppression de la voiture            |             /car/{id}/delete             |  DELETE   |   App\Controller\CarController    |       carDelete       |                   |


