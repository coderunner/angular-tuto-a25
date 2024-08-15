# Demo Angular

Voir la documentation sur Angular: https://angular.dev/

Prérequis pour exécuter l'application:
Node.js - v^18.9.1 ou plus récent
Éditeur de code - Visual Studio Code est recommandé

Cloner le dépôt puis exécuter sur la ligne de commande dans le répertoire racine:

```
npm install
ng serve
```

L'application sera visible dans votre navigateur à l'adresse http://localhost:4200/

Amuzez-vous!

# Structure

## Démo 1

Un composant simple.

Les composants Angular sont constitués de 4 fichiers:

- une classe Typescript (ts) - le comportement du composant
- un template HTML (html) - la structure du composant pour l'affichage
- un fichier css (possiblement scss ou autre selon la configuration du projet) (css) - les styles à appliquer
- un fichier de test pour le composant (ts) - les tests de valdation du composant

Les variables et fonctions publiques de la classe sont accessibles dans le template HTML.

À voir:

- Structure du composant (annotation, classe et accroches du cycle de vie)
- Utilisation de variable dans le template
- Utilisation du 2-way binding
- Utilisation des fonctions et pipes
- Ajout de listeners sur les événements
- Affichage conditionel dans le HTML (@if @else)
- Affichage en boucle dans le HTML (@for)
- Service et injection de dépendance (@Inject)

## Démo 2

Combinaison simple de composants et communication inter-composants.

À voir:

- Interface de model
- Composant Person - Input/Output
- Composant Persons - Utilisation du composant Person

## Démo 3

Combinaison de composants (suite)

À voir:

- ViewChild (référence à l'enfant dans le parent)
- Référence nommée dans le template (syntaxe #)
- Injection de contenu du parent vers l'enfant (<ng-content>)

## Démo 4

Gestion des événements asynchrones.

À voir:

- inject() comme alternative à l'injection de dépendance
- Promise et Observable
- Subscription
- async et await
- HttpClient

## Démo 5

Formulaires réactifs.

À voir:

- FormGroup et FormControl (ReactiveFormsModule)
- lien avec le HTML
- Validateurs

## Démo 6

Signaux: nouveau mécanisme granulaire pour suivre les changements d'états de l'application.

- Signaux (signal, input)
- Dérivés des signaux (computed, effect)

## Navigation

Comment naviguer sur les différentes pages.

À voir:

- app.routes.ts - définition des routes
- app.config.ts - activation du Router
- RouterOutlet - element qui affiche le composant indiqué par la route active
- routerLink - déclancher la navigation
- intercepteur HTTP
