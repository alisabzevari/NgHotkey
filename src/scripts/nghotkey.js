var nghotkey = angular.module('nghotkey', []);

nghotkey.factory('Mousetrap', function () {
    return {
        bind: function (keys, callback, action) {
            Mousetrap.bind(keys, callback, action);
        },
        unbind: function (keys, action) {
            Mousetrap.unbind(keys, action);
        },
        trigger: function (keys, action) {
            Mousetrap.trigger(keys, action);
        },
        reset: function () {
            Mousetrap.reset();
        },
        stopCallbak: function (e, element) {
            Mousetrap.stopCallback(e, element);
        }
    };
});

nghotkey.directive('hotkey', ['Mousetrap', function (mousetrap) {
    return {
        restrict: 'A',
        link: function (scope, iElement, iAttrs) {
            if (!iAttrs.hotkeyAction)
                mousetrap.bind(iAttrs.hotkey, function () {
                    iElement.focus();
                });
            else
                mousetrap.bind(iAttrs.hotkey, function () {
                    iElement.focus();
                }, iAttrs.hotkeyAction);
        }
    };
}]);