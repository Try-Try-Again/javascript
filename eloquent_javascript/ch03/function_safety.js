function example() {
  function a() // Okay
  if (something) {
    function b() {} // Danger!
  }
}
