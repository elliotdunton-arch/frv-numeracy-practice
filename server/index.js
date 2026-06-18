const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const NOTE = 'Convert minutes to decimal hours: 15 min = 0.25  |  30 min = 0.50  |  45 min = 0.75  |  60 min = 1.00  |  90 min = 1.50'

// ── 10 timesheet contexts ─────────────────────────────────────────────────────

const ctx1 = {
  title: 'FRV Station Alpha — Weekly Crew Timesheet',
  subtitle: 'Firefighter: Sarah Chen  |  Rate: $55.00/hr',
  tables: [{
    headers: ['Day', 'Start Time', 'End Time', 'Non-Billable'],
    rows: [
      ['Monday',    '7:00am', '3:30pm', '30 mins'],
      ['Tuesday',   '7:00am', '4:00pm', '45 mins'],
      ['Wednesday', '7:00am', '3:00pm', '30 mins'],
      ['Thursday',  '7:00am', '4:30pm', '60 mins'],
      ['Friday',    '7:00am', '3:30pm', '30 mins'],
      ['Saturday',  '—',      '—',      '—'],
      ['Sunday',    '—',      '—',      '—'],
    ]
  }],
  note: NOTE
}

const ctx2 = {
  title: 'FRV Station Bravo — Weekly Crew Timesheet',
  subtitle: 'Firefighter: Marcus Reid  |  Weekday rate: $62.00/hr  |  Weekend rate: $93.00/hr',
  tables: [{
    headers: ['Day', 'Start Time', 'End Time', 'Non-Billable'],
    rows: [
      ['Monday',    '6:30am', '3:00pm',  '30 mins'],
      ['Tuesday',   '6:30am', '2:30pm',  '30 mins'],
      ['Wednesday', '6:30am', '3:30pm',  '45 mins'],
      ['Thursday',  '6:30am', '3:00pm',  '30 mins'],
      ['Friday',    '6:30am', '2:30pm',  '30 mins'],
      ['Saturday',  '8:00am', '12:00pm', '—'],
      ['Sunday',    '—',      '—',       '—'],
    ]
  }],
  note: NOTE
}

const ctx3 = {
  title: 'FRV Station Charlie — Weekly Crew Timesheet',
  subtitle: 'Firefighter: Anika Johansson  |  Rate: $58.00/hr',
  tables: [{
    headers: ['Day', 'Start Time', 'End Time', 'Non-Billable'],
    rows: [
      ['Monday',    '8:00am', '4:00pm', '45 mins'],
      ['Tuesday',   '—',      '—',      '—'],
      ['Wednesday', '7:30am', '5:00pm', '60 mins'],
      ['Thursday',  '8:00am', '3:30pm', '30 mins'],
      ['Friday',    '7:30am', '4:30pm', '45 mins'],
      ['Saturday',  '—',      '—',      '—'],
      ['Sunday',    '—',      '—',      '—'],
    ]
  }],
  note: NOTE
}

const ctx4 = {
  title: 'FRV Station Delta — Weekly Crew Timesheet',
  subtitle: 'Firefighter: Daniel Reyes  |  Weekday rate: $65.00/hr  |  Weekend rate: $97.50/hr',
  tables: [{
    headers: ['Day', 'Start Time', 'End Time', 'Non-Billable'],
    rows: [
      ['Monday',    '—',       '—',       '—'],
      ['Tuesday',   '6:00am',  '2:30pm',  '30 mins'],
      ['Wednesday', '6:00am',  '3:00pm',  '45 mins'],
      ['Thursday',  '6:00am',  '2:00pm',  '30 mins'],
      ['Friday',    '6:00am',  '3:30pm',  '60 mins'],
      ['Saturday',  '10:00am', '2:00pm',  '—'],
      ['Sunday',    '9:00am',  '1:00pm',  '—'],
    ]
  }],
  note: NOTE
}

const ctx5 = {
  title: 'FRV Station Echo — Weekly Crew Timesheet',
  subtitle: 'Firefighter: Lena Petrov  |  Rate: $70.00/hr',
  tables: [{
    headers: ['Day', 'Start Time', 'End Time', 'Non-Billable'],
    rows: [
      ['Monday',    '7:00am', '5:00pm', '90 mins'],
      ['Tuesday',   '7:00am', '4:30pm', '60 mins'],
      ['Wednesday', '7:00am', '6:00pm', '90 mins'],
      ['Thursday',  '—',      '—',      '—'],
      ['Friday',    '7:00am', '4:00pm', '45 mins'],
      ['Saturday',  '—',      '—',      '—'],
      ['Sunday',    '—',      '—',      '—'],
    ]
  }],
  note: NOTE
}

const ctx6 = {
  title: 'FRV Station Foxtrot — Weekly Crew Timesheet',
  subtitle: 'Firefighter: Omar Hassan  |  Weekday rate: $64.00/hr  |  Saturday rate: $96.00/hr  |  Sunday rate: $128.00/hr',
  tables: [{
    headers: ['Day', 'Start Time', 'End Time', 'Non-Billable'],
    rows: [
      ['Monday',    '—',      '—',       '—'],
      ['Tuesday',   '6:30am', '3:00pm',  '30 mins'],
      ['Wednesday', '6:30am', '4:30pm',  '60 mins'],
      ['Thursday',  '6:30am', '2:30pm',  '30 mins'],
      ['Friday',    '6:30am', '3:30pm',  '45 mins'],
      ['Saturday',  '6:00am', '1:30pm',  '—'],
      ['Sunday',    '7:00am', '10:30am', '—'],
    ]
  }],
  note: NOTE
}

const ctx7 = {
  title: 'FRV Station Golf — Weekly Crew Timesheet',
  subtitle: 'Firefighter: Claire Thompson  |  Weekday rate: $68.00/hr  |  Saturday rate: $102.00/hr',
  tables: [{
    headers: ['Day', 'Start Time', 'End Time', 'Non-Billable'],
    rows: [
      ['Monday',    '7:00am', '3:30pm',  '45 mins'],
      ['Tuesday',   '7:00am', '4:00pm',  '30 mins'],
      ['Wednesday', '7:00am', '5:00pm',  '90 mins'],
      ['Thursday',  '7:00am', '3:00pm',  '30 mins'],
      ['Friday',    '—',      '—',       '—'],
      ['Saturday',  '8:00am', '12:00pm', '—'],
      ['Sunday',    '—',      '—',       '—'],
    ]
  }],
  note: NOTE
}

const ctx8 = {
  title: 'FRV Station Hotel — Weekly Crew Timesheet',
  subtitle: 'Firefighter: Ben Fitzgerald  |  Weekday rate: $57.00/hr  |  Saturday rate: $85.50/hr',
  tables: [{
    headers: ['Day', 'Start Time', 'End Time', 'Non-Billable'],
    rows: [
      ['Monday',    '6:00am', '2:30pm', '30 mins'],
      ['Tuesday',   '6:00am', '3:00pm', '45 mins'],
      ['Wednesday', '6:00am', '2:00pm', '30 mins'],
      ['Thursday',  '6:00am', '3:30pm', '60 mins'],
      ['Friday',    '6:00am', '2:30pm', '30 mins'],
      ['Saturday',  '6:00am', '4:00pm', '—'],
      ['Sunday',    '—',      '—',      '—'],
    ]
  }],
  note: NOTE
}

const ctx9 = {
  title: 'FRV Station Juliet — Weekly Crew Timesheet',
  subtitle: 'Firefighter: Nina Vasquez  |  Weekday rate: $72.00/hr  |  Saturday rate: $108.00/hr  |  Sunday rate: $144.00/hr',
  tables: [{
    headers: ['Day', 'Start Time', 'End Time', 'Non-Billable'],
    rows: [
      ['Monday',    '—',      '—',       '—'],
      ['Tuesday',   '5:30am', '2:00pm',  '30 mins'],
      ['Wednesday', '5:30am', '3:30pm',  '60 mins'],
      ['Thursday',  '5:30am', '2:30pm',  '45 mins'],
      ['Friday',    '5:30am', '1:30pm',  '30 mins'],
      ['Saturday',  '6:00am', '10:00am', '—'],
      ['Sunday',    '7:00am', '10:30am', '—'],
    ]
  }],
  note: NOTE
}

const ctx10 = {
  title: 'FRV Station Kilo — Weekly Crew Timesheet',
  subtitle: 'Firefighter: Adrian Kowalczyk  |  Weekday rate: $66.00/hr  |  Saturday rate: $99.00/hr  |  Sunday rate: $132.00/hr',
  tables: [{
    headers: ['Day', 'Start Time', 'End Time', 'Non-Billable'],
    rows: [
      ['Monday',    '6:45am', '3:15pm', '45 mins'],
      ['Tuesday',   '6:45am', '4:45pm', '90 mins'],
      ['Wednesday', '—',      '—',      '—'],
      ['Thursday',  '6:45am', '5:15pm', '90 mins'],
      ['Friday',    '6:45am', '3:45pm', '60 mins'],
      ['Saturday',  '7:00am', '3:00pm', '30 mins'],
      ['Sunday',    '7:00am', '1:00pm', '—'],
    ]
  }],
  note: NOTE
}

// ── 10 vehicle procurement contexts ──────────────────────────────────────────

const ctxK1 = {
  title: 'FRV Station Alpha — Fleet Vehicle Assessment',
  tables: [
    {
      heading: 'Vehicle Options',
      headers: ['Vehicle', 'Purchase Price', 'Annual Fuel Saving'],
      rows: [
        ['Toyota HiLux',  '$45,000', '$3,200'],
        ['Ford Ranger',   '$38,500', '$2,400'],
        ['Nissan Navara', '$42,000', '$2,800'],
        ['Isuzu D-Max',   '$51,000', '$3,600'],
      ]
    },
    {
      heading: 'Available Funding',
      headers: ['Funding Source', 'Amount'],
      rows: [
        ['Station budget allocation',   '$18,000'],
        ['Decommissioned vehicle sale',  '$14,500'],
      ]
    }
  ]
}

const ctxK2 = {
  title: 'FRV Station Bravo — Fleet Vehicle Assessment',
  tables: [
    {
      heading: 'Vehicle Options',
      headers: ['Vehicle', 'Purchase Price', 'Annual Fuel Saving'],
      rows: [
        ['Mitsubishi Triton', '$34,000', '$1,800'],
        ['Toyota HiLux',      '$41,500', '$2,600'],
        ['Ford Ranger',       '$36,800', '$2,100'],
        ['Mazda BT-50',       '$33,200', '$1,650'],
      ]
    },
    {
      heading: 'Available Funding',
      headers: ['Funding Source', 'Amount'],
      rows: [
        ['Fleet operations budget', '$12,500'],
        ['Trade-in value',          '$11,200'],
      ]
    }
  ]
}

const ctxK3 = {
  title: 'FRV Station Charlie — Fleet Vehicle Assessment',
  tables: [
    {
      heading: 'Vehicle Options',
      headers: ['Vehicle', 'Purchase Price', 'Annual Fuel Saving'],
      rows: [
        ['Isuzu D-Max',       '$48,000', '$3,400'],
        ['Ford Everest',      '$55,000', '$3,900'],
        ['Toyota Fortuner',   '$52,500', '$3,600'],
        ['Mitsubishi Pajero', '$44,500', '$2,900'],
      ]
    },
    {
      heading: 'Available Funding',
      headers: ['Funding Source', 'Amount'],
      rows: [
        ['State equipment grant',  '$22,000'],
        ['Surplus equipment sale', '$9,500'],
      ]
    }
  ]
}

const ctxK4 = {
  title: 'FRV Station Delta — Fleet Vehicle Assessment',
  tables: [
    {
      heading: 'Vehicle Options',
      headers: ['Vehicle', 'Purchase Price', 'Annual Fuel Saving'],
      rows: [
        ['Toyota Landcruiser',       '$78,000', '$5,200'],
        ['Nissan Patrol',            '$72,500', '$4,800'],
        ['Ford Ranger Raptor',       '$68,000', '$4,500'],
        ['Mitsubishi Pajero Sport',  '$58,500', '$3,900'],
      ]
    },
    {
      heading: 'Available Funding',
      headers: ['Funding Source', 'Amount'],
      rows: [
        ['Fleet allocation',      '$19,200'],
        ['External grant',        '$15,300'],
        ['Equipment reserve fund', '$8,000'],
      ]
    }
  ]
}

const ctxK5 = {
  title: 'FRV Station Echo — Fleet Vehicle Assessment',
  tables: [
    {
      heading: 'Vehicle Options',
      headers: ['Vehicle', 'Purchase Price', 'Annual Fuel Saving'],
      rows: [
        ['Toyota Prado',       '$62,000', '$4,100'],
        ['Nissan Pathfinder',  '$54,000', '$3,500'],
        ['Holden Trailblazer', '$47,500', '$2,900'],
        ['Ford Endura',        '$51,000', '$3,200'],
      ]
    },
    {
      heading: 'Available Funding',
      headers: ['Funding Source', 'Amount'],
      rows: [
        ['Community infrastructure grant', '$25,000'],
        ['Fundraising proceeds',           '$8,750'],
      ]
    }
  ]
}

const ctxK6 = {
  title: 'FRV Station Foxtrot — Fleet Vehicle Assessment',
  tables: [
    {
      heading: 'Vehicle Options',
      headers: ['Vehicle', 'Purchase Price', 'Annual Fuel Saving'],
      rows: [
        ['Mercedes Sprinter', '$85,000', '$6,200'],
        ['Toyota HiAce',      '$62,000', '$4,800'],
        ['Ford Transit',      '$58,500', '$4,200'],
        ['Iveco Daily',       '$72,000', '$5,500'],
      ]
    },
    {
      heading: 'Available Funding',
      headers: ['Funding Source', 'Amount'],
      rows: [
        ['Annual fleet budget',          '$24,000'],
        ['Decommissioned asset proceeds', '$18,500'],
      ]
    }
  ]
}

const ctxK7 = {
  title: 'FRV Station Golf — Fleet Vehicle Assessment',
  tables: [
    {
      heading: 'Vehicle Options',
      headers: ['Vehicle', 'Purchase Price', 'Annual Fuel Saving'],
      rows: [
        ['Toyota HiLux 4WD',        '$52,000', '$3,800'],
        ['Ford Ranger XLT',         '$46,500', '$3,100'],
        ['Isuzu D-Max X-Terrain',   '$58,000', '$4,200'],
        ['Mitsubishi Triton GSR',   '$49,500', '$3,500'],
      ]
    },
    {
      heading: 'Available Funding',
      headers: ['Funding Source', 'Amount'],
      rows: [
        ['Station allocation',       '$29,000'],
        ['Sold surplus equipment',   '$12,500'],
      ]
    }
  ]
}

const ctxK8 = {
  title: 'FRV Station Hotel — Fleet Vehicle Assessment',
  tables: [
    {
      heading: 'Vehicle Options',
      headers: ['Vehicle', 'Purchase Price', 'Annual Fuel Saving'],
      rows: [
        ['Toyota RAV4',      '$44,000', '$2,800'],
        ['Hyundai Santa Fe', '$48,500', '$3,200'],
        ['Kia Sorento',      '$42,000', '$2,600'],
        ['Mazda CX-5',       '$39,500', '$2,400'],
      ]
    },
    {
      heading: 'Available Funding',
      headers: ['Funding Source', 'Amount'],
      rows: [
        ['Fleet operations budget', '$31,000'],
        ['Fleet levy collection',   '$16,500'],
      ]
    }
  ]
}

const ctxK9 = {
  title: 'FRV Station Juliet — Fleet Vehicle Assessment',
  tables: [
    {
      heading: 'Vehicle Options',
      headers: ['Vehicle', 'Purchase Price', 'Annual Fuel Saving'],
      rows: [
        ['Toyota LandCruiser 200',    '$92,000', '$6,500'],
        ['Nissan Patrol Ti',          '$88,500', '$6,200'],
        ['Mitsubishi Pajero Exceed',  '$74,000', '$5,100'],
        ['Toyota Fortuner Crusade',   '$68,500', '$4,700'],
      ]
    },
    {
      heading: 'Available Funding',
      headers: ['Funding Source', 'Amount'],
      rows: [
        ['Regional fleet budget',          '$27,000'],
        ['Community infrastructure fund',  '$12,500'],
        ['Equipment resale proceeds',       '$6,700'],
      ]
    }
  ]
}

const ctxK10 = {
  title: 'FRV Station Kilo — Fleet Vehicle Assessment',
  tables: [
    {
      heading: 'Vehicle Options',
      headers: ['Vehicle', 'Purchase Price', 'Annual Fuel Saving'],
      rows: [
        ['Mercedes-Benz Vito',   '$95,000', '$7,200'],
        ['Toyota HiAce LWB',     '$82,000', '$6,100'],
        ['Ford Transit Custom',  '$78,500', '$5,800'],
        ['Renault Trafic',       '$71,000', '$5,300'],
      ]
    },
    {
      heading: 'Available Funding',
      headers: ['Funding Source', 'Amount'],
      rows: [
        ['State transport infrastructure grant', '$42,000'],
        ['Equipment reserve fund',               '$21,500'],
        ['Community contribution',                '$9,000'],
      ]
    }
  ]
}

// ── 10 structural/landscape/civil contexts ───────────────────────────────────

const ctxU = {
  title: 'Underground Rainwater Harvesting Tank',
  tables: [{
    heading: 'Tank Parameters',
    headers: ['Parameter', 'Value'],
    rows: [
      ['Internal length',   '4.5m'],
      ['Internal width',    '3.2m'],
      ['Internal depth',    '2.5m'],
      ['Target fill level', '3/4 of total capacity'],
      ['Conversion factor', '1 m³ = 1,000 L'],
    ]
  }]
}

const ctxV = {
  title: 'Dual-Chamber Stormwater Retention Basin',
  tables: [{
    heading: 'Basin Parameters',
    headers: ['Parameter', 'Value'],
    rows: [
      ['Chamber A — length',          '6.4m'],
      ['Chamber B — length',          '3.6m'],
      ['Shared width (both chambers)', '5.0m'],
      ['Shared depth (both chambers)', '1.8m'],
      ['Target fill level',           '4/5 of total combined capacity'],
      ['Conversion factor',           '1 m³ = 1,000 L'],
    ]
  }]
}

const ctxW = {
  title: 'Enclosed Underground Concrete Vault',
  tables: [{
    heading: 'Vault Parameters',
    headers: ['Parameter', 'Value'],
    rows: [
      ['Outer length',                              '6.0m'],
      ['Outer width',                               '4.0m'],
      ['Outer height',                              '2.5m'],
      ['Wall / floor / ceiling thickness (all faces)', '0.5m'],
      ['Operational fill level',                    '3/5 of internal capacity'],
      ['Conversion factor',                         '1 m³ = 1,000 L'],
    ]
  }]
}

const ctxX = {
  title: 'Civic Courtyard — Concrete Paving',
  tables: [{
    heading: 'Project Parameters',
    headers: ['Parameter', 'Value'],
    rows: [
      ['Courtyard length',      '15.0m'],
      ['Courtyard width',       '12.0m'],
      ['Tile format',           '600mm x 600mm'],
      ['Tile coverage per unit', '0.36 m²'],
      ['Cutting rule',          'No partial tiles — whole units only'],
    ]
  }]
}

const ctxY = {
  title: 'L-Shaped Elevated Timber Terrace',
  tables: [{
    heading: 'Project Parameters',
    headers: ['Parameter', 'Value'],
    rows: [
      ['Main section — length',    '8.0m'],
      ['Main section — width',     '6.0m'],
      ['Extended section — length', '4.0m'],
      ['Extended section — width',  '3.5m'],
      ['Board format',             '1.2m x 0.4m'],
      ['Board coverage per unit',  '0.48 m²'],
      ['Cutting rule',             'No partial boards — whole units only'],
    ]
  }]
}

const ctxZ = {
  title: 'Rooftop Garden Base — Two Rectangular Sections',
  tables: [{
    heading: 'Project Parameters',
    headers: ['Parameter', 'Value'],
    rows: [
      ['Section A — length',      '9.6m'],
      ['Section A — width',       '8.0m'],
      ['Section B — length',      '6.4m'],
      ['Section B — width',       '5.0m'],
      ['Paver format',            '400mm x 400mm'],
      ['Paver coverage per unit', '0.16 m²'],
      ['Cutting rule',            'No partial pavers — whole units only'],
    ]
  }]
}

const ctxAA = {
  title: 'Rectangular Raised Garden Bed — Timber Sleeper Edging',
  tables: [{
    heading: 'Project Parameters',
    headers: ['Parameter', 'Value'],
    rows: [
      ['Garden bed length',       '14.4m'],
      ['Garden bed width',        '8.6m'],
      ['Timber sleeper length',   '2.4m per unit'],
      ['Cutting rule',            'Sleepers cannot be cut — whole units only'],
    ]
  }]
}

const ctxAB = {
  title: 'L-Shaped Civic Plaza — Steel Border',
  tables: [{
    heading: 'Plaza Parameters',
    headers: ['Parameter', 'Value'],
    rows: [
      ['Outer bounding box — total width',           '20.0m'],
      ['Outer bounding box — total depth',           '15.0m'],
      ['Notch removed from top-right corner — width', '8.0m'],
      ['Notch removed from top-right corner — depth', '6.0m'],
      ['Steel edging strip length',                  '3.5m per unit'],
      ['Cutting rule',                               'Strips cannot be cut — whole units only'],
    ]
  }]
}

const ctxAC = {
  title: 'Precast Concrete Block — Plasticiser Admixture',
  tables: [{
    heading: 'Block and Dosing Parameters',
    headers: ['Parameter', 'Value'],
    rows: [
      ['Block length',        '450mm'],
      ['Block width',         '300mm'],
      ['Block height',        '80mm'],
      ['Volume conversion',   '1 mL = 1,000 mm³'],
      ['Plasticiser dose rate', '2.5 mL per 1,000 mL of element volume'],
    ]
  }]
}

const ctxAD = {
  title: 'Concrete Test Slab — Curing Compound Dosing',
  tables: [{
    heading: 'Slab and Dosing Parameters',
    headers: ['Parameter', 'Value'],
    rows: [
      ['Slab length',              '600mm'],
      ['Slab width',               '500mm'],
      ['Slab thickness',           '60mm'],
      ['Volume conversion',        '1 mL = 1,000 mm³'],
      ['Curing compound dose rate', '4.5 mL per 1,000 mL of slab volume'],
    ]
  }]
}

// ── Questions — 10 sets of 2 (20 total) ──────────────────────────────────────

const questions = [

  // ── Set 1: Sarah Chen — $55/hr, weekdays only ────────────────────────────
  // Q1 hours: 8+8.25+7.5+8.5+8 = 40.25   Q2 highest: Thu 8.5×55 = $467.50
  {
    group: 'A', type: 'number_input', category: 'Number and Algebra',
    context: ctx1,
    question: 'Calculate the total number of paid weekday hours Sarah worked.\n(Enter the number only — e.g. 40.25)',
    answer: '40.25'
  },
  {
    group: 'A', type: 'number_input', category: 'Number and Algebra',
    context: ctx1,
    question: 'Calculate Sarah\'s earnings for each worked day. What were the total earnings on her highest-earning day?\n(Enter the dollar amount only)',
    answer: '467.50'
  },

  // ── Set 2: Marcus Reid — $62/$93, full week ──────────────────────────────
  // Q1 hours: 8+7.5+8.25+8+7.5+4 = 43.25   Q2 lowest: Sat 4×93 = $372
  {
    group: 'B', type: 'number_input', category: 'Number and Algebra',
    context: ctx2,
    question: 'Calculate the total number of paid hours Marcus worked across the full week.\n(Enter the number only)',
    answer: '43.25'
  },
  {
    group: 'B', type: 'number_input', category: 'Number and Algebra',
    context: ctx2,
    question: 'Calculate Marcus\'s earnings for each worked day using the applicable rate. What were the total earnings on his lowest-earning day?\n(Enter the dollar amount only)',
    answer: '372'
  },

  // ── Set 3: Anika Johansson — $58/hr, 4 weekdays ─────────────────────────
  // Q1 hours: 7.25+8.5+7+8.25 = 31   Q2 highest: Wed 8.5×58 = $493
  {
    group: 'C', type: 'number_input', category: 'Number and Algebra',
    context: ctx3,
    question: 'Calculate the total number of paid hours Anika worked across all her shifts this week.\n(Enter the number only)',
    answer: '31'
  },
  {
    group: 'C', type: 'number_input', category: 'Number and Algebra',
    context: ctx3,
    question: 'Calculate Anika\'s earnings for each worked day. What were the total earnings on her highest-earning day?\n(Enter the dollar amount only)',
    answer: '493'
  },

  // ── Set 4: Daniel Reyes — $65/$97.50, full week ──────────────────────────
  // Q1 hours: 8+8.25+7.5+8.5+4+4 = 40.25   Q2 lowest weekday: Thu 7.5×65 = $487.50
  {
    group: 'D', type: 'number_input', category: 'Number and Algebra',
    context: ctx4,
    question: 'Calculate the total number of paid hours Daniel worked across the full week, including weekend shifts.\n(Enter the number only)',
    answer: '40.25'
  },
  {
    group: 'D', type: 'number_input', category: 'Number and Algebra',
    context: ctx4,
    question: 'Calculate Daniel\'s earnings for each weekday shift. What were the total earnings on his lowest-earning weekday?\n(Enter the dollar amount only)',
    answer: '487.50'
  },

  // ── Set 5: Lena Petrov — $70/hr, 4 weekdays, 90-min breaks ──────────────
  // Q1 hours: 8.5+8.5+9.5+8.25 = 34.75   Q2 highest: Wed 9.5×70 = $665
  {
    group: 'E', type: 'number_input', category: 'Number and Algebra',
    context: ctx5,
    question: 'Calculate the total number of paid hours Lena worked across all her weekday shifts.\n(Enter the number only)',
    answer: '34.75'
  },
  {
    group: 'E', type: 'number_input', category: 'Number and Algebra',
    context: ctx5,
    question: 'Calculate Lena\'s earnings for each worked day. What were the total earnings on her highest-earning day?\n(Enter the dollar amount only)',
    answer: '665'
  },

  // ── Set 6: Omar Hassan — $64/$96/$128, full week ─────────────────────────
  // Q1 hours: 8+9+7.5+8.25+7.5+3.5 = 43.75   Q2 highest: Sat 7.5×96 = $720
  {
    group: 'F', type: 'number_input', category: 'Number and Algebra',
    context: ctx6,
    question: 'Calculate the total number of paid hours Omar worked across the full week.\n(Enter the number only)',
    answer: '43.75'
  },
  {
    group: 'F', type: 'number_input', category: 'Number and Algebra',
    context: ctx6,
    question: 'Calculate Omar\'s earnings for each worked day using the applicable rate. What were the total earnings on his highest-earning day?\n(Enter the dollar amount only)',
    answer: '720'
  },

  // ── Set 7: Claire Thompson — $68/$102, weekdays only for Q1 ─────────────
  // Q1 weekday hours: 7.75+8.5+8.5+7.5 = 32.25   Q2 lowest weekday: Thu 7.5×68 = $510
  {
    group: 'G', type: 'number_input', category: 'Number and Algebra',
    context: ctx7,
    question: 'Calculate the total number of paid weekday hours Claire worked.\n(Enter the number only)',
    answer: '32.25'
  },
  {
    group: 'G', type: 'number_input', category: 'Number and Algebra',
    context: ctx7,
    question: 'Calculate Claire\'s earnings for each weekday shift. What were the total earnings on her lowest-earning weekday?\n(Enter the dollar amount only)',
    answer: '510'
  },

  // ── Set 8: Ben Fitzgerald — $57/$85.50, weekdays for Q1 ─────────────────
  // Q1 weekday hours: 8+8.25+7.5+8.5+8 = 40.25   Q2 highest: Sat 10×85.5 = $855
  {
    group: 'H', type: 'number_input', category: 'Number and Algebra',
    context: ctx8,
    question: 'Calculate the total number of paid weekday hours Ben worked.\n(Enter the number only)',
    answer: '40.25'
  },
  {
    group: 'H', type: 'number_input', category: 'Number and Algebra',
    context: ctx8,
    question: 'Calculate Ben\'s earnings for each worked day using the applicable rate. What were the total earnings on his highest-earning day?\n(Enter the dollar amount only)',
    answer: '855'
  },

  // ── Set 9: Nina Vasquez — $72/$108/$144, full week ──────────────────────
  // Q1 hours: 8+9+8.25+7.5+4+3.5 = 40.25   Q2 highest: Wed 9×72 = $648 (not Sun at $144!)
  {
    group: 'I', type: 'number_input', category: 'Number and Algebra',
    context: ctx9,
    question: 'Calculate the total number of paid hours Nina worked across the full week.\n(Enter the number only)',
    answer: '40.25'
  },
  {
    group: 'I', type: 'number_input', category: 'Number and Algebra',
    context: ctx9,
    question: 'Calculate Nina\'s earnings for each worked day using the applicable rate. What were the total earnings on her highest-earning day?\n(Enter the dollar amount only)',
    answer: '648'
  },

  // ── Set 10: Adrian Kowalczyk — $66/$99/$132, weekdays for Q1 ────────────
  // Q1 weekday hours: 7.75+8.5+9+8 = 33.25   Q2 lowest all days: Mon 7.75×66 = $511.50
  {
    group: 'J', type: 'number_input', category: 'Number and Algebra',
    context: ctx10,
    question: 'Calculate the total number of paid weekday hours Adrian worked.\n(Enter the number only)',
    answer: '33.25'
  },
  {
    group: 'J', type: 'number_input', category: 'Number and Algebra',
    context: ctx10,
    question: 'Calculate Adrian\'s earnings for each worked day using the applicable rate. What were the total earnings on his lowest-earning day?\n(Enter the dollar amount only)',
    answer: '511.50'
  },

  // ── Set K: Station Alpha — Toyota HiLux $45k, funding $32,500 ───────────
  // Q1 shortfall: 45000 − 32500 = $12,500   Q2 years for Ford Ranger: ⌈38500/2400⌉ = 17
  {
    group: 'K', type: 'number_input', category: 'Number and Algebra',
    context: ctxK1,
    question: 'Calculate the total available funding from all sources shown above. How much additional money does the station need to purchase the Toyota HiLux?\n(Enter the dollar amount only)',
    answer: '12500'
  },
  {
    group: 'K', type: 'number_input', category: 'Number and Algebra',
    context: ctxK1,
    question: 'After how many complete years would the Ford Ranger\'s annual fuel savings cover its full purchase price?\n(Enter the number of years only)',
    answer: '17'
  },

  // ── Set L: Station Bravo — Mitsubishi Triton $34k, funding $23,700 ──────
  // Q1 shortfall: 34000 − 23700 = $10,300   Q2 years for Mazda BT-50: ⌈33200/1650⌉ = 21
  {
    group: 'L', type: 'number_input', category: 'Number and Algebra',
    context: ctxK2,
    question: 'Calculate the total available funding from all sources shown above. How much additional money does the station need to purchase the Mitsubishi Triton?\n(Enter the dollar amount only)',
    answer: '10300'
  },
  {
    group: 'L', type: 'number_input', category: 'Number and Algebra',
    context: ctxK2,
    question: 'After how many complete years would the Mazda BT-50\'s annual fuel savings cover its full purchase price?\n(Enter the number of years only)',
    answer: '21'
  },

  // ── Set M: Station Charlie — Mitsubishi Pajero $44.5k, funding $31,500 ──
  // Q1 shortfall: 44500 − 31500 = $13,000   Q2 D-Max total savings 6yr: 6×3400 = $20,400
  {
    group: 'M', type: 'number_input', category: 'Number and Algebra',
    context: ctxK3,
    question: 'Calculate the total available funding from all sources shown above. How much additional money does the station need to purchase the Mitsubishi Pajero?\n(Enter the dollar amount only)',
    answer: '13000'
  },
  {
    group: 'M', type: 'number_input', category: 'Number and Algebra',
    context: ctxK3,
    question: 'What would be the total fuel saving provided by the Isuzu D-Max over 6 years?\n(Enter the dollar amount only)',
    answer: '20400'
  },

  // ── Set N: Station Delta — Pajero Sport $58.5k, funding $42,500 ─────────
  // Q1 shortfall: 58500 − 42500 = $16,000   Q2 years for Ford Ranger Raptor: ⌈68000/4500⌉ = 16
  {
    group: 'N', type: 'number_input', category: 'Number and Algebra',
    context: ctxK4,
    question: 'Calculate the total available funding from all sources shown above. How much additional money does the station need to purchase the Mitsubishi Pajero Sport?\n(Enter the dollar amount only)',
    answer: '16000'
  },
  {
    group: 'N', type: 'number_input', category: 'Number and Algebra',
    context: ctxK4,
    question: 'After how many complete years would the Ford Ranger Raptor\'s annual fuel savings cover its full purchase price?\n(Enter the number of years only)',
    answer: '16'
  },

  // ── Set O: Station Echo — Holden Trailblazer $47.5k, funding $33,750 ────
  // Q1 shortfall: 47500 − 33750 = $13,750   Q2 Pathfinder net cost after 5yr: 54000−5×3500 = $36,500
  {
    group: 'O', type: 'number_input', category: 'Number and Algebra',
    context: ctxK5,
    question: 'Calculate the total available funding from all sources shown above. How much additional money does the station need to purchase the Holden Trailblazer?\n(Enter the dollar amount only)',
    answer: '13750'
  },
  {
    group: 'O', type: 'number_input', category: 'Number and Algebra',
    context: ctxK5,
    question: 'Calculate the net cost of the Nissan Pathfinder after 5 years of fuel savings.\n(Net cost = Purchase price − total fuel savings\nEnter the dollar amount only)',
    answer: '36500'
  },

  // ── Set P: Station Foxtrot — Ford Transit $58.5k, funding $42,500 ───────
  // Q1 shortfall: 58500 − 42500 = $16,000   Q2 years for Iveco Daily: ⌈72000/5500⌉ = 14
  {
    group: 'P', type: 'number_input', category: 'Number and Algebra',
    context: ctxK6,
    question: 'Calculate the total available funding from all sources shown above. How much additional money does the station need to purchase the Ford Transit?\n(Enter the dollar amount only)',
    answer: '16000'
  },
  {
    group: 'P', type: 'number_input', category: 'Number and Algebra',
    context: ctxK6,
    question: 'After how many complete years would the Iveco Daily\'s annual fuel savings cover its full purchase price?\n(Enter the number of years only)',
    answer: '14'
  },

  // ── Set Q: Station Golf — Ford Ranger XLT $46.5k, funding $41,500 ───────
  // Q1 shortfall: 46500 − 41500 = $5,000   Q2 annual diff HiLux vs Ranger: 3800−3100 = $700
  {
    group: 'Q', type: 'number_input', category: 'Number and Algebra',
    context: ctxK7,
    question: 'Calculate the total available funding from all sources shown above. How much additional money does the station need to purchase the Ford Ranger XLT?\n(Enter the dollar amount only)',
    answer: '5000'
  },
  {
    group: 'Q', type: 'number_input', category: 'Number and Algebra',
    context: ctxK7,
    question: 'How much more in annual fuel savings would the Toyota HiLux 4WD provide compared to the Ford Ranger XLT?\n(Enter the dollar amount only)',
    answer: '700'
  },

  // ── Set R: Station Hotel — Hyundai Santa Fe $48.5k, funding $47,500 ─────
  // Q1 shortfall: 48500 − 47500 = $1,000   Q2 years for Kia Sorento: ⌈42000/2600⌉ = 17
  {
    group: 'R', type: 'number_input', category: 'Number and Algebra',
    context: ctxK8,
    question: 'Calculate the total available funding from all sources shown above. How much additional money does the station need to purchase the Hyundai Santa Fe?\n(Enter the dollar amount only)',
    answer: '1000'
  },
  {
    group: 'R', type: 'number_input', category: 'Number and Algebra',
    context: ctxK8,
    question: 'After how many complete years would the Kia Sorento\'s annual fuel savings cover its full purchase price?\n(Enter the number of years only)',
    answer: '17'
  },

  // ── Set S: Station Juliet — Fortuner Crusade $68.5k, funding $46,200 ────
  // Q1 shortfall: 68500 − 46200 = $22,300   Q2 LandCruiser vs Pajero over 10yr: 10×(6500−5100) = $14,000
  {
    group: 'S', type: 'number_input', category: 'Number and Algebra',
    context: ctxK9,
    question: 'Calculate the total available funding from all sources shown above. How much additional money does the station need to purchase the Toyota Fortuner Crusade?\n(Enter the dollar amount only)',
    answer: '22300'
  },
  {
    group: 'S', type: 'number_input', category: 'Number and Algebra',
    context: ctxK9,
    question: 'Over 10 years, how much more in total fuel savings would the Toyota LandCruiser 200 provide compared to the Mitsubishi Pajero Exceed?\n(Enter the dollar amount only)',
    answer: '14000'
  },

  // ── Set T: Station Kilo — Mercedes-Benz Vito $95k, funding $72,500 ──────
  // Q1 shortfall: 95000 − 72500 = $22,500   Q2 HiAce LWB net cost 8yr: 82000−8×6100 = $33,200
  {
    group: 'T', type: 'number_input', category: 'Number and Algebra',
    context: ctxK10,
    question: 'Calculate the total available funding from all sources shown above. How much additional money does the station need to purchase the Mercedes-Benz Vito?\n(Enter the dollar amount only)',
    answer: '22500'
  },
  {
    group: 'T', type: 'number_input', category: 'Number and Algebra',
    context: ctxK10,
    question: 'Calculate the net cost of the Toyota HiAce LWB after 8 years of fuel savings.\n(Net cost = Purchase price − total fuel savings\nEnter the dollar amount only)',
    answer: '33200'
  },

  // ── Set U: Rainwater tank — 4.5×3.2×2.5m, fill 3/4 ─────────────────────
  // Q1: 4.5×3.2×2.5 = 36 m³   Q2: 36×(3/4)×1000 = 27,000 L
  {
    group: 'U', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxU,
    question: 'Calculate the total internal volume of the tank in m³.\n(Enter the number only — e.g. 36)',
    answer: '36'
  },
  {
    group: 'U', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxU,
    question: 'Using your answer to Question A as the total tank volume, how many liters does the tank hold when filled to 3/4 of its total capacity?\n(Enter the number only)',
    answer: '27000'
  },

  // ── Set V: Dual-chamber basin — (6.4+3.6)×5.0×1.8 = 90 m³, fill 4/5 ───
  // Q1: 57.6+32.4 = 90 m³   Q2: 90×(4/5)×1000 = 72,000 L
  {
    group: 'V', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxV,
    question: 'What is the total combined internal volume of both chambers in m³?\n(Enter the number only)',
    answer: '90'
  },
  {
    group: 'V', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxV,
    question: 'Using the combined volume from Question A, how many liters does the basin hold when operating at 4/5 of its full capacity?\n(Enter the number only)',
    answer: '72000'
  },

  // ── Set W: Concrete vault — inner 5.0×3.0×1.5 = 22.5 m³, fill 3/5 ──────
  // Q1: (6-1)×(4-1)×(2.5-1) = 22.5 m³   Q2: 22.5×(3/5)×1000 = 13,500 L
  {
    group: 'W', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxW,
    question: 'After deducting the 0.5m wall and floor/ceiling thickness from all six faces, what is the total usable internal volume of the vault in m³?\n(Enter the number only)',
    answer: '22.5'
  },
  {
    group: 'W', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxW,
    question: 'Using the internal volume from Question A, how many liters does the vault hold when filled to 3/5 of its operational capacity?\n(Enter the number only)',
    answer: '13500'
  },

  // ── Set X: Civic courtyard — 15×12 = 180 m², 600×600mm tiles ────────────
  // Q1: 180 m²   Q2: 180÷0.36 = 500 tiles
  {
    group: 'X', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxX,
    question: 'Calculate the total floor area of the courtyard in m².\n(Enter the number only)',
    answer: '180'
  },
  {
    group: 'X', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxX,
    question: 'Using the floor area from Question A, what is the minimum number of 600mm x 600mm tiles required to cover the entire surface?\n(Enter the number only)',
    answer: '500'
  },

  // ── Set Y: L-shaped terrace — 48+14 = 62 m², 1.2×0.4m boards ───────────
  // Q1: 62 m²   Q2: ceil(62÷0.48) = 130 boards
  {
    group: 'Y', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxY,
    question: 'What is the total combined surface area of the L-shaped terrace in m²?\n(Enter the number only)',
    answer: '62'
  },
  {
    group: 'Y', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxY,
    question: 'Using the total area from Question A, what is the minimum number of 1.2m x 0.4m decking boards required to cover the entire terrace?\n(Enter the number only)',
    answer: '130'
  },

  // ── Set Z: Rooftop garden — 76.8+32 = 108.8 m², 400×400mm pavers ────────
  // Q1: 108.8 m²   Q2: 108.8÷0.16 = 680 pavers
  {
    group: 'Z', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxZ,
    question: 'What is the total combined base area of both garden sections in m²?\n(Enter the number only)',
    answer: '108.8'
  },
  {
    group: 'Z', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxZ,
    question: 'Using the total base area from Question A, what is the minimum number of 400mm x 400mm rubber pavers required to cover both sections completely?\n(Enter the number only)',
    answer: '680'
  },

  // ── Set AA: Rectangular garden bed — 2×(14.4+8.6) = 46m, 2.4m sleepers ─
  // Q1: 46m   Q2: ceil(46÷2.4) = 20 sleepers
  {
    group: 'AA', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxAA,
    question: 'What is the total outer perimeter of the rectangular garden bed in meters?\n(Enter the number only)',
    answer: '46'
  },
  {
    group: 'AA', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxAA,
    question: 'Using the perimeter from Question A, what is the minimum number of 2.4m timber sleepers required to frame the entire boundary?\n(Enter the number only)',
    answer: '20'
  },

  // ── Set AB: L-shaped plaza — 20+9+8+6+12+15 = 70m, 3.5m strips ─────────
  // Q1: 70m   Q2: 70÷3.5 = 20 strips
  {
    group: 'AB', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxAB,
    question: 'The plaza forms an L-shape by removing a rectangular notch from the top-right corner of its bounding box. Tracing all six outer edges, what is the total outer perimeter in meters?\n(Enter the number only)',
    answer: '70'
  },
  {
    group: 'AB', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxAB,
    question: 'Using the perimeter from Question A, what is the minimum number of 3.5m steel edging strips required to border the entire plaza?\n(Enter the number only)',
    answer: '20'
  },

  // ── Set AC: Precast block — 450×300×80 = 10,800,000 mm³, 2.5mL/1000mL ──
  // Q1: 10,800,000 mm³   Q2: 10800000÷1000=10800 mL × 2.5/1000 = 27 mL
  {
    group: 'AC', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxAC,
    question: 'What is the total volume of the precast concrete block in mm³?\n(Enter the number only — e.g. 10800000)',
    answer: '10800000'
  },
  {
    group: 'AC', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxAC,
    question: 'Convert the block volume from Question A into mL (1 mL = 1,000 mm³), then calculate the total volume of plasticiser admixture required at the stated dose rate.\n(Enter the number in mL only)',
    answer: '27'
  },

  // ── Set AD: Concrete slab — 600×500×60 = 18,000,000 mm³, 4.5mL/1000mL ──
  // Q1: 18,000,000 mm³   Q2: 18000000÷1000=18000 mL × 4.5/1000 = 81 mL
  {
    group: 'AD', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxAD,
    question: 'What is the total volume of the concrete test slab in mm³?\n(Enter the number only — e.g. 18000000)',
    answer: '18000000'
  },
  {
    group: 'AD', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxAD,
    question: 'Convert the slab volume from Question A into mL (1 mL = 1,000 mm³), then calculate the exact volume of curing compound required at the stated dose rate.\n(Enter the number in mL only)',
    answer: '81'
  },

]

// ── Working methods keyed by group, [Q1 method, Q2 method] ───────────────────
const methods = {
  A: [
    `For each worked day, calculate: Duration = End time − Start time, then subtract Non-Billable time.\n(15 min = 0.25 h  |  30 min = 0.50 h  |  45 min = 0.75 h  |  60 min = 1.00 h)\n\n  Mon: 3:30pm − 7:00am = 8.50 h − 0.50 h = 8.00 h\n  Tue: 4:00pm − 7:00am = 9.00 h − 0.75 h = 8.25 h\n  Wed: 3:00pm − 7:00am = 8.00 h − 0.50 h = 7.50 h\n  Thu: 4:30pm − 7:00am = 9.50 h − 1.00 h = 8.50 h\n  Fri: 3:30pm − 7:00am = 8.50 h − 0.50 h = 8.00 h\n\nTotal: 8.00 + 8.25 + 7.50 + 8.50 + 8.00 = 40.25 h`,
    `Multiply each day's billable hours × $55.00/hr:\n\n  Mon: 8.00 h × $55 = $440.00\n  Tue: 8.25 h × $55 = $453.75\n  Wed: 7.50 h × $55 = $412.50\n  Thu: 8.50 h × $55 = $467.50  ← highest\n  Fri: 8.00 h × $55 = $440.00\n\nHighest-earning day: Thursday = $467.50`,
  ],
  B: [
    `For each worked day, calculate billable hours = Duration − Non-Billable time.\n\n  Mon: 3:00pm − 6:30am = 8.50 h − 0.50 h = 8.00 h\n  Tue: 2:30pm − 6:30am = 8.00 h − 0.50 h = 7.50 h\n  Wed: 3:30pm − 6:30am = 9.00 h − 0.75 h = 8.25 h\n  Thu: 3:00pm − 6:30am = 8.50 h − 0.50 h = 8.00 h\n  Fri: 2:30pm − 6:30am = 8.00 h − 0.50 h = 7.50 h\n  Sat: 12:00pm − 8:00am = 4.00 h (no Non-Billable)\n\nTotal (full week): 8.00 + 7.50 + 8.25 + 8.00 + 7.50 + 4.00 = 43.25 h`,
    `Apply the applicable rate to each worked day:\n\n  Mon: 8.00 h × $62 (weekday) = $496.00\n  Tue: 7.50 h × $62 (weekday) = $465.00\n  Wed: 8.25 h × $62 (weekday) = $511.50\n  Thu: 8.00 h × $62 (weekday) = $496.00\n  Fri: 7.50 h × $62 (weekday) = $465.00\n  Sat: 4.00 h × $93 (weekend) = $372.00  ← lowest\n\nLowest-earning day: Saturday = $372.00`,
  ],
  C: [
    `Only 4 weekdays were worked (Tuesday was off).\n\n  Mon: 4:00pm − 8:00am = 8.00 h − 0.75 h = 7.25 h\n  Wed: 5:00pm − 7:30am = 9.50 h − 1.00 h = 8.50 h\n  Thu: 3:30pm − 8:00am = 7.50 h − 0.50 h = 7.00 h\n  Fri: 4:30pm − 7:30am = 9.00 h − 0.75 h = 8.25 h\n\nTotal (4 weekdays): 7.25 + 8.50 + 7.00 + 8.25 = 31.00 h`,
    `Multiply each day's billable hours × $58.00/hr:\n\n  Mon: 7.25 h × $58 = $420.50\n  Wed: 8.50 h × $58 = $493.00  ← highest\n  Thu: 7.00 h × $58 = $406.00\n  Fri: 8.25 h × $58 = $478.50\n\nHighest-earning day: Wednesday = $493.00`,
  ],
  D: [
    `Monday was off. Calculate billable hours for each worked day:\n\n  Tue: 2:30pm − 6:00am = 8.50 h − 0.50 h = 8.00 h\n  Wed: 3:00pm − 6:00am = 9.00 h − 0.75 h = 8.25 h\n  Thu: 2:00pm − 6:00am = 8.00 h − 0.50 h = 7.50 h\n  Fri: 3:30pm − 6:00am = 9.50 h − 1.00 h = 8.50 h\n  Sat: 2:00pm − 10:00am = 4.00 h (no Non-Billable)\n  Sun: 1:00pm − 9:00am = 4.00 h (no Non-Billable)\n\nTotal (full week): 8.00 + 8.25 + 7.50 + 8.50 + 4.00 + 4.00 = 40.25 h`,
    `Apply the applicable rate to each worked day:\n\n  Tue: 8.00 h × $65 (weekday) = $520.00\n  Wed: 8.25 h × $65 (weekday) = $536.25\n  Thu: 7.50 h × $65 (weekday) = $487.50  ← lowest weekday\n  Fri: 8.50 h × $65 (weekday) = $552.50\n  Sat: 4.00 h × $97.50 (weekend) = $390.00\n  Sun: 4.00 h × $97.50 (weekend) = $390.00\n\nLowest weekday earnings: Thursday = $487.50`,
  ],
  E: [
    `Only 4 weekdays were worked (Thursday was off). Note: 90 min = 1.50 h.\n\n  Mon: 5:00pm − 7:00am = 10.00 h − 1.50 h = 8.50 h\n  Tue: 4:30pm − 7:00am = 9.50 h − 1.00 h = 8.50 h\n  Wed: 6:00pm − 7:00am = 11.00 h − 1.50 h = 9.50 h\n  Fri: 4:00pm − 7:00am = 9.00 h − 0.75 h = 8.25 h\n\nTotal (4 weekdays): 8.50 + 8.50 + 9.50 + 8.25 = 34.75 h`,
    `Multiply each day's billable hours × $70.00/hr:\n\n  Mon: 8.50 h × $70 = $595.00\n  Tue: 8.50 h × $70 = $595.00\n  Wed: 9.50 h × $70 = $665.00  ← highest\n  Fri: 8.25 h × $70 = $577.50\n\nHighest-earning day: Wednesday = $665.00`,
  ],
  F: [
    `Monday was off. Calculate billable hours for each worked day:\n\n  Tue: 3:00pm − 6:30am = 8.50 h − 0.50 h = 8.00 h\n  Wed: 4:30pm − 6:30am = 10.00 h − 1.00 h = 9.00 h\n  Thu: 2:30pm − 6:30am = 8.00 h − 0.50 h = 7.50 h\n  Fri: 3:30pm − 6:30am = 9.00 h − 0.75 h = 8.25 h\n  Sat: 1:30pm − 6:00am = 7.50 h (no Non-Billable)\n  Sun: 10:30am − 7:00am = 3.50 h (no Non-Billable)\n\nTotal (full week): 8.00 + 9.00 + 7.50 + 8.25 + 7.50 + 3.50 = 43.75 h`,
    `Apply the applicable rate to each worked day:\n\n  Tue: 8.00 h × $64 (weekday) = $512.00\n  Wed: 9.00 h × $64 (weekday) = $576.00\n  Thu: 7.50 h × $64 (weekday) = $480.00\n  Fri: 8.25 h × $64 (weekday) = $528.00\n  Sat: 7.50 h × $96 (Saturday) = $720.00  ← highest\n  Sun: 3.50 h × $128 (Sunday) = $448.00\n\nHighest-earning day: Saturday = $720.00`,
  ],
  G: [
    `Q1 asks for weekdays only (Friday was off; Saturday is excluded from this total).\n\n  Mon: 3:30pm − 7:00am = 8.50 h − 0.75 h = 7.75 h\n  Tue: 4:00pm − 7:00am = 9.00 h − 0.50 h = 8.50 h\n  Wed: 5:00pm − 7:00am = 10.00 h − 1.50 h = 8.50 h\n  Thu: 3:00pm − 7:00am = 8.00 h − 0.50 h = 7.50 h\n\nTotal (weekdays only): 7.75 + 8.50 + 8.50 + 7.50 = 32.25 h`,
    `Apply the applicable weekday rate to find the lowest-earning weekday:\n\n  Mon: 7.75 h × $68 = $527.00\n  Tue: 8.50 h × $68 = $578.00\n  Wed: 8.50 h × $68 = $578.00\n  Thu: 7.50 h × $68 = $510.00  ← lowest weekday\n\nLowest weekday earnings: Thursday = $510.00`,
  ],
  H: [
    `Q1 asks for weekday hours only (Saturday is excluded from this total).\n\n  Mon: 2:30pm − 6:00am = 8.50 h − 0.50 h = 8.00 h\n  Tue: 3:00pm − 6:00am = 9.00 h − 0.75 h = 8.25 h\n  Wed: 2:00pm − 6:00am = 8.00 h − 0.50 h = 7.50 h\n  Thu: 3:30pm − 6:00am = 9.50 h − 1.00 h = 8.50 h\n  Fri: 2:30pm − 6:00am = 8.50 h − 0.50 h = 8.00 h\n\nTotal (weekdays only): 8.00 + 8.25 + 7.50 + 8.50 + 8.00 = 40.25 h`,
    `Apply the applicable rate to ALL worked days (including Saturday) to find the highest:\n\n  Mon: 8.00 h × $57 (weekday)  = $456.00\n  Tue: 8.25 h × $57 (weekday)  = $470.25\n  Wed: 7.50 h × $57 (weekday)  = $427.50\n  Thu: 8.50 h × $57 (weekday)  = $484.50\n  Fri: 8.00 h × $57 (weekday)  = $456.00\n  Sat: 4:00pm − 6:00am = 10.00 h × $85.50 (Saturday) = $855.00  ← highest\n\nHighest-earning day: Saturday = $855.00`,
  ],
  I: [
    `Monday was off. Calculate billable hours for all other worked days:\n\n  Tue: 2:00pm − 5:30am = 8.50 h − 0.50 h = 8.00 h\n  Wed: 3:30pm − 5:30am = 10.00 h − 1.00 h = 9.00 h\n  Thu: 2:30pm − 5:30am = 9.00 h − 0.75 h = 8.25 h\n  Fri: 1:30pm − 5:30am = 8.00 h − 0.50 h = 7.50 h\n  Sat: 10:00am − 6:00am = 4.00 h (no Non-Billable)\n  Sun: 10:30am − 7:00am = 3.50 h (no Non-Billable)\n\nTotal (full week): 8.00 + 9.00 + 8.25 + 7.50 + 4.00 + 3.50 = 40.25 h`,
    `Apply the applicable rate to each worked day:\n\n  Tue: 8.00 h × $72 (weekday)  = $576.00\n  Wed: 9.00 h × $72 (weekday)  = $648.00  ← highest\n  Thu: 8.25 h × $72 (weekday)  = $594.00\n  Fri: 7.50 h × $72 (weekday)  = $540.00\n  Sat: 4.00 h × $108 (Saturday) = $432.00\n  Sun: 3.50 h × $144 (Sunday)   = $504.00\n\nHighest-earning day: Wednesday = $648.00`,
  ],
  J: [
    `Q1 asks for weekdays only. Wednesday was off.\n\n  Mon: 3:15pm − 6:45am = 8.50 h − 0.75 h = 7.75 h\n  Tue: 4:45pm − 6:45am = 10.00 h − 1.50 h = 8.50 h\n  Thu: 5:15pm − 6:45am = 10.50 h − 1.50 h = 9.00 h\n  Fri: 3:45pm − 6:45am = 9.00 h − 1.00 h = 8.00 h\n\nTotal (weekdays only): 7.75 + 8.50 + 9.00 + 8.00 = 33.25 h`,
    `Apply the applicable rate to ALL worked days to find the lowest:\n\n  Mon: 7.75 h × $66 (weekday)  = $511.50  ← lowest\n  Tue: 8.50 h × $66 (weekday)  = $561.00\n  Thu: 9.00 h × $66 (weekday)  = $594.00\n  Fri: 8.00 h × $66 (weekday)  = $528.00\n  Sat: 8.50 h − 0.50 h = 7.50 h × $99 (Saturday)  = $742.50\n  Sun: 1:00pm − 7:00am = 6.00 h × $132 (Sunday) = $792.00\n\nLowest-earning day: Monday = $511.50`,
  ],
  K: [
    `Add all funding sources:\n  Station budget allocation:   $18,000\n  Decommissioned vehicle sale: $14,500\n  Total available funding:     $32,500\n\nShortfall = Purchase price − Total funding\nToyota HiLux: $45,000 − $32,500 = $12,500`,
    `Divide the vehicle's purchase price by its annual fuel saving, then round UP to whole years.\n\n  Ford Ranger: $38,500 ÷ $2,400/yr = 16.04 years → round up to 17 years\n\n  Check: 16 yrs × $2,400 = $38,400 (not enough)\n         17 yrs × $2,400 = $40,800 (covers the $38,500 price) ✓`,
  ],
  L: [
    `Add all funding sources:\n  Fleet operations budget: $12,500\n  Trade-in value:          $11,200\n  Total available funding: $23,700\n\nShortfall = Purchase price − Total funding\nMitsubishi Triton: $34,000 − $23,700 = $10,300`,
    `Divide the vehicle's purchase price by its annual fuel saving, then round UP to whole years.\n\n  Mazda BT-50: $33,200 ÷ $1,650/yr = 20.12 years → round up to 21 years\n\n  Check: 20 yrs × $1,650 = $33,000 (not enough)\n         21 yrs × $1,650 = $34,650 (covers the $33,200 price) ✓`,
  ],
  M: [
    `Add all funding sources:\n  State equipment grant:  $22,000\n  Surplus equipment sale: $9,500\n  Total available funding: $31,500\n\nShortfall = Purchase price − Total funding\nMitsubishi Pajero: $44,500 − $31,500 = $13,000`,
    `Total fuel savings = Annual fuel saving × Number of years\n\n  Isuzu D-Max: $3,400/yr × 6 years = $20,400`,
  ],
  N: [
    `Add all funding sources:\n  Fleet allocation:        $19,200\n  External grant:          $15,300\n  Equipment reserve fund:  $8,000\n  Total available funding: $42,500\n\nShortfall = Purchase price − Total funding\nMitsubishi Pajero Sport: $58,500 − $42,500 = $16,000`,
    `Divide the vehicle's purchase price by its annual fuel saving, then round UP to whole years.\n\n  Ford Ranger Raptor: $68,000 ÷ $4,500/yr = 15.11 years → round up to 16 years\n\n  Check: 15 yrs × $4,500 = $67,500 (not enough)\n         16 yrs × $4,500 = $72,000 (covers the $68,000 price) ✓`,
  ],
  O: [
    `Add all funding sources:\n  Community infrastructure grant: $25,000\n  Fundraising proceeds:            $8,750\n  Total available funding:         $33,750\n\nShortfall = Purchase price − Total funding\nHolden Trailblazer: $47,500 − $33,750 = $13,750`,
    `Net cost = Purchase price − Total fuel savings over N years\n\n  Nissan Pathfinder:\n  Total fuel savings (5 years): $3,500 × 5 = $17,500\n  Net cost: $54,000 − $17,500 = $36,500`,
  ],
  P: [
    `Add all funding sources:\n  Annual fleet budget:           $24,000\n  Decommissioned asset proceeds: $18,500\n  Total available funding:       $42,500\n\nShortfall = Purchase price − Total funding\nFord Transit: $58,500 − $42,500 = $16,000`,
    `Divide the vehicle's purchase price by its annual fuel saving, then round UP to whole years.\n\n  Iveco Daily: $72,000 ÷ $5,500/yr = 13.09 years → round up to 14 years\n\n  Check: 13 yrs × $5,500 = $71,500 (not enough)\n         14 yrs × $5,500 = $77,000 (covers the $72,000 price) ✓`,
  ],
  Q: [
    `Add all funding sources:\n  Station allocation:      $29,000\n  Sold surplus equipment:  $12,500\n  Total available funding: $41,500\n\nShortfall = Purchase price − Total funding\nFord Ranger XLT: $46,500 − $41,500 = $5,000`,
    `Annual saving difference = Higher annual saving − Lower annual saving\n\n  Toyota HiLux 4WD:  $3,800/yr\n  Ford Ranger XLT:   $3,100/yr\n  Difference: $3,800 − $3,100 = $700/yr`,
  ],
  R: [
    `Add all funding sources:\n  Fleet operations budget: $31,000\n  Fleet levy collection:   $16,500\n  Total available funding: $47,500\n\nShortfall = Purchase price − Total funding\nHyundai Santa Fe: $48,500 − $47,500 = $1,000`,
    `Divide the vehicle's purchase price by its annual fuel saving, then round UP to whole years.\n\n  Kia Sorento: $42,000 ÷ $2,600/yr = 16.15 years → round up to 17 years\n\n  Check: 16 yrs × $2,600 = $41,600 (not enough)\n         17 yrs × $2,600 = $44,200 (covers the $42,000 price) ✓`,
  ],
  S: [
    `Add all funding sources:\n  Regional fleet budget:         $27,000\n  Community infrastructure fund: $12,500\n  Equipment resale proceeds:      $6,700\n  Total available funding:        $46,200\n\nShortfall = Purchase price − Total funding\nToyota Fortuner Crusade: $68,500 − $46,200 = $22,300`,
    `Multi-year savings difference = (Annual saving A − Annual saving B) × Years\n\n  Toyota LandCruiser 200:   $6,500/yr\n  Mitsubishi Pajero Exceed: $5,100/yr\n  Annual difference: $6,500 − $5,100 = $1,400/yr\n  Over 10 years: $1,400 × 10 = $14,000`,
  ],
  T: [
    `Add all funding sources:\n  State transport infrastructure grant: $42,000\n  Equipment reserve fund:               $21,500\n  Community contribution:                $9,000\n  Total available funding:              $72,500\n\nShortfall = Purchase price − Total funding\nMercedes-Benz Vito: $95,000 − $72,500 = $22,500`,
    `Net cost = Purchase price − Total fuel savings over N years\n\n  Toyota HiAce LWB:\n  Total fuel savings (8 years): $6,100 × 8 = $48,800\n  Net cost: $82,000 − $48,800 = $33,200`,
  ],
  U: [
    `Volume = Length × Width × Depth\n  = 4.5 m × 3.2 m × 2.5 m\n  = 14.4 × 2.5\n  = 36 m³`,
    `Step 1 — Convert to liters: 36 m³ × 1,000 = 36,000 L\nStep 2 — Apply fill fraction: 36,000 × 3/4 = 27,000 L`,
  ],
  V: [
    `Calculate each chamber separately, then add:\n  Chamber A: 6.4 × 5.0 × 1.8 = 57.6 m³\n  Chamber B: 3.6 × 5.0 × 1.8 = 32.4 m³\n  Total: 57.6 + 32.4 = 90 m³`,
    `Step 1 — Convert to liters: 90 m³ × 1,000 = 90,000 L\nStep 2 — Apply fill fraction: 90,000 × 4/5 = 72,000 L`,
  ],
  W: [
    `Subtract 2 × wall thickness from each outer dimension:\n  Inner length: 6.0 − (2 × 0.5) = 5.0 m\n  Inner width:  4.0 − (2 × 0.5) = 3.0 m\n  Inner height: 2.5 − (2 × 0.5) = 1.5 m\n  Volume: 5.0 × 3.0 × 1.5 = 22.5 m³`,
    `Step 1 — Convert to liters: 22.5 m³ × 1,000 = 22,500 L\nStep 2 — Apply fill fraction: 22,500 × 3/5 = 13,500 L`,
  ],
  X: [
    `Area = Length × Width\n  = 15.0 m × 12.0 m = 180 m²`,
    `Tile area = 0.6 m × 0.6 m = 0.36 m²\nNumber of tiles = Total area ÷ Tile area\n  = 180 ÷ 0.36 = 500 (divides exactly, no rounding needed)`,
  ],
  Y: [
    `Calculate each rectangular section, then add:\n  Main section:     8.0 × 6.0 = 48 m²\n  Extended section: 4.0 × 3.5 = 14 m²\n  Total: 48 + 14 = 62 m²`,
    `Board area = 1.2 m × 0.4 m = 0.48 m²\nRaw count = 62 ÷ 0.48 = 129.17 → round UP (no partial boards)\nAnswer: 130 boards\n\n  Check: 129 boards = 61.92 m² (not enough)\n         130 boards = 62.40 m² (sufficient) ✓`,
  ],
  Z: [
    `Calculate each section, then add:\n  Section A: 9.6 × 8.0 = 76.8 m²\n  Section B: 6.4 × 5.0 = 32.0 m²\n  Total: 76.8 + 32.0 = 108.8 m²`,
    `Paver area = 0.4 m × 0.4 m = 0.16 m²\nNumber of pavers = 108.8 ÷ 0.16 = 680 (divides exactly, no rounding needed)`,
  ],
  AA: [
    `Perimeter of a rectangle = 2 × (Length + Width)\n  = 2 × (14.4 + 8.6)\n  = 2 × 23.0\n  = 46.0 m`,
    `Raw count = Perimeter ÷ Sleeper length = 46.0 ÷ 2.4 = 19.17 → round UP\nAnswer: 20 sleepers\n\n  Check: 19 sleepers = 45.6 m (not enough)\n         20 sleepers = 48.0 m (sufficient) ✓`,
  ],
  AB: [
    `Trace all 6 outer edges of the L-shape:\n  1. Bottom edge (full width):          20.0 m\n  2. Right edge (depth minus notch):    15.0 − 6.0 = 9.0 m\n  3. Notch horizontal step:              8.0 m\n  4. Notch vertical step:                6.0 m\n  5. Top-left (width minus notch):      20.0 − 8.0 = 12.0 m\n  6. Left edge (full depth):            15.0 m\n  Total: 20 + 9 + 8 + 6 + 12 + 15 = 70 m`,
    `Number of strips = Perimeter ÷ Strip length\n  = 70 ÷ 3.5 = 20 (divides exactly, no rounding needed)`,
  ],
  AC: [
    `Volume (mm³) = Length × Width × Height\n  = 450 × 300 × 80\n  = 135,000 × 80\n  = 10,800,000 mm³`,
    `Step 1 — Convert to mL: 10,800,000 ÷ 1,000 = 10,800 mL\nStep 2 — Apply dose rate: 10,800 × (2.5 ÷ 1,000) = 10,800 × 0.0025 = 27 mL`,
  ],
  AD: [
    `Volume (mm³) = Length × Width × Thickness\n  = 600 × 500 × 60\n  = 300,000 × 60\n  = 18,000,000 mm³`,
    `Step 1 — Convert to mL: 18,000,000 ÷ 1,000 = 18,000 mL\nStep 2 — Apply dose rate: 18,000 × (4.5 ÷ 1,000) = 18,000 × 0.0045 = 81 mL`,
  ],
}

// ── Group-aware shuffle ───────────────────────────────────────────────────────

function shuffleByGroup(qs) {
  const groupMap = {}
  const units = []

  qs.forEach(q => {
    if (q.group) {
      if (!groupMap[q.group]) {
        groupMap[q.group] = []
        units.push(groupMap[q.group])
      }
      groupMap[q.group].push(q)
    } else {
      units.push([q])
    }
  })

  for (let i = units.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [units[i], units[j]] = [units[j], units[i]]
  }

  return units.flat()
}

app.get('/api/questions', (req, res) => {
  const shuffled = shuffleByGroup(questions)

  const groupPos = {}
  const final = shuffled.map((q, i) => {
    if (groupPos[q.group] === undefined) groupPos[q.group] = 0
    const pos = groupPos[q.group]++
    const method = (methods[q.group] || [])[pos] || null
    return {
      id: i + 1,
      type: q.type,
      category: q.category,
      group: q.group,
      context: q.context || null,
      question: q.question,
      options: null,
      answer: q.answer,
      method
    }
  })

  res.json(final)
})

// Serve built React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`FRV Practice server running on http://localhost:${PORT}`)
})
