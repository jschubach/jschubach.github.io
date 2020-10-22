// data for reading- array of objects
function initData() {

database = [
    {
      datatype: 'projects',
      name: 'Broni School',
      author: 'Aldo Rossi',
      context: 'Middle school constructed 1979',
      analysis: 'Placement of a special space at the center of a courtyard plan creates four clusters. Approach from grove, step into a passage with steps, emerge into ampitheater with light from above. Move across court into the single-loaded square plan.',
      thumbnail: ['assets/database/broni-thumb.jpg'],
      image: ['assets/database/broni-01.jpg'],
      sources: ['https://www.domusweb.it/en/events/istanbul-design-biennial/gallery/2018/09/17/middle-school-in-broni-by-aldo-rossi-with-gianni-braghieri-1979-1982.html'],
      // compare: ["example 1", "example 2"]
      tags: ["Courtyard Buildings", "Sequences"]
    },{
      datatype: 'sites',
      name: 'A Note On Site',
      author: '',
      context: 'The selection of the site is going to determine the available source material to make form, quality, and identity with paradox: it will determine the specific functional problem I need to solve (for example, adding more classrooms quickly or how to make outdoor rooms, how to provide a beacon to a tough community, how to make a building also function as a community center) as well as the available symbols (towers in New England, water-towers in New York)',
      analysis: 'Permitting variegation and difference in detailing goes along with permitting variegation and difference in types of spaces and conveying an ethos of non-conformity to students.',
      // image: ['assets/database/scaffold-01.jpg', 'assets/database/scaffold-02.jpg', 'assets/database/scaffold-03.jpg'],
      // compare: ["example 1", "example 2"]
      tags: ["Paradoxes"]
    },{
      datatype: 'spacetypes',
      name: 'Classroom',
      author: 'Francis Kere',
      context: 'Projects deploy consistent architectural elements: Primary School & Extension in Gando, Secondary in Dano, Opera Village, and Lycee Schorge Secondary',
      analysis: 'The Kere projects are a delight to look at because (unlike in schools in the US) every single part of the architecture plays an important functional AND expressive role. The space between classrooms and the unification of the separate rooms under one roof adds another space for free, part breezeway, part room. Undulation of the roof plane and removal of bricks as strategies for ventilation connote community',
      image: ['assets/database/classroom-kere-01.jpg'],
      sources: ['http://www.arquitecturaviva.com/en/Info/News/Details/9376 (D. Schwartz/Gran Horizonte Medios)'],
      tags: ["Minimal Treatments", "Ornamental Infrastructures", "Incremental Costs"]
    },{
      datatype: 'sites',
      name: 'Chinatown/Quincy Upper',
      author: '',
      context: 'Site purchased from church for Quincy Upper School',
      analysis: 'Boredom of the highway, existing school on adjacent lot',
      image: ['assets/database/sites-ct-01.png'],
      sources: ['https://www.wbur.org/edify/2019/05/21/build-bps-facilities-overhaul',' https://www.google.com/maps/place/249+Harrison+Ave,+Boston,+MA+02111/@42.3473725,-71.0640351,347m/data=!3m1!1e3!4m5!3m4!1s0x89e37a70c03e306f:0x6b0e993c396ea5e6!8m2!3d42.347282!4d-71.0632873'],
      // tags: ["Minimal Treatments", "Ornamental Infrastructures", "Incremental Costs"]
    },{
      datatype: 'words',
      name: 'A Place to Go After School?',
      author: 'Problem',
      context: 'Helpful for both parents and kids. In California these spaces can be outside, but in Boston climate requires something inside, but school budgets dictate that a fully conditioned space would likely be impractical.',
      analysis: 'How can the school be zoned such that some parts can remain open and powered, minimally staffed and minimally conditioned, while other parts are closed?',
      // image: ['assets/database/site-chinatown-01.jpg'],
      // sources: ['https://www.google.com/maps/place/249+Harrison+Ave,+Boston,+MA+02111/@42.3473725,-71.0640351,347m/data=!3m1!1e3!4m5!3m4!1s0x89e37a70c03e306f:0x6b0e993c396ea5e6!8m2!3d42.347282!4d-71.0632873'],
      // tags: ["Minimal Treatments", "Ornamental Infrastructures", "Incremental Costs"]
    },{
      datatype: 'sites',
      name: 'East Boston',
      author: '',
      context: 'Site purchased for development of a new elementary school in East Boston',
      analysis: 'Boredom of the highway, existing school on adjacent lot',
      image: ['assets/database/sites-eb-01.png'],
      sources: ['https://eastietimes.com/2019/05/23/bps-to-reconfigure-schools-by-2021/'],
      // tags: ["Minimal Treatments", "Ornamental Infrastructures", "Incremental Costs"]
    },{
      datatype: 'words',
      name: 'Flexibility for the District',
      author: 'Problem',
      context: 'The BPS District is constantly shifting schools from one building to another. Some schools are closed and kids get bused to other disticts, other schools are switched from middle school to high school or elementary. The district is in the process of entirely dissolving middle schools (and adding them instead to middle and high schools).',
      analysis: 'Because of this continual shifting in existing facilities, new schools cannot just be an investment in new whiteboards, atria, or reconfigurable spaces. These will soon be outdated (or be perceived as siphoning money away from struggling schools). New schools need to be an investment in good spaces that can serve as primary, middle, and HS classrooms.',
      // image: ['assets/database/site-chinatown-01.jpg'],
      // sources: ['https://www.google.com/maps/place/249+Harrison+Ave,+Boston,+MA+02111/@42.3473725,-71.0640351,347m/data=!3m1!1e3!4m5!3m4!1s0x89e37a70c03e306f:0x6b0e993c396ea5e6!8m2!3d42.347282!4d-71.0632873'],
      // tags: ["Minimal Treatments", "Ornamental Infrastructures", "Incremental Costs"]
    },{
      datatype: 'words',
      name: 'Access',
      author: 'Problem',
      context: '"One in four stakeholders (parents, students, staff) reported that they lack a library, an art room, or a science/computer lab. 1/2 of schools had staff and space for a library last year. Some schools are closed and kids get bused to other disticts, other schools are switched from middle school to high school or elementary. The district is in the process of dissolving middle schools (and adding a 6th grade to 17 different schools).',
      analysis: 'Would it be possible to make these facilities accessible more widely to the distict? As a response to what the reports call "aging facilities", Marty Walsh promises $1B to BuildBPS. Construction of Dearborn STEM (exceptional "Architecture" with a $70M price tag), Renovation of Boston Arts Academy (without specific quality but with a $125M price tag) while Mattapan Elementary closes gives communities the impression that "the schools that are getting the money are not the schools that serve all the kids." Are there low cost strategies for improving the spaces or ways to network the improved spaces?',
      // image: ['assets/database/site-chinatown-01.jpg'],
      sources: ['https://www.wbur.org/edify/2017/01/18/walsh-promises-1-billion-buildbps', ' https://www.wbur.org/edify/2016/11/17/mattahunt-closure-bps-committee-vote', 'https://btu.org/media-watch/two-new-boston-school-buildings-on-the-horizon-as-17-schools-add-sixth-grade/'],
      // tags: ["Minimal Treatments", "Ornamental Infrastructures", "Incremental Costs"]
    },{
      datatype: 'words',
      name: 'Schools Within a School',
      author: 'Problem',
      context: 'The exploding elementary school population in the district, and the contracting middle school population, has resulted in initatives to dissolve middle schools into existing elementary and high schools.',
      analysis: 'This might be a quality giving architectural problem - how to make that feel safe for the young kids, how to create different experiences in the school for kids as they age, how to make them see back at their past selves? How to create one building that can function as parts or as a whole? Then maybe one of these buidings can be used during the summer or after school when the other is not, or it is zoned to alleviate staffing and conditioning needs that would be impossible for the school to assume otherwise.',
      // image: ['assets/database/site-chinatown-01.jpg'],
      // sources: ['https://www.google.com/maps/place/249+Harrison+Ave,+Boston,+MA+02111/@42.3473725,-71.0640351,347m/data=!3m1!1e3!4m5!3m4!1s0x89e37a70c03e306f:0x6b0e993c396ea5e6!8m2!3d42.347282!4d-71.0632873'],
      // tags: ["Minimal Treatments", "Ornamental Infrastructures", "Incremental Costs"]
    },{
      datatype: 'words',
      name: 'Seasonality',
      author: 'Problem',
      context: 'Schools operate on a strict schedule of seasonal activation. A single day of school also operates on a strict schedule of class-times and passing periods.',
      analysis: 'It is going to be necessary to consider the different states of spaces in the school schedule. How can this provide an engine of expression to the project? A building that can bloom throughout the season, with some spaces conditioned and others unconditioned',
    },{
      datatype: 'spacetypes',
      name: 'Modular Roof',
      author: 'Louis Kahn',
      context: 'Trenton Baths. Open-air locker room realized in 1955',
      analysis: 'Plastic expression of the roof makes space over voids. Only the roof, exonerated of walls, supported by only expanded columns, creates space in the project',
      image: ['assets/database/trenton-01.jpg'],
      sources: ['https://plans-sections-diagrams.tumblr.com/post/98150516209/louis-kahn-trenton-bath-house-1955'],
      tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'details',
      name: 'Chainlink Fence',
      author: 'dePaor',
      context: 'A shiny and diaphanous material used to make an industrial barrier',
      analysis: 'Creasing it along the diagonal makes it glitter and generates opacity on the oblique',
      thumbnail: ['assets/database/chainlink-01.jpg'],
      image: ['assets/database/chainlink-02.jpg'],
      sources: ['https://www.depaor.com/projects/a13-fence.php'],
      tags: ["Rough but Elegant", "Ornamental Infrastructures"]
    },{
      datatype: 'atmospheres',
      name: 'Passing Period',
      author: ' ',
      context: 'Block of time and space BETWEEN classes. Rush of traffic, whole school collides in the hallway. Respite from the regimented ritual of the classroom.',
      analysis: 'Is this the temporal corollary of the Rem ideal of Freedom? Space in the schedule that is unprogrammed and does not necessarily take place in the classroom?',
    },{
      datatype: 'spacetypes',
      name: 'Totalizing Roof',
      author: 'Francis Kere',
      context: 'The strategy of the roof in Kere projects thus creates identity, passive conditioning (via a plenum), and breezeway spaces for free.',
      analysis: 'The architectural prominence of the roof and its tenuous and delicate structure give it a striking quality in the context of the TYP municipal architecture in the US',
      thumbnail: ['assets/database/roof-kere-02.jpg'],
      image: ['assets/database/roof-kere-01.jpg'],
      sources: ['http://www.arquitecturaviva.com/en/Info/News/Details/9376 (D. Schwartz/Gran Horizonte Medios)'],
      tags: ["Novel Forms that Perform", "Ornamental Infrastructures", "Rough but Elegant"]
    },{
      datatype: 'projects',
      name: 'Kunsthal II',
      author: 'OMA',
      context: 'Counter-point to the Architecture Museum (Void, Floating, random-anti-grid destabilizes a regular form). Seed of several OMA tropes.',
      analysis: 'Trajectory through spaces and views that generate the feeling of deja-vu. Slightly tilted columns, slanted ramps, and surreptitious slits of skylights help to create the feeling that something is slightly off',
      thumbnail: ['assets/database/kunsthal-thumb.jpg'],
      image: ['assets/database/kunsthal-01.jpg'],
      sources: ['SMLXL, Monacelli, (R. Koolhaas, B. Mau) p. 431-473'],
      tags: ["Surrealisms", "Distortions"]
    },{
      datatype: 'atmospheres',
      name: 'Defects (Real Diversity?)',
      author: ' ',
      context: 'Is it possible to begin with these "defective" materials (or tendencies towards different performance) in order to generate form and tectonics? (An ethos that opposes standardized testing and the architectural compulsion to create identicality)',
      analysis: 'Perhaps this would be a truer understanding of diversity than through a hodgepodge collection of sameness.',
      image: ['assets/database/defect-01.jpg'],
      sources: ['https://www.homedepot.com/c/ab/types-of-lumber/9ba683603be9fa5395fab90567851db'],
      tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'spacetypes',
      name: 'Lunchroom',
      author: ' ',
      context: 'Often used for multiple purposes, only one of which is lunch. This space needs a long span, and often creates blank walls on the exterior of the school.',
      analysis: 'What gives specificity to the "multi-purpose room?" How should this space relate to the rest of the program?',
      // image: ['assets/database/image2.jpg']
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'spacetypes',
      name: 'Gym',
      author: ' ',
      context: ' ',
      analysis: ' ',
      // image: ['assets/database/image2.jpg']
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'spacetypes',
      name: 'Grounds/Sports Fields',
      author: ' ',
      context: ' ',
      analysis: ' ',
      // image: ['assets/database/image2.jpg']
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'atmospheres',
      name: 'Grids',
      author: ' ',
      context: 'Memories from a school: seeing a wavering figure in gym class against the grid of CMU',
      analysis: ' ',
      // image: ['assets/database/image2.jpg']
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'words',
      name: 'Working with the Defect',
      author: 'Possible Concept',
      context: 'The idea of the "defect" - or the tendency of a material toward one kind of behavior - is beautifully appropriate to the school, whose pedagogy I think should embrace differences between students instead of seeking to manufacture identicality amongst them.',
      analysis: 'Permitting variegation and difference in detailing goes along with permitting variegation and difference in types of spaces and conveying an ethos of non-conformity to students.',
      // image: ['assets/database/scaffold-01.jpg', 'assets/database/scaffold-02.jpg', 'assets/database/scaffold-03.jpg'],
      // compare: ["example 1", "example 2"]
      tags: ["Paradoxes"]
    },{
      datatype: 'details',
      name: 'Warping',
      author: 'Alvar Aalto',
      context: 'Extreme temperature variation has this effect on the marble cladding of Finlandia hall.',
      analysis: 'The defective cladding becomes more textured and beautiful than the original installation. Can slack in detailing be one possible way to create texture in American architecture (since cheap labor and craft are out of the question)?',
      image: ['assets/database/aalto-01.jpg', 'assets/database/aalto-02.png'],
      sources: ['https://www.researchgate.net/figure/Part-of-the-old-marble-facade-on-Finlandia-Hall-in-1999-Photo-by-Elmar-Tchegg_fig4_26524248)', ' http://hicarquitectura.com/2015/10/oriol-vano-cavaa-viaje-a-finlandia/'],
      tags: ["Paradoxes", "Leveraged Flaws", "Minimal Treatments"]
    },{
      datatype: 'details',
      name: 'Celebrated Reveals',
      author: 'Herzog & de Meuron / FT Architects',
      context: 'Exposing the composition of the interior',
      analysis: 'How to reveal systems that are usually concealed and use them for expressive ends? For the Laban Center, the envelope makes the architecture behind one of the dancers behind a curtain of the facade. For the photo studio, the turning inside out of the building is suited to the brief of a photostudio',
      image: ['assets/database/celebrated-reveals-02.jpg','assets/database/celebrated-reveals-01.jpg'],
      sources: ['https://larryspeck.com/photography/laban-centre-for-contemporary-dance/', ' '],
      tags: ["Minimal Treatments"]
    },{
      datatype: 'details',
      name: 'Perfect Imperfection',
      author: 'Alejandro Aravena',
      context: 'Reuse that embraces the existing imperfection',
      analysis: 'How to recast the existing into something new?',
      image: ['assets/database/perfect-imperfect-01.jpg', 'assets/database/perfect-imperfect-02.jpg'],
      sources: [''],
      tags: ["Paradoxes", "Leveraged Flaws", "Minimal Treatments"]
    },{
      datatype: 'details',
      name: 'Industry & Idiosyncrasy',
      author: 'Manthey Kula',
      context: 'How to use industrial processes to make something idiosyncratic?',
      analysis: 'The production of an exception in this way requires fewer instances to pack punch',
      image: ['assets/database/idio-industrial-01.jpg', 'assets/database/idio-detailing-01.jpg'],
      sources: [''],
      tags: ["Paradoxes", "Leveraged Flaws", "Minimal Treatments"]
    },{
      datatype: 'details',
      name: 'Flexibilty and Expansion',
      author: ' ',
      context: 'The metaphor of the wooden water tower. When filled, the planks swell to contain the water, making cheap and untreated tank.',
      analysis: 'How to create something that will peform better when it swells/serves its function over time?',
      image: ['assets/database/changing-01.jpg'],
      sources: [''],
      tags: ["Paradoxes", "Leveraged Flaws", "Minimal Treatments"]
    },{
      datatype: 'atmospheres',
      name: 'Detention',
      author: ' ',
      context: 'Sitting silently in a classroom with the clock ticking, waiting',
      analysis: 'Only things to look at are the desk, the ceiling, the window, the board. The classroom space is being used not to hold a group but an individual (a different state and function for the same space)',
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'sites',
      name: 'Brookline',
      author: '',
      context: 'Historic growth occuring in the PS Brookline system: the K-8 system has grown by 41% between 2006 and 2018. Strategies to deal with this have included "Expand-in-Place" (subdivision of existing classrooms, adding portable buildings) as well as studying potential sites for a new elementary school. "Since 2005, Brookline has experienced historic enrollment growth in its public schools. The K-8 elementary schools have grown by 41% going from 3,904 students in 2006 to 5,503 students in 2018, which is equivalent to adding three schools into our existing schools in just over 10 years. For a decade now, the Town and School Department has been addressing the expanding student population by studying potential sites for a new elementary school and by adding classrooms to existing schools by dividing classrooms; converting offices, locker rooms, and hallways into classrooms; renting private buildings; and building new classrooms or adding modular classes. Despite adding nearly 60 classrooms to our existing schools through this “Expand-in-Place” strategy, the schools continue to be severely overcrowded."',
      analysis: 'Would the necessity of adding new classrooms to constricted site be a helpful engine for a project?',
      sources: ['https://www.brookline.k12.ma.us/pierce-project'],
      image: ['assets/database/sites-brookline-01.png', 'assets/database/sites-brookline-02.png'],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes"]
    },{
      datatype: 'projects',
      name: 'Instability',
      author: 'Frida Escobedo',
      context: 'An installation in a square that creates a platform for a shared experience of instability',
      analysis: 'The paradox in the project is an unstable platform. The OSB surface is nicely subdivided with diamonds to appear faceted like its underside (the property which enables the instability)',
      thumbnail: ['assets/database/instability-01.png'],
      image: ['assets/database/instability-02.jpg'],
      sources: ['https://www.designboom.com/architecture/civic-stage-by-frida-escobedo-12-03-2013/', ' https://www.detailerssimon.com/frida-escobedo-un-recorrido-por-su-obra/'],
      tags: ["Paradoxes", "Budget Glamour"]
    },{
      datatype: 'sites',
      name: 'Allston',
      author: '',
      context: 'There are more vacancies in this district than students. Strip mall and big-box store heaven. The school district website has an impressively generic, start-up-like description of the school system. Could this provide the context of boredom in which wonder and strangeness can become an antidote to sameness and a culture of conformity?',
      analysis: 'Could this somehow be an engine for the project?',
      image: ['assets/database/sites-allston-01.png'],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes"]
    },{
      datatype: 'words',
      name: 'Instrument of Reflection',
      author: 'Possible Concept',
      context: 'We remember spaces from our youth as vast, we return to them and they are smaller than we remembered',
      analysis: 'Is it possible that the project can allow students to "look back" at themselves, that the building can become an instrument for that kind of reflection and registration of growth and change?',
      // tags: ["Paradoxes", "Rough but Elegant"]
    },{
      datatype: 'standards',
      name: 'Good or No Good?',
      author: ' ',
      context: 'Finally answering the question of why I like the things that I like',
      analysis: 'Something good uses the challenges and opportunities provided to give form, quality, identity, and ingenuity to a project.',
      tags: ["Paradoxes", "Layers Revealed"]
    },{
      datatype: 'standards',
      name: 'Rubric',
      author: ' ',
      context: 'Expansion on how to use the challenges and opportunities provided to give form, quality, identity, and ingenuity to a project',
      analysis: 'INGREDIENTS: 1) a functional and/or programmatic ambition, 2) an urban ambition, 3) a sensibility that comes from the brief, 4) an inventive and appropriate tectonic, 5) a result that through architecture enlarges that the current space of possibilities (a disciplinary ambition)',
      tags: ["Paradoxes", "Layers Revealed"]
    },{
      datatype: 'sites',
      name: 'Jamaica Plain/West Roxbury',
      author: '',
      context: 'Sliced by railroad tracks, and in the midst of industrial buildings, these sites will provide the constraint that the building also serve as an inspiring community center and a beacon from afar.',
      analysis: 'But does this kind of site get dicey in terms of gentrication?',
      image: ['assets/database/sites-jp-01.png', 'assets/database/sites-jp-02.png'],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes"]
    },{
      datatype: 'standards',
      name: 'Invention',
      author: ' ',
      context: 'If form is a set of intertwined (usually physical) relations condensed into the most efficient whole...',
      analysis: '...Invention in architecture is a form discovered through the pursuit of a (paradoxical) question and the earnest engagement with a cocktail of contextual factors. Out of this engagement with specificity comes something that speaks universally and enlarges our conception of what is possible',
      // tags: ["Paradoxes", "Layers Revealed"]
    },{
      datatype: 'projects',
      name: 'Villa Alem',
      author: 'Valerio Olgiati',
      context: 'Private Home in Portugal with a large and vegetated courtyard',
      analysis: 'How to make separate worlds spin off of a corridor? How to amplify the contrast between enclosed and open?',
      image: ['assets/database/alem-01.png', 'assets/database/alem-02.jpg', 'assets/database/alem-03.jpg', 'assets/database/alem-04.jpg'],
      sources: ['https://www.architectural-review.com/buildings/domus-conclusus-villa-alem-in-alentejo-portugal-by-valerio-olgiati (Archive Olgiati)'],
      // compare: ["example 1", "example 2"]
      tags: ["Corridor Projects", "Courtyard Buildings"]
    },{
      datatype: 'words',
      name: 'Pinned to Allow for Change',
      author: 'Possible Concept',
      context: 'The marble cladding on Finlandia hall contracts and expands because it is pinned only at two ends. Rem Koolhaas deploys a similar physical method in the plan for Melun-Senart, where development is pinned at the ends of the forest to protect the pristine tract of land onto which OMA is contracted to plan future development (a defensive move).',
      analysis: 'Can the thesis play with the idea that to allow variable change within a system, the inevitable expansion and contraction, some things must be pinned while others can move freely?',
      tags: ["Paradoxes"]
    },{
      datatype: 'words',
      name: 'The Space Above the Ceiling',
      author: 'Possible Concept',
      context: 'Most classrooms have the banal ACT ceiling - a canvas for pens and pencils, spitballs, and gum supported by a ceiling grid.',
      analysis: 'What is the back behind that surface like? What is it like to be behind the panels and inside the mystery of the grid?',
      tags: ["Rescalings/Distortions", "Celebrated Reveals"]
    },{
      datatype: 'words',
      name: 'Mundane & Strange',
      author: 'Abstract from Spring',
      context: 'Architecture is the medium that has the possibility to put the mundane and the strange into dialogue.',
      analysis: 'How can architecture reintroduce recognizable strangeness into our lives? (Which today seem to be so numbingly normal or so strange that it becomes normal). There is such blinding "diversity" available on Instagram that no one can even see the differences anymore or the monoculture produced by the consumption of hollow visuals and targeted ads. There is so much strangeness to living inside a disaster that it becomes normalized and we become accustomed to checking the news only to see that the world is ending)',
      // tags: ["Paradoxes", "Layers Revealed"]
    },{
      datatype: 'projects',
      name: 'Paspels',
      author: 'Valerio Olgiati',
      context: 'Primary School, 2001, Switzerland. How to give the hallway autonomy and make the corridor experiential?',
      analysis: 'Creates a monster out of the hallway, making it a space while giving each room its own view and each elevation its own proportions.',
      image: ['assets/database/paspels-01.jpg'],
      sources: ['http://aliceblogs.epfl.ch/years/y5_2015-16/studios/pdm/tag/5-work-in-progress (Clarisse Mauboussin)'],
      tags: ["Distortions", "Corridor Projects"]
    },{
      datatype: 'projects',
      name: 'Fagnano Olona',
      author: 'Aldo Rossi',
      context: 'Primary school built in 1972.',
      analysis: 'How to merge the scale of the houses in the town and the scale of the factory buildings at the back? How to organize a sequence of experiences into a totality?',
      // additional: '"In the Fagnano Olona school a series of elements, which in other projects had been divided, reunited, and approached in linear terms by means of a street, a bridge, a wall... were organised around a central court. The resulting enclosed square became the basic form of the building. This square is composed of two levels connected by a wide flight of steps with the gymnasium above. As in the central section of the project for the Modena Cemetery a skeletal image emerges from the plan. I cannot make out how much this design will be apparent to a person inside the school itself but certainly all the main elements, including the conical chimney, can be seen from the enclosure at the center. I have always imagined this central space a red colour; it can be lined with either brick tiles or porphyry. Moreover, the walls of the courtyard will have the same large cross-mullioned windows that characterise the external facade." Aldo Rossi',
      thumbnail: ['assets/database/fagnano-thumb.jpg'],
      image: ['assets/database/fagnano-01.jpg'],
      sources: ['https://en.wikiarquitectura.com/building/fagnano-olona-elementary-school/'],
      // compare: ["example 1", "example 2"]
      tags: ["Courtyard Buildings", "Surrealisms"]
    },{
      datatype: 'spacetypes',
      name: 'Corridor',
      author: ' ',
      context: 'Usually this space is dark, filled with lockers, and changes drastically depending on whether it is filled by an individual in the hallway with a bathroom pass or a flood of students pushing past each other just before the bell rings or while classes are switching.',
      analysis: 'Any school project must confront the corridor. How to give it light? How to make it structure experience instead of just provide a route from point A to point B? How are things sequenced along it? How does it differ in quality from the thing that extends off of it?',
      // image: [assets/database/cmu-01.jpg, assets/database/cmu-02.jpg],
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'spacetypes',
      name: 'Breezeway',
      author: ' ',
      context: 'The covered exterior corridor. Used in schools in California and also in Washington State.',
      analysis: 'Rossi skillfully uses the breezeway as a mystical passage from one space to the next.',
      // image: [assets/database/cmu-01.jpg, assets/database/cmu-02.jpg],
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'projects',
      name: 'Lycee Scourge',
      author: 'Francis Kere',
      context: 'How to use the gaps in between to do something (in this case ventilate and give identity?) ',
      analysis: 'How could this layering of conditioned and unconditioned spaces be made to happen in Boston? Is it possible to devise a strategy for adding many classrooms in Brookline that would add an extra space for free?',
      thumbnail: ['assets/database/kere-schourge-thumb.jpg'],
      image: ['assets/database/kere-schourge-01.gif'],
      sources: ['https://www.archdaily.com/885677/lycee-schorge-secondary-school-kere-architecture', 'http://www.kere-architecture.com/projects/lycee-schorge-secondary-school/'],
      tags: ["Thrify Glamour", "Courtyard"]
    },{
      datatype: 'spacetypes',
      name: 'Ceiling',
      author: ' ',
      context: 'Commonly a cheap ceiling grid with hung acoustic tiles painted with pencil marks and spitballs.',
      analysis: 'Francis Kere uses the ceiling to get ventilation and light into the space. Is there anything more that can be done functionally, architecturally, or experientially with the ceiling in the classroom that would work with the prosiac system of ACT instead of trying to replace it with a bespoke alternative?',
      // image: [assets/database/cmu-01.jpg, assets/database/cmu-02.jpg],
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'standards',
      name: 'Physical Models',
      author: ' ',
      context: 'The physical model, which has trended towards serving as a representation of the hyper-real space of the project, furnished with fussy tectonics, this semester will triumph in the realm of abstraction.',
      analysis: 'The goal during thesis is to use models as an abstract tool to test the quality of space and overall strength of the scheme (and asa decision making tool when faced when facing pixel-induced paralysis)',
      image: ['assets/database/model-sample-01.jpg','assets/database/model-sample-02.jpg'],
      sources: ['https://www.archdaily.com/894702/francis-kere-to-design-new-pine-log-pavilion-for-tippet-rise-art-center/5afdb8e1f197ccb203000111-francis-kere-to-design-new-pine-log-pavilion-for-tippet-rise-art-center-image?next_project=no'],
      // compare: ["example 1", "example 2"]
    },{
      datatype: 'details',
      name: 'Knowlton SoA',
      author: 'Scogin Elam',
      context: 'Requirement from donor for a marble facade and display of columns showing the four orders',
      analysis: 'The response is the marble shakes which represent the idiosyncrasy of the individual within the collective and the framing of the columns like a page.',
      image: ['assets/database/knowlton-01.jpg'],
      sources: ['https://www.archdaily.com/129400/austin-e-knowlton-school-of-architecture-mack-scogin-merrill-elam-architects?ad_medium=gallery (Timothy Hursley)'],
      // compare: ["example 1", "example 2"]
      tags: ["New Forms that Perform", "Foreigners"]
    },{
      datatype: 'standards',
      name: 'Judgment',
      author: ' ',
      context: 'All projects need to be judged by their ability to translate their intentions and questions into form. See definition of form.',
      analysis: 'The skill of architecture is not in the setting out of the narrative or the invention of a "new" concept, but in the skillful translation between media (model, drawing, structure, space, experience, publishing) of a set of original intentions. (Both translation and the improvisational skill of doing it live with what is available)',
      // tags: ["Paradoxes", "Layers Revealed"]
    },{
      datatype: 'details',
      name: 'Concrete Block',
      author: 'Frida Escobedo',
      context: 'Temporary installation in El Eco. CMU units could be removed by visitors for their own projects. Blocks must be piled and laid on the diagonal in order to give a distinctive enough initial form before the anarchic process can take over.',
      analysis: 'How to make spaces with removal?',
      image: ['assets/database/cmu-01.jpg'],
      sources: ['https://fridaescobedo.com/project/pabellon-eco/ (Rafael Gamo)'],
      // compare: ["example 1", "example 2"]
      tags: ["Thrify Glamour", "Celebrated Reveals", "Field"]
    },{
      datatype: 'words',
      name: 'Specification & Narrative',
      author: 'Presentation Idea',
      context: 'The aim of architecture is to make from units and dimensions an experience that transcends them.',
      analysis: 'Would it make sense to present the project as a list of technical information and to show only the episodes that play out within, or vice versa?',
      // image: ['assets/database/cmu-01.jpg'],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'spacetypes',
      name: 'Conditioning',
      author: ' ',
      context: 'Do all parts of a building need to be artificially conditioned? Projects by Kere and Lacaton and Vassal have made naturally ventilated buildings in France and Burkina Faso. Could this be made to work in Boston?',
      analysis: 'Is it possible to make spaces that are unconditioned overall and conditioned at a smaller scale, with a more ad-hoc method of construction that helps preserve the optimum environment? Is there a analagous ethos to conditioned and unconditioned for the school in terms of spaces that are more regulated and other spaces that are freer?',
      // image: [assets/database/cmu-01.jpg, assets/database/cmu-02.jpg],
      // compare: ["example 1", "example 2"]
      tags: ["Space Requirements"]
    },{
      datatype: 'standards',
      name: 'Linear v. Swarm',
      author: ' ',
      context: 'When are projects designed with a sequential logical process, one question that spawns every other decision, versus with a swarming process that eventually knits together the elements that make sense without having worked through them in an entirely linear fashion?',
      analysis: 'A single question probably needs to take priority, then the particular solutions and implementations of the answer to that question can swarm.',
      // image: [assets/database/cmu-01.jpg, assets/database/cmu-02.jpg],
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'words',
      name: 'Flexibility & Freedom',
      author: 'Rem Koolhaas',
      context: '"How to create specificity with indeterminancy...and a relatively stable aesthetic experience?"',
      analysis: '"Flexibility is not the exhaustive anticipation of all possible changes (most changes are unpredictable). Flexibility is the creation of margin - excess capacity that enables different and even opposite interpretations and uses." Explorations into other exegencies as catalysts to the the architectural expression begins with the expression of awkward structure in the Library in Paris and continues with ZKM and Milstein',
      sources: ['SMLXL, Monacelli, (R. Koolhaas, B. Mau) p.921, p. 241'],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'atmospheres',
      name: 'Deja Vu',
      author: '',
      context: 'The surreal sense that you have been somewhere or done something before (from the swimming pool project, and OMAs Kunsthal)',
      analysis: 'Could this same experience be used to set up situations that make the building an instrument of self-reflection?',
      // image: [assets/database/cmu-01.jpg, assets/database/cmu-02.jpg],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'projects',
      name: 'Agadir',
      author: 'OMA',
      context: 'The creation of a field of control with the undulating topography of upper and lower slabs of program',
      analysis: 'A model that manages to be celestial and prosaic at once. Nails used in a model might be appropriate to the school project',
      image: ['assets/database/agadir-01.jpg', 'assets/database/agadir-02.jpg'],
      // compare: ["example 1", "example 2"]
      sources: ['SMLXL, Monacelli, (R. Koolhaas, B. Mau) p. 379-393'],
      tags: ["Field", "Novel Forms that Perform"]
    },{
      datatype: 'projects',
      name: 'Architecture Museum',
      author: 'OMA',
      context: 'The warping of the plan and the tilting of a core - irregular figures with a regular structural system. Compare to Kunsthal.',
      analysis: 'What effect does this regular/irregular juxtaposition create? Could the warping of the plan relate to the expansion and contraction of material at the scale of the detail?',
      image: ['assets/database/omaam-01.jpg', 'assets/database/omaam-03.jpg'],
      sources: ['SMLXL, Monacelli, (R. Koolhaas, B. Mau) p. 405-419'],
      // compare: ["example 1", "example 2"]
      tags: ["Figure", "Distortions"]
    },{
      datatype: 'projects',
      name: 'Cyclicality in Yokohama',
      author: 'OMA',
      context: 'A study of the time of day that particular programs are activated encourages OMA to "invent" additional program to populate the building',
      analysis: 'Could this logic or type of study be used to assist in the seasonal activation of the school?',
      image: ['assets/database/yokohama-01.jpg'],
      sources: ['SMLXL, Monacelli, (R. Koolhaas, B. Mau) p. 1220-1221'],
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'standards',
      name: 'A Lot v. A Little (Field v. Figure)',
      author: '',
      context: 'From the materials research it has become clear that many of the examples I like are field projects. They make something remarkable by adding a lot of it.',
      analysis: 'In the context of a project it becomes important to know which materials are already available for free in vast quantities (multiplication of extrinsic elements will add cost and be cut from the project). If you only have the money and material to make one of something, the best strategy will probably be to make it as distinctive as possible. The more sculptural you make something, the fewer instances of it you need for it to seem remarkable.',
      // tags: ["Paradoxes", "Layers Revealed"]
    },{
      datatype: 'standards',
      name: 'Go v. Rem ',
      author: '',
      context: 'G. seems to hone in on the paradoxical quality of a thing and then to provide an efficient spatialization of it that uses that paradox to give it spatial quality',
      analysis: 'R. has one big dumb idea he tells to the client, many small clever disciplinary ideas, and also seems to be adept at making the paradoxical condition of the project. He does something that in a singular instances would appear to be an awkward mistake, buthe does it enough to form the quality and field of opportunity in the project. His responses are the Baroque to Gs Classical)',
      // tags: ["Paradoxes", "Layers Revealed"]
    },{
      datatype: 'details',
      name: 'Scaffolding',
      author: '',
      context: 'Typically temporary, but could it be made to look like the Doris Saulcedos "Disremembered"?',
      analysis: 'Here the density and diagonal of the scaffold makes it unfamiliar (extra shoring provided to support the load atop it)',
      image: ['assets/database/scaffold-01.jpg', 'assets/database/scaffold-02.jpg', 'assets/database/scaffold-03.jpg'],
      tags: ["Paradoxes", "Rough but Elegant"]
    },{
      datatype: 'standards',
      name: 'Natural v. Effortful',
      author: ' ',
      context: 'OS2 project was deemed "swimming up stream." What are the details and projects that solve paradoxes without an effortful solution? The goal is to become facile at seeing what cannot change about a project/material/brief as quickly as possible.',
      analysis: 'The faster it is detected and accepted, the more quickly it can be embraced as engine for the questions and qualities in the project. But it is important to also quickly be able to see what does not work as a solution (ie squashing portrait and horizontal images into a square grid)',
      // image: ['assets/database/image2.jpg']
      // tags: ["Paradoxes", "Leveraged Flaws"]
    }
  ]
};
