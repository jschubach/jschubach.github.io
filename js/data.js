// data for reading- array of objects
function initData() {

database = [
    {
      datatype: 'projects',
      name: 'Broni School',
      author: 'Aldo Rossi',
      context: 'Middle school constructed 1970',
      analysis: 'Placement of a special space at the center of a courtyard plan creates four clusters. Approach from a grove, step-up into a mysterious passage moving towards steps, emerge into an ampitheater with light entering from above and a wooden ceiling. Move out into the courtyard, into four corners of the single-loaded square plan.',
      image: ['assets/database/broni-01.jpg'],
      // image: [assets/database/cmu-01.jpg, assets/database/cmu-02.jpg],
      // compare: ["example 1", "example 2"]
      tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'spacetypes',
      name: 'Classroom',
      author: 'Francis Kere',
      context: 'Insert Context here',
      analysis: 'A material is removed',
      image: ['assets/database/classroom-kere-01.jpg', 'assets/database/roof-kere-01.jpg'],
      // compare: ["example 1", "example 2"]
      tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'atmospheres',
      name: 'Free-Period',
      author: ' ',
      context: 'Block of time with no class. For being alone, for leaving campus, for studying, or for mischief',
      analysis: 'Space in the schedule that is unprogrammed and does not necessarily take place in the classroom',
      // image: ['assets/database/image3.jpg']
      // image: [assets/database/cmu-01.jpg, assets/database/cmu-02.jpg],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'details',
      name: 'Chainlink Fence',
      author: 'dePaor',
      context: 'A shiny and diaphanous material used to make an industrial barrier',
      analysis: 'Creasing it along the diagonal makes it glitter and generates opacity on the oblique',
      image: ['assets/database/chainlink-01.jpg'],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'atmospheres',
      name: 'Defects',
      author: ' ',
      context: 'Diagram from Home Depot lumber information page',
      analysis: 'Is it possible to begin with these "defective" materials (or tendencies towards different performance) in order to generate form?',
      image: ['assets/database/defect-01.jpg'],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'spacetypes',
      name: 'Lunchroom',
      author: ' ',
      context: 'Often used for multiple purposes, only one of which is lunch',
      analysis: 'What gives specificity to the "multi-purpose room?"',
      // image: ['assets/database/image2.jpg']
      // image: [assets/database/cmu-01.jpg, assets/database/cmu-02.jpg],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'details',
      name: 'Warping',
      author: 'Alvar Aalto',
      context: 'Extreme temperature variation in the climate of Finland creates a warping on the marble cladding of Finlandia hall.',
      analysis: 'The aged and warped cladding becomes more textured and beautiful than the original installation. Can slack in detailing be one possible way to create texture in American architecture (since cheap labor and craft are out of the question)?',
      image: ['assets/database/aalto-01.jpg', 'assets/database/aalto-02.jpg'],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'atmospheres',
      name: 'Detention',
      author: ' ',
      context: 'Sitting silently in a classroom with the clock ticking, waiting',
      analysis: 'Only things to look at are the desk, the ceiling, the window, the board',
      // image: [assets/database/cmu-01.jpg, assets/database/cmu-02.jpg],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'projects',
      name: 'Instability',
      author: 'Frida Escobedo',
      context: 'Insert Context here',
      analysis: 'A material is removed',
      // image: [assets/database/cmu-01.jpg, assets/database/cmu-02.jpg],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'projects',
      name: 'Paspels',
      author: 'Valerio Olgiati',
      context: 'Insert Context here',
      analysis: 'Creates a monster out of the hallway, making it a space while giving each room its own view and each elevation its own proportions.',
      image: ['assets/database/paspels-01.jpg'],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'projects',
      name: 'Fagnano Olona',
      author: 'Aldo Rossi',
      context: 'Insert Context here',
      analysis: 'A material is removed',
      // image: [assets/database/cmu-01.jpg, assets/database/cmu-02.jpg],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'spacetypes',
      name: 'Corridor',
      author: ' ',
      context: ' ',
      analysis: ' ',
      // image: [assets/database/cmu-01.jpg, assets/database/cmu-02.jpg],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'details',
      name: 'Knowlton SoA',
      author: 'Scogin Elam',
      context: 'Requirement from donor for a marble facade and display of columns showing the four orders',
      analysis: 'The response is the marble shakes which represent the idiosyncrasy of the individual within the collective and the framing of the columns like a page.',
      image: ['assets/database/knowlton-01.jpg', 'assets/database/knowlton-02.jpg'],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'details',
      name: 'Concrete Block',
      author: 'Frida Escobedo',
      context: 'Temporary installation in El Eco. CMU units could be removed by visitors for their own projects',
      analysis: 'Cycles of building and destruction; the possibility for freedom within an authored structure. Blocks must be piled and laid on the diagonal in order to give a distinctive enough initial form before the anarchic process can take over',
      image: ['assets/database/cmu-01.jpg'],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'words',
      name: 'Narrative Specification',
      author: '',
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
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'words',
      name: 'Flexibility',
      author: 'Rem Koolhaas',
      context: '"How to create specificity with indeterminancy...and a relatively stable aesthetic experience?"',
      analysis: 'Explorations into other exegencies as catalysts to the the architectural expression begins with the expression of awkward structure in the Library in Paris and continues with ZKM and Milstein',
      // image: [assets/database/cmu-01.jpg, assets/database/cmu-02.jpg],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'atmospheres',
      name: 'Deja Vu',
      author: '',
      context: 'The surreal sense that you have been somewhere or done something before (from the swimming pool project, and OMAs Kunsthalle)',
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
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'projects',
      name: 'Architecture Museum',
      author: 'OMA',
      context: 'The warping of the plan and the tilting of a core - irregular figures with a regular structural system - contrast with the Kunstal (a regular figure with an irregular structural system).',
      analysis: 'What effect does this regular/irregular juxtaposition create? Could the warping of the plan relate to the expansion and contraction of material at the scale of the detail?',
      image: ['assets/database/omaam-01.jpg', 'assets/database/omaam-02.jpg', 'assets/database/omaam-03.jpg'],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'projects',
      name: 'Cyclicality in Yokohama',
      author: 'OMA',
      context: 'A study of the time of day that particular programs are activated encourages OMA to "invent" additional program to populate the building',
      analysis: 'Could this logic or type of study be used to assist in the seasonal activation of the school?',
      image: ['assets/database/yokohama-01.jpg'],
      sources: ['SMLXL Book']
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'details',
      name: 'Scaffolding',
      author: '',
      context: 'Typically temporary, but could it be made to look like the Doris Saulcedos "Disremembered"?',
      analysis: 'Here the density and diagonal of the scaffold makes it unfamiliar (extra shoring provided to support the load atop it)',
      image: ['assets/database/scaffold-01.jpg', 'assets/database/scaffold-02.jpg', 'assets/database/scaffold-03.jpg'],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    }
  ]
};
