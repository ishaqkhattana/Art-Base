# ART BASE

## Description
The project allows a user to enter any artist name, and then shows details for the artist like:
- Name
- Image
- Links to social media handles

Once the artist is clicked, all the upcoming events of the artist are displayed to the user with the following details for each event:
- Country
- City
- Venue
- A google maps link that takes the user directly to google maps with the event venue pre-pinned

## Technical Description
React was chosen as the framework of choice for the project. Tailwindcss was used as the css framework for styling. The entire application is responsive for mobile, tablet and desktop devices. React-Router-Dom is being used to handle routing on the single page web application.

## Basic Features
All basic features are implemented

## Bonus Features (3/3)
- Persistence: Cookies are used to persist the last searched artist across browser reloads
- Creative: Some added features are:
   - Dynamically generated social icons that lead to the respective social handles of artists (Search Rihanna for all icons, as she has all the handles available in the API)
   - A link on events that takes the user to Google Maps location of the event
-Deployment: AWS S3 and CloudFront have been utilized to provide hosting at: https://dev.d3e2h879xzb4tz.amplifyapp.com/
