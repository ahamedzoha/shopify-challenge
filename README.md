# The Shoppies- Frontend UI Challenge 🎉🏆

A front-end web development challenge from Shopify.



## About the Application

This is a JSX React Application created using [Create React App](https://github.com/facebook/create-react-app). The movie data is fetched using the free [OMDb API]("http://www.omdbapi.com/"). The free tier has a daily limit of 1000 request, so if the data doesn't show please check the network tab.

The live version of the app is hosted in Netlify [Here...](https://theshoppies-zoha.netlify.app/). 




### Features

- Search will result only movies from the database.
- Movies that do not have a poster shows a placeholder image instead of no images at all.
- Add Nominee
   - A section containing all nominations will appear when 1 or more movies are nominated .
   - Buttons get disabled with a helpful message after 5 nominees are selected.
   - Notification appears on the bottom-left mentioning how many are nominated currently.

- Remove Nominee
   - Nominees can be removed from both the main search result section or the "Your Nominations" section
   - Notification appears on the bottom-left mentioning the movie is removed from nomination. 

- Helpful loading messages.
- Using Redux persist to save user nominations to local storage if the user leaves the page.
- More to be added soon! ☕



## Development Notes

The notification component in the project is reusable. Right now, I can send any message with 2 types of notification. "Success" and "Error". If notification is dispatched from any component with the type "Success", a green bar will appear on the bottom of the message and "Red" for "Error". I could have used Redux for notification dispatch as it is for nominations, but I wanted to show my familiarity with React's Context API and hooks such as useReducer, createReducer and etc. Also, I feel using the Context api in this way makes the code feel a bit more portable. 
