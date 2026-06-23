import { sortPages } from './report.js';
import { test, expect } from '@jest/globals';

test('sortPages', () => {
    const pages = { 
        'https://wagslane.dev/path': 1,
        'https://wagslane.dev': 3,
     };
    const actual = sortPages(pages);
    const expected = [
        ['https://wagslane.dev', 3],
        ['https://wagslane.dev/path', 1]
    ];
    expect(actual).toEqual(expected);
});

test('sortPages 5 pages', () => {
    const pages = { 
        'https://wagslane.dev/path': 1,
        'https://wagslane.dev': 3,
        'https://wagslane.dev/path/one': 5,
        'https://wagslane.dev/path/two': 2,
        'https://wagslane.dev/path/three': 4,
     };
    const actual = sortPages(pages);
    const expected = [
        ['https://wagslane.dev/path/one', 5],
        ['https://wagslane.dev/path/three', 4],
        ['https://wagslane.dev', 3],
        ['https://wagslane.dev/path/two', 2],
        ['https://wagslane.dev/path', 1]
    ];
    expect(actual).toEqual(expected);
});