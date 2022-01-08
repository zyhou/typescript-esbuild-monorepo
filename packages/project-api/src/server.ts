import fastify from 'fastify';

import { prettyPong, newUUID } from '@project/core/src/ping';

const server = fastify();

server.get('/ping', async (request, reply) => {
    console.log(newUUID());
    return prettyPong();
});

server.listen(8080, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
