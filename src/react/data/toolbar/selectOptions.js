import { FEATURED_TECHNOLOGIES } from "../../constants/technologies";

export const projectSortOptions = [
  { value: 'default', label: 'Default order' },
  { value: 'newest-first', label: 'Newest first' },
  { value: 'oldest-first', label: 'Oldest first' },
  { value: 'recently-completed', label: 'Recently completed' }
];

export const technologyFilterOptions = [
  { value: 'all', label: 'All technologies' },
  ...Object.values(FEATURED_TECHNOLOGIES).map(({ id, label }) => (
    { value: id, label: label }
  )),
];
