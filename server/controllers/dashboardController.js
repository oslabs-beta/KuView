const axios = require('axios');
const panels = require('../dashJSONfiles/dashboardPanels.json');
const templating = require('../dashJSONfiles/dashboardTemplating.json');
const User = require('../models/userModel');


const DashboardController = {
  createDashboard(req, res, next){
    try {
      // console.log('Hello from inside try-catch for createDashboard')
      // return next()
    //   axios({
    //     method:'post',
    //     url: 'http://localhost:3000/api/dashboards/db',
    //     headers:{
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     data: JSON.stringify({
    //       "id": null,
    //       "uid": null,
    //       "title": "KuView Dashboard",
    //       "tags": [ "templated" ],
    //       "timezone": "browser",
    //       "schemaVersion": 16,
    //       "version": 0,
    //       "refresh": "5s",
    //       "folderId": 0,
    //       "message": "",
    //       "overwrite": false,
    //       "style": "dark",
    //       "time": {
    //         "from": "now-1h",
    //         "to": "now"
    //       },
    //     //   templating: templating,
    //     //   panels: panels
    //     })
    //   })
    //   .then(data => data.json())
    //   .then(response => {
    //     console.log('res.uid inside then chain of dashCont', response.data.uid);
    //     const { uid } = response.data
    //     // User.findOneAndUpdate({ username: res.locals.user }, { grafid: uid });
    //     res.locals.uid = uid
    //     return next();
    //   })
    fetch('http://localhost:3000/api/dashboards/db',{
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dashboard:{
          "id": null,
          "uid": null,
          "title": "KuView #2",
          "tags": [ "templated" ],
          "timezone": "browser",
          "schemaVersion": 16,
          "version": 0,
          "refresh": "5s",
          "folderId": 0,
          "message": "Made changes to xyz",
          "overwrite": false,
          "style": "dark",
          "time": {
            "from": "now-1h",
            "to": "now"
          },
          "templating": templating,
          "panels": panels  
        },
      }) 
    })
      .then(ress => {
        return ress.json()
      }).then(data => {
        console.log('testing this is the data', data)
        const { uid } = data
        // User.findOneAndUpdate({ username: res.locals.user.username }, { grafid: uid }, { new: true }).then(rez => {
        //   res.locals.user = rez
        // })
        console.log('this is inside the then', uid)
        res.locals.uid = uid
        return next()
      })
    }
    catch (err) {
      console.log('logging error from dashboardController');
      return next({
        log: 'An error occurred within the createUser found in dashboardController',
        status: 400,
        message: {
          err: 'An error occurred while trying to create a new dashboard.',
        },
      });
    }
  },
  updateUID(req, res, next){
    User.findOneAndUpdate({ username: res.locals.user.username }, { grafid: res.locals.uid }, { new: true })
      .then(rez => {
        res.locals.updatedUser = rez
        return next()
      })
  }
}

module.exports = DashboardController