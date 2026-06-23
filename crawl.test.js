import { normalizeUrl, getURLsFromHTML } from './crawl.js';
import { test, expect } from '@jest/globals';

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

test('getURLsFromHTML absolute', () => {
  const inputURL = 'https://blog.boot.dev'
  const inputBody = '<html><body><a href="https://blog.boot.dev"><span>Boot.dev></span></a></body></html>'
  const actual = getURLsFromHTML(inputBody, inputURL)
  const expected = [ 'https://blog.boot.dev/' ]
  expect(actual).toEqual(expected)
})

test('getURLsFromHTML relative', () => {
  const inputURL = 'https://blog.boot.dev'
  const inputBody = '<html><body><a href="/path/one"><span>Boot.dev></span></a></body></html>'
  const actual = getURLsFromHTML(inputBody, inputURL)
  const expected = [ 'https://blog.boot.dev/path/one' ]
  expect(actual).toEqual(expected)
})

test('getURLsFromHTML both', () => {
  const inputURL = 'https://blog.boot.dev'
  const inputBody = '<html><body><a href="/path/one"><span>Boot.dev></span></a><a href="https://other.com/path/one"><span>Boot.dev></span></a></body></html>'
  const actual = getURLsFromHTML(inputBody, inputURL)
  const expected = [ 'https://blog.boot.dev/path/one', 'https://other.com/path/one' ]
  expect(actual).toEqual(expected)
})

test('getURLsFromHTML handle error', () => {
  const inputURL = 'https://blog.boot.dev'
  const inputBody = '<html><body><a href="path/one"><span>Boot.dev></span></a></body></html>'
  const actual = getURLsFromHTML(inputBody, inputURL)
  const expected = [ ]
  expect(actual).toEqual(expected)
})