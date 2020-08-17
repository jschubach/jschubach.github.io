// data for reading- array of objects
function initData() {

database = [
    {
      datatype: 'projects',
      name: 'Broni School',
      author: 'Aldo Rossi',
      context: 'Middle school constructed 1979',
      analysis: 'Placement of a special space at the center of a courtyard plan creates four clusters. Approach from grove, step into a passage with steps, emerge into an ampitheater with light entering from above. Move across the courtyard and into corridors of the single-loaded square plan.',
      thumbnail: ['assets/database/broni-01.jpg'],
      image: ['assets/database/broni-03.jpg'],
      sources: ['https://www.domusweb.it/en/events/istanbul-design-biennial/gallery/2018/09/17/middle-school-in-broni-by-aldo-rossi-with-gianni-braghieri-1979-1982.html'],
      // compare: ["example 1", "example 2"]
      tags: ["Courtyard Buildings", "Sequences"]
    },{
      datatype: 'spacetypes',
      name: 'Classroom',
      author: 'Francis Kere',
      context: 'Projects deploy consistent architectural elements: Primary School & Extension in Gando, Secondary in Dano, Opera Village, and Lycee Schorge Secondary',
      analysis: 'Undulation of the roof plane and removal of bricks as strategies for ventilation connote community',
      image: ['assets/database/classroom-kere-01.jpg'],
      sources: ['http://www.arquitecturaviva.com/en/Info/News/Details/9376 (D. Schwartz/Gran Horizonte Medios)'],
      tags: ["Minimal Treatments", "Ornamental Infrastructures", "Incremental Costs"]
    },{
      datatype: 'atmospheres',
      name: 'Free-Period',
      author: ' ',
      context: 'Block of time with no class. For being alone, for leaving campus, for studying, or for mischief',
      analysis: 'Space in the schedule that is unprogrammed and does not necessarily take place in the classroom',
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
      image: ['assets/database/chainlink-01.jpg'],
      sources: ['https://www.depaor.com/projects/a13-fence.php'],
      tags: ["Rough but Elegant", "Ornamental Infrastructures"]
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
      name: 'Defects',
      author: ' ',
      context: 'Diagram from Home Depot lumber information page',
      analysis: 'Is it possible to begin with these "defective" materials (or tendencies towards different performance) in order to generate form?',
      image: ['assets/database/defect-01.jpg'],
      sources: ['https://www.homedepot.com/c/ab/types-of-lumber/9ba683603be9fa5395fab90567851db'],
      tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'spacetypes',
      name: 'Lunchroom',
      author: ' ',
      context: 'Often used for multiple purposes, only one of which is lunch',
      analysis: 'What gives specificity to the "multi-purpose room?"',
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
      datatype: 'atmospheres',
      name: 'Detention',
      author: ' ',
      context: 'Sitting silently in a classroom with the clock ticking, waiting',
      analysis: 'Only things to look at are the desk, the ceiling, the window, the board',
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'projects',
      name: 'Instability',
      author: 'Frida Escobedo',
      context: 'Insert Context here',
      analysis: 'A material is removed',
      thumbnail: ['assets/database/instability-01.png'],
      image: ['assets/database/instability-02.jpg'],
      sources: ['https://www.designboom.com/architecture/civic-stage-by-frida-escobedo-12-03-2013/', ' https://www.detailerssimon.com/frida-escobedo-un-recorrido-por-su-obra/'],
      tags: ["Paradoxes", "Rough but Elegant"]
    },{
      datatype: 'projects',
      name: 'Villa Alem',
      author: 'Valerio Olgiati',
      context: 'Insert Context here',
      analysis: 'A material is removed',
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
      datatype: 'projects',
      name: 'Paspels',
      author: 'Valerio Olgiati',
      context: 'Insert Context here',
      analysis: 'Creates a monster out of the hallway, making it a space while giving each room its own view and each elevation its own proportions.',
      image: ['assets/database/paspels-01.jpg'],
      sources: ['http://aliceblogs.epfl.ch/years/y5_2015-16/studios/pdm/tag/5-work-in-progress (Clarisse Mauboussin)'],
      tags: ["Distortions", "Corridor Projects"]
    },{
      datatype: 'projects',
      name: 'Fagnano Olona',
      author: 'Aldo Rossi',
      context: 'Primary school built in 1972.',
      analysis: 'A material is removed',
      // additional: '"In the Fagnano Olona school a series of elements, which in other projects had been divided, reunited, and approached in linear terms by means of a street, a bridge, a wall... were organised around a central court. The resulting enclosed square became the basic form of the building. This square is composed of two levels connected by a wide flight of steps with the gymnasium above. As in the central section of the project for the Modena Cemetery a skeletal image emerges from the plan. I cannot make out how much this design will be apparent to a person inside the school itself but certainly all the main elements, including the conical chimney, can be seen from the enclosure at the center. I have always imagined this central space a red colour; it can be lined with either brick tiles or porphyry. Moreover, the walls of the courtyard will have the same large cross-mullioned windows that characterise the external facade." Aldo Rossi',
      thumbnail: ['assets/database/fagnano-thumb.jpg'],
      image: ['assets/database/fagnano-01.jpg'],
      sources: ['https://en.wikiarquitectura.com/building/fagnano-olona-elementary-school/'],
      // compare: ["example 1", "example 2"]
      tags: ["Courtyard Buildings", "Surrealisms"]
    },{
      datatype: 'words',
      name: 'Instrument of Reflection',
      author: 'Possible Concept',
      context: 'We remember spaces from our youth as vast, we return to them and they are smaller than we remembered',
      analysis: 'Is it possible that the project can allow students to "look back" at themselves, that the building can become an instrument for that kind of reflection and registration of growth and change?',
      // tags: ["Paradoxes", "Rough but Elegant"]
    },{
      datatype: 'spacetypes',
      name: 'Corridor',
      author: ' ',
      context: ' ',
      analysis: ' ',
      // image: [assets/database/cmu-01.jpg, assets/database/cmu-02.jpg],
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'details',
      name: 'Knowlton SoA',
      author: 'Scogin Elam',
      context: 'Requirement from donor for a marble facade and display of columns showing the four orders',
      analysis: 'The response is the marble shakes which represent the idiosyncrasy of the individual within the collective and the framing of the columns like a page.',
      image: ['assets/database/knowlton-01.jpg', 'assets/database/knowlton-02.jpg'],
      sources: ['https://www.archdaily.com/129400/austin-e-knowlton-school-of-architecture-mack-scogin-merrill-elam-architects?ad_medium=gallery (Timothy Hursley)'],
      // compare: ["example 1", "example 2"]
      tags: ["New Forms that Perform", "Foreigners"]
    },{
      datatype: 'details',
      name: 'Concrete Block',
      author: 'Frida Escobedo',
      context: 'Temporary installation in El Eco. CMU units could be removed by visitors for their own projects',
      analysis: 'Cycles of building and destruction; the possibility for freedom within an authored structure. Blocks must be piled and laid on the diagonal in order to give a distinctive enough initial form before the anarchic process can take over',
      image: ['assets/database/cmu-01.jpg'],
      sources: ['https://fridaescobedo.com/project/pabellon-eco/ (Rafael Gamo)'],
      // compare: ["example 1", "example 2"]
      tags: ["Rough but Elegant", "Minimal Treatment", "Field"]
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
      context: 'Do all parts of a building need to be artificially conditioned?',
      analysis: 'Is it possible to make spaces that are unconditioned overall and conditioned at a smaller scale, with a more ad-hoc method of construction that helps preserve the optimum environment?',
      // image: [assets/database/cmu-01.jpg, assets/database/cmu-02.jpg],
      // compare: ["example 1", "example 2"]
      tags: ["Space Requirements"]
    },{
      datatype: 'words',
      name: 'Flexibility & Freedom',
      author: 'Rem Koolhaas',
      context: '"How to create specificity with indeterminancy...and a relatively stable aesthetic experience?"',
      analysis: 'Explorations into other exegencies as catalysts to the the architectural expression begins with the expression of awkward structure in the Library in Paris and continues with ZKM and Milstein',
      sources: ['SMLXL, Monacelli, (R. Koolhaas, B. Mau) p.921'],
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
      image: ['assets/database/omaam-01.jpg', 'assets/database/omaam-02.jpg', 'assets/database/omaam-03.jpg'],
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
      datatype: 'details',
      name: 'Scaffolding',
      author: '',
      context: 'Typically temporary, but could it be made to look like the Doris Saulcedos "Disremembered"?',
      analysis: 'Here the density and diagonal of the scaffold makes it unfamiliar (extra shoring provided to support the load atop it)',
      image: ['assets/database/scaffold-01.jpg', 'assets/database/scaffold-02.jpg', 'assets/database/scaffold-03.jpg'],
      tags: ["Paradoxes", "Rough but Elegant"]
    }
  ]
};
