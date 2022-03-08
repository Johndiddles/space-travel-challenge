# Space Tourism Website Challenge from FrontendMentor.io

This website was created with ReactJs and Sass

## live link

Hosted on [vercel](https://space-travel-chi.vercel.app/)

## Data

data.json was renamed to data.js  
image links in data.js were edited to fetch images from the public/assets folder.  
Made use of React Hooks "useEffect, useState"

### Destination page

I decided to explore dynamic routing on this page.  
The data to be displayed is fetched from data.js using useParams to get the present url and useEffect to fetch the correct data and then assign to a variable using useState.
