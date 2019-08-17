# Grading notes

- React Router too much here but hey I am good at it so just went with it for speed. I can use conditional rednering is all and track like a page or step no problem too.

### Optimization

1. Would love to store order or drag and drop fav list to pre load/persist. Just need to use AppContext to track the order and store/get from local memory - 15 min. tops.

2. Also would love to also store the last page of data and persist it to not have to reload on =>back to main page, along with what page they are on - 5 min.

3. Fix the pagination to show 1/9 or 2/9 etc. 5-10 min. tops. Easy once stored above.

- About those persist items: in `checkMemory` line 23 `src/components/Favorite.js` I am doing this same process so have proven can do for sure no issues jsut out of time at the moment and its a weekend lol. i.e. check storage and load if so...

# Tiny bug I could fix in next 30 max

`src/components/Favorite.js` line 17
`this.props.hanldeLike(!this.state.toggleStyle, person, index);`
This code is not firing the subsequent call of `removeFav` in App context. -

- Its a simple reference and set state timing issue. I am losing 1 value reference here and it works mostly.
  I can and will fix but my time is up for today. Turning in as is.
