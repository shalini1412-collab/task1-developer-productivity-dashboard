function StatsCard({ title, value }) {
  return (
    <div className="stat-card">
      <span>{title}</span>
      <h2>{value}</h2>
    </div>
  )
}

export default StatsCard