# Development

### Link to Deployed Website
`https://mazzaleen/github.io/ts-cs1300-deployment`
NOTE: As of Dec2 00:00. I could not get this to work on gh pages, hopefully i can fix it by the end of my late pass! If not, i hope it can still be graded :)

### Goal and Value of the Application
The goal of the application is to develop a tool that Pokemon afficinados can use to view and get more information on the various Pokemon available. The true value is found in being able to filter the pokemon based on their price, type and id, i also incorporated a view cart st shoppers can frequently view thier data and info as they are happily shopping along! 

### Usability Principles Considered
In terms of usability, I considered how a user might best be able to view this information by organizing each animal into card items listed in the components library, therby facilitating userw to focus on each animal independently and not be overwhelmed by info on the website. The aggregators are components that fit functionality for users. For example, sorting by ID is quite useful for someone who is interested in pokemon. 

I also implemented dropdowns such that filtering can occur in the instances that is necessary. Their location also make it easy to use for users. 


### Organization of Components
Items.tsx is a typescript file that contains fields of each pokemon. Using a JSON parser to parse the data. 

### How Data is Passed Down Through Components
Instanitating an items array withing our App.jsx file helps deal with styling and so forth.  The way I  incorporated this is via creating const functions utilizing typescript that basically appends items that fit the criterions specified by the dropdown menus. This helps the components take care of themselves 

### How the User Triggers State Changes
Sorting and filtering is handled via the user selected options, Filters uses dropdown menus, when a user changes the condition of a dropdown; this also triggers a change in the boolean state of the declared filtered state. If a filter state for a certain condition = False, It doesn't show up on the webpage and vice versa. The dropdowns work in a manner where they are initially all selected and by unselecting some, the filters are changed. They also work together (for example normal pokemon under 100k can be found using my functionality) Restarting the page is used to empty the cart. 
