import { Pill, CategoryPill } from './Pill';

export default {
  /* 👇 The title prop is optional. */
  title: 'Common',
};

export const Common = () => (
  <>
    <Pill
      label="Queso"
      color="red" />
    <CategoryPill
      label="Gaseosas"
    />
  </>
);

