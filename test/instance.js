import test from 'ava';
import chalk, {Chalk} from '../source/index.js';

chalk.level = 1;

test('create an isolated context where colors can be disabled (by level)', t => {
	const instance = new Chalk({level: 0});
	t.is(instance.red('foo'), 'foo');
	t.is(chalk.red('foo'), '\u001B[31mfoo\u001B[39m');
	instance.level = 2;
	t.is(instance.red('foo'), '\u001B[31mfoo\u001B[39m');
});

test('the `level` option should be a number from 0 to 3', t => {
	/* eslint-disable no-new */
	t.throws(() => {
		new Chalk({level: 10});
	}, {message: /should be an integer from 0 to 3/});

	t.throws(() => {
		new Chalk({level: -1});
	}, {message: /should be an integer from 0 to 3/});
	/* eslint-enable no-new */
});
