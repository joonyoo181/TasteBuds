# TasteBuds: Project Specification

## Objective
Provide a platform to help users decide on restaurants based on their cravings & share their food journey with friends!

## User Motivations
Friends are hungry but can’t decide on what to eat. This app helps them decide based on location, price range, cuisine, meal time, etc

## Technologies
Frontend: React.js
Backend: Flask
Database: MongoDB

## User Interface
Figma File Link
https://www.figma.com/file/OeC9MybkoIXMEPiW5FWtzT/TasteBuds-UI?t=JwCamBixfTPdBtBj-1

## Project Specification
Google Document link
https://docs.google.com/document/d/1MkxFrGBecykA-c8DWRaSt4JIjT3l-FU1pYlGaPYc-0M/edit?usp=sharing

## App Runthrough
A new user creates an account and logs into the app. They are now given the ability to create groups or upload new food to the database. When creating groups, they are provided with an URL that can be shared to their friends. Their friends can click on the link to join the group. The group creator has the ability to kick members and set preferences of food (Location, Price Range, Cuisine, Breakfast/Lunch/Dinner, Allergens). Once all friends are in the group and preferences have been set, the group owner clicks on "Start Matching!" button. This will redirect all members to the Swipe Page. Here, the members are prompted with a food cards (based on the preferences that were set previously) where they can choose to swipe left to drop the food or swipe right to like the food. Same ~20 cards will be displayed to each memeber. If a member finishes swiping early, they are redirected to the Waiting for Others Page. Once all members finish, they are all directed to the Final Decision Page where they are matched with a food card based on the card that was liked the most. Upon a tie, both cards will be shown. Now everyones happy :D.

## Pages
### Home Page
Landing Page
![Frame_ HomePage](https://user-images.githubusercontent.com/59751754/226257486-4688f24a-0e7f-4b0c-9e7e-d94fcc8629b7.png)
### Log-In / Sign-Up Page
Where users can log in or sign up
![Frame_ Login Page](https://user-images.githubusercontent.com/59751754/226257543-1fbbcb51-d27d-4e9e-84bd-94d5f5e2409f.png)
![Frame_ Register Page](https://user-images.githubusercontent.com/59751754/226257555-7193ab19-7bb8-4664-97af-94e72457b2e8.png)
### Group Page
Where you can manage the group members, food preferences
![Frame_ Group Page](https://user-images.githubusercontent.com/59751754/226257618-adaeae41-f640-4e47-826a-ecba483896ff.png)
### Swipe Page
Where you can swipe left to drop food, right to keep food
![Frame_ Swipe Page](https://user-images.githubusercontent.com/59751754/226257630-c7eee8b8-8fc9-43fb-acd3-ee24c39ffce1.png)
### Waiting for Others Page
If one user finishes early, they are redirected to this page until everyone else in the group finishes
![Frame_ Waiting Page](https://user-images.githubusercontent.com/59751754/226257644-a6c6f668-9c38-422a-bad6-2c65f2711734.png)
### Final Decision Page
Displays food for everyone in that group 
![Frame_ Decision Page](https://user-images.githubusercontent.com/59751754/226257679-9cf309d8-1ea9-4270-bac3-ea44247bb242.png)
### Upload Page
Where any logged in users can upload food
![Frame_ Upload Page](https://user-images.githubusercontent.com/59751754/226257728-979b5ef0-6dab-4a68-a62c-3379258406f1.png)
