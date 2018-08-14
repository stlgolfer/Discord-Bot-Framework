/**
 * Gets the changelog of the amtech repository
 * @deprecated
 * @return {Promise} the changelog
 */
function getChangelog() {
          const { exec } = require('child_process');
          return new Promise((resolve, reject) => {
                    exec('git log --pretty=oneline --abbrev-commit --since=2.weeks', (error, stdout, stderr) => {
                              if (!error) {
                                        resolve(stdout);
                              }
                              else {
                                        reject('Error getting the changelog');
                                        console.log(stderr);
                              }
                    })
          })
}

module.exports.getChangelog = getChangelog;