import React from 'react';
import Head from 'next/head';

import { prettyPong, newUUID } from '@project/core/src/ping';
import type { Person } from '@project/core/src/person';

const IndexPage = (): React.ReactElement => {
    const [persons, setPersons] = React.useState<Person[]>();

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:8080/person');
            if (response.ok) {
                const data: Person[] = await response.json();
                setPersons(data);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Head>
                <title>Index</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <h1>Hello {prettyPong()} 👋</h1>
            <p>{newUUID()}</p>
            <p>{JSON.stringify(persons)}</p>
        </div>
    );
};

export default IndexPage;
