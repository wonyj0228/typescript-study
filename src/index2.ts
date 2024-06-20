import { init, exit } from './myPackage';
// tscongfig.json -> allowJs true로 작성필요
init({ url: 'xxx', debug: true });
exit(1);
