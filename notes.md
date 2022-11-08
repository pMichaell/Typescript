# JWT Based auth
- on login user is being sent access and refresh token
- access token can be stored in state, refresh token is stored in httpOnly, secure cookie
- When access token expires frontend has to send the granted refresh token to refresh endpoint in the api
- Refresh tokens must be allowed to expire (to logout)
- Logout is performed by /logout endpoint, it returns response, which clears cookie in which refresh token is stored 
- Whenever access token expires, server will return 403, then with interceptor we can make a request to /refresh and obtain new access token, if no new access token is granted the refresh token has expired and user has to be logged out
- We use withCredentials in axios in order to sent cookies with the requests
- Axios interceptors will attach access tokens to Authorization header in requests and update access tokens (with refresh endpoint) when they expire
- If user's refresh token has expired redirect them to the login page

# Cookie Attributes
- Same site attribute 
  - Strict: cookies set for some domain, won't be sent to for other domain requests, won't be sent when user is navigating to the origin domain from another domain
  - Lax: cookies set for some domain, won't be sent to for other domain requests, but is sent when a user is navigating to the origin site from an external site
  - None: cookies set for one domain will be sent with requests to another domain, they have to be specified with secure attribute
  - Nothing specified: will be set implicitly to lax
- Secure: cookie will be sent with a request only if secure channel is used (https)
- HttpOnly: cookie cannot be accessed from browser-side js
- Max-Age: indicates time in seconds after which the cookie will expire
- Expires: date on which cookie will expire
  

# Merge vs Rebase
**Rebase** moves the current feature branch source code on top of the commit history from the branch we are rebasing onto\
**Merging** might not be the best idea if the main branch moves fast, as it will clutter the history with merge commits on the feature branch\
**Rebase** rewrites history and puts commits from the __base__ branch behind **feature** branch. It does rewrite commit hashes for commit of the branch that is being rebased onto another branch

# this Keyword
**context of an invocation = value of this within function body**
- **this** in a **function invocation** is undefined (if not set explicitly)
- **this** in a method invocation is set to the object which holds the method
- in indirect invocation (call, apply) **this** is the object passed as the first argument call or apply
- in bound function, **this** is the first parameter of .bind() method
- once function is bound, its **this** cannot be changed with call or apply
- in arrow functions **this** is the enclosing scope's this, this in arrow function is bound forever on creation step
- How is the*`function invoked*?
- What is **this** inside the outer function/scope where the arrow function is defined?

# types and variables
- **primitive types**: number, string, boolean, symbol, null, undefined, bigint
- **reference types**: objects, arrays
- **assigning a value** means making some variable point to the specified value or address in memory
- **variables** which point to reference types hold address in memory of an object, thus comparing reference types with === does not work (unless both variables point to the same address)

# var vs let vs const
- **var** in outermost scope attaches properties to window object, var length = 5 creates length property on window, so it's window.length = 5;
- **var** is hoisted to the top of function scope (even if it's declared in nested scope in function) 

# Hoisting
- 3 types of hoisting
  - **Function hoisting**, functions can be used in code before they are declared
  - **var hoisting**, variables can be referenced before they are declared, theirs value is undefined
  - **let, const, class hoisting**, variables can be referenced before they are declared, ReferenceError will be thrown! (also called temporal dead zone)

# Deep copies vs shallow copies
- Shallow copy is referencing the same place in memory, whereas deep copy is being assigned a new place in memory
- To deep copy an object use structuredClone API, available in node(17+) and browsers
- **Spread operator** will **not work** properly if object has nested objects inside of it

# Typescript types
 - **never**: Functions which never return have never type as return type (ex. function which only throws error, function which gets into infinite loop)
 - **any**: disables all ts checks for this variable
 - **unknown**: unknown type variable can be assigned any value, but additional checks are required if we want to assign unknown value to strictly typed variable. Unknown forces you to put type guards before calling some type's methods on the unknown variable
 - **intersection** type: FirstType & SecondType, resulting type combines all properties
 - **union** type: FirstType | SecondType, value typed with intersection type can be one of several types

# Function overloads in typescript
```function buildDate(timestamp: number): Date;
function buildDate(m: number, d: number, y: number): Date;
function buildDate(mOrTimestamp: number, d?: number, y?: number): Date {
if (d !== undefined && y !== undefined) {
  return new Date(y, mOrTimestamp, d);
}
  return new Date(mOrTimestamp);
}

const d1 = buildDate(87654321);
const d2 = buildDate(2, 2, 2);
```

# Typescript d.ts
- Used to create typings for vanilla js files in non-ts projects, so they can be used without ts compiler errors
- 

# React optimization Hooks
- **React.memo** react will not re-render the component (on parent re-renders) unless the props have changed
- **useCallback** react creates a function which will not be re-created upon state changes, in will be newly created only if deps change
- **useMemo** react memoizes a value computed from an expensive computation process instead of computing it on every re-render, value will be computed again only if props change

# React optimization Methods
- Moving state down, so state changes do not affect many children

# SOLID
