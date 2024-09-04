import ReactGA from 'react-ga';

const TRACKING_ID = "G-94GH8D0WXS";
ReactGA.initialize(TRACKING_ID);

export const trackPageView = (page: any) => {
    console.debug('Tracking page view', page);
    ReactGA.set({ page });
    ReactGA.pageview(page);
};