describe('App', () => {
    it('should have a title', () => {
        browser.get('/');
        expect(browser.getTitle()).toEqual('Starter Angular Gulp ES6');
    });
});
