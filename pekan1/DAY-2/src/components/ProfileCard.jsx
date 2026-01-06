export default function ProfileCard({ nama, foto, bio, skills }) {
  const styles = {
    card: {
      width: 300,
      padding: 20,
      borderRadius: 12,
      background: '#ffffff',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      marginBottom: 20,
      fontFamily: 'Arial'
    },
    img: {
      width: '100%',
      borderRadius: 10
    },
    skill: {
      background: '#e5e7eb',
      padding: '4px 8px',
      borderRadius: 6,
      fontSize: 12
    },
    skillList: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }

  return (
    <div style={styles.card}>
      <img src={foto} alt={nama} style={styles.img} />
      <h2>{nama}</h2>
      <p>{bio}</p>

      <div style={styles.skillList}>
        {skills.map((skill, i) => (
          <span key={i} style={styles.skill}>{skill}</span>
        ))}
      </div>
    </div>
  )
}
