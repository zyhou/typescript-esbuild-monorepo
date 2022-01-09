import fastify from 'fastify';

import { prettyPong, newUUID } from '@project/core/src/ping';
import { getList, type Person } from '@project/core/src/person';

const server = fastify();

server.register(require('fastify-cors'));

server.get('/ping', async () => {
    console.log(newUUID());
    return prettyPong();
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
    console.log(`Server listening at ${address}`);
});
