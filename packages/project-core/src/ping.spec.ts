import { newUUID } from './ping';

it('shoudl be a string', () => {
    expect(newUUID()).toEqual(expect.any(String));
});
