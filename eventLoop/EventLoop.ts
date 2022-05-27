 setTimeout(() => {
     console.log("in timeout")
 }, 0);

 console.log("this will appear before timeout")
 console.log("And this also")
 console.log("And this is because events pushed to the" +
     "event loop will be pushed to the call stack only" +
     "when it's empty! (Synchronous code is pushed to the stack " +
     "immediately")

 //It isn't given that for example setTimeout will run
 //exactly after given time, since after this time has passed call
 //stack might not be empty, thus function from the callback
 //will be held until it is and then pushed onto it!!!
 //setTimeout is passed more of a minimum time to complete
 //rather than exact time

 //TASKS HAPPEN IN ORDER THEY WERE QUEUED

 //Don't put slow code on the stack, because it blocks
 //browser from doing what it needs to do, events in the
 //render queue also have to wait until stack is clear!

 setTimeout(() => {
     while(true) {

     }
 }, 5000)

 setTimeout(() => {
     console.log("This will never run, since the stack has been polluted and this " +
         "was appended to the event loop later that while true above")
 }, 6000)

 //tasks are not the right place to put code related to rendering
 //SET TIMEOUT IS NOT MADE FOR ANIMATING STUFF
 //Request animation frame comes before css processing and painting


//Microtasks run whenever javascript stack empties itself
 // Promises use microtasks

 //There is task queue, animation callbacks queue, microtasks queue