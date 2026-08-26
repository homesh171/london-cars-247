# London Cars 247

React + Vite + JSX airport transfer website with WhatsApp booking and LocationIQ address autocomplete.

## Run

1. Install Node.js.
2. Run `npm install`
3. Copy `.env.example` to `.env`
4. Put your LocationIQ token in `VITE_LOCATIONIQ_TOKEN`
5. Run `npm run dev`

## Booking

The form searches pickup and destination places using LocationIQ autocomplete. On submit it opens WhatsApp with the complete journey details.

Business:
- London Cars 247
- 9 Town Quay Wharf, Abbey Road, Barking, England, IG11 7BZ
- londonairporttravelservices@gmail.com
- WhatsApp: 07412 850832
- Landline: 0208 144 5555

No API secret should be put in frontend code. Use a LocationIQ token intended for browser/client use and configure restrictions in your LocationIQ account.

- Landline: 0208 144 5555
