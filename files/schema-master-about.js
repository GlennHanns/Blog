/**
 * SCHEMA MASTER — ABOUT (Person + WebSite)
 * Canonical source of truth for Glenn Hanns ACS structured data.
 *
 * DO NOT DEPLOY THIS FILE LIVE. Reference only — kept outside the
 * /glennhanns publish directory. Live copy lives inline in about.html
 * as a single <script type="application/ld+json"> @graph block.
 *
 * Standing rule: this is the ONLY place the Person + WebSite schema
 * should be authored. work.html previously carried its own separate
 * (and divergent) Person + WebSite blocks — that caused the sameAs
 * LinkedIn URL to silently drift out of sync between files. If work.html
 * still has its own Person/WebSite JSON-LD, it should be removed and
 * replaced with nothing (work.html only needs the per-project
 * VideoObject/Movie/TVSeries/ShortFilm/MusicVideoObject entries —
 * see schema-master-work.js).
 *
 * Last synced from live about.html: 2026-07-04
 */

const SCHEMA_MASTER_ABOUT = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://glennhanns.com/#person",
      "name": "Glenn Hanns ACS",
      "alternateName": [
        "Glenn Hanns",
        "DOP",
        "Director of Photography",
        "Cinematographer",
        "DP"
      ],
      "url": "https://glennhanns.com",
      "image": {
        "@type": "ImageObject",
        "url": "https://glennhanns.com/assets/glenn-hanns-acs.webp",
        "width": 800,
        "height": 800
      },
      "jobTitle": "Director of Photography",
      "description": "Glenn Hanns ACS is a Sydney-based Director of Photography and cinematographer with over 20 years of experience across feature film, television drama, documentary and short film. An accredited member of the Australian Cinematographers Society, Glenn has shot for Netflix, Lionsgate, Foxtel, Binge, ABC, SBS and Discovery Channel, and is available for hire across NSW, Australia and internationally.",
      "knowsAbout": [
        "Cinematography",
        "Director of Photography",
        "Visual Storytelling",
        "Feature Film Production",
        "Television Drama Cinematography",
        "Documentary Cinematography",
        "Short Film Cinematography",
        "Camera Systems",
        "Lighting Design",
        "Colour Grading",
        "Look Development",
        "ARRI Alexa",
        "RED Camera Systems",
        "Lens Selection",
        "Shot Composition",
        "Camera Movement",
        "Pre-Production Visual Planning",
        "On-Set Leadership",
        "Camera Department Management",
        "DIT Workflow",
        "LUT Design",
        "Visual Authorship",
        "Australian Film Industry",
        "Independent Film",
        "Streaming Television"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Australian Film Television and Radio School",
        "alternateName": "AFTRS",
        "url": "https://www.aftrs.edu.au"
      },
      "memberOf": {
        "@type": "Organization",
        "name": "Australian Cinematographers Society",
        "alternateName": "ACS",
        "url": "https://www.cinematographer.org.au"
      },
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Masters Degree",
          "recognizedBy": {
            "@type": "EducationalOrganization",
            "name": "Australian Film Television and Radio School",
            "alternateName": "AFTRS",
            "url": "https://www.aftrs.edu.au"
          },
          "name": "Masters in Cinematography with High Achievement"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Professional Accreditation",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Australian Cinematographers Society",
            "alternateName": "ACS",
            "url": "https://www.cinematographer.org.au"
          },
          "name": "ACS Accredited Cinematographer"
        }
      ],
      "award": [
        "2023 Gold ACS Award NSW & ACT - Dramatised Documentaries (Ron Iddles)",
        "2022 Award of Distinction ACS Nationals - Best Feature Film under $2m (Moon Rock For Monday)",
        "2021 Gold ACS Award NSW & ACT - Feature Films under $2m (Moon Rock For Monday)",
        "2021 AACTA Nominee - Best Cinematography (Moon Rock For Monday)",
        "2020 SCHLiNGEL SLM Top Award - Best International Feature Film (Moon Rock For Monday)",
        "2020 ASIN Award - Best Feature Film (Moon Rock For Monday)",
        "2019 Silver Logie - Most Outstanding Factual or Documentary Program (Ron Iddles)",
        "2016 Walkley Award - Outstanding Journalism (Persons of Interest)",
        "2013 Bronze ACS Award NSW & ACT - Feature Films (Forbidden Ground)",
        "2009 Gold ACS Award NSW & ACT - Music Clips (Birds of Tokyo)",
        "2008 Golden Tadpole Nominee - Camerimage, Poland - Student Etudes (Bleeders)",
        "Festival de Cannes - des Antipodes Official Selection (Bleeders)",
        "San Sebastian Film Festival - Official Selection (Bleeders)",
        "Camerimage - Student Etudes Official Selection (Bleeders)"
      ],
      "performerIn": [
        {
          "@type": "Movie",
          "name": "Moon Rock For Monday",
          "image": "https://glennhanns.com/assets/images/Moon_Rock_For_Monday/Glenn_Hanns_ACS_DOP_Moon_Rock_For_Monday_1.webp",
          "dateCreated": "2020",
          "director": {
            "@type": "Person",
            "name": "Kurt Martin"
          },
          "productionCompany": {
            "@type": "Organization",
            "name": "Lunar Pictures"
          },
          "award": "ACS Gold Award NSW & ACT 2021, ACS Award of Distinction Nationals 2022, AACTA Nominee Best Cinematography, SCHLiNGEL SLM Top Award 2020"
        },
        {
          "@type": "Movie",
          "name": "Forbidden Ground",
          "image": "https://glennhanns.com/assets/images/Forbidden_Ground/Glenn_Hanns_ACS_DOP_Forbidden_Ground_1.webp",
          "dateCreated": "2013",
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
          "award": "ACS Bronze Award NSW & ACT 2013"
        },
        {
          "@type": "TVSeries",
          "name": "Ron Iddles: The Good Cop",
          "image": "https://glennhanns.com/assets/images/The_Good_Cop/Glenn_Hanns_ACS_DOP_The_Good_Cop_1.webp",
          "dateCreated": "2018",
          "director": {
            "@type": "Person",
            "name": "John Mavety"
          },
          "productionCompany": {
            "@type": "Organization",
            "name": "FOX/CJZ"
          },
          "award": "ACS Gold Award NSW & ACT 2023, Silver Logie 2019"
        },
        {
          "@type": "TVSeries",
          "name": "Persons of Interest",
          "image": "https://glennhanns.com/assets/images/Glenn_Hanns_ACS_DOP_18.webp",
          "dateCreated": "2013",
          "director": {
            "@type": "Person",
            "name": "Haydn Keenan"
          },
          "productionCompany": {
            "@type": "Organization",
            "name": "SBS"
          },
          "award": "Walkley Award Outstanding Journalism 2016, Melbourne International Film Festival 2013"
        },
        {
          "@type": "Movie",
          "name": "The Room Below",
          "image": "https://glennhanns.com/assets/images/The_Room_Below/Glenn_Hanns_ACS_DOP_The_Room_Below_1.webp",
          "dateCreated": "2026",
          "director": {
            "@type": "Person",
            "name": "Kurt Martin"
          },
          "productionCompany": {
            "@type": "Organization",
            "name": "Lunar Pictures"
          }
        },
        {
          "@type": "ShortFilm",
          "name": "Bleeders",
          "image": "https://glennhanns.com/assets/images/Glenn_Hanns_ACS_DOP_18.webp",
          "dateCreated": "2008",
          "award": "Camerimage Student Etudes Nominee, Festival de Cannes des Antipodes Official Selection, San Sebastian Film Festival Official Selection"
        },
        {
          "@type": "ShortFilm",
          "name": "MiMic",
          "image": "https://glennhanns.com/assets/images/Glenn_Hanns_ACS_DOP_18.webp",
          "dateCreated": "2026"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sydney",
        "addressRegion": "NSW",
        "addressCountry": "AU"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Sydney"
        },
        {
          "@type": "State",
          "name": "New South Wales"
        },
        {
          "@type": "Country",
          "name": "Australia"
        },
        "International"
      ],
      "email": "glenn@glennhanns.com",
      "telephone": "+61421667205",
      "sameAs": [
        "https://www.linkedin.com/in/glennhanns/",
        "https://www.instagram.com/glennhanns_acs/",
        "https://www.youtube.com/@GlennHanns/playlists",
        "https://www.imdb.com/name/nm1771070/"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Glenn Hanns ACS Cinematography",
        "url": "https://glennhanns.com"
      },
      "nationality": {
        "@type": "Country",
        "name": "Australia"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://glennhanns.com/#website",
      "url": "https://glennhanns.com",
      "name": "Glenn Hanns ACS",
      "description": "Portfolio and cinematography journal of Glenn Hanns ACS, Director of Photography based in Sydney, Australia.",
      "inLanguage": "en-AU",
      "author": {
        "@id": "https://glennhanns.com/#person"
      }
    }
  ]
};

module.exports = SCHEMA_MASTER_ABOUT;
