# yoga-sequencer
Little app to help yoga teachers visualize sequences. enter your poses in a ceratin format and it'll return a nice little picture for you to use!

Live URL
https://yogasequencer.netlify.app/

## Technology

## API
Base URL https://5iv5ywr9.api.sanity.io/v1/data/query/production?query=*[_type%20==%20%22pose%22] (see the GROQ documentation (https://www.sanity.io/docs/query-cheat-sheet) for info on how to construct queries)
Image CDN URL `https://cdn.sanity.io/images/5iv5ywr9/production/{imageID}.{fileType}`
A little website if anyone wants to use the API for their own personal projects, practice, whatever
https://www.notion.so/Yoga-Poses-API-fea18ff798c9435ebc5c7ec9e009d31d

## Feature list

Backend
* (continuous) user can access more poses in the app.
* Publish api as it’s own website to allow ppl access - DONE
    * 

Frontend
* User can see arrows in the sequence to see which direction it goes DONE
* User can see more information on each pose DONE
* User can change the layout of the poses 
* User can print the poses (print-friendly view)
* User can see poses in Single Column on Mobile
* User can acces a sample set Surya C
* User can toggle between photo sets :) ** high demand, high fun
* User can see a little yoga emoj as the favicon - DONE

# Learning Materials

API Queries: https://www.sanity.io/docs/query-cheat-sheet
API Docs Software: https://www.gitbook.com/#ProductsDocs

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
