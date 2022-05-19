## Project Description ##
A short description of your project.
My Project is an application that will display all of an account's World of Warcraft characters and allow you to search and view individual characters based on their class or character level.
## Link to the API you plan to use ##
API link
https://develop.battle.net/documentation/world-of-warcraft/profile-apis

## Example data response you plan to use ##
```
{
          "character": {
            "href": "https://us.api.blizzard.com/profile/wow/character/dalaran/spittinrage?namespace=profile-us"
          },
          "protected_character": {
            "href": "https://us.api.blizzard.com/profile/user/wow/protected-character/66-lu?namespace=profile-us"
          },
          "name": "Spittinrage",
          "id": 222464943,
          "realm": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/realm/66?namespace=dynamic-us"
            },
            "name": "Dalaran",
            "id": 66,
            "slug": "dalaran"
          },
          "playable_class": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/playable-class/1?namespace=static-9.2.0_42277-us"
            },
            "name": "Warrior",
            "id": 1
          },
          "playable_race": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/playable-race/8?namespace=static-9.2.0_42277-us"
            },
            "name": "Troll",
            "id": 8
          },
          "gender": {
            "type": "MALE",
            "name": "Male"
          },
          "faction": {
            "type": "HORDE",
            "name": "Horde"
          },
          "level": 60
        }, 
```
        
## Visual of your component hierarchy ##
## Wire Frames ## 
![Screenshot (58)](https://user-images.githubusercontent.com/101364797/169387537-2617fef1-6627-41ca-8772-fb3919311b5b.png)
![Screenshot (57)](https://user-images.githubusercontent.com/101364797/169387566-ab053b05-caad-4552-99d8-52f917d2ffce.png)
![Screenshot (55)](https://user-images.githubusercontent.com/101364797/169387594-a582a699-ec41-4c28-ac83-ad24077513c0.png)
![Screenshot (56)](https://user-images.githubusercontent.com/101364797/169387604-7055c51f-86c4-4fac-9c5b-36ab02aa473c.png)


## User Stories ##
Add user stories following the As a [type of user], I want [what the user wants], so that [what it helps accomplish] format.
As a user I want to:

Be able to link my battle.net account
Access my characters' data from that account
Be able to look at all my character options based on level and class variables
Be able to take a closer look at characters on an individual basis

## MVP Goals ##
Same as stated above

## Stretch Goals ##
add battle.net authentication for other games besides WoW
create other ways to search through characters besides class or level
check other information per character besides class, race, realm, and level
