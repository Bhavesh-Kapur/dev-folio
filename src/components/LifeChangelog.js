import React from 'react';

const LifeChangelog = () => {
  const timeline = [
    {
      year: "2025",
      events: [
        {
          title: "DevOps Intern at Xebia 🚀",
          description: "Joined Xebia as DevOps intern. Working on TravelEase Cloud-Native Microservices Deployment with enterprise-grade automation."
        },
        {
          title: "Microservices Architecture Deep Dive 🏗️",
          description: "Built real-time collaborative code editor using microservices architecture with JWT authentication and scalable backend."
        },
        {
        title: "AWS JAM Journey Winner",
        description: "🏆 Winner of the Solo AWS Jam Journey at my university. Solved Real-World Cloud Challenges"
}
      ]
    }
  ];

  return (
    <section className="changelog-section">
      <div className="container">
        <h2 className="section-title">Updates</h2>
        
        {timeline.map((yearData, index) => (
          <div key={index} className="year-section">
            <h3 className="year-title">{yearData.year}</h3>
            
            {yearData.events.map((event, eventIndex) => (
              <div key={eventIndex} className="event-item">
                <div className="event-check">✓</div>
                <div className="event-content">
                  <h4 className="event-title">{event.title}</h4>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LifeChangelog;
