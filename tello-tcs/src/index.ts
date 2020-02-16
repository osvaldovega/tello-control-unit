import variables from './utils/variables_validation';
import network from './network';
import server from './server';

(async () => {
  try {
    await variables.validation();
    await network.init();
    await server.init();
  } catch (error) {
    console.log(error.message);
  }
})();
