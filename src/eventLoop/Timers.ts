function printer(first: string, second: string) {
  console.log(first, second);
}

//passing function arguments to setTimeout
setTimeout(printer, 2000, "set", "timeout");

let printerInterval = setInterval(printer, 1000, "first", "second");

let timeout = setTimeout(() => {
  clearInterval(printerInterval);
}, 5_000);
