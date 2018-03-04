import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from '../client/routes';
import renderHelper from './helpers/renderHelper';
import createStore from './helpers/createStoreHelper';

const port = process.env.PORT || 3000;
const app = express();

app.use('/api', proxy('https://sticky-ui.herokuapp.com/', {
  proxyReqOptDecorator(options) {
    options.headers['x-forwarded-host'] = 'localhost:3000';
    return options;
  }
}));

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    //resolve promise regardless if it fails
    .map(promise => {
      if(promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises)
    .then(() => {
      const context = {};
      const html = renderHelper(req, store, context);

      if(context.url){
        return res.redirect(301, context.url);
      }

      if(context.notFound) {
        res.status(404)
      }

      res.send(html);
    })

  /*
  DO NOT USE CATCH STATEMENT,
   - this is a crud solution, instead use HOC's
   - .catch(err => res.status(404).send(error));
  */
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
