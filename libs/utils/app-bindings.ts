import { getEnv } from '@fullstacksjs/toolbox';
import { MicroserviceName } from 'libs/enums/microservice-name.enum';
import { join } from 'path';

export function APP_BINDINGS(microName: MicroserviceName) {
  const host = getEnv(`${microName}_RPC_HOST`) || 'localhost';
  const httpPort = parseInt(getEnv(`${microName}_HTTP_PORT`) || '3000');
  const rpcPort = parseInt(getEnv(`${microName}_RPC_PORT`) || '5000');
  const packageName = microName.toLowerCase();
  const protoPath = join(__dirname, '../../../packages/ai.proto');
  const url = `http://${host}:${httpPort}`;

  return { host, httpPort, rpcPort, url, packageName, protoPath };
}
