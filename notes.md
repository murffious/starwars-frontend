# Grading notes

- React Router too much here but hey I am good at it so just went with it for speed. I can use conditional rednering is all and track like a page or step no problem too.

### Optimization

1. Would love to store order or drag and drop fav list to pre load/persist. Just need to use AppContext to track the order and store/get from local memory - 15 min. tops.

2. Also would love to also store the last page of data and persist it to not have to reload on =>back to main page, along with what page they are on - 5 min.

3. Fix the pagination to show 1/9 or 2/9 etc. 5-10 min. tops. Easy once stored above.

- About those persist items: in `checkMemory` line 23 `src/components/Favorite.js` I am doing this same process so have proven can do for sure no issues jsut out of time at the moment and its a weekend lol. i.e. check storage and load if so...
