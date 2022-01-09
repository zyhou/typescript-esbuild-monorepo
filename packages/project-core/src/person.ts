export type Person = {
    name: string;
};

export const getList = (): Person[] => {
    return [
        {
            name: 'James Bond',
        },

        {
            name: 'Iron Man',
        },
    ];
};
