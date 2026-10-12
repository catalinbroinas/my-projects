import { TECHNOLOGIES } from "../../constants/technologies";

export const projectSortOptions = [
  { value: 'default', label: 'Default order' },
  { value: 'newest-first', label: 'Newest first' },
  { value: 'oldest-first', label: 'Oldest first' }
];

export const technologyFilterOptions = [
  { value: 'all', label: 'All technologies' },
  ...Object.values(TECHNOLOGIES).map(({ id, label }) => (
    { value: id, label: label }
  )),
];
