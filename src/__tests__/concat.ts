import { concat, split } from './../concat';

test('concatenates two strings', () => {
    const result = concat('blue', 'cat');
    expect(result).toBe('bluecat');
});

test('splits a string', () => {
    const result = split('bluecat', 'c');
    expect(result).toEqual(['blue', 'at']);
});
