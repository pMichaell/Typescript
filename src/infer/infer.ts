export {};

// type Result = true extends boolean ? 1 : 0;

type Result = boolean extends true ? 1 : 0;

const func = (check: boolean) => "gibberish";

// type ReturnType<T extends (...args: any) => any> =
// T extends (...args: any) => infer R ? R : any;

type FuncResult = ReturnType<typeof func>;

const whatever = {};

// if type extends given expression infer the result type "R" stands for result
type Result2 = typeof func extends (...args: any) => infer R ? R : never;

// never is a way to communicate that a thing shouldn't happen

type ResultWithGenerics<T> = T extends((...args: any) => infer R extends string)
  ? `${R}_return_type`
  : never;

// resolves to never
type ResultWithWhatever = ResultWithGenerics<typeof whatever>;

type ResultWithFunc = ResultWithGenerics<typeof func>;
// const test: ResultWithFunc = "123";

const str = "hello-world_friend".replace(
  /(_|-)/g,
  (item) => `${item}${item}${item}`
);

type GetFromDeepObject<T> = T extends {
  a: {
    b: {
      c: infer C;
    }
  }
} | {
  c: infer C
} | {
  a: {
    c: infer C
  }
}
  ? C : never;

type C = GetFromDeepObject<{
  a: {
    b: {
      c: number;
    }
  }
}>

const lalal: C = 123;



