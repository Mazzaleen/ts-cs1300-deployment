# Development

### Link to Deployed Website
If you used the stencil code, this is `https://mazzaleen/github.io/ts-cs1300-deployment`

### Goal and Value of the Application
The goal of the application is to develop a tool that Pokemon afficinados can use to view and get more information on the various Pokemon available. The true value is found in being able to filter the pokemon based on their price, type and id, in case they are missing any. 

### Usability Principles Considered
In terms of usability, I considered how a user might best be able to view this information by organizing each animal into card items listed in the components library, therby facilitating user to focus on each animal independently and not be overwhelmed by info on the website. 

I also implemented checkboxes such that filtering can occur in the instances that is necessary. Their location also make it easy to use for users. 


### Organization of Components
I simply created an item component, containing the relevant subfields we need in order to filter, sort, order and aggregate data. i created a  CSS file for each component and import to the respective component. After that, I can style with the classname normally.

### How Data is Passed Down Through Components
instanitating an items array withing our App.jsx file helps deal with styling and so forth. 

### How the User Triggers State Changes
Sorting and filtering is handled via the user selected options, Filters uses checkboxes, when a user changes the condition of a checkbox; this also triggers a change in the boolean state of the declared filtered state. If a filter state for a certain condition = False, It doesn't show up on the webpage and vice versa. The checkboxes work in a manner where they are initially all selected and by unselecting some, the filters are changed.
