// Curated illustrations for the Illustration page.
// Put image files in public/illustration/ and list them here.
// `column` (1 = left, 2 = center, 3 = right) sets where each piece sits on wide screens;
// within a column, pieces appear in list order. On phones they stack: left, center, right.
export interface Illustration {
  src: string; // e.g. '/illustration/modric.jpg'
  alt: string; // describe the illustration for screen readers
  title?: string;
  caption?: string; // medium, year, context
  column: 1 | 2 | 3;
  width: number;
  height: number;
}

export const illustrations: Illustration[] = [
  // Left: Real Madrid
  { column: 1, src: '/illustration/modric.jpg', title: 'Luka Modrić', caption: 'Real Madrid · #10', alt: 'Luka Modrić in a white Real Madrid kit over a red checkered number 10', width: 1250, height: 2000 },
  { column: 1, src: '/illustration/benzema.jpg', title: 'Karim Benzema', caption: 'Real Madrid · #9', alt: 'Karim Benzema running in a white Real Madrid kit over a green and yellow number 9', width: 1250, height: 2000 },
  { column: 1, src: '/illustration/kroos.jpg', title: 'Toni Kroos', caption: 'Real Madrid · #8', alt: 'Toni Kroos running in a white Real Madrid kit in front of a large stylized number 8', width: 1250, height: 2000 },
  { column: 1, src: '/illustration/mendy.jpg', title: 'Mendy!', caption: 'Real Madrid vs. Alavés', alt: 'Ferland Mendy running in a white Real Madrid kit, giving a thumbs up, in front of a green square', width: 1386, height: 1645 },

  // Center: NBA
  { column: 2, src: '/illustration/doncic.jpg', title: 'Luka Dončić', caption: 'Dallas Mavericks · #77', alt: 'Luka Dončić dribbling a basketball in a white Dallas jersey on a blue background', width: 1414, height: 2000 },
  { column: 2, src: '/illustration/lebron.webp', title: 'LeBron James', caption: 'Los Angeles Lakers · #23', alt: 'Textured portrait of LeBron James in a purple Lakers jersey against the Lakers logo in purple and gold', width: 1600, height: 2000 },
  { column: 2, src: '/illustration/harden.webp', title: 'James Harden', caption: 'Houston Rockets · #13', alt: 'Textured portrait of James Harden shouting in a red Houston jersey in front of the Rockets logo', width: 1600, height: 2000 },
  { column: 2, src: '/illustration/bang-bang.jpg', title: 'Bang Bang', caption: 'Luka Dončić', alt: 'Luka Dončić shooting a basketball over a defender, with the words Bang Bang in blue behind them', width: 1659, height: 2000 },

  // Right: Story of Luka Modrić
  { column: 3, src: '/illustration/modric-story-1.jpg', title: 'Story of Luka Modrić · I', caption: 'Herding goats in the hills', alt: 'A young boy watching goats on a rocky hillside at sunset', width: 1280, height: 1829 },
  { column: 3, src: '/illustration/modric-story-2.jpg', title: 'Story of Luka Modrić · II', caption: 'Leaving home', alt: 'A young boy holding his mother’s hand as his family hurries away from their house', width: 1280, height: 1829 },
  { column: 3, src: '/illustration/modric-story-3.jpg', title: 'Story of Luka Modrić · III', caption: 'Football outside the hotel', alt: 'Three boys playing football in a cracked lot in front of a run-down hotel', width: 1280, height: 1829 },
  { column: 3, src: '/illustration/modric-story-4.webp', title: 'Story of Luka Modrić · IV', caption: 'Dinamo Zagreb', alt: 'A young Luka Modrić striking the ball in a blue Dinamo Zagreb kit as fans wave flags and flares glow in the stands', width: 1400, height: 2000 },
];
