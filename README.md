# Zoo match 
## By Aaron Green
---
## Description

 Zoo match is a game where the user has a pair of 8 cards to match. The game starts with a of set cards hidden faced back for the user to guess and remember each pair. The website consits of two pages , The home page and the game page. The Home page has a start game button where the user can click to direct them to the main game page. 
 The instructions on how to play the game are below the home page for first time vistors.  

---
## UX
### User Stories
1. As a player, I want to know how to play game so I can quickly understand the rules and get started right away. 
2. As a player, I want to have a clear understanding of the card matching mechanism so I can make strategic moves during the game. 
3. As a player, I want to be able to track my progress and see my score that I compete with myself or others.
4. As a player, I want to have the option to reset the game so that I can start a new round whenever I want.
5. As a player, I want to receive feedback and be notified when I make a correct or incorrect card match.
6. As a player, I want the ggame to provide a visually appealing so that it has a fun playful feel.
7. As a player, I want the game to be responsive and work well on different devices and screen sizes. 

### User's goal

The website's purpose is designed for user to have fun, and to test their memory. 
 They will have a record of how many times every move and a score 


### Site owner's goal 

As a site owner this should be a website that anyone can enjoy and return to.  

---
## Design
  * Colour Scheme
    * Background color is orange which is the main color for the site blended with red and yellow to make the design more appealing for the user to give it a fun factor
 * Typography
   * The fonts family used for this project are Roboto font with San Serif as a backup referenced from google fonts
 * Imagery 
   * The user will get to have a fun experince playing a game that will test their memory
---
## Features
  * Responsive on all device sizes 

  * Interactive elements
  ---
  ## Technologies Used 
  ### Languages Used
   * HTML5
   * CSS3
   * JavaScript
---
## Frameworks
 1. Bootstrap V5 .3: 
    * Bootstrap was used to keep the website responsive
 1. Google Fonts : 
    * Google fonts was used to provide the text for the website entire website
 1. Canva :
    * Canva is a free online graphic design tool. The images used to make the cards were copied and pasted from the Canva website. 
 1. Git:
    * Git was used for version contol by utilzing the Gitpod terminal to commit to Git and Push to GitHub
 1. Material Design:
    * Material Design is used to access the level of color combination to make the website as brightful and presentable for the user 
 1. Balsamiq:
    * Balsamiq was used to create the wireframes as a rough draft for the design
---
## Wireframes 
* Home WebPage [view.pdf](https://github.com/A-Gr33n/Milestone-Project-2-/files/11344988/Home.Webpage.pdf)
* Home Page (Tablet) [view.pdf](https://github.com/A-Gr33n/Milestone-Project-2-/files/11344987/Home.page.Tablet.pdf)
* Home page (Mobile) [view.pdf](https://github.com/A-Gr33n/Milestone-Project-2-/files/11344989/Home.page.Moblie.pdf)
* Game Webpage [view.pdf](https://github.com/A-Gr33n/Milestone-Project-2-/files/11345146/Game.Webpage.pdf)
* Game page (Tablet) [view.pdf](https://github.com/A-Gr33n/Milestone-Project-2-/files/11345148/Game.page.Tablet.pdf)
* Game page (Moblie)  [view.pdf](https://github.com/A-Gr33n/Milestone-Project-2-/files/11345153/Game.page.Moblie.pdf)
---
## Testing 
### Automated testing 
 There were no Automated testing procedures for this project due to time capacity and the lack of experince. Although automated testing wasn't used for this project I acknowledge the importance of using it. For example in a real world situtation I would use Jest in the future because it will eliminate errors and risks quickly to save time.
### Manual testing
 ### Validators
 #### jslint
 Js Lint was used for manual testing to check whether there were any errors. During the testing process there were some errors that occured. The Screenshots are posted below to show evidence. 
 
 ![Screenshot 2023-05-29 194701](https://github.com/A-Gr33n/Milestone-Project-2-/assets/120597058/202650e7-7a27-4445-b6e0-d3c3d31aba70)
   The property name had to be ordered alphabetical so the names had to be rearranged. 
 ![Screenshot 2023-05-29 200257](https://github.com/A-Gr33n/Milestone-Project-2-/assets/120597058/6d0e5224-1c58-49ed-bcdd-56e3b4a23fcb)
   Syntax needed to be removed
 ![Screenshot 2023-05-29 200654](https://github.com/A-Gr33n/Milestone-Project-2-/assets/120597058/2d8232a0-9bc5-4844-974a-4a64b8a0acde)
   Trailing space, needed to close any gaps  
 ![Screenshot 2023-05-29 201236](https://github.com/A-Gr33n/Milestone-Project-2-/assets/120597058/5003c186-047c-4357-b02a-f58fe0799e99)
   Line of code was more than 80 characters, so I had to section parts of code.
 ![Screenshot 2023-05-29 205815](https://github.com/A-Gr33n/Milestone-Project-2-/assets/120597058/c509c58d-65f2-4443-ba31-504ab40c64c5)
   Jslint was unable to finish wrap.
 
   Some errors still remain and were unable to solve, here are screenshots. 
 ![Unsolved error 1  ](https://github.com/A-Gr33n/Milestone-Project-2-/assets/120597058/b042feb7-0f23-4750-88fe-61c29d10ee45)
 ![Unsolved error 2 ](https://github.com/A-Gr33n/Milestone-Project-2-/assets/120597058/0efcdf2c-4e8f-4464-a747-e7f391149766)
 ![Unsolved error 3 ](https://github.com/A-Gr33n/Milestone-Project-2-/assets/120597058/3d197f1f-797d-4958-814c-d3e27ebfe751)

 #### W3C Validator and CSS Validator 
 The W3C Markup Validator and W3c CSS Validator was used to validate every page of the project to ensure there were no errors. Screenshots are presented below to show solved errors. 
  ![W3C error 1 ](https://github.com/A-Gr33n/Milestone-Project-2-/assets/120597058/95e2f8d1-cd16-4505-ba87-ca3f4eee7499)
  This error was shown when testing index.html (home page). The element button must not appear as a descendant of the a element. 
  ![html home page  validator passed ](https://github.com/A-Gr33n/Milestone-Project-2-/assets/120597058/33dbed20-7287-4c1b-a3f3-c24fb4700223)
  This error was solved by changing the a element to a form element 
  ![Html game page validator passed ](https://github.com/A-Gr33n/Milestone-Project-2-/assets/120597058/331d06a0-e09d-4d28-906f-07d8f7ca6e76)
  There were no errors when testing the game.html 
  ![W3C passed css validator ](https://github.com/A-Gr33n/Milestone-Project-2-/assets/120597058/a8e61f19-cd53-43bd-9601-6af41b5f3dab)
  There were no errors when testing css. 

 ### Audit Report 
 #### Lighthouse 
 Lighthouse was used in chrome dev tools to check the Performance, Best Practies and Accessibility. Screenshots are provided below to show evidence of the  website's status. 
 ![Home page lighthouse audit ](https://github.com/A-Gr33n/Milestone-Project-2-/assets/120597058/36d6ed59-08b0-4ae9-a5d6-06e86093c0df)
 ![Game page lighthouse audit ](https://github.com/A-Gr33n/Milestone-Project-2-/assets/120597058/98e34efb-dd7e-408a-8cec-ea31cc5e108a)


### Testing from UX stories
 1. As a player, I want to know how to play game so I can quickly understand the rules and get started right away. 
 ![Main page , game instructions ](https://github.com/A-Gr33n/Milestone-Project-2-/assets/120597058/60a5de19-322b-49dd-a868-958d4d98c783)
 On the home page the player will see below that there is a instruction on how to play the game. It has a good font size fot the user
 to see. 
 2. As a player, I want to have a clear understanding of the card matching mechanism so I can make strategic moves during the game. 
 ![moves and score screenshot ](https://github.com/A-Gr33n/Milestone-Project-2-/assets/120597058/96361314-ada5-41d8-9996-7f67035b176a)
 On the game page the player will see that there's a moves count below the card deck. Each move is calculated by 1 everytime the user 
 clicks on two cards at a time.
 3. As a player, I want to be able to track my progress and see my score so that I can compete with myself or others.
 ![moves and score screenshot ](https://github.com/A-Gr33n/Milestone-Project-2-/assets/120597058/d05724fb-60e3-4c4d-9e74-413399d1556e)
 There is a score count below the deck of cards. The user will earn a score of 1 point for every match.   
 4. As a player, I want to have the option to reset the game so that I can start a new round whenever I want.
 The player can press F5 to refresh page or for smaller devices they can press the refresh button at the top.
 Cards will be reshuffled random for every new game. 
 5. As a player, I want to receive feedback and be notified when I make a correct or incorrect card match.
 ![Unmatched feedback ](https://github.com/A-Gr33n/Milestone-Project-2-/assets/120597058/4c6c95ae-f801-4191-b30e-c236f10bcc68)
 The user will recieve this message if he has unmatched the cards.
 ![match feedback ](https://github.com/A-Gr33n/Milestone-Project-2-/assets/120597058/8995d9dd-1527-442e-ae4b-d73b5b93a8a2)
 If the user has matched a pair of cards then they will recieve this message 
 6. As a player, I want the game to provide a visually appealing so that it has a fun playful feel.
 ![website design](https://github.com/A-Gr33n/Milestone-Project-2-/assets/120597058/7511c499-7a47-4852-bc3c-1d0629e54fc1)
 The website has a bright colourful background on both pages. The colours were thoughtfully chosen to make it as fun and appealing 
 for the user. 
 7. As a player, I want the game to be responsive and work well on different devices and screen sizes. 
  The game has fixed sizes and has been tested for all devices. Bootstrap was used to make the site responsive. 
---
## Deployment 
 
 This project was developed using Gitpod a cloud-based editor linked to the Microsoft VS Code. Files and Folders are committed to git and pushed to GitHub. 

To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken.

 1. Log into GitHub.
 2. From the list of repositories on the left side of the screen, select A-Gr33n/Milestone-Project-2
 3. From the menu items near the top of the page, select Settings
 4. On the code and automation section on the left side of the screen select pages
 5. Under "Build and deployment", under "Source", select Deploy from a branch
 6. Under "Build and deployment" , under "Branch", click the dropdown called "None" and select "Main"   
 7. Next to the "Main" dropdown on the right select "(root)" then save .  

### How to Clone this project 
   To clone this project from GitHub:
1. Select A-Gr33n/Milestone-Project-2 from the list of repositories
1. From the menu items near the top of the page select <>code from  dropdown menu 
1. In the clone with HTTP's secion, copy the clone URL for the repository.
1. Open Git Bash
1. Change the current working directory to the location where you want the cloned directory.
1. Type git clone, and then paste the URL you copied earlier next to it
       
       
     $ git clone https://github.com//A-Gr33n-milestone-2 
           
1. Press "Enter" to create your local clone
