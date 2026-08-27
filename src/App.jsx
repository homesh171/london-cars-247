import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Check, ChevronDown, Clock3, Mail, MapPin, Menu,
  MessageCircle, Plane, ShieldCheck, Star, Users, X, Phone,
  CarFront, Luggage, Navigation, Quote, Search, CalendarDays
} from "lucide-react";

const WHATSAPP = "447412850832";
const LOCATIONIQ_TOKEN = import.meta.env.VITE_LOCATIONIQ_TOKEN || "";

const airports = [
  ["Heathrow Airport", "LHR", "Reliable transfers to and from every Heathrow terminal."],
  ["Gatwick Airport", "LGW", "Comfortable airport travel between Gatwick and London."],
  ["Stansted Airport", "STN", "Door-to-door transfers with simple WhatsApp booking."],
  ["Luton Airport", "LTN", "Private airport transfers for solo travellers and groups."],
  ["London City Airport", "LCY", "Convenient transfers for business and leisure travel."],
  ["Southend Airport", "SEN", "Pre-booked airport journeys across London and surrounding areas."]
];

const vehicles = [
  { title: "Saloon", text: "Ideal for up to 4 passengers with luggage.", icon: CarFront },
  { title: "Estate", text: "Extra boot space for larger luggage requirements.", icon: Luggage },
  { title: "Executive", text: "A refined choice for business and special journeys.", icon: Star },
  { title: "MPV / 6 Seater", text: "Comfortable group travel with generous space.", icon: Users }
];

const faqs = [
  ["How do I book?", "Use the booking form or tap any Book on WhatsApp button. Send your pickup, destination, date, time, passengers and luggage. We will reply with availability and your quote."],
  ["Which airports do you cover?", "Heathrow, Gatwick, Stansted, Luton, London City and Southend airports."],
  ["Can I book early morning or late-night transfers?", "Yes. Tell us your flight and journey details on WhatsApp and we will confirm availability."],
  ["Can I book a return transfer?", "Yes. You can include return details in your WhatsApp message."],
  ["How much does a transfer cost?", "The price depends on the route, vehicle, passengers, luggage and journey time. Message us for a personalised quote."]
];

function waUrl(message) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function WhatsAppButton({ children="Book on WhatsApp", className="" }) {
  return <a className={`btn btn-whatsapp ${className}`} href={waUrl("Hello, I would like to book an airport transfer.")} target="_blank" rel="noreferrer">
    <MessageCircle size={18}/>{children}
  </a>;
}

function LocationAutocomplete({ label, value, onChange, placeholder, icon }) {
  const [query, setQuery] = useState(value || "");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const timer = useRef(null);

  useEffect(() => setQuery(value || ""), [value]);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    if (!query || query.length < 3 || !LOCATIONIQ_TOKEN) {
      setResults([]);
      return;
    }
    timer.current = setTimeout(async () => {
      setLoading(true);
      try {
        const url = new URL("https://api.locationiq.com/v1/autocomplete");
        url.searchParams.set("key", LOCATIONIQ_TOKEN);
        url.searchParams.set("q", query);
        url.searchParams.set("format", "json");
        url.searchParams.set("limit", "6");
        url.searchParams.set("countrycodes", "gb");
        url.searchParams.set("dedupe", "1");
        const response = await fetch(url);
        if (!response.ok) throw new Error("Location search failed");
        const data = await response.json();
        setResults(Array.isArray(data) ? data : []);
        setOpen(true);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 350);
    return () => clearTimeout(timer.current);
  }, [query]);

  const choose = (item) => {
    const text = item.display_name || "";
    setQuery(text);
    onChange(text);
    setOpen(false);
  };

  return <div className="field-wrap">
    <label>{label}</label>
    <div className="field">
      {icon || <MapPin size={19}/>}
      <input
        value={query}
        onChange={(e)=>{setQuery(e.target.value); onChange(e.target.value);}}
        onFocus={()=>results.length && setOpen(true)}
        placeholder={placeholder}
        autoComplete="off"
      />
      {loading && <span className="spinner"/>}
    </div>
    {!LOCATIONIQ_TOKEN && query.length >= 3 && (
      <div className="setup-note">Add <b>VITE_LOCATIONIQ_TOKEN</b> to your .env file to enable searchable places.</div>
    )}
    {open && results.length > 0 && <div className="suggestions">
      {results.map((item, i)=>
        <button type="button" key={`${item.place_id}-${i}`} onMouseDown={(e)=>e.preventDefault()} onClick={()=>choose(item)}>
          <Navigation size={16}/><span>{item.display_name}</span>
        </button>
      )}
    </div>}
  </div>;
}

function BookingForm() {
  const [form, setForm] = useState({
    pickup:"", destination:"", date:"", time:"", passengers:"1", luggage:"0", flight:""
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (key, value) => setForm(f => ({...f, [key]:value}));

  const submit = (e) => {
    e.preventDefault();
    if (!form.pickup || !form.destination || !form.date || !form.time) return;
    const message =
`Hello London Cars 247,

I would like to book an airport transfer.

Pickup: ${form.pickup}
Destination: ${form.destination}
Date: ${form.date}
Time: ${form.time}
Passengers: ${form.passengers}
Luggage: ${form.luggage}
Flight number: ${form.flight || "Not provided"}

Please confirm availability and price. Thank you.`;
    setSubmitted(true);
    window.open(waUrl(message), "_blank", "noopener,noreferrer");
  };

  return <div className="booking-panel">
    <div className="booking-title">
      <div><span className="eyebrow dark">QUICK BOOKING</span><h3>Tell us your journey</h3></div>
      <div className="booking-badge"><MessageCircle size={17}/> WhatsApp</div>
    </div>
    <form onSubmit={submit}>
      <div className="two-fields">
        <LocationAutocomplete label="Pickup location" value={form.pickup} onChange={(v)=>update("pickup",v)} placeholder="Search pickup address" icon={<MapPin size={19}/>}/>
        <LocationAutocomplete label="Destination" value={form.destination} onChange={(v)=>update("destination",v)} placeholder="Search destination" icon={<Navigation size={19}/>}/>
      </div>
      <div className="three-fields">
        <div className="field-wrap"><label>Date</label><div className="field"><CalendarDays size={18}/><input type="date" value={form.date} onChange={e=>update("date",e.target.value)}/></div></div>
        <div className="field-wrap"><label>Pickup time</label><div className="field"><Clock3 size={18}/><input type="time" value={form.time} onChange={e=>update("time",e.target.value)}/></div></div>
        <div className="field-wrap"><label>Passengers</label><div className="field"><Users size={18}/><select value={form.passengers} onChange={e=>update("passengers",e.target.value)}>{[1,2,3,4,5,6,7,8].map(n=><option key={n}>{n}</option>)}</select></div></div>
      </div>
      <div className="two-fields">
        <div className="field-wrap"><label>Luggage</label><div className="field"><Luggage size={18}/><select value={form.luggage} onChange={e=>update("luggage",e.target.value)}>{[0,1,2,3,4,5,6,7,8].map(n=><option key={n}>{n}</option>)}</select></div></div>
        <div className="field-wrap"><label>Flight number <span>(optional)</span></label><div className="field"><Plane size={18}/><input value={form.flight} onChange={e=>update("flight",e.target.value)} placeholder="e.g. BA123"/></div></div>
      </div>
      <button className="btn btn-whatsapp full" type="submit"><MessageCircle size={19}/> {submitted ? "Opening WhatsApp..." : "Continue on WhatsApp"} <ArrowRight size={18}/></button>
      <p className="form-note"><ShieldCheck size={15}/> Your booking request is sent directly to our WhatsApp.</p>
    </form>
  </div>;
}

function App() {
  const [menu,setMenu]=useState(false);
  const [openFaq,setOpenFaq]=useState(null);

  return <div className="site">
    <div className="topbar"><div className="container topbar-inner">
      <span><Clock3 size={14}/> Airport transfers around your flight schedule</span>
      <span className="top-contact"><a href="tel:+442081445555"><Phone size={14}/> 0208 144 5555</a><a href="tel:+447412850832"><MessageCircle size={14}/> 07412 850832</a><a href="mailto:info@londoncars247.com"><Mail size={14}/> Email us</a></span>
    </div></div>

    <header className="header"><div className="container nav">
      <a className="brand" href="#home" onClick={()=>setMenu(false)}>
        <span className="brand-mark"><Plane size={21}/></span>
        <span><strong>London Airport</strong><small>Travel Services</small></span>
      </a>
      <nav className={menu?"nav-links open":"nav-links"}>
        {["Home","Airports","Services","Vehicles","About","FAQ","Contact"].map(x=><a key={x} href={`#${x.toLowerCase()}`} onClick={()=>setMenu(false)}>{x}</a>)}
        <WhatsAppButton/>
      </nav>
      <button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="Menu">{menu?<X/>:<Menu/>}</button>
    </div></header>

    <main>
      <section id="home" className="hero">
        <div className="hero-overlay"/>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span/> PRIVATE LONDON AIRPORT TRANSFERS</div>
            <h1>Travel to the airport.<br/><em>Relax all the way.</em></h1>
            <p>Professional, comfortable and reliable airport transfers across London. Tell us your journey on WhatsApp and we'll take care of the rest.</p>
            <div className="hero-actions"><WhatsAppButton>Book Your Transfer</WhatsAppButton><a className="btn btn-outline" href="#booking">Get a quote <ArrowRight size={18}/></a></div>
            <div className="trust-row"><span><Check/> Door-to-door service</span><span><Check/> Simple WhatsApp booking</span><span><Check/> Professional service</span></div>
          </div>
          <div className="hero-card">
            <div className="airport-card-top"><span>YOUR JOURNEY</span><Plane size={19}/></div>
            <div className="route"><div className="route-point"><span className="dot pickup"/><div><small>Pickup</small><strong>London & surrounding areas</strong></div></div><div className="route-line"/><div className="route-point"><span className="dot drop"/><div><small>Destination</small><strong>Any London airport</strong></div></div></div>
            <div className="hero-card-note"><ShieldCheck size={21}/><div><strong>Travel with confidence</strong><p>Send your journey details on WhatsApp for a fast response.</p></div></div>
            <WhatsAppButton>Message us on WhatsApp</WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="stats"><div className="container stats-grid">
        <div><strong>6</strong><span>London airports covered</span></div><div><strong>24/7</strong><span>Airport travel support</span></div><div><strong>1 click</strong><span>To start your booking</span></div><div><strong>Direct</strong><span>WhatsApp booking</span></div>
      </div></section>

      <section id="airports" className="section"><div className="container">
        <div className="section-head"><div><span className="eyebrow dark">AIRPORT TRANSFERS</span><h2>London airports, <em>covered.</em></h2></div><p>Pre-book a private transfer to or from the UK's busiest London airports.</p></div>
        <div className="airport-grid">{airports.map(([name,code,text])=><article className="airport-card" key={code}><div className="airport-icon"><Plane size={20}/></div><div><span className="airport-code">{code}</span><h3>{name}</h3><p>{text}</p><a href="#booking">Book this route <ArrowRight size={15}/></a></div></article>)}</div>
      </div></section>

      <section id="services" className="section light"><div className="container split">
        <div><span className="eyebrow dark">WHY TRAVEL WITH US</span><h2>A smoother journey from <em>door to terminal.</em></h2><p className="lead">Whether you're flying for business, heading away on holiday or collecting family from the airport, we make the transfer simple.</p>
          <div className="benefits"><div><ShieldCheck/><span><strong>Reliable service</strong><small>Plan your journey with confidence.</small></span></div><div><Clock3/><span><strong>Flight-friendly timing</strong><small>Tell us your flight details when needed.</small></span></div><div><MessageCircle/><span><strong>Easy WhatsApp booking</strong><small>No complicated booking account required.</small></span></div><div><Navigation/><span><strong>Door-to-door</strong><small>Travel between your chosen locations.</small></span></div></div>
        </div>
        <div className="feature-card"><div className="feature-number">01</div><h3>One conversation.<br/>One confirmed journey.</h3><p>Send your pickup and destination using our searchable booking form, then continue directly in WhatsApp.</p><WhatsAppButton>Start a booking</WhatsAppButton></div>
      </div></section>

      <section id="booking" className="booking-section"><div className="container"><BookingForm/></div></section>

      <section id="vehicles" className="section"><div className="container">
        <div className="section-head centered"><span className="eyebrow dark">TRAVEL YOUR WAY</span><h2>Choose the right <em>space.</em></h2><p>Vehicle availability depends on your journey and passenger requirements.</p></div>
        <div className="vehicle-grid">{vehicles.map(({title,text,icon:Icon})=><article className="vehicle" key={title}><div className="vehicle-icon"><Icon size={25}/></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>

      <section id="about" className="about"><div className="container about-grid"><div><span className="eyebrow">ABOUT US</span><h2>Airport travel without the <em>stress.</em></h2><p>London Cars 247 provides private airport transfers for customers travelling to and from London airports. Our focus is straightforward: clear communication, comfortable journeys and a simple way to book.</p><div className="about-checks"><span><Check/> WhatsApp-first booking</span><span><Check/> London airport coverage</span><span><Check/> Private door-to-door journeys</span><span><Check/> Personalised quotes</span></div></div><div className="quote-card"><Quote size={30}/><p>“Tell us where you're going. We'll help make getting there simple.”</p><span>London Cars 247</span></div></div></section>

      <section id="faq" className="section light"><div className="container faq-wrap"><div className="section-head centered"><span className="eyebrow dark">FAQ</span><h2>Questions, <em>answered.</em></h2></div><div className="faq-list">{faqs.map(([q,a],i)=><div className="faq" key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{q}</span><ChevronDown className={openFaq===i?"rotate":""}/></button>{openFaq===i&&<p>{a}</p>}</div>)}</div></div></section>

      <section id="contact" className="cta"><div className="container cta-inner"><div><span className="eyebrow">READY TO TRAVEL?</span><h2>Let's get your airport transfer <em>booked.</em></h2><p>Send your journey details on WhatsApp and we'll get back to you.</p></div><div className="cta-actions"><WhatsAppButton>Book on WhatsApp</WhatsAppButton><a className="email-link" href="mailto:info@londoncars247.com"><Mail size={18}/> info@londoncars247.com</a></div></div></section>
    </main>

    <footer><div className="container footer-grid"><div><a className="brand footer-brand" href="#home"><span className="brand-mark"><Plane size={21}/></span><span><strong>London Airport</strong><small>Travel Services</small></span></a><p>Private airport transfers across London. Simple booking through WhatsApp.</p></div><div><h4>Quick links</h4><a href="#airports">Airports</a><a href="#services">Services</a><a href="#vehicles">Vehicles</a><a href="#faq">FAQ</a></div><div><h4>Contact</h4><a href="tel:+442081445555"><Phone size={15}/> 0208 144 5555</a><a href="https://wa.me/447412850832" target="_blank" rel="noreferrer"><MessageCircle size={15}/> 07412 850832</a><a href="mailto:info@londoncars247.com"><Mail size={15}/> Email us</a><span><MapPin size={15}/> 9 Town Quay Wharf<br/>Abbey Road, Barking, England, IG11 7BZ</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} London Cars 247. All rights reserved.</span><span>Airport transfers • London</span></div></footer>

    <a className="floating-wa" href={waUrl("Hello, I would like to book an airport transfer.")} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={27}/></a>
  </div>;
}

export default App;