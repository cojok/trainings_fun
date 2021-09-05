// https://www.codewars.com/kata/54ca3e777120b56cb6000710

function chained(functions) {
  return function(arg) {
    for (var i = 0; i < functions.length; i++) {
      arg = functions[i](arg);
    }
    return arg;
  };
}
