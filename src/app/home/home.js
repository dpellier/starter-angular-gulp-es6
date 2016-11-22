
class HomeCtrl {
    // @ngInject
    constructor($translate) {
        this.$translate = $translate;
    }

    switchLocale(locale) {
        this.$translate.use(locale);
    }
}

export default HomeCtrl;
