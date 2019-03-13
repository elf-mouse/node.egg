const moment = require('moment');

module.exports = {
  relativeTime(time) {
    return moment(new Date(time * 1000)).fromNow();
  },
  parseInt(string) {
    if (typeof string === 'number') return string;
    if (!string) return string;
    return parseInt(string, 10) || 0;
  }
};
