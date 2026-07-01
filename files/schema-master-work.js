/*
  MASTER SCHEMA -- glennhanns.com work (portfolio) page
  ======================================================
  This documents the pattern used for each project card's VideoObject
  block on work.html. Unlike about.html's Person block, this one IS a
  repeatable per-project template -- one block per portfolio entry.

  Every project keeps "VideoObject" as a second @type alongside the
  more specific type below, so nothing about existing thumbnail /
  upload-date / embed-URL rich-result eligibility is lost. It's
  additive, not a replacement.

  STEP 1 -- PICK THE RIGHT @type (in addition to "VideoObject"):

    Movie              Feature-length narrative film.
                        e.g. Moon Rock For Monday, Forbidden Ground,
                        The Room Below.

    TVSeries           A television series, documentary series, or an
                        episode/season of one (schema.org has no
                        dedicated "Miniseries" type -- TVSeries is the
                        closest standard type; use it for the show as
                        a whole, matching how the rest of the site
                        already describes these).
                        e.g. Ron Iddles: The Good Cop, Persons of
                        Interest, Dark Temptations, White Rabbit
                        Project.

    ShortFilm          A short film (schema.org subtype of Movie).
                        e.g. Transitions, Manifestation, The Briefcase,
                        Narci-titus, Bleeders, MiMic.

    MusicVideoObject   A music video. Note: this type ALREADY extends
                        VideoObject on its own, so it replaces
                        "VideoObject" outright rather than sitting
                        alongside it as a second type. Add "byArtist".
                        e.g. Birds of Tokyo 'Wild Eyed Boy', After
                        Touch 'Use Me'.

  STEP 2 -- FILL IN THE TOKENS in the template below:

    PROJECT_TITLE       -- plain text, e.g. Moon Rock For Monday
    EXTRA_TYPE           -- Movie / TVSeries / ShortFilm (omit this
                             step entirely for MusicVideoObject --
                             see note above)
    PROJECT_DESCRIPTION  -- one or two sentences: format/year,
                             director, production company, notable
                             awards. Keep it consistent with the other
                             entries' voice.
                             e.g. "Feature film (2020), directed by
                             Kurt Martin for Lunar Pictures. ACS Gold
                             Award NSW 2021..."
    DIRECTOR_NAME        -- one Person object, or an array of Person
                             objects for co-directors (see Forbidden
                             Ground in work.html for a two-director
                             example).
    PRODUCTION_COMPANY   -- Organization name. Optional -- omit the
                             whole "productionCompany" key if there
                             isn't a clean, stated one (don't guess).
    THUMBNAIL_URL        -- same asset used as the page's thumbnail
                             image.
    EMBED_URL             -- Vimeo player embed URL,
                             e.g. https://player.vimeo.com/video/12345
    VIMEO_URL             -- plain Vimeo watch URL,
                             e.g. https://vimeo.com/12345
    UPLOAD_DATE_ISO       -- ISO 8601 with timezone,
                             e.g. 2020-01-01T00:00:00+10:00
    YEAR                  -- e.g. "2020"
    GENRE                 -- short genre string,
                             e.g. "Feature Film Drama"
    COUNTRY               -- ISO 3166-1 alpha-2, e.g. "AU"

  Everything else stays identical in structure to the worked example
  below.
*/

/* -- FILLABLE TEMPLATE (Movie / TVSeries / ShortFilm) --------------- */

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["EXTRA_TYPE", "VideoObject"],
  "name": "PROJECT_TITLE  -  Cinematography by Glenn Hanns ACS",
  "description": "PROJECT_DESCRIPTION",
  "director": DIRECTOR_NAME,
  "productionCompany": {
    "@type": "Organization",
    "name": "PRODUCTION_COMPANY"
  },
  "thumbnailUrl": "THUMBNAIL_URL",
  "image": "THUMBNAIL_URL",
  "embedUrl": "EMBED_URL",
  "url": "VIMEO_URL",
  "uploadDate": "UPLOAD_DATE_ISO",
  "dateCreated": "YEAR",
  "genre": "GENRE",
  "countryOfOrigin": "COUNTRY"
}
</script>

/* -- FILLABLE TEMPLATE (MusicVideoObject variant) -------------------- */

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MusicVideoObject",
  "name": "PROJECT_TITLE  -  Cinematography by Glenn Hanns ACS",
  "description": "PROJECT_DESCRIPTION",
  "director": DIRECTOR_NAME,
  "byArtist": {
    "@type": "MusicGroup",
    "name": "ARTIST_NAME"
  },
  "thumbnailUrl": "THUMBNAIL_URL",
  "image": "THUMBNAIL_URL",
  "embedUrl": "EMBED_URL",
  "url": "VIMEO_URL",
  "uploadDate": "UPLOAD_DATE_ISO",
  "dateCreated": "YEAR",
  "genre": "Music Video",
  "countryOfOrigin": "COUNTRY"
}
</script>

/* -- WORKED EXAMPLE (live on work.html -- Moon Rock For Monday) ----- */

<script type="application/ld+json">
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
}
</script>
