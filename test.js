function LazyMan(name) {
  const { log } = console;

  const sleep = (s) =>
    new Promise((res) =>
      setTimeout(() => {
        log(`Wake up after ${s}`);
        res();
      }, s * 1000)
    );

  let queue = [() => log(`Hi! This is ${name}!`)];
  const ctx = {
    eat: (food) => queue.push(() => log(`Eat ${food}~`)) && ctx,
    sleep: (s) => queue.push(() => sleep(s)) && ctx,
    sleepFirst: (s) => queue.unshift(() => sleep(s)) && ctx,
  };
  queueMicrotask(async () => {
    while (queue.length) {
      await queue.shift()();
    }
  });

  return ctx;
}

LazyMan("Hank").eat("supper").sleepFirst(2).sleepFirst(2);
