
export function sortProjects(projects, option) {
  if (!projects?.length) return [];

  if (option === 'default') return [...projects];

  return [...projects].sort((a, b) => {
    switch (option) {
      case 'newest-first':
        return new Date(b.period.start) - new Date(a.period.start);

      case 'oldest-first':
        return new Date(a.period.start) - new Date(b.period.start);

      case 'recently-completed':
        return new Date(b.period.end) - new Date(a.period.end);

      default:
        return 0;
    }
  });
}
