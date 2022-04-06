function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  
  function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
  }
  
  function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }

  function runFiveMiles() {
    console.log("Go for a five-mile run");
  }

  function liftWeights() {
    console.log("Pump iron");
  }
  
  function swimFortyLaps() {
    console.log("Swim 40 laps");
  }

  function Monday() {
    runFiveMiles();
    liftWeights();
  }

  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }

  function Monday() {
    exerciseRoutine(liftWeights);
  }

  Monday()

  exerciseRoutine(function () {
    console.log('Do some yoga!');
  })
  
  exerciseRoutine(() => console.log ('Do some yoga!'))

  // Instructions for practice (run test)

  function receivesAFunction(callback) {
      callback();
  }

  function returnsANamedFunction() {
      return function namedFn() {
      console.log("whatever");
      }
  }

  function returnsAnAnonymousFunction() {
      return () => console.log("whatever anonymous function");
  }
  