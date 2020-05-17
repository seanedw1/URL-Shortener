// time stamp
const stamp = new Date();

const seperator = '======' + stamp + '=======';

const colors = require('colors');

// utility method of debug
exports.debug = (data, status) => {
  // debug env
  let state;
  if (process.env.DEBUG) {
    if (status === 'fail') {
      const out1 = seperator + '\n \n' + colors.red(data) + '\n \n';
      state = status;
      console.error(out1);
    } else if (status === 'sucess') {
      const out2 = seperator + '\n \n' + colors.green(data) + '\n \n';
      state = status;
      console.log(out2);
      // if status is undefined
    } else {
      const out3 = seperator + '\n \n' + colors.magenta(data) + '\n \n';
      console.warn(out3);
      state = 'warn';
    } // closes else
    console.log('log updated sucessfully');
    return state;
  } // closes if debug env
}; // closes util module
