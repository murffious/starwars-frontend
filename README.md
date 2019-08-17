# Star Wars - Front End Developer Assessment

### PART I - Basic Data Retrieval

1. GET Star Wars people data from https://swapi.co/api/people and show it in a list. Show each person's name, birthday, and home world name on the list view.

### PART II - Controlled Data Fetching

2. The https://swapi.co/api/people endpoint only gives you data for 10 person records at a time, but there are many more total people than that. Implement pagination to allow the user to view all of the people, one page at a time. Hint: The Star Wars API will return `count`, `next`, and `previous` data in the response payload to help you implement pagination.
3. Add a search bar to work as a filter on the people, searching by the person's name, and paginate the results. See https://swapi.co/documentation#search for documentation on searching

### PART III - Favoriting Cards

4. Add a _favorite_ button to each Person in the list and a favorite count to the upper right hand corner of the screen. Clicking the button should toggle the favorited button state and increments/decrements the favorite count appropriately. The Star Wars API is read-only, so store the favorite data in-memory on the client-side.

### PART IV - Drag and Drop

5. When a user clicks on the favorite count, route to a page that displays all the favorite people. Include a back button to go back to the main list.
6. Add drag-and-drop functionality in order to sort the favorites. Display the order on or above the card. Tjj
