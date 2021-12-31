import { component } from './component';

import { language } from './language';

import { APP_NAME } from './constant';

console.log(APP_NAME + ' version:', component.version.number, component.version.name);

component.data.init();

language.init();

component.theme.init();

component.layout.init();

component.toolbar.init();

component.header.init();

component.group.init();

component.bookmark.init();

component.groupAndBookmark.init();

component.pageLock.init();

component.keyboard.init();

// component.menu.open();

// component.bookmark.add.render();

// component.group.add.render();