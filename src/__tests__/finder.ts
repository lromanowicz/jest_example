import { finder } from '../finder';

test('guess the number', () => {
    const result = finder(8);
    expect(result).toBe(true);
});
