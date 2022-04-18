function add() {
  let arr = [...arguments];
  function fn() {
    arr.push(...arguments);
    return fn
  }

  fn.valueOf = function () {
    return arr.reduce((sum, cur) => sum + cur)
  }

  return fn
}

console.log(add(1)(2)(3)(4).valueOf());