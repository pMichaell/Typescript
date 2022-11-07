//optional parameters
const printIngredients = (quantity: string, ingredient: string, extra?: string): void => {
    console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ""}`)
}

//optional fields
interface User {
    id: string;
    info?: {
        email?: string;
    }
}

const getEmail = (user: User): string => {
    if(user.info) {
        //! is used to suppress
        return user.info.email!;
    }

    return "";
}

const getEmailEasy = (user: User): string => {
    //null coalescing operator (if left side is null return right side)
    return user?.info?.email ?? "";
}

//optional callbacks
const addWithCallback = (x: number, y: number, callback?: () => void) => {
    console.log(x + y)
    //callback will be called only if present
    callback?.();
}
