
const sortDesc = (a, b) => b - a;

export function getAvailableYears(projects) {
  return [...new Set(projects.map(
    (project) => Number(project.period.start.slice(0, 4))
  ))].sort(sortDesc);
}
