import { getEnv } from '@fullstacksjs/toolbox';
import { MicroserviceName } from 'libs/enums/microservice-name.enum';

export function APP_BINDINGS(microName: MicroserviceName) {
  const host = getEnv(`${microName}_HOST`) || 'localhost';
  const port = parseInt(getEnv(`${microName}_HOST`) || '3000');
  const url = `http://${host}:${port}`;

  return { host, port, url };
}