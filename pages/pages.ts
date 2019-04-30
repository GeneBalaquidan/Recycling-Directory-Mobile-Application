import { ListMasterPage } from './list-master/list-master';
import { SettingsPage } from './settings/settings';
import { TabsPage } from './tabs/tabs';
import { AboutPage } from './about/about';
import { WelcomePage } from './welcome/welcome';

export const FirstRunPage = WelcomePage;

export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = ListMasterPage;
export const Tab2Root = SettingsPage;
export const Tab3Root = AboutPage;