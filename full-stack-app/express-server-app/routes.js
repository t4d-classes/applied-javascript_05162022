import express from 'express';

export const createAPI = (resourceName, Model) => {

  const router = express.Router();

  router.route(`/${resourceName}`)
    .get((req, res) => {

      Model.find((err, resources) => {

        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
        }

        res.json(resources.map(resource => resource.toObject()));

      });

    })

};