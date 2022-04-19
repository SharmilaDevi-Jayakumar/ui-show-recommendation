# Show Recommendation Angular Project description

This project serves as the front end for the show recommendation application. <br>
Functionalities: Registration, Login, Logout, new recommendation to the user everytime he/she logins into the app and Reset Recommendation option.

## Deployed server  

Angular project - https://sharmiladevi-jayakumar.github.io/ui-show-recommendation/ 

Springboot project - https://springboot-shows.herokuapp.com

## Steps to use the application on the deployed server 

Hitting the angular project web url, https://sharmiladevi-jayakumar.github.io/ui-show-recommendation/, you will be directed to the Authentication page. <br>
The angular project will communicate to the deployed spring boot project.

# ShowRecommendation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Steps to run the application in local

Step 1: Fetch the Angular project <br>
Step 2: Fetch the springboot project from https://github.com/SharmilaDevi-Jayakumar/show-recommendation <br>
Step 3: Spring boot uses postgresql, so make sure to install postgresql and create a DB schema for storing and retrieving purpose <br>
Step 4: Add the DB configuration and server port in application.properties in your local spring boot project <br>
Step 4: Configure the backend url in angular project <br>
Step 5: Run the angular and backend project. <br>

## Development server for this project

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `docs` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
