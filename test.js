import fs from 'fs';
import path from 'path';
import fileType from 'file-type';
import icojs from 'icojs';
import pify from 'pify';
import test from 'ava';
import m from '.';

test('generate ico', async t => {
	const files = fs.readdirSync(path.join(__dirname, 'fixtures'));
	const arr = await Promise.all(files.map(x => pify(fs.readFile)(path.join(__dirname, 'fixtures', x))));

	t.deepEqual(fileType(await m(arr)), {ext: 'ico', mime: 'image/x-icon'});
});
