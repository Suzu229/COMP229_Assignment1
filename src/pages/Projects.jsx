function Projects() {
  const projects = [
    {
      title: "Memory Reversi",
      image: "/project1.jpg",
      description:
        "A unique memory-based Othello game where all tiles start white. If the player makes a mistake—like placing a stone in the wrong spot or failing to flip tiles—they lose the game.",
    },
    {
      title: "Quantum Gomoku",
      image: "/project2.jpg",
      description:
        "A Gomoku-inspired game where each stone has a probability of turning black. Players press an observation button to collapse probabilities, and the first to line up five of their stones wins.",
    },
    {
      title: "I wanna be the gravity (Unity)",
      image: "/project3.jpg",
      description:
        "A gravity-based platformer inspired by 'I Wanna Be The Guy' and 'VVVVVV'. Players must skillfully manipulate gravity to survive challenging levels and reach the goal.",
    },
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>My Projects</h1>
      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
            />
            <h2 style={{ marginTop: '1rem' }}>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
