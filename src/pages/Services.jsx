function Services() {
  const services = [
    {
      title: "Web Development",
      emoji: "💻",
      description: "Creating responsive websites using HTML, CSS, JavaScript, and React.",
    },
    {
      title: "C# Desktop Applications",
      emoji: "🖥️",
      description: "Building Windows Forms and console applications using C# and .NET.",
    },
    {
      title: "Unity Game Development",
      emoji: "🎮",
      description: "Developing 2D games with Unity, including custom physics and gameplay.",
    },
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>My Services</h1>
      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {services.map((service, index) => (
          <div key={index} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            textAlign: 'center',
            fontSize: '1.1rem'
          }}>
            <div style={{ fontSize: '3rem' }}>{service.emoji}</div>
            <h2 style={{ marginTop: '1rem' }}>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
