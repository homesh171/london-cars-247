import React from "react";
import { Plane, MessageCircle } from "lucide-react";
const WHATSAPP_NUMBER = "447412850832";

const TermsAndConditions = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to book an airport transfer."
  );

  return (
    <div className="legal-page">

      {/* ================= HEADER ================= */}
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


      {/* ================= HERO ================= */}
      <section className="legal-hero">
        <div className="container legal-hero-inner">

          <div className="eyebrow">
            <span />
            LONDON CARS 247
          </div>

          <h1>
            Terms & <em>Conditions.</em>
          </h1>

          <p>
            Important information about booking and using our
            private hire and airport transfer services.
          </p>

          <div className="legal-date">
            Last updated: 29 August 2026
          </div>

        </div>
      </section>


      {/* ================= CONTENT ================= */}
      <main className="legal-content-section">
        <div className="container">

          <div className="legal-layout">

            {/* MAIN DOCUMENT */}
            <article className="legal-document">

              <a href="/" className="legal-back">
                ← Back to London Cars 247
              </a>

              <p className="legal-intro">
                These Terms & Conditions govern the use of the London Cars 247
                website and the booking and provision of private hire and
                airport transfer services arranged through London Cars 247.
              </p>

              <p>
                By requesting or booking a service through our website,
                telephone, WhatsApp, email or other approved communication
                channel, you acknowledge that you have read and accepted
                these Terms & Conditions.
              </p>

              <div className="legal-divider" />


              <h2>1. About London Cars 247</h2>

              <p>
                London Cars 247 provides pre-booked private hire and airport
                transfer services for passengers travelling to and from
                London airports and other agreed locations.
              </p>

              <p>
                Our services may include transfers to and from Heathrow,
                Gatwick, Stansted, Luton, London City and Southend airports,
                as well as other destinations agreed at the time of booking.
              </p>


              <h2>2. Definitions</h2>

              <p>For the purposes of these Terms:</p>

              <ul>
                <li>
                  <strong>“Company”, “we”, “us” or “our”</strong> means
                  London Cars 247.
                </li>

                <li>
                  <strong>“Customer”, “you” or “your”</strong> means the
                  person making or requesting a booking.
                </li>

                <li>
                  <strong>“Passenger”</strong> means any person travelling
                  as part of the booking.
                </li>

                <li>
                  <strong>“Driver”</strong> means the driver assigned to
                  provide the booked transfer.
                </li>

                <li>
                  <strong>“Booking”</strong> means a request for a transfer
                  or private hire service.
                </li>

                <li>
                  <strong>“Confirmation”</strong> means the booking
                  confirmation issued by London Cars 247.
                </li>
              </ul>


              <h2>3. Booking Procedure</h2>

              <p>
                A booking request may be submitted through our website,
                telephone, WhatsApp, email or another communication method
                made available by London Cars 247.
              </p>

              <p>
                A booking is not considered confirmed until London Cars 247
                has accepted the request and provided confirmation of the
                relevant journey details.
              </p>

              <p>
                Customers are responsible for checking their booking
                confirmation and ensuring that all information is correct,
                including:
              </p>

              <ul>
                <li>Passenger name and contact details</li>
                <li>Pickup location</li>
                <li>Destination</li>
                <li>Date and time</li>
                <li>Airport and terminal information</li>
                <li>Flight number where applicable</li>
                <li>Number of passengers</li>
                <li>Luggage requirements</li>
              </ul>

              <p>
                Incorrect or incomplete information supplied by the customer
                may affect our ability to provide the service and may result
                in additional charges or cancellation where the service
                cannot reasonably be provided.
              </p>


              <h2>4. Customer Responsibility</h2>

              <p>
                Customers must provide accurate and complete booking
                information. You are responsible for checking your
                confirmation before the journey and notifying us promptly
                of any errors.
              </p>

              <p>
                Customers are also responsible for ensuring that the selected
                pickup time allows sufficient time to reach their destination,
                including appropriate allowance for airport check-in,
                security, traffic and other potential delays.
              </p>

              <p>
                London Cars 247 cannot guarantee a specific arrival time where
                delays are caused by traffic, road closures, weather,
                accidents, airport conditions or other circumstances outside
                our reasonable control.
              </p>


              <h2>5. Airport Transfers & Flight Information</h2>

              <p>
                Where a flight number is provided, we may use available flight
                information to assist with monitoring the scheduled arrival.
              </p>

              <p>
                Customers remain responsible for providing the correct flight
                number and ensuring that their booking information is accurate.
              </p>

              <p>
                Flight delays, cancellations, diversions and schedule changes
                should be communicated to London Cars 247 as soon as reasonably
                possible.
              </p>

              <p>
                For airport pickups, waiting arrangements may be affected by
                flight status, airport access rules, parking requirements and
                the particular booking.
              </p>


              <h2>6. Waiting Time</h2>

              <p>
                Customers should be ready at the agreed pickup location at
                the confirmed pickup time.
              </p>

              <p>
                For standard non-airport pickups, the driver will normally
                wait up to <strong>10 minutes</strong> after the agreed
                pickup time without an additional waiting charge, unless
                different arrangements were confirmed with the customer.
              </p>

              <p>
                After the included waiting period, a
                <strong> £5 waiting fee</strong> may apply.
                Additional waiting may be charged at
                <strong> £1 per 5 minutes</strong>, depending on the booking
                and circumstances.
              </p>

              <p>
                Where the customer requests or causes the driver to wait
                beyond the included period, additional waiting charges may
                apply.
              </p>

              <p>
                The applicable waiting arrangement may differ for airport
                pickups.
              </p>


              <h2>7. Airport Waiting & Pickup</h2>

              <p>
                Airport pickups are subject to airport rules, access
                arrangements and parking requirements. Waiting time may
                differ from standard street or residential pickups.
              </p>

              <p>
                Where a flight number is supplied, London Cars 247 may
                monitor available flight information. This does not guarantee
                that the driver can wait indefinitely or that airport parking
                or access charges will not apply.
              </p>

              <p>
                Where applicable, airport parking or access charges may be
                added to the fare if they are incurred in providing the
                service and were not already included in the quoted price.
              </p>


              <h2>8. No-Show</h2>

              <p>
                A customer may be considered a no-show where they fail to
                attend the agreed pickup location, cannot reasonably be
                contacted, or do not respond to reasonable attempts by the
                driver or London Cars 247 to establish contact.
              </p>

              <p>
                Where the driver has attended the agreed pickup location and
                the applicable waiting period has expired, up to
                <strong> 100% of the booking fare</strong> may be charged,
                subject to applicable law and the specific booking terms.
              </p>


              <h2>9. Changes to a Booking</h2>

              <p>
                Customers should contact London Cars 247 as soon as possible
                if they need to change a booking.
              </p>

              <p>
                Changes to the pickup time, pickup location, destination,
                passenger numbers, luggage requirements or other journey
                details are subject to availability and may result in a
                change to the price.
              </p>

              <p>
                We cannot guarantee that changes requested shortly before
                the scheduled pickup time can be accommodated.
              </p>


              <h2>10. Cancellation Policy</h2>

              <p>
                Unless different cancellation terms were specifically agreed
                and communicated for the booking, the following general
                cancellation schedule may apply:
              </p>

              <ul>
                <li>
                  <strong>More than 24 hours before pickup:</strong>{" "}
                  cancellation may be made free of charge.
                </li>

                <li>
                  <strong>Between 2 and 24 hours before pickup:</strong>{" "}
                  a cancellation charge of 25% of the booking fare may apply.
                </li>

                <li>
                  <strong>Less than 2 hours before pickup:</strong>{" "}
                  a cancellation charge of 50% of the booking fare may apply.
                </li>

                <li>
                  <strong>No-show or cancellation after the driver has
                  arrived:</strong>{" "}
                  up to 100% of the booking fare may be charged.
                </li>
              </ul>

              <p>
                The applicable cancellation charge will always be subject to
                applicable consumer and other legal requirements.
              </p>


              <h2>11. Refunds</h2>

              <p>
                Where a refund is approved, the amount refunded will depend
                on the applicable cancellation terms and the circumstances
                of the booking.
              </p>

              <p>
                Eligible cancellations may receive 100% of the amount paid,
                excluding any clearly disclosed non-refundable charges.
              </p>

              <p>
                Where a partial refund applies, the refund percentage will
                depend on the applicable cancellation period and booking
                terms.
              </p>

              <p>
                Refunds will normally be returned to the original payment
                method used for the booking, where practicable.
              </p>


              <h2>12. Driver No-Show Policy</h2>

              <p>
                If our driver fails to arrive for a confirmed booking without
                contacting the customer or providing a reasonable alternative,
                the customer will not be charged for the journey.
              </p>

              <p>
                If the customer has already made payment, they will be
                eligible for a <strong>100% refund</strong> of the booking
                fare.
              </p>

              <p>
                Where appropriate, London Cars 247 will make reasonable
                efforts to arrange an alternative vehicle.
              </p>

              <p>
                If an alternative vehicle cannot be provided within a
                reasonable time, the customer may cancel the booking without
                a cancellation fee.
              </p>

              <p>
                This policy does not apply where the driver is delayed due
                to circumstances outside our reasonable control, such as
                severe traffic, road closures, accidents, extreme weather,
                airport disruption or other unforeseen events.
              </p>


              <h2>13. Fares & Payment</h2>

              <p>
                The applicable fare will be communicated to the customer
                before or during confirmation of the booking.
              </p>

              <p>
                Payment may be required in advance for certain bookings.
                Accepted payment methods will be stated at the time of
                booking.
              </p>

              <p>
                Unless otherwise agreed, the customer is responsible for
                paying the agreed fare and any additional charges properly
                applicable to the service.
              </p>

              <p>
                Additional charges may apply for waiting time, airport
                parking or access charges, tolls, additional stops, changes
                requested by the customer, or other agreed extras.
              </p>


              <h2>14. Luggage</h2>

              <p>
                Customers must ensure that the amount and size of luggage is
                suitable for the vehicle booked.
              </p>

              <p>
                If the amount of luggage exceeds the vehicle's available
                capacity, we may need to arrange a different vehicle or
                alternative transportation.
              </p>


              <h2>15. Child Seats</h2>

              <p>
                Child-seat availability should be requested at the time of
                booking.
              </p>

              <p>
                Where a suitable child seat is not available, the customer
                should contact London Cars 247 before the journey to discuss
                available options.
              </p>


              <h2>16. Vehicle & Driver</h2>

              <p>
                We aim to provide the vehicle type agreed at the time of
                booking. However, in circumstances such as mechanical
                problems, operational requirements or other unforeseen
                events, we may provide a suitable alternative vehicle.
              </p>

              <p>
                Drivers may be employees, contractors or appropriately
                licensed service providers engaged to fulfil a booking.
              </p>


              <h2>17. Passenger Conduct</h2>

              <p>
                Passengers must behave respectfully towards drivers and
                other passengers and must comply with reasonable safety
                instructions.
              </p>

              <p>
                Smoking or any behaviour that creates a safety risk, damages
                the vehicle or seriously disrupts the journey is not
                permitted.
              </p>


              <h2>18. Lost Property</h2>

              <p>
                Customers are responsible for checking the vehicle and
                collecting their belongings before leaving.
              </p>

              <p>
                If an item is left behind, please contact London Cars 247 as
                soon as possible. We will make reasonable efforts to locate
                and return lost property where practicable.
              </p>


              <h2>19. Delays & Events Outside Our Control</h2>

              <p>
                We will make reasonable efforts to provide the booked service
                at the agreed time.
              </p>

              <p>
                However, we are not responsible for delays or failure to
                perform caused by circumstances beyond our reasonable control,
                including severe weather, traffic congestion, accidents, road
                closures, vehicle breakdowns, airport disruption, strikes,
                emergencies, government restrictions or other unforeseen
                events.
              </p>


              <h2>20. Safety & Legal Requirements</h2>

              <p>
                All passengers must comply with applicable laws and reasonable
                safety requirements during the journey.
              </p>

              <p>
                The driver may refuse requests that would cause the driver to
                breach traffic, licensing or other applicable legal
                requirements.
              </p>


              <h2>21. Complaints</h2>

              <p>
                We want customers to have a positive experience. If you have
                a complaint about a journey, please contact London Cars 247
                as soon as reasonably possible and provide the relevant
                booking details.
              </p>

              <p>
                We will review complaints fairly and make reasonable efforts
                to resolve legitimate issues.
              </p>


              <h2>22. Legal Protection & Liability</h2>

              <p>
                Nothing in these Terms & Conditions excludes or limits any
                liability that cannot legally be excluded or limited under
                applicable law.
              </p>

              <p>
                Nothing in these Terms is intended to remove or restrict a
                customer's statutory consumer rights or any protection that
                applies under mandatory UK law.
              </p>

              <p>
                Subject to applicable law, London Cars 247 will not be
                responsible for indirect or consequential losses arising
                from circumstances outside our reasonable control.
              </p>


              <h2>23. Website Information</h2>

              <p>
                We aim to keep the information on our website accurate and
                up-to-date. However, service availability, prices, vehicle
                availability and other information may change.
              </p>


              <h2>24. Intellectual Property</h2>

              <p>
                Unless otherwise stated, the text, branding, logos, graphics,
                design and other original content appearing on the London
                Cars 247 website belong to London Cars 247 or are used with
                appropriate permission.
              </p>


              <h2>25. Privacy & Personal Data</h2>

              <p>
                Personal information provided when making an enquiry or
                booking is handled in accordance with our Privacy Policy.
              </p>

              <p>
                Information may be used where reasonably necessary to
                communicate with customers, arrange and provide booked
                services, manage bookings, respond to enquiries and meet
                applicable legal obligations.
              </p>


              <h2>26. Third-Party Services</h2>

              <p>
                Our website may use third-party services or communication
                platforms, including WhatsApp, mapping services, hosting
                providers, email providers or other technology services.
              </p>


              <h2>27. Amendments to These Terms</h2>

              <p>
                London Cars 247 may update these Terms & Conditions from time
                to time to reflect changes to our services, website or legal
                requirements.
              </p>


              <h2>28. Severability</h2>

              <p>
                If any provision of these Terms is found to be invalid or
                unenforceable, the remaining provisions will continue to apply
                to the extent permitted by law.
              </p>


              <h2>29. Governing Law</h2>

              <p>
                These Terms & Conditions are intended to operate in accordance
                with the laws applicable to the provision of our services in
                England and Wales, subject to any mandatory consumer rights
                and legal requirements that apply to a particular customer
                or transaction.
              </p>


              <h2>30. Contact Us</h2>

              <p>
                If you have questions about these Terms & Conditions or your
                booking, please contact London Cars 247.
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

                <li>
                  <strong>Telephone:</strong> 0208 144 5555
                </li>

                <li>
                  <strong>WhatsApp:</strong> 07412 850832
                </li>
              </ul>


              <div className="legal-notice">
                <strong>Important</strong>

                <p>
                  These Terms & Conditions are intended as general website
                  and service terms. They should be reviewed against London
                  Cars 247's actual licensing, insurance, pricing,
                  cancellation, payment and operating arrangements before
                  being treated as the company's final legal terms.
                </p>
              </div>

            </article>


            {/* ================= SIDEBAR ================= */}
            <aside className="legal-sidebar">

              <div className="legal-sidebar-card">

                <span className="eyebrow dark">
                  LEGAL
                </span>

                <h3>
                  London Cars 247
                </h3>

                <p>
                  Important information about using our airport transfer
                  services and website.
                </p>

                <a
                  href="/terms-and-conditions"
                  className="active"
                >
                  Terms &amp; Conditions
                  <span>→</span>
                </a>

                <a href="/privacy-policy">
                  Privacy Policy
                  <span>→</span>
                </a>

              </div>


              <div className="legal-help-card">

                <span>HAVE A QUESTION?</span>

                <h3>
                  We're here to help.
                </h3>

                <p>
                  Contact London Cars 247 if you have a question about your
                  booking or our services.
                </p>

                <a href="mailto:info@londoncars247.com">
                  Contact us →
                </a>

              </div>

            </aside>

          </div>

        </div>
      </main>


      {/* ================= FOOTER ================= */}
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

export default TermsAndConditions;

