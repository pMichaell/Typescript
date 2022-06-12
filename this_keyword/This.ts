const logger = function logger(this: any) {
  return this.a;
};

console.log(logger.apply("test"));
