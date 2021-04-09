/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  domains.forEach((domain) => {
    domain
      .split('.')
      .reverse()
      .reduce((acc, word) => {
        const res = `${acc}.${word}`;
        obj[res] = ++obj[res] || 1;
        return res;
      }, '');
  });
  return obj;
}

module.exports = getDNSStats;
