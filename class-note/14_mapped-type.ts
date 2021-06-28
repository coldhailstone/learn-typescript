type Heros = 'Hulk' | 'Capt' | 'Thor';
type HeroAges = { [P in Heros]: number }
const ages: HeroAges = {
    Hulk: 33,
    Capt: 100,
    Thor: 1000
}