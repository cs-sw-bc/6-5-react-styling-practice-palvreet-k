// TeamPage.jsx
// Page 2 — Meet the Team
// Styling approach: CSS Modules
//
// The JSX is complete. Your job is to:
// - Create styles/team.module.css and styles/stylist.module.css
// - Import both here (TODO 18)
// - Apply the scoped class names to the elements below (TODOs 19–24)

// TODO 18: Import team.module.css as teamStyles and stylist.module.css as stylistStyles
import teamStyles from '../styles/team.module.css';
import stylistStyles from '../styles/stylist.module.css';

const stylists = [
  {
    id: 1,
    name: 'Aria Chen',
    specialty: 'Colour Specialist',
    bio: 'Aria has 10 years of experience in balayage and creative colour. Her work has been featured in Vogue Australia.',
  },
  {
    id: 2,
    name: 'Marcus Webb',
    specialty: 'Cuts & Texture',
    bio: 'Marcus trained in London and specialises in precision cuts for all hair types. Known for his signature textured finish.',
  },
  {
    id: 3,
    name: 'Priya Nair',
    specialty: 'Treatments & Care',
    bio: 'Priya is passionate about hair health. She leads our keratin and scalp treatment services.',
  },
];

export default function TeamPage() {
  return (
    // TODO 22: Apply teamStyles.page
    <div className = {teamStyles.page}>

      {/* TODO 22: Apply teamStyles.header */}
      <div className={teamStyles.header}>
        <h1>Gloss & Co</h1>
        <p>Meet the Team</p>
      </div>

      {/* TODO 19 & 21: Apply teamStyles.card to this section wrapper */}
      <div className={teamStyles.card}>
        <h2>Our Stylists</h2>
        <p>Every member of our team is fully qualified and passionate about making you look and feel your best.</p>
      </div>

      {/* TODO 22: Apply teamStyles.grid */}
      <div className= {teamStyles.grid}>
        {stylists.map(stylist => (
          // TODO 20 & 21: Apply stylistStyles.card here
          // This also has a class called .card — open DevTools after applying and compare
          // the generated class names for teamStyles.card and stylistStyles.card
          <div key={stylist.id} className={stylistStyles.card}>
            {/* TODO 24: Apply stylistStyles.name */}
            <h3 className={stylistStyles.name}>{stylist.name}</h3>
            {/* TODO 24: Apply stylistStyles.specialty */}
            <p className={stylistStyles.specialty}>{stylist.specialty}</p>
            {/* TODO 24: Apply stylistStyles.bio */}
            <p className= {stylistStyles.bio}>{stylist.bio}</p>
          </div>
        ))}
      </div>

      {/* TODO 22: Apply teamStyles.footer */}
      <div className={teamStyles.footer}>
        <p>© 2025 Gloss & Co</p>
      </div>

    </div>
  );
}
