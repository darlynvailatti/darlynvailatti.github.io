import ReactGA from 'react-ga4';

const TRACKING_ID = "G-94GH8D0WXS";
ReactGA.initialize(TRACKING_ID);

export interface PageViewTrackingProps {
    page: string;
    title: string;
    meta?: any;
}

export interface EventTrackingProps {
    category: string;
    action: string;
    label: string;
    value: any;
}

export const trackPageView = (props: PageViewTrackingProps) => {
    ReactGA.send({ hitType: "pageview", page: props.page, title: props.page });
};

export const trackEvent = (props: EventTrackingProps) => {
    ReactGA.event({
        nonInteraction: true,
        transport: "xhr",
        ...props
    });
}