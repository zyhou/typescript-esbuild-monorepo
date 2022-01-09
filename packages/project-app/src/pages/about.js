import React from 'react';
import Head from 'next/head';

import { prettyPong, newUUID } from '@project/core/src/ping';
import { getFooter } from '@project/core/src/footer';

const IndexPage = () => {
    return (
        <div>
            <Head>
                <title>About</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <h1>Hello {prettyPong()} 👋</h1>
            <p>{newUUID()}</p>
            <p>{getFooter()}</p>
        </div>
    );
};

export default IndexPage;
