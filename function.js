// *********** arguments keyword **********
function howManyArgs() {
  console.log(arguments.length);
  console.log(arguments);
}
howManyArgs("string", 45); //2
howManyArgs(); //0
howManyArgs(12); //1
