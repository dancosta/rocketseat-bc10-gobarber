import app from './app';

const appPort = 3333;

app.listen(appPort, () => {
  console.log(`App listening on port ${appPort}`);
});
