export enum Page {
  ABOUT_US = 'ABOUT_US',
  SERVICES = 'SERVICES',
  TOOLS = 'TOOLS',
  CONTACT = 'CONTACT',
}

export const pageTitles: Record<Page, string> = {
  [Page.ABOUT_US]: 'Our practice',
  [Page.SERVICES]: 'Financial services',
  [Page.TOOLS]: 'Tools',
  [Page.CONTACT]: 'Contact us',
};

export const pageHrefs: Record<Page, string> = {
  [Page.ABOUT_US]: '/about-us',
  [Page.SERVICES]: '/services',
  [Page.TOOLS]: '/tools',
  [Page.CONTACT]: '/contact',
};
