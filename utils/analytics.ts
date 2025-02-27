import { init, track as _track } from '@amplitude/analytics-node';

export const AMPLITUDE_API_KEY =
  process.env.NEXT_PUBLIC_DEPLOY_ENV === 'production'
    ? '19b29ce9c0316d7b92295295e4f3119f'
    : process.env.NEXT_PUBLIC_DEPLOY_ENV === 'staging'
      ? '47d922bb14fec8d6be937c3c36d71bc6'
      : '832ee5a3cdefc047a9ed89935f9fc3ea';

export enum EventName {
  CONTACT_FORM_SUBMITTED = 'CONTACT_FORM_SUBMITTED',
  CONTACT_FORM_HONEYPOT_CAUGHT = 'CONTACT_FORM_HONEYPOT_CAUGHT',
  CONTACT_FORM_MISSING_FIELDS = 'CONTACT_FORM_MISSING_FIELDS',
  CONTACT_FORM_EMAIL_SENT = 'CONTACT_FORM_EMAIL_SENT',
  CONTACT_FORM_EMAIL_FAILED = 'CONTACT_FORM_EMAIL_FAILED',
}

init(AMPLITUDE_API_KEY);

export const track = (
  eventName: EventName,
  eventProperties: Record<string, string | number> | undefined,
  deviceId: string,
) => {
  _track(eventName, eventProperties, { device_id: deviceId });
};
