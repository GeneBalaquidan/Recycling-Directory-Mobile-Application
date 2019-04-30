import { AdminListMasterPage } from './admin-list-master/admin-list-master';
import { AdminSettingsPage } from './admin-settings/admin-settings';
import { AdminTabsPage } from './admin-tabs/admin-tabs';
import { AdminAboutPage } from './admin-about/admin-about';

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const AdminMainPage = AdminTabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = AdminListMasterPage;
export const Tab2Root = AdminSettingsPage;
export const Tab3Root = AdminAboutPage;