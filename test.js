function myflat(params) {
  let stash = [...params];
  let res = []

  while (stash.length) {
    let stashItem = stash.pop();
    if (stashItem.length) {
      stash.push(...stashItem)
    } else {
      res.push(stashItem)
    }
  }
  return res.reverse()
}

console.log(myflat([1, [2, 3, [4], 5], 6]));