import type { Metadata } from 'next';
import Link from 'next/link';
import {
  LegalContact,
  LegalList,
  LegalPage,
  LegalParagraph,
  LegalSection,
  LegalTitle,
} from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Internal QuickBooks Deposit Monitor Terms | PKA',
  description:
    'Terms of Use and End User License Agreement for the Internal QuickBooks Deposit Monitor operated by Palermo/Kissinger & Associates, P.C.',
};

export default function QboAppTermsPage() {
  return (
    <LegalPage>
      <LegalTitle>
        Internal QuickBooks Deposit Monitor — Terms of Use and End User License
        Agreement
      </LegalTitle>

      <LegalParagraph>
        <strong>Effective date:</strong> August 13, 2026
        <br />
        <strong>Last updated:</strong> August 13, 2026
      </LegalParagraph>

      <LegalParagraph>
        These Terms of Use and End User License Agreement (the{' '}
        <strong>“Terms”</strong>) govern use of the Internal QuickBooks Deposit
        Monitor (the <strong>“Tool”</strong>) operated by Palermo/Kissinger
        &amp; Associates, P.C. (<strong>“PKA,” “we,” “us,”</strong> or{' '}
        <strong>“our”</strong>).
      </LegalParagraph>

      <LegalSection heading="1. Internal-use tool">
        <LegalParagraph>
          The Tool is a private, unlisted application intended solely for
          authorized PKA personnel and authorized administrators of QuickBooks
          Online companies that have engaged PKA. It is not offered for sale,
          licensing, or general public use. Clients are not required to access
          or operate the Tool.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="2. Purpose">
        <LegalParagraph>
          The Tool connects to QuickBooks Online to help PKA identify and
          internally report deposit activity relevant to services PKA performs
          for its clients. The Tool is an administrative aid only. It does not
          replace QuickBooks Online, bank records, professional judgment, or the
          review and reconciliation procedures required under a client
          engagement.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="3. Limited license">
        <LegalParagraph>
          Subject to these Terms, PKA grants each authorized user a limited,
          revocable, nonexclusive, nontransferable right to use the Tool solely
          for PKA business purposes. No other rights are granted. Users may not
          copy, distribute, sell, sublicense, reverse engineer, interfere with,
          or use the Tool for any unauthorized purpose.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="4. Authorization and QuickBooks access">
        <LegalParagraph>
          Only a person authorized to act for the applicable QuickBooks Online
          company may connect or disconnect that company. By authorizing a
          connection, the administrator permits the Tool to access the
          QuickBooks information reasonably necessary for its stated purpose.
          Authorization may be revoked through QuickBooks Online or by
          contacting PKA.
        </LegalParagraph>
        <LegalParagraph>
          QuickBooks and Intuit are provided by Intuit Inc. under Intuit’s own
          terms. PKA is not Intuit, and Intuit does not sponsor or warrant the
          Tool.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="5. User responsibilities">
        <LegalParagraph>Authorized users must:</LegalParagraph>
        <LegalList>
          <li>use the Tool only for legitimate PKA business purposes;</li>
          <li>protect their accounts, devices, and authentication methods;</li>
          <li>
            promptly report suspected unauthorized access or inaccurate output;
          </li>
          <li>
            independently verify alerts and information before relying on them;
            and
          </li>
          <li>
            comply with applicable client agreements, professional obligations,
            laws, and PKA policies.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection heading="6. Privacy and confidentiality">
        <LegalParagraph>
          PKA handles information accessed through the Tool as described in the{' '}
          <Link
            href="/qbo-app-privacy"
            className="text-pka-green underline underline-offset-2"
          >
            Internal QuickBooks Deposit Monitor Privacy Policy
          </Link>
          . Authorized users must preserve the confidentiality of client
          information and may not disclose Tool output except as permitted by
          PKA policy, the applicable client engagement, and law.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="7. Ownership">
        <LegalParagraph>
          The Tool, its code, documentation, configuration, and related
          intellectual property are owned by PKA or its licensors. QuickBooks
          Online data remains subject to the rights of the applicable client,
          Intuit, and other lawful rights holders.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="8. Availability and changes">
        <LegalParagraph>
          PKA may modify, suspend, or discontinue the Tool at any time. The Tool
          may occasionally be unavailable or produce delayed, incomplete, or
          inaccurate results because of network, configuration, QuickBooks,
          third-party service, or software issues.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="9. No warranties">
        <LegalParagraph>
          To the fullest extent permitted by law, the Tool is provided{' '}
          <strong>“as is”</strong> and <strong>“as available,”</strong> without
          warranties of any kind, express or implied. PKA does not warrant that
          the Tool will be uninterrupted, error-free, or suitable as the sole
          basis for an accounting, financial, tax, audit, or business decision.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="10. Limitation of liability">
        <LegalParagraph>
          To the fullest extent permitted by law, PKA will not be liable for
          indirect, incidental, special, consequential, exemplary, or punitive
          damages arising from use of or inability to use the Tool. Nothing in
          these Terms limits liability that cannot lawfully be limited or alters
          PKA’s obligations under an applicable written client engagement.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="11. Termination">
        <LegalParagraph>
          PKA may revoke access at any time. A user’s authorization ends
          immediately when the user is no longer authorized by PKA or the
          applicable QuickBooks Online company. Upon termination, the user must
          stop using the Tool and protect or return any related information as
          directed by PKA.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="12. Governing law">
        <LegalParagraph>
          These Terms are governed by the laws of the Commonwealth of
          Pennsylvania, without regard to conflict-of-law principles, except
          where another law is required to apply.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="13. Contact">
        <LegalParagraph>
          Questions about these Terms or the Tool may be directed to:
        </LegalParagraph>
        <LegalContact />
      </LegalSection>
    </LegalPage>
  );
}
