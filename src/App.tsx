import { useState, useEffect } from 'react'
import './index.css'

function App() {
  const [agents, setAgents] = useState([
    { name: 'Freud (CEO)', status: 'Idle', load: 10 },
    { name: 'Pilot (CPO)', status: 'Routing', load: 45 },
    { name: 'Innovator (CTO)', status: 'Coding', load: 85 },
    { name: 'Gordon (CSO)', status: 'Verifying', load: 20 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setAgents(prev => prev.map(agent => ({
        ...agent,
        load: Math.floor(Math.random() * 100),
        status: Math.random() > 0.7 ? 'Idle' : (Math.random() > 0.5 ? 'Coding' : 'Verifying')
      })))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="dashboard-container">
      <header className="glass-header">
        <h1>Antigravity <span>View</span></h1>
        <div className="status-badge pulse">
          <span className="dot"></span>
          System Online
        </div>
      </header>

      <main className="dashboard-grid">
        <section className="glass-panel col-span-full">
          <h2>AgentOps Telemetry</h2>
          <p>Real-time monitoring of The 7 Parks Sub-agents.</p>
        </section>

        {agents.map((agent, i) => (
          <div key={i} className="glass-card agent-card">
            <div className="agent-header">
              <h3>{agent.name}</h3>
              <span className={`status ${agent.status.toLowerCase()}`}>{agent.status}</span>
            </div>
            <div className="load-bar-container">
              <div className="load-bar" style={{ width: `${agent.load}%`, background: agent.load > 80 ? 'var(--accent-red)' : 'var(--accent-blue)' }}></div>
            </div>
            <span className="load-text">{agent.load}% Load</span>
          </div>
        ))}

        <section className="glass-panel console-panel">
          <h3>Live Terminal</h3>
          <div className="terminal">
            <p><span>&gt;</span> Initialization complete...</p>
            <p><span>&gt;</span> DeerFlow harness attached.</p>
            <p><span>&gt;</span> Awaiting user command on mobile...</p>
            <p className="blinking-cursor">_</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
