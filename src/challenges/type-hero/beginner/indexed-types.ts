type TheCoolestCarEverMade = Cars[4];
type TruckDriverBonusGiver = Donations['Taylor Swift'];

import { Equal, Expect } from '@type-challenges/utils';

type Cars = ["Bugatti", "Ferarri", "Lambo", "Porsche", "Toyota Corolla"]

type Donations = {
  "Bono": 15_000_000,
  "J.K. Rowling": 160_000_000,
  "Taylor Swift": 45_000_000,
  "Elton John": 600_000_000,
  "Angelina Jolie and Brad Pitt": 100_000_000,
};

type test_TheCoolestCarEverMade = Expect<Equal<
  TheCoolestCarEverMade,
  "Toyota Corolla"
>>;

type test_TruckDriverBonusGiver = Expect<Equal<
  TruckDriverBonusGiver,
  45_000_000
>>;

