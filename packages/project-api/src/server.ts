import fastify from 'fastify';
import fastifyCors from 'fastify-cors';

import { prettyPong, newUUID } from '@project/core/src/ping';
import { getList, type Person } from '@project/core/src/person';
import { getFooter } from '@project/core/src/footer';

const server = fastify();

server.register(fastifyCors);

server.get('/ping', async () => {
    console.warn(newUUID());
    return prettyPong();
});

server.get('/footer', async () => {
    return getFooter();
});

server.get('/person', async (request, reply): Promise<Person[]> => {
    return reply
        .code(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send(getList());
});

server.listen(8080, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`); // eslint-disable-line no-console
});
