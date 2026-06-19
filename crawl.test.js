const { normalizeUrl } = require('./crawl.js');
const { test, expect } = require('@jest/globals');

test('normalizeUrl should return the same URL', () => {
    const url = 'https://blog.boot.dev/path';
    const actual = normalizeUrl(url);
    const expected = "blog.boot.dev/path";
    expect(actual).toEqual(expected);
});

test('normalizeUrl should remove trailing slash', () => {
    const url = 'https://blog.boot.dev/path/';
    const actual = normalizeUrl(url);
    const expected = "blog.boot.dev/path";
    expect(actual).toEqual(expected);
});

test('normalizeUrl should handle capital letters', () => {
    const url = 'https://BLOG.BOOT.DEV/PATH/';
    const actual = normalizeUrl(url);
    const expected = "blog.boot.dev/path";
    expect(actual).toEqual(expected);
});

test('normalizeUrl should handle http protocol', () => {
    const url = 'http://blog.boot.dev/path';
    const actual = normalizeUrl(url);
    const expected = "blog.boot.dev/path";
    expect(actual).toEqual(expected);
});