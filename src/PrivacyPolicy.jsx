import React from "react";
import { Plane, MessageCircle } from "lucide-react";

const PrivacyPolicy = () => {
    
return ( <div className="legal-page">

  {/* Header */}
<header className="header">
  <div className="container nav">

    {/* Logo */}
    <a href="/" className="brand">
      <span className="brand-mark">
        <Plane size={21} />
      </span>

      <span>
        <strong>London Cars 247</strong>
        <small>Airport Transfers</small>
      </span>
    </a>

    {/* WhatsApp Booking Button */}
   <a
  href={`https://wa.me/447412850832?text=${encodeURIComponent(
    "Hello, I would like to book an airport transfer."
  )}`}
  target="_blank"
  rel="noreferrer"
  className="btn btn-whatsapp"
>
  <MessageCircle size={17} />
  <span>Book on WhatsApp</span>
</a>

  </div>
</header>
  {/* Hero */}
  <section className="legal-hero">
    <div className="container legal-hero-inner">

      <div className="eyebrow">
        <span />
        LONDON CARS 247
      </div>

      <h1>
        Privacy <em>Policy.</em>
      </h1>

      <p>
        How London Cars 247 collects, uses and protects your
        personal information.
      </p>

      <div className="legal-date">
        Last updated: 29 August 2026
      </div>

    </div>
  </section>

  {/* Content */}
  <main className="legal-content-section">
    <div className="container">

      <div className="legal-layout">

        {/* Main Content */}
        <article className="legal-document">

          <a href="/" className="legal-back">
            ← Back to London Cars 247
          </a>

          <p className="legal-intro">
            London Cars 247 respects your privacy and is committed to
            protecting the personal information you provide when using our
            website or contacting us about our private hire and airport
            transfer services.
          </p>

          <p>
            This Privacy Policy explains what information we may collect,
            how we use it, how it may be shared, and the choices available
            to you.
          </p>

          <div className="legal-divider" />

          <h2>1. Who We Are</h2>

          <p>
            This website is operated by <strong>London Cars 247</strong>,
            providing pre-booked private hire and airport transfer
            services.
          </p>

          <p>
            If you have any questions about this Privacy Policy or how
            your information is handled, you can contact us at:
          </p>

          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@londoncars247.com">
                info@londoncars247.com
              </a>
            </li>

            <li>
              <strong>Website:</strong>{" "}
              <a
                href="https://www.londoncars247.com"
                target="_blank"
                rel="noreferrer"
              >
                www.londoncars247.com
              </a>
            </li>
          </ul>

          <h2>2. Information We May Collect</h2>

          <p>
            Depending on how you use our website and services, we may
            receive information such as:
          </p>

          <ul>
            <li>Name</li>
            <li>Telephone or WhatsApp number</li>
            <li>Email address</li>
            <li>Pickup location</li>
            <li>Drop-off or destination address</li>
            <li>Travel date</li>
            <li>Pickup time</li>
            <li>Number of passengers</li>
            <li>Luggage requirements</li>
            <li>Flight number, where provided</li>
            <li>Additional information you voluntarily provide</li>
          </ul>

          <h2>3. How We Receive Booking Information</h2>

          <p>
            Our website booking form allows you to enter journey
            information such as pickup location, destination, date, time,
            passengers, luggage and flight details.
          </p>

          <p>
            When you submit the booking form, the information is prepared
            as a WhatsApp message so that you can contact London Cars 247
            and request the journey.
          </p>

          <p>
            Because the booking request is communicated through WhatsApp,
            information you send through WhatsApp may also be processed
            according to WhatsApp's own privacy policy and terms.
          </p>

          <h2>4. How We Use Your Information</h2>

          <p>We may use personal information for purposes including:</p>

          <ul>
            <li>Responding to booking enquiries</li>
            <li>Arranging and providing requested journeys</li>
            <li>Communicating with customers about bookings</li>
            <li>Confirming pickup and destination information</li>
            <li>Managing changes or cancellations</li>
            <li>Responding to customer questions and complaints</li>
            <li>Providing customer support</li>
            <li>Meeting applicable legal or regulatory requirements</li>
            <li>Protecting our business and preventing misuse</li>
          </ul>

          <h2>5. Legal Basis for Processing</h2>

          <p>
            Where applicable, we may process personal information because
            it is necessary to take steps at your request before providing
            a service, to perform a booking or service, to comply with a
            legal obligation, for legitimate business purposes, or where
            you have provided consent.
          </p>

          <p>
            The applicable legal basis will depend on the nature and
            circumstances of the information and processing involved.
          </p>

          <h2>6. Sharing Information</h2>

          <p>
            We do not sell your personal information.
          </p>

          <p>
            Information may be shared where reasonably necessary to
            provide the requested service or operate our business. This
            may include sharing relevant journey information with a driver
            or service provider responsible for fulfilling your booking.
          </p>

          <p>
            We may also use third-party technology and service providers,
            including website hosting, email, mapping and communication
            services.
          </p>

          <p>
            We only intend to share information where there is a legitimate
            reason to do so and where required safeguards apply.
          </p>

          <h2>7. WhatsApp</h2>

          <p>
            Our website may use WhatsApp to allow customers to send booking
            requests and communicate with London Cars 247.
          </p>

          <p>
            When you choose to contact us through WhatsApp, information is
            processed through WhatsApp and may be subject to WhatsApp's
            own terms and privacy practices.
          </p>

          <p>
            Customers should avoid sending unnecessary sensitive personal
            information through WhatsApp.
          </p>

          <h2>8. Location and Mapping Services</h2>

          <p>
            Our booking experience may use mapping or location services to
            assist customers with entering pickup and destination
            locations.
          </p>

          <p>
            Depending on how these services are configured, information
            entered into location-search features may be processed by the
            relevant third-party provider.
          </p>

          <h2>9. Data Retention</h2>

          <p>
            We retain personal information only for as long as reasonably
            necessary for the purposes for which it was collected,
            including providing services, handling enquiries, resolving
            disputes, maintaining business records and complying with legal
            obligations.
          </p>

          <p>
            The appropriate retention period may vary depending on the
            type of information and the circumstances in which it was
            collected.
          </p>

          <h2>10. Data Security</h2>

          <p>
            We take reasonable steps to protect personal information
            against unauthorised access, loss, misuse, alteration or
            disclosure.
          </p>

          <p>
            However, no method of transmitting or storing information
            online can be guaranteed to be completely secure.
          </p>

          <h2>11. Your Rights</h2>

          <p>
            Depending on applicable data protection law, you may have
            rights relating to your personal information, which can
            include:
          </p>

          <ul>
            <li>Requesting access to personal information</li>
            <li>Requesting correction of inaccurate information</li>
            <li>Requesting deletion in appropriate circumstances</li>
            <li>Requesting restriction of processing</li>
            <li>Objecting to certain processing</li>
            <li>Requesting portability of information where applicable</li>
            <li>Withdrawing consent where processing is based on consent</li>
          </ul>

          <p>
            These rights are subject to applicable legal conditions and
            exemptions.
          </p>

          <h2>12. How to Make a Privacy Request</h2>

          <p>
            To ask about your personal information or exercise an
            applicable privacy right, contact us at:
          </p>

          <p>
            <a href="mailto:info@londoncars247.com">
              info@londoncars247.com
            </a>
          </p>

          <p>
            Please provide enough information for us to understand your
            request and identify the relevant booking or enquiry where
            necessary.
          </p>

          <h2>13. Cookies</h2>

          <p>
            Our website may use cookies or similar technologies that are
            necessary for the operation and security of the website.
          </p>

          <p>
            If we introduce analytics, advertising or other non-essential
            technologies that require consent, we will provide appropriate
            information and consent choices where required.
          </p>

          <h2>14. Third-Party Websites and Services</h2>

          <p>
            Our website may contain links or integrations involving
            third-party services such as WhatsApp, mapping providers,
            Google services or other external platforms.
          </p>

          <p>
            We are not responsible for the privacy practices of
            third-party websites or services. We recommend reviewing their
            privacy policies before providing them with personal
            information.
          </p>

          <h2>15. Children's Privacy</h2>

          <p>
            Our services are intended for adults making or arranging
            private hire journeys. We do not knowingly collect personal
            information from children for independent use of our services.
          </p>

          <h2>16. Changes to This Privacy Policy</h2>

          <p>
            We may update this Privacy Policy from time to time to reflect
            changes to our website, services, technology or legal
            requirements.
          </p>

          <p>
            The latest version will be published on this page with the
            applicable last-updated date.
          </p>

          <h2>17. Contact Us</h2>

          <p>
            If you have questions about this Privacy Policy or the way
            London Cars 247 handles personal information, please contact
            us:
          </p>

          <ul>
            <li>
              <strong>Business:</strong> London Cars 247
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@londoncars247.com">
                info@londoncars247.com
              </a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a
                href="https://www.londoncars247.com"
                target="_blank"
                rel="noreferrer"
              >
                www.londoncars247.com
              </a>
            </li>
          </ul>

          <div className="legal-notice">
            <strong>Important</strong>

            <p>
              This Privacy Policy is a general website privacy document
              and should be reviewed against London Cars 247's actual
              business structure, data-processing arrangements, licensing
              requirements and third-party services before being treated
              as final legal advice.
            </p>
          </div>

        </article>

        {/* Sidebar */}
        <aside className="legal-sidebar">

          <div className="legal-sidebar-card">
            <span className="eyebrow dark">LEGAL</span>

            <h3>London Cars 247</h3>

            <p>
              Important information about using our airport transfer
              services and website.
            </p>

            <a href="/terms-and-conditions">
              Terms &amp; Conditions
              <span>→</span>
            </a>

            <a href="/privacy-policy" className="active">
              Privacy Policy
              <span>→</span>
            </a>
          </div>

          <div className="legal-help-card">
            <span>HAVE A QUESTION?</span>

            <h3>We're here to help.</h3>

            <p>
              Contact London Cars 247 if you have a question about your
              booking or privacy.
            </p>

            <a href="mailto:info@londoncars247.com">
              Contact us →
            </a>
          </div>

        </aside>

      </div>

    </div>
  </main>

  {/* Footer */}
  <footer>

    <div className="container footer-bottom">
      <span>
        © {new Date().getFullYear()} London Cars 247. All rights reserved.
      </span>

      <span>
        Airport transfers • London
      </span>
    </div>
  </footer>

</div>

);
};

export default PrivacyPolicy;
