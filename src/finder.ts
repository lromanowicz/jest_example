import { random } from './generator';

const finder = (a: number): boolean => {
    const result = random();
    return a > result;
};

export { finder };
