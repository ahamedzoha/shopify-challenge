# The Shoppies- Frontend UI Challenge

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

- Helpful loading messages
