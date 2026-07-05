/**
 * SCHEMA MASTER — WORK (per-project VideoObject templates)
 * Reference only. DO NOT DEPLOY LIVE — keep outside /glennhanns publish dir.
 *
 * Person + WebSite schema is NOT included here by design — that lives
 * exclusively in schema-master-about.js / about.html. Do not re-add a
 * Person or WebSite block to work.html.
 *
 * TYPE DECISION TREE — pick @type based on project category:
 *   Feature film (dramatic, theatrical/streaming release) -> ["Movie", "VideoObject"]
 *   TV series / documentary series / episodic          -> ["TVSeries", "VideoObject"]
 *   Short film (any genre, standalone)                  -> ["ShortFilm", "VideoObject"]
 *   Music video                                         -> "MusicVideoObject"
 *     - include byArtist: { "@type": "MusicGroup" or "Person", "name": ... }
 *   TV documentary (single/limited, not episodic series) -> ["TVSeries", "VideoObject"]
 *     (site convention — matches existing Ron Iddles / Persons of Interest entries)
 *
 * REQUIRED FIELDS on every entry:
 *   name (format: "{Title}  -  Cinematography by Glenn Hanns ACS")
 *   description, director, thumbnailUrl, image, embedUrl, url,
 *   uploadDate, genre, countryOfOrigin: "AU"
 *   dateCreated only where uploadDate's year alone is ambiguous (optional)
 *
 * VIMEO IDS — always confirm from the actual player.vimeo.com embed code.
 * The vimeo.com/user4680006/[id]?share=copy share-dialog link is NOT
 * the raw embeddable ID.
 *
 * Last synced from live work.html: 2026-07-04
 */

const SCHEMA_MASTER_WORK_PROJECTS = [
  {
    "@context": "https://schema.org",
    "@type": [
      "Movie",
      "VideoObject"
    ],
    "name": "Moon Rock For Monday  -  Cinematography by Glenn Hanns ACS",
    "description": "Feature film (2020), directed by Kurt Martin for Lunar Pictures. ACS Gold Award NSW 2021, ACS Award of Distinction Nationals 2022, AACTA Nominee Best Cinematography.",
    "director": {
      "@type": "Person",
      "name": "Kurt Martin"
    },
    "productionCompany": {
      "@type": "Organization",
      "name": "Lunar Pictures"
    },
    "thumbnailUrl": "https://glennhanns.com/assets/images/Moon_Rock_For_Monday/Glenn_Hanns_ACS_DOP_Moon_Rock_For_Monday_1.webp",
    "image": "https://glennhanns.com/assets/images/Moon_Rock_For_Monday/Glenn_Hanns_ACS_DOP_Moon_Rock_For_Monday_1.webp",
    "embedUrl": "https://player.vimeo.com/video/1200048348",
    "url": "https://vimeo.com/1200048348",
    "uploadDate": "2020-01-01T00:00:00+10:00",
    "dateCreated": "2020",
    "genre": "Feature Film Drama",
    "countryOfOrigin": "AU"
  },
  {
    "@context": "https://schema.org",
    "@type": [
      "Movie",
      "VideoObject"
    ],
    "name": "Forbidden Ground  -  Cinematography by Glenn Hanns ACS",
    "description": "WWI feature film (2013), directed by Adrian Powers and Johan Earl, distributed by Lionsgate. ACS Bronze Award NSW & ACT 2013.",
    "director": [
      {
        "@type": "Person",
        "name": "Adrian Powers"
      },
      {
        "@type": "Person",
        "name": "Johan Earl"
      }
    ],
    "productionCompany": {
      "@type": "Organization",
      "name": "Lionsgate"
    },
    "thumbnailUrl": "https://glennhanns.com/assets/images/Forbidden_Ground/Glenn_Hanns_ACS_DOP_Forbidden_Ground_1.webp",
    "image": "https://glennhanns.com/assets/images/Forbidden_Ground/Glenn_Hanns_ACS_DOP_Forbidden_Ground_1.webp",
    "embedUrl": "https://player.vimeo.com/video/272844486",
    "url": "https://vimeo.com/272844486",
    "uploadDate": "2013-01-01T00:00:00+10:00",
    "dateCreated": "2013",
    "genre": "Feature Film Drama",
    "countryOfOrigin": "AU"
  },
  {
    "@context": "https://schema.org",
    "@type": [
      "TVSeries",
      "VideoObject"
    ],
    "name": "Ron Iddles: The Good Cop  -  Cinematography by Glenn Hanns ACS",
    "description": "Television documentary series (2018), directed by John Mavety for FOX/CJZ. ACS Gold Award NSW & ACT 2023, Silver Logie 2019.",
    "director": {
      "@type": "Person",
      "name": "John Mavety"
    },
    "productionCompany": {
      "@type": "Organization",
      "name": "CJZ"
    },
    "thumbnailUrl": "https://glennhanns.com/assets/images/The_Good_Cop/Glenn_Hanns_ACS_DOP_The_Good_Cop_1.webp",
    "image": "https://glennhanns.com/assets/images/The_Good_Cop/Glenn_Hanns_ACS_DOP_The_Good_Cop_1.webp",
    "embedUrl": "https://player.vimeo.com/video/1200059451",
    "url": "https://vimeo.com/1200059451",
    "uploadDate": "2018-01-01T00:00:00+10:00",
    "dateCreated": "2018",
    "genre": "Television Documentary",
    "countryOfOrigin": "AU"
  },
  {
    "@context": "https://schema.org",
    "@type": [
      "Movie",
      "VideoObject"
    ],
    "name": "The Room Below  -  Cinematography by Glenn Hanns ACS",
    "description": "Psychological creature feature (2024), directed by Kurt Martin for Lunar Pictures, starring Alyssa Sutherland and Jonathan Rhys Meyers. North American rights acquired by Uncork'd Entertainment.",
    "director": {
      "@type": "Person",
      "name": "Kurt Martin"
    },
    "productionCompany": {
      "@type": "Organization",
      "name": "Lunar Pictures"
    },
    "thumbnailUrl": "https://glennhanns.com/assets/images/The_Room_Below/Glenn_Hanns_ACS_DOP_The_Room_Below_1.webp",
    "image": "https://glennhanns.com/assets/images/The_Room_Below/Glenn_Hanns_ACS_DOP_The_Room_Below_1.webp",
    "embedUrl": "https://player.vimeo.com/video/1206376100",
    "url": "https://vimeo.com/1206376100",
    "uploadDate": "2024-01-01T00:00:00+10:00",
    "dateCreated": "2024",
    "genre": "Feature Film",
    "countryOfOrigin": "AU"
  },
  {
    "@context": "https://schema.org",
    "@type": [
      "ShortFilm",
      "VideoObject"
    ],
    "name": "Transitions  -  Cinematography by Glenn Hanns ACS",
    "description": "Short film (2022), directed by Zain Ayub. A young Pakistani migrant in Western Sydney loses herself in memories of her wedding day after her husband's passing. Shot on Sony Venice 2 with uncoated Sigma Classic Cine Primes.",
    "director": {
      "@type": "Person",
      "name": "Zain Ayub"
    },
    "thumbnailUrl": "https://glennhanns.com/assets/images/Transitions/Glenn_Hanns_ACS_DOP_Transitions_1.webp",
    "image": "https://glennhanns.com/assets/images/Transitions/Glenn_Hanns_ACS_DOP_Transitions_1.webp",
    "embedUrl": "https://player.vimeo.com/video/1201990320",
    "url": "https://vimeo.com/1201990320",
    "uploadDate": "2022-01-01T00:00:00+10:00",
    "genre": "Short Film Drama",
    "countryOfOrigin": "AU"
  },
  {
    "@context": "https://schema.org",
    "@type": [
      "ShortFilm",
      "VideoObject"
    ],
    "name": "Manifestation  -  Cinematography by Glenn Hanns ACS",
    "description": "Short horror film (2017), directed by Josh Groom for Greenlight Productions. Set in 1994, a couple discover the previous guests of a hotel have forgotten to check out. Shot on Canon C500 with vintage Leica R primes.",
    "director": {
      "@type": "Person",
      "name": "Josh Groom"
    },
    "productionCompany": {
      "@type": "Organization",
      "name": "Greenlight Productions"
    },
    "thumbnailUrl": "https://glennhanns.com/assets/images/Manifestation/Glenn_Hanns_ACS_DOP_Manifestation_1.webp",
    "image": "https://glennhanns.com/assets/images/Manifestation/Glenn_Hanns_ACS_DOP_Manifestation_1.webp",
    "embedUrl": "https://player.vimeo.com/video/1202068614",
    "url": "https://vimeo.com/1202068614",
    "uploadDate": "2017-01-01T00:00:00+10:00",
    "genre": "Short Film Horror",
    "countryOfOrigin": "AU"
  },
  {
    "@context": "https://schema.org",
    "@type": [
      "ShortFilm",
      "VideoObject"
    ],
    "name": "The Briefcase  -  Cinematography by Glenn Hanns ACS",
    "description": "Short mythological film (2015), directed by Kurt Martin. Zeus tracks down Prometheus to an ambiguous era of man. Shot on Canon C500 RAW with Canon CN-E primes, graded to black and white.",
    "director": {
      "@type": "Person",
      "name": "Kurt Martin"
    },
    "thumbnailUrl": "https://glennhanns.com/assets/images/The_Briefcase/Glenn_Hanns_ACS_DOP_The_Briefcase_1.webp",
    "image": "https://glennhanns.com/assets/images/The_Briefcase/Glenn_Hanns_ACS_DOP_The_Briefcase_1.webp",
    "embedUrl": "https://player.vimeo.com/video/1202022318",
    "url": "https://vimeo.com/1202022318",
    "uploadDate": "2015-01-01T00:00:00+10:00",
    "genre": "Short Film",
    "countryOfOrigin": "AU"
  },
  {
    "@context": "https://schema.org",
    "@type": [
      "ShortFilm",
      "VideoObject"
    ],
    "name": "Narci-titus  -  Cinematography by Glenn Hanns ACS",
    "description": "Short film (2015), directed by Kurt Martin. Kevin Milton seeks help for a rare condition preventing him from having normal relationships. Shot on Canon C500 with Canon CN-E primes.",
    "director": {
      "@type": "Person",
      "name": "Kurt Martin"
    },
    "thumbnailUrl": "https://glennhanns.com/assets/images/Narcititus/Glenn_Hanns_ACS_DOP_Narcititus_1.webp",
    "image": "https://glennhanns.com/assets/images/Narcititus/Glenn_Hanns_ACS_DOP_Narcititus_1.webp",
    "embedUrl": "https://player.vimeo.com/video/281914023",
    "url": "https://vimeo.com/281914023",
    "uploadDate": "2015-01-01T00:00:00+10:00",
    "genre": "Short Film",
    "countryOfOrigin": "AU"
  },
  {
    "@context": "https://schema.org",
    "@type": "MusicVideoObject",
    "name": "She Says  -  Cinematography by Glenn Hanns ACS",
    "description": "Music video (2023) for 'She Says', the debut single from Sydney band Wicker Jane (Jackson Perrett and Dax Love), directed by Valentina Iastrebova.",
    "director": {
      "@type": "Person",
      "name": "Valentina Iastrebova"
    },
    "byArtist": {
      "@type": "MusicGroup",
      "name": "Wicker Jane"
    },
    "thumbnailUrl": "https://glennhanns.com/assets/images/Glenn_Hanns_ACS_DOP_18.webp",
    "image": "https://glennhanns.com/assets/images/Glenn_Hanns_ACS_DOP_18.webp",
    "embedUrl": "https://player.vimeo.com/video/1202014958",
    "url": "https://vimeo.com/1202014958",
    "uploadDate": "2023-01-01T00:00:00+10:00",
    "genre": "Music Video",
    "countryOfOrigin": "AU"
  },
  {
    "@context": "https://schema.org",
    "@type": [
      "TVSeries",
      "VideoObject"
    ],
    "name": "Persons of Interest  -  Cinematography by Glenn Hanns ACS",
    "description": "Documentary miniseries (2013), directed by Haydn Keenan for SBS. Explores covert ASIO operations during the Cold War and Australia's post-9/11 counter-terrorism surveillance. Winner of the Walkley Award for Outstanding Journalism.",
    "director": {
      "@type": "Person",
      "name": "Haydn Keenan"
    },
    "productionCompany": {
      "@type": "Organization",
      "name": "Smart Street Films"
    },
    "thumbnailUrl": "https://glennhanns.com/assets/images/Glenn_Hanns_ACS_DOP_18.webp",
    "image": "https://glennhanns.com/assets/images/Glenn_Hanns_ACS_DOP_18.webp",
    "embedUrl": "https://player.vimeo.com/video/1202385829",
    "url": "https://vimeo.com/1202385829",
    "uploadDate": "2013-01-01T00:00:00+10:00",
    "genre": "Documentary",
    "countryOfOrigin": "AU"
  },
  {
    "@context": "https://schema.org",
    "@type": [
      "TVSeries",
      "VideoObject"
    ],
    "name": "Dark Temptations  -  Cinematography by Glenn Hanns ACS",
    "description": "Television drama series episode (2016), directed by John Mavety for Discovery Channel. Shot on Canon C500 with Canon FD primes.",
    "director": {
      "@type": "Person",
      "name": "John Mavety"
    },
    "productionCompany": {
      "@type": "Organization",
      "name": "Discovery Channel"
    },
    "thumbnailUrl": "https://glennhanns.com/assets/images/Dark_temptations/Glenn_Hanns_ACS_DOP_Dark_Temptations_1.webp",
    "image": "https://glennhanns.com/assets/images/Dark_temptations/Glenn_Hanns_ACS_DOP_Dark_Temptations_1.webp",
    "embedUrl": "https://player.vimeo.com/video/1202031250",
    "url": "https://vimeo.com/1202031250",
    "uploadDate": "2016-01-01T00:00:00+10:00",
    "genre": "Television Drama",
    "countryOfOrigin": "AU"
  },
  {
    "@context": "https://schema.org",
    "@type": [
      "TVSeries",
      "VideoObject"
    ],
    "name": "White Rabbit Project  -  Cinematography by Glenn Hanns ACS",
    "description": "Netflix television series (2016), directed by John Mavety. Kari Byron, Tory Belleci and Grant Imahara rank history's greatest inventions, heists and more. Produced by the makers of MythBusters.",
    "director": {
      "@type": "Person",
      "name": "John Mavety"
    },
    "thumbnailUrl": "https://glennhanns.com/assets/images/Glenn_Hanns_ACS_DOP_18.webp",
    "image": "https://glennhanns.com/assets/images/Glenn_Hanns_ACS_DOP_18.webp",
    "embedUrl": "https://player.vimeo.com/video/1201983615",
    "url": "https://vimeo.com/1201983615",
    "uploadDate": "2016-01-01T00:00:00+10:00",
    "productionCompany": {
      "@type": "Organization",
      "name": "Netflix"
    },
    "genre": "Television Series",
    "countryOfOrigin": "AU"
  },
  {
    "@context": "https://schema.org",
    "@type": "MusicVideoObject",
    "name": "Birds of Tokyo 'Wild Eyed Boy'  -  Cinematography by Glenn Hanns ACS",
    "description": "Music video (2009) for Perth rock band Birds of Tokyo, directed by Josh Groom. Winner of the Gold ACS Australian Cinematography Award NSW & ACT  -  Music Clips. Shot on Arriflex 35 III with Zeiss SuperSpeed primes.",
    "director": {
      "@type": "Person",
      "name": "Josh Groom"
    },
    "byArtist": {
      "@type": "MusicGroup",
      "name": "Birds of Tokyo"
    },
    "thumbnailUrl": "https://glennhanns.com/assets/images/Glenn_Hanns_ACS_DOP_18.webp",
    "image": "https://glennhanns.com/assets/images/Glenn_Hanns_ACS_DOP_18.webp",
    "embedUrl": "https://player.vimeo.com/video/281907636",
    "url": "https://vimeo.com/281907636",
    "uploadDate": "2009-01-01T00:00:00+10:00",
    "genre": "Music Video",
    "countryOfOrigin": "AU"
  },
  {
    "@context": "https://schema.org",
    "@type": "MusicVideoObject",
    "name": "After Touch 'Use Me'  -  Cinematography by Glenn Hanns ACS",
    "description": "Music video (2019) for After Touch, directed by Dax Love. Shot on Blackmagic URSA 4.6K with Canon CN-E primes.",
    "director": {
      "@type": "Person",
      "name": "Dax Love"
    },
    "byArtist": {
      "@type": "MusicGroup",
      "name": "After Touch"
    },
    "thumbnailUrl": "https://glennhanns.com/assets/images/Use_Me/Glenn_Hanns_ACS_DOP_After_Touch_Use_Me_1.webp",
    "image": "https://glennhanns.com/assets/images/Use_Me/Glenn_Hanns_ACS_DOP_After_Touch_Use_Me_1.webp",
    "embedUrl": "https://player.vimeo.com/video/281889344",
    "url": "https://vimeo.com/281889344",
    "uploadDate": "2019-01-01T00:00:00+10:00",
    "genre": "Music Video",
    "countryOfOrigin": "AU"
  }
];

module.exports = SCHEMA_MASTER_WORK_PROJECTS;
