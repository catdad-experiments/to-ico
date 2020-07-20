const fs = require('fs');
const path = require('path');
const fileType = require('file-type');
const pify = require('pify');
const test = require('ava');
const m = require('.');

test('generate ico', async t => {
	const files = fs.readdirSync(path.join(__dirname, 'fixtures'));
	const arr = await Promise.all(files.map(x => pify(fs.readFile)(path.join(__dirname, 'fixtures', x))));

	t.deepEqual(fileType(await m(arr)), {ext: 'ico', mime: 'image/x-icon'});
});
