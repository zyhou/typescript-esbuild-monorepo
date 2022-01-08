import React from 'react';
import Head from 'next/head';

import { prettyPong, newUUID } from '@project/core/src/ping';

const IndexPage = () => (
    <div>
        <Head>
            <title>Hello</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <h1>Hello {prettyPong()} 👋</h1>
        <p>{newUUID()}</p>
    </div>
);

export default IndexPage;
