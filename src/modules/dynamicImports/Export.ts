export function logger<T>(params: T) {
  console.log(params);
}

export function adder(first: number, second: number) {
  return first + second;
}

export default function def() {
  console.log("default export");
}
