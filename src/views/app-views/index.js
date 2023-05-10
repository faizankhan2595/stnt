import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route exact path="/app">
          <Redirect to={`${APP_PREFIX_PATH}/dashboard`} />
        </Route>
        <Route path={`${APP_PREFIX_PATH}/dashboard`} component={lazy(() => import(`./Dashboard`))} />
        <Route exact path={`${APP_PREFIX_PATH}/user_management`} component={lazy(() => import(`./user_management`))} />
        <Route exact path={`${APP_PREFIX_PATH}/user_management/register_new_user`} component={lazy(() => import(`./user_management/register_new_user`))} />
        <Route exact path={`${APP_PREFIX_PATH}/claim_management/claim_request`} component={lazy(() => import(`./claim_management/claim_request`))} />
        <Route exact path={`${APP_PREFIX_PATH}/claim_management/claim_request/view_detail`} component={lazy(() => import(`./claim_management/claim_request/view_detail/index`))} />
        <Route exact path={`${APP_PREFIX_PATH}/travel_agency`} component={lazy(() => import(`./travel_agency`))} />
        <Route exact path={`${APP_PREFIX_PATH}/travel_agency/add_new`} component={lazy(() => import(`./travel_agency/add_new`))} />
        <Route exact path={`${APP_PREFIX_PATH}/traveler/manifest_import`} component={lazy(() => import(`./Members`))} />
        <Route exact path={`${APP_PREFIX_PATH}/traveler/manifest_import/add_new`} component={lazy(() => import(`./Members/manifest_import`))} />
        <Route exact path={`${APP_PREFIX_PATH}/membership/members/membersdetails/:id`} component={lazy(() => import(`./Members/MembersDetails.js`))} />
        <Route exact path={`${APP_PREFIX_PATH}/traveler/travelers_list`} component={lazy(() => import(`./Travelers_List`))} />
        <Route exact path={`${APP_PREFIX_PATH}/membership/payments`} component={lazy(() => import(`./Payments`))} />
        <Route exact path={`${APP_PREFIX_PATH}/membership/membership_plans`} component={lazy(() => import(`./Membership_plans`))} />
        <Route exact path={`${APP_PREFIX_PATH}/membership/membership_plans/add_new`} component={lazy(() => import(`./Membership_plans/AddNew.js`))} />
        <Route exact path={`${APP_PREFIX_PATH}/membership/membership_plans/update/:id`} component={lazy(() => import(`./Membership_plans/AddNew.js`))} />
        <Route exact path={`${APP_PREFIX_PATH}/events/event_booking`} component={lazy(() => import(`./Events_Booking`))} />
        <Route exact path={`${APP_PREFIX_PATH}/events/event_list`} component={lazy(() => import(`./Events`))} />
        <Route exact path={`${APP_PREFIX_PATH}/events/event_list/add_new`} component={lazy(() => import(`./Events/AddNew.js`))} />
        <Route exact path={`${APP_PREFIX_PATH}/events/event_list/update/:id`} component={lazy(() => import(`./Events/AddNew.js`))} />
        <Route exact path={`${APP_PREFIX_PATH}/facilities/facility_booking`} component={lazy(() => import(`./Facility_Booking`))} />
        <Route exact path={`${APP_PREFIX_PATH}/facilities/facility_list`} component={lazy(() => import(`./Facility`))} />
        <Route exact path={`${APP_PREFIX_PATH}/facilities/facility_list/add_new`} component={lazy(() => import(`./Facility/AddNew.js`))} />
        <Route exact path={`${APP_PREFIX_PATH}/facilities/facility_list/:facility_types`} component={lazy(() => import(`./Facility/FacilityType.js`))} />
        <Route exact path={`${APP_PREFIX_PATH}/facilities/facility_list/:facility_types/add_new`} component={lazy(() => import(`./Facility/AddNewFacilityTypes.js`))} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);