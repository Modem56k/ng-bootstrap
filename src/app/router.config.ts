import { UIRouter } from '@uirouter/angular';
import { Visualizer } from '@uirouter/visualizer';
import { Injector, Injectable } from '@angular/core';

export function uiRouterConfigFn(router: UIRouter, injector: Injector) {

    let criteria = { entering: (state) => state.authenticate };
    router.transitionService.onBefore(criteria, function () { });

    let pluginInstance = router.plugin(Visualizer);
    router.urlService.rules.otherwise({ state: 'home' });

    //   function requireAuthentication(transition) {
    //     let $state = transition.router.stateService;
    //     let authSvc = transition.injector().get(UserManagerService);
    //     return authSvc.CurrentUser().then((user) => {
    //       var userState = authSvc.UpdateUser(user);
    //       if (!(userState && userState.isLoaded && userState.expiresIn > 2)) {
    //         authSvc.Login();
    //       }
    //       return true;
    //     });
    //   }
}
