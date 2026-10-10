
export function sortProjects(projects, option) {
  if (!projects?.length) return [];

  if (option === 'default') return [...projects];

  return [...projects].sort((a, b) => {
    switch (option) {
      case 'newest-first':
        return b.period.start - a.period.start;

      case 'oldest-first':
        return a.period.start - b.period.start;

      default:
        return 0;
    }
  });
}
