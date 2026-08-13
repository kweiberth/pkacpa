import type { Metadata } from 'next';
import {
  LegalContact,
  LegalList,
  LegalPage,
  LegalParagraph,
  LegalSection,
  LegalTitle,
} from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Internal QuickBooks Deposit Monitor Privacy Policy | PKA',
  description:
    'Privacy Policy for the Internal QuickBooks Deposit Monitor operated by Palermo/Kissinger & Associates, P.C.',
};

export default function QboAppPrivacyPage() {
  return (
    <LegalPage>
      <LegalTitle>
        Internal QuickBooks Deposit Monitor — Privacy Policy
      </LegalTitle>

      <LegalParagraph>
        <strong>Effective date:</strong> August 13, 2026
        <br />
        <strong>Last updated:</strong> August 13, 2026
      </LegalParagraph>

      <LegalParagraph>
        This Privacy Policy explains how Palermo/Kissinger &amp; Associates,
        P.C. (<strong>“PKA,” “we,” “us,”</strong> or <strong>“our”</strong>)
        handles information in connection with its Internal QuickBooks Deposit
        Monitor (the <strong>“Tool”</strong>). The Tool is a private, unlisted
        application used by authorized PKA personnel in connection with services
        provided to PKA clients. It is not a consumer application or a public
        software service.
      </LegalParagraph>

      <LegalSection heading="1. Scope">
        <LegalParagraph>
          This Policy applies to information accessed, processed, stored, or
          transmitted by the Tool. PKA’s engagement letters, professional
          obligations, and other applicable privacy notices may also govern
          information PKA receives from or about a client.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="2. Information the Tool accesses">
        <LegalParagraph>
          After an authorized QuickBooks Online company administrator connects
          the Tool, the Tool may access only QuickBooks information reasonably
          necessary to monitor and report relevant deposit activity, including:
        </LegalParagraph>
        <LegalList>
          <li>QuickBooks company and connection identifiers;</li>
          <li>
            deposit, payment, invoice, and linked-transaction identifiers;
          </li>
          <li>
            transaction dates, creation and update timestamps, amounts,
            statuses, destination accounts, and transaction links;
          </li>
          <li>transaction notes or similar descriptive fields; and</li>
          <li>
            limited customer, payer, or account information when it is included
            in or necessary to identify the relevant transaction.
          </li>
        </LegalList>
        <LegalParagraph>
          The Tool also processes OAuth access and refresh tokens and related
          configuration needed to maintain the authorized QuickBooks connection.
          PKA does not request or receive a user’s Intuit password through the
          Tool.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="3. How information is used">
        <LegalParagraph>
          PKA uses information processed by the Tool only to:
        </LegalParagraph>
        <LegalList>
          <li>identify new or changed QuickBooks deposit activity;</li>
          <li>
            determine whether an internal notification has already been sent;
          </li>
          <li>send limited deposit alerts to authorized PKA personnel;</li>
          <li>
            maintain, secure, and troubleshoot the QuickBooks connection and the
            Tool; and
          </li>
          <li>
            perform services authorized by the applicable client engagement.
          </li>
        </LegalList>
        <LegalParagraph>
          PKA does not use information obtained through the Tool for
          advertising, does not sell it, and does not use it to create profiles
          or insights for unrelated customers. The Tool does not make automated
          decisions that produce legal or similarly significant effects.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="4. Internal notifications">
        <LegalParagraph>
          The Tool may send an email notification to a limited list of
          authorized PKA personnel when it identifies relevant deposit activity.
          Notifications are designed to contain only the information reasonably
          necessary for the recipient to identify and process the deposit.
          Recipients must handle those messages in accordance with PKA’s
          confidentiality, security, records-management, and client-service
          requirements.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="5. Disclosure and service providers">
        <LegalParagraph>
          Information processed by the Tool is available only to authorized PKA
          personnel and to service providers used to operate and secure the
          Tool, such as Intuit, PKA’s credential-management provider,
          operating-system and device-security providers, and PKA’s business
          email provider. Those providers may process information only as needed
          to provide their services and subject to their applicable agreements
          and privacy obligations.
        </LegalParagraph>
        <LegalParagraph>
          PKA may also disclose information when required by law, professional
          standards, a valid legal process, or as necessary to protect the
          rights, security, or integrity of PKA, its clients, or others. PKA
          does not share one client’s QuickBooks information with another
          client.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="6. Storage and security">
        <LegalParagraph>
          The Tool is designed to run on a PKA-controlled Windows device. Intuit
          application credentials are maintained through PKA’s
          credential-management system. OAuth refresh tokens and related local
          secrets are encrypted for the authorized Windows account, and access
          is restricted through operating-system permissions. Access tokens and
          secret values are not intentionally written to project files, logs, or
          email notifications.
        </LegalParagraph>
        <LegalParagraph>
          QuickBooks API responses are processed transiently. The production
          Tool is designed to retain only limited operational information needed
          to prevent duplicate alerts and support troubleshooting, such as a
          QuickBooks transaction identifier, processing status, notification
          timestamp, and non-secret error information. PKA applies
          administrative, technical, and physical safeguards appropriate to the
          nature of the information, but no method of storage or transmission is
          completely secure.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="7. Retention and deletion">
        <LegalParagraph>
          PKA retains information processed by the Tool only for as long as
          reasonably necessary to operate and secure the Tool, provide
          authorized client services, comply with applicable law and
          professional obligations, resolve disputes, and enforce applicable
          agreements. Retention may also be governed by PKA’s records-management
          requirements and the applicable client engagement.
        </LegalParagraph>
        <LegalParagraph>
          When information is no longer required, PKA deletes it, renders it
          unusable, or securely disposes of it in accordance with applicable
          requirements. Disconnecting a QuickBooks company prevents the Tool
          from obtaining new information from that company, subject to any
          information PKA must retain independently under law, professional
          obligations, records-management requirements, or a client engagement.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="8. Choices and requests">
        <LegalParagraph>
          An authorized QuickBooks Online company administrator may revoke the
          Tool’s access through QuickBooks Online. A client may also contact PKA
          to ask questions about the Tool’s use of its information or to request
          disconnection or deletion, subject to applicable legal, professional,
          security, and client-engagement requirements.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="9. Changes to this Policy">
        <LegalParagraph>
          PKA may update this Policy as the Tool or applicable requirements
          change. The “Last updated” date above identifies the current version.
          Material changes will be communicated as appropriate before materially
          different uses of QuickBooks information are introduced.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="10. Contact">
        <LegalParagraph>
          Questions or requests regarding this Policy or the Tool may be
          directed to:
        </LegalParagraph>
        <LegalContact />
      </LegalSection>
    </LegalPage>
  );
}
