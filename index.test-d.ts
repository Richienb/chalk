import {expectType, expectAssignable, expectError} from 'tsd';
import chalk, {Chalk, ChalkInstance, Color, ColorSupport, ColorSupportLevel, chalkStderr, supportsColor} from './index.js';

// - Helpers -
type colorReturn = ChalkInstance & {supportsColor?: never};

// - supportsColor -
expectType<ColorSupport | false>(supportsColor);
if (supportsColor) {
	expectType<boolean>(supportsColor.hasBasic);
	expectType<boolean>(supportsColor.has256);
	expectType<boolean>(supportsColor.has16m);
}

// - stderr -
expectAssignable<ChalkInstance>(chalkStderr);
expectType<ColorSupport | false>(chalkStderr.supportsColor);
if (chalkStderr.supportsColor) {
	expectType<boolean>(chalkStderr.supportsColor.hasBasic);
	expectType<boolean>(chalkStderr.supportsColor.has256);
	expectType<boolean>(chalkStderr.supportsColor.has16m);
}

// -- `stderr` is not a member of the Chalk interface --
expectError(chalk.reset.stderr);

// -- `supportsColor` is not a member of the Chalk interface --
expectError(chalk.reset.supportsColor);

// - Chalk -
// -- Instance --
expectType<ChalkInstance>(new Chalk({level: 1}));

// -- Properties --
expectType<ColorSupportLevel>(chalk.level);

// -- Template literal --
expectType<string>(chalk``);
const name = 'John';
expectType<string>(chalk`Hello {bold.red ${name}}`);
expectType<string>(chalk`Works with numbers {bold.red ${1}}`);

// -- Color methods --
expectAssignable<colorReturn>(chalk.hex('#DEADED'));
expectAssignable<colorReturn>(chalk.keyword('orange'));
expectAssignable<colorReturn>(chalk.rgb(0, 0, 0));
expectAssignable<colorReturn>(chalk.hsl(0, 0, 0));
expectAssignable<colorReturn>(chalk.hsv(0, 0, 0));
expectAssignable<colorReturn>(chalk.hwb(0, 0, 0));
expectAssignable<colorReturn>(chalk.ansi(30));
expectAssignable<colorReturn>(chalk.ansi256(0));
expectAssignable<colorReturn>(chalk.bgHex('#DEADED'));
expectAssignable<colorReturn>(chalk.bgKeyword('orange'));
expectAssignable<colorReturn>(chalk.bgRgb(0, 0, 0));
expectAssignable<colorReturn>(chalk.bgHsl(0, 0, 0));
expectAssignable<colorReturn>(chalk.bgHsv(0, 0, 0));
expectAssignable<colorReturn>(chalk.bgHwb(0, 0, 0));
expectAssignable<colorReturn>(chalk.bgAnsi(30));
expectAssignable<colorReturn>(chalk.bgAnsi256(0));

// -- Modifiers --
expectType<string>(chalk.reset('foo'));
expectType<string>(chalk.bold('foo'));
expectType<string>(chalk.dim('foo'));
expectType<string>(chalk.italic('foo'));
expectType<string>(chalk.underline('foo'));
expectType<string>(chalk.inverse('foo'));
expectType<string>(chalk.hidden('foo'));
expectType<string>(chalk.strikethrough('foo'));
expectType<string>(chalk.visible('foo'));
expectType<string>(chalk.reset`foo`);
expectType<string>(chalk.bold`foo`);
expectType<string>(chalk.dim`foo`);
expectType<string>(chalk.italic`foo`);
expectType<string>(chalk.underline`foo`);
expectType<string>(chalk.inverse`foo`);
expectType<string>(chalk.hidden`foo`);
expectType<string>(chalk.strikethrough`foo`);
expectType<string>(chalk.visible`foo`);

// -- Colors --
expectType<string>(chalk.black('foo'));
expectType<string>(chalk.red('foo'));
expectType<string>(chalk.green('foo'));
expectType<string>(chalk.yellow('foo'));
expectType<string>(chalk.blue('foo'));
expectType<string>(chalk.magenta('foo'));
expectType<string>(chalk.cyan('foo'));
expectType<string>(chalk.white('foo'));
expectType<string>(chalk.gray('foo'));
expectType<string>(chalk.grey('foo'));
expectType<string>(chalk.blackBright('foo'));
expectType<string>(chalk.redBright('foo'));
expectType<string>(chalk.greenBright('foo'));
expectType<string>(chalk.yellowBright('foo'));
expectType<string>(chalk.blueBright('foo'));
expectType<string>(chalk.magentaBright('foo'));
expectType<string>(chalk.cyanBright('foo'));
expectType<string>(chalk.whiteBright('foo'));
expectType<string>(chalk.bgBlack('foo'));
expectType<string>(chalk.bgRed('foo'));
expectType<string>(chalk.bgGreen('foo'));
expectType<string>(chalk.bgYellow('foo'));
expectType<string>(chalk.bgBlue('foo'));
expectType<string>(chalk.bgMagenta('foo'));
expectType<string>(chalk.bgCyan('foo'));
expectType<string>(chalk.bgWhite('foo'));
expectType<string>(chalk.bgBlackBright('foo'));
expectType<string>(chalk.bgRedBright('foo'));
expectType<string>(chalk.bgGreenBright('foo'));
expectType<string>(chalk.bgYellowBright('foo'));
expectType<string>(chalk.bgBlueBright('foo'));
expectType<string>(chalk.bgMagentaBright('foo'));
expectType<string>(chalk.bgCyanBright('foo'));
expectType<string>(chalk.bgWhiteBright('foo'));
expectType<string>(chalk.black`foo`);
expectType<string>(chalk.red`foo`);
expectType<string>(chalk.green`foo`);
expectType<string>(chalk.yellow`foo`);
expectType<string>(chalk.blue`foo`);
expectType<string>(chalk.magenta`foo`);
expectType<string>(chalk.cyan`foo`);
expectType<string>(chalk.white`foo`);
expectType<string>(chalk.gray`foo`);
expectType<string>(chalk.grey`foo`);
expectType<string>(chalk.blackBright`foo`);
expectType<string>(chalk.redBright`foo`);
expectType<string>(chalk.greenBright`foo`);
expectType<string>(chalk.yellowBright`foo`);
expectType<string>(chalk.blueBright`foo`);
expectType<string>(chalk.magentaBright`foo`);
expectType<string>(chalk.cyanBright`foo`);
expectType<string>(chalk.whiteBright`foo`);
expectType<string>(chalk.bgBlack`foo`);
expectType<string>(chalk.bgRed`foo`);
expectType<string>(chalk.bgGreen`foo`);
expectType<string>(chalk.bgYellow`foo`);
expectType<string>(chalk.bgBlue`foo`);
expectType<string>(chalk.bgMagenta`foo`);
expectType<string>(chalk.bgCyan`foo`);
expectType<string>(chalk.bgWhite`foo`);
expectType<string>(chalk.bgBlackBright`foo`);
expectType<string>(chalk.bgRedBright`foo`);
expectType<string>(chalk.bgGreenBright`foo`);
expectType<string>(chalk.bgYellowBright`foo`);
expectType<string>(chalk.bgBlueBright`foo`);
expectType<string>(chalk.bgMagentaBright`foo`);
expectType<string>(chalk.bgCyanBright`foo`);
expectType<string>(chalk.bgWhiteBright`foo`);

// -- Complex --
expectType<string>(chalk.red.bgGreen.underline('foo'));
expectType<string>(chalk.underline.red.bgGreen('foo'));

// -- Complex template literal --
expectType<string>(chalk.underline``);
expectType<string>(chalk.red.bgGreen.bold`Hello {italic.blue ${name}}`);
expectType<string>(chalk.strikethrough.cyanBright.bgBlack`Works with {reset {bold numbers}} {bold.red ${1}}`);

// -- Color types ==
expectAssignable<Color>('red');
expectError<Color>('hotpink');
