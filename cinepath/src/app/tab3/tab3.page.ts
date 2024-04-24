import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../components/explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { MovieDb } from '../services/movieDb';
import { environment } from 'src/environments/environment';
import { MovieResult, SearchMultiResponse, TvResult } from '../types/request-types';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [ExploreContainerComponent,FormsModule, CommonModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class Tab3Page {

  mockData : MovieResult[] = [
    
      {
          adult: false,
          backdrop_path: "/9H8wGFwKKt2ADRhg2odywTg1NCZ.jpg",
          genre_ids: [
              878,
              35,
              12,
              14
          ],
          id: 1680,
          original_language: "ja",
          original_title: "キングコング対ゴジラ",
          overview: "The advertising director of Pacific Pharmaceuticals, frustrated with the low ratings of their sponsored TV program, seeks a more sensationalist approach. He orders his staff to Faro Island to capture King Kong for exploitation. As Godzilla re-emerges, a media frenzy generates with Pacific looking to capitalize off of the ultimate battle.",
          popularity: 29.963,
          poster_path: "/dmCfyzUl0Ylk8Rpi6dYyWuBrnNr.jpg",
          release_date: "1962-08-11",
          title: "King Kong vs. Godzilla",
          video: false,
          vote_average: 6.816,
          vote_count: 274,
          media_type: 'movie'
      },
      {
          adult: false,
          backdrop_path: "/dKMpMwJB9Aq1fflGAcVfagfG0R5.jpg",
          genre_ids: [
              18,
              28,
              878
          ],
          id: 1682,
          original_language: "ja",
          original_title: "モスラ対ゴジラ",
          overview: "Journalists Ichiro Sakai and Junko cover the wreckage of a typhoon when an enormous egg is found and claimed by greedy entrepreneurs. Mothra's fairies arrive and are aided by the journalists in a plea for its return. As their requests are denied, Godzilla arises near Nagoya and the people of Infant Island must decide if they are willing to answer Japan's own pleas for help.",
          popularity: 14.471,
          poster_path: "/y49vvM03gpuyhpyMc1f55VrNkP3.jpg",
          release_date: "1964-04-29",
          title: "Mothra vs. Godzilla",
          video: false,
          vote_average: 7.035,
          vote_count: 258,
          media_type: 'movie'

      },
      {
          adult: false,
          backdrop_path: "/7COZZS8Yfe13pEyjuF4k5WGsLEA.jpg",
          genre_ids: [
              28,
              878
          ],
          id: 1687,
          original_language: "en",
          original_title: "Escape from the Planet of the Apes",
          overview: "The world is shocked by the appearance of three talking chimpanzees, who arrived mysteriously in a spacecraft. Intrigued by their intelligence, humans use them for research - until the apes attempt to escape.",
          popularity: 44.04,
          poster_path: "/AnbLVdUEroTfHTUVAJCxkL4R0IH.jpg",
          release_date: "1971-05-20",
          title: "Escape from the Planet of the Apes",
          video: false,
          vote_average: 6.337,
          vote_count: 974,
          media_type: 'movie'

      },
      {
          adult: false,
          backdrop_path: "/fRnhnR2JfkGBT19z7EXEmIUcDSo.jpg",
          genre_ids: [
              12,
              28,
              14
          ],
          id: 1734,
          original_language: "en",
          original_title: "The Mummy Returns",
          overview: "Rick and Evelyn O’Connell, along with their 8-year-old son Alex, discover the key to the legendary Scorpion King’s might: the fabled Bracelet of Anubis. Unfortunately, a newly resurrected Imhotep has designs on the bracelet as well, and isn’t above kidnapping its new bearer, Alex, to gain control of Anubis’s otherworldly army.",
          popularity: 61.764,
          poster_path: "/kdJsW7hcy1lrj7tdMPycTAQPAiR.jpg",
          release_date: "2001-05-04",
          title: "The Mummy Returns",
          video: false,
          vote_average: 6.4,
          vote_count: 6731,
          media_type: 'movie'

      },
      {
          adult: false,
          backdrop_path: "/o4mQHoP8LExn2Q9dn16OGqHvaiK.jpg",
          genre_ids: [
              12,
              18,
              10751
          ],
          id: 1265,
          original_language: "en",
          original_title: "Bridge to Terabithia",
          overview: "Jesse Aarons trained all summer to become the fastest runner in school. So he's very upset when newcomer Leslie Burke outruns him and everyone else. Despite this and other differences including that she's rich, he's poor, she's a city girl, and he's a country boy the two become fast friends. Together they create Terabithia, a land of monsters, trolls, ogres, and giants where they rule as king and queen.",
          popularity: 49.834,
          poster_path: "/3xFxGodKPMFLheS8rujFSmLfcq4.jpg",
          release_date: "2007-02-15",
          title: "Bridge to Terabithia",
          video: false,
          vote_average: 7.305,
          vote_count: 4557,
          media_type: 'movie'

      },
      {
          adult: false,
          backdrop_path: "/xh820ngf1lauGQuFiTvzYuCe6vj.jpg",
          genre_ids: [
              28,
              12,
              53,
              10752
          ],
          id: 1369,
          original_language: "en",
          original_title: "Rambo: First Blood Part II",
          overview: "John Rambo is released from prison by the government for a top-secret covert mission to the last place on Earth he'd want to return - the jungles of Vietnam.",
          popularity: 45.73,
          poster_path: "/pzPdwOitmTleVE3YPMfIQgLh84p.jpg",
          release_date: "1985-05-21",
          title: "Rambo: First Blood Part II",
          video: false,
          vote_average: 6.635,
          vote_count: 3702,
          media_type: 'movie'

      },
      {
          adult: false,
          backdrop_path: "/8eRscFbRYl681zDfkjv1jjW1KAA.jpg",
          genre_ids: [
              878,
              28,
              12
          ],
          id: 1452,
          original_language: "en",
          original_title: "Superman Returns",
          overview: "Superman returns to discover his 5-year absence has allowed Lex Luthor to walk free, and that those he was closest to felt abandoned and have moved on. Luthor plots his ultimate revenge that could see millions killed and change the face of the planet forever, as well as ridding himself of the Man of Steel.",
          popularity: 53.532,
          poster_path: "/385XwTQZDpRX2d3kxtnpiLrjBXw.jpg",
          release_date: "2006-06-28",
          title: "Superman Returns",
          video: false,
          vote_average: 5.757,
          vote_count: 4009,
          media_type: 'movie'

      },
      {
          adult: false,
          backdrop_path: "/tlVO706unJ6EsxuhILxq1igjtHI.jpg",
          genre_ids: [
              27,
              878,
              28
          ],
          id: 2097,
          original_language: "ja",
          original_title: "大巨獣ガッパ",
          overview: "An expedition in the South Pacific lands on a tropical island where the natives worship the mysterious deity Gappa. An earthquake opens up an underground cavern and a baby reptile is discovered inside. The natives warn the foreigners to leave the hatching alone, but they don't listen and take it back to a zoo in Japan. Soon after, moma and papa Gappa start smashing Tokyo looking for their kidnapped child.",
          popularity: 7.468,
          poster_path: "/1atfEZaBMCpv0Zy4Y3V4DpFMKoP.jpg",
          release_date: "1967-04-22",
          title: "Gappa, the Triphibian Monster",
          video: false,
          vote_average: 5.5,
          vote_count: 37,
          media_type: 'movie'

      },
      {
          adult: false,
          backdrop_path: "/4ywXFLQKkA0XX9xbSXpJW0hqvKu.jpg",
          genre_ids: [
              28,
              27,
              878
          ],
          id: 531208,
          original_language: "en",
          original_title: "Triassic World",
          overview: "In the future, scientists found a way to grow human organs inside dinosaurs to harvest them for profit. But when the dinosaurs break out, the scientists that created them have to find ways undo the terrible mistakes they have done.",
          popularity: 12.474,
          poster_path: "/u7IgMjhZnegiAcyibs0NEKp12CW.jpg",
          release_date: "2018-06-19",
          title: "Triassic World",
          video: false,
          vote_average: 3.2,
          vote_count: 26,
          media_type: 'movie'

      },
      {
          adult: false,
          backdrop_path: "/cwhPnVWXC1B6GBycTqHjMVm6PAp.jpg",
          genre_ids: [
              35,
              80,
              12,
              14
          ],
          id: 1870,
          original_language: "fr",
          original_title: "Fantômas se déchaîne",
          overview: "In the second episode of the trilogy Fantômas kidnaps distinguished scientist professor Marchand with the aim to develop a super weapon that will enable him to menace the world. Fantômas is also planning to abduct a second scientist, professor Lefebvre.",
          popularity: 17.021,
          poster_path: "/m5fyoLC3CAZbeo1lJnGtbLsC949.jpg",
          release_date: "1965-12-08",
          title: "Fantomas Unleashed",
          video: false,
          vote_average: 6.7,
          vote_count: 482,
          media_type: 'movie'

      },
      {
          adult: false,
          backdrop_path: "/6gVrbjVlklEAmpEZicmr8Xlodx8.jpg",
          genre_ids: [
              35,
              80,
              12,
              14
          ],
          id: 1875,
          original_language: "fr",
          original_title: "Fantômas contre Scotland Yard",
          overview: "In the third and final episode of the trilogy, Fantômas imposes a head tax on the rich, threatening to kill those who do not comply.",
          popularity: 14.374,
          poster_path: "/8pudR2LEyxkSqQXZE3u4h4QIyHj.jpg",
          release_date: "1967-03-16",
          title: "Fantomas vs. Scotland Yard",
          video: false,
          vote_average: 6.7,
          vote_count: 483,
          media_type: 'movie'

      },
      {
          adult: false,
          backdrop_path: "/5C6njaciKvyZlKWUrQX7mjdl4D1.jpg",
          genre_ids: [
              80,
              9648,
              53,
              28
          ],
          id: 2043,
          original_language: "en",
          original_title: "Along Came a Spider",
          overview: "After the harrowing death of his partner, detective and best-selling author Alex Cross has retreated to the peace of retirement. But when a brilliant criminal kidnaps a senator's young daughter, Alex is lured back into action. Teamed with the Secret Service agent assigned to protect the missing girl, Alex follows a serpentine trail of clues that leads him to a stunning discovery - the kidnapper wants more than just ransom.",
          popularity: 19.378,
          poster_path: "/1YtsND7vSNymylnOSzgg3DdVFMB.jpg",
          release_date: "2001-04-06",
          title: "Along Came a Spider",
          video: false,
          vote_average: 6.337,
          vote_count: 1773,
          media_type: 'movie'

      },
      {
          adult: false,
          backdrop_path: "/7ff2FyFmskEFfmXHkxuqVr47DiG.jpg",
          genre_ids: [
              878,
              12,
              28
          ],
          id: 1979,
          original_language: "en",
          original_title: "Fantastic Four: Rise of the Silver Surfer",
          overview: "The Fantastic Four return to the big screen as a new and all powerful enemy threatens the Earth. The seemingly unstoppable 'Silver Surfer', but all is not what it seems and there are old and new enemies that pose a greater threat than the intrepid superheroes realize.",
          popularity: 35.889,
          poster_path: "/f3ldtPF7SESMcyAIyIJHBLlBBkr.jpg",
          release_date: "2007-06-13",
          title: "Fantastic Four: Rise of the Silver Surfer",
          video: false,
          vote_average: 5.602,
          vote_count: 7594,
          media_type: 'movie'

      },
      {
          adult: false,
          backdrop_path: "/9GRprCMQOWJzczPxqAaGxYft5m9.jpg",
          genre_ids: [
              16,
              35,
              12,
              10751
          ],
          id: 218836,
          original_language: "en",
          original_title: "Planes: Fire & Rescue",
          overview: "When world-famous air racer Dusty learns that his engine is damaged and he may never race again, he must shift gears and is launched into the world of aerial firefighting. Dusty joins forces with veteran fire and rescue helicopter Blade Ranger and his team, a bunch of all-terrain vehicles known as The Smokejumpers. Together, the fearless team battles a massive wildfire, and Dusty learns what it takes to become a true hero.",
          popularity: 23.033,
          poster_path: "/pOmteFeBDI9FJOPTDvYJYFeAtdp.jpg",
          release_date: "2014-07-17",
          title: "Planes: Fire & Rescue",
          video: false,
          vote_average: 6.2,
          vote_count: 808,
          media_type: 'movie'

      },
      {
          adult: false,
          backdrop_path: "/aQLn8UT5eNyMk6RZ3BaCRlD63kp.jpg",
          genre_ids: [
              12,
              28,
              16,
              10751,
              14,
              878
          ],
          id: 378106,
          original_language: "ja",
          original_title: "デジモンアドベンチャー tri. 第3章「告白」",
          overview: "After seeing Meicoomon's abrupt transformation and killing of Leomon, Agumon and the other Digimon are kept isolated in Koushiro's office in order to prevent them from infection, but signs of infection begin to appear in Patamon.",
          popularity: 17.42,
          poster_path: "/mr9qCQCwYqMpiqc30uOVhVJNSWe.jpg",
          release_date: "2016-09-24",
          title: "Digimon Adventure tri. Part 3: Confession",
          video: false,
          vote_average: 6.925,
          vote_count: 40,
          media_type: 'movie'

      },
      {
          adult: false,
          backdrop_path: "/kcqwO6MKoz3ycCWm3TCUs9Q4Ns4.jpg",
          genre_ids: [
              35,
              18,
              28,
              10749
          ],
          id: 831920,
          original_language: "ja",
          original_title: "大怪獣のあとしまつ",
          overview: "A large monster attacks Japan, but dies suddenly. While the people rejoice and bask in relief, the giant corpse left behind begins to slowly rot and bloat. If it explodes, the nation will be destroyed.",
          popularity: 5.477,
          poster_path: "/iVmofY91ABMoYiBI3Ld2EozOEay.jpg",
          release_date: "2022-02-04",
          title: "What to Do With the Dead Kaiju?",
          video: false,
          vote_average: 4.6,
          vote_count: 13,
          media_type: 'movie'

      },
      {
          adult: false,
          backdrop_path: "/5pRoq01p4OEk0yxzWdCxLTBT7fp.jpg",
          genre_ids: [
              28,
              878,
              12,
              27
          ],
          id: 992090,
          original_language: "en",
          original_title: "Jurassic Domination",
          overview: "When two military-made, weaponized dinosaurs attack a small mountain town, it's up to the sheriff to figure out a way to stop the creatures before the dinos escape and wreak havoc nationwide.",
          popularity: 7.776,
          poster_path: "/gg3zQ1FvWPmKV9qTJBUGXm5hMMi.jpg",
          release_date: "2022-07-01",
          title: "Jurassic Domination",
          video: false,
          vote_average: 4.1,
          vote_count: 8,
          media_type: 'movie'

      },
      
      {
          adult: false,
          backdrop_path: "/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",
          genre_ids: [
              18,
              28
          ],
          id: 677179,
          original_language: "en",
          original_title: "Creed III",
          overview: "After dominating the boxing world, Adonis Creed has thrived in his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian — a fighter with nothing to lose.",
          popularity: 128.241,
          poster_path: "/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
          release_date: "2023-03-01",
          title: "Creed III",
          video: false,
          vote_average: 7.1,
          vote_count: 2322,
          media_type: 'movie'

      },
      {
          adult: false,
          genre_ids: [
              14,
              12,
              35
          ],
          id: 677215,
          original_language: "en",
          original_title: "Dorothy and the Scarecrow in Oz",
          overview: "Dorothy and the Scarecrow are now in the Emerald City. They have become friendly with the Wizard, and together with the woodman, the cowardly lion, and several new creations equally delightful, they journey through Oz -- the earthquake -- and into the glass city. The Scarecrow is elated to think he is going to get his brains at last and be like other men are; the Tin-Woodman is bent upon getting a heart, and the cowardly lion pleads with the great Oz for courage. All these are granted by his Highness. Dorothy picks the princess. -- The Dangerous Mangaboos. -- Into the black pit, and out again. We then see Jim, the cab horse, and myriads of pleasant surprises that hold and fascinate.",
          popularity: 0.946,
          poster_path: "/1dnrJPx0KcHc2GFtiQQWGbU5tz3.jpg",
          release_date: "1910-04-14",
          title: "Dorothy and the Scarecrow in Oz",
          video: false,
          vote_average: 3,
          vote_count: 2,
          media_type: 'movie'

      }
    

    
  
  ];
      
  navigateToContent(id: number | undefined, type: 'tvShow' | 'movie') {
    if (id) {
      if (type === 'tvShow') {
        window.location.href = `/contentDetail/tvShow/${id}`;
      } else {
        window.location.href = `/contentDetail/movie/${id}`;
      }
    }
  }
  getImgUrl = (path?: string, size?: string) =>  `https://image.tmdb.org/t/p/w500${path}`


  constructor() {}
}
