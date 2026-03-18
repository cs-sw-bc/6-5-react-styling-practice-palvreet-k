// ServicesPage.jsx
// Page 1 — Services & Pricing
// Styling approach: Traditional CSS
//
// The JSX is complete. Your job is to:
// - Create styles/services.css
// - Import it here (TODO 7)
// - Add className attributes to the elements below (TODOs 8–16)

// TODO 7: Import services.css here
import '../styles/services.css';

const services = [
  { id: 1, name: 'Blow Dry & Style', description: 'Shampoo, blow dry, and finish', price: '$45' },
  { id: 2, name: 'Cut & Style', description: 'Consultation, cut, blow dry, and finish', price: '$75' },
  { id: 3, name: 'Full Colour', description: 'Single process colour, shampoo, and blow dry', price: '$120' },
  { id: 4, name: 'Highlights', description: 'Partial or full highlights with toner', price: '$160' },
  { id: 5, name: 'Keratin Treatment', description: 'Smoothing treatment, lasts up to 3 months', price: '$200' },
  { id: 6, name: 'Scalp Treatment', description: 'Deep nourishing treatment for scalp health', price: '$55' },
];

export default function ServicesPage() {
  return (
    // TODO 8: Add className for the page wrapper
    <div className = 'page'>

      {/* TODO 9 & 10: Add className for the header */}
      <div className='header'>
        <h1>Gloss & Co</h1>
        <p>Premium hair services in the heart of the city</p>
      </div>

      {/* TODO 11: Add className for the services grid */}
      <div className='services'>
        {services.map(service => (
          // TODO 12 & 13: Add className for each service card
          <div key={service.id} className='card'>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            {/* TODO 14: Add className for the price */}
            <p className='price'>{service.price}</p>
            {/* TODO 15: Add className for the button */}
            <button className = 'btn'>Book Now</button>
          </div>
        ))}
      </div>

      {/* TODO 16: Add className for the footer */}
      <div className='footer'>
        <p>© 2025 Gloss & Co</p>
      </div>

    </div>
  );
}
