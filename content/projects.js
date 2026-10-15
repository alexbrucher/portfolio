/*
  PROJECT CONTENT FILE
  --------------------
  Project copy and approved media live here so the home page and project
  pages stay in sync.
*/
window.portfolioProjects = [
  // 1. Clean Cookstove
  {
    slug: "cookstove",
    title: "Clean Cookstove",
    organization: "Burn Design Lab",
    date: "January - June 2026",
    category: "Sustainable Product Design",
    images: [
      {
        src: "assets/images/BDL%20FRONT%20PIC.jpeg",
        caption: "HP3C cookstove prototype in BDL's testing facility.",
        alt: "Clean cookstove prototype in Burn Design Lab's testing facility",
      },
      {
        src: "assets/images/BDL%20TESTING.png",
        caption: "Testing a clean cookstove prototype.",
        alt: "Clean cookstove testing",
      },
    ],
    problemLead: "Two billion people cook on open fires. These nations need affordable, clean-burning stoves that fit local cooking practices.",
    problem: "I worked with one other engineer to adapt existing cookstove designs for families in Senegal and Sierra Leone. These stoves required greater firepower to accommodate larger families and different top shapes to fit the traditional cooking vessels in each country. We also had to balance thermal efficiency with the cost of uninsulated sheet-metal construction, variable tolerances, limited equipment, and intermittent electricity during manufacturing. Observations, interviews, user tests, and partner input from West Wind Energy informed the work; much of that information was collected before my internship.",
    solutionLead: "Four adapted prototypes exceeded 40% thermal efficiency in testing.",
    solution: "We adapted existing wood- and charcoal-burning BDL stoves to suit the specific needs of each country while maintaining manufacturing processes. Faster heat-up was a design motivation because users sometimes overloaded fuel to accelerate heating, which could undermine emissions performance. The intended selling price was approximately $30 including profit. At the end of my involvement, intended next steps were local manufacture, beta field testing, and sales through West Wind Energy in Freetown, Sierra Leone.",
    roleLead: "Mechanical Engineering Intern",
    role: "I adapted models in Autodesk Fusion, shared design work with the other engineer, fabricated and assembled prototypes with sheet-metal equipment including stomp shears and brakes, helped optimize thermal efficiency, and conducted testing against applicable ISO clean-cookstove requirements.",
    skillsUsed: [
      "Autodesk Fusion",
      "Sheet metal fabrication",
      "Prototype testing",
      "Design adaptation",
    ],
    cardDescription: "Adapting sheet-metal stoves for local cooking needs and manufacturing constraints.",
  },
  // 2. Buoy Release System
  {
    slug: "orpc-buoy-release",
    title: "Buoy Release System",
    organization: "UW / ORPC Capstone",
    date: "January - June 2026",
    category: "Energy Systems",
    images: [
      {
        src: "assets/images/RivGenPrimaryPic.jpg",
        caption: "ORPC's RivGen turbine in Igiugig, Alaska; contextual imagery, the orange buoy on the rear of the ballast contains the assembly we replaced.",
        alt: "ORPC RivGen hydrokinetic turbine in an Alaskan river",
      },
      {
        src: "assets/images/ORPC%20CAD.png",
        caption: "CAD development for the buoy release system.",
        alt: "CAD model for the ORPC buoy release system",
      },
      {
        src: "assets/images/ORPC%20TESTING.png",
        caption: "Laboratory testing of the buoy release system.",
        alt: "Laboratory testing of the ORPC buoy release system",
      },
    ],
    problemLead: "An existing commercial acoustic-release system was expensive and unsuited to sediment-heavy river conditions.",
    problem: "Our five-person capstone team developed a replacement buoy-release mechanism for ORPC. Sediment could obstruct the existing release, so we investigated burn wires, rotating cams, and linear actuators and designed tests around likely failure modes.",
    solutionLead: "A servo rotating an Allen key demonstrated ten successful actuations at 1 m/s.",
    solution: "The simpler mechanism used entirely off-the-shelf components and was estimated at under $5,000, compared with over $25,000 for the existing full mechanism. The team also completed overnight immersion in a sediment-filled bucket. A planned sediment-agitation setup could not operate because its pump failed, so comprehensive sediment resistance and long-term reliability were not demonstrated.",
    roleLead: "Client Liaison and Testing Lead",
    role: "I led client coordination with ORPC engineers and designed flow and sediment testing sequences around primary failure modes. I also supported manufacturing and assembly. The mechanism design was a team accomplishment; I was not the primary component designer.",
    skillsUsed: [
      "Test planning",
      "Failure-mode analysis",
      "Client coordination",
      "Assembly support",
    ],
    cardDescription: "Simplifying a river-turbine buoy release and testing its key failure modes.",
  },
  // 3. Production Support Jigs
  {
    slug: "electroimpact-jigs",
    title: "Production Support Jigs",
    organization: "Electroimpact",
    date: "June - September 2025",
    category: "Design for Manufacturing",
    images: [
      {
        src: "assets/images/Toe Feed Jig.png",
        caption: "FEP plastic trimming assembly jig (blades not shown).",
        alt: "FEP plastic trimming production jig",
      },
      {
        src: "assets/images/Roller Jig.png",
        caption: "Press-fit orientation jig for a machined part.",
        alt: "Press-fit production jig",
      },
    ],
    problemLead: "Two production tasks needed more consistent positioning to avoid scrap and damaged components.",
    problem: "Plastic on carbon-fiber compaction rollers had been trimmed manually with an X-Acto blade, with a required 0.5 mm tolerance. Mistakes caused scrap and repeated cleaning and reapplication. A separate press-fit operation had experienced fractured components when a precision-machined part was misaligned.",
    solutionLead: "Two SolidWorks jigs made the intended assembly motions more repeatable.",
    solution: "I designed both jigs and fabricated them using SLS 3D printing. I personally used the roller-trimming jig and achieved the required tolerance, although blade deflection remained a limitation. I did not personally test the press-fit jig because no relevant orders occurred during my remaining time; it was subsequently adopted in production.",
    roleLead: "Mechanical engineering intern",
    role: "I designed the jigs in SolidWorks, selected the fabrication approach, and assembled and used the roller-trimming jig. ",
    skillsUsed: ["SolidWorks", "Jig design", "SLS 3D printing", "Production support"],
    cardDescription: "Simple production aids for repeatable trimming and press-fit alignment.",
  },
  {
    slug: "cryo-perfusion",
    title: "Organ Perfusion System",
    organization: "Center for Cryo-Biomedical Engineering and Artificial Organs",
    date: "September 2025 - January 2026",
    category: "Research Hardware",
    model: "assets/models/Organ%20Rack%20V1.1.glb",
    modelCaption: "Removable organ rack concept for kidney cryopreservation research.",
    images: [
      { src: "assets/images/OrganPrimary.png", caption: "Prototype assembly of a compact perfusion system.", alt: "Compact organ perfusion system prototype" },
      { src: "assets/images/OrganDia.png", caption: "Organ perfusion system diagram.", alt: "Organ perfusion system diagram" }
    ],
    problemLead: "A large benchtop research setup needed to become a more compact, modular piece of research hardware.",
    problem: "The starting setup used peristaltic pumps, stands, and associated equipment for kidney cryopreservation research. It needed clearer organization and a defined orientation to motivate further development toward a commercial prototype.",
    solutionLead: "A modular enclosure and removable rack organized the research setup around the organ and its fluid path.",
    solution: "I repackaged the setup into a compact, modular 3D-printed enclosure, organized cable routing, and designed a removable organ rack plus a concept for disposable components contacting the organ. The rack was intended to support a kidney with minimal contact pressure, let effluent drain into a lower tank, and provide access for perfusion lines delivering cryoprotective agents. Simple geometry supported 3D printing and potential future injection molding, but future manufacturing considerations were not fully explored.",
    roleLead: "Engineering research assistant",
    role: "I designed the enclosure, rack, and component interfaces to fit in a defined orientation and reduce assembly ambiguity. The hardware was checked with existing equipment, but no organ testing occurred during my involvement.",
    skillsUsed: ["CAD modeling", "3D-printed enclosures", "Design for assembly", "Research hardware"],
    cardDescription: "Repackaging kidney cryopreservation research hardware into a compact modular system.",
  },
  {
    slug: "submarine-propeller",
    title: "Human-Powered Submarine Propeller",
    organization: "University of Washington",
    date: "September - December 2024",
    category: "Computational Design",
    model: "assets/models/B1%20High%20Acceleration.glb",
    modelCaption: "Candidate propeller geometry generated for the human-powered submarine.",
    images: [
      { src: "assets/images/BladePrimary.png", caption: "Propeller profile selected by the team for manufacturability.", alt: "Human-powered submarine propeller profile" },
      { src: "assets/images/BladeGraph.png", caption: "Predicted propeller performance across advance ratio.", alt: "Propeller performance graph" }
    ],
    problemLead: "A human-powered submarine needed a propeller matched to low speed, available power, gearing, and carbon-fiber fabrication limits.",
    problem: "I compared candidate blade geometries and acceleration profiles in OpenProp, then matched the analysis to the expected race speed, available input power, drivetrain gearing, and rotation rate. Larger blades changed predicted performance but also made the carbon-fiber mold more difficult to fabricate.",
    solutionLead: "The team selected a smaller, more manufacturable candidate.",
    solution: "I generated candidate geometries, imported them into CAD, developed blade models, compared predicted performance across radii and acceleration profiles, and presented the options so the team could choose a practical design. The larger blade was never physically tested. Other team members fabricated the carbon-fiber propeller and conducted pool and race testing; the team later placed third at 2.21 knots in the 2025 International Submarine Races.",
    roleLead: "Computational design contributor",
    role: "I owned the OpenProp analysis and CAD development for the candidate blades and communicated the tradeoff between predicted performance and mold manufacturability. The final fabrication and testing were completed by other team members.",
    skillsUsed: ["OpenProp", "CAD modeling", "Performance analysis", "Composite manufacturing constraints"],
    cardDescription: "Balancing predicted propeller performance with a practical carbon-fiber mold.",
  },
  {
    slug: "candy-bowl",
    title: "Challenge-Activated Candy Dispenser",
    organization: "UW Intro to Capstone",
    date: "September - December 2025",
    category: "Rapid Fabrication",
    model: "assets/models/pinball.glb",
    modelCaption: "Interactive pinball-style candy dispenser.",
    modelOrientation: "180deg 180deg 0deg",
    images: [
      { src: "assets/images/CandyHero.png", caption: "Overview of the candy dispenser.", alt: "Candy dispenser overview" },
      { src: "assets/images/CandyOver.png", caption: "The dispenser's obstacle interaction.", alt: "Candy dispenser obstacle interaction" }
    ],
    problemLead: "How do professors promote student engagement with candy distribution?",
    problem: "We developed a pinball-style dispenser that asks a user to load and launch a candy while manipulating obstacles.",
    solutionLead: "A rapidly fabricated challenge-activated candy dispenser.",
    solution: "The project combined a candy-feeding mechanism, movable obstacles, laser-cut parts, 3D-printed components, and mechanical assembly. It was a compact exercise in concept development, mechanism design, fabrication-method selection, and building a physical interaction quickly.",
    roleLead: "Concept, mechanism, fabrication, and assembly contributor",
    role: "I contributed to the concept and candy-feeding mechanism, designed obstacles, helped select fabrication methods, and performed laser-cut fabrication and assembly.",
    skillsUsed: ["Mechanism development", "Laser cutting", "3D printing", "Assembly"],
    cardDescription: "A rapidly built mechanical interaction combining obstacles, a launcher, and candy feeding.",
  }
];
