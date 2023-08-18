const express = require("express");
const router = express.Router();

router.get("/movies", (req, res) => {
  const teamAData = [
    {
      adult: false,
      backdrop_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/dWvDlTkt9VEGCDww6IzNRgm8fRQ.jpg",
      id: 457332,
      title: "Hidden Strike",
      original_language: "en",
      original_title: "Hidden Strike",
      overview:
        "Two elite soldiers must escort civilians through a gauntlet of gunfire and explosions.",
      poster_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/zsbolOkw8RhTU4DKOrpf4M7KCmi.jpg",
      media_type: "movie",
      release_date: "2023-07-06",
      details: {
        id: 457332,
        backdrop_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face/dWvDlTkt9VEGCDww6IzNRgm8fRQ.jpg",
        budget: 80000000,
        genres: [
          {
            id: 28,
            name: "Action",
          },
          {
            id: 12,
            name: "Adventure",
          },
          {
            id: 53,
            name: "Thriller",
          },
        ],
        homepage: "https://www.xyzfilms.com/hidden-strike",
        original_title: "Hidden Strike",
        overview:
          "Two elite soldiers must escort civilians through a gauntlet of gunfire and explosions.",
        release_date: "2023-07-06",
        runtime: 103,
        status: "Released",
        tagline: "There is a plan. They just don't know what it is.",
        title: "Hidden Strike",
        poster_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face//zsbolOkw8RhTU4DKOrpf4M7KCmi.jpg",
      },
      credits: [
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Jackie Chan",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/nraZoTzwJQPHspAVsKfgl3RXKKa.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "John Cena",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/6EZaBiQHx3Xlz3j0D6ttDxHXaxr.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Ma Chunrui",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/y6NNhAUQfzNMH5DIGV2YnOnZvml.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Jiang Wenli",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/34dJE4iDo6cAeJffqHtYlDFptbl.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Xu Jia",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/7zsLeO7HGKoaMSSRF8XYKdlX2I8.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Gong Jun",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/rtjBdEF61NySmDDnoDgAtuclAJJ.jpg",
        },
      ],
    },
    {
      adult: false,
      backdrop_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
      id: 346698,
      title: "Barbie",
      original_language: "en",
      original_title: "Barbie",
      overview:
        "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
      poster_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      media_type: "movie",
      release_date: "2023-07-19",
      details: {
        id: 346698,
        backdrop_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
        budget: 145000000,
        genres: [
          {
            id: 35,
            name: "Comedy",
          },
          {
            id: 12,
            name: "Adventure",
          },
          {
            id: 14,
            name: "Fantasy",
          },
        ],
        homepage: "https://www.barbie-themovie.com",
        original_title: "Barbie",
        overview:
          "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
        release_date: "2023-07-19",
        runtime: 114,
        status: "Released",
        tagline: "She's everything. He's just Ken.",
        title: "Barbie",
        poster_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face//iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      },
      credits: [
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Margot Robbie",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Ryan Gosling",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/4X1wJo5xHm3YICPWZqVCPgLBEJ7.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "America Ferrera",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/dhiUliLE7dFaqj5BKNQ6x7Wm9uR.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Kate McKinnon",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/2cNetzianFcxPQbyOQnkAIkKUZE.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Ariana Greenblatt",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/rm6yLSvxHsmyHUmKy10DmBrB4SH.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Michael Cera",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/qjhNKsw0OLyZQgK4srhelBafcCf.jpg",
        },
      ],
    },
    {
      adult: false,
      backdrop_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/iEFuHjqrE059SmflBva1JzDJutE.jpg",
      id: 496450,
      title: "Miraculous: Ladybug & Cat Noir, The Movie",
      original_language: "fr",
      original_title: "Miraculous - le film",
      overview:
        "A life of an ordinary Parisian teenager Marinette goes superhuman when she becomes Ladybug. Bestowed with magical powers of creation, Ladybug must unite with her opposite, Cat Noir, to save Paris as a new villain unleashes chaos unto the city.",
      poster_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/dQNJ8SdCMn3zWwHzzQD2xrphR1X.jpg",
      media_type: "movie",
      release_date: "2023-07-05",
      details: {
        id: 496450,
        backdrop_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face/iEFuHjqrE059SmflBva1JzDJutE.jpg",
        budget: 86000000,
        genres: [
          {
            id: 16,
            name: "Animation",
          },
          {
            id: 10751,
            name: "Family",
          },
          {
            id: 28,
            name: "Action",
          },
          {
            id: 14,
            name: "Fantasy",
          },
          {
            id: 10749,
            name: "Romance",
          },
        ],
        homepage: "https://www.netflix.com/title/81383247",
        original_title: "Miraculous - le film",
        overview:
          "A life of an ordinary Parisian teenager Marinette goes superhuman when she becomes Ladybug. Bestowed with magical powers of creation, Ladybug must unite with her opposite, Cat Noir, to save Paris as a new villain unleashes chaos unto the city.",
        release_date: "2023-07-05",
        runtime: 107,
        status: "Released",
        tagline: "The fate of the world is in their hands.",
        title: "Miraculous: Ladybug & Cat Noir, The Movie",
        poster_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face//dQNJ8SdCMn3zWwHzzQD2xrphR1X.jpg",
      },
      credits: [
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Annouck Hautbois",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/5D66aDzc8QrkNtdeFb0nsFku6Zh.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Benjamin Bollen",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/qAvG7VqmZp6s2XE3KZooEfYDfW9.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Fanny Bloc",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/7qcsMqQNNZ0Im1j0i9EUTBDdjaP.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Alexandre N'Guyen",
          profile_path: "https://www.themoviedb.org/t/p/w440_and_h660_facenull",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Antoine Tomé",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/4tKFiEb0yJnM6I4AjzeJzy6QS7Z.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Marie Chevalot",
          profile_path: "https://www.themoviedb.org/t/p/w440_and_h660_facenull",
        },
      ],
    },
    {
      adult: false,
      backdrop_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/znUYFf0Sez5lUmxPr3Cby7TVJ6c.jpg",
      id: 447277,
      title: "The Little Mermaid",
      original_language: "en",
      original_title: "The Little Mermaid",
      overview:
        "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
      poster_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
      media_type: "movie",
      release_date: "2023-05-18",
      details: {
        id: 447277,
        backdrop_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face/znUYFf0Sez5lUmxPr3Cby7TVJ6c.jpg",
        budget: 250000000,
        genres: [
          {
            id: 12,
            name: "Adventure",
          },
          {
            id: 10751,
            name: "Family",
          },
          {
            id: 14,
            name: "Fantasy",
          },
          {
            id: 10749,
            name: "Romance",
          },
        ],
        homepage: "https://movies.disney.com/the-little-mermaid-2023",
        original_title: "The Little Mermaid",
        overview:
          "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
        release_date: "2023-05-18",
        runtime: 135,
        status: "Released",
        tagline: "Watch and you'll see, some day I'll be, part of your world!",
        title: "The Little Mermaid",
        poster_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face//ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
      },
      credits: [
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Halle Bailey",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/acOAv6ijsYjLb8p1IyUtdZTgwKC.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Jonah Hauer-King",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/7MWSV7gg8OQqOirQyWMBr8aQt3G.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Daveed Diggs",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/v4VmQP0iFFW7SU2ouE2Qhu27Hgy.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Awkwafina",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/l5AKkg3H1QhMuXmTTmq1EyjyiRb.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Jacob Tremblay",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/6S2Oq7e2K1qzMHAv9NFChSQKwl8.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Noma Dumezweni",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/abEWaYTugwH967V8LfptQIMioKQ.jpg",
        },
      ],
    },
    {
      adult: false,
      backdrop_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
      id: 872585,
      title: "Oppenheimer",
      original_language: "en",
      original_title: "Oppenheimer",
      overview:
        "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
      poster_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      media_type: "movie",
      release_date: "2023-07-19",
      details: {
        id: 872585,
        backdrop_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        budget: 100000000,
        genres: [
          {
            id: 18,
            name: "Drama",
          },
          {
            id: 36,
            name: "History",
          },
        ],
        homepage: "http://www.oppenheimermovie.com",
        original_title: "Oppenheimer",
        overview:
          "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
        release_date: "2023-07-19",
        runtime: 181,
        status: "Released",
        tagline: "The world forever changes.",
        title: "Oppenheimer",
        poster_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face//8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      },
      credits: [
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Cillian Murphy",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/llkbyWKwpfowZ6C8peBjIV9jj99.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Emily Blunt",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/2mfJILwVGr4RBha3OihQVfq5nyL.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Matt Damon",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/At3JgvaNeEN4Z4ESKlhhes85Xo3.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Robert Downey Jr.",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/im9SAqJPZKEbVZGmjXuLI4O7RvM.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Florence Pugh",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/dBC4tZU2gYEnzCu764IgEjQMA8M.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Josh Hartnett",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/dCfu2EN7FjISACcjilaJu7evwEc.jpg",
        },
      ],
    },
    {
      adult: false,
      backdrop_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/c0769FOh3GPgSmNOk3UlKCMXmj4.jpg",
      id: 71915,
      title: "Good Omens",
      original_language: "en",
      original_title: "Good Omens",
      overview:
        "Aziraphale, an angel, and Crowley, a demon, join forces to find the Antichrist and stop Armageddon.",
      poster_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/1ibIjP6puA4y2SfCn9icSehHrBu.jpg",
      media_type: "tv",
      release_date: "2019-05-31",
      details: {
        id: 71915,
        backdrop_path: "https://www.themoviedb.org/t/p/w440_and_h660_facenull",
        budget: 0,
        genres: [],
        homepage: "",
        original_title: "AC/DC - Dokumentation",
        overview:
          "A detailed documentary about the band AC/DC. It begins with the beginnings of the band, which was still young at the time, through Bon Scott's death to their great successes. An exciting story for every fan who also wants to see behind the scenes of AC/DC.",
        release_date: "2013-01-20",
        runtime: 0,
        status: "Released",
        tagline: "",
        title: "AC/DC - Documentation",
        poster_path: "https://www.themoviedb.org/t/p/w440_and_h660_face/null",
      },
      credits: [],
    },
    {
      adult: false,
      backdrop_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
      id: 447365,
      title: "Guardians of the Galaxy Vol. 3",
      original_language: "en",
      original_title: "Guardians of the Galaxy Vol. 3",
      overview:
        "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
      poster_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
      media_type: "movie",
      release_date: "2023-05-03",
      details: {
        id: 447365,
        backdrop_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
        budget: 250000000,
        genres: [
          {
            id: 878,
            name: "Science Fiction",
          },
          {
            id: 12,
            name: "Adventure",
          },
          {
            id: 28,
            name: "Action",
          },
        ],
        homepage:
          "https://www.marvel.com/movies/guardians-of-the-galaxy-volume-3",
        original_title: "Guardians of the Galaxy Vol. 3",
        overview:
          "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
        release_date: "2023-05-03",
        runtime: 150,
        status: "Released",
        tagline: "Once more with feeling.",
        title: "Guardians of the Galaxy Vol. 3",
        poster_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face//r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
      },
      credits: [
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Chris Pratt",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/83o3koL82jt30EJ0rz4Bnzrt2dd.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Zoe Saldaña",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/iOVbUH20il632nj2v01NCtYYeSg.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Dave Bautista",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Karen Gillan",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/kFLXcFdok3ShDxylr3WNreQphQm.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Pom Klementieff",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/hfUKAI2kXTMMWjno0i4sLPJud5N.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Vin Diesel",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/7rwSXluNWZAluYMOEWBxkPmckES.jpg",
        },
      ],
    },
    {
      adult: false,
      backdrop_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/7drO1kYgQ0PnnU87sAnBEphYrSM.jpg",
      id: 1083862,
      title: "Resident Evil: Death Island",
      original_language: "ja",
      original_title: "バイオハザード：デスアイランド",
      overview:
        "In San Francisco, Jill Valentine is dealing with a zombie outbreak and a new T-Virus, Leon Kennedy is on the trail of a kidnapped DARPA scientist, and Claire Redfield is investigating a monstrous fish that is killing whales in the bay. Joined by Chris Redfield and Rebecca Chambers, they discover the trail of clues from their separate cases all converge on the same location, Alcatraz Island, where a new evil has taken residence and awaits their arrival.",
      poster_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/qayga07ICNDswm0cMJ8P3VwklFZ.jpg",
      media_type: "movie",
      release_date: "2023-06-22",
      details: {
        id: 1083862,
        backdrop_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face/7drO1kYgQ0PnnU87sAnBEphYrSM.jpg",
        budget: 0,
        genres: [
          {
            id: 16,
            name: "Animation",
          },
          {
            id: 28,
            name: "Action",
          },
          {
            id: 27,
            name: "Horror",
          },
        ],
        homepage: "https://www.sonypictures.com/movies/residentevildeathisland",
        original_title: "バイオハザード：デスアイランド",
        overview:
          "In San Francisco, Jill Valentine is dealing with a zombie outbreak and a new T-Virus, Leon Kennedy is on the trail of a kidnapped DARPA scientist, and Claire Redfield is investigating a monstrous fish that is killing whales in the bay. Joined by Chris Redfield and Rebecca Chambers, they discover the trail of clues from their separate cases all converge on the same location, Alcatraz Island, where a new evil has taken residence and awaits their arrival.",
        release_date: "2023-06-22",
        runtime: 91,
        status: "Released",
        tagline: "Destinies intertwined. A world gone mad.",
        title: "Resident Evil: Death Island",
        poster_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face//qayga07ICNDswm0cMJ8P3VwklFZ.jpg",
      },
      credits: [
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Matthew Mercer",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/fe1S317253vfMuNuIDjhp9vtNSs.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Kevin Dorman",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/jByqQyo6VsnbtXwKGidaadSBOPb.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Erin Cahill",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/w4WPh5Ex294Y0KnvmdIXfoSiB17.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Nicole Tompkins",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/rD3uXD6PHHLyXoTk2sSITKsJmSF.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Stephanie Panisello",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/tmiQx5yU14ulJ7vzZZHwEngsGhp.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Salli Saffioti",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/awF13TyorW4Rp5rq10p5XL0Po3m.jpg",
        },
      ],
    },
    {
      adult: false,
      backdrop_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
      id: 298618,
      title: "The Flash",
      original_language: "en",
      original_title: "The Flash",
      overview:
        "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
      poster_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
      media_type: "movie",
      release_date: "2023-06-13",
      details: {
        id: 298618,
        backdrop_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
        budget: 190000000,
        genres: [
          {
            id: 28,
            name: "Action",
          },
          {
            id: 12,
            name: "Adventure",
          },
          {
            id: 878,
            name: "Science Fiction",
          },
        ],
        homepage: "https://www.dc.com/theflash",
        original_title: "The Flash",
        overview:
          "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
        release_date: "2023-06-13",
        runtime: 144,
        status: "Released",
        tagline: "Worlds collide.",
        title: "The Flash",
        poster_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face//rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
      },
      credits: [
        {
          adult: false,
          gender: 3,
          id: 234352,
          name: "Ezra Miller",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/hLtxNK8eeWZkFSeaAASFWm15Qv0.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Sasha Calle",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/1GOW1cejmE8D8T6PRikYlGmUae0.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Michael Keaton",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/82rxrGxOqQW2NjKsIiNbDYHFfmb.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Michael Shannon",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/6mMczfjM8CiS1WuBOgo5Xom1TcR.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Ron Livingston",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/pr5CjWnkaf5WKTIYh8wtNufjmyb.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Maribel Verdú",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/5ml5J9yDEV6ZLkinkS7vAHfE882.jpg",
        },
      ],
    },
    {
      adult: false,
      backdrop_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/zzbEAP5d1Ci0QKitpaA8PykHIj4.jpg",
      id: 926008,
      title: "The Beanie Bubble",
      original_language: "en",
      original_title: "The Beanie Bubble",
      overview:
        "Ty was a frustrated toy salesman until his collaboration with three women turned his stuffed animals into a defining ’90s trend. This behind-the-scenes look at history’s biggest toy craze is a wild story about what—and who—is valued in this world.",
      poster_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/jgAxa30NBLZYxbJjZxUTatIAdCa.jpg",
      media_type: "movie",
      release_date: "2023-07-21",
      details: {
        id: 926008,
        backdrop_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face/zzbEAP5d1Ci0QKitpaA8PykHIj4.jpg",
        budget: 0,
        genres: [
          {
            id: 35,
            name: "Comedy",
          },
          {
            id: 18,
            name: "Drama",
          },
        ],
        homepage:
          "https://tv.apple.com/movie/umc.cmc.4byzgw44377yxyjsl85rhn8vq",
        original_title: "The Beanie Bubble",
        overview:
          "Ty was a frustrated toy salesman until his collaboration with three women turned his stuffed animals into a defining ’90s trend. This behind-the-scenes look at history’s biggest toy craze is a wild story about what—and who—is valued in this world.",
        release_date: "2023-07-21",
        runtime: 110,
        status: "Released",
        tagline: "The crazy behind the craze.",
        title: "The Beanie Bubble",
        poster_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face//jgAxa30NBLZYxbJjZxUTatIAdCa.jpg",
      },
      credits: [
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Zach Galifianakis",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/hghR9AhS8OKsO4ziq5Yf7w2ZguB.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Elizabeth Banks",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/zrkI1dYucpTM8Qydtrtro9MgQPb.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Sarah Snook",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/lvijjedN2HWyaH9DTxNXQ1qv5K9.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Geraldine Viswanathan",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/rLrsPhlILtiP89hCBLgc0eGC96f.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Tracey Bonner",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/1Y3dKqq9dkYIFYQZqgh7mB7Ts7g.jpg",
        },
        {
          adult: false,
          gender: 3,
          id: 234352,
          name: "Carl Clemons-Hopkins",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/lE1AP30VRMtDLQHHlQs2DYhx3cF.jpg",
        },
      ],
    },
    {
      adult: false,
      backdrop_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/df8ya9FKghk0U45G2nJru6ZOuUK.jpg",
      id: 1140066,
      title: "Paradise",
      original_language: "de",
      original_title: "Paradise",
      overview:
        "A man sees the dark side of the time-manipulating biotech company he works for when a crushing debt forces his wife to give up 40 years of her own life.",
      poster_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/yGz88hNPcHUJkUx7MPm0Ue6GZt7.jpg",
      media_type: "movie",
      release_date: "2023-06-24",
      details: {
        id: 1140066,
        backdrop_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face/df8ya9FKghk0U45G2nJru6ZOuUK.jpg",
        budget: 0,
        genres: [
          {
            id: 53,
            name: "Thriller",
          },
          {
            id: 878,
            name: "Science Fiction",
          },
          {
            id: 28,
            name: "Action",
          },
        ],
        homepage: "https://www.netflix.com/title/81288179",
        original_title: "Paradise",
        overview:
          "A man sees the dark side of the time-manipulating biotech company he works for when a crushing debt forces his wife to give up 40 years of her own life.",
        release_date: "2023-06-24",
        runtime: 117,
        status: "Released",
        tagline: "",
        title: "Paradise",
        poster_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face//yGz88hNPcHUJkUx7MPm0Ue6GZt7.jpg",
      },
      credits: [
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Kostja Ullmann",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/mQguH03eznJhsfwpZJZrnWCs5Su.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Corinna Kirchhoff",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/blg6O0tF1Jm93Et4u1m3VdoiRmc.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Marlene Tanczik",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/6qVj3ksOEwSa0vSXC7ItzqFdgFn.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Iris Berben",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/pInPB6vJDaGlVQZn06pKoOCRhCN.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Lisa-Marie Koroll",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/9rg4AqXIIuEN8TzqS2U7zYIETUm.jpg",
        },
      ],
    },
    {
      adult: false,
      backdrop_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/57clBMPX25NNO6nmDw3TV3zQaQE.jpg",
      id: 114472,
      title: "Secret Invasion",
      original_language: "en",
      original_title: "Secret Invasion",
      overview:
        "Nick Fury and Talos discover a faction of shapeshifting Skrulls who have been infiltrating Earth for years.",
      poster_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/f5ZMzzCvt2IzVDxr54gHPv9jlC9.jpg",
      media_type: "tv",
      release_date: "2023-06-21",
      details: {
        id: 114472,
        backdrop_path: "https://www.themoviedb.org/t/p/w440_and_h660_facenull",
        budget: 0,
        genres: [
          {
            id: 99,
            name: "Documentary",
          },
        ],
        homepage: "http://www.colonialfilm.org.uk/node/252",
        original_title: "Daybreak in Udi",
        overview:
          "An African tribe in the Eastern Nigerian village of Umana work to build a maternity hospital, with the aid of government officials, and against the opposition of some tribal members.",
        release_date: "1949-08-15",
        runtime: 47,
        status: "Released",
        tagline: "",
        title: "Daybreak in Udi",
        poster_path: "https://www.themoviedb.org/t/p/w440_and_h660_face/null",
      },
      credits: [
        {
          adult: false,
          gender: 0,
          id: 234352,
          name: "E.R. Chadwick",
          profile_path: "https://www.themoviedb.org/t/p/w440_and_h660_facenull",
        },
        {
          adult: false,
          gender: 0,
          id: 234352,
          name: "Hartford Anerobi",
          profile_path: "https://www.themoviedb.org/t/p/w440_and_h660_facenull",
        },
        {
          adult: false,
          gender: 0,
          id: 234352,
          name: "Fanny Elumeze",
          profile_path: "https://www.themoviedb.org/t/p/w440_and_h660_facenull",
        },
        {
          adult: false,
          gender: 0,
          id: 234352,
          name: "Oso Anibhebe",
          profile_path: "https://www.themoviedb.org/t/p/w440_and_h660_facenull",
        },
        {
          adult: false,
          gender: 0,
          id: 234352,
          name: "Joseph Amalu",
          profile_path: "https://www.themoviedb.org/t/p/w440_and_h660_facenull",
        },
        {
          adult: false,
          gender: 0,
          id: 234352,
          name: "Joyce MgBaronye",
          profile_path: "https://www.themoviedb.org/t/p/w440_and_h660_facenull",
        },
      ],
    },
    {
      adult: false,
      backdrop_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/foGkPxpw9h8zln81j63mix5B7m8.jpg",
      id: 71912,
      title: "The Witcher",
      original_language: "en",
      original_title: "The Witcher",
      overview:
        "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
      poster_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg",
      media_type: "tv",
      release_date: "2019-12-20",
      details: {
        id: 71912,
        backdrop_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face/adk2efkC3Lpc6d5YkODhguKjiGw.jpg",
        budget: 0,
        genres: [
          {
            id: 27,
            name: "Horror",
          },
          {
            id: 12,
            name: "Adventure",
          },
        ],
        homepage: "",
        original_title: "The Runestone",
        overview:
          "A New York detective takes the case of a bulletproof monster sprung to life from Viking legend.",
        release_date: "1991-02-01",
        runtime: 105,
        status: "Released",
        tagline: "An ancient prophecy is about to become a modern nightmare.",
        title: "The Runestone",
        poster_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face//mN6cVMyUhJBcNAley0zdFomImvl.jpg",
      },
      credits: [
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Peter Riegert",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/yPgaRZBMVy9eoNNuiPIm0wzG9sD.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Joan Severance",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/2bgZLV4KYig6p7aXIMkDCwGx4yZ.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "William Hickey",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/oPPyHJKJceliMLk8S8ldjuDg6V5.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Tim Ryan",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/wE9FHnsKYts2VjtER97Ir1qUklX.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Mitchell Laurance",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/bUFynKgglxWvv5RLtSzElpG3RLC.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Lawrence Tierney",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/crtpxUAnPrZFSrLjbsTUTdGn72W.jpg",
        },
      ],
    },
    {
      adult: false,
      backdrop_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/4vlsYpItGVZN1UWZGqQBoCzrUSw.jpg",
      id: 1030987,
      title: "Sympathy for the Devil",
      original_language: "en",
      original_title: "Sympathy for the Devil",
      overview:
        "After being forced to drive a mysterious passenger at gunpoint, a man finds himself in a high-stakes game of cat and mouse where it becomes clear that not everything is as it seems.",
      poster_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/mLeYGSVnDymYscyjfPEfjK9GBUk.jpg",
      media_type: "movie",
      release_date: "2023-07-20",
      details: {
        id: 1030987,
        backdrop_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face/4vlsYpItGVZN1UWZGqQBoCzrUSw.jpg",
        budget: 0,
        genres: [
          {
            id: 53,
            name: "Thriller",
          },
        ],
        homepage: "",
        original_title: "Sympathy for the Devil",
        overview:
          "After being forced to drive a mysterious passenger at gunpoint, a man finds himself in a high-stakes game of cat and mouse where it becomes clear that not everything is as it seems.",
        release_date: "2023-07-20",
        runtime: 90,
        status: "Released",
        tagline: "Revenge is a hell of a ride.",
        title: "Sympathy for the Devil",
        poster_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face//mLeYGSVnDymYscyjfPEfjK9GBUk.jpg",
      },
      credits: [
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Nicolas Cage",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/ti2h1OS1n1VwoJHWFaJD8dMZuEE.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Joel Kinnaman",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/c4TTWy1WntzDxpgIe8kbODjWOfD.jpg",
        },
        {
          adult: false,
          gender: 0,
          id: 234352,
          name: "Alexis Zollicoffer",
          profile_path: "https://www.themoviedb.org/t/p/w440_and_h660_facenull",
        },
        {
          adult: false,
          gender: 0,
          id: 234352,
          name: "Cameron Lee Price",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/oSvuZp154l88FATYPGgiI7KZ3yi.jpg",
        },
        {
          adult: false,
          gender: 0,
          id: 234352,
          name: "Oliver McCallum",
          profile_path: "https://www.themoviedb.org/t/p/w440_and_h660_facenull",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Burns Burns",
          profile_path: "https://www.themoviedb.org/t/p/w440_and_h660_facenull",
        },
      ],
    },
    {
      adult: false,
      backdrop_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
      id: 667538,
      title: "Transformers: Rise of the Beasts",
      original_language: "en",
      original_title: "Transformers: Rise of the Beasts",
      overview:
        "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
      poster_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
      media_type: "movie",
      release_date: "2023-06-06",
      details: {
        id: 667538,
        backdrop_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
        budget: 195000000,
        genres: [
          {
            id: 28,
            name: "Action",
          },
          {
            id: 12,
            name: "Adventure",
          },
          {
            id: 878,
            name: "Science Fiction",
          },
        ],
        homepage: "https://www.transformersmovie.com",
        original_title: "Transformers: Rise of the Beasts",
        overview:
          "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
        release_date: "2023-06-06",
        runtime: 127,
        status: "Released",
        tagline: "Unite or fall.",
        title: "Transformers: Rise of the Beasts",
        poster_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face//gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
      },
      credits: [
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Anthony Ramos",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/2Stnm8PQI7xHkVwINb4MhS7LOuR.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Dominique Fishback",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/zduC0PM7xKzFX4F7DH8CCt5gt6O.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Peter Cullen",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/9Snf4fBUkk5MrAjqtNtgZRJYJbj.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Ron Perlman",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/9riPBfsWpzEzh2y9ucxTW22iakI.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Peter Dinklage",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/wSyk4uT4hjWM93X8ThMRx57R6mm.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Michelle Yeoh",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/6oxvfyrrM3YmhgFZSqc8ESqPZoC.jpg",
        },
      ],
    },
    {
      adult: false,
      backdrop_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/5iXZJyEY2sDQMs7dHo9gH3qijmL.jpg",
      id: 881209,
      title: "Happiness for Beginners",
      original_language: "en",
      original_title: "Happiness for Beginners",
      overview:
        "At a crossroads after her divorce, a schoolteacher ventures toward a fresh start in life — and love — when she signs up for a grueling group hiking trip.",
      poster_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/rK4jb2t3J98IXjY9O3nc8bX9yqt.jpg",
      media_type: "movie",
      release_date: "2023-07-27",
      details: {
        id: 881209,
        backdrop_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face/5iXZJyEY2sDQMs7dHo9gH3qijmL.jpg",
        budget: 0,
        genres: [
          {
            id: 10749,
            name: "Romance",
          },
          {
            id: 12,
            name: "Adventure",
          },
          {
            id: 35,
            name: "Comedy",
          },
        ],
        homepage: "https://www.netflix.com/title/81418617",
        original_title: "Happiness for Beginners",
        overview:
          "At a crossroads after her divorce, a schoolteacher ventures toward a fresh start in life — and love — when she signs up for a grueling group hiking trip.",
        release_date: "2023-07-27",
        runtime: 103,
        status: "Released",
        tagline: "",
        title: "Happiness for Beginners",
        poster_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face//rK4jb2t3J98IXjY9O3nc8bX9yqt.jpg",
      },
      credits: [
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Ellie Kemper",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/2PmzhjJTr8zme7VuTIE1Nc1n5YL.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Luke Grimes",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/q8PqzidRZhcztUF2d0oWfvjBQdL.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Nico Santos",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/e96iYbxaqC9zGaFPxZ2fH82MBNu.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Blythe Danner",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/hO09OUblsKAy81L3B8LupByY51u.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Ben Cook",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/siFE5F4ReT1krbu3kPseVx0OO6T.jpg",
        },
        {
          adult: false,
          gender: 0,
          id: 234352,
          name: "Shayvawn Webster",
          profile_path: "https://www.themoviedb.org/t/p/w440_and_h660_facenull",
        },
      ],
    },
    {
      adult: false,
      backdrop_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/fIQfdZ6fqf9mIbqBaexbgIEIk5K.jpg",
      id: 864168,
      title: "Joy Ride",
      original_language: "en",
      original_title: "Joy Ride",
      overview:
        "When Audrey's business trip to Asia goes sideways, she enlists the help of Lolo, her childhood best friend, Kat, a college friend, and Deadeye, Lolo's eccentric cousin. Their epic, no-holds-barred experience becomes a journey of bonding, friendship, belonging and wild debauchery that reveals the universal truth of what it means to know and love who you are.",
      poster_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/lTZ3r9NBdbrR6NA90v3hFYqd6TC.jpg",
      media_type: "movie",
      release_date: "2023-06-22",
      details: {
        id: 864168,
        backdrop_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face/fIQfdZ6fqf9mIbqBaexbgIEIk5K.jpg",
        budget: 0,
        genres: [
          {
            id: 35,
            name: "Comedy",
          },
        ],
        homepage: "https://www.joyride.movie/",
        original_title: "Joy Ride",
        overview:
          "When Audrey's business trip to Asia goes sideways, she enlists the help of Lolo, her childhood best friend, Kat, a college friend, and Deadeye, Lolo's eccentric cousin. Their epic, no-holds-barred experience becomes a journey of bonding, friendship, belonging and wild debauchery that reveals the universal truth of what it means to know and love who you are.",
        release_date: "2023-06-22",
        runtime: 95,
        status: "Released",
        tagline: "Four friends. One trip. No luck.",
        title: "Joy Ride",
        poster_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face//lTZ3r9NBdbrR6NA90v3hFYqd6TC.jpg",
      },
      credits: [
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Ashley Park",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/vfTM1VUdVEuB81WR9LEWYjPxDzo.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Sherry Cola",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/1C2psFP8Tm2FVfSZnDJgdXNfBLG.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Stephanie Hsu",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/8gb3lfIHKQAGOQyeC4ynQPsCiHr.jpg",
        },
        {
          adult: false,
          gender: 3,
          id: 234352,
          name: "Sabrina Wu",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/7yA3L0pYuO5MvKg82UXxo3KrFmp.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "David Denman",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/4I06ZD8SQ6pU1QYShiUXb711fJW.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Annie Mumolo",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/4U943oEvfDg8Tuyjl9biLgzijBf.jpg",
        },
      ],
    },
    {
      adult: false,
      backdrop_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/Als2QyqbLgT5G3rwTGJta8QQfqP.jpg",
      id: 616747,
      title: "Haunted Mansion",
      original_language: "en",
      original_title: "Haunted Mansion",
      overview:
        "A woman and her son enlist a motley crew of so-called spiritual experts to help rid their home of supernatural squatters.",
      poster_path:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/jUjg01KWd11nycbtXhJKghZFD7V.jpg",
      media_type: "movie",
      release_date: "2023-07-26",
      details: {
        id: 616747,
        backdrop_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face/Als2QyqbLgT5G3rwTGJta8QQfqP.jpg",
        budget: 157800000,
        genres: [
          {
            id: 35,
            name: "Comedy",
          },
          {
            id: 14,
            name: "Fantasy",
          },
          {
            id: 9648,
            name: "Mystery",
          },
        ],
        homepage: "https://movies.disney.com/haunted-mansion",
        original_title: "Haunted Mansion",
        overview:
          "A woman and her son enlist a motley crew of so-called spiritual experts to help rid their home of supernatural squatters.",
        release_date: "2023-07-26",
        runtime: 123,
        status: "Released",
        tagline: "Home is where the haunt is.",
        title: "Haunted Mansion",
        poster_path:
          "https://www.themoviedb.org/t/p/w440_and_h660_face//jUjg01KWd11nycbtXhJKghZFD7V.jpg",
      },
      credits: [
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Rosario Dawson",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/1mm7JGHIUX3GRRGXEV9QCzsI0ao.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Chase W. Dillon",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/8GkzgrM3JPTCK3eromBzu5KfHnN.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Lakeith Stanfield",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/28YfGuru3Gjgc0PoTN6z3aRRQsD.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Owen Wilson",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/op8sGD20k3EQZLR92XtaHoIbW0o.jpg",
        },
        {
          adult: false,
          gender: 1,
          id: 234352,
          name: "Tiffany Haddish",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/Avmv1YY7Qscz0TyWxhqFoS7BO5f.jpg",
        },
        {
          adult: false,
          gender: 2,
          id: 234352,
          name: "Danny DeVito",
          profile_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/uLW4Y9yjtwxtVmcJfwHZ7sKJai4.jpg",
        },
      ],
    },
  ];
  res.json(teamAData);
});

module.exports = router;
