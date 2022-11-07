const myUseState = function myUseState<T>(
  initialState: T
): [() => T, (newState: T) => void] {
  let state = initialState;
  return [() => state, (item: T) => (state = item)];
};

//state is a function which holds reference to function returned from myUseState
//it keeps reference to state variable within myUseState
const [state, setState] = myUseState(1);
console.log(state());
setState(2);

const makeAdder = function (numberToAdd: number) {
  let initialNumber = 0;
  const addNumber = () => {
    initialNumber = initialNumber + numberToAdd;
    return initialNumber;
  };

  const getNumber = () => {
    return initialNumber;
  };

  return addNumber;
};

const adder = makeAdder(2);
console.log(adder());
console.log(adder());
console.log(adder());
console.log(adder());
