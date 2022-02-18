// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// When a command from ./commands is ready to use, import with `import './commands'` syntax
// import './commands';

Cypress.on('window:before:load', (win: any) => {
    win.getElementsOutOfViewport = () => {
        var elements = [];
        var all = win.document.getElementsByTagName("*"), i = 0, rect, docWidth = win.document.documentElement.offsetWidth;
        for (; i < all.length; i++) {
            rect = all[i].getBoundingClientRect();
            if (rect.right > docWidth || rect.left < 0) {
                elements.push(all[i]);
            }
        }
        return elements;
    }
});
