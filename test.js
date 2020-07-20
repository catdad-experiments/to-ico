const { promisify } = require('util');
const fs = require('fs');
const path = require('path');

const fileType = require('file-type');
const test = require('ava');

const toIco = require('.');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

test('generate ico', async t => {
	const files = await readdir(path.join(__dirname, 'fixtures'));
	const arr = await Promise.all(files.map(x => readFile(path.join(__dirname, 'fixtures', x))));

	t.deepEqual(fileType(await toIco(arr)), {ext: 'ico', mime: 'image/x-icon'});
});
