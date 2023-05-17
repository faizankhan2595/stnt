import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const WebViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route exact path={`/`} component={lazy(() => import(`./web_homepage/web_homepage`))} />
        <Route exact path={`/web/web_claimSubmission`} component={lazy(() => import(`./web_claimSubmission/web_claimSubmission`))} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(WebViews);