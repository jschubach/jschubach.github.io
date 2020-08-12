// data for reading- array of objects
function initData() {

database = [
    {
      datatype: 'projects',
      name: 'Broni School',
      author: 'Aldo Rossi',
      context: 'Middle school constructed 1970',
      analysis: 'Placement of a special space at the center of a courtyard plan creates four clusters. Approach from a grove, step-up into a mysterious passage moving towards steps, emerge into an ampitheater with light entering from above and a wooden ceiling. Move out into the courtyard, into four corners of the single-loaded square plan.',
      image: ['images/broni-01.jpg']
      // photos: [images/cmu-01.jpg, images/cmu-02.jpg],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'spacetypes',
      name: 'Classroom',
      author: 'Francis Kere',
      context: 'Insert Context here',
      analysis: 'A material is removed',
      image: ['images/classroom-kere-01.jpg', 'images/roof-kere-01.jpg'],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'atmospheres',
      name: 'Free-Period',
      author: ' ',
      context: 'Block of time with no class. For being alone, for leaving campus, for studying, or for messing around',
      analysis: 'Space in the schedule that is unprogrammed and does not necessarily take place in the classroom',
      // image: ['images/image3.jpg']
      // photos: [images/cmu-01.jpg, images/cmu-02.jpg],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'details',
      name: 'Chainlink Fence',
      author: 'dePaor',
      context: 'A material used to make a wiry barrier in industrial circumstances',
      analysis: 'Its shininess, diamonding, and diaphanous qualities give the fence some elegance. Here creasing it along the diagonal makes it glitter and gives it different transparency along the oblique',
      image: ['images/chainlink-01.jpg'],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'atmospheres',
      name: 'Defects',
      author: ' ',
      context: 'Diagram from Home Depot lumber information page',
      analysis: 'Is it possible to begin with these "defective" materials (or tendencies towards different performance) in order to generate form?',
      image: ['images/defect-01.jpg'],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'spacetypes',
      name: 'Lunchroom',
      author: ' ',
      context: 'Often used for multiple purposes, only one of which is lunch',
      analysis: 'What gives specificity to the "multi-purpose room?"',
      // image: ['images/image2.jpg']
      // photos: [images/cmu-01.jpg, images/cmu-02.jpg],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'details',
      name: 'Warping',
      author: 'Alvar Aalto',
      context: 'Extreme temperature variation in the climate of Finland creates a warping on the marble cladding of Finlandia hall.',
      analysis: 'The aged and warped cladding becomes more textured and beautiful than the original installation. Can slack in detailing be one possible way to create texture in American architecture (since cheap labor and craft are out of the question)?',
      image: ['images/aalto-01.jpg', 'images/aalto-02.jpg'],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'atmospheres',
      name: 'Detention',
      author: ' ',
      context: 'Sitting silently in a classroom with the clock ticking, waiting',
      analysis: 'Only things to look at are the desk, the ceiling, the window, the board',
      // photos: [images/cmu-01.jpg, images/cmu-02.jpg],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'projects',
      name: 'Instability',
      author: 'Frida Escobedo',
      context: 'Insert Context here',
      analysis: 'A material is removed',
      // photos: [images/cmu-01.jpg, images/cmu-02.jpg],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'projects',
      name: 'Paspels',
      author: 'Valerio Olgiati',
      context: 'Insert Context here',
      analysis: 'Creates a monster out of the hallway, making it a space while giving each room its own view and each elevation its own proportions.',
      image: ['images/paspels-01.jpg'],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'projects',
      name: 'Fagnano Olona',
      author: 'Aldo Rossi',
      context: 'Insert Context here',
      analysis: 'A material is removed',
      // photos: [images/cmu-01.jpg, images/cmu-02.jpg],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'spacetypes',
      name: 'Corridor',
      author: ' ',
      context: ' ',
      analysis: ' ',
      // photos: [images/cmu-01.jpg, images/cmu-02.jpg],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'details',
      name: 'Knowlton SoA',
      author: 'Scogin Elam',
      context: 'Requirement from donor for a marble facade and display of columns showing the four orders',
      analysis: 'The response is detailing of the marble in small shakes that expresses "the relationship between the individual and the collective" (Kipnis) and positioning and framing of the columns such that they appear to be seen from the building as if they are a page in a book',
      image: ['images/knowlton-01.jpg', 'images/knowlton-02.jpg'],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    },{
      datatype: 'details',
      name: 'Concrete Block',
      author: 'Frida Escobedo',
      context: 'Temporary installation in El Eco. CMU units could be removed by visitors for their own projects',
      analysis: 'Cycles of building and destruction; the possibility for freedom within an authored structure. Blocks must be piled and laid on the diagonal in order to give a distinctive enough initial form before the anarchic process can take over',
      image: ['images/cmu-01.jpg'],
      // compare: ["example 1", "example 2"]
      // tags: ["Paradoxes", "Leveraged Flaws"]
    }
  ]
};
