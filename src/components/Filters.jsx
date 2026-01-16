export default function Filters({ query, setQuery, status, setStatus }) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search disclosures by product name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search disclosures"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        aria-label="Filter by status"
      >
        <option value="">All statuses</option>
        <option value="Draft">Draft</option>
        <option value="Submitted">Submitted</option>
        <option value="Published">Published</option>
      </select>
    </div>
  );
}
