export function throttle(func: Function, timeout: number) {
  let ready: boolean = true;
  return (...args: any) => {
    if (!ready) {
      return;
    }

    ready = false;
    func(...args);
    setTimeout(() => {
      ready = true;
    }, timeout);
  };
}

export function debounce(func: Function, timeout: number) {
  let timer: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

const debouncedLog = debounce(console.log, 5);
const throttledLog = throttle(console.log, 5);

for (let time = 0; time < 100; time += 10) {
  setTimeout(() => {
    throttledLog('throttle: muggle');
    debouncedLog('debounce: wizard');
  }, time);
}
