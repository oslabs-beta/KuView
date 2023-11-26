const {spawn, spawnSync} = require('child_process');
const InstallController = {
  installBrew: (req, res, next) => {
    function checkBrew() {
      const running = spawnSync('brew', ['--version'], {
        shell: true,
        stdio: 'ignore',
      });
      return running.status === 0;
    }

    //check if the user has brew installed, shortens install time.
    if (checkBrew()) {
      return;
    } else {
      spawnSync(
        '/bin/bash',
        [
          '-c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
        ],
        {stdio: 'inherit', shell: true}
      );
      return;
    }
  },
  installHelm: (req, res, next) => {
    spawnSync('brew', ['install', 'helm'], {stdio: 'inherit'});
    return;
  },
  installChart: (req, res, next) => {
    spawnSync(
      'helm repo add prometheus-community https://prometheus-community.github.io/helm-charts',
      {stdio: 'inherit'}
    );
    spawnSync('helm repo update', {stdio: 'inherit', shell: true});
    spawnSync(
      'helm install prometheus prometheus-community/kube-prometheus-stack',
      {stdio: 'inherit'}
    );
    return;
  },
  installProm: (req, res, next) => {
    // looks for all pods that are currently running.
    const lookup = spawnSync('kubectl', ['get', 'pods'], {encoding: 'utf-8'});
    const output = lookup.stdout.split('\n');
    let target;
    console.log('finding pod');
    //finds the prometheus-grafana pod.
    output.forEach((line) => {
      if (line.includes('prometheus-grafana')) {
        target = line.split(' ')[0];
      }
    });
    console.log('deleting configmap');
    //deletes old config map and apply a new one to give user admin access.
    spawnSync('kubectl delete configmap prometheus-grafana', {
      stdio: 'inherit',
      shell: true,
    });
    console.log('applying yaml');
    spawnSync('kubectl apply -f prometheus-grafana.yaml', {
      stdio: 'inherit',
      shell: true,
    });
    //deleting the pod so that it can redeploy with the new grafana.ini settings
    spawnSync(`kubectl delete pod ${target}`, {
      stdio: 'inherit',
      shell: true,
    });
    return;
  },
  portFoward: (req, res, next) => {
    console.log('fowarding port 3000 to grafana');
    spawn(`kubectl port-forward service/prometheus-grafana 3000:80`, {
      shell: true,
    });
    setTimeout(() => {
      return next();
    }, 2000);
  },
  installFunc: async (req, res, next) => {
    console.log('installing...');
    const {grafid} = req.body;
    try {
      if (grafid === '' || !grafid) {
        console.log('install brew');
        InstallController.installBrew();
        console.log('install helm');
        InstallController.installHelm();
        console.log('installing helm charts');
        InstallController.installChart();
        console.log('applying grafana.ini settings');
        InstallController.installProm();
      }
      setTimeout(() => {
        return next();
      }, 7000);
    } catch (error) {
      return next({
        log: `error occurred within the createUser found in installFunc ${error}`,
        status: 400,
        message: {
          err: 'An error occurred while trying installFunc.',
        },
      });
    }
  },
};

module.exports = InstallController;
