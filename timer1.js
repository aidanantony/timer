const input = process.argv.slice(2);

const timer = function(array) {
  if (array.length === 0) {
    return;
  }
  array.sort(function(a, b) {
    return a - b;
  });
  let beep;
  for (let i = 0; i < array.length; i++) {
    const parsed = parseInt(array[i]);
    if (parsed > 0 && Number.isInteger(parsed)) {
      beep = parsed * 1000;
      setTimeout(() => {
        process.stdout.write('.');
      }, beep);

    }
  }

};
timer(input);

