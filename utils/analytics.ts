import { init, track as _track } from '@amplitude/analytics-node';

init('832ee5a3cdefc047a9ed89935f9fc3ea');

export const track = (
  eventName: EventName,
  eventProperties?: Record<string, string | number>,
  deviceId?: string,
) => {
  _track(eventName, eventProperties, { device_id: deviceId });
};

export enum EventName {
  CONTACT_FORM_SUBMITTED = 'CONTACT_FORM_SUBMITTED',
  CONTACT_FORM_HONEYPOT_CAUGHT = 'CONTACT_FORM_HONEYPOT_CAUGHT',
  CONTACT_FORM_EMAIL_SENT = 'CONTACT_FORM_EMAIL_SENT',
  CONTACT_FORM_EMAIL_FAILED = 'CONTACT_FORM_EMAIL_FAILED',
}
