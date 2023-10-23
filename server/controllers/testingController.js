const { spawn, spawnSync } = require('child_process');
const testingController = {};

testingController.minikube = (req, res, next) => {
  const result = spawnSync('kubectl', ['get', 'pods']);
  if (result.error) {
    res.locals.result = false;
  } else {
    res.locals.result = true;
  }
  console.log('testing');
  return next();
};

testingController.testGrafana = (req, res, next) => {
  const result = spawnSync('kubectl', ['get', 'pods'], { encoding: 'utf-8' });
  if (result.error) res.locals.result = 'minikube is not running';
  const output = result.stdout.split('\n');
  let target = undefined;
  output.forEach((line) => {
    if (line.includes('prometheus-grafana')) {
      target = line.split(' ')[0];
    }
  });
  if (target) {
    res.locals.result = true;
  } else {
    res.locals.result = false;
  }
  return next();
};
module.exports = testingController;
