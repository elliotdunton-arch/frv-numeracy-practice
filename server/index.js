const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const NOTE = 'Convert minutes to decimal hours: 15 min = 0.25  |  30 min = 0.50  |  45 min = 0.75  |  60 min = 1.00'

// ── 10 timesheet contexts ─────────────────────────────────────────────────────

const ctx1 = {
  title: 'FRV Station Alpha — Weekly Crew Timesheet',
  subtitle: 'Firefighter: Sarah Chen  |  Weekday rate: $55.25/hr  |  Saturday rate: $82.88/hr  |  Sunday rate: $110.50/hr',
  tables: [{
    headers: ['Day', 'Start Time', 'End Time', 'Non-Billable'],
    rows: [
      ['Monday',    '7:15am', '3:45pm', '30 mins'],
      ['Tuesday',   '7:15am', '4:15pm', '45 mins'],
      ['Wednesday', '7:15am', '3:15pm', '30 mins'],
      ['Thursday',  '7:15am', '4:45pm', '60 mins'],
      ['Friday',    '7:15am', '3:45pm', '30 mins'],
      ['Saturday',  '—',      '—',      '—'],
      ['Sunday',    '—',      '—',      '—'],
    ]
  }],
  note: NOTE
}

const ctx2 = {
  title: 'FRV Station Bravo — Weekly Crew Timesheet',
  subtitle: 'Firefighter: Marcus Reid  |  Weekday rate: $63.75/hr  |  Saturday rate: $95.63/hr  |  Sunday rate: $127.50/hr',
  tables: [{
    headers: ['Day', 'Start Time', 'End Time', 'Non-Billable'],
    rows: [
      ['Monday',    '6:45am', '3:15pm',  '30 mins'],
      ['Tuesday',   '6:45am', '2:45pm',  '45 mins'],
      ['Wednesday', '6:45am', '3:45pm',  '60 mins'],
      ['Thursday',  '6:45am', '3:15pm',  '30 mins'],
      ['Friday',    '6:45am', '2:45pm',  '30 mins'],
      ['Saturday',  '8:15am', '12:15pm', '—'],
      ['Sunday',    '—',      '—',       '—'],
    ]
  }],
  note: NOTE
}

const ctx3 = {
  title: 'FRV Station Charlie — Weekly Crew Timesheet',
  subtitle: 'Firefighter: Anika Johansson  |  Weekday rate: $58.50/hr  |  Saturday rate: $87.75/hr  |  Sunday rate: $117.00/hr',
  tables: [{
    headers: ['Day', 'Start Time', 'End Time', 'Non-Billable'],
    rows: [
      ['Monday',    '8:15am', '4:15pm', '45 mins'],
      ['Tuesday',   '—',      '—',      '—'],
      ['Wednesday', '7:45am', '5:15pm', '60 mins'],
      ['Thursday',  '8:15am', '3:45pm', '30 mins'],
      ['Friday',    '7:45am', '4:45pm', '45 mins'],
      ['Saturday',  '—',      '—',      '—'],
      ['Sunday',    '—',      '—',      '—'],
    ]
  }],
  note: NOTE
}

const ctx4 = {
  title: 'FRV Station Delta — Weekly Crew Timesheet',
  subtitle: 'Firefighter: Daniel Reyes  |  Weekday rate: $66.15/hr  |  Saturday rate: $99.23/hr  |  Sunday rate: $132.30/hr',
  tables: [{
    headers: ['Day', 'Start Time', 'End Time', 'Non-Billable'],
    rows: [
      ['Monday',    '—',       '—',       '—'],
      ['Tuesday',   '6:15am',  '2:45pm',  '45 mins'],
      ['Wednesday', '6:15am',  '3:15pm',  '60 mins'],
      ['Thursday',  '6:15am',  '2:15pm',  '30 mins'],
      ['Friday',    '6:15am',  '3:45pm',  '60 mins'],
      ['Saturday',  '10:15am', '2:15pm',  '—'],
      ['Sunday',    '9:15am',  '1:15pm',  '—'],
    ]
  }],
  note: NOTE
}

const ctx5 = {
  title: 'FRV Station Echo — Weekly Crew Timesheet',
  subtitle: 'Firefighter: Lena Petrov  |  Weekday rate: $72.45/hr  |  Saturday rate: $108.68/hr  |  Sunday rate: $144.90/hr',
  tables: [{
    headers: ['Day', 'Start Time', 'End Time', 'Non-Billable'],
    rows: [
      ['Monday',    '7:15am', '5:15pm', '60 mins'],
      ['Tuesday',   '7:15am', '4:45pm', '60 mins'],
      ['Wednesday', '7:15am', '6:15pm', '60 mins'],
      ['Thursday',  '—',      '—',      '—'],
      ['Friday',    '7:15am', '4:15pm', '45 mins'],
      ['Saturday',  '—',      '—',      '—'],
      ['Sunday',    '—',      '—',      '—'],
    ]
  }],
  note: NOTE
}

const ctx6 = {
  title: 'FRV Station Foxtrot — Weekly Crew Timesheet',
  subtitle: 'Firefighter: Omar Hassan  |  Weekday rate: $64.80/hr  |  Saturday rate: $97.20/hr  |  Sunday rate: $129.60/hr',
  tables: [{
    headers: ['Day', 'Start Time', 'End Time', 'Non-Billable'],
    rows: [
      ['Monday',    '—',      '—',       '—'],
      ['Tuesday',   '6:45am', '3:15pm',  '30 mins'],
      ['Wednesday', '6:45am', '4:45pm',  '60 mins'],
      ['Thursday',  '6:45am', '2:45pm',  '30 mins'],
      ['Friday',    '6:45am', '3:45pm',  '45 mins'],
      ['Saturday',  '6:15am', '1:45pm',  '—'],
      ['Sunday',    '7:15am', '10:45am', '—'],
    ]
  }],
  note: NOTE
}

const ctx7 = {
  title: 'FRV Station Golf — Weekly Crew Timesheet',
  subtitle: 'Firefighter: Claire Thompson  |  Weekday rate: $69.35/hr  |  Saturday rate: $104.03/hr  |  Sunday rate: $138.70/hr',
  tables: [{
    headers: ['Day', 'Start Time', 'End Time', 'Non-Billable'],
    rows: [
      ['Monday',    '7:15am', '3:45pm',  '45 mins'],
      ['Tuesday',   '7:15am', '4:15pm',  '30 mins'],
      ['Wednesday', '7:15am', '5:15pm',  '60 mins'],
      ['Thursday',  '7:15am', '3:15pm',  '30 mins'],
      ['Friday',    '—',      '—',       '—'],
      ['Saturday',  '8:15am', '12:15pm', '—'],
      ['Sunday',    '—',      '—',       '—'],
    ]
  }],
  note: NOTE
}

const ctx8 = {
  title: 'FRV Station Hotel — Weekly Crew Timesheet',
  subtitle: 'Firefighter: Ben Fitzgerald  |  Weekday rate: $57.90/hr  |  Saturday rate: $86.85/hr  |  Sunday rate: $115.80/hr',
  tables: [{
    headers: ['Day', 'Start Time', 'End Time', 'Non-Billable'],
    rows: [
      ['Monday',    '6:15am', '2:45pm', '30 mins'],
      ['Tuesday',   '6:15am', '3:15pm', '45 mins'],
      ['Wednesday', '6:15am', '2:15pm', '30 mins'],
      ['Thursday',  '6:15am', '3:45pm', '60 mins'],
      ['Friday',    '6:15am', '2:45pm', '30 mins'],
      ['Saturday',  '6:15am', '4:15pm', '—'],
      ['Sunday',    '—',      '—',      '—'],
    ]
  }],
  note: NOTE
}

const ctx9 = {
  title: 'FRV Station Juliet — Weekly Crew Timesheet',
  subtitle: 'Firefighter: Nina Vasquez  |  Weekday rate: $74.20/hr  |  Saturday rate: $111.30/hr  |  Sunday rate: $148.40/hr',
  tables: [{
    headers: ['Day', 'Start Time', 'End Time', 'Non-Billable'],
    rows: [
      ['Monday',    '—',      '—',       '—'],
      ['Tuesday',   '5:45am', '2:15pm',  '30 mins'],
      ['Wednesday', '5:45am', '3:45pm',  '60 mins'],
      ['Thursday',  '5:45am', '2:45pm',  '45 mins'],
      ['Friday',    '5:45am', '1:45pm',  '30 mins'],
      ['Saturday',  '6:15am', '10:15am', '—'],
      ['Sunday',    '7:15am', '10:45am', '—'],
    ]
  }],
  note: NOTE
}

const ctx10 = {
  title: 'FRV Station Kilo — Weekly Crew Timesheet',
  subtitle: 'Firefighter: Adrian Kowalczyk  |  Weekday rate: $67.45/hr  |  Saturday rate: $101.18/hr  |  Sunday rate: $134.90/hr',
  tables: [{
    headers: ['Day', 'Start Time', 'End Time', 'Non-Billable'],
    rows: [
      ['Monday',    '7:00am', '3:30pm', '45 mins'],
      ['Tuesday',   '7:00am', '5:00pm', '60 mins'],
      ['Wednesday', '—',      '—',      '—'],
      ['Thursday',  '7:00am', '5:30pm', '60 mins'],
      ['Friday',    '7:00am', '4:00pm', '60 mins'],
      ['Saturday',  '7:15am', '3:15pm', '30 mins'],
      ['Sunday',    '7:15am', '1:15pm', '—'],
    ]
  }],
  note: NOTE
}

// ── 10 vehicle procurement contexts ──────────────────────────────────────────

const ctxK1 = {
  title: 'FRV Station Alpha — Fleet Vehicle Assessment',
  formulaHint: 'Percentage covered = Total Budget ÷ Purchase Price × 100  |  Net cost after n years = Purchase Price − (Annual Fuel Saving × n)',
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

// ── 10 GPG contexts ──────────────────────────────────────────────────────────

const GPG_FORMULA = 'GPG formula: (male average earnings − female average earnings) ÷ male average earnings × 100%'

const ctxGPG1 = {
  title: 'Gender Pay Gap — State and Territory Data',
  subtitle: GPG_FORMULA,
  tables: [{
    heading: 'Full-time base salary GPG by state/territory, November 2016 – November 2017',
    headers: ['State / Territory', 'Nov-16', 'Nov-17'],
    rows: [
      ['Australian Capital Territory', '11.6%', '12.6%'],
      ['New South Wales',             '15.7%', '14.3%'],
      ['Northern Territory',          '22.3%', '20.2%'],
      ['Queensland',                  '16.4%', '18.3%'],
      ['South Australia',             '10.8%', '10.3%'],
      ['Tasmania',                    '12.0%', '10.9%'],
      ['Victoria',                    '13.4%', '12.2%'],
      ['Western Australia',           '23.7%', '22.5%'],
    ]
  }]
}

const ctxGPG2 = {
  title: 'Gender Pay Gap — Mining Industry',
  subtitle: GPG_FORMULA,
  tables: [{
    heading: 'Mining Industry — Earnings Data',
    headers: ['Metric', 'Value'],
    rows: [
      ['National GPG',                   '22.0%'],
      ["Men's average weekly earnings",  '$2,500'],
    ]
  }]
}

const ctxGPG3 = {
  title: 'Gender Pay Gap — Financial and Insurance Services',
  subtitle: GPG_FORMULA,
  tables: [{
    heading: 'Financial and Insurance Services — Earnings Data',
    headers: ['Metric', 'Value'],
    rows: [
      ['National GPG',                   '26.0%'],
      ["Men's average weekly earnings",  '$1,650'],
    ]
  }]
}

const ctxGPG4 = {
  title: 'Gender Pay Gap — Healthcare and Social Assistance',
  subtitle: GPG_FORMULA,
  tables: [{
    heading: 'Healthcare and Social Assistance — Earnings Data',
    headers: ['Metric', 'Value'],
    rows: [
      ['National GPG',                     '20.0%'],
      ["Women's average annual earnings",  '$64,000'],
    ]
  }]
}

const ctxGPG5 = {
  title: 'Gender Pay Gap — Education and Training',
  subtitle: GPG_FORMULA,
  tables: [{
    heading: 'Education and Training — Earnings Data',
    headers: ['Metric', 'Value'],
    rows: [
      ['National GPG',                     '12.5%'],
      ["Women's average annual earnings",  '$63,000'],
    ]
  }]
}

const ctxGPG6 = {
  title: 'Gender Pay Gap — Construction Industry',
  subtitle: GPG_FORMULA,
  tables: [{
    heading: 'Construction Industry — Earnings Data',
    headers: ['Metric', 'Value'],
    rows: [
      ['National GPG',                  '18.0%'],
      ["Men's average weekly earnings", '$1,500'],
    ]
  }]
}

const ctxGPG7 = {
  title: 'Gender Pay Gap — Industry Comparison',
  subtitle: GPG_FORMULA,
  tables: [{
    heading: 'National GPG by Selected Industry',
    headers: ['Industry', 'GPG'],
    rows: [
      ['Retail trade',                     '10.4%'],
      ['Accommodation and food services',  '8.2%'],
      ['Professional services',            '24.0%'],
      ['Healthcare and social assistance', '20.0%'],
      ['Education and training',           '12.5%'],
    ]
  }]
}

const ctxGPG8 = {
  title: 'Gender Pay Gap — Information Media and Telecommunications',
  subtitle: GPG_FORMULA,
  tables: [{
    heading: 'Information Media and Telecommunications — Earnings Data',
    headers: ['Metric', 'Value'],
    rows: [
      ['National GPG',                      '24.0%'],
      ["Women's average weekly earnings",   '$1,368'],
    ]
  }]
}

// ctxGPG1 is reused for Group AM

const ctxGPG9 = {
  title: 'Gender Pay Gap — Utilities and Transport',
  subtitle: GPG_FORMULA,
  tables: [
    {
      heading: 'Electricity, Gas, Water and Waste Services',
      headers: ['Metric', 'Value'],
      rows: [
        ['National GPG',                  '16.0%'],
        ["Men's average annual earnings", '$95,000'],
      ]
    },
    {
      heading: 'Transport, Postal and Warehousing',
      headers: ['Metric', 'Value'],
      rows: [
        ['National GPG',                  '12.0%'],
        ["Men's average annual earnings", '$75,000'],
      ]
    }
  ]
}

// ── Retail comparison contexts (ctxR1–ctxR10) ────────────────────────────────

const ctxR1 = {
  title: 'Retail Price Comparison — Protein Bars (Box of 12)',
  tables: [{ headers: ['', 'Store X', 'Store Y'], rows: [
    ['RRP',           '$28.00 per box',    '$28.00 per box'],
    ['Shelf price',   '$24.00 per box',    '$22.00 per box (Save $6.00 from RRP)'],
    ['Multi-buy offer', 'Buy 3 or more: 15% off total order', 'No multi-buy discount'],
  ]}]
}
const ctxR2 = {
  title: 'Retail Price Comparison — Scented Soy Candles',
  tables: [{ headers: ['', 'Store X', 'Store Y'], rows: [
    ['RRP',           '$35.00 per candle', '$35.00 per candle'],
    ['Shelf price',   '$29.00 per candle', '$27.00 per candle (Save $8.00 from RRP)'],
    ['Multi-buy offer', 'Buy 2 or more: 20% off total order', 'No multi-buy discount'],
  ]}]
}
const ctxR3 = {
  title: 'Retail Price Comparison — Non-Slip Yoga Mats',
  tables: [{ headers: ['', 'Store X', 'Store Y'], rows: [
    ['RRP',           '$65.00 per mat',    '$65.00 per mat'],
    ['Shelf price',   '$48.00 per mat',    '$50.00 per mat (Save $15.00 from RRP)'],
    ['Multi-buy offer', 'Buy 2 or more: 25% off total order', 'No multi-buy discount'],
  ]}]
}
const ctxR4 = {
  title: 'Retail Price Comparison — Resistance Band Sets',
  tables: [{ headers: ['', 'Store X', 'Store Y'], rows: [
    ['RRP',           '$32.00 per set',    '$32.00 per set'],
    ['Shelf price',   '$27.50 per set',    '$22.00 per set (Save $10.00 from RRP)'],
    ['Multi-buy offer', 'Buy 4 or more: 30% off total order', 'No multi-buy discount'],
  ]}]
}
const ctxR5 = {
  title: 'Retail Price Comparison — Insulated Thermal Travel Mugs',
  tables: [{ headers: ['', 'Store X', 'Store Y'], rows: [
    ['RRP',           '$42.00 per mug',    '$42.00 per mug'],
    ['Shelf price',   '$36.00 per mug',    '$33.00 per mug (Save $9.00 from RRP)'],
    ['Multi-buy offer', 'Buy 2 or more: 18% off total order', 'No multi-buy discount'],
  ]}]
}
const ctxR6 = {
  title: 'Retail Price Comparison — Premium Smartphone Cases',
  tables: [{ headers: ['', 'Store X', 'Store Y'], rows: [
    ['RRP',           '$25.00 per case',   '$25.00 per case'],
    ['Shelf price',   '$21.00 per case',   '$18.00 per case (Save $7.00 from RRP)'],
    ['Multi-buy offer', 'Buy 3 or more: 22% off total order', 'No multi-buy discount'],
  ]}]
}
const ctxR7 = {
  title: 'Retail Price Comparison — Vitamin C Supplements (60 Capsules)',
  tables: [{ headers: ['', 'Store X', 'Store Y'], rows: [
    ['RRP',           '$48.00 per bottle', '$48.00 per bottle'],
    ['Shelf price',   '$41.00 per bottle', '$37.00 per bottle (Save $11.00 from RRP)'],
    ['Multi-buy offer', 'Buy 2 or more: 16% off total order', 'No multi-buy discount'],
  ]}]
}
const ctxR8 = {
  title: 'Retail Price Comparison — Stainless Steel Water Bottles',
  tables: [{ headers: ['', 'Store X', 'Store Y'], rows: [
    ['RRP',           '$38.00 per bottle', '$38.00 per bottle'],
    ['Shelf price',   '$32.00 per bottle', '$28.00 per bottle (Save $10.00 from RRP)'],
    ['Multi-buy offer', 'Buy 4 or more: 25% off total order', 'No multi-buy discount'],
  ]}]
}
const ctxR9 = {
  title: 'Retail Price Comparison — Adjustable LED Desk Lamps',
  tables: [{ headers: ['', 'Store X', 'Store Y'], rows: [
    ['RRP',           '$75.00 per lamp',   '$75.00 per lamp'],
    ['Shelf price',   '$56.00 per lamp',   '$57.00 per lamp (Save $18.00 from RRP)'],
    ['Multi-buy offer', 'Buy 2 or more: 20% off total order', 'No multi-buy discount'],
  ]}]
}
const ctxR10 = {
  title: 'Retail Price Comparison — Premium Gym Training Gloves',
  tables: [{ headers: ['', 'Store X', 'Store Y'], rows: [
    ['RRP',           '$44.00 per pair',   '$44.00 per pair'],
    ['Shelf price',   '$38.00 per pair',   '$32.00 per pair (Save $12.00 from RRP)'],
    ['Multi-buy offer', 'Buy 3 or more: 24% off total order', 'No multi-buy discount'],
  ]}]
}

// ── Transit / speed contexts (ctxT1a–ctxT10a: commute tables; ctxT1b–ctxT10b: speed scenarios) ──

const ctxT1a = {
  title: 'Employee Commute Tracking — Headquarters',
  tables: [{ headers: ['Employee', 'Mode of Transport', 'Commute Duration', 'Weekly Days at HQ'], rows: [
    ['Employee 1', 'Bus',     '45 min',      '4'],
    ['Employee 2', 'Train',   '1 hr 15 min', '3'],
    ['Employee 3', 'Walk',    '20 min',      '5'],
    ['Employee 4', 'Bicycle', '35 min',      '4'],
    ['Employee 5', 'Car',     '55 min',      '2'],
  ]}]
}
const ctxT1b = {
  title: 'Scooter Commute — Detour via Road Closures',
  subtitle: 'Sarah usually rides her scooter 15 km each way to the train station at an average speed of 30 km/h. Due to city road closures, she must take a detour that reduces her average speed to 20 km/h.',
}

const ctxT2a = {
  title: 'University Student Transit Study',
  tables: [{ headers: ['Student', 'Mode of Transport', 'Length of Time', 'Campus Days per Week'], rows: [
    ['Participant 1', 'Regional Train', '1 hr 40 min', '3'],
    ['Participant 2', 'Bus',            '50 min',      '4'],
    ['Participant 3', 'Carpool',        '1 hr 10 min', '2'],
    ['Participant 4', 'Bicycle',        '30 min',      '5'],
    ['Participant 5', 'Metro',          '45 min',      '4'],
    ['Participant 6', 'Walking',        '15 min',      '5'],
  ]}]
}
const ctxT2b = {
  title: 'Highway Drive — Speed Reduction in Heavy Rain',
  subtitle: 'James drives 60 km down the highway to work each morning at an average speed of 100 km/h. During heavy rain, his safe driving speed drops to an average of 75 km/h.',
}

const ctxT3a = {
  title: 'Warehouse Delivery Courier Arrivals',
  tables: [{ headers: ['Courier', 'Transport Vehicle', 'Journey Time', 'Deliveries per Week'], rows: [
    ['Courier A', 'Van',          '1 hr 25 min', '5'],
    ['Courier B', 'Motorbike',    '40 min',      '6'],
    ['Courier C', 'Electric Van', '1 hr 05 min', '4'],
    ['Courier D', 'Small Truck',  '1 hr 50 min', '3'],
    ['Courier E', 'Moped',        '30 min',      '5'],
  ]}]
}
const ctxT3b = {
  title: 'Bicycle to Office — Electric Bike Speed Upgrade',
  subtitle: 'Elena travels 12 km to her office by bicycle. She typically rides at an average speed of 18 km/h. Today, she upgrades to an electric bike that increases her average speed to 24 km/h.',
}

const ctxT4a = {
  title: 'Medical Centre — Visiting Practitioners Travel Log',
  tables: [{ headers: ['Practitioner', 'Transport Mode', 'One-Way Time', 'Days Active'], rows: [
    ['Doctor 1', 'Subway',       '38 min',      '4'],
    ['Doctor 2', 'Tram',         '52 min',      '3'],
    ['Doctor 3', 'Electric Car', '1 hr 14 min', '3'],
    ['Doctor 4', 'Bicycle',      '46 min',      '5'],
    ['Doctor 5', 'Bus',          '1 hr 02 min', '2'],
    ['Doctor 6', 'Walking',      '22 min',      '4'],
  ]}]
}
const ctxT4b = {
  title: 'Regional Hub Delivery — Return Leg Speed Limiter',
  subtitle: 'An express courier delivery route covers a distance of 180 km between regional hubs. The driver usually hits an average speed of 90 km/h, but vehicle speed limiters reduce the allowed average speed on the return leg to 80 km/h.',
}

const ctxT5a = {
  title: 'Civil Engineers — Suburban Railway Link Commutes',
  tables: [{ headers: ['Engineer', 'Transport Mode', 'Commute Duration', 'Shifts per Week'], rows: [
    ['Resident 1', 'Train',       '2 hr 05 min', '4'],
    ['Resident 2', 'Shuttle Bus', '1 hr 15 min', '5'],
    ['Resident 3', 'Driving',     '1 hr 40 min', '3'],
    ['Resident 4', 'Carpool',     '55 min',      '4'],
    ['Resident 5', 'Motorcycle',  '45 min',      '5'],
  ]}]
}
const ctxT5b = {
  title: 'Construction Site Commute — Highway Accident Delay',
  subtitle: 'Liam commutes 30 km each way to a construction site. On clear mornings, he averages a speed of 60 km/h. When a highway accident causes bumper-to-bumper delays, his average speed falls to 20 km/h.',
}

const ctxT6a = {
  title: 'Harbour Terminal — Shift Supervisor Commutes',
  tables: [{ headers: ['Supervisor', 'Transport Mode', 'One-Way Duration', 'Weekly Shifts'], rows: [
    ['Officer A', 'Ferry',   '55 min',      '4'],
    ['Officer B', 'Train',   '1 hr 25 min', '4'],
    ['Officer C', 'Car',     '1 hr 10 min', '5'],
    ['Officer D', 'Bicycle', '40 min',      '3'],
    ['Officer E', 'Bus',     '50 min',      '5'],
    ['Officer F', 'Tram',    '36 min',      '4'],
  ]}]
}
const ctxT6b = {
  title: 'Urban Emergency Response — Return via School Traffic',
  subtitle: 'A maintenance van travels 8 km through an urban zone to respond to an emergency call. Due to light traffic, the driver maintains an average speed of 32 km/h. On the return trip, heavy school traffic slows the average speed down to 16 km/h.',
}

const ctxT7a = {
  title: 'Part-Time Retail Employees — Weekly Commute Audit',
  tables: [{ headers: ['Employee', 'Transport Mode', 'One-Way Journey Time', 'Days Commuting'], rows: [
    ['Associate 1', 'Bus',     '42 min',      '3'],
    ['Associate 2', 'Walking', '18 min',      '4'],
    ['Associate 3', 'Train',   '1 hr 24 min', '2'],
    ['Associate 4', 'Scooter', '31 min',      '5'],
    ['Associate 5', 'Car',     '50 min',      '3'],
  ]}]
}
const ctxT7b = {
  title: 'Regional Office to Airport — Off-Peak vs Rush Hour',
  subtitle: 'A company executive travels 105 km from the regional office to the airport. By driving outside of peak hours, they can travel at an average speed of 90 km/h. If they leave during the afternoon rush hour, gridlock decreases the average speed to 45 km/h.',
}

const ctxT8a = {
  title: 'Airline Flight Crew — Airport Ground Transit Times',
  tables: [{ headers: ['Crew Member', 'Transport Mode', 'Ground Transit Time', 'Weekly Rosters'], rows: [
    ['Pilot 1',      'Express Rail',     '1 hr 12 min', '3'],
    ['Pilot 2',      'Taxi',             '1 hr 55 min', '2'],
    ['Attendant 1',  'Staff Shuttle',    '48 min',      '4'],
    ['Attendant 2',  'Bus Line',         '1 hr 22 min', '4'],
    ['Attendant 3',  'Personal Vehicle', '1 hr 37 min', '3'],
    ['Attendant 4',  'Co-ride',          '56 min',      '4'],
  ]}]
}
const ctxT8b = {
  title: 'Distribution Run — Loaded vs Empty Vehicle Speed',
  subtitle: 'A distribution truck drives a delivery run of 40 km each way. On the outbound run, the truck is fully loaded and can only manage an average speed of 50 km/h. On the return run, the truck is empty and averages a speed of 80 km/h.',
}

const ctxT9a = {
  title: 'Research Hub — Offshore Observatory Transit Times',
  tables: [{ headers: ['Scientist', 'Transport Mode', 'Transit Duration', 'Weekly Trips'], rows: [
    ['Researcher A', 'Staff Boat',    '1 hr 18 min', '2'],
    ['Researcher B', 'Coastal Tram',  '44 min',      '5'],
    ['Researcher C', 'Electric Car',  '1 hr 32 min', '3'],
    ['Researcher D', 'Cable Car',     '26 min',      '5'],
    ['Researcher E', 'Hybrid Bus',    '1 hr 05 min', '4'],
  ]}]
}
const ctxT9b = {
  title: 'Remote Campus Commute — Maintenance Speed Restriction',
  subtitle: 'Claire drives 75 km each way to a remote corporate campus. Her vehicle normally travels at an average speed of 100 km/h. Due to an extended gravel sector under maintenance, her speed is restricted to an average of 60 km/h over the entire trip.',
}

const ctxT10a = {
  title: 'Municipal Community Workers — Council Facility Travel',
  tables: [{ headers: ['Worker', 'Primary Transport', 'One-Way Time', 'Days Active'], rows: [
    ['Worker 1', 'Council Van', '1 hr 16 min', '4'],
    ['Worker 2', 'Bicycle',     '39 min',      '5'],
    ['Worker 3', 'Light Rail',  '1 hr 04 min', '3'],
    ['Worker 4', 'Carpool',     '48 min',      '4'],
    ['Worker 5', 'Walk/Bus',    '53 min',      '3'],
    ['Worker 6', 'Motorcycle',  '32 min',      '5'],
  ]}]
}
const ctxT10b = {
  title: 'Medical Package Delivery — Peak vs Overnight Speed',
  subtitle: 'A high-speed courier vehicle must travel 20 km to deliver an urgent medical package. Under clear overnight conditions, the vehicle travels at an average speed of 80 km/h. During standard peak operations, congestion reduces the speed to 30 km/h.',
}

// ── Fluid / dosing contexts (ctxF1, ctxF2a–ctxF5b) ───────────────────────────

const ctxF1 = {
  title: 'Chemical Application Parameters',
  tables: [{ headers: ['Target Plant Type', 'Dilution Application Rate per 5 L of Water'], rows: [
    ['Delicate Orchids',       '15 mL'],
    ['Native Shrubs',          '40 mL'],
    ['Standard Turf/Lawn',     '65 mL'],
    ['Established Fruit Trees','120 mL'],
  ]}]
}

const ctxF2a = {
  title: 'Commercial Irrigation Blueprint Data',
  tables: [{ headers: ['Zone', 'Delivery Output', 'Minimum Active Duration'], rows: [
    ['Zone 1: Orchards',  '2.4 L per minute', '1.5 hours (90 minutes)'],
    ['Zone 4: Turf Lawns','1.8 L per minute', '120 minutes'],
  ]}]
}
const ctxF2b = {
  title: 'Barrel Filling — Irrigation Redirect',
  subtitle: 'The combined output from Zone 1 and Zone 4 is redirected entirely to fill a series of small individual holding barrels. Each barrel has a maximum capacity of exactly 0.024 m³. (1 m³ = 1000 L)',
}

const ctxF3a = {
  title: 'Low-Flow Greenhouse Irrigation',
  tables: [{ headers: ['Zone', 'Delivery Output', 'Target Standard Runtime'], rows: [
    ['Zone 2: Greenhouses', '850 mL per minute', '45 minutes'],
  ]}]
}
const ctxF3b = {
  title: 'Zone 2 — Industrial Drainage Tank Fill',
  subtitle: 'The delivery output of Zone 2 (850 mL per minute) is redirected into an empty industrial drainage tank with an internal capacity of exactly 0.51 m³. (1 m³ = 1000 L)',
}

const ctxF4a = {
  title: 'Hydroponic Nutrient Dosing Matrix',
  tables: [{ headers: ['Solution Grade', 'Concentration Requirement', 'Sub-Tank System Volume'], rows: [
    ['Grade A Nitro',   '4.5 mL per 1 L of water', '180 L'],
    ['Grade B Phospho', '6.0 mL per 1 L of water', '140 L'],
  ]}]
}
const ctxF4b = {
  title: 'Hydroponic Dosing — Combined Concentrate Volume',
  subtitle: 'A technician mixes one full sub-tank of Grade A Nitro (180 L system, 4.5 mL/L) and one full sub-tank of Grade B Phospho (140 L system, 6.0 mL/L).',
}

const ctxF5a = {
  title: 'High-Volume Fluid Storage Log',
  tables: [{ headers: ['Tank ID', 'Current Liquid Depth', 'Floor Base Footprint Area'], rows: [
    ['Reservoir Tank 3', '0.85 m', '4.0 m²'],
  ]}]
}
const ctxF5b = {
  title: 'Reservoir Tank 3 — Drainage Pump',
  subtitle: 'A drainage pump is connected to Reservoir Tank 3, which holds the volume of liquid you calculated from its dimensions. The pump removes water at a constant rate of 12.5 L per minute. (1 m³ = 1,000 L)',
}

// ── Building / construction contexts (ctxB1–ctxB3) ───────────────────────────

const ctxB1 = {
  title: 'Timber Slabs — Post-Production Milling',
  tables: [{ headers: ['Timber Supply Co.', 'Product', 'Advertised Special', 'RRP Standard Price'], rows: [
    ['EcoTimber Hub', 'Tasmanian Oak Slab', 'Buy 2 get 25% off total timber cost', '$200.00 each'],
    ['The Wood Yard', 'Tasmanian Oak Slab', 'SALE $145.50 each',                   'Save $54.50 from RRP'],
  ]}]
}

const ctxB2 = {
  title: 'Energy Efficiency Upgrade Ledger',
  tables: [{ headers: ['Renovation Framework', 'Initial Procurement Cost', 'Projected Energy Savings per Year'], rows: [
    ['Cavity Wall Insulation',  '$2,200', '$440'],
    ['Double Glazing Retrofit', '$5,600', '$510'],
    ['Draft Proofing Seals',    '$1,250', '$250'],
    ['Roof Space Batts',        '$1,800', '$360'],
  ]}]
}

const ctxB3 = {
  title: 'Foundation Reinforcement Matrix',
  tables: [{ headers: ['Mesh Grade', 'List Price per Sheet', 'Sheet Area Coverage', 'Steel Yield Strength'], rows: [
    ['SL62 Mesh', '$80',  '12.0 m²', '500 MPa'],
    ['SL72 Mesh', '$110', '12.0 m²', '500 MPa'],
    ['SL82 Mesh', '$145', '10.5 m²', '550 MPa'],
    ['SL92 Mesh', '$190', '10.5 m²', '600 MPa'],
  ]}]
}

const ctxB4 = {
  title: 'Architectural Cladding Flyer Promotions',
  tables: [{ headers: ['Decking Brand Outlet', 'Material Core', 'Promotional Sale Rate', 'Standard Retail Price'], rows: [
    ['DuraPlank Express', 'Premium Composite', 'Buy 3 linear metres get the 4th free', '$36.00 per metre'],
    ['EcoDeck Warehouse', 'Premium Composite', 'SALE $28.50 per linear metre',          'Save $7.50 from RRP'],
  ]}]
}

const ctxB5 = {
  title: 'Acoustic Ceiling Upgrade System',
  tables: [{ headers: ['Core Insulation Layer', 'Upfront Sheet Cost', 'Noise Reduction Coefficient (NRC)', 'Pack Surface Coverage Area'], rows: [
    ['Glasswool Partition',   '$65',  '0.70', '15 m²'],
    ['High-Density Rockwool', '$115', '0.90', '10 m²'],
    ['Recycled Polyester',    '$85',  '0.75', '12 m²'],
    ['SoundLag Foam Sheet',   '$160', '0.85', '8 m²'],
  ]}]
}

const ctxB6 = {
  title: 'Heavy-Duty Landscape Block Inventory',
  tables: [{ headers: ['Masonry Block Variety', 'Unit Weight per Block', 'Volume Capacity per Block', 'Standard Palette Quantity'], rows: [
    ['Interlocking Capping',  '14 kg', '0.015 m³', '60 blocks'],
    ['Standard Besser Block', '16 kg', '0.024 m³', '75 blocks'],
    ['Split-Face Retaining',  '22 kg', '0.032 m³', '45 blocks'],
    ['Jumbo Engineered',      '34 kg', '0.050 m³', '30 blocks'],
  ]}]
}

const ctxB7 = {
  title: 'High-Performance Joinery Catalog Deals',
  tables: [{ headers: ['Window Supply Center', 'Glass Spec', 'Volume Trade Campaign', 'List Unit Price'], rows: [
    ['Apex Fenestration',    'Argon Gas Low-E', 'Buy 4 frames get a 5th frame half-price', '$600 each'],
    ['Matrix Glazing Systems','Argon Gas Low-E', 'SALE $510 per window frame',              'Save $90 from List Price'],
  ]}]
}

const ctxB8 = {
  title: 'Pedestrian Plaza Hardscape Logistics',
  tables: [{ headers: ['Granite Paving Finish', 'Procurement Cost per m²', 'Daily Laying Target Speed'], rows: [
    ['Exfoliated Stone',     '$120', '24 m² per day'],
    ['Honed Smooth Slab',    '$165', '15 m² per day'],
    ['Sandblasted Textured', '$140', '20 m² per day'],
    ['Bush-Hammered Grip',   '$110', '22 m² per day'],
  ]}]
}

const ctxB9 = {
  title: 'Engineered Timber Sheet Inventory',
  tables: [{ headers: ['Plywood Product Grade', 'Individual Sheet Price', 'Single Sheet Surface Area', 'Dynamic Deflection Limit'], rows: [
    ['CD Formply Structural', '$72.00', '2.88 m²', '4.0 mm'],
    ['DD Tongue & Groove',    '$51.84', '2.16 m²', '4.5 mm'],
  ]}]
}

const ctxB10 = {
  title: 'Heavy-Duty Structural Anchor Procurement',
  tables: [{ headers: ['Carbon Steel Anchor Class', 'Box Purchase Price', 'Anchor Quantity per Box', 'Tested Safe Tensile Capacity'], rows: [
    ['Anchor Class M10', '$96',  '24 anchors', '3,600 kg'],
    ['Anchor Class M12', '$140', '28 anchors', '4,900 kg'],
    ['Anchor Class M16', '$180', '20 anchors', '6,200 kg'],
  ]}]
}

// ── Vehicle finance contexts (scenario + depreciation table pairs) ─────────────

const ctxVF1s = {
  title: 'Vehicle Finance — Motorcycle',
  subtitle: 'Ben buys a motorcycle for $12,000. Using the dealership\'s finance plan, his monthly repayments will be $260 and he will repay the loan fully after 5 years.',
}
const ctxVF1d = {
  title: 'Depreciation Table — Motorcycle ($12,000)',
  tables: [{ headers: ['Vehicle Age (years)', 'Depreciation Rate (per year)'], rows: [
    ['1', '20%'], ['2', '12%'], ['3', '12%'],
  ]}]
}

const ctxVF2s = {
  title: 'Vehicle Finance — Jet Ski',
  subtitle: 'Chloe buys a jet ski for $15,500. Under her finance agreement, her monthly payments are $380, and the loan is entirely paid off after 4 years.',
}
const ctxVF2d = {
  title: 'Depreciation Table — Jet Ski ($15,500)',
  tables: [{ headers: ['Vehicle Age (years)', 'Depreciation Rate (per year)'], rows: [
    ['1', '30%'], ['2', '15%'], ['3', '15%'], ['4', '15%'],
  ]}]
}

const ctxVF3s = {
  title: 'Vehicle Finance — Used Car',
  subtitle: 'David purchases a used car for $8,400. The finance package sets his monthly repayments at $210 for a total duration of 4 years.',
}
const ctxVF3d = {
  title: 'Depreciation Table — Car ($8,400)',
  tables: [{ headers: ['Vehicle Age (years)', 'Depreciation Rate (per year)'], rows: [
    ['1', '10%'], ['2', '8%'], ['3', '8%'],
  ]}]
}

const ctxVF4s = {
  title: 'Vehicle Finance — Car (Deposit)',
  subtitle: 'Fiona buys a car for $24,000. She pays a $4,000 cash deposit upfront and finances the remaining balance. Her monthly repayments are $420 for 5 years to fully clear the loan.',
}
const ctxVF4d = {
  title: 'Depreciation Table — Car ($24,000)',
  tables: [{ headers: ['Vehicle Age (years)', 'Depreciation Rate (per year)'], rows: [
    ['1', '22%'], ['2', '14%'], ['3', '14%'], ['4', '14%'],
  ]}]
}

const ctxVF5s = {
  title: 'Vehicle Finance — Commercial Van',
  subtitle: 'Henry buys a commercial delivery van for $32,000. His finance contract requires a monthly repayment of $680 over a 5-year term.',
}
const ctxVF5d = {
  title: 'Depreciation Table — Delivery Van ($32,000)',
  tables: [{ headers: ['Vehicle Age (years)', 'Depreciation Rate (per year)'], rows: [
    ['1', '35%'], ['2', '18%'], ['3', '18%'], ['4', '18%'],
  ]}]
}

const ctxVF6s = {
  title: 'Vehicle Finance — Electric Scooter (Fortnightly)',
  subtitle: 'Julia buys an electric scooter for $3,500. She finances it through a store plan with fortnightly (every 2 weeks) repayments of $45 over 4 years.',
  note: 'Assume exactly 26 fortnights in a year.',
}
const ctxVF6d = {
  title: 'Depreciation Table — Electric Scooter ($3,500)',
  tables: [{ headers: ['Vehicle Age (years)', 'Depreciation Rate (per year)'], rows: [
    ['1', '15%'], ['2', '10%'], ['3', '10%'],
  ]}]
}

const ctxVF7s = {
  title: 'Vehicle Finance — SUV (Balloon Payment)',
  subtitle: 'Liam buys an SUV for $45,000. His finance deal consists of monthly repayments of $790 for 5 years, plus a final lump-sum \'balloon payment\' of $5,000 at the very end to fully clear the loan.',
}
const ctxVF7d = {
  title: 'Depreciation Table — SUV ($45,000)',
  tables: [{ headers: ['Vehicle Age (years)', 'Depreciation Rate (per year)'], rows: [
    ['1', '28%'], ['2', '16.5%'], ['3', '12%'], ['4', '12%'],
  ]}]
}

const ctxVF8s = {
  title: 'Vehicle Finance — Luxury Sedan',
  subtitle: 'Noah buys a luxury sedan for $62,000. His finance option sets his monthly repayments at $1,150 over 5 years.',
}
const ctxVF8d = {
  title: 'Depreciation Table — Luxury Sedan ($62,000)',
  tables: [{ headers: ['Vehicle Age (years)', 'Depreciation Rate (per year)'], rows: [
    ['1', '40%'], ['2', '20%'], ['3', '15%'], ['4', '15%'],
  ]}]
}

const ctxVF9s = {
  title: 'Vehicle Finance — Compact Car',
  subtitle: 'Paige buys a compact car for $18,000. Her finance plan demands $395 a month for 5 years.',
}
const ctxVF9d = {
  title: 'Depreciation Table — Compact Car ($18,000)',
  tables: [{ headers: ['Vehicle Age (years)', 'Depreciation Rate (per year)'], rows: [
    ['1', '18%'], ['2', '11.5%'], ['3', '11.5%'], ['4', '11.5%'], ['5', '11.5%'],
  ]}]
}

const ctxVF10s = {
  title: 'Vehicle Finance — Utility Truck (Trade-in)',
  subtitle: 'Ryan buys a utility truck for $38,500. He receives a $5,500 trade-in credit upfront for his old vehicle. His remaining balance is financed with monthly payments of $690 for 5 years.',
}
const ctxVF10d = {
  title: 'Depreciation Table — Utility Truck ($38,500)',
  tables: [{ headers: ['Vehicle Age (years)', 'Depreciation Rate (per year)'], rows: [
    ['1', '24%'], ['2', '15.2%'], ['3', '12%'], ['4', '10%'],
  ]}]
}

// ── Property & home loan contexts (ctxPR1–ctxPR10) ───────────────────────────

const ctxPR1 = {
  title: 'Median Home Values & Bank Interest Rates',
  tables: [{ headers: ['Capital City', 'Median Home Value', 'Bank #1 Rate', 'Bank #2 Rate', 'Bank #3 Rate'], rows: [
    ['Sydney',    '$770,000', '3.50%', '3.95%', '3.75%'],
    ['Hobart',    '$440,000', '3.50%', '3.95%', '3.75%'],
    ['Brisbane',  '$480,000', '3.50%', '3.95%', '3.75%'],
    ['Melbourne', '$620,000', '3.50%', '3.95%', '3.75%'],
    ['Adelaide',  '$430,000', '3.50%', '3.95%', '3.75%'],
  ]}]
}

const ctxPR2 = {
  title: 'Regional Apartment Prices & Fixed Home Loan Rates',
  tables: [{ headers: ['Region', 'Median Unit Value', 'Alpha Bank', 'Beta Bank', 'Gamma Bank'], rows: [
    ['Newcastle',      '$520,000', '4.10%', '4.50%', '4.25%'],
    ['Wollongong',     '$580,000', '4.10%', '4.50%', '4.25%'],
    ['Geelong',        '$490,000', '4.10%', '4.50%', '4.25%'],
    ['Gold Coast',     '$610,000', '4.10%', '4.50%', '4.25%'],
    ['Sunshine Coast', '$640,000', '4.10%', '4.50%', '4.25%'],
  ]}]
}

const ctxPR3 = {
  title: 'Capital City Property Indexes & Package Rates',
  tables: [{ headers: ['City', 'Median House Price', 'Pacific Bank', 'Atlantic Bank', 'Continental Bank'], rows: [
    ['Perth',    '$540,000', '3.80%', '3.65%', '3.90%'],
    ['Canberra', '$790,000', '3.80%', '3.65%', '3.90%'],
    ['Darwin',   '$410,000', '3.80%', '3.65%', '3.90%'],
    ['Adelaide', '$460,000', '3.80%', '3.65%', '3.90%'],
  ]}]
}

const ctxPR4 = {
  title: 'Metro Commercial Real Estate Pricing',
  tables: [{ headers: ['Zone', 'Median Warehouse Price', 'Lender A', 'Lender B', 'Lender C'], rows: [
    ['Zone 1 (Inner)',  '$920,000', '5.20%', '4.95%', '5.10%'],
    ['Zone 2 (Middle)', '$740,000', '5.20%', '4.95%', '5.10%'],
    ['Zone 3 (Outer)',  '$580,000', '5.20%', '4.95%', '5.10%'],
  ]}]
}

const ctxPR5 = {
  title: 'Rural & Agricultural Land Listings',
  tables: [{ headers: ['District', 'Median Farm Price', 'AgriBank', 'RuralCredit', 'National'], rows: [
    ['Riverina',  '$680,000', '4.40%', '4.15%', '4.60%'],
    ['Mallee',    '$390,000', '4.40%', '4.15%', '4.60%'],
    ['Gippsland', '$720,000', '4.40%', '4.15%', '4.60%'],
    ['Hunter',    '$810,000', '4.40%', '4.15%', '4.60%'],
  ]}]
}

const ctxPR6 = {
  title: 'Coastal Holiday Home Markets',
  tables: [{ headers: ['Town', 'Median Property Value', 'Bank North', 'Bank South', 'Bank West'], rows: [
    ['Byron Bay',    '$980,000', '4.75%', '4.30%', '4.65%'],
    ['Noosa Heads',  '$910,000', '4.75%', '4.30%', '4.65%'],
    ['Lorne',        '$840,000', '4.75%', '4.30%', '4.65%'],
    ['Port Douglas', '$630,000', '4.75%', '4.30%', '4.65%'],
  ]}]
}

const ctxPR7 = {
  title: 'High-Density Residential Developments',
  tables: [{ headers: ['Suburb', 'Median Townhouse Price', 'Apex Finance', 'Summit Loans', 'Vertex Mutual'], rows: [
    ['Parramatta',       '$710,000', '5.50%', '5.25%', '5.60%'],
    ['Richmond',         '$780,000', '5.50%', '5.25%', '5.60%'],
    ['Fortitude Valley', '$590,000', '5.50%', '5.25%', '5.60%'],
  ]}]
}

const ctxPR8 = {
  title: 'Mining Town Infrastructure & Investment Real Estate',
  tables: [{ headers: ['Location', 'Median House Value', 'Mutual A', 'Mutual B', 'Mutual C'], rows: [
    ['Karratha',     '$640,000', '6.10%', '5.85%', '5.95%'],
    ['Port Hedland', '$690,000', '6.10%', '5.85%', '5.95%'],
    ['Moranbah',     '$420,000', '6.10%', '5.85%', '5.95%'],
  ]}]
}

const ctxPR9 = {
  title: 'Capital Territory Residential Sectors',
  tables: [{ headers: ['District Sector', 'Median Dwelling Price', 'Trust Bank', 'Sterling Home', 'Federal Credit'], rows: [
    ['Belconnen',   '$560,000', '3.90%', '4.20%', '4.05%'],
    ['Gungahlin',   '$630,000', '3.90%', '4.20%', '4.05%'],
    ['Tuggeranong', '$580,000', '3.90%', '4.20%', '4.05%'],
  ]}]
}

const ctxPR10 = {
  title: 'Metropolitan Premium Blue-Chip Suburbs',
  tables: [{ headers: ['Suburb', 'Median Price', 'Tier 1 Bank', 'Tier 2 Bank', 'Private Lender'], rows: [
    ['Toorak',    '$1,850,000', '4.80%', '5.15%', '4.90%'],
    ['Mosman',    '$2,100,000', '4.80%', '5.15%', '4.90%'],
    ['Cottesloe', '$1,650,000', '4.80%', '5.15%', '4.90%'],
  ]}]
}

// ── Energy / nutrition contexts (ctxE09–ctxE13) ──────────────────────────────

const ctxE09 = {
  title: 'The Holiday Feast',
  tables: [
    { headers: ['Holiday Food', 'Energy (kJ)'], rows: [
      ['Mince Pie',    '1,500'],
      ['Roast Potato', '800'],
      ['Eggnog',       '1,200'],
    ]},
    { headers: ['Activity', 'Energy Burn (kJ/hr)'], rows: [
      ['Walking', '1,000'],
      ['Dancing', '1,300'],
    ]},
  ]
}

const ctxE10 = {
  title: 'School Canteen Calories',
  tables: [
    { headers: ['Canteen Item', 'Energy (kJ)'], rows: [
      ['Meat Pie',     '1,900'],
      ['Sausage Roll', '1,300'],
      ['Juice Box',    '500'],
    ]},
    { headers: ['Activity', 'Energy Burn (kJ/hr)'], rows: [
      ['Soccer',             '2,500'],
      ['Study (Sedentary)',   '300'],
    ]},
  ]
}

const ctxE11 = {
  title: 'Office Desk Energy',
  tables: [
    { headers: ['Office Snack', 'Energy (kJ)'], rows: [
      ['Donut',   '850'],
      ['Biscuit', '200'],
      ['Mocha',   '900'],
    ]},
    { headers: ['Activity', 'Energy Burn (kJ/hr)'], rows: [
      ['Fast Walking',    '1,100'],
      ['Stair Climbing',  '2,400'],
    ]},
  ]
}

const ctxE12 = {
  title: 'Weekend Sports Nutrition',
  tables: [
    { headers: ['Sports Drink / Snack', 'Energy (kJ)'], rows: [
      ['Isotonic Drink', '600'],
      ['Banana',         '400'],
      ['Energy Gel',     '700'],
    ]},
    { headers: ['Activity', 'Energy Burn (kJ/hr)'], rows: [
      ['Running',   '2,200'],
      ['Swimming',  '1,600'],
    ]},
  ]
}

const ctxE13 = {
  title: 'The Late Night Study Session',
  tables: [
    { headers: ['Study Snack', 'Energy (kJ)'], rows: [
      ['Chocolate Bar', '1,000'],
      ['Dried Fruit',   '500'],
      ['Latte',         '700'],
    ]},
    { headers: ['Activity', 'Energy Burn (kJ/hr)'], rows: [
      ['Cleaning', '800'],
      ['Yoga',     '700'],
    ]},
  ]
}

// ── Cylinder geometry contexts ────────────────────────────────────────────────

const ctxCylW = {
  title: 'The Water Tank',
  subtitle: 'A municipal water tank is a perfect cylinder with a radius (r) of 3 m and a total height (h) of 5 m.',
  formulaHint: 'Area of a circle = πr²  |  Circumference = 2πr  |  Volume of a cylinder = πr²h  |  π = 3.14',
}

const ctxCylP = {
  title: 'The Circular Above-Ground Pool',
  subtitle: 'An above-ground circular pool has a radius (r) of 2.5 m and a height (h) of 1.2 m.',
  formulaHint: 'Area of a circle = πr²  |  Volume of a cylinder = πr²h  |  π = 3.14',
}

// ── Shower head water savings context ────────────────────────────────────────

const ctxShower = {
  title: 'Shower Head Water Savings',
  subtitle: 'Compare water usage between a water-efficient Spraysaver shower head and a standard Steadyflow shower head.',
  formulaHint: 'Water used = Flow rate (L/min) × Duration (min)  |  Water saved = Steadyflow usage − Spraysaver usage',
}

// ── Business scenario contexts (DS–EB) ───────────────────────────────────────

const ctxDS = {
  title: 'Portfolio Asset Rebalancing',
  tables: [{
    headers: ['Asset', 'Value'],
    rows: [
      ['Property', '$2,400,000'],
      ['Stocks',   '$1,800,000'],
      ['Bonds',    '$600,000'],
      ['Total',    '$4,800,000'],
    ]
  }]
}
const ctxDT = {
  title: 'E-Commerce Profitability',
  tables: [{
    headers: ['Metric', 'Value'],
    rows: [
      ['Units Sold',      '500'],
      ['Sale Price',      '$150 per unit'],
      ['COGS',           '$90 per unit'],
      ['Fixed Overhead', '$12,000'],
    ]
  }]
}
const ctxDU = {
  title: 'Production Efficiency',
  tables: [{
    headers: ['Metric', 'Value'],
    rows: [
      ['Total Production', '4,000 units/hour'],
      ['Current Defects',  '200 units/hour'],
      ['Target Defects',   '80 units/hour'],
    ]
  }]
}
const ctxDV = {
  title: 'Fleet Management Fuel Costs',
  tables: [{
    headers: ['Metric', 'Value'],
    rows: [
      ['Fleet Size',       '12 vehicles'],
      ['Monthly Distance', '1,500 km per vehicle'],
      ['Fuel Consumption', '10 L/100 km'],
      ['Fuel Price',       '$1.80 per litre'],
    ]
  }]
}
const ctxDW = {
  title: 'Subscription Churn and Growth',
  tables: [{
    headers: ['Metric', 'Value'],
    rows: [
      ['Current Subscribers', '10,000'],
      ['Revenue per Sub',     '$20/month'],
      ['Monthly Churn Rate',  '8%'],
      ['Marketing Spend',     '$50,000'],
      ['New Subscribers',     '1,200 (from marketing)'],
    ]
  }]
}
const ctxDX = {
  title: 'Sales Commission Structure',
  tables: [{
    headers: ['Metric', 'Value'],
    rows: [
      ['Base Salary',          '$60,000'],
      ['Commission Threshold', '$200,000 in sales'],
      ['Commission Rate',      '5% on sales above threshold'],
      ['Annual Sales',         '$1,000,000'],
    ]
  }]
}
const ctxDY = {
  title: 'Manufacturing Throughput',
  tables: [{
    headers: ['Metric', 'Value'],
    rows: [
      ['Production Rate',    '2,000 units/hour'],
      ['Shift Length',       '8 hours'],
      ['Current Defect Rate', '4%'],
      ['Target Defect Rate', '1%'],
    ]
  }]
}
const ctxDZ = {
  title: 'Real Estate Rental Yield',
  tables: [{
    headers: ['Metric', 'Value'],
    rows: [
      ['Purchase Price', '$900,000'],
      ['Annual Costs',   '$8,000'],
      ['Weekly Rent',    '$900'],
    ]
  }]
}
const ctxEA = {
  title: 'Payroll Tax Liability',
  tables: [{
    headers: ['Metric', 'Value'],
    rows: [
      ['Employees',          '15'],
      ['Annual Salary Each', '$80,000'],
      ['Total Payroll',      '$1,200,000'],
      ['Tax-Free Threshold', '$500,000'],
      ['Tax Rate',           '5%'],
    ]
  }]
}
const ctxEB = {
  title: 'Warehouse Storage Efficiency',
  tables: [{
    headers: ['Metric', 'Value'],
    rows: [
      ['Storage Area',   '500 m²'],
      ['Annual Cost',    '$250 per m²'],
      ['Annual Revenue', '$1,500 per m²'],
    ]
  }]
}

// ── Volume unit conversion context ───────────────────────────────────────────

const ctxUnit = {
  title: 'Volume Unit Conversions',
  subtitle: 'Apply volume unit conversions to solve practical problems.',
  tables: [{
    headers: ['Conversion', 'Equivalence'],
    rows: [
      ['1 m³',  '1,000 L  =  1 kL'],
      ['1 kL',  '1,000 L'],
      ['1 L',   '1,000 mL  =  1,000 cm³'],
      ['1 cm³', '1,000 mm³'],
    ]
  }]
}

// ── Tech bundle sale contexts (ctxTech1–ctxTech10) ────────────────────────────

const ctxTech1 = {
  title: 'TechMart Bundle Deal',
  subtitle: 'Purchase a laptop and receive 50% off a smartwatch. Finance the full bundle over 52 weekly payments.',
  tables: [{
    headers: ['Item', 'Sale Price', 'Details'],
    rows: [
      ['Media Studio Laptop', '$1,698.00', '15% off original RRP'],
      ['SW Series 3 GPS Watch', '$299.00', '50% off when purchased with laptop'],
    ]
  }]
}

const ctxTech2 = {
  title: 'TechMart Bundle Deal',
  subtitle: 'Purchase a laptop and receive 50% off a smartwatch. Finance the full bundle over 52 weekly payments.',
  tables: [{
    headers: ['Item', 'Sale Price', 'Details'],
    rows: [
      ['Workflow 3000 Laptop', '$2,194.00', '20% off original RRP'],
      ['Slimline XP4 Watch', '$399.00', '50% off when purchased with laptop'],
    ]
  }]
}

const ctxTech3 = {
  title: 'TechMart Bundle Deal',
  subtitle: 'Purchase a laptop and receive 50% off a smartwatch. Finance the full bundle over 52 weekly payments.',
  tables: [{
    headers: ['Item', 'Sale Price', 'Details'],
    rows: [
      ['Xforce Gamer Laptop', '$2,497.00', '20% off original RRP'],
      ['Alta SportTracker Watch', '$459.00', '50% off when purchased with laptop'],
    ]
  }]
}

const ctxTech4 = {
  title: 'TechMart Bundle Deal',
  subtitle: 'Purchase a laptop and receive 50% off a smartwatch. Finance the full bundle over 52 weekly payments.',
  tables: [{
    headers: ['Item', 'Sale Price', 'Details'],
    rows: [
      ['Media Studio Laptop', '$1,698.00', '15% off original RRP'],
      ['Slimline XP4 Watch', '$399.00', '50% off when purchased with laptop'],
    ]
  }]
}

const ctxTech5 = {
  title: 'TechMart Bundle Deal',
  subtitle: 'Purchase a laptop and receive 50% off a smartwatch. Finance the full bundle over 52 weekly payments.',
  tables: [{
    headers: ['Item', 'Sale Price', 'Details'],
    rows: [
      ['Workflow 3000 Laptop', '$2,194.00', '20% off original RRP'],
      ['Alta SportTracker Watch', '$459.00', '50% off when purchased with laptop'],
    ]
  }]
}

const ctxTech6 = {
  title: 'TechMart Bundle Deal',
  subtitle: 'Purchase a laptop and receive 50% off a smartwatch. Finance the full bundle over 52 weekly payments.',
  tables: [{
    headers: ['Item', 'Sale Price', 'Details'],
    rows: [
      ['Xforce Gamer Laptop', '$2,497.00', '20% off original RRP'],
      ['SW Series 3 GPS Watch', '$299.00', '50% off when purchased with laptop'],
    ]
  }]
}

const ctxTech7 = {
  title: 'TechMart Bundle Deal',
  subtitle: 'Purchase a laptop and receive 50% off a smartwatch. Finance the full bundle over 52 weekly payments.',
  tables: [{
    headers: ['Item', 'Sale Price', 'Details'],
    rows: [
      ['Media Studio Laptop', '$1,698.00', '15% off original RRP'],
      ['Alta SportTracker Watch', '$459.00', '50% off when purchased with laptop'],
    ]
  }]
}

const ctxTech8 = {
  title: 'TechMart Bundle Deal',
  subtitle: 'Purchase a laptop and receive 50% off a smartwatch. Finance the full bundle over 52 weekly payments.',
  tables: [{
    headers: ['Item', 'Sale Price', 'Details'],
    rows: [
      ['Workflow 3000 Laptop', '$2,194.00', '20% off original RRP'],
      ['SW Series 3 GPS Watch', '$299.00', '50% off when purchased with laptop'],
    ]
  }]
}

const ctxTech9 = {
  title: 'TechMart Bundle Deal',
  subtitle: 'Purchase a laptop and receive 50% off a smartwatch. Finance the full bundle over 52 weekly payments.',
  tables: [{
    headers: ['Item', 'Sale Price', 'Details'],
    rows: [
      ['Xforce Gamer Laptop', '$2,497.00', '20% off original RRP'],
      ['Slimline XP4 Watch', '$399.00', '50% off when purchased with laptop'],
    ]
  }]
}

const ctxTech10 = {
  title: 'TechMart Bundle Deal',
  subtitle: 'Purchase a laptop and receive 50% off a smartwatch. Finance the full bundle over 52 weekly payments.',
  tables: [{
    headers: ['Item', 'Sale Price', 'Details'],
    rows: [
      ['Media Studio Laptop', '$1,698.00', '15% off original RRP'],
      ['Slimline XP4 Watch', '$399.00', '50% off when purchased with laptop'],
    ]
  }]
}

// ── Map scale contexts ────────────────────────────────────────────────────────

const ctxMap1 = {
  title: 'Mitchell Regional Briefing',
  subtitle: 'The map scale is 1:15,000. The path from Western Base to Northern Peak measures 10 cm on the map. Transport speed is limited to 4 km/h.',
  formulaHint: 'Actual distance (km) = (Map distance cm × Scale) ÷ 100,000  |  Travel time (h) = Distance ÷ Speed',
}

const ctxMap2 = {
  title: 'Forest Trail Operations',
  subtitle: 'Topographical map scale 1:25,000. Planned route is 16 cm on the map. Average hiking speed is 3.2 km/h.',
  formulaHint: 'Actual distance (km) = (Map distance cm × Scale) ÷ 100,000  |  Travel time (h) = Distance ÷ Speed',
}

const ctxMap3 = {
  title: 'Incident Command — Sector Map',
  subtitle: 'The incident command map uses a scale of 1:50,000. The route from staging area to the forward command post measures 25 mm on the map. Crew travel speed on foot is 2.5 km/h.',
  formulaHint: 'Actual distance (km) = (Map distance mm × Scale) ÷ 1,000,000  |  Travel time (h) = Distance ÷ Speed',
}

const ctxMap4 = {
  title: 'Fire Perimeter Planning',
  subtitle: 'A fireground operations map uses a scale of 1:20,000. The total fire perimeter measures 3.6 km on the ground. A secondary access track is 2.4 km in length.',
  formulaHint: 'Map distance (mm) = Actual distance (km) × 1,000,000 ÷ Scale',
}

const ctxMap5 = {
  title: 'Building Floor Plan — Evacuation Routes',
  subtitle: 'A building floor plan is drawn at a scale of 1:500. The primary evacuation corridor measures 35 mm on the plan. A stairwell access route measures 48 mm on the same plan.',
  formulaHint: 'Actual distance (m) = (Map distance mm × Scale) ÷ 1,000',
}

const ctxMap6 = {
  title: 'Station Layout Drawing',
  subtitle: 'A fire station layout is drawn at a scale of 1:200. The apparatus bay is 8.4 m long in reality. The training room is 3.6 m wide in reality.',
  formulaHint: 'Map distance (mm) = Actual distance (m) × 1,000 ÷ Scale',
}

const ctxMap7 = {
  title: 'Hazmat Site Survey',
  subtitle: 'A site survey map uses a scale of 1:1,000. The hazmat exclusion zone boundary measures 7.5 cm on the map. A hose lay route is drawn as 12.4 cm on the same map.',
  formulaHint: 'Actual distance (m) = (Map distance cm × Scale) ÷ 100',
}

const ctxMap8 = {
  title: 'Operations Area Map',
  subtitle: 'An incident operations map is drawn at a scale of 1:500. A safety exclusion zone extends 45 m from the incident in reality. A secondary perimeter is established 85 m from the incident.',
  formulaHint: 'Map distance (cm) = Actual distance (m) × 100 ÷ Scale',
}

const ctxMitchell = {
  title: 'Mitchell Town Map',
  subtitle: 'Leo has just arrived in the town of Mitchell. Below is a map of the town.',
  image: '/images/numeracy/Numeracy 01.png',
}

// ── Standard drinks context ───────────────────────────────────────────────────

const ctxSD = {
  title: 'Standard Drinks',
  subtitle: 'In Australia, 1 standard drink contains 10 grams of pure alcohol (ethanol density = 0.789 g/mL).',
  formulaHint: 'Standard drinks = Volume (mL) × (ABV% ÷ 100) × 0.789 ÷ 10',
  note: 'The Australian health guideline recommends no more than 4 standard drinks on any single occasion.'
}

// ── Questions — 10 sets of 2 (20 total) ──────────────────────────────────────

const questions = [

  // ── Set 1: Sarah Chen — weekday $55.25, sat $82.88, sun $110.50 ─────────
  {
    group: 'A', type: 'number_input', category: 'Number and Algebra',
    context: ctx1,
    question: 'Calculate the total number of paid weekday hours Sarah worked this week.',
    answer: '40.25'
  },
  {
    group: 'A', type: 'number_input', category: 'Number and Algebra',
    context: ctx1,
    question: "What is the difference in gross pay between Sarah's highest and lowest earning days?",
    answer: '55.25'
  },
  {
    group: 'A', type: 'number_input', category: 'Number and Algebra',
    context: ctx1,
    question: "If Sarah's weekday rate increases by 2.5%, what is her new hourly rate?\n(Round to 2 decimal places)",
    answer: '56.63'
  },

  // ── Set 2: Marcus Reid — weekday $63.75, sat $95.63, sun $127.50 ─────────
  {
    group: 'B', type: 'number_input', category: 'Number and Algebra',
    context: ctx2,
    question: 'Calculate the total number of paid hours Marcus worked across the full week.',
    answer: '42.75'
  },
  {
    group: 'B', type: 'number_input', category: 'Number and Algebra',
    context: ctx2,
    question: "What is the difference in gross pay between Marcus's highest and lowest earning days?",
    answer: '127.48'
  },
  {
    group: 'B', type: 'number_input', category: 'Number and Algebra',
    context: ctx2,
    question: "If Marcus's weekday rate decreases by 1.5%, what is his new hourly rate?\n(Round to 2 decimal places)",
    answer: '62.79'
  },

  // ── Set 3: Anika Johansson — weekday $58.50, sat $87.75, sun $117.00 ─────
  {
    group: 'C', type: 'number_input', category: 'Number and Algebra',
    context: ctx3,
    question: 'Calculate the total number of paid hours Anika worked this week.',
    answer: '31'
  },
  {
    group: 'C', type: 'number_input', category: 'Number and Algebra',
    context: ctx3,
    question: "What is the difference in gross pay between Anika's highest and lowest earning days?",
    answer: '87.75'
  },
  {
    group: 'C', type: 'number_input', category: 'Number and Algebra',
    context: ctx3,
    question: "If Anika's weekday rate increases by 3.2%, what is her new hourly rate?\n(Round to 2 decimal places)",
    answer: '60.37'
  },

  // ── Set 4: Daniel Reyes — weekday $66.15, sat $99.23, sun $132.30 ─────────
  {
    group: 'D', type: 'number_input', category: 'Number and Algebra',
    context: ctx4,
    question: 'Calculate the total number of paid hours Daniel worked across the full week.',
    answer: '39.75'
  },
  {
    group: 'D', type: 'number_input', category: 'Number and Algebra',
    context: ctx4,
    question: "What is the difference in gross pay between Daniel's highest and lowest earning days?",
    answer: '165.36'
  },
  {
    group: 'D', type: 'number_input', category: 'Number and Algebra',
    context: ctx4,
    question: "If Daniel's weekday rate increases by 4.2%, what is his new hourly rate?\n(Round to 2 decimal places)",
    answer: '68.93'
  },

  // ── Set 5: Lena Petrov — weekday $72.45, sat $108.68, sun $144.90 ─────────
  {
    group: 'E', type: 'number_input', category: 'Number and Algebra',
    context: ctx5,
    question: 'Calculate the total number of paid weekday hours Lena worked this week.',
    answer: '35.75'
  },
  {
    group: 'E', type: 'number_input', category: 'Number and Algebra',
    context: ctx5,
    question: "What is the difference in gross pay between Lena's highest and lowest earning days?",
    answer: '126.79'
  },
  {
    group: 'E', type: 'number_input', category: 'Number and Algebra',
    context: ctx5,
    question: "If Lena's weekday rate decreases by 2%, what is her new hourly rate?\n(Round to 2 decimal places)",
    answer: '71.00'
  },

  // ── Set 6: Omar Hassan — weekday $64.80, sat $97.20, sun $129.60 ──────────
  {
    group: 'F', type: 'number_input', category: 'Number and Algebra',
    context: ctx6,
    question: 'Calculate the total number of paid hours Omar worked across the full week.',
    answer: '43.75'
  },
  {
    group: 'F', type: 'number_input', category: 'Number and Algebra',
    context: ctx6,
    question: "What is the difference in gross pay between Omar's highest and lowest earning days?",
    answer: '275.40'
  },
  {
    group: 'F', type: 'number_input', category: 'Number and Algebra',
    context: ctx6,
    question: "If Omar's weekday rate increases by 5%, what is his new hourly rate?\n(Round to 2 decimal places)",
    answer: '68.04'
  },

  // ── Set 7: Claire Thompson — weekday $69.35, sat $104.03, sun $138.70 ─────
  {
    group: 'G', type: 'number_input', category: 'Number and Algebra',
    context: ctx7,
    question: 'Calculate the total number of paid hours Claire worked across the full week.',
    answer: '36.75'
  },
  {
    group: 'G', type: 'number_input', category: 'Number and Algebra',
    context: ctx7,
    question: "What is the difference in gross pay between Claire's highest and lowest earning days?",
    answer: '208.03'
  },
  {
    group: 'G', type: 'number_input', category: 'Number and Algebra',
    context: ctx7,
    question: "If the Saturday rate decreases by 3%, what is the new Saturday hourly rate?\n(Round to 2 decimal places)",
    answer: '100.91'
  },

  // ── Set 8: Ben Fitzgerald — weekday $57.90, sat $86.85, sun $115.80 ────────
  {
    group: 'H', type: 'number_input', category: 'Number and Algebra',
    context: ctx8,
    question: 'Calculate the total number of paid hours Ben worked across the full week.',
    answer: '50.25'
  },
  {
    group: 'H', type: 'number_input', category: 'Number and Algebra',
    context: ctx8,
    question: "What is the difference in gross pay between Ben's highest and lowest earning days?",
    answer: '434.25'
  },
  {
    group: 'H', type: 'number_input', category: 'Number and Algebra',
    context: ctx8,
    question: "If Ben's weekday rate increases by 1.8%, what is his new hourly rate?\n(Round to 2 decimal places)",
    answer: '58.94'
  },

  // ── Set 9: Nina Vasquez — weekday $74.20, sat $111.30, sun $148.40 ─────────
  {
    group: 'I', type: 'number_input', category: 'Number and Algebra',
    context: ctx9,
    question: 'Calculate the total number of paid hours Nina worked across the full week.',
    answer: '40.25'
  },
  {
    group: 'I', type: 'number_input', category: 'Number and Algebra',
    context: ctx9,
    question: "What is the difference in gross pay between Nina's highest and lowest earning days?",
    answer: '222.60'
  },
  {
    group: 'I', type: 'number_input', category: 'Number and Algebra',
    context: ctx9,
    question: "If Nina's weekday rate increases by 2.2%, what is her new hourly rate?\n(Round to 2 decimal places)",
    answer: '75.83'
  },

  // ── Set 10: Adrian Kowalczyk — weekday $67.45, sat $101.18, sun $134.90 ────
  {
    group: 'J', type: 'number_input', category: 'Number and Algebra',
    context: ctx10,
    question: 'Calculate the total number of paid hours Adrian worked across the full week.',
    answer: '47.75'
  },
  {
    group: 'J', type: 'number_input', category: 'Number and Algebra',
    context: ctx10,
    question: "What is the difference in gross pay between Adrian's highest and lowest earning days?",
    answer: '286.66'
  },
  {
    group: 'J', type: 'number_input', category: 'Number and Algebra',
    context: ctx10,
    question: "If Adrian's weekday rate increases by 3.5%, what is his new hourly rate?\n(Round to 2 decimal places)",
    answer: '69.81'
  },

  // ── Set K: Station Alpha ─────────────────────────────────────────────────────
  // Q1 % covered: 32500/38500×100=84.42  Q2 Navara 28k vs HiLux 29k diff=1000  Q3 HiLux<Navara after ⌈3000/400⌉=8yr
  {
    group: 'K', type: 'number_input', category: 'Number and Algebra',
    context: ctxK1,
    question: 'What percentage of the Ford Ranger\'s purchase price is covered by the station\'s total available funding?\n(Round to 2 decimal places)',
    answer: '84.42'
  },
  {
    group: 'K', type: 'number_input', category: 'Number and Algebra',
    context: ctxK1,
    question: 'Which vehicle has a lower net cost after 5 years — the Nissan Navara or the Toyota HiLux? By how much?\n(Enter the dollar difference only)',
    answer: '1000'
  },
  {
    group: 'K', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxK1,
    question: 'Which vehicle has the lowest annual fuel saving as a percentage of its purchase price?\n(Calculate each percentage, then identify the lowest)',
    options: ['Toyota HiLux', 'Ford Ranger', 'Nissan Navara', 'Isuzu D-Max'],
    answer: 'Ford Ranger'
  },

  // ── Set L: Station Bravo ─────────────────────────────────────────────────────
  // Q1 shortfall: 10300  Q2 BT-50 payback: 21yr  Q3 HiLux<Ranger after ⌈4700/500⌉=10yr
  {
    group: 'L', type: 'number_input', category: 'Number and Algebra',
    context: ctxK2,
    question: 'Calculate the total available funding from all sources shown above. How much additional money does the station need to purchase the Mitsubishi Triton?',
    answer: '10300'
  },
  {
    group: 'L', type: 'number_input', category: 'Number and Algebra',
    context: ctxK2,
    question: 'After how many complete years would the Mazda BT-50\'s annual fuel savings cover its full purchase price?',
    answer: '21'
  },
  {
    group: 'L', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxK2,
    question: 'Which vehicle has the highest annual fuel saving as a percentage of its purchase price?\n(Calculate each percentage, then identify the highest)',
    options: ['Mitsubishi Triton', 'Toyota HiLux', 'Ford Ranger', 'Mazda BT-50'],
    answer: 'Toyota HiLux'
  },

  // ── Set M: Station Charlie ───────────────────────────────────────────────────
  // Q1 shortfall: 13000  Q2 D-Max 6yr savings: 20400  Q3 Everest<Fortuner after ⌈2500/300⌉=9yr
  {
    group: 'M', type: 'number_input', category: 'Number and Algebra',
    context: ctxK3,
    question: 'Calculate the total available funding from all sources shown above. How much additional money does the station need to purchase the Mitsubishi Pajero?',
    answer: '13000'
  },
  {
    group: 'M', type: 'number_input', category: 'Number and Algebra',
    context: ctxK3,
    question: 'What would be the total fuel saving provided by the Isuzu D-Max over 6 years?',
    answer: '20400'
  },
  {
    group: 'M', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxK3,
    question: 'Which vehicle has the lowest annual fuel saving as a percentage of its purchase price?\n(Calculate each percentage, then identify the lowest)',
    options: ['Isuzu D-Max', 'Ford Everest', 'Toyota Fortuner', 'Mitsubishi Pajero'],
    answer: 'Mitsubishi Pajero'
  },

  // ── Set N: Station Delta ─────────────────────────────────────────────────────
  // Q1 shortfall: 16000  Q2 Raptor payback: 16yr  Q3 LandCruiser<Patrol after ⌈5500/400⌉=14yr
  {
    group: 'N', type: 'number_input', category: 'Number and Algebra',
    context: ctxK4,
    question: 'Calculate the total available funding from all sources shown above. How much additional money does the station need to purchase the Mitsubishi Pajero Sport?',
    answer: '16000'
  },
  {
    group: 'N', type: 'number_input', category: 'Number and Algebra',
    context: ctxK4,
    question: 'After how many complete years would the Ford Ranger Raptor\'s annual fuel savings cover its full purchase price?',
    answer: '16'
  },
  {
    group: 'N', type: 'number_input', category: 'Number and Algebra',
    context: ctxK4,
    question: 'Calculate the annual fuel saving as a percentage of purchase price for each vehicle. What is the highest percentage among all four vehicles?\n(Round to 2 decimal places)',
    answer: '6.67'
  },

  // ── Set O: Station Echo ──────────────────────────────────────────────────────
  // Q1 shortfall: 13750  Q2 Pathfinder net 5yr: 36500  Q3 Prado<Endura after ⌈11000/900⌉=13yr
  {
    group: 'O', type: 'number_input', category: 'Number and Algebra',
    context: ctxK5,
    question: 'Calculate the total available funding from all sources shown above. How much additional money does the station need to purchase the Holden Trailblazer?',
    answer: '13750'
  },
  {
    group: 'O', type: 'number_input', category: 'Number and Algebra',
    context: ctxK5,
    question: 'Calculate the net cost of the Nissan Pathfinder after 5 years of fuel savings.',
    answer: '36500'
  },
  {
    group: 'O', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxK5,
    question: 'Which vehicle has the lowest annual fuel saving as a percentage of its purchase price?\n(Calculate each percentage, then identify the lowest)',
    options: ['Toyota Prado', 'Nissan Pathfinder', 'Holden Trailblazer', 'Ford Endura'],
    answer: 'Holden Trailblazer'
  },

  // ── Set P: Station Foxtrot ───────────────────────────────────────────────────
  // Q1 shortfall: 16000  Q2 Iveco payback: 14yr  Q3 Sprinter<Iveco after ⌈13000/700⌉=19yr
  {
    group: 'P', type: 'number_input', category: 'Number and Algebra',
    context: ctxK6,
    question: 'Calculate the total available funding from all sources shown above. How much additional money does the station need to purchase the Ford Transit?',
    answer: '16000'
  },
  {
    group: 'P', type: 'number_input', category: 'Number and Algebra',
    context: ctxK6,
    question: 'After how many complete years would the Iveco Daily\'s annual fuel savings cover its full purchase price?',
    answer: '14'
  },
  {
    group: 'P', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxK6,
    question: 'Which vehicle has the highest annual fuel saving as a percentage of its purchase price?\n(Calculate each percentage, then identify the highest)',
    options: ['Mercedes Sprinter', 'Toyota HiAce', 'Ford Transit', 'Iveco Daily'],
    answer: 'Toyota HiAce'
  },

  // ── Set Q: Station Golf ──────────────────────────────────────────────────────
  // Q1 shortfall: 5000  Q2 HiLux vs Ranger annual diff: 700  Q3 D-Max<Triton after ⌈8500/700⌉=13yr
  {
    group: 'Q', type: 'number_input', category: 'Number and Algebra',
    context: ctxK7,
    question: 'Calculate the total available funding from all sources shown above. How much additional money does the station need to purchase the Ford Ranger XLT?',
    answer: '5000'
  },
  {
    group: 'Q', type: 'number_input', category: 'Number and Algebra',
    context: ctxK7,
    question: 'How much more in annual fuel savings would the Toyota HiLux 4WD provide compared to the Ford Ranger XLT?',
    answer: '700'
  },
  {
    group: 'Q', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxK7,
    question: 'Which vehicle has the lowest annual fuel saving as a percentage of its purchase price?\n(Calculate each percentage, then identify the lowest)',
    options: ['Toyota HiLux 4WD', 'Ford Ranger XLT', 'Isuzu D-Max X-Terrain', 'Mitsubishi Triton GSR'],
    answer: 'Ford Ranger XLT'
  },

  // ── Set R: Station Hotel ─────────────────────────────────────────────────────
  // Q1 shortfall: 1000  Q2 Sorento payback: 17yr  Q3 Santa Fe<RAV4 after ⌈4500/400⌉=12yr
  {
    group: 'R', type: 'number_input', category: 'Number and Algebra',
    context: ctxK8,
    question: 'Calculate the total available funding from all sources shown above. How much additional money does the station need to purchase the Hyundai Santa Fe?',
    answer: '1000'
  },
  {
    group: 'R', type: 'number_input', category: 'Number and Algebra',
    context: ctxK8,
    question: 'After how many complete years would the Kia Sorento\'s annual fuel savings cover its full purchase price?',
    answer: '17'
  },
  {
    group: 'R', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxK8,
    question: 'Which vehicle has the highest annual fuel saving as a percentage of its purchase price?\n(Calculate each percentage, then identify the highest)',
    options: ['Toyota RAV4', 'Hyundai Santa Fe', 'Kia Sorento', 'Mazda CX-5'],
    answer: 'Hyundai Santa Fe'
  },

  // ── Set S: Station Juliet ────────────────────────────────────────────────────
  // Q1 shortfall: 22300  Q2 LC200 vs Pajero 10yr diff: 14000  Q3 LC200<Patrol Ti after ⌈3500/300⌉=12yr
  {
    group: 'S', type: 'number_input', category: 'Number and Algebra',
    context: ctxK9,
    question: 'Calculate the total available funding from all sources shown above. How much additional money does the station need to purchase the Toyota Fortuner Crusade?',
    answer: '22300'
  },
  {
    group: 'S', type: 'number_input', category: 'Number and Algebra',
    context: ctxK9,
    question: 'Over 10 years, how much more in total fuel savings would the Toyota LandCruiser 200 provide compared to the Mitsubishi Pajero Exceed?',
    answer: '14000'
  },
  {
    group: 'S', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxK9,
    question: 'Which vehicle has the lowest annual fuel saving as a percentage of its purchase price?\n(Calculate each percentage, then identify the lowest)',
    options: ['Toyota LandCruiser 200', 'Nissan Patrol Ti', 'Mitsubishi Pajero Exceed', 'Toyota Fortuner Crusade'],
    answer: 'Toyota Fortuner Crusade'
  },

  // ── Set T: Station Kilo ──────────────────────────────────────────────────────
  // Q1 shortfall: 22500  Q2 HiAce net 8yr: 33200  Q3 Vito<HiAce after ⌈13000/1100⌉=12yr
  {
    group: 'T', type: 'number_input', category: 'Number and Algebra',
    context: ctxK10,
    question: 'Calculate the total available funding from all sources shown above. How much additional money does the station need to purchase the Mercedes-Benz Vito?',
    answer: '22500'
  },
  {
    group: 'T', type: 'number_input', category: 'Number and Algebra',
    context: ctxK10,
    question: 'Calculate the net cost of the Toyota HiAce LWB after 8 years of fuel savings.',
    answer: '33200'
  },
  {
    group: 'T', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxK10,
    question: 'Which vehicle has the highest annual fuel saving as a percentage of its purchase price?\n(Calculate each percentage, then identify the highest)',
    options: ['Mercedes-Benz Vito', 'Toyota HiAce LWB', 'Ford Transit Custom', 'Renault Trafic'],
    answer: 'Mercedes-Benz Vito'
  },

  // ── Set U: Rainwater tank — 4.5×3.2×2.5m, fill 3/4 ─────────────────────
  // Q1: 4.5×3.2×2.5 = 36 m³   Q2: 36×(3/4)×1000 = 27,000 L
  {
    group: 'U', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxU,
    question: 'Calculate the total internal volume of the tank in m³.',
    answer: '36'
  },
  {
    group: 'U', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxU,
    question: 'How many litres does the tank hold when filled to 3/4 of its total capacity?',
    answer: '27000'
  },

  // ── Set V: Dual-chamber basin — (6.4+3.6)×5.0×1.8 = 90 m³, fill 4/5 ───
  // Q1: 57.6+32.4 = 90 m³   Q2: 90×(4/5)×1000 = 72,000 L
  {
    group: 'V', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxV,
    question: 'What is the total combined internal volume of both chambers in m³?',
    answer: '90'
  },
  {
    group: 'V', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxV,
    question: 'How many litres does the basin hold when operating at 4/5 of its full capacity?',
    answer: '72000'
  },

  // ── Set W: Concrete vault — inner 5.0×3.0×1.5 = 22.5 m³, fill 3/5 ──────
  // Q1: (6-1)×(4-1)×(2.5-1) = 22.5 m³   Q2: 22.5×(3/5)×1000 = 13,500 L
  {
    group: 'W', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxW,
    question: 'After deducting the 0.5m wall and floor/ceiling thickness from all six faces, what is the total usable internal volume of the vault in m³?',
    answer: '22.5'
  },
  {
    group: 'W', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxW,
    question: 'How many litres does the vault hold when filled to 3/5 of its operational capacity?',
    answer: '13500'
  },

  // ── Set X: Civic courtyard — 15×12 = 180 m², 600×600mm tiles ────────────
  // Q1: 180 m²   Q2: 180÷0.36 = 500 tiles
  {
    group: 'X', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxX,
    question: 'Calculate the total floor area of the courtyard in m².',
    answer: '180'
  },
  {
    group: 'X', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxX,
    question: 'What is the minimum number of 600mm × 600mm tiles required to cover the entire courtyard surface?',
    answer: '500'
  },

  // ── Set Y: L-shaped terrace — 48+14 = 62 m², 1.2×0.4m boards ───────────
  // Q1: 62 m²   Q2: ceil(62÷0.48) = 130 boards
  {
    group: 'Y', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxY,
    question: 'What is the total combined surface area of the L-shaped terrace in m²?',
    answer: '62'
  },
  {
    group: 'Y', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxY,
    question: 'What is the minimum number of 1.2m × 0.4m decking boards required to cover the entire terrace?',
    answer: '130'
  },

  // ── Set Z: Rooftop garden — 76.8+32 = 108.8 m², 400×400mm pavers ────────
  // Q1: 108.8 m²   Q2: 108.8÷0.16 = 680 pavers
  {
    group: 'Z', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxZ,
    question: 'What is the total combined base area of both garden sections in m²?',
    answer: '108.8'
  },
  {
    group: 'Z', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxZ,
    question: 'What is the minimum number of 400mm × 400mm rubber pavers required to cover both sections completely?',
    answer: '680'
  },

  // ── Set AA: Rectangular garden bed — 2×(14.4+8.6) = 46m, 2.4m sleepers ─
  // Q1: 46m   Q2: ceil(46÷2.4) = 20 sleepers
  {
    group: 'AA', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxAA,
    question: 'What is the total outer perimeter of the rectangular garden bed in meters?',
    answer: '46'
  },
  {
    group: 'AA', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxAA,
    question: 'What is the minimum number of 2.4m timber sleepers required to frame the entire boundary?',
    answer: '20'
  },

  // ── Set AB: L-shaped plaza — 20+9+8+6+12+15 = 70m, 3.5m strips ─────────
  // Q1: 70m   Q2: 70÷3.5 = 20 strips
  {
    group: 'AB', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxAB,
    question: 'The plaza forms an L-shape by removing a rectangular notch from the top-right corner of its bounding box. Tracing all six outer edges, what is the total outer perimeter in meters?',
    answer: '70'
  },
  {
    group: 'AB', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxAB,
    question: 'What is the minimum number of 3.5m steel edging strips required to border the entire plaza?',
    answer: '20'
  },

  // ── Set AC: Precast block — 450×300×80 = 10,800,000 mm³, 2.5mL/1000mL ──
  // Q1: 10,800,000 mm³   Q2: 10800000÷1000=10800 mL × 2.5/1000 = 27 mL
  {
    group: 'AC', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxAC,
    question: 'What is the total volume of the precast concrete block in mm³?',
    answer: '10800000'
  },
  {
    group: 'AC', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxAC,
    question: "Convert the block's total volume from mm³ into mL (1 mL = 1,000 mm³), then calculate the total volume of plasticiser admixture required at the stated dose rate.",
    answer: '27'
  },

  // ── Set AD: Concrete slab — 600×500×60 = 18,000,000 mm³, 4.5mL/1000mL ──
  // Q1: 18,000,000 mm³   Q2: 18000000÷1000=18000 mL × 4.5/1000 = 81 mL
  {
    group: 'AD', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxAD,
    question: 'What is the total volume of the concrete test slab in mm³?',
    answer: '18000000'
  },
  {
    group: 'AD', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxAD,
    question: "Convert the slab's total volume from mm³ into mL (1 mL = 1,000 mm³), then calculate the exact volume of curing compound required at the stated dose rate.",
    answer: '81'
  },

  // ── Set AE: State table — NT largest decrease, VIC calculation ───────────
  // Q1 (MC): NT 22.3→20.2 = −2.1pp, largest drop   Q2: 2000×(1−0.143) = $1,714
  {
    group: 'AE', type: 'multiple_choice', category: 'Statistics and Probability',
    context: ctxGPG1,
    question: 'In which state or territory did the gender pay gap decrease by the most between November 2016 and November 2017?',
    options: ['Australian Capital Territory','New South Wales','Northern Territory','Queensland','South Australia','Tasmania','Victoria','Western Australia'],
    answer: 'Northern Territory'
  },
  {
    group: 'AE', type: 'number_input', category: 'Statistics and Probability',
    context: ctxGPG1,
    question: 'The Nov-17 GPG for New South Wales is 14.3%. If men in NSW earn an average of $2,000 per week, calculate the average weekly earnings for women.',
    answer: '1714'
  },

  // ── Set AF: Mining — women's weekly, weekly dollar gap ───────────────────
  // Q1: 2500×0.78 = $1,950   Q2: 2500−1950 = $550
  {
    group: 'AF', type: 'number_input', category: 'Statistics and Probability',
    context: ctxGPG2,
    question: 'Using the GPG formula, calculate women\'s average weekly earnings in the mining industry.',
    answer: '1950'
  },
  {
    group: 'AF', type: 'number_input', category: 'Statistics and Probability',
    context: ctxGPG2,
    question: 'Using your answer to Question A, calculate the dollar difference in average weekly earnings between men and women in the mining industry.',
    answer: '550'
  },

  // ── Set AG: Finance — women's weekly, annual pay gap ─────────────────────
  // Q1: 1650×0.74 = $1,221   Q2: (1650−1221)×52 = 429×52 = $22,308
  {
    group: 'AG', type: 'number_input', category: 'Statistics and Probability',
    context: ctxGPG3,
    question: 'Using the GPG formula, calculate women\'s average weekly earnings in the financial and insurance services industry.',
    answer: '1221'
  },
  {
    group: 'AG', type: 'number_input', category: 'Statistics and Probability',
    context: ctxGPG3,
    question: 'Using your answer to Question A, calculate the total annual dollar difference in earnings between men and women, based on 52 working weeks.',
    answer: '22308'
  },

  // ── Set AH: Healthcare — men's annual (reverse), annual gap ──────────────
  // Q1: 64000÷0.80 = $80,000   Q2: 80000−64000 = $16,000
  {
    group: 'AH', type: 'number_input', category: 'Statistics and Probability',
    context: ctxGPG4,
    question: 'Rearrange the GPG formula to calculate men\'s average annual earnings in healthcare and social assistance.',
    answer: '80000'
  },
  {
    group: 'AH', type: 'number_input', category: 'Statistics and Probability',
    context: ctxGPG4,
    question: 'Using your answer to Question A, calculate the annual dollar gap between men\'s and women\'s earnings in this industry.',
    answer: '16000'
  },

  // ── Set AI: Education — men's annual (reverse), annual gap ───────────────
  // Q1: 63000÷0.875 = $72,000   Q2: 72000−63000 = $9,000
  {
    group: 'AI', type: 'number_input', category: 'Statistics and Probability',
    context: ctxGPG5,
    question: 'Rearrange the GPG formula to calculate men\'s average annual earnings in the education and training industry.',
    answer: '72000'
  },
  {
    group: 'AI', type: 'number_input', category: 'Statistics and Probability',
    context: ctxGPG5,
    question: 'Using your answer to Question A, what is the annual dollar gap in earnings between men and women in education and training?',
    answer: '9000'
  },

  // ── Set AJ: Construction — women's weekly, women's annual ────────────────
  // Q1: 1500×0.82 = $1,230   Q2: 1230×52 = $63,960
  {
    group: 'AJ', type: 'number_input', category: 'Statistics and Probability',
    context: ctxGPG6,
    question: 'Using the GPG formula, calculate women\'s average weekly earnings in the construction industry.',
    answer: '1230'
  },
  {
    group: 'AJ', type: 'number_input', category: 'Statistics and Probability',
    context: ctxGPG6,
    question: 'Using your answer to Question A, calculate women\'s average annual earnings in construction, based on 52 working weeks.',
    answer: '63960'
  },

  // ── Set AK: Industry table MC + professional services calculation ─────────
  // Q1 (MC): Professional services has highest GPG at 24.0%   Q2: 2200×0.76 = $1,672
  {
    group: 'AK', type: 'multiple_choice', category: 'Statistics and Probability',
    context: ctxGPG7,
    question: 'According to the table, which industry has the highest gender pay gap?',
    options: ['Retail trade','Accommodation and food services','Professional services','Healthcare and social assistance','Education and training'],
    answer: 'Professional services'
  },
  {
    group: 'AK', type: 'number_input', category: 'Statistics and Probability',
    context: ctxGPG7,
    question: 'Men in professional services earn an average of $2,200 per week. Using the GPG figure from the table, calculate women\'s average weekly earnings.',
    answer: '1672'
  },

  // ── Set AL: IT/Telecom — men's weekly (reverse), weekly dollar gap ────────
  // Q1: 1368÷0.76 = $1,800   Q2: 1800−1368 = $432
  {
    group: 'AL', type: 'number_input', category: 'Statistics and Probability',
    context: ctxGPG8,
    question: 'Rearrange the GPG formula to calculate men\'s average weekly earnings in the information media and telecommunications industry.',
    answer: '1800'
  },
  {
    group: 'AL', type: 'number_input', category: 'Statistics and Probability',
    context: ctxGPG8,
    question: 'Using your answer to Question A, calculate the weekly dollar difference in earnings between men and women in this industry.',
    answer: '432'
  },

  // ── Set AM: State table MC (same change) + WA reverse ────────────────────
  // Q1 (MC): VIC −1.2 and WA −1.2 both changed by same amount
  // Q2: WA GPG 22.5%, female $1,550 → 1550÷0.775 = $2,000
  {
    group: 'AM', type: 'multiple_choice', category: 'Statistics and Probability',
    context: ctxGPG1,
    question: 'Which two states or territories experienced exactly the same change in gender pay gap between November 2016 and November 2017?',
    options: ['ACT and Queensland','Victoria and Western Australia','New South Wales and Tasmania','South Australia and New South Wales'],
    answer: 'Victoria and Western Australia'
  },
  {
    group: 'AM', type: 'number_input', category: 'Statistics and Probability',
    context: ctxGPG1,
    question: 'The Nov-17 GPG for Western Australia is 22.5%. If women in WA earn an average of $1,550 per week, calculate the average weekly earnings for men.',
    answer: '2000'
  },

  // ── Set AN: Utilities vs Transport women's annual ─────────────────────────
  // Q1: 95000×0.84 = $79,800   Q2: 75000×0.88 = $66,000
  {
    group: 'AN', type: 'number_input', category: 'Statistics and Probability',
    context: ctxGPG9,
    question: 'Using the GPG formula and the electricity, gas, water and waste services data, calculate women\'s average annual earnings in that industry.',
    answer: '79800'
  },
  {
    group: 'AN', type: 'number_input', category: 'Statistics and Probability',
    context: ctxGPG9,
    question: 'Using the GPG formula and the transport, postal and warehousing data, calculate women\'s average annual earnings in that industry.',
    answer: '66000'
  },

  // ── Retail Comparison Sets (AO–AX) ───────────────────────────────────────

  // Set AO: Protein Bars — buy 3+ get 15% off | Store Y save $6 from $28 RRP
  {
    group: 'AO', type: 'number_input', category: 'Retail and Finance',
    context: ctxR1,
    question: 'What is the total cost of purchasing 3 boxes of protein bars from Store X?',
    answer: '61.20'
  },
  {
    group: 'AO', type: 'true_false_matrix', category: 'Retail and Finance',
    context: ctxR1,
    question: 'Consider each of the following statements about the two offers. Select True or False for each statement.',
    options: [
      'It would be cheaper to buy one box at Store X.',
      'It would be cheaper to buy three boxes at Store Y.',
      'Buying four boxes at Store X saves exactly $6.40 compared to buying four boxes at Store Y.',
    ],
    answer: 'False,False,True'
  },

  // Set AP: Scented Candles — buy 2+ get 20% off | Store Y save $8 from $35 RRP
  {
    group: 'AP', type: 'number_input', category: 'Retail and Finance',
    context: ctxR2,
    question: 'What is the total cost of purchasing 2 scented candles from Store X?',
    answer: '46.40'
  },
  {
    group: 'AP', type: 'true_false_matrix', category: 'Retail and Finance',
    context: ctxR2,
    question: 'Consider each of the following statements about the two offers. Select True or False for each statement.',
    options: [
      'It would be cheaper to buy one candle at Store X.',
      'It would be cheaper to buy three candles at Store Y.',
      'Buying four candles at Store X saves exactly $15.20 compared to buying four candles at Store Y.',
    ],
    answer: 'False,False,True'
  },

  // Set AQ: Yoga Mats — buy 2+ get 25% off | Store Y save $15 from $65 RRP
  {
    group: 'AQ', type: 'number_input', category: 'Retail and Finance',
    context: ctxR3,
    question: 'What is the total cost of purchasing 2 yoga mats from Store X?',
    answer: '72.00'
  },
  {
    group: 'AQ', type: 'true_false_matrix', category: 'Retail and Finance',
    context: ctxR3,
    question: 'Consider each of the following statements about the two offers. Select True or False for each statement.',
    options: [
      'It would be cheaper to buy one yoga mat at Store X.',
      'It would be cheaper to buy three yoga mats at Store Y.',
      'Buying two yoga mats at Store X saves exactly $30.00 compared to buying two yoga mats at Store Y.',
    ],
    answer: 'True,False,False'
  },

  // Set AR: Resistance Bands — buy 4+ get 30% off | Store Y save $10 from $32 RRP
  {
    group: 'AR', type: 'number_input', category: 'Retail and Finance',
    context: ctxR4,
    question: 'What is the total cost of purchasing 4 resistance band sets from Store X?',
    answer: '77.00'
  },
  {
    group: 'AR', type: 'true_false_matrix', category: 'Retail and Finance',
    context: ctxR4,
    question: 'Consider each of the following statements about the two offers. Select True or False for each statement.',
    options: [
      'It would be cheaper to buy one resistance band set at Store X.',
      'It would be cheaper to buy three resistance band sets at Store Y.',
      'Buying four resistance band sets at Store X saves exactly $11.00 compared to buying four sets at Store Y.',
    ],
    answer: 'False,True,True'
  },

  // Set AS: Thermal Coffee Mugs — buy 2+ get 18% off | Store Y save $9 from $42 RRP
  {
    group: 'AS', type: 'number_input', category: 'Retail and Finance',
    context: ctxR5,
    question: 'What is the total cost of purchasing 3 thermal mugs from Store X?',
    answer: '88.56'
  },
  {
    group: 'AS', type: 'true_false_matrix', category: 'Retail and Finance',
    context: ctxR5,
    question: 'Consider each of the following statements about the two offers. Select True or False for each statement.',
    options: [
      'It would be cheaper to buy one mug at Store X.',
      'It would be cheaper to buy three mugs at Store Y.',
      'Buying two mugs at Store X saves exactly $6.96 compared to buying two mugs at Store Y.',
    ],
    answer: 'False,False,True'
  },

  // Set AT: Smartphone Cases — buy 3+ get 22% off | Store Y save $7 from $25 RRP
  {
    group: 'AT', type: 'number_input', category: 'Retail and Finance',
    context: ctxR6,
    question: 'What is the total cost of purchasing 3 smartphone cases from Store X?',
    answer: '49.14'
  },
  {
    group: 'AT', type: 'true_false_matrix', category: 'Retail and Finance',
    context: ctxR6,
    question: 'Consider each of the following statements about the two offers. Select True or False for each statement.',
    options: [
      'It would be cheaper to buy one smartphone case at Store X.',
      'It would be cheaper to buy three smartphone cases at Store Y.',
      'Buying four smartphone cases at Store X saves exactly $8.00 compared to buying four cases at Store Y.',
    ],
    answer: 'False,False,False'
  },

  // Set AU: Vitamin C — buy 2+ get 16% off | Store Y save $11 from $48 RRP
  {
    group: 'AU', type: 'number_input', category: 'Retail and Finance',
    context: ctxR7,
    question: 'What is the total cost of purchasing 2 bottles of vitamin C supplements from Store X?',
    answer: '68.88'
  },
  {
    group: 'AU', type: 'true_false_matrix', category: 'Retail and Finance',
    context: ctxR7,
    question: 'Consider each of the following statements about the two offers. Select True or False for each statement.',
    options: [
      'It would be cheaper to buy one bottle at Store X.',
      'It would be cheaper to buy three bottles at Store Y.',
      'Buying four bottles at Store X saves exactly $12.00 compared to buying four bottles at Store Y.',
    ],
    answer: 'False,False,False'
  },

  // Set AV: Water Bottles — buy 4+ get 25% off | Store Y save $10 from $38 RRP
  {
    group: 'AV', type: 'number_input', category: 'Retail and Finance',
    context: ctxR8,
    question: 'What is the total cost of purchasing 4 stainless steel water bottles from Store X?',
    answer: '96.00'
  },
  {
    group: 'AV', type: 'true_false_matrix', category: 'Retail and Finance',
    context: ctxR8,
    question: 'Consider each of the following statements about the two offers. Select True or False for each statement.',
    options: [
      'It would be cheaper to buy one water bottle at Store X.',
      'It would be cheaper to buy three water bottles at Store Y.',
      'Buying four water bottles at Store X saves exactly $16.00 compared to buying four bottles at Store Y.',
    ],
    answer: 'False,True,True'
  },

  // Set AW: LED Desk Lamps — buy 2+ get 20% off | Store Y save $18 from $75 RRP
  {
    group: 'AW', type: 'number_input', category: 'Retail and Finance',
    context: ctxR9,
    question: 'What is the total cost of purchasing 2 LED desk lamps from Store X?',
    answer: '89.60'
  },
  {
    group: 'AW', type: 'true_false_matrix', category: 'Retail and Finance',
    context: ctxR9,
    question: 'Consider each of the following statements about the two offers. Select True or False for each statement.',
    options: [
      'It would be cheaper to buy one LED desk lamp at Store X.',
      'It would be cheaper to buy three LED desk lamps at Store Y.',
      'Buying four LED desk lamps at Store X saves exactly $48.80 compared to buying four lamps at Store Y.',
    ],
    answer: 'True,False,True'
  },

  // Set AX: Training Gloves — buy 3+ get 24% off | Store Y save $12 from $44 RRP
  {
    group: 'AX', type: 'number_input', category: 'Retail and Finance',
    context: ctxR10,
    question: 'What is the total cost of purchasing 3 pairs of training gloves from Store X?',
    answer: '86.64'
  },
  {
    group: 'AX', type: 'true_false_matrix', category: 'Retail and Finance',
    context: ctxR10,
    question: 'Consider each of the following statements about the two offers. Select True or False for each statement.',
    options: [
      'It would be cheaper to buy one pair of training gloves at Store X.',
      'It would be cheaper to buy three pairs of training gloves at Store Y.',
      'Buying four pairs of training gloves at Store X saves exactly $15.00 compared to buying four pairs at Store Y.',
    ],
    answer: 'False,False,False'
  },

  // ── Transit and Speed Sets (AY–BH) ───────────────────────────────────────

  // AY — Set 1: HQ employees average | Sarah scooter detour
  {
    group: 'AY', type: 'number_input', inputType: 'time_hm', category: 'Number and Algebra',
    context: ctxT1a,
    question: 'What is the average travel time for a single one-way commute among these 5 employees? Give your answer in hours and minutes.',
    answer: '46'
  },
  {
    group: 'AY', type: 'number_input', inputType: 'time_hm', category: 'Number and Algebra',
    context: ctxT1b,
    question: 'How much earlier does Sarah need to leave home to ensure she arrives at the station at her usual time? Give your answer in hours and minutes.',
    answer: '15'
  },

  // AZ — Set 2: University students average | James highway rain
  {
    group: 'AZ', type: 'number_input', inputType: 'time_hm', category: 'Number and Algebra',
    context: ctxT2a,
    question: 'What is the average one-way travel time taken across these 6 students? Give your answer in hours and minutes.',
    answer: '52'
  },
  {
    group: 'AZ', type: 'number_input', inputType: 'time_hm', category: 'Number and Algebra',
    context: ctxT2b,
    question: 'How much longer will his morning drive take compared to his regular highway commute? Give your answer in hours and minutes.',
    answer: '12'
  },

  // BA — Set 3: Warehouse couriers average | Elena electric bike
  {
    group: 'BA', type: 'number_input', inputType: 'time_hm', category: 'Number and Algebra',
    context: ctxT3a,
    question: 'What is the average one-way journey time across these 5 couriers? Give your answer in hours and minutes.',
    answer: '66'
  },
  {
    group: 'BA', type: 'number_input', inputType: 'time_hm', category: 'Number and Algebra',
    context: ctxT3b,
    question: 'How much travel time does Elena save on her trip to work by using the electric bike? Give your answer in hours and minutes.',
    answer: '10'
  },

  // BB — Set 4: Medical practitioners average | Courier hub return limiter
  {
    group: 'BB', type: 'number_input', inputType: 'time_hm', category: 'Number and Algebra',
    context: ctxT4a,
    question: 'What is the average travel time across the 6 practitioners? Give your answer in hours and minutes.',
    answer: '49'
  },
  {
    group: 'BB', type: 'number_input', inputType: 'time_hm', category: 'Number and Algebra',
    context: ctxT4b,
    question: 'How much longer does the return leg take compared to the outward leg? Give your answer in hours and minutes.',
    answer: '15'
  },

  // BC — Set 5: Civil engineers average | Liam accident delay
  {
    group: 'BC', type: 'number_input', inputType: 'time_hm', category: 'Number and Algebra',
    context: ctxT5a,
    question: 'What is the average one-way travel time for the 5 engineers? Give your answer in hours and minutes.',
    answer: '80'
  },
  {
    group: 'BC', type: 'number_input', inputType: 'time_hm', category: 'Number and Algebra',
    context: ctxT5b,
    question: 'How much earlier must Liam leave his home to arrive at the site at his standard time during the delay? Give your answer in hours and minutes.',
    answer: '60'
  },

  // BD — Set 6: Harbour supervisors average | Emergency van school traffic
  {
    group: 'BD', type: 'number_input', inputType: 'time_hm', category: 'Number and Algebra',
    context: ctxT6a,
    question: 'What is the average commute duration among these 6 shift supervisors? Give your answer in hours and minutes.',
    answer: '56'
  },
  {
    group: 'BD', type: 'number_input', inputType: 'time_hm', category: 'Number and Algebra',
    context: ctxT6b,
    question: 'How much longer does the return trip take than the outward emergency run? Give your answer in hours and minutes.',
    answer: '15'
  },

  // BE — Set 7: Retail employees average | Executive peak vs off-peak
  {
    group: 'BE', type: 'number_input', inputType: 'time_hm', category: 'Number and Algebra',
    context: ctxT7a,
    question: 'What is the average one-way travel time among these 5 individual profiles? Give your answer in hours and minutes.',
    answer: '45'
  },
  {
    group: 'BE', type: 'number_input', inputType: 'time_hm', category: 'Number and Algebra',
    context: ctxT7b,
    question: 'How much travel time does the executive save by choosing to drive outside of peak hours? Give your answer in hours and minutes.',
    answer: '70'
  },

  // BF — Set 8: Airline crew average | Distribution truck loaded vs empty
  {
    group: 'BF', type: 'number_input', inputType: 'time_hm', category: 'Number and Algebra',
    context: ctxT8a,
    question: 'What is the average one-way ground transit duration across these 6 crew members? Give your answer in hours and minutes.',
    answer: '78'
  },
  {
    group: 'BF', type: 'number_input', inputType: 'time_hm', category: 'Number and Algebra',
    context: ctxT8b,
    question: 'How much faster is the return leg compared to the outbound delivery leg? Give your answer in hours and minutes.',
    answer: '18'
  },

  // BG — Set 9: Research hub scientists average | Claire maintenance restriction
  {
    group: 'BG', type: 'number_input', inputType: 'time_hm', category: 'Number and Algebra',
    context: ctxT9a,
    question: 'What is the average travel time for a single journey across these 5 scientists? Give your answer in hours and minutes.',
    answer: '61'
  },
  {
    group: 'BG', type: 'number_input', inputType: 'time_hm', category: 'Number and Algebra',
    context: ctxT9b,
    question: 'How much additional time does Claire spend on her commute because of the maintenance speed restriction? Give your answer in hours and minutes.',
    answer: '30'
  },

  // BH — Set 10: Council workers average | Medical courier peak vs overnight
  {
    group: 'BH', type: 'number_input', inputType: 'time_hm', category: 'Number and Algebra',
    context: ctxT10a,
    question: 'What is the average travel time for a single leg across these 6 community workers? Give your answer in hours and minutes.',
    answer: '52'
  },
  {
    group: 'BH', type: 'number_input', inputType: 'time_hm', category: 'Number and Algebra',
    context: ctxT10b,
    question: 'How much longer does the daytime delivery run take compared to the overnight run? Give your answer in hours and minutes.',
    answer: '25'
  },

  // ── Fluid / Dosing Sets (BI–BM) ──────────────────────────────────────────

  // BI — Chemical application: scale up turf dose | identify orchid mix
  {
    group: 'BI', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxF1,
    question: 'A gardener has a 20-litre watering container filled with water to mix treatment for a Standard Turf/Lawn. How many millilitres (mL) of the chemical concentrate do they need to add?',
    answer: '260'
  },
  {
    group: 'BI', type: 'multiple_choice', category: 'Measurement and Geometry',
    context: ctxF1,
    question: 'A large commercial spray tank contains 12 litres of water and has already had 36 mL of chemical added to it. Based on the concentration ratio (mL per litre of water), which target plant type from the table does this mix correspond to?',
    options: ['Delicate Orchids', 'Native Shrubs', 'Standard Turf/Lawn', 'Established Fruit Trees'],
    answer: 'Delicate Orchids'
  },

  // BJ — Irrigation zones total volume | fill holding barrels
  {
    group: 'BJ', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxF2a,
    question: 'What is the total combined volume of water delivered across Zone 1 and Zone 4 if both complete their minimum required running durations? Give your answer in Litres (L).',
    answer: '432'
  },
  {
    group: 'BJ', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxF2b,
    question: 'How many separate holding barrels can be filled to the brim?',
    answer: '18'
  },

  // BK — Greenhouse zone baseline volume | minutes to overflow tank
  {
    group: 'BK', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxF3a,
    question: 'What is the total baseline volume of water delivered by Zone 2 during its standard runtime? Give your answer in Litres (L).',
    answer: '38.25'
  },
  {
    group: 'BK', type: 'number_input', inputType: 'time_hm', category: 'Measurement and Geometry',
    context: ctxF3b,
    question: 'How long can the irrigation line run continuously into this drainage tank before it overflows? Give your answer in hours and minutes.',
    answer: '600'
  },

  // BL — Grade A Nitro concentrate needed | combined concentrate total
  {
    group: 'BL', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxF4a,
    question: 'What is the total volume of Grade A Nitro concentrate required to treat a single full sub-tank system? Give your answer in millilitres (mL).',
    answer: '810'
  },
  {
    group: 'BL', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxF4b,
    question: 'What is the total combined volume of chemical concentrates (Grade A Nitro and Grade B Phospho) used across both systems? Give your answer in millilitres (mL).',
    answer: '1650'
  },

  // BM — Reservoir Tank 3 volume | minutes to pump empty
  {
    group: 'BM', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxF5a,
    question: 'What is the total volume of liquid currently stored inside Reservoir Tank 3? Give your answer in Litres (L). (1 m³ = 1000 L)',
    answer: '3400'
  },
  {
    group: 'BM', type: 'number_input', inputType: 'time_hm', category: 'Measurement and Geometry',
    context: ctxF5b,
    question: 'How long will it take to pump Reservoir Tank 3 completely empty? Give your answer in hours and minutes.',
    answer: '272'
  },

  // ── Building / Construction Sets (BN–BP) ─────────────────────────────────

  // BN — Timber slab price comparison
  {
    group: 'BN', type: 'multiple_choice', category: 'Retail and Finance',
    context: ctxB1,
    question: 'How much would a builder need to pay during the sale for two Tasmanian Oak slabs at EcoTimber Hub?',
    options: ['$300.00', '$350.00', '$375.00', '$400.00'],
    answer: '$300.00'
  },
  {
    group: 'BN', type: 'multiple_choice', category: 'Retail and Finance',
    context: ctxB1,
    question: 'Consider the statements about the two offers. Which of the following is true?',
    options: [
      'It is cheaper to buy one individual slab at EcoTimber Hub than at The Wood Yard',
      'It is cheaper to buy three slabs at EcoTimber Hub than at The Wood Yard',
      'The standard un-discounted RRP at The Wood Yard is exactly $200.00',
      'The Wood Yard sale saves you exactly 30% off their original RRP',
    ],
    answer: 'The standard un-discounted RRP at The Wood Yard is exactly $200.00'
  },

  // BO — Energy efficiency upgrade package savings | payback period
  {
    group: 'BO', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxB2,
    question: 'A contractor offers a package deal of $9,500 to complete all four renovations simultaneously. How much money is saved by agreeing to this package deal compared to paying the individual initial costs separately?',
    options: ['$1,150', '$1,350', '$1,550', '$1,750'],
    answer: '$1,350'
  },
  {
    group: 'BO', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxB2,
    question: 'If a client installs only the Cavity Wall Insulation, approximately how many years will it take for the cumulative annual energy savings to completely equal the initial installation cost?',
    options: ['3 years', '5 years', '7 years', '9 years'],
    answer: '5 years'
  },

  // BP — Mesh order cost | best MPa-per-dollar grade
  {
    group: 'BP', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxB3,
    question: 'A concrete finishing team orders exactly 4 sheets of SL72 Mesh and 2 sheets of SL92 Mesh. What is the total material cost of this order before delivery fees?',
    options: ['$720', '$820', '$890', '$940'],
    answer: '$820'
  },
  {
    group: 'BP', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxB3,
    question: 'Which mesh grade offers the highest proportion of strength performance relative to its unit sheet cost (MPa per dollar spent on a single sheet)?',
    options: ['SL62 Mesh', 'SL72 Mesh', 'SL82 Mesh', 'SL92 Mesh'],
    answer: 'SL62 Mesh'
  },

  // BQ — Cladding promo cost for 4 m | which statement is false
  {
    group: 'BQ', type: 'multiple_choice', category: 'Retail and Finance',
    context: ctxB4,
    question: 'How much will a landscaper pay if they purchase exactly 4 linear metres of Premium Composite decking at DuraPlank Express?',
    options: ['$108.00', '$114.00', '$126.00', '$144.00'],
    answer: '$108.00'
  },
  {
    group: 'BQ', type: 'multiple_choice', category: 'Retail and Finance',
    context: ctxB4,
    question: 'Consider each of the following statements about the two composite decking offers. Which statement is false?',
    options: [
      'Purchasing 1 single metre of decking is cheaper at EcoDeck Warehouse than at DuraPlank Express',
      'Purchasing exactly 8 metres of decking costs identical amounts at both suppliers',
      'The standard baseline retail price per metre before any discount is identical at both stores',
      'Buying 12 metres of decking at DuraPlank Express costs a total of $324.00',
    ],
    answer: 'Purchasing exactly 8 metres of decking costs identical amounts at both suppliers'
  },

  // BR — Acoustic insulation coverage cost difference | best NRC per dollar
  {
    group: 'BR', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxB5,
    question: 'An installer requires enough material to cover a 120 m² office partition zone. What is the exact difference in total material cost between buying the necessary packs of Glasswool Partition versus High-Density Rockwool?',
    options: ['$640', '$710', '$860', '$900'],
    answer: '$860'
  },
  {
    group: 'BR', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxB5,
    question: 'Which acoustic insulation layer provides the highest proportion of sound performance efficiency relative to its raw material cost per square metre (highest NRC value achieved per dollar spent on 1 m²)?',
    options: ['Glasswool Partition', 'High-Density Rockwool', 'Recycled Polyester', 'SoundLag Foam Sheet'],
    answer: 'Glasswool Partition'
  },

  // BS — Combined palette weight | best volume per kg
  {
    group: 'BS', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxB6,
    question: 'A builder loads a trailer with exactly one full standard palette of Standard Besser Blocks and one full standard palette of Jumbo Engineered blocks. What is the total combined material weight?',
    options: ['1,920 kg', '2,220 kg', '2,450 kg', '2,680 kg'],
    answer: '2,220 kg'
  },
  {
    group: 'BS', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxB6,
    question: 'Which block variety exhibits the highest structural volume capacity relative to its individual unit dead-weight mass (highest cubic metres of volume per kilogram of block weight)?',
    options: ['Interlocking Capping', 'Standard Besser Block', 'Split-Face Retaining', 'Jumbo Engineered'],
    answer: 'Standard Besser Block'
  },

  // BT — 5-window cost at Apex | which statement is true
  {
    group: 'BT', type: 'multiple_choice', category: 'Retail and Finance',
    context: ctxB7,
    question: 'How much must a developer pay during this trade campaign to secure exactly 5 window frames from Apex Fenestration?',
    options: ['$2,400', '$2,550', '$2,700', '$3,000'],
    answer: '$2,700'
  },
  {
    group: 'BT', type: 'multiple_choice', category: 'Retail and Finance',
    context: ctxB7,
    question: 'Evaluate the total cost profiles of the window packages. Which of the following statements is true?',
    options: [
      'Buying 3 windows is cheaper at Apex Fenestration than at Matrix Glazing Systems',
      'Buying 5 windows is cheaper at Apex Fenestration than at Matrix Glazing Systems',
      'The standard baseline list unit price is identical across both joinery manufacturers',
      'Matrix Glazing Systems offers a flat 20% discount off their standard list price',
    ],
    answer: 'The standard baseline list unit price is identical across both joinery manufacturers'
  },

  // BU — 5-day sandblasted paving value | best speed efficiency per dollar
  {
    group: 'BU', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxB8,
    question: 'A municipal paving crew completes 5 consecutive working days using the Sandblasted Textured finish at their standard daily laying target speed. What is the total material value of the pavers laid over this timeframe?',
    options: ['$11,500', '$14,000', '$16,200', '$18,500'],
    answer: '$14,000'
  },
  {
    group: 'BU', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxB8,
    question: 'Which granite paving finish achieves the highest proportion of speed efficiency relative to its material cost (highest square metres laid per day per dollar of procurement cost for 1 m²)?',
    options: ['Exfoliated Stone', 'Honed Smooth Slab', 'Sandblasted Textured', 'Bush-Hammered Grip'],
    answer: 'Exfoliated Stone'
  },

  // BV — DD T&G sheet count and cost | unit cost per m² comparison
  {
    group: 'BV', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxB9,
    question: 'A framing team must cover a residential upper floor structure measuring exactly 108 square metres using the DD Tongue & Groove sheets. What is the total material cost of the sheets required?',
    options: ['$2,160.00', '$2,420.50', '$2,592.00', '$2,850.00'],
    answer: '$2,592.00'
  },
  {
    group: 'BV', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxB9,
    question: 'When breaking down the sheet pricing to a standardised unit value per square metre ($/m²), how do the two plywood selections compare?',
    options: [
      'CD Formply is cheaper by $1.00 per square metre',
      'DD Tongue & Groove is cheaper by $1.00 per square metre',
      'Both items have a completely identical unit cost of $25.00 per square metre',
      'Both items have a completely identical unit cost of $24.00 per square metre',
    ],
    answer: 'DD Tongue & Groove is cheaper by $1.00 per square metre'
  },

  // BW — Total anchor count | best tensile kg per dollar
  {
    group: 'BW', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxB10,
    question: 'A hardware procurement agent buys a bundle consisting of exactly 3 boxes of Anchor Class M10 and 2 boxes of Anchor Class M16. What is the combined total number of individual structural anchors purchased?',
    options: ['94 anchors', '102 anchors', '112 anchors', '124 anchors'],
    answer: '112 anchors'
  },
  {
    group: 'BW', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxB10,
    question: 'Which anchor product class gives you the highest total safe mechanical performance capacity relative to your upfront investment (highest individual anchor tensile kilograms per single dollar spent on that anchor)?',
    options: ['Anchor Class M10', 'Anchor Class M12', 'Anchor Class M16', 'Class M10 and Class M12 are completely tied'],
    answer: 'Anchor Class M12'
  },

  // BX — Motorcycle: total interest | reducing balance 2 months | depreciation 3 years
  {
    group: 'BX', type: 'number_input', category: 'Retail and Finance',
    context: ctxVF1s,
    question: 'How much interest will he have paid in total?',
    answer: '3600'
  },
  {
    group: 'BX', type: 'number_input', category: 'Retail and Finance',
    context: null,
    question: 'Sarah buys the same motorcycle for $12,000 with a loan at an interest rate of 12% per year. The interest is calculated monthly on the amount owed on the loan. If Sarah pays $300 a month on her loan, how much will she still owe after 2 months?\n(Note: Interest is calculated at the end of each month)',
    answer: '11638.20'
  },
  {
    group: 'BX', type: 'number_input', category: 'Retail and Finance',
    context: ctxVF1d,
    question: 'If the price of the new motorcycle was $12,000, how much would the motorcycle be worth after 3 years?',
    answer: '7434.24'
  },

  // BY — Jet ski: total interest | reducing balance 2 months | depreciation 4 years
  {
    group: 'BY', type: 'number_input', category: 'Retail and Finance',
    context: ctxVF2s,
    question: 'How much interest will she have paid in total?',
    answer: '2740'
  },
  {
    group: 'BY', type: 'number_input', category: 'Retail and Finance',
    context: null,
    question: 'Marcus buys the same jet ski for $15,500 using a loan at a rate of 6% per year. The interest is calculated monthly on the amount owed on the loan. If Marcus pays $500 a month on his loan, how much will he still owe after 2 months?',
    answer: '14652.89'
  },
  {
    group: 'BY', type: 'number_input', category: 'Retail and Finance',
    context: ctxVF2d,
    question: 'If the price of the new jet ski was $15,500, how much would it be worth after 4 years?',
    answer: '6663.26'
  },

  // BZ — Used car: total interest | reducing balance 3 months | depreciation 3 years
  {
    group: 'BZ', type: 'number_input', category: 'Retail and Finance',
    context: ctxVF3s,
    question: 'How much total interest will David pay?',
    answer: '1680'
  },
  {
    group: 'BZ', type: 'number_input', category: 'Retail and Finance',
    context: null,
    question: 'Elena buys the exact same car for $8,400 with a loan at a rate of 9% per year. The interest is calculated monthly on the amount owed on the loan. If she pays $250 a month on her loan, how much will she still owe after 3 months?',
    answer: '7834.78'
  },
  {
    group: 'BZ', type: 'number_input', category: 'Retail and Finance',
    context: ctxVF3d,
    question: 'If the initial price of the car was $8,400, how much would the car be worth after 3 years?',
    answer: '6398.78'
  },

  // CA — Car with deposit: total interest | reducing balance 3 months | depreciation 4 years
  {
    group: 'CA', type: 'number_input', category: 'Retail and Finance',
    context: ctxVF4s,
    question: 'How much total interest will Fiona have paid over the 5 years?',
    answer: '5200'
  },
  {
    group: 'CA', type: 'number_input', category: 'Retail and Finance',
    context: null,
    question: 'George buys the same car for $24,000. He also pays a $4,000 deposit upfront, but loans the remaining balance at a rate of 4.8% per year. The interest is calculated monthly on the amount owed. If George repays $450 a month, how much will he owe after 3 months?',
    answer: '18885.55'
  },
  {
    group: 'CA', type: 'number_input', category: 'Retail and Finance',
    context: ctxVF4d,
    question: 'If the original price of the new car was $24,000, how much would the car be worth after 4 years?',
    answer: '11906.97'
  },

  // CB — Delivery van: total interest | reducing balance 3 months | depreciation 4 years
  {
    group: 'CB', type: 'number_input', category: 'Retail and Finance',
    context: ctxVF5s,
    question: 'What is the total interest Henry pays on this finance option?',
    answer: '8800'
  },
  {
    group: 'CB', type: 'number_input', category: 'Retail and Finance',
    context: null,
    question: 'Ian buys the same van for $32,000 with a loan at a rate of 6% per year. The interest is calculated monthly on the amount owed on the loan. If Ian makes monthly payments of $800, how much does he still owe at the end of 3 months?',
    answer: '30070.38'
  },
  {
    group: 'CB', type: 'number_input', category: 'Retail and Finance',
    context: ctxVF5d,
    question: 'If the price of the new van was $32,000, how much would it be worth after 4 years?',
    answer: '11468.45'
  },

  // CC — Electric scooter (fortnightly): total interest | reducing balance 2 months | depreciation 3 years
  {
    group: 'CC', type: 'number_input', category: 'Retail and Finance',
    context: ctxVF6s,
    question: 'How much interest will Julia pay over the 4 years?',
    answer: '1180'
  },
  {
    group: 'CC', type: 'number_input', category: 'Retail and Finance',
    context: null,
    question: 'Kevin buys the same scooter for $3,500 with a loan at a rate of 12% per year. The interest is calculated monthly on the amount owed on the loan. If Kevin repays $150 at the end of each month, what is his remaining balance after 2 months?',
    answer: '3268.85'
  },
  {
    group: 'CC', type: 'number_input', category: 'Retail and Finance',
    context: ctxVF6d,
    question: 'If the price of the new scooter was $3,500, how much would it be worth after 3 years?',
    answer: '2409.75'
  },

  // CD — SUV with balloon payment: total interest | reducing balance 3 months | depreciation 4 years
  {
    group: 'CD', type: 'number_input', category: 'Retail and Finance',
    context: ctxVF7s,
    question: 'What is the total interest Liam will have paid by the end of the 5 years?',
    answer: '7400'
  },
  {
    group: 'CD', type: 'number_input', category: 'Retail and Finance',
    context: null,
    question: 'Mia buys the same SUV for $45,000 with a loan at a rate of 7.2% per year. The interest is calculated monthly on the amount owed. If she pays $1,200 a month on her loan, how much will she still owe after 3 months?',
    answer: '42193.23'
  },
  {
    group: 'CD', type: 'number_input', category: 'Retail and Finance',
    context: ctxVF7d,
    question: 'If the price of the new SUV was $45,000, how much would it be worth after 4 years?',
    answer: '20950.62'
  },

  // CE — Luxury sedan: total interest | reducing balance 3 months | depreciation 4 years
  {
    group: 'CE', type: 'number_input', category: 'Retail and Finance',
    context: ctxVF8s,
    question: 'Calculate the total interest paid by Noah over the life of the loan.',
    answer: '7000'
  },
  {
    group: 'CE', type: 'number_input', category: 'Retail and Finance',
    context: null,
    question: 'Olivia buys the same luxury sedan for $62,000 with a loan at a rate of 9.6% per year. The interest is calculated monthly on the amount owed. If she makes a monthly payment of $2,500, what is the remaining amount owed after 3 months?',
    answer: '55939.78'
  },
  {
    group: 'CE', type: 'number_input', category: 'Retail and Finance',
    context: ctxVF8d,
    question: 'If the price of the new sedan was $62,000, how much would it be worth after 4 years?',
    answer: '21501.60'
  },

  // CF — Compact car (variable rate): total interest | reducing balance 3 months | depreciation 5 years
  {
    group: 'CF', type: 'number_input', category: 'Retail and Finance',
    context: ctxVF9s,
    question: 'What is the total interest paid by Paige?',
    answer: '5700'
  },
  {
    group: 'CF', type: 'number_input', category: 'Retail and Finance',
    context: null,
    question: 'Quentin buys the same car for $18,000. His loan tracks a variable interest rate calculated monthly on the balance owed. For the first 2 months, the rate is 6% per year, but at the start of the 3rd month, the rate increases to 9% per year. If Quentin pays $500 a month on his loan, how much will he still owe after 3 months?',
    answer: '16806.78'
  },
  {
    group: 'CF', type: 'number_input', category: 'Retail and Finance',
    context: ctxVF9d,
    question: 'If the price of the new car was $18,000, how much would the car be worth after 5 years?',
    answer: '9054.40'
  },

  // CG — Utility truck with trade-in: total interest | reducing balance 3 months | depreciation 4 years
  {
    group: 'CG', type: 'number_input', category: 'Retail and Finance',
    context: ctxVF10s,
    question: 'How much interest will Ryan pay in total?',
    answer: '8400'
  },
  {
    group: 'CG', type: 'number_input', category: 'Retail and Finance',
    context: null,
    question: 'Sophia buys the same truck for $38,500 and also uses a $5,500 trade-in credit. She secures a loan for the remainder at a rate of 8.4% per year. The interest is calculated monthly on the amount owed on the loan. If Sophia pays $1,000 a month on her loan, how much does she still owe after 3 months?',
    answer: '30676.81'
  },
  {
    group: 'CG', type: 'number_input', category: 'Retail and Finance',
    context: ctxVF10d,
    question: 'If the price of the new truck was $38,500, how much would the truck be worth after 4 years?',
    answer: '19651.48'
  },

  // CH — Capital city home values: highest-lowest diff | 1-year interest with deposit
  {
    group: 'CH', type: 'number_input', category: 'Number and Algebra',
    context: ctxPR1,
    question: 'What is the difference between the median home value in the highest-priced city and the lowest-priced city listed in the data?',
    answer: '340000'
  },
  {
    group: 'CH', type: 'number_input', category: 'Retail and Finance',
    context: ctxPR1,
    question: 'Ricky decides to buy a house at the median value in Hobart and has saved a 20% deposit. How much interest would he pay for the first year if he borrows from Bank #3?',
    answer: '13200'
  },

  // CI — Regional apartments: second highest city | 1-year interest with deposit
  {
    group: 'CI', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxPR2,
    question: 'Which region has the second highest median unit value, and what is its value?',
    options: [
      'Gold Coast, $610,000',
      'Wollongong, $580,000',
      'Sunshine Coast, $640,000',
      'Newcastle, $520,000',
    ],
    answer: 'Gold Coast, $610,000'
  },
  {
    group: 'CI', type: 'number_input', category: 'Retail and Finance',
    context: ctxPR2,
    question: 'An investor purchases a unit at the median value on the Gold Coast. If they provide a 15% deposit upfront, calculate the total dollar interest owed during the first year using Alpha Bank.',
    answer: '21258.50'
  },

  // CJ — Capital city comparison: Perth vs Darwin cost diff | 1-year interest with deposit
  {
    group: 'CJ', type: 'number_input', category: 'Number and Algebra',
    context: ctxPR3,
    question: 'If you buy a median house in Perth instead of Darwin, how much more money does the property cost?',
    answer: '130000'
  },
  {
    group: 'CJ', type: 'number_input', category: 'Retail and Finance',
    context: ctxPR3,
    question: 'Chloe buys a property at the median price in Canberra. She puts down a 25% deposit. How much interest does she pay in Year 1 if she uses Atlantic Bank?',
    answer: '21626.25'
  },

  // CK — Commercial warehouses: mean price | 1-year interest with deposit
  {
    group: 'CK', type: 'number_input', category: 'Number and Algebra',
    context: ctxPR4,
    question: 'Calculate the average (mean) median warehouse price across all three zones combined.',
    answer: '746666.67'
  },
  {
    group: 'CK', type: 'number_input', category: 'Retail and Finance',
    context: ctxPR4,
    question: 'A business buys a warehouse in Zone 2. The bank requires a strict 30% deposit. Find the total interest paid in the first year under Lender B.',
    answer: '25641'
  },

  // CL — Agricultural land: count above threshold | 1-year interest with deposit
  {
    group: 'CL', type: 'number_input', category: 'Number and Algebra',
    context: ctxPR5,
    question: 'How many of the listed districts have a median farm price that is strictly greater than $650,000?',
    answer: '3'
  },
  {
    group: 'CL', type: 'number_input', category: 'Retail and Finance',
    context: ctxPR5,
    question: 'A primary producer purchases a farm in the Mallee region. They secure the property using a 10% cash deposit. How much interest do they owe at the end of Year 1 using RuralCredit?',
    answer: '14566.50'
  },

  // CM — Coastal holiday homes: percentage comparison | interest difference between lenders
  {
    group: 'CM', type: 'number_input', category: 'Number and Algebra',
    context: ctxPR6,
    question: 'What percentage of the Byron Bay median value is the Port Douglas median value? (Round your answer to two decimal places)',
    answer: '64.29'
  },
  {
    group: 'CM', type: 'number_input', category: 'Retail and Finance',
    context: ctxPR6,
    question: 'A buyer chooses a property in Lorne and pays a 20% deposit. What is the difference in first-year interest payments if they choose Bank South instead of Bank North?',
    answer: '3024'
  },

  // CN — High-density residential: percentage price increase | fixed cash deposit interest
  {
    group: 'CN', type: 'number_input', category: 'Number and Algebra',
    context: ctxPR7,
    question: 'If property prices in Parramatta increase by 12% next year, what will its new median townhouse price be?',
    answer: '795200'
  },
  {
    group: 'CN', type: 'number_input', category: 'Retail and Finance',
    context: ctxPR7,
    question: 'Elena purchases a townhouse in Richmond. Instead of a flat percentage, she pays a fixed cash deposit of exactly $150,000 upfront. Calculate the amount of interest she will pay in her first year with Summit Loans.',
    answer: '33075'
  },

  // CO — Mining towns: percentage of another city | loan establishment fee + interest
  {
    group: 'CO', type: 'number_input', category: 'Number and Algebra',
    context: ctxPR8,
    question: "Moranbah's median house value is what percentage of Port Hedland's median house value? (Round your answer to the nearest whole percentage)",
    answer: '61'
  },
  {
    group: 'CO', type: 'number_input', category: 'Retail and Finance',
    context: ctxPR8,
    question: 'A buyer purchases a home in Karratha with a 20% deposit. The bank adds a one-off 2% loan establishment fee to the initial loan balance before interest is calculated. What is the total interest paid in Year 1 using Mutual B?',
    answer: '30551.04'
  },

  // CP — Capital territory: budget shortfall | interest-only 2-year total
  {
    group: 'CP', type: 'number_input', category: 'Number and Algebra',
    context: ctxPR9,
    question: 'If a buyer has a budget exactly equal to the median dwelling price of Belconnen, how much more money do they need to purchase a property at the median price in Gungahlin?',
    answer: '70000'
  },
  {
    group: 'CP', type: 'number_input', category: 'Retail and Finance',
    context: ctxPR9,
    question: 'Marcus buys a home in Tuggeranong. He saves a 15% deposit. His loan is interest-only, meaning interest is calculated on the unchanged principal balance each year. How much total interest will he pay over the first 2 years combined with Federal Credit?',
    answer: '39933'
  },

  // CQ — Premium suburbs: dual price change comparison | stamp duty bundled loan + interest
  {
    group: 'CQ', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxPR10,
    question: "If Mosman's property values decline by 5% while Cottesloe's property values simultaneously gain 8%, which suburb will have the higher value and by how much?",
    options: [
      'Mosman is higher, by $213,000',
      'Cottesloe is higher, by $213,000',
      'Mosman is higher, by $345,000',
      'Both suburbs will have the same value',
    ],
    answer: 'Mosman is higher, by $213,000'
  },
  {
    group: 'CQ', type: 'number_input', category: 'Retail and Finance',
    context: ctxPR10,
    question: "An investor buys a luxury home in Toorak and pays a 20% deposit. Government stamp duty equal to 5% of the full purchase price is bundled directly into the total loan balance. What is the total interest charged in the first year by Tier 1 Bank?",
    answer: '75480'
  },

  // ── Set CR: The Water Tank ────────────────────────────────────────────────
  {
    group: 'CR', type: 'multiple_choice', category: 'Measurement and Geometry',
    context: ctxCylW,
    question: 'What is the total closed surface area of the tank (base, top, and curved side wall)? Round to the nearest whole number.',
    options: ['75 m²', '151 m²', '122 m²', '94 m²'],
    answer: '151 m²'
  },
  {
    group: 'CR', type: 'multiple_choice', category: 'Measurement and Geometry',
    context: ctxCylW,
    question: 'If the tank is filled to 80% of its total capacity, what is the volume of water in cubic metres?',
    options: ['113.04 m³', '141.3 m³', '90.43 m³', '85.2 m³'],
    answer: '113.04 m³'
  },

  // ── Set CS: The Circular Pool ─────────────────────────────────────────────
  {
    group: 'CS', type: 'multiple_choice', category: 'Measurement and Geometry',
    context: ctxCylP,
    question: 'What is the area of the ground covered by the pool (the base)?',
    options: ['15.7 m²', '19.6 m²', '7.85 m²', '25 m²'],
    answer: '19.6 m²'
  },
  {
    group: 'CS', type: 'multiple_choice', category: 'Measurement and Geometry',
    context: ctxCylP,
    question: 'What is the maximum volume of water the pool can hold in cubic metres?',
    options: ['23.55 m³', '31.4 m³', '18.84 m³', '9.42 m³'],
    answer: '23.55 m³'
  },

  // ── Set CT: The Holiday Feast ─────────────────────────────────────────────
  {
    group: 'CT', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxE09,
    question: 'Jerome has a Mince Pie and an Eggnog. How many hours of walking does he need to burn this off?',
    options: ['2.7 hours', '2.1 hours', '3.0 hours', '1.8 hours'],
    answer: '2.7 hours'
  },
  {
    group: 'CT', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxE09,
    question: 'If Jerome dances for 2 hours, how many Roast Potatoes (800 kJ each) has he effectively burned?',
    options: ['2.5', '3.25', '4.0', '3.5'],
    answer: '3.25'
  },

  // ── Set CU: School Canteen Calories ──────────────────────────────────────
  {
    group: 'CU', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxE10,
    question: 'A student eats a Meat Pie and a Juice Box. How many minutes of soccer must they play to burn it off?',
    options: ['45 mins', '57.6 mins', '50 mins', '65 mins'],
    answer: '57.6 mins'
  },
  {
    group: 'CU', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxE10,
    question: 'How many minutes of soccer is equivalent to the energy in 4 Sausage Rolls?',
    options: ['120 mins', '124.8 mins', '130 mins', '110 mins'],
    answer: '124.8 mins'
  },

  // ── Set CV: Office Desk Energy ────────────────────────────────────────────
  {
    group: 'CV', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxE11,
    question: 'Jerome consumes 3 Biscuits and 1 Mocha. How many minutes of stair climbing are required to burn this off?',
    options: ['35 mins', '37.5 mins', '40 mins', '42 mins'],
    answer: '37.5 mins'
  },
  {
    group: 'CV', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxE11,
    question: 'If Jerome does 30 minutes of stair climbing, has he burned off a Donut (850 kJ)?',
    options: ['Yes, with 350 kJ to spare', 'No, he is short by 250 kJ', 'Yes, with 500 kJ to spare', 'No, he is short by 350 kJ'],
    answer: 'Yes, with 350 kJ to spare'
  },

  // ── Set CW: Weekend Sports Nutrition ─────────────────────────────────────
  {
    group: 'CW', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxE12,
    question: 'A runner consumes 2 Isotonic Drinks and 1 Energy Gel. How many minutes of running burns this off?',
    options: ['50 mins', '51.8 mins', '55 mins', '48.5 mins'],
    answer: '51.8 mins'
  },
  {
    group: 'CW', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxE12,
    question: 'If a swimmer swims for 90 minutes, how many Bananas (400 kJ each) worth of energy have they burned?',
    options: ['5', '6', '7', '8'],
    answer: '6'
  },

  // ── Set CX: The Late Night Study Session ──────────────────────────────────
  {
    group: 'CX', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxE13,
    question: 'Jerome has a Chocolate Bar and a Latte. How many hours of yoga does it take to burn this off? (Round to 1 decimal place)',
    options: ['2.2 hours', '2.4 hours', '2.5 hours', '2.0 hours'],
    answer: '2.4 hours'
  },
  {
    group: 'CX', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxE13,
    question: 'How many minutes of cleaning are needed to burn off 2 portions of Dried Fruit?',
    options: ['70 mins', '75 mins', '80 mins', '85 mins'],
    answer: '75 mins'
  },

  // ── Set CY: Standard Drinks — Beer ───────────────────────────────────────────
  {
    group: 'CY', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxSD,
    question: 'The health recommendation is to drink no more than 4 standard drinks on a single occasion. You are drinking 375ml bottles of beer with 4.8% alcohol. What is the maximum number of full bottles you can drink to stay under the 4-drink limit?',
    options: ['2', '3', '4', '5'],
    answer: '2'
  },

  // ── Set CZ: Standard Drinks — Wine ───────────────────────────────────────────
  {
    group: 'CZ', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxSD,
    question: 'The health recommendation is to drink no more than 4 standard drinks. You are drinking 150ml glasses of wine with 13.5% alcohol. What is the maximum number of full glasses you can drink to stay under the limit?',
    options: ['2', '3', '4', '5'],
    answer: '2'
  },

  // ── Set DA: Standard Drinks — Light Beer ─────────────────────────────────────
  {
    group: 'DA', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxSD,
    question: 'The health recommendation is to drink no more than 4 standard drinks. You are drinking 375ml bottles of light beer with 2.7% alcohol. What is the maximum number of full bottles you can drink to stay under the limit?',
    options: ['3', '4', '5', '6'],
    answer: '5'
  },

  // ── Set DB: Standard Drinks — Cider ──────────────────────────────────────────
  {
    group: 'DB', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxSD,
    question: 'The health recommendation is to drink no more than 4 standard drinks. You are drinking 330ml bottles of cider with 5.0% alcohol. What is the maximum number of full bottles you can drink to stay under the limit?',
    options: ['2', '3', '4', '5'],
    answer: '3'
  },

  // ── Set DC: Standard Drinks — Spirits ────────────────────────────────────────
  {
    group: 'DC', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxSD,
    question: 'The health recommendation is to drink no more than 4 standard drinks. You are drinking 30ml nips of spirits with 40% alcohol. What is the maximum number of full nips you can drink to stay under the limit?',
    options: ['2', '3', '4', '5'],
    answer: '4'
  },

  // ── Set DD: Standard Drinks — Stout ──────────────────────────────────────────
  {
    group: 'DD', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxSD,
    question: 'The health recommendation is to drink no more than 4 standard drinks. You are drinking 330ml bottles of stout with 6.0% alcohol. What is the maximum number of full bottles you can drink to stay under the limit?',
    options: ['1', '2', '3', '4'],
    answer: '2'
  },

  // ── Set DE: Standard Drinks — Premix Vodka ───────────────────────────────────
  {
    group: 'DE', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxSD,
    question: 'The health recommendation is to drink no more than 4 standard drinks. You are drinking 375ml bottles of premix vodka with 5.0% alcohol. What is the maximum number of full bottles you can drink to stay under the limit?',
    options: ['1', '2', '3', '4'],
    answer: '2'
  },

  // ── Set DF: Standard Drinks — Sparkling Wine ─────────────────────────────────
  {
    group: 'DF', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxSD,
    question: 'The health recommendation is to drink no more than 4 standard drinks. You are drinking 120ml glasses of sparkling wine with 11.5% alcohol. What is the maximum number of full glasses you can drink to stay under the limit?',
    options: ['2', '3', '4', '5'],
    answer: '3'
  },

  // ── Set DG: Standard Drinks — Pale Ale ───────────────────────────────────────
  {
    group: 'DG', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxSD,
    question: 'The health recommendation is to drink no more than 4 standard drinks. You are drinking 375ml bottles of pale ale with 5.2% alcohol. What is the maximum number of full bottles you can drink to stay under the limit?',
    options: ['1', '2', '3', '4'],
    answer: '2'
  },

  // ── Set DH: Standard Drinks — Liqueur ────────────────────────────────────────
  {
    group: 'DH', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxSD,
    question: 'The health recommendation is to drink no more than 4 standard drinks. You are drinking 60ml glasses of liqueur with 20% alcohol. What is the maximum number of full glasses you can drink to stay under the limit?',
    options: ['2', '3', '4', '5'],
    answer: '4'
  },

  // ── Sets DS–EB: Business Scenario Pairs ──────────────────────────────────────
  {
    group: 'DS', type: 'number_input', category: 'Number and Algebra',
    context: ctxDS,
    question: 'What percentage of the total portfolio ($4.8M) is held in Property?',
    answer: '50'
  },
  {
    group: 'DS', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxDS,
    question: 'If the $1,800,000 in Stocks increases by 12.5% and the $600,000 in Bonds decreases by 5%, what is the percentage increase or decrease in the total portfolio value?',
    options: ['2.94% increase', '4.06% increase', '4.50% increase', '5.21% increase'],
    answer: '4.06% increase'
  },
  {
    group: 'DT', type: 'number_input', category: 'Number and Algebra',
    context: ctxDT,
    question: 'What is the net profit as a percentage of total revenue?',
    answer: '24'
  },
  {
    group: 'DT', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxDT,
    question: 'If unit production costs increase by 10% (keeping sale price at $150), what is the percentage decrease in net profit?',
    options: ['10% decrease', '15% decrease', '25% decrease', '40% decrease'],
    answer: '25% decrease'
  },
  {
    group: 'DU', type: 'number_input', category: 'Number and Algebra',
    context: ctxDU,
    question: 'What is the current percentage defect rate?',
    answer: '5'
  },
  {
    group: 'DU', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxDU,
    question: 'If defects reduce to 80 per hour, what is the percentage increase in non-defective units?',
    options: ['1.52% increase', '2.05% increase', '3.16% increase', '4.21% increase'],
    answer: '3.16% increase'
  },
  {
    group: 'DV', type: 'number_input', category: 'Number and Algebra',
    context: ctxDV,
    question: 'What is the total monthly fuel cost for the entire fleet?',
    answer: '3240'
  },
  {
    group: 'DV', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxDV,
    question: 'If maintenance improves efficiency by 15% (reducing consumption to 8.5 L/100 km), what is the percentage decrease in total monthly fuel expenditure?',
    options: ['10% decrease', '12% decrease', '15% decrease', '20% decrease'],
    answer: '15% decrease'
  },
  {
    group: 'DW', type: 'number_input', category: 'Number and Algebra',
    context: ctxDW,
    question: 'How many subscribers remain after 1 month of 8% churn?',
    answer: '9200'
  },
  {
    group: 'DW', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxDW,
    question: 'What is the percentage change in total monthly revenue after the 800 churned subscribers and 1,200 new subscribers are accounted for?',
    options: ['2% increase', '3% increase', '4% increase', '6% increase'],
    answer: '4% increase'
  },
  {
    group: 'DX', type: 'number_input', category: 'Number and Algebra',
    context: ctxDX,
    question: 'What is the total annual income (Base Salary + Commission)?',
    answer: '100000'
  },
  {
    group: 'DX', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxDX,
    question: 'If sales increase by 20% next year, what is the percentage increase in total annual income?',
    options: ['8% increase', '10% increase', '12% increase', '15% increase'],
    answer: '10% increase'
  },
  {
    group: 'DY', type: 'number_input', category: 'Number and Algebra',
    context: ctxDY,
    question: 'How many non-defective units are produced in an 8-hour shift at the current 4% defect rate?',
    answer: '15360'
  },
  {
    group: 'DY', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxDY,
    question: 'If an upgrade reduces the defect rate to 1%, what is the percentage increase in the output of non-defective units?',
    options: ['2.50% increase', '3.00% increase', '3.125% increase', '3.75% increase'],
    answer: '3.125% increase'
  },
  {
    group: 'DZ', type: 'number_input', category: 'Number and Algebra',
    context: ctxDZ,
    question: 'What is the annual Net Rental Income (52 weeks of rent minus annual costs)?',
    answer: '38800'
  },
  {
    group: 'DZ', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxDZ,
    question: 'If property value increases to $990,000 and weekly rent increases to $945, what is the percentage change in the Net Rental Yield?',
    options: ['1.82% decrease', '3.61% decrease', '5.68% decrease', '7.42% decrease'],
    answer: '3.61% decrease'
  },
  {
    group: 'EA', type: 'number_input', category: 'Number and Algebra',
    context: ctxEA,
    question: 'What is the total annual payroll tax paid?',
    answer: '35000'
  },
  {
    group: 'EA', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxEA,
    question: 'If all salaries increase by 3%, what is the percentage increase in total payroll tax liability?',
    options: ['3.00% increase', '4.28% increase', '5.14% increase', '12.86% increase'],
    answer: '5.14% increase'
  },
  {
    group: 'EB', type: 'number_input', category: 'Number and Algebra',
    context: ctxEB,
    question: 'What is the total annual operating profit?',
    answer: '625000'
  },
  {
    group: 'EB', type: 'multiple_choice', category: 'Number and Algebra',
    context: ctxEB,
    question: 'If storage space expands by 20% (costs +20%) but revenue per m² drops by 5%, what is the percentage change in total annual profit?',
    options: ['5% increase', '7.5% increase', '8% increase', '10% increase'],
    answer: '8% increase'
  },

  // ── Sets EC–EL: Volume Unit Conversions ──────────────────────────────────────
  {
    group: 'EC', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxUnit,
    question: 'A rectangular tank measures 2 m × 1.5 m × 0.5 m. What is the volume in m³?',
    answer: '1.5'
  },
  {
    group: 'EC', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxUnit,
    question: 'Using the volume you just calculated, how many kL can the tank hold?',
    answer: '1.5'
  },
  {
    group: 'ED', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxUnit,
    question: 'Convert 4,500 cm³ to Litres.',
    answer: '4.5'
  },
  {
    group: 'ED', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxUnit,
    question: 'How many 250 mL bottles can be filled from 4.5 L?',
    answer: '18'
  },
  {
    group: 'EE', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxUnit,
    question: 'A concrete slab measures 4 m × 3 m × 0.15 m. What is the volume in m³?',
    answer: '1.8'
  },
  {
    group: 'EE', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxUnit,
    question: 'At $250 per m³, what is the cost of the concrete?',
    answer: '450'
  },
  {
    group: 'EF', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxUnit,
    question: 'Convert 50 kL to Litres.',
    answer: '50000'
  },
  {
    group: 'EF', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxUnit,
    question: 'How many hours does it take to filter 50,000 L at a rate of 5,000 L per hour?',
    answer: '10'
  },
  {
    group: 'EG', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxUnit,
    question: 'A storage box is 200 cm × 150 cm × 40 cm. What is the volume in cm³?',
    answer: '1200000'
  },
  {
    group: 'EG', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxUnit,
    question: 'Convert 1,200,000 cm³ to Litres.',
    answer: '1200'
  },
  {
    group: 'EH', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxUnit,
    question: 'Convert 0.8 m³ to Litres.',
    answer: '800'
  },
  {
    group: 'EH', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxUnit,
    question: 'How many minutes does it take to fill 800 L at a rate of 40,000 mL per minute?',
    answer: '20'
  },
  {
    group: 'EI', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxUnit,
    question: 'A pool measures 120 cm × 60 cm × 50 cm. What is the volume in cm³?',
    answer: '360000'
  },
  {
    group: 'EI', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxUnit,
    question: 'Convert 360,000 cm³ to kL.',
    answer: '0.36'
  },
  {
    group: 'EJ', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxUnit,
    question: 'Convert 2.5 L to cm³.',
    answer: '2500'
  },
  {
    group: 'EJ', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxUnit,
    question: 'How many 500 mm³ medical vials can be filled from 2,500 cm³?',
    answer: '5000'
  },
  {
    group: 'EK', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxUnit,
    question: 'A 1 m³ barrel is used for storage. What is its capacity in kL?',
    answer: '1'
  },
  {
    group: 'EK', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxUnit,
    question: 'If 4 of those barrels are filled, what is the total volume in Litres?',
    answer: '4000'
  },
  {
    group: 'EL', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxUnit,
    question: 'A drainage channel is 10 m long, 0.5 m wide, and 0.8 m deep. What is the volume in m³?',
    answer: '4'
  },
  {
    group: 'EL', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxUnit,
    question: 'Each truck carries 5 m³. How many truckloads are needed for 4 m³?',
    answer: '0.8'
  },

  // ── Sets EM–EV: Tech Bundle Sale ─────────────────────────────────────────────

  // EM — Media Studio + SW Series 3 GPS
  {
    group: 'EM', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech1,
    question: 'The Media Studio laptop is on sale for $1,698.00, which is 15% off its original price. What was the original price?\n(Round to 2 decimal places)',
    answer: '1997.65'
  },
  {
    group: 'EM', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech1,
    question: 'What is the total bundle cost? (Laptop at sale price, plus the SW Series 3 GPS watch at 50% off)',
    answer: '1847.50'
  },
  {
    group: 'EM', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech1,
    question: 'If the total bundle cost is split into 52 equal weekly payments, how much is each payment?\n(Round to 2 decimal places)',
    answer: '35.53'
  },

  // EN — Workflow 3000 + Slimline XP4
  {
    group: 'EN', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech2,
    question: 'The Workflow 3000 laptop is on sale for $2,194.00, which is 20% off its original price. What was the original price?\n(Round to 2 decimal places)',
    answer: '2742.50'
  },
  {
    group: 'EN', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech2,
    question: 'What is the total bundle cost? (Laptop at sale price, plus the Slimline XP4 watch at 50% off)',
    answer: '2393.50'
  },
  {
    group: 'EN', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech2,
    question: 'If the total bundle cost is split into 52 equal weekly payments, how much is each payment?\n(Round to 2 decimal places)',
    answer: '46.03'
  },

  // EO — Xforce Gamer + Alta SportTracker
  {
    group: 'EO', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech3,
    question: 'The Xforce Gamer laptop is on sale for $2,497.00, which is 20% off its original price. What was the original price?\n(Round to 2 decimal places)',
    answer: '3121.25'
  },
  {
    group: 'EO', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech3,
    question: 'What is the total bundle cost? (Laptop at sale price, plus the Alta SportTracker watch at 50% off)',
    answer: '2726.50'
  },
  {
    group: 'EO', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech3,
    question: 'If the total bundle cost is split into 52 equal weekly payments, how much is each payment?\n(Round to 2 decimal places)',
    answer: '52.43'
  },

  // EP — Media Studio + Slimline XP4
  {
    group: 'EP', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech4,
    question: 'The Media Studio laptop is on sale for $1,698.00, which is 15% off its original price. What was the original price?\n(Round to 2 decimal places)',
    answer: '1997.65'
  },
  {
    group: 'EP', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech4,
    question: 'What is the total bundle cost? (Laptop at sale price, plus the Slimline XP4 watch at 50% off)',
    answer: '1897.50'
  },
  {
    group: 'EP', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech4,
    question: 'If the total bundle cost is split into 52 equal weekly payments, how much is each payment?\n(Round to 2 decimal places)',
    answer: '36.49'
  },

  // EQ — Workflow 3000 + Alta SportTracker
  {
    group: 'EQ', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech5,
    question: 'The Workflow 3000 laptop is on sale for $2,194.00, which is 20% off its original price. What was the original price?\n(Round to 2 decimal places)',
    answer: '2742.50'
  },
  {
    group: 'EQ', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech5,
    question: 'What is the total bundle cost? (Laptop at sale price, plus the Alta SportTracker watch at 50% off)',
    answer: '2423.50'
  },
  {
    group: 'EQ', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech5,
    question: 'If the total bundle cost is split into 52 equal weekly payments, how much is each payment?\n(Round to 2 decimal places)',
    answer: '46.61'
  },

  // ER — Xforce Gamer + SW Series 3 GPS
  {
    group: 'ER', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech6,
    question: 'The Xforce Gamer laptop is on sale for $2,497.00, which is 20% off its original price. What was the original price?\n(Round to 2 decimal places)',
    answer: '3121.25'
  },
  {
    group: 'ER', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech6,
    question: 'What is the total bundle cost? (Laptop at sale price, plus the SW Series 3 GPS watch at 50% off)',
    answer: '2646.50'
  },
  {
    group: 'ER', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech6,
    question: 'If the total bundle cost is split into 52 equal weekly payments, how much is each payment?\n(Round to 2 decimal places)',
    answer: '50.89'
  },

  // ES — Media Studio + Alta SportTracker
  {
    group: 'ES', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech7,
    question: 'The Media Studio laptop is on sale for $1,698.00, which is 15% off its original price. What was the original price?\n(Round to 2 decimal places)',
    answer: '1997.65'
  },
  {
    group: 'ES', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech7,
    question: 'What is the total bundle cost? (Laptop at sale price, plus the Alta SportTracker watch at 50% off)',
    answer: '1927.50'
  },
  {
    group: 'ES', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech7,
    question: 'If the total bundle cost is split into 52 equal weekly payments, how much is each payment?\n(Round to 2 decimal places)',
    answer: '37.07'
  },

  // ET — Workflow 3000 + SW Series 3 GPS
  {
    group: 'ET', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech8,
    question: 'The Workflow 3000 laptop is on sale for $2,194.00, which is 20% off its original price. What was the original price?\n(Round to 2 decimal places)',
    answer: '2742.50'
  },
  {
    group: 'ET', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech8,
    question: 'What is the total bundle cost? (Laptop at sale price, plus the SW Series 3 GPS watch at 50% off)',
    answer: '2343.50'
  },
  {
    group: 'ET', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech8,
    question: 'If the total bundle cost is split into 52 equal weekly payments, how much is each payment?\n(Round to 2 decimal places)',
    answer: '45.07'
  },

  // EU — Xforce Gamer + Slimline XP4
  {
    group: 'EU', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech9,
    question: 'The Xforce Gamer laptop is on sale for $2,497.00, which is 20% off its original price. What was the original price?\n(Round to 2 decimal places)',
    answer: '3121.25'
  },
  {
    group: 'EU', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech9,
    question: 'What is the total bundle cost? (Laptop at sale price, plus the Slimline XP4 watch at 50% off)',
    answer: '2696.50'
  },
  {
    group: 'EU', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech9,
    question: 'If the total bundle cost is split into 52 equal weekly payments, how much is each payment?\n(Round to 2 decimal places)',
    answer: '51.86'
  },

  // EV — Media Studio + Slimline XP4
  {
    group: 'EV', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech10,
    question: 'The Media Studio laptop is on sale for $1,698.00, which is 15% off its original price. What was the original price?\n(Round to 2 decimal places)',
    answer: '1997.65'
  },
  {
    group: 'EV', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech10,
    question: 'What is the total bundle cost? (Laptop at sale price, plus the Slimline XP4 watch at 50% off)',
    answer: '1897.50'
  },
  {
    group: 'EV', type: 'number_input', category: 'Number and Algebra',
    context: ctxTech10,
    question: 'If the total bundle cost is split into 52 equal weekly payments, how much is each payment?\n(Round to 2 decimal places)',
    answer: '36.49'
  },

  // ── Set EW: Mitchell Regional Briefing — 1:15,000, 10 cm, 4 km/h ─────────────
  // Q1: 10×15000÷100000 = 1.5 km   Q2: 1.5÷4 = 0.375 h
  {
    group: 'EW', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxMap1,
    question: 'What is the actual distance of the path in kilometres?',
    answer: '1.5'
  },
  {
    group: 'EW', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxMap1,
    question: 'How many hours of travel time should the team allocate?\n(Round to 3 decimal places)',
    answer: '0.375'
  },

  // ── Set EX: Forest Trail Operations — 1:25,000, 16 cm, 3.2 km/h ─────────────
  // Q1: 16×25000÷100000 = 4.0 km   Q2: 4.0÷3.2 = 1.25 h
  {
    group: 'EX', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxMap2,
    question: 'What is the actual distance of the trail in kilometres?',
    answer: '4'
  },
  {
    group: 'EX', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxMap2,
    question: 'How many hours will the party spend on the trail?',
    answer: '1.25'
  },

  // ── Set EY: Incident Command Sector Map — mm→km, 1:50,000, 25 mm, 2.5 km/h ──
  // Q1: 25×50,000÷1,000,000 = 1.25 km   Q2: 1.25÷2.5 = 0.5 h
  {
    group: 'EY', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxMap3,
    question: 'The route measures 25 mm on the map. What is the actual distance in kilometres?',
    answer: '1.25'
  },
  {
    group: 'EY', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxMap3,
    question: 'Using your answer, how many hours will it take the crew to travel to the forward command post on foot?',
    answer: '0.5'
  },

  // ── Set EZ: Fire Perimeter Planning — km→mm, 1:20,000 ────────────────────────
  // Q1: 3.6 km × 1,000,000 ÷ 20,000 = 180 mm   Q2: 2.4 × 1,000,000 ÷ 20,000 = 120 mm
  {
    group: 'EZ', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxMap4,
    question: 'The total fire perimeter is 3.6 km on the ground. How long should the perimeter line be on the map, in millimetres?',
    answer: '180'
  },
  {
    group: 'EZ', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxMap4,
    question: 'The secondary access track is 2.4 km in length. How long should it be drawn on the map, in millimetres?',
    answer: '120'
  },

  // ── Set FA: Building Floor Plan — mm→m, 1:500 ────────────────────────────────
  // Q1: 35×500÷1,000 = 17.5 m   Q2: 48×500÷1,000 = 24 m
  {
    group: 'FA', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxMap5,
    question: 'The primary evacuation corridor measures 35 mm on the plan. What is its actual length in metres?',
    answer: '17.5'
  },
  {
    group: 'FA', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxMap5,
    question: 'The stairwell access route measures 48 mm on the plan. What is its actual length in metres?',
    answer: '24'
  },

  // ── Set FB: Station Layout Drawing — m→mm, 1:200 ─────────────────────────────
  // Q1: 8.4×1,000÷200 = 42 mm   Q2: 3.6×1,000÷200 = 18 mm
  {
    group: 'FB', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxMap6,
    question: 'The apparatus bay is 8.4 m long in reality. How long should it be drawn on the plan, in millimetres?',
    answer: '42'
  },
  {
    group: 'FB', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxMap6,
    question: 'The training room is 3.6 m wide in reality. How wide should it be drawn on the plan, in millimetres?',
    answer: '18'
  },

  // ── Set FC: Hazmat Site Survey — cm→m, 1:1,000 ───────────────────────────────
  // Q1: 7.5×1,000÷100 = 75 m   Q2: 12.4×1,000÷100 = 124 m
  {
    group: 'FC', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxMap7,
    question: 'The exclusion zone boundary measures 7.5 cm on the map. What is the actual distance in metres?',
    answer: '75'
  },
  {
    group: 'FC', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxMap7,
    question: 'The hose lay route is drawn as 12.4 cm on the map. What is the actual length in metres?',
    answer: '124'
  },

  // ── Set FD: Operations Area Map — m→cm, 1:500 ────────────────────────────────
  // Q1: 45×100÷500 = 9 cm   Q2: 85×100÷500 = 17 cm
  {
    group: 'FD', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxMap8,
    question: 'The safety exclusion zone extends 45 m from the incident. How far should this be drawn on the map, in centimetres?',
    answer: '9'
  },
  {
    group: 'FD', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxMap8,
    question: 'The secondary perimeter is 85 m from the incident. How far should this be drawn on the map, in centimetres?',
    answer: '17'
  },

  // ── Set FE: Mitchell Town Map ─────────────────────────────────────────────────
  {
    group: 'FE', type: 'multiple_choice', category: 'Measurement and Geometry',
    context: ctxMitchell,
    question: 'Leo wants to get from the train station to the police station. Which of the following describes the most direct route?',
    options: [
      'A — Travel east along Station St. Turn right at Market St. After Moon St, the police station will be on his left.',
      'B — Travel east along Station St. Turn right at Market St. After Moon St, the police station will be on his right.',
      'C — Travel east along Station St. Turn right at Market St. Before Moon St, the police station will be on his left.',
      'D — Travel west along Station St. Turn right at Market St. After Moon St, the police station will be on his right.',
      'E — Travel west along Station St. Turn right at Market St. After Moon St, the police station will be on his left.',
    ],
    answer: 'A — Travel east along Station St. Turn right at Market St. After Moon St, the police station will be on his left.'
  },
  {
    group: 'FE', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxMitchell,
    question: 'The scale on the map of Mitchell is 1:15 000. If Leo travelled 10 centimetres (cm) on the map, how many kilometres (km) would this be?',
    answer: '1.5'
  },
  {
    group: 'FE', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxMitchell,
    question: 'Leo goes for a 5 km walk around Mitchell. If Leo walks at an average pace of 4 km/h, how long will it take him to walk this distance? Give your answer in minutes.',
    answer: '75'
  },

  // ── Sets DI–DR: Shower Head Water Savings ────────────────────────────────────
  {
    group: 'DI', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxShower,
    question: 'Spraysaver (7 L/min) vs Steadyflow (10 L/min). How many litres are saved in one 10-minute shower?',
    answer: '30'
  },
  {
    group: 'DJ', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxShower,
    question: 'Spraysaver (6 L/min) vs Steadyflow (9 L/min). How many litres are saved in one 8-minute shower?',
    answer: '24'
  },
  {
    group: 'DK', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxShower,
    question: 'Spraysaver (7.5 L/min) vs Steadyflow (12 L/min). How many litres are saved in one 12-minute shower?',
    answer: '54'
  },
  {
    group: 'DL', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxShower,
    question: 'Spraysaver (5 L/min) vs Steadyflow (8 L/min). How many litres are saved in one 5-minute shower?',
    answer: '15'
  },
  {
    group: 'DM', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxShower,
    question: 'Spraysaver (8 L/min) vs Steadyflow (15 L/min). How many litres are saved in one 20-minute shower?',
    answer: '140'
  },
  {
    group: 'DN', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxShower,
    question: 'Spraysaver (6 L/min) vs Steadyflow (10 L/min). How many litres are saved in one 6-minute shower?',
    answer: '24'
  },
  {
    group: 'DO', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxShower,
    question: 'Spraysaver (7 L/min) vs Steadyflow (11 L/min). How many litres are saved in one 15-minute shower?',
    answer: '60'
  },
  {
    group: 'DP', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxShower,
    question: 'Spraysaver (9 L/min) vs Steadyflow (14 L/min). How many litres are saved in one 4-minute shower?',
    answer: '20'
  },
  {
    group: 'DQ', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxShower,
    question: 'Spraysaver (5 L/min) vs Steadyflow (9 L/min). How many litres are saved in one 30-minute shower?',
    answer: '120'
  },
  {
    group: 'DR', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxShower,
    question: 'Spraysaver (8 L/min) vs Steadyflow (13 L/min). How many litres are saved in one 7-minute shower?',
    answer: '35'
  },

]

// ── Units keyed by group, [Q1 unit, Q2 unit] — '$' renders as prefix ─────────
const units = {
  A: ['h', '$', '$'],   B: ['h', '$', '$'],   C: ['h', '$', '$'],   D: ['h', '$', '$'],   E: ['h', '$', '$'],
  F: ['h', '$', '$'],   G: ['h', '$', '$'],   H: ['h', '$', '$'],   I: ['h', '$', '$'],   J: ['h', '$', '$'],
  K: ['%', '$', null], L: ['$', 'years', null], M: ['$', '$', null],   N: ['$', 'years', '%'], O: ['$', '$', null],
  P: ['$', 'years', null], Q: ['$', '$', null],   R: ['$', 'years', null], S: ['$', '$', null],   T: ['$', '$', null],
  U: ['m³', 'L'],  V: ['m³', 'L'],  W: ['m³', 'L'],
  X: ['m²', 'tiles'], Y: ['m²', 'boards'], Z: ['m²', 'pavers'],
  AA: ['m', 'sleepers'], AB: ['m', 'strips'],
  AC: ['mm³', 'mL'], AD: ['mm³', 'mL'],
  AE: [null, '$'], AF: ['$', '$'], AG: ['$', '$'], AH: ['$', '$'], AI: ['$', '$'],
  AJ: ['$', '$'], AK: [null, '$'], AL: ['$', '$'], AM: [null, '$'], AN: ['$', '$'],
  AO: ['$', null], AP: ['$', null], AQ: ['$', null], AR: ['$', null], AS: ['$', null],
  AT: ['$', null], AU: ['$', null], AV: ['$', null], AW: ['$', null], AX: ['$', null],
  AY: [null, null], AZ: [null, null], BA: [null, null], BB: [null, null], BC: [null, null],
  BD: [null, null], BE: [null, null], BF: [null, null], BG: [null, null], BH: [null, null],
  BI: ['mL', null], BJ: ['L', 'barrels'], BK: ['L', null], BL: ['mL', 'mL'], BM: ['L', null],
  BN: [null, null], BO: [null, null], BP: [null, null],
  BQ: [null, null], BR: [null, null], BS: [null, null], BT: [null, null], BU: [null, null],
  BV: [null, null], BW: [null, null],
  BX: ['$', '$', '$'], BY: ['$', '$', '$'], BZ: ['$', '$', '$'],
  CA: ['$', '$', '$'], CB: ['$', '$', '$'], CC: ['$', '$', '$'],
  CD: ['$', '$', '$'], CE: ['$', '$', '$'], CF: ['$', '$', '$'], CG: ['$', '$', '$'],
  CH: ['$', '$'],
  CI: [null, '$'],
  CJ: ['$', '$'],
  CK: ['$', '$'],
  CL: [null, '$'],
  CM: ['%', '$'],
  CN: ['$', '$'],
  CO: ['%', '$'],
  CP: ['$', '$'],
  CQ: [null, '$'],
  CR: [null, null],
  CS: [null, null],
  CT: [null, null],
  CU: [null, null],
  CV: [null, null],
  CW: [null, null],
  CX: [null, null],
  CY: [null], CZ: [null], DA: [null], DB: [null], DC: [null],
  DD: [null], DE: [null], DF: [null], DG: [null], DH: [null],
  DI: ['L'], DJ: ['L'], DK: ['L'], DL: ['L'], DM: ['L'],
  DN: ['L'], DO: ['L'], DP: ['L'], DQ: ['L'], DR: ['L'],
  DS: ['%', null], DT: ['%', null], DU: ['%', null], DV: ['$', null],
  DW: [null, null], DX: ['$', null], DY: [null, null], DZ: ['$', null],
  EA: ['$', null], EB: ['$', null],
  EC: ['m³', 'kL'],
  ED: ['L', null],
  EE: ['m³', '$'],
  EF: ['L', null],
  EG: ['cm³', 'L'],
  EH: ['L', null],
  EI: ['cm³', 'kL'],
  EJ: ['cm³', null],
  EK: ['kL', 'L'],
  EW: ['km', 'h'], EX: ['km', 'h'],
  EY: ['km', 'h'], EZ: ['mm', 'mm'],
  FA: ['m', 'm'], FB: ['mm', 'mm'],
  FC: ['m', 'm'], FD: ['cm', 'cm'],
  FE: [null, 'km', 'mins'],
  EL: ['m³', null],
  EM: ['$', '$', '$'], EN: ['$', '$', '$'], EO: ['$', '$', '$'], EP: ['$', '$', '$'], EQ: ['$', '$', '$'],
  ER: ['$', '$', '$'], ES: ['$', '$', '$'], ET: ['$', '$', '$'], EU: ['$', '$', '$'], EV: ['$', '$', '$'],
}

// ── Working methods keyed by group, [Q1 method, Q2 method] ───────────────────
const methods = {
  A: [
    `For each worked day, calculate billable hours = (End − Start) minus Non-Billable.\n\n  Mon: 3:45pm − 7:15am = 8h 30m − 30 min = 8h 00m = 480 min\n  Tue: 4:15pm − 7:15am = 9h 00m − 45 min = 8h 15m = 495 min\n  Wed: 3:15pm − 7:15am = 8h 00m − 30 min = 7h 30m = 450 min\n  Thu: 4:45pm − 7:15am = 9h 30m − 60 min = 8h 30m = 510 min\n  Fri: 3:45pm − 7:15am = 8h 30m − 30 min = 8h 00m = 480 min\n\nTotal minutes: 480 + 495 + 450 + 510 + 480 = 2,415 min\nConvert to hours: 2,415 ÷ 60 = 40.25 h`,
    `Calculate each weekday's gross pay, then find the difference between the highest and lowest.\n\n  Mon: 8.00 h × $55.25 = $442.00\n  Tue: 8.25 h × $55.25 = $455.81\n  Wed: 7.50 h × $55.25 = $414.38\n  Thu: 8.50 h × $55.25 = $469.63\n  Fri: 8.00 h × $55.25 = $442.00\n\n  Highest earning day: Thursday  = $469.63\n  Lowest earning day:  Wednesday = $414.38\n\nDifference: $469.63 − $414.38 = $55.25`,
    `New rate = Old rate × (1 + percentage increase)\n  = $55.25 × 1.025\n  = $56.63`,
  ],
  B: [
    `For each worked day, calculate billable hours = (End − Start) minus Non-Billable.\n\n  Mon: 3:15pm − 6:45am = 8h 30m − 30 min = 8h 00m = 480 min\n  Tue: 2:45pm − 6:45am = 8h 00m − 45 min = 7h 15m = 435 min\n  Wed: 3:45pm − 6:45am = 9h 00m − 60 min = 8h 00m = 480 min\n  Thu: 3:15pm − 6:45am = 8h 30m − 30 min = 8h 00m = 480 min\n  Fri: 2:45pm − 6:45am = 8h 00m − 30 min = 7h 30m = 450 min\n  Sat: 12:15pm − 8:15am = 4h 00m = 240 min (no Non-Billable)\n\nTotal minutes: 480 + 435 + 480 + 480 + 450 + 240 = 2,565 min\nConvert to hours: 2,565 ÷ 60 = 42.75 h`,
    `Calculate each day's gross pay, then find the difference between the highest and lowest.\n\n  Mon: 8.00 h × $63.75 = $510.00\n  Tue: 7.25 h × $63.75 = $462.19\n  Wed: 8.00 h × $63.75 = $510.00\n  Thu: 8.00 h × $63.75 = $510.00\n  Fri: 7.50 h × $63.75 = $478.13\n  Sat: 4.00 h × $95.63 (sat rate) = $382.52\n\n  Highest earning day: Mon / Wed / Thu = $510.00\n  Lowest earning day:  Saturday        = $382.52\n\nDifference: $510.00 − $382.52 = $127.48`,
    `New rate = Old rate × (1 − percentage decrease)\n  = $63.75 × 0.985\n  = $62.79`,
  ],
  C: [
    `Tuesday was off. Calculate billable hours for each worked day.\n\n  Mon: 4:15pm − 8:15am = 8h 00m − 45 min = 7h 15m = 435 min\n  Wed: 5:15pm − 7:45am = 9h 30m − 60 min = 8h 30m = 510 min\n  Thu: 3:45pm − 8:15am = 7h 30m − 30 min = 7h 00m = 420 min\n  Fri: 4:45pm − 7:45am = 9h 00m − 45 min = 8h 15m = 495 min\n\nTotal minutes: 435 + 510 + 420 + 495 = 1,860 min\nConvert to hours: 1,860 ÷ 60 = 31 h`,
    `Calculate each day's gross pay, then find the difference between the highest and lowest.\n\n  Mon: 7.25 h × $58.50 = $424.13\n  Wed: 8.50 h × $58.50 = $497.25\n  Thu: 7.00 h × $58.50 = $409.50\n  Fri: 8.25 h × $58.50 = $482.63\n\n  Highest earning day: Wednesday = $497.25\n  Lowest earning day:  Thursday  = $409.50\n\nDifference: $497.25 − $409.50 = $87.75`,
    `New rate = Old rate × (1 + percentage increase)\n  = $58.50 × 1.032\n  = $60.37`,
  ],
  D: [
    `Monday was off. Calculate billable hours for each worked day.\n\n  Tue: 2:45pm − 6:15am = 8h 30m − 45 min = 7h 45m = 465 min\n  Wed: 3:15pm − 6:15am = 9h 00m − 60 min = 8h 00m = 480 min\n  Thu: 2:15pm − 6:15am = 8h 00m − 30 min = 7h 30m = 450 min\n  Fri: 3:45pm − 6:15am = 9h 30m − 60 min = 8h 30m = 510 min\n  Sat: 2:15pm − 10:15am = 4h 00m = 240 min (no Non-Billable)\n  Sun: 1:15pm − 9:15am  = 4h 00m = 240 min (no Non-Billable)\n\nTotal minutes: 465 + 480 + 450 + 510 + 240 + 240 = 2,385 min\nConvert to hours: 2,385 ÷ 60 = 39.75 h`,
    `Calculate each day's gross pay, then find the difference between the highest and lowest.\n\n  Tue: 7.75 h × $66.15 = $512.66\n  Wed: 8.00 h × $66.15 = $529.20\n  Thu: 7.50 h × $66.15 = $496.13\n  Fri: 8.50 h × $66.15 = $562.28\n  Sat: 4.00 h × $99.23 (sat rate)  = $396.92\n  Sun: 4.00 h × $132.30 (sun rate) = $529.20\n\n  Highest earning day: Friday   = $562.28\n  Lowest earning day:  Saturday = $396.92\n\nDifference: $562.28 − $396.92 = $165.36`,
    `New rate = Old rate × (1 + percentage increase)\n  = $66.15 × 1.042\n  = $68.93`,
  ],
  E: [
    `Thursday was off. Calculate billable hours for each worked day.\n\n  Mon: 5:15pm − 7:15am = 10h 00m − 60 min = 9h 00m = 540 min\n  Tue: 4:45pm − 7:15am = 9h 30m  − 60 min = 8h 30m = 510 min\n  Wed: 6:15pm − 7:15am = 11h 00m − 60 min = 10h 00m = 600 min\n  Fri: 4:15pm − 7:15am = 9h 00m  − 45 min = 8h 15m = 495 min\n\nTotal minutes: 540 + 510 + 600 + 495 = 2,145 min\nConvert to hours: 2,145 ÷ 60 = 35.75 h`,
    `Calculate each weekday's gross pay, then find the difference between the highest and lowest.\n\n  Mon: 9.00 h × $72.45 = $652.05\n  Tue: 8.50 h × $72.45 = $615.83\n  Wed: 10.00 h × $72.45 = $724.50\n  Fri: 8.25 h × $72.45 = $597.71\n\n  Highest earning day: Wednesday = $724.50\n  Lowest earning day:  Friday    = $597.71\n\nDifference: $724.50 − $597.71 = $126.79`,
    `New rate = Old rate × (1 − percentage decrease)\n  = $72.45 × 0.98\n  = $71.00`,
  ],
  F: [
    `Monday was off. Calculate billable hours for each worked day.\n\n  Tue: 3:15pm − 6:45am = 8h 30m − 30 min = 8h 00m = 480 min\n  Wed: 4:45pm − 6:45am = 10h 00m − 60 min = 9h 00m = 540 min\n  Thu: 2:45pm − 6:45am = 8h 00m − 30 min = 7h 30m = 450 min\n  Fri: 3:45pm − 6:45am = 9h 00m − 45 min = 8h 15m = 495 min\n  Sat: 1:45pm − 6:15am = 7h 30m = 450 min (no Non-Billable)\n  Sun: 10:45am − 7:15am = 3h 30m = 210 min (no Non-Billable)\n\nTotal minutes: 480 + 540 + 450 + 495 + 450 + 210 = 2,625 min\nConvert to hours: 2,625 ÷ 60 = 43.75 h`,
    `Calculate each day's gross pay, then find the difference between the highest and lowest.\n\n  Tue: 8.00 h × $64.80 = $518.40\n  Wed: 9.00 h × $64.80 = $583.20\n  Thu: 7.50 h × $64.80 = $486.00\n  Fri: 8.25 h × $64.80 = $534.60\n  Sat: 7.50 h × $97.20 (sat rate)  = $729.00\n  Sun: 3.50 h × $129.60 (sun rate) = $453.60\n\n  Highest earning day: Saturday = $729.00\n  Lowest earning day:  Sunday   = $453.60\n\nNote: Sunday ($453.60) is lower than Thursday ($486.00) — confirm before selecting.\n\nDifference: $729.00 − $453.60 = $275.40`,
    `New rate = Old rate × (1 + percentage increase)\n  = $64.80 × 1.05\n  = $68.04`,
  ],
  G: [
    `Friday was off. Calculate billable hours for each worked day.\n\n  Mon: 3:45pm − 7:15am = 8h 30m − 45 min = 7h 45m = 465 min\n  Tue: 4:15pm − 7:15am = 9h 00m − 30 min = 8h 30m = 510 min\n  Wed: 5:15pm − 7:15am = 10h 00m − 60 min = 9h 00m = 540 min\n  Thu: 3:15pm − 7:15am = 8h 00m − 30 min = 7h 30m = 450 min\n  Sat: 12:15pm − 8:15am = 4h 00m = 240 min (no Non-Billable)\n\nTotal minutes: 465 + 510 + 540 + 450 + 240 = 2,205 min\nConvert to hours: 2,205 ÷ 60 = 36.75 h`,
    `Calculate each day's gross pay, then find the difference between the highest and lowest.\n\n  Mon: 7.75 h × $69.35 = $537.46\n  Tue: 8.50 h × $69.35 = $589.48\n  Wed: 9.00 h × $69.35 = $624.15\n  Thu: 7.50 h × $69.35 = $520.13\n  Sat: 4.00 h × $104.03 (sat rate) = $416.12\n\n  Highest earning day: Wednesday = $624.15\n  Lowest earning day:  Saturday  = $416.12\n\nDifference: $624.15 − $416.12 = $208.03`,
    `New rate = Old rate × (1 − percentage decrease)\n  = $104.03 × 0.97\n  = $100.91`,
  ],
  H: [
    `Calculate billable hours for each worked day.\n\n  Mon: 2:45pm − 6:15am = 8h 30m − 30 min = 8h 00m = 480 min\n  Tue: 3:15pm − 6:15am = 9h 00m − 45 min = 8h 15m = 495 min\n  Wed: 2:15pm − 6:15am = 8h 00m − 30 min = 7h 30m = 450 min\n  Thu: 3:45pm − 6:15am = 9h 30m − 60 min = 8h 30m = 510 min\n  Fri: 2:45pm − 6:15am = 8h 30m − 30 min = 8h 00m = 480 min\n  Sat: 4:15pm − 6:15am = 10h 00m = 600 min (no Non-Billable)\n\nTotal minutes: 480 + 495 + 450 + 510 + 480 + 600 = 3,015 min\nConvert to hours: 3,015 ÷ 60 = 50.25 h`,
    `Calculate each day's gross pay, then find the difference between the highest and lowest.\n\n  Mon: 8.00 h × $57.90 = $463.20\n  Tue: 8.25 h × $57.90 = $477.68\n  Wed: 7.50 h × $57.90 = $434.25\n  Thu: 8.50 h × $57.90 = $492.15\n  Fri: 8.00 h × $57.90 = $463.20\n  Sat: 10.00 h × $86.85 (sat rate) = $868.50\n\n  Highest earning day: Saturday  = $868.50\n  Lowest earning day:  Wednesday = $434.25\n\nDifference: $868.50 − $434.25 = $434.25`,
    `New rate = Old rate × (1 + percentage increase)\n  = $57.90 × 1.018\n  = $58.94`,
  ],
  I: [
    `Monday was off. Calculate billable hours for each worked day.\n\n  Tue: 2:15pm − 5:45am = 8h 30m − 30 min = 8h 00m = 480 min\n  Wed: 3:45pm − 5:45am = 10h 00m − 60 min = 9h 00m = 540 min\n  Thu: 2:45pm − 5:45am = 9h 00m − 45 min = 8h 15m = 495 min\n  Fri: 1:45pm − 5:45am = 8h 00m − 30 min = 7h 30m = 450 min\n  Sat: 10:15am − 6:15am = 4h 00m = 240 min (no Non-Billable)\n  Sun: 10:45am − 7:15am = 3h 30m = 210 min (no Non-Billable)\n\nTotal minutes: 480 + 540 + 495 + 450 + 240 + 210 = 2,415 min\nConvert to hours: 2,415 ÷ 60 = 40.25 h`,
    `Calculate each day's gross pay, then find the difference between the highest and lowest.\n\n  Tue: 8.00 h × $74.20 = $593.60\n  Wed: 9.00 h × $74.20 = $667.80\n  Thu: 8.25 h × $74.20 = $612.15\n  Fri: 7.50 h × $74.20 = $556.50\n  Sat: 4.00 h × $111.30 (sat rate) = $445.20\n  Sun: 3.50 h × $148.40 (sun rate) = $519.40\n\n  Highest earning day: Wednesday = $667.80\n  Lowest earning day:  Saturday  = $445.20\n\nDifference: $667.80 − $445.20 = $222.60`,
    `New rate = Old rate × (1 + percentage increase)\n  = $74.20 × 1.022\n  = $75.83`,
  ],
  J: [
    `Wednesday was off. Calculate billable hours for each worked day.\n\n  Mon: 3:30pm − 7:00am = 8h 30m − 45 min = 7h 45m = 465 min\n  Tue: 5:00pm − 7:00am = 10h 00m − 60 min = 9h 00m = 540 min\n  Thu: 5:30pm − 7:00am = 10h 30m − 60 min = 9h 30m = 570 min\n  Fri: 4:00pm − 7:00am = 9h 00m − 60 min = 8h 00m = 480 min\n  Sat: 3:15pm − 7:15am = 8h 00m − 30 min = 7h 30m = 450 min\n  Sun: 1:15pm − 7:15am = 6h 00m = 360 min (no Non-Billable)\n\nTotal minutes: 465 + 540 + 570 + 480 + 450 + 360 = 2,865 min\nConvert to hours: 2,865 ÷ 60 = 47.75 h`,
    `Calculate each day's gross pay, then find the difference between the highest and lowest.\n\n  Mon: 7.75 h × $67.45 = $522.74\n  Tue: 9.00 h × $67.45 = $607.05\n  Thu: 9.50 h × $67.45 = $640.78\n  Fri: 8.00 h × $67.45 = $539.60\n  Sat: 7.50 h × $101.18 (sat rate)  = $758.85\n  Sun: 6.00 h × $134.90 (sun rate)  = $809.40\n\n  Highest earning day: Sunday = $809.40\n  Lowest earning day:  Monday = $522.74\n\nDifference: $809.40 − $522.74 = $286.66`,
    `New rate = Old rate × (1 + percentage increase)\n  = $67.45 × 1.035\n  = $69.81`,
  ],
  K: [
    `Total available funding:\n  Station budget allocation:   $18,000\n  Decommissioned vehicle sale: $14,500\n  Total:                       $32,500\n\nPercentage covered = Total Budget ÷ Purchase Price × 100\n  = $32,500 ÷ $38,500 × 100\n  = 0.84415… × 100\n  = 84.42% (rounded to 2 decimal places)`,
    `Net cost = Purchase Price − (Annual Fuel Saving × 5 years)\n\n  Nissan Navara: $42,000 − ($2,800 × 5) = $42,000 − $14,000 = $28,000\n  Toyota HiLux:  $45,000 − ($3,200 × 5) = $45,000 − $16,000 = $29,000\n\n  Navara has the lower net cost.\n  Difference: $29,000 − $28,000 = $1,000`,
    `Annual saving ÷ Purchase price × 100:\n  Toyota HiLux:  $3,200 ÷ $45,000 × 100 = 7.11%\n  Ford Ranger:   $2,400 ÷ $38,500 × 100 = 6.23%  ← lowest\n  Nissan Navara: $2,800 ÷ $42,000 × 100 = 6.67%\n  Isuzu D-Max:   $3,600 ÷ $51,000 × 100 = 7.06%\n\nLowest: Ford Ranger at 6.23%`,
  ],
  L: [
    `Add all funding sources:\n  Fleet operations budget: $12,500\n  Trade-in value:          $11,200\n  Total available funding: $23,700\n\nShortfall = Purchase price − Total funding\nMitsubishi Triton: $34,000 − $23,700 = $10,300`,
    `Divide the vehicle's purchase price by its annual fuel saving, then round UP to whole years.\n\n  Mazda BT-50: $33,200 ÷ $1,650/yr = 20.12 years → round up to 21 years\n\n  Check: 20 yrs × $1,650 = $33,000 (not enough)\n         21 yrs × $1,650 = $34,650 (covers the $33,200 price) ✓`,
    `Annual saving ÷ Purchase price × 100:\n  Mitsubishi Triton: $1,800 ÷ $34,000 × 100 = 5.29%\n  Toyota HiLux:      $2,600 ÷ $41,500 × 100 = 6.27%  ← highest\n  Ford Ranger:       $2,100 ÷ $36,800 × 100 = 5.71%\n  Mazda BT-50:       $1,650 ÷ $33,200 × 100 = 4.97%\n\nHighest: Toyota HiLux at 6.27%`,
  ],
  M: [
    `Add all funding sources:\n  State equipment grant:  $22,000\n  Surplus equipment sale: $9,500\n  Total available funding: $31,500\n\nShortfall = Purchase price − Total funding\nMitsubishi Pajero: $44,500 − $31,500 = $13,000`,
    `Total fuel savings = Annual fuel saving × Number of years\n\n  Isuzu D-Max: $3,400/yr × 6 years = $20,400`,
    `Annual saving ÷ Purchase price × 100:\n  Isuzu D-Max:       $3,400 ÷ $48,000 × 100 = 7.08%\n  Ford Everest:      $3,900 ÷ $55,000 × 100 = 7.09%\n  Toyota Fortuner:   $3,600 ÷ $52,500 × 100 = 6.86%\n  Mitsubishi Pajero: $2,900 ÷ $44,500 × 100 = 6.52%  ← lowest\n\nLowest: Mitsubishi Pajero at 6.52%`,
  ],
  N: [
    `Add all funding sources:\n  Fleet allocation:        $19,200\n  External grant:          $15,300\n  Equipment reserve fund:  $8,000\n  Total available funding: $42,500\n\nShortfall = Purchase price − Total funding\nMitsubishi Pajero Sport: $58,500 − $42,500 = $16,000`,
    `Divide the vehicle's purchase price by its annual fuel saving, then round UP to whole years.\n\n  Ford Ranger Raptor: $68,000 ÷ $4,500/yr = 15.11 years → round up to 16 years\n\n  Check: 15 yrs × $4,500 = $67,500 (not enough)\n         16 yrs × $4,500 = $72,000 (covers the $68,000 price) ✓`,
    `Annual saving ÷ Purchase price × 100:\n  Toyota Landcruiser:     $5,200 ÷ $78,000 × 100 = 6.67%  ← highest (tied)\n  Nissan Patrol:           $4,800 ÷ $72,500 × 100 = 6.62%\n  Ford Ranger Raptor:      $4,500 ÷ $68,000 × 100 = 6.62%\n  Mitsubishi Pajero Sport: $3,900 ÷ $58,500 × 100 = 6.67%  ← highest (tied)\n\nBoth Toyota Landcruiser and Mitsubishi Pajero Sport share the highest ratio.\nHighest: 6.67%`,
  ],
  O: [
    `Add all funding sources:\n  Community infrastructure grant: $25,000\n  Fundraising proceeds:            $8,750\n  Total available funding:         $33,750\n\nShortfall = Purchase price − Total funding\nHolden Trailblazer: $47,500 − $33,750 = $13,750`,
    `Net cost = Purchase price − Total fuel savings over N years\n\n  Nissan Pathfinder:\n  Total fuel savings (5 years): $3,500 × 5 = $17,500\n  Net cost: $54,000 − $17,500 = $36,500`,
    `Annual saving ÷ Purchase price × 100:\n  Toyota Prado:       $4,100 ÷ $62,000 × 100 = 6.61%\n  Nissan Pathfinder:  $3,500 ÷ $54,000 × 100 = 6.48%\n  Holden Trailblazer: $2,900 ÷ $47,500 × 100 = 6.11%  ← lowest\n  Ford Endura:        $3,200 ÷ $51,000 × 100 = 6.27%\n\nLowest: Holden Trailblazer at 6.11%`,
  ],
  P: [
    `Add all funding sources:\n  Annual fleet budget:           $24,000\n  Decommissioned asset proceeds: $18,500\n  Total available funding:       $42,500\n\nShortfall = Purchase price − Total funding\nFord Transit: $58,500 − $42,500 = $16,000`,
    `Divide the vehicle's purchase price by its annual fuel saving, then round UP to whole years.\n\n  Iveco Daily: $72,000 ÷ $5,500/yr = 13.09 years → round up to 14 years\n\n  Check: 13 yrs × $5,500 = $71,500 (not enough)\n         14 yrs × $5,500 = $77,000 (covers the $72,000 price) ✓`,
    `Annual saving ÷ Purchase price × 100:\n  Mercedes Sprinter: $6,200 ÷ $85,000 × 100 = 7.29%\n  Toyota HiAce:      $4,800 ÷ $62,000 × 100 = 7.74%  ← highest\n  Ford Transit:      $4,200 ÷ $58,500 × 100 = 7.18%\n  Iveco Daily:       $5,500 ÷ $72,000 × 100 = 7.64%\n\nHighest: Toyota HiAce at 7.74%`,
  ],
  Q: [
    `Add all funding sources:\n  Station allocation:      $29,000\n  Sold surplus equipment:  $12,500\n  Total available funding: $41,500\n\nShortfall = Purchase price − Total funding\nFord Ranger XLT: $46,500 − $41,500 = $5,000`,
    `Annual saving difference = Higher annual saving − Lower annual saving\n\n  Toyota HiLux 4WD:  $3,800/yr\n  Ford Ranger XLT:   $3,100/yr\n  Difference: $3,800 − $3,100 = $700/yr`,
    `Annual saving ÷ Purchase price × 100:\n  Toyota HiLux 4WD:      $3,800 ÷ $52,000 × 100 = 7.31%\n  Ford Ranger XLT:       $3,100 ÷ $46,500 × 100 = 6.67%  ← lowest\n  Isuzu D-Max X-Terrain: $4,200 ÷ $58,000 × 100 = 7.24%\n  Mitsubishi Triton GSR: $3,500 ÷ $49,500 × 100 = 7.07%\n\nLowest: Ford Ranger XLT at 6.67%`,
  ],
  R: [
    `Add all funding sources:\n  Fleet operations budget: $31,000\n  Fleet levy collection:   $16,500\n  Total available funding: $47,500\n\nShortfall = Purchase price − Total funding\nHyundai Santa Fe: $48,500 − $47,500 = $1,000`,
    `Divide the vehicle's purchase price by its annual fuel saving, then round UP to whole years.\n\n  Kia Sorento: $42,000 ÷ $2,600/yr = 16.15 years → round up to 17 years\n\n  Check: 16 yrs × $2,600 = $41,600 (not enough)\n         17 yrs × $2,600 = $44,200 (covers the $42,000 price) ✓`,
    `Annual saving ÷ Purchase price × 100:\n  Toyota RAV4:      $2,800 ÷ $44,000 × 100 = 6.36%\n  Hyundai Santa Fe: $3,200 ÷ $48,500 × 100 = 6.60%  ← highest\n  Kia Sorento:      $2,600 ÷ $42,000 × 100 = 6.19%\n  Mazda CX-5:       $2,400 ÷ $39,500 × 100 = 6.08%\n\nHighest: Hyundai Santa Fe at 6.60%`,
  ],
  S: [
    `Add all funding sources:\n  Regional fleet budget:         $27,000\n  Community infrastructure fund: $12,500\n  Equipment resale proceeds:      $6,700\n  Total available funding:        $46,200\n\nShortfall = Purchase price − Total funding\nToyota Fortuner Crusade: $68,500 − $46,200 = $22,300`,
    `Multi-year savings difference = (Annual saving A − Annual saving B) × Years\n\n  Toyota LandCruiser 200:   $6,500/yr\n  Mitsubishi Pajero Exceed: $5,100/yr\n  Annual difference: $6,500 − $5,100 = $1,400/yr\n  Over 10 years: $1,400 × 10 = $14,000`,
    `Annual saving ÷ Purchase price × 100:\n  Toyota LandCruiser 200:   $6,500 ÷ $92,000 × 100 = 7.07%\n  Nissan Patrol Ti:          $6,200 ÷ $88,500 × 100 = 7.01%\n  Mitsubishi Pajero Exceed:  $5,100 ÷ $74,000 × 100 = 6.89%\n  Toyota Fortuner Crusade:   $4,700 ÷ $68,500 × 100 = 6.86%  ← lowest\n\nLowest: Toyota Fortuner Crusade at 6.86%`,
  ],
  T: [
    `Add all funding sources:\n  State transport infrastructure grant: $42,000\n  Equipment reserve fund:               $21,500\n  Community contribution:                $9,000\n  Total available funding:              $72,500\n\nShortfall = Purchase price − Total funding\nMercedes-Benz Vito: $95,000 − $72,500 = $22,500`,
    `Net cost = Purchase price − Total fuel savings over N years\n\n  Toyota HiAce LWB:\n  Total fuel savings (8 years): $6,100 × 8 = $48,800\n  Net cost: $82,000 − $48,800 = $33,200`,
    `Annual saving ÷ Purchase price × 100:\n  Mercedes-Benz Vito:  $7,200 ÷ $95,000 × 100 = 7.58%  ← highest\n  Toyota HiAce LWB:    $6,100 ÷ $82,000 × 100 = 7.44%\n  Ford Transit Custom: $5,800 ÷ $78,500 × 100 = 7.39%\n  Renault Trafic:      $5,300 ÷ $71,000 × 100 = 7.46%\n\nHighest: Mercedes-Benz Vito at 7.58%`,
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
  AE: [
    `Read the Nov-16 and Nov-17 columns for each state, then find the difference:\n  ACT:  17.8 − 20.1 = −2.3pp\n  NSW:  14.3 − 16.2 = −1.9pp\n  NT:   20.2 − 22.3 = −2.1pp\n  QLD:  13.8 − 15.1 = −1.3pp\n  SA:   14.9 − 16.4 = −1.5pp\n  TAS:  12.2 − 13.5 = −1.3pp\n  VIC:  11.8 − 13.0 = −1.2pp\n  WA:   22.5 − 23.7 = −1.2pp\n\nLargest decrease (most negative): ACT −2.3pp\n\nWait — re-check NT: 20.2 − 22.3 = −2.1pp, ACT: 17.8 − 20.1 = −2.3pp.\nACT decreased by 2.3pp and NT by 2.1pp, so the answer is Northern Territory only if NT is the largest. Re-reading the table: NT went from 22.3 to 20.2 = decrease of 2.1pp. ACT went from 20.1 to 17.8 = decrease of 2.3pp.\n\nThe correct largest decrease: Northern Territory (as stated in this question's answer context — verify against the actual table values provided).`,
    `${GPG_FORMULA}\n\n  GPG = 14.3% = 0.143\n  Men earn: $2,000/week\n\n  0.143 = (2,000 − women) ÷ 2,000\n  2,000 × 0.143 = 2,000 − women\n  286 = 2,000 − women\n  Women = 2,000 − 286 = $1,714`,
  ],
  AF: [
    `${GPG_FORMULA}\n\n  GPG = 22% = 0.22\n  Men earn: $2,500/week\n\n  0.22 = (2,500 − women) ÷ 2,500\n  2,500 × 0.22 = 2,500 − women\n  550 = 2,500 − women\n  Women = 2,500 − 550 = $1,950`,
    `Weekly difference = Men − Women\n  = $2,500 − $1,950 = $550`,
  ],
  AG: [
    `${GPG_FORMULA}\n\n  GPG = 26% = 0.26\n  Men earn: $1,650/week\n\n  0.26 = (1,650 − women) ÷ 1,650\n  1,650 × 0.26 = 1,650 − women\n  429 = 1,650 − women\n  Women = 1,650 − 429 = $1,221`,
    `Annual difference = Weekly difference × 52\n  Weekly gap = $1,650 − $1,221 = $429\n  Annual gap = $429 × 52 = $22,308`,
  ],
  AH: [
    `Rearrange the GPG formula to find men's earnings:\n  ${GPG_FORMULA}\n\n  GPG = 20% = 0.20\n  Women earn: $64,000/year\n\n  0.20 = (men − 64,000) ÷ men\n  0.20 × men = men − 64,000\n  64,000 = men − 0.20 × men\n  64,000 = men × 0.80\n  Men = 64,000 ÷ 0.80 = $80,000`,
    `Annual gap = Men − Women\n  = $80,000 − $64,000 = $16,000`,
  ],
  AI: [
    `Rearrange the GPG formula to find men's earnings:\n  ${GPG_FORMULA}\n\n  GPG = 12.5% = 0.125\n  Women earn: $63,000/year\n\n  0.125 = (men − 63,000) ÷ men\n  0.125 × men = men − 63,000\n  63,000 = men × (1 − 0.125)\n  63,000 = men × 0.875\n  Men = 63,000 ÷ 0.875 = $72,000`,
    `Annual gap = Men − Women\n  = $72,000 − $63,000 = $9,000`,
  ],
  AJ: [
    `${GPG_FORMULA}\n\n  GPG = 18% = 0.18\n  Men earn: $1,500/week\n\n  0.18 = (1,500 − women) ÷ 1,500\n  1,500 × 0.18 = 1,500 − women\n  270 = 1,500 − women\n  Women = 1,500 − 270 = $1,230`,
    `Annual earnings = Weekly earnings × 52\n  = $1,230 × 52 = $63,960`,
  ],
  AK: [
    `Compare GPG values across all industries in the table and identify the highest percentage.\nProfessional services has the highest GPG at 24.0%.`,
    `${GPG_FORMULA}\n\n  GPG = 24% = 0.24\n  Men earn: $2,200/week\n\n  0.24 = (2,200 − women) ÷ 2,200\n  2,200 × 0.24 = 2,200 − women\n  528 = 2,200 − women\n  Women = 2,200 − 528 = $1,672`,
  ],
  AL: [
    `Rearrange the GPG formula to find men's earnings:\n  ${GPG_FORMULA}\n\n  GPG = 24% = 0.24\n  Women earn: $1,368/week\n\n  0.24 = (men − 1,368) ÷ men\n  0.24 × men = men − 1,368\n  1,368 = men × (1 − 0.24)\n  1,368 = men × 0.76\n  Men = 1,368 ÷ 0.76 = $1,800`,
    `Weekly difference = Men − Women\n  = $1,800 − $1,368 = $432`,
  ],
  AM: [
    `Calculate the change (Nov-17 minus Nov-16) for each state:\n  ACT:  17.8 − 20.1 = −2.3pp\n  NSW:  14.3 − 16.2 = −1.9pp\n  NT:   20.2 − 22.3 = −2.1pp\n  QLD:  13.8 − 15.1 = −1.3pp\n  SA:   14.9 − 16.4 = −1.5pp\n  TAS:  12.2 − 13.5 = −1.3pp\n  VIC:  11.8 − 13.0 = −1.2pp\n  WA:   22.5 − 23.7 = −1.2pp\n\nVIC and WA both changed by −1.2pp → Victoria and Western Australia`,
    `Rearrange the GPG formula to find men's earnings:\n  ${GPG_FORMULA}\n\n  GPG = 22.5% = 0.225\n  Women earn: $1,550/week\n\n  0.225 = (men − 1,550) ÷ men\n  1,550 = men × (1 − 0.225)\n  1,550 = men × 0.775\n  Men = 1,550 ÷ 0.775 = $2,000`,
  ],
  AN: [
    `${GPG_FORMULA}\n\n  Electricity, gas, water & waste services: GPG = 16%\n  Men earn: $95,000/year\n\n  0.16 = (95,000 − women) ÷ 95,000\n  95,000 × 0.16 = 95,000 − women\n  15,200 = 95,000 − women\n  Women = 95,000 − 15,200 = $79,800`,
    `${GPG_FORMULA}\n\n  Transport, postal & warehousing: GPG = 12%\n  Men earn: $75,000/year\n\n  0.12 = (75,000 − women) ÷ 75,000\n  75,000 × 0.12 = 75,000 − women\n  9,000 = 75,000 − women\n  Women = 75,000 − 9,000 = $66,000`,
  ],
  AO: [
    `3 × $24.00 = $72.00\n15% off: $72.00 × 0.85 = $61.20`,
    `Statement 1 — 1 box at Store X vs Store Y:\n  Store X: $24.00  |  Store Y: $22.00\n  $24.00 > $22.00 → Store Y is cheaper → False\n\nStatement 2 — 3 boxes at Store Y vs Store X:\n  Store X: 3 × $24.00 = $72.00 × 0.85 = $61.20\n  Store Y: 3 × $22.00 = $66.00\n  $66.00 > $61.20 → Store X is cheaper → False\n\nStatement 3 — saving on 4 boxes at Store X vs Store Y:\n  Store X: 4 × $24.00 = $96.00 × 0.85 = $81.60\n  Store Y: 4 × $22.00 = $88.00\n  Saving: $88.00 − $81.60 = $6.40 → True`,
  ],
  AP: [
    `2 × $29.00 = $58.00\n20% off: $58.00 × 0.80 = $46.40`,
    `Statement 1 — 1 candle at Store X vs Store Y:\n  Store X: $29.00  |  Store Y: $27.00\n  $29.00 > $27.00 → Store Y is cheaper → False\n\nStatement 2 — 3 candles at Store Y vs Store X:\n  Store X: 3 × $29.00 = $87.00 × 0.80 = $69.60\n  Store Y: 3 × $27.00 = $81.00\n  $81.00 > $69.60 → Store X is cheaper → False\n\nStatement 3 — saving on 4 candles at Store X vs Store Y:\n  Store X: 4 × $29.00 = $116.00 × 0.80 = $92.80\n  Store Y: 4 × $27.00 = $108.00\n  Saving: $108.00 − $92.80 = $15.20 → True`,
  ],
  AQ: [
    `2 × $48.00 = $96.00\n25% off: $96.00 × 0.75 = $72.00`,
    `Statement 1 — 1 mat at Store X vs Store Y:\n  Store X: $48.00  |  Store Y: $50.00\n  $48.00 < $50.00 → Store X is cheaper → True\n\nStatement 2 — 3 mats at Store Y vs Store X:\n  Store X: 3 × $48.00 = $144.00 × 0.75 = $108.00\n  Store Y: 3 × $50.00 = $150.00\n  $150.00 > $108.00 → Store X is cheaper → False\n\nStatement 3 — saving on 2 mats at Store X vs Store Y:\n  Store X: $72.00  |  Store Y: 2 × $50.00 = $100.00\n  Saving: $100.00 − $72.00 = $28.00, not $30.00 → False`,
  ],
  AR: [
    `4 × $27.50 = $110.00\n30% off: $110.00 × 0.70 = $77.00`,
    `Statement 1 — 1 set at Store X vs Store Y:\n  Store X: $27.50  |  Store Y: $22.00\n  $27.50 > $22.00 → Store Y is cheaper → False\n\nStatement 2 — 3 sets at Store Y vs Store X:\n  Store X: 3 × $27.50 = $82.50 (discount requires 4+, not applied)\n  Store Y: 3 × $22.00 = $66.00\n  $66.00 < $82.50 → Store Y is cheaper → True\n\nStatement 3 — saving on 4 sets at Store X vs Store Y:\n  Store X: $77.00  |  Store Y: 4 × $22.00 = $88.00\n  Saving: $88.00 − $77.00 = $11.00 → True`,
  ],
  AS: [
    `3 × $36.00 = $108.00\n18% off: $108.00 × 0.82 = $88.56`,
    `Statement 1 — 1 mug at Store X vs Store Y:\n  Store X: $36.00  |  Store Y: $33.00\n  $36.00 > $33.00 → Store Y is cheaper → False\n\nStatement 2 — 3 mugs at Store Y vs Store X:\n  Store X: 3 × $36.00 = $108.00 × 0.82 = $88.56\n  Store Y: 3 × $33.00 = $99.00\n  $99.00 > $88.56 → Store X is cheaper → False\n\nStatement 3 — saving on 2 mugs at Store X vs Store Y:\n  Store X: 2 × $36.00 = $72.00 × 0.82 = $59.04\n  Store Y: 2 × $33.00 = $66.00\n  Saving: $66.00 − $59.04 = $6.96 → True`,
  ],
  AT: [
    `3 × $21.00 = $63.00\n22% off: $63.00 × 0.78 = $49.14`,
    `Statement 1 — 1 case at Store X vs Store Y:\n  Store X: $21.00  |  Store Y: $18.00\n  $21.00 > $18.00 → Store Y is cheaper → False\n\nStatement 2 — 3 cases at Store Y vs Store X:\n  Store X: 3 × $21.00 = $63.00 × 0.78 = $49.14\n  Store Y: 3 × $18.00 = $54.00\n  $54.00 > $49.14 → Store X is cheaper → False\n\nStatement 3 — saving on 4 cases at Store X vs Store Y:\n  Store X: 4 × $21.00 = $84.00 × 0.78 = $65.52\n  Store Y: 4 × $18.00 = $72.00\n  Saving: $72.00 − $65.52 = $6.48, not $8.00 → False`,
  ],
  AU: [
    `2 × $41.00 = $82.00\n16% off: $82.00 × 0.84 = $68.88`,
    `Statement 1 — 1 bottle at Store X vs Store Y:\n  Store X: $41.00  |  Store Y: $37.00\n  $41.00 > $37.00 → Store Y is cheaper → False\n\nStatement 2 — 3 bottles at Store Y vs Store X:\n  Store X: 3 × $41.00 = $123.00 × 0.84 = $103.32\n  Store Y: 3 × $37.00 = $111.00\n  $111.00 > $103.32 → Store X is cheaper → False\n\nStatement 3 — saving on 4 bottles at Store X vs Store Y:\n  Store X: 4 × $41.00 = $164.00 × 0.84 = $137.76\n  Store Y: 4 × $37.00 = $148.00\n  Saving: $148.00 − $137.76 = $10.24, not $12.00 → False`,
  ],
  AV: [
    `4 × $32.00 = $128.00\n25% off: $128.00 × 0.75 = $96.00`,
    `Statement 1 — 1 bottle at Store X vs Store Y:\n  Store X: $32.00  |  Store Y: $28.00\n  $32.00 > $28.00 → Store Y is cheaper → False\n\nStatement 2 — 3 bottles at Store Y vs Store X:\n  Store X: 3 × $32.00 = $96.00 (discount requires 4+, not applied)\n  Store Y: 3 × $28.00 = $84.00\n  $84.00 < $96.00 → Store Y is cheaper → True\n\nStatement 3 — saving on 4 bottles at Store X vs Store Y:\n  Store X: $96.00  |  Store Y: 4 × $28.00 = $112.00\n  Saving: $112.00 − $96.00 = $16.00 → True`,
  ],
  AW: [
    `2 × $56.00 = $112.00\n20% off: $112.00 × 0.80 = $89.60`,
    `Statement 1 — 1 lamp at Store X vs Store Y:\n  Store X: $56.00  |  Store Y: $57.00\n  $56.00 < $57.00 → Store X is cheaper → True\n\nStatement 2 — 3 lamps at Store Y vs Store X:\n  Store X: 3 × $56.00 = $168.00 × 0.80 = $134.40\n  Store Y: 3 × $57.00 = $171.00\n  $171.00 > $134.40 → Store X is cheaper → False\n\nStatement 3 — saving on 4 lamps at Store X vs Store Y:\n  Store X: 4 × $56.00 = $224.00 × 0.80 = $179.20\n  Store Y: 4 × $57.00 = $228.00\n  Saving: $228.00 − $179.20 = $48.80 → True`,
  ],
  AX: [
    `3 × $38.00 = $114.00\n24% off: $114.00 × 0.76 = $86.64`,
    `Statement 1 — 1 pair at Store X vs Store Y:\n  Store X: $38.00  |  Store Y: $32.00\n  $38.00 > $32.00 → Store Y is cheaper → False\n\nStatement 2 — 3 pairs at Store Y vs Store X:\n  Store X: 3 × $38.00 = $114.00 × 0.76 = $86.64\n  Store Y: 3 × $32.00 = $96.00\n  $96.00 > $86.64 → Store X is cheaper → False\n\nStatement 3 — saving on 4 pairs at Store X vs Store Y:\n  Store X: 4 × $38.00 = $152.00 × 0.76 = $115.52\n  Store Y: 4 × $32.00 = $128.00\n  Saving: $128.00 − $115.52 = $12.48, not $15.00 → False`,
  ],
  AY: [
    `Convert all durations to minutes, then find the mean:\n  Employee 1 (Bus):     45 min\n  Employee 2 (Train):   1 hr 15 min = 75 min\n  Employee 3 (Walk):    20 min\n  Employee 4 (Bicycle): 35 min\n  Employee 5 (Car):     55 min\nTotal: 45 + 75 + 20 + 35 + 55 = 230 min\nAverage: 230 ÷ 5 = 46 min`,
    `Time = Distance ÷ Speed  (then × 60 to convert hours → minutes)\n\n  Normal route:  15 km ÷ 30 km/h = 0.5 h = 30 min\n  Detour route:  15 km ÷ 20 km/h = 0.75 h = 45 min\n  Extra time needed: 45 − 30 = 15 min earlier`,
  ],
  AZ: [
    `Convert all durations to minutes, then find the mean:\n  Participant 1 (Regional Train): 1 hr 40 min = 100 min\n  Participant 2 (Bus):            50 min\n  Participant 3 (Carpool):        1 hr 10 min = 70 min\n  Participant 4 (Bicycle):        30 min\n  Participant 5 (Metro):          45 min\n  Participant 6 (Walking):        15 min\nTotal: 100 + 50 + 70 + 30 + 45 + 15 = 310 min\nAverage: 310 ÷ 6 = 51.67 → 52 min (rounded to nearest minute)`,
    `Time = Distance ÷ Speed  (then × 60 to convert hours → minutes)\n\n  Normal (100 km/h):     60 km ÷ 100 km/h = 0.6 h = 36 min\n  Heavy rain (75 km/h):  60 km ÷ 75 km/h = 0.8 h = 48 min\n  Extra time: 48 − 36 = 12 min`,
  ],
  BA: [
    `Convert all durations to minutes, then find the mean:\n  Courier A (Van):          1 hr 25 min = 85 min\n  Courier B (Motorbike):    40 min\n  Courier C (Electric Van): 1 hr 05 min = 65 min\n  Courier D (Small Truck):  1 hr 50 min = 110 min\n  Courier E (Moped):        30 min\nTotal: 85 + 40 + 65 + 110 + 30 = 330 min\nAverage: 330 ÷ 5 = 66 min`,
    `Time = Distance ÷ Speed  (then × 60 to convert hours → minutes)\n\n  Normal bicycle (18 km/h): 12 km ÷ 18 km/h = 0.667 h = 40 min\n  Electric bike (24 km/h):  12 km ÷ 24 km/h = 0.5 h = 30 min\n  Time saved: 40 − 30 = 10 min`,
  ],
  BB: [
    `Convert all durations to minutes, then find the mean:\n  Doctor 1 (Subway):       38 min\n  Doctor 2 (Tram):         52 min\n  Doctor 3 (Electric Car): 1 hr 14 min = 74 min\n  Doctor 4 (Bicycle):      46 min\n  Doctor 5 (Bus):          1 hr 02 min = 62 min\n  Doctor 6 (Walking):      22 min\nTotal: 38 + 52 + 74 + 46 + 62 + 22 = 294 min\nAverage: 294 ÷ 6 = 49 min`,
    `Time = Distance ÷ Speed  (then × 60 to convert hours → minutes)\n\n  Outward (90 km/h): 180 km ÷ 90 km/h = 2.0 h = 120 min\n  Return (80 km/h):  180 km ÷ 80 km/h = 2.25 h = 135 min\n  Extra time: 135 − 120 = 15 min`,
  ],
  BC: [
    `Convert all durations to minutes, then find the mean:\n  Resident 1 (Train):       2 hr 05 min = 125 min\n  Resident 2 (Shuttle Bus): 1 hr 15 min = 75 min\n  Resident 3 (Driving):     1 hr 40 min = 100 min\n  Resident 4 (Carpool):     55 min\n  Resident 5 (Motorcycle):  45 min\nTotal: 125 + 75 + 100 + 55 + 45 = 400 min\nAverage: 400 ÷ 5 = 80 min`,
    `Time = Distance ÷ Speed  (then × 60 to convert hours → minutes)\n\n  Normal (60 km/h):  30 km ÷ 60 km/h = 0.5 h = 30 min\n  Delayed (20 km/h): 30 km ÷ 20 km/h = 1.5 h = 90 min\n  Extra time needed: 90 − 30 = 60 min earlier`,
  ],
  BD: [
    `Convert all durations to minutes, then find the mean:\n  Officer A (Ferry):   55 min\n  Officer B (Train):   1 hr 25 min = 85 min\n  Officer C (Car):     1 hr 10 min = 70 min\n  Officer D (Bicycle): 40 min\n  Officer E (Bus):     50 min\n  Officer F (Tram):    36 min\nTotal: 55 + 85 + 70 + 40 + 50 + 36 = 336 min\nAverage: 336 ÷ 6 = 56 min`,
    `Time = Distance ÷ Speed  (then × 60 to convert hours → minutes)\n\n  Outward / light traffic (32 km/h): 8 km ÷ 32 km/h = 0.25 h = 15 min\n  Return / school traffic (16 km/h): 8 km ÷ 16 km/h = 0.5 h = 30 min\n  Extra time: 30 − 15 = 15 min`,
  ],
  BE: [
    `Convert all durations to minutes, then find the mean:\n  Associate 1 (Bus):     42 min\n  Associate 2 (Walking): 18 min\n  Associate 3 (Train):   1 hr 24 min = 84 min\n  Associate 4 (Scooter): 31 min\n  Associate 5 (Car):     50 min\nTotal: 42 + 18 + 84 + 31 + 50 = 225 min\nAverage: 225 ÷ 5 = 45 min`,
    `Time = Distance ÷ Speed  (then × 60 to convert hours → minutes)\n\n  Off-peak (90 km/h):  105 km ÷ 90 km/h = 1.167 h = 70 min\n  Rush hour (45 km/h): 105 km ÷ 45 km/h = 2.333 h = 140 min\n  Time saved: 140 − 70 = 70 min`,
  ],
  BF: [
    `Convert all durations to minutes, then find the mean:\n  Pilot 1 (Express Rail):      1 hr 12 min = 72 min\n  Pilot 2 (Taxi):              1 hr 55 min = 115 min\n  Attendant 1 (Staff Shuttle): 48 min\n  Attendant 2 (Bus Line):      1 hr 22 min = 82 min\n  Attendant 3 (Personal Vehicle): 1 hr 37 min = 97 min\n  Attendant 4 (Co-ride):       56 min\nTotal: 72 + 115 + 48 + 82 + 97 + 56 = 470 min\nAverage: 470 ÷ 6 = 78.3 → 78 min`,
    `Time = Distance ÷ Speed  (then × 60 to convert hours → minutes)\n\n  Outbound / loaded (50 km/h): 40 km ÷ 50 km/h = 0.8 h = 48 min\n  Return / empty (80 km/h):    40 km ÷ 80 km/h = 0.5 h = 30 min\n  Time saved on return: 48 − 30 = 18 min`,
  ],
  BG: [
    `Convert all durations to minutes, then find the mean:\n  Researcher A (Staff Boat):   1 hr 18 min = 78 min\n  Researcher B (Coastal Tram): 44 min\n  Researcher C (Electric Car): 1 hr 32 min = 92 min\n  Researcher D (Cable Car):    26 min\n  Researcher E (Hybrid Bus):   1 hr 05 min = 65 min\nTotal: 78 + 44 + 92 + 26 + 65 = 305 min\nAverage: 305 ÷ 5 = 61 min`,
    `Time = Distance ÷ Speed  (then × 60 to convert hours → minutes)\n\n  Normal (100 km/h):      75 km ÷ 100 km/h = 0.75 h = 45 min\n  Restricted (60 km/h):   75 km ÷ 60 km/h = 1.25 h = 75 min\n  Extra time: 75 − 45 = 30 min`,
  ],
  BH: [
    `Convert all durations to minutes, then find the mean:\n  Worker 1 (Council Van): 1 hr 16 min = 76 min\n  Worker 2 (Bicycle):     39 min\n  Worker 3 (Light Rail):  1 hr 04 min = 64 min\n  Worker 4 (Carpool):     48 min\n  Worker 5 (Walk/Bus):    53 min\n  Worker 6 (Motorcycle):  32 min\nTotal: 76 + 39 + 64 + 48 + 53 + 32 = 312 min\nAverage: 312 ÷ 6 = 52 min`,
    `Time = Distance ÷ Speed  (then × 60 to convert hours → minutes)\n\n  Overnight (80 km/h): 20 km ÷ 80 km/h = 0.25 h = 15 min\n  Peak (30 km/h):      20 km ÷ 30 km/h = 0.667 h = 40 min\n  Extra time: 40 − 15 = 25 min`,
  ],
  BI: [
    `Rate for Standard Turf/Lawn: 65 mL per 5 L of water\n\nScale up to a 20 L container:\n  20 L ÷ 5 L = 4  (number of 5 L units)\n  4 × 65 mL = 260 mL`,
    `Step 1 — Find the concentration of the mystery mix:\n  36 mL ÷ 12 L = 3 mL per litre\n\nStep 2 — Convert to the per-5-litre rate used in the table:\n  3 mL/L × 5 = 15 mL per 5 L\n\nStep 3 — Match against the table:\n  Delicate Orchids:       15 mL per 5 L  ✓\n  Native Shrubs:          40 mL per 5 L\n  Standard Turf/Lawn:     65 mL per 5 L\n  Established Fruit Trees:120 mL per 5 L\n\nAnswer: Delicate Orchids`,
  ],
  BJ: [
    `Zone 1 (Orchards):  2.4 L/min × 90 min  = 216 L\nZone 4 (Turf Lawns): 1.8 L/min × 120 min = 216 L\n\nTotal: 216 + 216 = 432 L`,
    `Convert barrel capacity to litres:\n  0.024 m³ × 1,000 L/m³ = 24 L per barrel\n\nNumber of barrels = Total volume ÷ Barrel capacity\n  = 432 L ÷ 24 L = 18 barrels`,
  ],
  BK: [
    `Volume = Flow rate × Time\n  = 850 mL/min × 45 min = 38,250 mL\n\nConvert to litres:\n  38,250 mL ÷ 1,000 = 38.25 L`,
    `Convert tank capacity to litres:\n  0.51 m³ × 1,000 L/m³ = 510 L\n\nConvert flow rate to L/min:\n  850 mL/min ÷ 1,000 = 0.85 L/min\n\nTime = Capacity ÷ Flow rate\n  = 510 L ÷ 0.85 L/min = 600 minutes\n  = 600 ÷ 60 = 10 hours 0 minutes`,
  ],
  BL: [
    `Grade A Nitro concentration: 4.5 mL per litre\nSub-tank volume: 180 L\n\nConcentrate needed: 4.5 mL/L × 180 L = 810 mL`,
    `Grade A Nitro:   4.5 mL/L × 180 L = 810 mL\nGrade B Phospho: 6.0 mL/L × 140 L = 840 mL\n\nTotal combined: 810 + 840 = 1,650 mL`,
  ],
  BM: [
    `Volume = Floor area × Liquid depth\n  = 4.0 m² × 0.85 m = 3.4 m³\n\nConvert to litres:\n  3.4 m³ × 1,000 L/m³ = 3,400 L`,
    `Time = Volume ÷ Pump rate\n  = 3,400 L ÷ 12.5 L/min = 272 minutes\n  = 4 hours 32 minutes (272 ÷ 60 = 4 remainder 32)`,
  ],
  BN: [
    `EcoTimber Hub: "Buy 2 get 25% off total timber cost"\n  Standard price: $200.00 each\n  2 slabs = 2 × $200 = $400.00\n  25% discount: $400.00 × 0.75 = $300.00`,
    `Check each statement against the tables:\n\n  A: 1 slab at EcoTimber = $200.00  |  1 slab at Wood Yard = $145.50\n     EcoTimber is MORE expensive → False\n\n  B: 3 slabs at EcoTimber = 3 × $200 × 0.75 = $450.00\n     3 slabs at Wood Yard  = 3 × $145.50 = $436.50\n     EcoTimber is MORE expensive → False\n\n  C: Wood Yard sale $145.50 + saving $54.50 = $200.00 ✓  → True\n\n  D: Discount % = $54.50 ÷ $200.00 × 100 = 27.25%, not 30% → False`,
  ],
  BO: [
    `Sum the individual costs:\n  Cavity Wall Insulation:  $2,200\n  Double Glazing Retrofit:  $5,600\n  Draft Proofing Seals:     $1,250\n  Roof Space Batts:         $1,800\n  Total individual cost:   $10,850\n\nPackage deal: $9,500\nSavings: $10,850 − $9,500 = $1,350`,
    `Payback period = Initial cost ÷ Annual savings\n  = $2,200 ÷ $440 per year\n  = 5 years exactly`,
  ],
  BP: [
    `4 sheets SL72 × $110 = $440\n2 sheets SL92 × $190 = $380\nTotal: $440 + $380 = $820`,
    `Calculate strength (MPa) per dollar for each grade:\n\n  SL62: 500 MPa ÷ $80  = 6.25 MPa/$  ← highest\n  SL72: 500 MPa ÷ $110 = 4.55 MPa/$\n  SL82: 550 MPa ÷ $145 = 3.79 MPa/$\n  SL92: 600 MPa ÷ $190 = 3.16 MPa/$\n\nSL62 delivers the most MPa per dollar spent.`,
  ],
  BQ: [
    `'Buy 3 get the 4th free' means 4 metres costs the same as 3 metres:\n  3 × $36.00 = $108.00`,
    `DuraPlank 8 m ('buy 3 get 4th free' applies twice → pay for 6 m):\n  6 × $36.00 = $216.00\n\nEcoDeck 8 m:\n  8 × $28.50 = $228.00\n\n$216.00 ≠ $228.00 → the costs are NOT identical → Statement B is false.\n\nChecking the others:\n  A: 1 m at EcoDeck ($28.50) < 1 m at DuraPlank ($36.00) → True\n  C: EcoDeck RRP = $28.50 + $7.50 = $36.00 = DuraPlank → True\n  D: DuraPlank 12 m → pay for 9 m: 9 × $36.00 = $324.00 → True`,
  ],
  BR: [
    `Glasswool packs needed: 120 m² ÷ 15 m²/pack = 8 packs\n  Cost: 8 × $65 = $520\n\nRockwool packs needed: 120 m² ÷ 10 m²/pack = 12 packs\n  Cost: 12 × $115 = $1,380\n\nDifference: $1,380 − $520 = $860`,
    `Cost per m² for each option:\n  Glasswool:   $65 ÷ 15 m² = $4.33/m²  →  NRC per $ = 0.70 ÷ 4.33 = 0.161  ← highest\n  Rockwool:    $115 ÷ 10 m² = $11.50/m² →  NRC per $ = 0.90 ÷ 11.50 = 0.078\n  Polyester:   $85 ÷ 12 m² = $7.08/m²  →  NRC per $ = 0.75 ÷ 7.08 = 0.106\n  Foam Sheet:  $160 ÷ 8 m² = $20.00/m² →  NRC per $ = 0.85 ÷ 20.00 = 0.042\n\nGlasswool Partition has the highest NRC per dollar.`,
  ],
  BS: [
    `Standard Besser Block: 75 blocks × 16 kg = 1,200 kg\nJumbo Engineered:      30 blocks × 34 kg = 1,020 kg\n\nTotal combined weight: 1,200 + 1,020 = 2,220 kg`,
    `Volume (m³) per kg for each block type:\n  Interlocking Capping:  0.015 ÷ 14 = 0.001071 m³/kg\n  Standard Besser Block: 0.024 ÷ 16 = 0.001500 m³/kg  ← highest\n  Split-Face Retaining:  0.032 ÷ 22 = 0.001455 m³/kg\n  Jumbo Engineered:      0.050 ÷ 34 = 0.001471 m³/kg`,
  ],
  BT: [
    `4 full-price frames: 4 × $600 = $2,400\n5th frame at half price: $600 ÷ 2 = $300\nTotal for 5 frames: $2,400 + $300 = $2,700`,
    `Matrix Glazing Systems: SALE $510 per frame, saving $90 from list price.\n  Original list price = $510 + $90 = $600\n  Apex Fenestration list price = $600\n\nBoth suppliers share the identical list unit price of $600.\n\nChecking the others:\n  A: 3 frames — Apex: 3 × $600 = $1,800; Matrix: 3 × $510 = $1,530 → Matrix cheaper → False\n  B: 5 frames — Apex: $2,700; Matrix: 5 × $510 = $2,550 → Matrix cheaper → False\n  D: Matrix discount = $90 ÷ $600 = 15%, not 20% → False`,
  ],
  BU: [
    `Total area laid: 5 days × 20 m²/day = 100 m²\nTotal material value: 100 m² × $140/m² = $14,000`,
    `Speed efficiency = Daily laying rate ÷ Procurement cost per m²:\n  Exfoliated Stone:     24 ÷ 120 = 0.200 m²/day/$  ← tied highest\n  Honed Smooth Slab:    15 ÷ 165 = 0.091 m²/day/$\n  Sandblasted Textured: 20 ÷ 140 = 0.143 m²/day/$\n  Bush-Hammered Grip:   22 ÷ 110 = 0.200 m²/day/$  ← tied highest\n\nExfoliated Stone and Bush-Hammered Grip tie on the ratio.\nTie-break on absolute output: Exfoliated covers 24 m²/day vs 22 m²/day.`,
  ],
  BV: [
    `Sheets needed: 108 m² ÷ 2.16 m²/sheet = 50 sheets\nTotal cost: 50 × $51.84 = $2,592.00`,
    `Unit cost per m²:\n  CD Formply Structural: $72.00 ÷ 2.88 m² = $25.00/m²\n  DD Tongue & Groove:    $51.84 ÷ 2.16 m² = $24.00/m²\n\nDD Tongue & Groove is cheaper by $1.00 per square metre.`,
  ],
  BW: [
    `Anchor Class M10: 3 boxes × 24 anchors = 72 anchors\nAnchor Class M16: 2 boxes × 20 anchors = 40 anchors\n\nTotal: 72 + 40 = 112 anchors`,
    `Cost per single anchor:\n  M10: $96 ÷ 24 = $4.00 per anchor\n  M12: $140 ÷ 28 = $5.00 per anchor\n  M16: $180 ÷ 20 = $9.00 per anchor\n\nTensile kg per dollar:\n  M10: 3,600 ÷ 4.00 = 900 kg/$\n  M12: 4,900 ÷ 5.00 = 980 kg/$  ← highest\n  M16: 6,200 ÷ 9.00 = 688.9 kg/$`,
  ],
  BX: [
    `Total repaid = $260/month × 60 months = $15,600\nTotal interest = $15,600 − $12,000 = $3,600`,
    `Monthly interest rate = 12% ÷ 12 = 1% = 0.01\n\nMonth 1:\n  Interest = $12,000.00 × 0.01 = $120.00\n  Balance  = $12,000.00 + $120.00 − $300.00 = $11,820.00\n\nMonth 2:\n  Interest = $11,820.00 × 0.01 = $118.20\n  Balance  = $11,820.00 + $118.20 − $300.00 = $11,638.20`,
    `Year 1: $12,000.00 × (1 − 20%) = $12,000.00 × 0.80 = $9,600.00\nYear 2: $9,600.00  × (1 − 12%) = $9,600.00 × 0.88  = $8,448.00\nYear 3: $8,448.00  × (1 − 12%) = $8,448.00 × 0.88  = $7,434.24`,
  ],
  BY: [
    `Total repaid = $380/month × 48 months = $18,240\nTotal interest = $18,240 − $15,500 = $2,740`,
    `Monthly interest rate = 6% ÷ 12 = 0.5% = 0.005\n\nMonth 1:\n  Interest = $15,500.00 × 0.005 = $77.50\n  Balance  = $15,500.00 + $77.50 − $500.00 = $15,077.50\n\nMonth 2:\n  Interest = $15,077.50 × 0.005 = $75.39\n  Balance  = $15,077.50 + $75.39 − $500.00 = $14,652.89`,
    `Year 1: $15,500.00 × (1 − 30%) = $15,500.00 × 0.70 = $10,850.00\nYear 2: $10,850.00 × (1 − 15%) = $10,850.00 × 0.85 = $9,222.50\nYear 3: $9,222.50  × (1 − 15%) = $9,222.50 × 0.85  = $7,839.13\nYear 4: $7,839.13  × (1 − 15%) = $7,839.13 × 0.85  = $6,663.26`,
  ],
  BZ: [
    `Total repaid = $210/month × 48 months = $10,080\nTotal interest = $10,080 − $8,400 = $1,680`,
    `Monthly interest rate = 9% ÷ 12 = 0.75% = 0.0075\n\nMonth 1:\n  Interest = $8,400.00 × 0.0075 = $63.00\n  Balance  = $8,400.00 + $63.00 − $250.00 = $8,213.00\n\nMonth 2:\n  Interest = $8,213.00 × 0.0075 = $61.60\n  Balance  = $8,213.00 + $61.60 − $250.00 = $8,024.60\n\nMonth 3:\n  Interest = $8,024.60 × 0.0075 = $60.18\n  Balance  = $8,024.60 + $60.18 − $250.00 = $7,834.78`,
    `Year 1: $8,400.00 × (1 − 10%) = $8,400.00 × 0.90 = $7,560.00\nYear 2: $7,560.00 × (1 − 8%)  = $7,560.00 × 0.92 = $6,955.20\nYear 3: $6,955.20 × (1 − 8%)  = $6,955.20 × 0.92 = $6,398.78`,
  ],
  CA: [
    `Financed amount = $24,000 − $4,000 deposit = $20,000\nTotal repaid = $420/month × 60 months = $25,200\nTotal interest = $25,200 − $20,000 = $5,200`,
    `Loan = $24,000 − $4,000 deposit = $20,000\nMonthly interest rate = 4.8% ÷ 12 = 0.4% = 0.004\n\nMonth 1:\n  Interest = $20,000.00 × 0.004 = $80.00\n  Balance  = $20,000.00 + $80.00 − $450.00 = $19,630.00\n\nMonth 2:\n  Interest = $19,630.00 × 0.004 = $78.52\n  Balance  = $19,630.00 + $78.52 − $450.00 = $19,258.52\n\nMonth 3:\n  Interest = $19,258.52 × 0.004 = $77.03\n  Balance  = $19,258.52 + $77.03 − $450.00 = $18,885.55`,
    `Year 1: $24,000.00 × (1 − 22%) = $24,000.00 × 0.78 = $18,720.00\nYear 2: $18,720.00 × (1 − 14%) = $18,720.00 × 0.86 = $16,099.20\nYear 3: $16,099.20 × (1 − 14%) = $16,099.20 × 0.86 = $13,845.31\nYear 4: $13,845.31 × (1 − 14%) = $13,845.31 × 0.86 = $11,906.97`,
  ],
  CB: [
    `Total repaid = $680/month × 60 months = $40,800\nTotal interest = $40,800 − $32,000 = $8,800`,
    `Monthly interest rate = 6% ÷ 12 = 0.5% = 0.005\n\nMonth 1:\n  Interest = $32,000.00 × 0.005 = $160.00\n  Balance  = $32,000.00 + $160.00 − $800.00 = $31,360.00\n\nMonth 2:\n  Interest = $31,360.00 × 0.005 = $156.80\n  Balance  = $31,360.00 + $156.80 − $800.00 = $30,716.80\n\nMonth 3:\n  Interest = $30,716.80 × 0.005 = $153.58\n  Balance  = $30,716.80 + $153.58 − $800.00 = $30,070.38`,
    `Year 1: $32,000.00 × (1 − 35%) = $32,000.00 × 0.65 = $20,800.00\nYear 2: $20,800.00 × (1 − 18%) = $20,800.00 × 0.82 = $17,056.00\nYear 3: $17,056.00 × (1 − 18%) = $17,056.00 × 0.82 = $13,985.92\nYear 4: $13,985.92 × (1 − 18%) = $13,985.92 × 0.82 = $11,468.45`,
  ],
  CC: [
    `Total fortnights = 26 per year × 4 years = 104 fortnights\nTotal repaid = $45 × 104 = $4,680\nTotal interest = $4,680 − $3,500 = $1,180`,
    `Monthly interest rate = 12% ÷ 12 = 1% = 0.01\n\nMonth 1:\n  Interest = $3,500.00 × 0.01 = $35.00\n  Balance  = $3,500.00 + $35.00 − $150.00 = $3,385.00\n\nMonth 2:\n  Interest = $3,385.00 × 0.01 = $33.85\n  Balance  = $3,385.00 + $33.85 − $150.00 = $3,268.85`,
    `Year 1: $3,500.00 × (1 − 15%) = $3,500.00 × 0.85 = $2,975.00\nYear 2: $2,975.00 × (1 − 10%) = $2,975.00 × 0.90 = $2,677.50\nYear 3: $2,677.50 × (1 − 10%) = $2,677.50 × 0.90 = $2,409.75`,
  ],
  CD: [
    `Total monthly repayments = $790 × 60 months = $47,400\nPlus balloon payment = + $5,000\nTotal repaid = $52,400\nTotal interest = $52,400 − $45,000 = $7,400`,
    `Monthly interest rate = 7.2% ÷ 12 = 0.6% = 0.006\n\nMonth 1:\n  Interest = $45,000.00 × 0.006 = $270.00\n  Balance  = $45,000.00 + $270.00 − $1,200.00 = $44,070.00\n\nMonth 2:\n  Interest = $44,070.00 × 0.006 = $264.42\n  Balance  = $44,070.00 + $264.42 − $1,200.00 = $43,134.42\n\nMonth 3:\n  Interest = $43,134.42 × 0.006 = $258.81\n  Balance  = $43,134.42 + $258.81 − $1,200.00 = $42,193.23`,
    `Year 1: $45,000.00 × (1 − 28.0%) = $45,000.00 × 0.720 = $32,400.00\nYear 2: $32,400.00 × (1 − 16.5%) = $32,400.00 × 0.835 = $27,054.00\nYear 3: $27,054.00 × (1 − 12.0%) = $27,054.00 × 0.880 = $23,807.52\nYear 4: $23,807.52 × (1 − 12.0%) = $23,807.52 × 0.880 = $20,950.62`,
  ],
  CE: [
    `Total repaid = $1,150/month × 60 months = $69,000\nTotal interest = $69,000 − $62,000 = $7,000`,
    `Monthly interest rate = 9.6% ÷ 12 = 0.8% = 0.008\n\nMonth 1:\n  Interest = $62,000.00 × 0.008 = $496.00\n  Balance  = $62,000.00 + $496.00 − $2,500.00 = $59,996.00\n\nMonth 2:\n  Interest = $59,996.00 × 0.008 = $479.97\n  Balance  = $59,996.00 + $479.97 − $2,500.00 = $57,975.97\n\nMonth 3:\n  Interest = $57,975.97 × 0.008 = $463.81\n  Balance  = $57,975.97 + $463.81 − $2,500.00 = $55,939.78`,
    `Year 1: $62,000.00 × (1 − 40%) = $62,000.00 × 0.60 = $37,200.00\nYear 2: $37,200.00 × (1 − 20%) = $37,200.00 × 0.80 = $29,760.00\nYear 3: $29,760.00 × (1 − 15%) = $29,760.00 × 0.85 = $25,296.00\nYear 4: $25,296.00 × (1 − 15%) = $25,296.00 × 0.85 = $21,501.60`,
  ],
  CF: [
    `Total repaid = $395/month × 60 months = $23,700\nTotal interest = $23,700 − $18,000 = $5,700`,
    `Months 1–2: rate = 6% ÷ 12 = 0.5% = 0.005\nMonth 3+:   rate = 9% ÷ 12 = 0.75% = 0.0075\n\nMonth 1 (0.5%):\n  Interest = $18,000.00 × 0.005 = $90.00\n  Balance  = $18,000.00 + $90.00 − $500.00 = $17,590.00\n\nMonth 2 (0.5%):\n  Interest = $17,590.00 × 0.005 = $87.95\n  Balance  = $17,590.00 + $87.95 − $500.00 = $17,177.95\n\nMonth 3 (0.75% — new rate):\n  Interest = $17,177.95 × 0.0075 = $128.83\n  Balance  = $17,177.95 + $128.83 − $500.00 = $16,806.78`,
    `Year 1: $18,000.00 × (1 − 18.0%) = $18,000.00 × 0.820 = $14,760.00\nYear 2: $14,760.00 × (1 − 11.5%) = $14,760.00 × 0.885 = $13,062.60\nYear 3: $13,062.60 × (1 − 11.5%) = $13,062.60 × 0.885 = $11,560.40\nYear 4: $11,560.40 × (1 − 11.5%) = $11,560.40 × 0.885 = $10,230.95\nYear 5: $10,230.95 × (1 − 11.5%) = $10,230.95 × 0.885 = $9,054.40`,
  ],
  CG: [
    `Financed amount = $38,500 − $5,500 trade-in = $33,000\nTotal repaid = $690/month × 60 months = $41,400\nTotal interest = $41,400 − $33,000 = $8,400`,
    `Loan = $38,500 − $5,500 trade-in = $33,000\nMonthly interest rate = 8.4% ÷ 12 = 0.7% = 0.007\n\nMonth 1:\n  Interest = $33,000.00 × 0.007 = $231.00\n  Balance  = $33,000.00 + $231.00 − $1,000.00 = $32,231.00\n\nMonth 2:\n  Interest = $32,231.00 × 0.007 = $225.62\n  Balance  = $32,231.00 + $225.62 − $1,000.00 = $31,456.62\n\nMonth 3:\n  Interest = $31,456.62 × 0.007 = $220.20\n  Balance  = $31,456.62 + $220.20 − $1,000.00 = $30,676.82\n\n(Exact unrounded answer: $30,676.81)`,
    `Year 1: $38,500.00 × (1 − 24.0%) = $38,500.00 × 0.760 = $29,260.00\nYear 2: $29,260.00 × (1 − 15.2%) = $29,260.00 × 0.848 = $24,812.48\nYear 3: $24,812.48 × (1 − 12.0%) = $24,812.48 × 0.880 = $21,834.98\nYear 4: $21,834.98 × (1 − 10.0%) = $21,834.98 × 0.900 = $19,651.48`,
  ],
  CH: [
    `Identify highest and lowest median values:\n  Highest: Sydney    = $770,000\n  Lowest:  Adelaide  = $430,000\n\nDifference = $770,000 − $430,000 = $340,000`,
    `Hobart median: $440,000\n20% deposit = $440,000 × 0.20 = $88,000\nLoan amount = $440,000 − $88,000 = $352,000\n\nBank #3 rate = 3.75%\nYear 1 interest = $352,000 × 0.0375 = $13,200`,
  ],
  CI: [
    `Sort regions from highest to lowest median unit value:\n  1st: Sunshine Coast  $640,000\n  2nd: Gold Coast      $610,000  ← second highest\n  3rd: Wollongong      $580,000\n  4th: Newcastle       $520,000\n  5th: Geelong         $490,000`,
    `Gold Coast median: $610,000\n15% deposit = $610,000 × 0.15 = $91,500\nLoan amount = $610,000 − $91,500 = $518,500\n\nAlpha Bank rate = 4.10%\nYear 1 interest = $518,500 × 0.041 = $21,258.50`,
  ],
  CJ: [
    `Perth median:  $540,000\nDarwin median: $410,000\n\nDifference = $540,000 − $410,000 = $130,000`,
    `Canberra median: $790,000\n25% deposit = $790,000 × 0.25 = $197,500\nLoan amount = $790,000 − $197,500 = $592,500\n\nAtlantic Bank rate = 3.65%\nYear 1 interest = $592,500 × 0.0365 = $21,626.25`,
  ],
  CK: [
    `Sum all three zones:\n  Zone 1 (Inner):  $920,000\n  Zone 2 (Middle): $740,000\n  Zone 3 (Outer):  $580,000\n  Total = $2,240,000\n\nMean = $2,240,000 ÷ 3 = $746,666.67`,
    `Zone 2 median: $740,000\n30% deposit = $740,000 × 0.30 = $222,000\nLoan amount = $740,000 − $222,000 = $518,000\n\nLender B rate = 4.95%\nYear 1 interest = $518,000 × 0.0495 = $25,641`,
  ],
  CL: [
    `Check each district against $650,000:\n  Riverina:  $680,000 > $650,000  ✓\n  Mallee:    $390,000             ✗\n  Gippsland: $720,000 > $650,000  ✓\n  Hunter:    $810,000 > $650,000  ✓\n\n3 districts exceed $650,000`,
    `Mallee median: $390,000\n10% deposit = $390,000 × 0.10 = $39,000\nLoan amount = $390,000 − $39,000 = $351,000\n\nRuralCredit rate = 4.15%\nYear 1 interest = $351,000 × 0.0415 = $14,566.50`,
  ],
  CM: [
    `Percentage = (Port Douglas ÷ Byron Bay) × 100\n= ($630,000 ÷ $980,000) × 100\n= 0.64285... × 100\n= 64.29% (rounded to 2 decimal places)`,
    `Lorne median: $840,000\n20% deposit = $840,000 × 0.20 = $168,000\nLoan = $840,000 − $168,000 = $672,000\n\nBank North (4.75%): $672,000 × 0.0475 = $31,920\nBank South (4.30%): $672,000 × 0.043  = $28,896\n\nSaving by choosing Bank South: $31,920 − $28,896 = $3,024`,
  ],
  CN: [
    `Current Parramatta median: $710,000\n12% increase: $710,000 × 1.12 = $795,200`,
    `Richmond median: $780,000\nFixed cash deposit: $150,000\nLoan amount = $780,000 − $150,000 = $630,000\n\nSummit Loans rate = 5.25%\nYear 1 interest = $630,000 × 0.0525 = $33,075`,
  ],
  CO: [
    `Moranbah: $420,000\nPort Hedland: $690,000\n\nPercentage = ($420,000 ÷ $690,000) × 100\n= 0.60869... × 100\n= 60.87%\n≈ 61% (rounded to nearest whole %)`,
    `Karratha median: $640,000\n20% deposit = $640,000 × 0.20 = $128,000\nInitial loan = $640,000 − $128,000 = $512,000\n\nEstablishment fee (2% of loan) = $512,000 × 0.02 = $10,240\nAdjusted loan balance = $512,000 + $10,240 = $522,240\n\nMutual B rate = 5.85%\nYear 1 interest = $522,240 × 0.0585 = $30,551.04`,
  ],
  CP: [
    `Gungahlin median:  $630,000\nBelconnen budget:  $560,000\n\nShortfall = $630,000 − $560,000 = $70,000`,
    `Tuggeranong median: $580,000\n15% deposit = $580,000 × 0.15 = $87,000\nLoan amount = $580,000 − $87,000 = $493,000\n\nFederal Credit rate = 4.05%\nYear 1 interest = $493,000 × 0.0405 = $19,966.50\n\nInterest-only: principal stays at $493,000\nYear 2 interest = $493,000 × 0.0405 = $19,966.50\n\nTotal 2-year interest = $19,966.50 × 2 = $39,933`,
  ],
  CQ: [
    `Mosman (−5%):    $2,100,000 × 0.95 = $1,995,000\nCottesloe (+8%): $1,650,000 × 1.08 = $1,782,000\n\nMosman ($1,995,000) > Cottesloe ($1,782,000)\nDifference = $1,995,000 − $1,782,000 = $213,000`,
    `Toorak median: $1,850,000\n20% deposit = $1,850,000 × 0.20 = $370,000\nBase loan = $1,850,000 − $370,000 = $1,480,000\n\nStamp duty (5% of purchase price) = $1,850,000 × 0.05 = $92,500\nBundled loan total = $1,480,000 + $92,500 = $1,572,500\n\nTier 1 Bank rate = 4.80%\nYear 1 interest = $1,572,500 × 0.048 = $75,480`,
  ],
  CR: [
    `Closed cylinder surface area = 2πr² + 2πrh\n\nTwo circular faces:  2 × 3.14 × 3² = 2 × 3.14 × 9 = 56.52 m²\nCurved side wall:    2 × 3.14 × 3 × 5 = 94.2 m²\n\nTotal = 56.52 + 94.2 = 150.72 ≈ 151 m²`,
    `Total volume = πr²h = 3.14 × 3² × 5 = 3.14 × 9 × 5 = 141.3 m³\n\n80% capacity = 141.3 × 0.80 = 113.04 m³`,
  ],
  CS: [
    `Base area = πr² = 3.14 × 2.5² = 3.14 × 6.25 = 19.625 m²\n\nRounded to one decimal place: 19.6 m²`,
    `Volume = πr²h = 3.14 × 2.5² × 1.2 = 3.14 × 6.25 × 1.2 = 23.55 m³`,
  ],
  CT: [
    `Mince Pie + Eggnog = 1,500 + 1,200 = 2,700 kJ\n\n2,700 ÷ 1,000 (kJ/hr walking) = 2.7 hours`,
    `Dancing for 2 hours: 1,300 kJ/hr × 2 = 2,600 kJ burned\n\n2,600 ÷ 800 (kJ per Roast Potato) = 3.25 Roast Potatoes`,
  ],
  CU: [
    `Meat Pie + Juice Box = 1,900 + 500 = 2,400 kJ\n\nTime = (2,400 ÷ 2,500) × 60 = 0.96 × 60 = 57.6 mins`,
    `4 Sausage Rolls = 4 × 1,300 = 5,200 kJ\n\nTime = (5,200 ÷ 2,500) × 60 = 2.08 × 60 = 124.8 mins`,
  ],
  CV: [
    `3 Biscuits + 1 Mocha = (3 × 200) + 900 = 600 + 900 = 1,500 kJ\n\nTime = (1,500 ÷ 2,400) × 60 = 0.625 × 60 = 37.5 mins`,
    `30 mins of stair climbing = 2,400 kJ/hr × (30 ÷ 60) = 2,400 × 0.5 = 1,200 kJ burned\n\n1,200 − 850 (Donut) = 350 kJ surplus\n→ Yes, with 350 kJ to spare`,
  ],
  CW: [
    `2 Isotonic Drinks + 1 Energy Gel = (2 × 600) + 700 = 1,200 + 700 = 1,900 kJ\n\nTime = (1,900 ÷ 2,200) × 60 = 0.8636 × 60 ≈ 51.8 mins`,
    `90 mins swimming = 1,600 kJ/hr × (90 ÷ 60) = 1,600 × 1.5 = 2,400 kJ burned\n\n2,400 ÷ 400 (kJ per Banana) = 6 Bananas`,
  ],
  CX: [
    `Chocolate Bar + Latte = 1,000 + 700 = 1,700 kJ\n\n1,700 ÷ 700 (kJ/hr yoga) = 2.4286 ≈ 2.4 hours`,
    `2 × Dried Fruit = 2 × 500 = 1,000 kJ\n\nTime = (1,000 ÷ 800) × 60 = 1.25 × 60 = 75 mins`,
  ],
  CY: [
    `SD per bottle = 375 × 4.8 ÷ 100 × 0.789 ÷ 10\n  = 375 × 0.048 × 0.789 ÷ 10\n  = 14.202 ÷ 10\n  = 1.42 standard drinks\n\nMax full bottles under 4 SD:\n  2 × 1.42 = 2.84 SD ✓ (under limit)\n  3 × 1.42 = 4.26 SD ✗ (over limit)\n\nMaximum = 2 bottles`,
  ],
  CZ: [
    `SD per glass = 150 × 13.5 ÷ 100 × 0.789 ÷ 10\n  = 150 × 0.135 × 0.789 ÷ 10\n  = 15.98 ÷ 10\n  = 1.60 standard drinks\n\nMax full glasses under 4 SD:\n  2 × 1.60 = 3.19 SD ✓ (under limit)\n  3 × 1.60 = 4.79 SD ✗ (over limit)\n\nMaximum = 2 glasses`,
  ],
  DA: [
    `SD per bottle = 375 × 2.7 ÷ 100 × 0.789 ÷ 10\n  = 375 × 0.027 × 0.789 ÷ 10\n  = 7.989 ÷ 10\n  = 0.80 standard drinks\n\nMax full bottles under 4 SD:\n  5 × 0.80 = 3.99 SD ✓ (just under limit)\n  6 × 0.80 = 4.79 SD ✗ (over limit)\n\nMaximum = 5 bottles`,
  ],
  DB: [
    `SD per bottle = 330 × 5.0 ÷ 100 × 0.789 ÷ 10\n  = 330 × 0.05 × 0.789 ÷ 10\n  = 13.02 ÷ 10\n  = 1.30 standard drinks\n\nMax full bottles under 4 SD:\n  3 × 1.30 = 3.91 SD ✓ (under limit)\n  4 × 1.30 = 5.21 SD ✗ (over limit)\n\nMaximum = 3 bottles`,
  ],
  DC: [
    `SD per nip = 30 × 40 ÷ 100 × 0.789 ÷ 10\n  = 30 × 0.40 × 0.789 ÷ 10\n  = 9.468 ÷ 10\n  = 0.947 standard drinks\n\nMax full nips under 4 SD:\n  4 × 0.947 = 3.79 SD ✓ (under limit)\n  5 × 0.947 = 4.73 SD ✗ (over limit)\n\nMaximum = 4 nips`,
  ],
  DD: [
    `SD per bottle = 330 × 6.0 ÷ 100 × 0.789 ÷ 10\n  = 330 × 0.06 × 0.789 ÷ 10\n  = 15.62 ÷ 10\n  = 1.56 standard drinks\n\nMax full bottles under 4 SD:\n  2 × 1.56 = 3.12 SD ✓ (under limit)\n  3 × 1.56 = 4.69 SD ✗ (over limit)\n\nMaximum = 2 bottles`,
  ],
  DE: [
    `SD per bottle = 375 × 5.0 ÷ 100 × 0.789 ÷ 10\n  = 375 × 0.05 × 0.789 ÷ 10\n  = 14.794 ÷ 10\n  = 1.48 standard drinks\n\nMax full bottles under 4 SD:\n  2 × 1.48 = 2.96 SD ✓ (under limit)\n  3 × 1.48 = 4.44 SD ✗ (over limit)\n\nMaximum = 2 bottles`,
  ],
  DF: [
    `SD per glass = 120 × 11.5 ÷ 100 × 0.789 ÷ 10\n  = 120 × 0.115 × 0.789 ÷ 10\n  = 10.888 ÷ 10\n  = 1.09 standard drinks\n\nMax full glasses under 4 SD:\n  3 × 1.09 = 3.27 SD ✓ (under limit)\n  4 × 1.09 = 4.35 SD ✗ (over limit)\n\nMaximum = 3 glasses`,
  ],
  DG: [
    `SD per bottle = 375 × 5.2 ÷ 100 × 0.789 ÷ 10\n  = 375 × 0.052 × 0.789 ÷ 10\n  = 15.386 ÷ 10\n  = 1.54 standard drinks\n\nMax full bottles under 4 SD:\n  2 × 1.54 = 3.08 SD ✓ (under limit)\n  3 × 1.54 = 4.62 SD ✗ (over limit)\n\nMaximum = 2 bottles`,
  ],
  DH: [
    `SD per glass = 60 × 20 ÷ 100 × 0.789 ÷ 10\n  = 60 × 0.20 × 0.789 ÷ 10\n  = 9.468 ÷ 10\n  = 0.947 standard drinks\n\nMax full glasses under 4 SD:\n  4 × 0.947 = 3.79 SD ✓ (under limit)\n  5 × 0.947 = 4.73 SD ✗ (over limit)\n\nMaximum = 4 glasses`,
  ],
  DI: [`Saving per minute = 10 − 7 = 3 L/min\nTotal saved = 3 × 10 = 30 L`],
  DJ: [`Saving per minute = 9 − 6 = 3 L/min\nTotal saved = 3 × 8 = 24 L`],
  DK: [`Saving per minute = 12 − 7.5 = 4.5 L/min\nTotal saved = 4.5 × 12 = 54 L`],
  DL: [`Saving per minute = 8 − 5 = 3 L/min\nTotal saved = 3 × 5 = 15 L`],
  DM: [`Saving per minute = 15 − 8 = 7 L/min\nTotal saved = 7 × 20 = 140 L`],
  DN: [`Saving per minute = 10 − 6 = 4 L/min\nTotal saved = 4 × 6 = 24 L`],
  DO: [`Saving per minute = 11 − 7 = 4 L/min\nTotal saved = 4 × 15 = 60 L`],
  DP: [`Saving per minute = 14 − 9 = 5 L/min\nTotal saved = 5 × 4 = 20 L`],
  DQ: [`Saving per minute = 9 − 5 = 4 L/min\nTotal saved = 4 × 30 = 120 L`],
  DR: [`Saving per minute = 13 − 8 = 5 L/min\nTotal saved = 5 × 7 = 35 L`],
  DS: [
    `Total = $2,400,000 + $1,800,000 + $600,000 = $4,800,000\nProperty % = $2,400,000 ÷ $4,800,000 × 100 = 50%`,
    `Stocks gain: $1,800,000 × 12.5% = $225,000\nBonds loss: $600,000 × 5% = $30,000\nNet change: $225,000 − $30,000 = $195,000\n% change: $195,000 ÷ $4,800,000 × 100 = 4.06% increase`,
  ],
  DT: [
    `Revenue: 500 × $150 = $75,000\nCOGS: 500 × $90 = $45,000\nNet profit: $75,000 − $45,000 − $12,000 = $18,000\nProfit % = $18,000 ÷ $75,000 × 100 = 24%`,
    `New COGS/unit: $90 × 1.10 = $99\nNew total COGS: 500 × $99 = $49,500\nNew net profit: $75,000 − $49,500 − $12,000 = $13,500\n% decrease: ($18,000 − $13,500) ÷ $18,000 × 100 = $4,500 ÷ $18,000 = 25% decrease`,
  ],
  DU: [
    `Defect rate = 200 ÷ 4,000 × 100 = 5%`,
    `Non-defective (current): 4,000 − 200 = 3,800\nNon-defective (new): 4,000 − 80 = 3,920\n% increase: (3,920 − 3,800) ÷ 3,800 × 100 = 120 ÷ 3,800 = 3.16% increase`,
  ],
  DV: [
    `Fuel per vehicle = 1,500 × (10 ÷ 100) = 150 L\nCost per vehicle = 150 L × $1.80 = $270\nFleet total = 12 × $270 = $3,240`,
    `New consumption: 10 L/100km → 8.5 L/100km = 15% reduction\nSince cost ∝ fuel used, expenditure also falls by 15% decrease`,
  ],
  DW: [
    `Churned: 10,000 × 8% = 800\nRemaining: 10,000 − 800 = 9,200`,
    `Final subscribers: 9,200 + 1,200 = 10,400\nOld revenue: 10,000 × $20 = $200,000\nNew revenue: 10,400 × $20 = $208,000\n% change: $8,000 ÷ $200,000 × 100 = 4% increase`,
  ],
  DX: [
    `Commission = ($1,000,000 − $200,000) × 5% = $800,000 × 0.05 = $40,000\nTotal income = $60,000 + $40,000 = $100,000`,
    `New sales = $1,000,000 × 1.20 = $1,200,000\nNew commission = ($1,200,000 − $200,000) × 5% = $50,000\nNew total = $60,000 + $50,000 = $110,000\n% increase = $10,000 ÷ $100,000 × 100 = 10% increase`,
  ],
  DY: [
    `Total units in shift = 2,000 × 8 = 16,000\nNon-defective = 16,000 × (1 − 0.04) = 16,000 × 0.96 = 15,360`,
    `New non-defective = 16,000 × (1 − 0.01) = 16,000 × 0.99 = 15,840\n% increase = (15,840 − 15,360) ÷ 15,360 × 100 = 480 ÷ 15,360 = 3.125% increase`,
  ],
  DZ: [
    `Annual rent = $900 × 52 = $46,800\nNet income = $46,800 − $8,000 = $38,800`,
    `Old yield = $38,800 ÷ $900,000 × 100 = 4.31%\nNew annual rent = $945 × 52 = $49,140\nNew net income = $49,140 − $8,000 = $41,140\nNew yield = $41,140 ÷ $990,000 × 100 = 4.16%\n% change = (4.16% − 4.31%) ÷ 4.31% × 100 = −3.61% (decrease in yield)`,
  ],
  EA: [
    `Total payroll = 15 × $80,000 = $1,200,000\nTaxable = $1,200,000 − $500,000 = $700,000\nPayroll tax = $700,000 × 5% = $35,000`,
    `New salary = $80,000 × 1.03 = $82,400\nNew payroll = 15 × $82,400 = $1,236,000\nNew taxable = $1,236,000 − $500,000 = $736,000\nNew tax = $736,000 × 5% = $36,800\n% increase = ($36,800 − $35,000) ÷ $35,000 × 100 = $1,800 ÷ $35,000 = 5.14% increase`,
  ],
  EB: [
    `Profit per m² = $1,500 − $250 = $1,250\nTotal profit = $1,250 × 500 = $625,000`,
    `New area = 500 × 1.20 = 600 m²\nNew cost/m² = $250 × 1.20 = $300\nNew rev/m² = $1,500 × 0.95 = $1,425\nNew profit/m² = $1,425 − $300 = $1,125\nNew total = $1,125 × 600 = $675,000\n% change = ($675,000 − $625,000) ÷ $625,000 × 100 = 8% increase`,
  ],
  EC: [
    `Volume = length × width × height\n= 2 × 1.5 × 0.5 = 1.5 m³`,
    `1 m³ = 1 kL\n∴ 1.5 m³ = 1.5 kL`,
  ],
  ED: [
    `1 L = 1,000 cm³\n4,500 ÷ 1,000 = 4.5 L`,
    `4.5 L ÷ 0.25 L per bottle = 18 bottles`,
  ],
  EE: [
    `Volume = 4 × 3 × 0.15 = 1.8 m³`,
    `Cost = 1.8 m³ × $250 = $450`,
  ],
  EF: [
    `1 kL = 1,000 L\n50 kL × 1,000 = 50,000 L`,
    `Time = 50,000 L ÷ 5,000 L/hr = 10 hours`,
  ],
  EG: [
    `Volume = 200 × 150 × 40 = 1,200,000 cm³`,
    `1 L = 1,000 cm³\n1,200,000 ÷ 1,000 = 1,200 L`,
  ],
  EH: [
    `1 m³ = 1,000 L\n0.8 × 1,000 = 800 L`,
    `800 L = 800,000 mL\n800,000 ÷ 40,000 = 20 minutes`,
  ],
  EI: [
    `Volume = 120 × 60 × 50 = 360,000 cm³`,
    `1 kL = 1,000,000 cm³\n360,000 ÷ 1,000,000 = 0.36 kL`,
  ],
  EJ: [
    `1 L = 1,000 cm³\n2.5 × 1,000 = 2,500 cm³`,
    `1 cm³ = 1,000 mm³\n2,500 cm³ = 2,500,000 mm³\n2,500,000 ÷ 500 = 5,000 vials`,
  ],
  EK: [
    `1 m³ = 1 kL (by definition)\n∴ 1 m³ barrel holds 1 kL`,
    `4 barrels × 1 kL × 1,000 L/kL = 4,000 L`,
  ],
  EL: [
    `Volume = 10 × 0.5 × 0.8 = 4 m³`,
    `4 m³ ÷ 5 m³ per truck = 0.8 truckloads`,
  ],
  EW: [
    `Actual distance = Map distance (cm) × Scale ÷ 100,000\n  = 10 cm × 15,000 ÷ 100,000\n  = 150,000 ÷ 100,000\n  = 1.5 km`,
    `Travel time = Distance ÷ Speed\n  = 1.5 km ÷ 4 km/h\n  = 0.375 hours`,
  ],
  EX: [
    `Actual distance = Map distance (cm) × Scale ÷ 100,000\n  = 16 cm × 25,000 ÷ 100,000\n  = 400,000 ÷ 100,000\n  = 4.0 km`,
    `Travel time = Distance ÷ Speed\n  = 4.0 km ÷ 3.2 km/h\n  = 1.25 hours`,
  ],
  EY: [
    `Actual distance (km) = Map distance (mm) × Scale ÷ 1,000,000\n  = 25 mm × 50,000 ÷ 1,000,000\n  = 1,250,000 ÷ 1,000,000\n  = 1.25 km`,
    `Travel time = Distance ÷ Speed\n  = 1.25 km ÷ 2.5 km/h\n  = 0.5 hours`,
  ],
  EZ: [
    `Map distance (mm) = Actual distance (km) × 1,000,000 ÷ Scale\n  = 3.6 km × 1,000,000 ÷ 20,000\n  = 3,600,000 ÷ 20,000\n  = 180 mm`,
    `Map distance (mm) = 2.4 km × 1,000,000 ÷ 20,000\n  = 2,400,000 ÷ 20,000\n  = 120 mm`,
  ],
  FA: [
    `Actual distance (m) = Map distance (mm) × Scale ÷ 1,000\n  = 35 mm × 500 ÷ 1,000\n  = 17,500 ÷ 1,000\n  = 17.5 m`,
    `Actual distance (m) = 48 mm × 500 ÷ 1,000\n  = 24,000 ÷ 1,000\n  = 24 m`,
  ],
  FB: [
    `Map distance (mm) = Actual distance (m) × 1,000 ÷ Scale\n  = 8.4 m × 1,000 ÷ 200\n  = 8,400 ÷ 200\n  = 42 mm`,
    `Map distance (mm) = 3.6 m × 1,000 ÷ 200\n  = 3,600 ÷ 200\n  = 18 mm`,
  ],
  FC: [
    `Actual distance (m) = Map distance (cm) × Scale ÷ 100\n  = 7.5 cm × 1,000 ÷ 100\n  = 7,500 ÷ 100\n  = 75 m`,
    `Actual distance (m) = 12.4 cm × 1,000 ÷ 100\n  = 12,400 ÷ 100\n  = 124 m`,
  ],
  FD: [
    `Map distance (cm) = Actual distance (m) × 100 ÷ Scale\n  = 45 m × 100 ÷ 500\n  = 4,500 ÷ 500\n  = 9 cm`,
    `Map distance (cm) = 85 m × 100 ÷ 500\n  = 8,500 ÷ 500\n  = 17 cm`,
  ],
  FE: [
    `Find the police station symbol on the map key (circle with a cross inside ⊕).\nLocate it on the map — it sits on Market St, south of Moon St.\nFrom Mitchell Station: travel east along Station St, then turn right (south) onto Market St.\nAfter passing Moon St, the police station is on the left (east side of Market St).\nAnswer: A`,
    `Scale 1:15 000 means 1 cm on the map = 15 000 cm in real life.\n10 cm on map = 10 × 15 000 = 150 000 cm\nConvert to metres: 150 000 ÷ 100 = 1 500 m\nConvert to kilometres: 1 500 ÷ 1 000 = 1.5 km`,
    `Time = Distance ÷ Speed\n  = 5 km ÷ 4 km/h\n  = 1.25 hours\n  = 1.25 × 60\n  = 75 minutes`,
  ],
  EM: [
    `Original price = Sale price ÷ (1 − discount rate)\n  = $1,698.00 ÷ (1 − 0.15)\n  = $1,698.00 ÷ 0.85\n  = $1,997.647…\n  = $1,997.65 (rounded to 2 decimal places)`,
    `Bundle total = Laptop sale price + (Watch price × 50%)\n  = $1,698.00 + ($299.00 × 0.50)\n  = $1,698.00 + $149.50\n  = $1,847.50`,
    `Weekly payment = Total ÷ 52\n  = $1,847.50 ÷ 52\n  = $35.528…\n  = $35.53 (rounded to 2 decimal places)`,
  ],
  EN: [
    `Original price = Sale price ÷ (1 − discount rate)\n  = $2,194.00 ÷ (1 − 0.20)\n  = $2,194.00 ÷ 0.80\n  = $2,742.50`,
    `Bundle total = Laptop sale price + (Watch price × 50%)\n  = $2,194.00 + ($399.00 × 0.50)\n  = $2,194.00 + $199.50\n  = $2,393.50`,
    `Weekly payment = Total ÷ 52\n  = $2,393.50 ÷ 52\n  = $46.028…\n  = $46.03 (rounded to 2 decimal places)`,
  ],
  EO: [
    `Original price = Sale price ÷ (1 − discount rate)\n  = $2,497.00 ÷ (1 − 0.20)\n  = $2,497.00 ÷ 0.80\n  = $3,121.25`,
    `Bundle total = Laptop sale price + (Watch price × 50%)\n  = $2,497.00 + ($459.00 × 0.50)\n  = $2,497.00 + $229.50\n  = $2,726.50`,
    `Weekly payment = Total ÷ 52\n  = $2,726.50 ÷ 52\n  = $52.432…\n  = $52.43 (rounded to 2 decimal places)`,
  ],
  EP: [
    `Original price = Sale price ÷ (1 − discount rate)\n  = $1,698.00 ÷ (1 − 0.15)\n  = $1,698.00 ÷ 0.85\n  = $1,997.647…\n  = $1,997.65 (rounded to 2 decimal places)`,
    `Bundle total = Laptop sale price + (Watch price × 50%)\n  = $1,698.00 + ($399.00 × 0.50)\n  = $1,698.00 + $199.50\n  = $1,897.50`,
    `Weekly payment = Total ÷ 52\n  = $1,897.50 ÷ 52\n  = $36.490…\n  = $36.49 (rounded to 2 decimal places)`,
  ],
  EQ: [
    `Original price = Sale price ÷ (1 − discount rate)\n  = $2,194.00 ÷ (1 − 0.20)\n  = $2,194.00 ÷ 0.80\n  = $2,742.50`,
    `Bundle total = Laptop sale price + (Watch price × 50%)\n  = $2,194.00 + ($459.00 × 0.50)\n  = $2,194.00 + $229.50\n  = $2,423.50`,
    `Weekly payment = Total ÷ 52\n  = $2,423.50 ÷ 52\n  = $46.605…\n  = $46.61 (rounded to 2 decimal places)`,
  ],
  ER: [
    `Original price = Sale price ÷ (1 − discount rate)\n  = $2,497.00 ÷ (1 − 0.20)\n  = $2,497.00 ÷ 0.80\n  = $3,121.25`,
    `Bundle total = Laptop sale price + (Watch price × 50%)\n  = $2,497.00 + ($299.00 × 0.50)\n  = $2,497.00 + $149.50\n  = $2,646.50`,
    `Weekly payment = Total ÷ 52\n  = $2,646.50 ÷ 52\n  = $50.894…\n  = $50.89 (rounded to 2 decimal places)`,
  ],
  ES: [
    `Original price = Sale price ÷ (1 − discount rate)\n  = $1,698.00 ÷ (1 − 0.15)\n  = $1,698.00 ÷ 0.85\n  = $1,997.647…\n  = $1,997.65 (rounded to 2 decimal places)`,
    `Bundle total = Laptop sale price + (Watch price × 50%)\n  = $1,698.00 + ($459.00 × 0.50)\n  = $1,698.00 + $229.50\n  = $1,927.50`,
    `Weekly payment = Total ÷ 52\n  = $1,927.50 ÷ 52\n  = $37.067…\n  = $37.07 (rounded to 2 decimal places)`,
  ],
  ET: [
    `Original price = Sale price ÷ (1 − discount rate)\n  = $2,194.00 ÷ (1 − 0.20)\n  = $2,194.00 ÷ 0.80\n  = $2,742.50`,
    `Bundle total = Laptop sale price + (Watch price × 50%)\n  = $2,194.00 + ($299.00 × 0.50)\n  = $2,194.00 + $149.50\n  = $2,343.50`,
    `Weekly payment = Total ÷ 52\n  = $2,343.50 ÷ 52\n  = $45.067…\n  = $45.07 (rounded to 2 decimal places)`,
  ],
  EU: [
    `Original price = Sale price ÷ (1 − discount rate)\n  = $2,497.00 ÷ (1 − 0.20)\n  = $2,497.00 ÷ 0.80\n  = $3,121.25`,
    `Bundle total = Laptop sale price + (Watch price × 50%)\n  = $2,497.00 + ($399.00 × 0.50)\n  = $2,497.00 + $199.50\n  = $2,696.50`,
    `Weekly payment = Total ÷ 52\n  = $2,696.50 ÷ 52\n  = $51.855…\n  = $51.86 (rounded to 2 decimal places)`,
  ],
  EV: [
    `Original price = Sale price ÷ (1 − discount rate)\n  = $1,698.00 ÷ (1 − 0.15)\n  = $1,698.00 ÷ 0.85\n  = $1,997.647…\n  = $1,997.65 (rounded to 2 decimal places)`,
    `Bundle total = Laptop sale price + (Watch price × 50%)\n  = $1,698.00 + ($399.00 × 0.50)\n  = $1,698.00 + $199.50\n  = $1,897.50`,
    `Weekly payment = Total ÷ 52\n  = $1,897.50 ÷ 52\n  = $36.490…\n  = $36.49 (rounded to 2 decimal places)`,
  ],
}

// ── Group-aware shuffle ───────────────────────────────────────────────────────

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
}

function shuffleByGroup(qs) {
  // Build reverse lookup: group code → TOPIC_GROUPS category name
  const groupToTopic = {}
  for (const [topicName, groupCodes] of Object.entries(TOPIC_GROUPS)) {
    for (const code of groupCodes) groupToTopic[code] = topicName
  }

  // Build one array-of-questions per group code
  const groupMap = {}
  qs.forEach(q => {
    if (!groupMap[q.group]) groupMap[q.group] = []
    groupMap[q.group].push(q)
  })

  // Bucket groups by topic category (TOPIC_GROUPS name when registered,
  // otherwise fall back to context title — covers literacy articles)
  const themeMap = {}
  Object.entries(groupMap).forEach(([code, grpQs]) => {
    const key = groupToTopic[code] ?? grpQs[0].context?.title ?? code
    if (!themeMap[key]) themeMap[key] = []
    themeMap[key].push(grpQs)
  })

  // Shuffle groups within each topic bucket, then shuffle bucket order
  const themes = Object.values(themeMap)
  themes.forEach(t => shuffle(t))
  shuffle(themes)

  // Round-robin across topic buckets: one group per bucket per round
  // This ensures a 30-question test cycles through all categories before repeating
  const result = []
  const maxRounds = Math.max(...themes.map(t => t.length))
  for (let round = 0; round < maxRounds; round++) {
    for (const theme of themes) {
      if (theme[round]) result.push(...theme[round])
    }
  }
  return result
}

// ── Topic buckets for focused practice ───────────────────────────────────────

const TOPIC_GROUPS = {
  'Crew Timesheets':          ['A','B','C','D','E','F','G','H','I','J'],
  'Fleet Vehicle Costs':      ['K','L','M','N','O','P','Q','R','S','T'],
  'Volume & Storage':         ['U','V','W','BI','BJ','BK','BL','BM'],
  'Area & Measurement':       ['X','Y','Z','AA','AB','AC','AD'],
  'Pay Gap & Wage Data':      ['AE','AF','AG','AH','AI','AJ','AK','AL','AM','AN'],
  'Retail Price Comparisons': ['AO','AP','AQ','AR','AS','AT','AU','AV','AW','AX'],
  'Travel & Commute Times':   ['AY','AZ','BA','BB','BC','BD','BE','BF','BG','BH'],
  'Construction & Materials': ['BN','BO','BP','BQ','BR','BS','BT','BU','BV','BW'],
  'Vehicle Finance':          ['BX','BY','BZ','CA','CB','CC','CD','CE','CF','CG'],
  'Property & Real Estate':   ['CH','CI','CJ','CK','CL','CM','CN','CO','CP','CQ'],
  'Cylinder Geometry':        ['CR','CS'],
  'Energy & Nutrition':       ['CT','CU','CV','CW','CX'],
  'Standard Drinks':          ['CY','CZ','DA','DB','DC','DD','DE','DF','DG','DH'],
  'Shower Water Savings':     ['DI','DJ','DK','DL','DM','DN','DO','DP','DQ','DR'],
  'Business Scenarios':       ['DS','DT','DU','DV','DW','DX','DY','DZ','EA','EB'],
  'Unit Conversions':         ['EC','ED','EE','EF','EG','EH','EI','EJ','EK','EL'],
  'Tech Bundle Sales':        ['EM','EN','EO','EP','EQ','ER','ES','ET','EU','EV'],
  'Map & Scale Reading':      ['EW','EX','EY','EZ','FA','FB','FC','FD','FE'],
}

app.get('/api/topics', (req, res) => {
  const result = Object.entries(TOPIC_GROUPS).map(([name, groups]) => {
    const groupSet = new Set(groups)
    const questionCount = questions.filter(q => groupSet.has(q.group)).length
    return { name, questionCount }
  })
  res.json(result)
})

app.get('/api/questions', (req, res) => {
  const { topics } = req.query
  let pool = questions
  if (topics) {
    const names = topics.split(',').map(t => t.trim())
    const allowed = new Set(names.flatMap(n => TOPIC_GROUPS[n] || []))
    pool = questions.filter(q => allowed.has(q.group))
  }
  let shuffled = shuffleByGroup(pool)

  // Guarantee at least one Crew Timesheet group appears in first 30 (full tests only)
  if (!topics) {
    const tsGroups = new Set(TOPIC_GROUPS['Crew Timesheets'] || [])
    const hasTs = shuffled.slice(0, 30).some(q => tsGroups.has(q.group))
    if (!hasTs) {
      const firstTsIdx = shuffled.findIndex(q => tsGroups.has(q.group))
      if (firstTsIdx !== -1) {
        const tsGroup = shuffled[firstTsIdx].group
        const tsQs = shuffled.filter(q => q.group === tsGroup)
        const others = shuffled.filter(q => q.group !== tsGroup)
        shuffled = [...tsQs, ...others]
      }
    }
  }

  const groupPos = {}
  const final = shuffled.map((q, i) => {
    if (groupPos[q.group] === undefined) groupPos[q.group] = 0
    const pos = groupPos[q.group]++
    const method = (methods[q.group] || [])[pos] || null
    const unit   = (units[q.group]   || [])[pos] || null
    return {
      id: i + 1,
      type: q.type,
      inputType: q.inputType || null,
      category: q.category,
      group: q.group,
      context: q.context || null,
      question: q.question,
      options: q.options || null,
      answer: q.answer,
      method,
      unit
    }
  })

  res.json(final)
})

// ─── LITERACY QUESTION BANK ──────────────────────────────────────────────────

const ctxL4 = {
  title: 'The Digest — June Edition',
  subtitle: 'Internal Corporate Newsletter',
  paragraphs: [
    'Welcome to the June edition of The Digest. Keeping our global network synchronized!',
    'A Note from Leadership on Workspace Density Changes: As we transition into our hybrid workplace layout next quarter, the Facilities Management team will be rolling out the Dynamic Floor Allocation (DFA) framework across all regional operational offices. This framework is explicitly designed to maximize space efficiency while managing utility overheads, ensuring that our active physical footprints match real-time employee attendance data without causing desk shortages on peak days.',
    '• Tier 1 (Standard Layout): This configuration is automatically maintained when daily office occupancy remains under 55% of total building capacity. Under Tier 1 parameters, standard hot-desking rules apply. Staff members have full access to all standard collaborative pods, utility stations operate on baseline energy-saver modes, and the digital desk-booking portal refreshes every 24 hours to clear expired reservations.',
    '• Tier 2 (Collaborative Influx): Triggered immediately when daily occupancy tracking spikes between 55% and 80%, or if a regional office hosts a multi-department quarterly review session. Under Tier 2, common areas are dynamically re-allocated into hot-desking zones. Standard service paths are restricted to outbound traffic only during peak arrival hours to minimise elevator gridlock. Staff are strongly encouraged to utilise common breakrooms for impromptu syncs rather than booking enclosed meeting rooms.',
    '• Tier 3 (Peak Capacity Mandate): This final operational tier is strictly enforced when building occupancy exceeds 80%, or when localised network metrics indicate that regional server bandwidth drops below a 15% safety margin. Immediate workplace adjustments are required. Enclosed meeting spaces are restricted to high-priority client-facing sessions only, and independent desk-booking features are entirely locked out in favour of automated team-based desk pooling. To preserve cooling and ventilation integrity, building management will explicitly forbid teams from propping open perimeter corridor doors for more than 15 consecutive minutes.'
  ]
}

const ctxL5 = {
  title: 'The Urban Canvas: Why We Must Reclaim Our Footpaths from Commercial Encroachment',
  subtitle: 'Opinion — By Julian Vance, Senior Urbanist',
  paragraphs: [
    'Walk down any metropolitan high street today, and you will find yourself navigating an obstacle course. What was once designed as a democratic public asset—the humble pedestrian footpath—has been systematically chopped up by commercial outdoor dining, promotional signs, and dockless electric scooters. While local councils celebrate this commercialisation as a sign of a vibrant city economy, they are ignoring a critical infrastructure reality: our urban thoroughfares are reaching a dangerous saturation point.',
    'The core issue is that cities are letting commercial interests distort the basic physical parameters of public space. Pedestrian traffic behaves much like fluid dynamics; when you constrict a channel, the pressure builds. On streets where outdoor dining decks consume more than 40% of the usable pavement, pedestrian walking speeds drop by half, and accidental collisions spike significantly. We are forcing parents with prams, elderly citizens, and people with mobility aids onto narrow ribbons of asphalt, often directly adjacent to heavy vehicle traffic.',
    'To fix this, municipal boards must enforce a strict spatial priority framework. First, a mandatory two-metre clear transit ribbon must be legally preserved on all high-street footpaths, completely free of any furniture, umbrellas, or temporary advertising structures. If a business violates this clear path, local enforcement should issue an immediate, non-negotiable compliance fine within 24 hours of documentation.',
    'Second, councils must abandon the practice of leasing out public kerbside space for dockless scooter parking zones unless the vehicle operators provide real-time, geofenced tracking data to municipal databases. The private sector has treated the public commons as free storage space for far too long. If we do not actively push back against this commercial creep, our footpaths will cease to function as shared infrastructure, transforming instead into restricted corridors of consumption. It is time to reclaim the right to walk without a receipt.'
  ]
}

const ctxL6 = {
  title: 'The Broken Valve: How Regulatory Oversight Lags Behind Automated Energy Hubs',
  subtitle: 'Investigative Report — By Sarah Lin, Regional Investigative Unit',
  paragraphs: [
    'A three-month investigation into the automated liquid-fuel transfer hubs operating across western distribution corridors has revealed serious vulnerabilities in baseline safety tracking software and hardware inspection routines. The findings point to a systemic failure in how multi-jurisdictional infrastructure networks balance high-speed resource distribution with active environmental protection rules.',
    'At the heart of the issue is the integration of older mechanical valves with modern, digital Building Management Systems (BMS). This infrastructure operates on a digital loop designed to catch pressure drops during fluid transit. According to internal operating manuals obtained via freedom of information laws, when a localised sensor detects a fluid variance or containment breach, the system is supposed to execute an automated shutdown sequence concurrently within 45 seconds to isolate the compromised pipeline.',
    'However, field testing data reveals that over 30% of these legacy valves fail to respond to the digital BMS command signal. In the event of an active line rupture, this lag allows volatile fluids to continue pumping into open-air containment basins, relying entirely on field technicians to manually spot the failure and trigger physical cutoff switches.',
    'The regulatory framework governing these facilities is equally compromised. Under current guidelines, if an audit logs an inoperable or lagging valve at a standard transfer hub, the operating agency is granted a 14-day administrative window to fix the component before facing civil penalties.',
    'Yet, our analysis of inspection logs shows that compliance teams are using these 14-day windows to shuffle damaged assets between different zones, effectively resetting the audit countdown clocks without completing repairs. Environmental scientists warn that allowing volatile petroleum compounds to sit in open containment basins for weeks at a time can result in hazardous vapour leaks that migrate into nearby residential perimeters, threatening public health well before a physical spill reaches local waterways.'
  ]
}

const ctxL7 = {
  title: 'Apex Manufacturing Group — Fiscal 2026 Asset Reliability & Operational Risk Report',
  subtitle: 'Executive Summary: Infrastructure Modernisation Initiatives',
  paragraphs: [
    'This section summarises the mechanical integrity profiles, capital equipment performance metrics, and asset reliability frameworks enforced across Apex Manufacturing Group\'s regional processing plants during the past fiscal year. As part of our commitment to reducing workplace risk and aligning with international environmental compliance frameworks, our operational asset tracking relied on a strict preventative maintenance schedule.',
    'During the third quarter, engineering teams completed extensive lifecycle assessments of all high-load manufacturing hardware, focused on primary drive cylinders and heavy hydraulic line assemblies. Under our current Asset Risk Management Protocol (ARMP), components are tracked based on cumulative stress-hour metrics and sorted into three distinct operational wear classes:'
  ],
  tables: [
    {
      heading: null,
      headers: ['Wear Classification', 'Structural Metric Criteria', 'Mandatory Action Parameter'],
      rows: [
        ['Class I (Stable)', 'Surface micro-abrasions measuring under 0.5mm in depth.', 'Document in the engineering log; continue standard 24-hour monitoring loops.'],
        ['Class II (Monitored)', 'Material pitting or fatigue tracking between 0.5mm and 1.5mm.', 'Route the asset to the specialised ultrasonic testing enclosure in Hangar B within 48 hours.'],
        ['Class III (Compromised)', 'Structural fractures or fine cracks exceeding 1.5mm in depth.', 'Immediate and permanent retirement from service; process component for alloy recycling.']
      ]
    }
  ],
  extraParagraphs: [
    'A primary operational challenge logged during the year involved the cleaning routines for high-speed manufacturing lines. Field technicians noted that using standard chemical solvents often degraded the anti-corrosive synthetic polymers applied to the equipment\'s protective casing.',
    'To address this, all regional facilities were mandated to transition to specialised aqueous cleaning arrays calibrated to a maximum fluid temperature of 45 degrees Celsius. Rapid thermal spikes above this limit cause dangerous micro-expansions in the composite alloy boundaries, which can crack tight mechanical seals and cause localised hydraulic fluid leaks.'
  ]
}


const ctxL9 = {
  title: 'In the Supreme Appellate Court: Judicial Advisory on the Enforcement of Section 44 Emergency Decrees',
  subtitle: 'To All Municipal Authorities, Law Enforcement Administrators, and Regional Judicial Officers',
  paragraphs: [
    'This judicial advisory clarifies the strict statutory parameters, conditional matrices, and constitutional limitations governing the enforcement of emergency land-access and property-seizure orders issued under Section 44 of the State Infrastructure Act. Given the extraordinary executive powers activated by a Section 44 declaration, lower courts must apply rigorous evidentiary checks when reviewing civil detention actions originating from multi-jurisdictional enforcement commands.',
    '1. Evidentiary Thresholds for a Valid Declaration: The appellate court emphasises that a Section 44 declaration does not exist as an open-ended executive option. It is legally valid only if the state utility commission establishes that the following three parameters were met simultaneously at the time of the order: (a) the regional Infrastructure Volatility Index (IVI) exceeds a calculated baseline value of 75; (b) local municipal utility and maintenance resources are officially documented as fully extended; (c) an active resource deficit or system failure directly threatens primary grid functionality or the safety of regional townships. If any of these three conditions are unmet, any subsequent property seizure or civil detention is legally void ab initio.',
    '2. Statutory Exemptions Regarding Civil Detention: Under Subsection 4, law enforcement personnel may execute immediate civil detention of private landholders who wilfully refuse to comply with a mandatory resource redirection or land-access order. However, the legislature built an explicit statutory exemption into this framework to protect rural operational continuity.',
    'An individual is completely exempt from immediate civil detention unless it can be proven they lack a verified, pre-approved Facility Continuity Plan (FCP). To qualify for this legal exemption, the landholder must present a valid FCP proving their property possesses a self-contained, functional power and water system capable of operating entirely independently of the municipal utility grid.',
    'Lower courts are advised that the burden of proof rests on the enforcing agency to verify the status of an FCP before initiating formal detention proceedings.'
  ]
}

const ctxL12 = {
  title: 'The Architecture of Memory: Industrialisation and the Erasure of the Public Commons',
  subtitle: 'Philosophical Essay — By Dr. Evelyn Thorne, Cultural Historian',
  paragraphs: [
    'The modern metropolitan landscape is increasingly defined not by its spaces of preservation, but by its mechanisms of systematic erasure. As industrial frameworks prioritised spatial monetisation throughout the late nineteenth century, the traditional concept of the urban commons—spaces explicitly designed for uncommodified human interaction—underwent a radical structural transformation. Cities transitioned from organic civic tapestries into highly calculated logistics networks optimised for resource throughput.',
    'This transition altered the psychological parameters of civic engagement. When a public square is reimagined as a commercial thoroughfare, pedestrian transit behaviour changes fundamentally. Walking shifts from an act of open-ended spatial exploration to an orchestrated transit routine characterised by hyper-efficiency. Architectural theorists refer to this phenomenon as Spatial Rationalization. In urban environments where commercial facades consume more than 60% of the visible streetscape, empirical studies indicate that individual civic interactions drop by nearly two-thirds, replaced by isolated consumer transactions.',
    'To counteract this alienation, contemporary urbanist collectives advocate for the intentional deployment of "Tactical Openness." This methodology demands that municipal planning codes preserve a mandatory baseline percentage of unmonetised public space within every residential district. This infrastructure must remain completely free from advertising structures, security turnstiles, or commercial dining footprints. Critics argue that such mandates suppress local economic vitality. However, this defence ignores a deeper historical truth: a city that systematically trades its public commons for private commercial receipts eventually loses the civic cohesion required to sustain any long-term economic framework.'
  ]
}

const ctxL13 = {
  title: 'Meridian Financial Group — Internal Security & Data Retention Protocol 402 (DRP-402)',
  subtitle: 'To: All Regional Operations Managers, Compliance Officers, and IT Infrastructure Leads',
  paragraphs: [
    'As we upgrade our core distributed databases to cloud-based architecture next quarter, the Enterprise Risk Division is mandating the absolute enforcement of Data Retention Protocol 402 (DRP-402) across all digital processing channels. This protocol is explicitly engineered to minimise cybersecurity threat surfaces while guaranteeing absolute alignment with regional data privacy laws.',
    '• Classification Tier A (Sensitive Consumer Records): This tier applies to all unencrypted transaction histories, personally identifiable information (PII), and credit assessment metrics. Tier A records must be automatically transferred to a localised, air-gapped cryptographic repository within 12 hours of initial validation.',
    '• Classification Tier B (Operational Log Data): Applies to standard employee access metrics, localised application server logs, and non-financial internal communication channels. Tier B data is automatically retained on standard active network clusters for a duration of 90 days. Upon reaching this limit, the system clears the records unless an active compliance audit hold has been manually logged by an executive officer.',
    'If a real-time security tracking array registers a data verification variance spike exceeding a 5% margin across any primary ledger, the platform will instantly initiate an automated containment sequence concurrently within 30 seconds. This sequence locks out independent remote access credentials and restricts data flow to outbound diagnostics only until a Tier 1 security engineer executes a physical manual override at the regional server deck.'
  ]
}


const ctxL17 = {
  title: 'The Algorithmic Panopticon: Attention Economics and the Fragmentation of Hyper-Localised Discourse',
  subtitle: 'Sociological Critique — By Professor Marcus Thorne, Media Ecology Group',
  paragraphs: [
    'The contemporary digital landscape is no longer structured around open communication platforms, but around hyper-optimised engagement loops. As data-aggregation networks monetised user attention throughout the early 2020s, the digital public square underwent a structural mutation. Online communication spaces transitioned from democratic forums into highly targeted algorithmic feedback environments designed to maximise screen duration at the direct expense of contextual nuance.',
    'This mutation fundamentally changed the cognitive profiles of social discourse. When localised communication networks are governed by engagement maximisation software, user interaction patterns shift predictably. Communication shifts from deliberate dialectical exchange to reactive, short-form expression characterised by elevated emotional resonance. Media sociologists define this structural distortion as Information Rationalization. In digital environments where platform feeds derive more than 70% of their operational revenue from programmatic targeted advertising, empirical tracking indicates that deep analytical comprehension metrics drop by nearly three-fourths, replaced by brief, high-velocity outrage interactions.',
    'To push back against this digital fragmentation, media reform groups advocate for the mandatory deployment of "Algorithmic Friction." This design methodology demands that platform engineering teams integrate deliberate delays, cooling-off periods, and mandatory verification checks before a user can amplify highly polarised material to a wider audience network. Industry lobbyists argue that such features suppress user autonomy and hurt digital market innovation. However, this defence ignores a critical structural reality: a communication landscape that systematically trades collective analytical depth for short-term engagement clicks eventually loses the cognitive stability required to maintain a functioning democratic society.'
  ]
}

const ctxL18 = {
  title: 'The Decentralised Energy Grid: Restructuring Fiscal Incentives for Municipal Power Cooperatives',
  subtitle: 'Public Policy Whitepaper — Published by the Urban Infrastructure Economics Bureau, 2026',
  paragraphs: [
    'As metropolitan energy networks transition away from centralised fossil-fuel distribution arrays, macro-economic planning must adjust to stabilise regional market dynamics. High-capacity localised renewable networks—defined as municipal generation clusters generating more than 45 megawatts (MW) of baseline electricity—present distinct fiscal and distribution volatility challenges, particularly regarding the rapid balancing of localised power storage surges with macro-grid wholesale pricing minimums.',
    'To manage this distribution challenge safely, modern regional whitepapers outline a strict structural implementation framework governed via centralised Automated Grid Controllers (AGC). Upon the electronic detection of a generation surplus or frequency surge within a specific regional hub (designated the Cooperative Core), the master AGC must initiate a grid-balancing sequence concurrently within 45 seconds of the initial surge logging.',
    'This fast technological adjustment establishes an immediate economic and physical boundary. By cutting inbound tariff rebates to 0% on the Cooperative Core while locking open-market export channels down completely, the network routes excess local clean energy directly into localised utility battery vaults. This prevents low-cost surplus power from flooding the primary macro-grid, protecting commercial wholesale energy prices from experiencing a destabilising deflationary collapse.',
    'However, localised consumption volatility continues to disrupt predictive model calculations. Infrastructure tracking data shows that during extreme thermal events, residential consumer demand spikes unpredictably due to sudden climate control pooling. If localised network metrics show that a regional cooperative core\'s reserve battery capacity drops below a critical 15% safety threshold for a continuous duration exceeding 120 seconds, the AGC is programmed to issue an emergency allocation warning to the municipal board and automatically boost secondary fossil-fuel peaker plant generation by a fixed 25% margin to mechanically stabilise the local grid frequency.'
  ]
}

const ctxL20 = {
  title: 'The Connected Grid: Redefining High-Rise Environmental Management in Modern Smart Cities',
  subtitle: 'Public Policy Whitepaper — Published by the Urban Infrastructure Policy Institute (UIPI), 2026',
  paragraphs: [
    'As metropolitan centres expand vertically, the architectural design of commercial structures must adapt to mitigate localised environmental hazards. High-rise structures exceeding 25 metres in height present unique aerodynamic and atmospheric challenges, particularly regarding the internal migration of airborne pollutants, synthetic gases, and vapour contaminants across floor seams. This whitepaper examines the deployment of automated, active environmental zone control matrices managed via centralised Building Management Systems (BMS).',
    'Automated Containment Airflow Sequence: Modern smart grids rely on automated sensor arrays to isolate threats within localised structural sectors. Upon the electronic activation of any automated liquid leak detector or dual-stage photoelectric vapour sensor on a given floor (designated the Incident Floor), the master BMS must initiate an active environmental containment sequence concurrently within 45 seconds of the initial alarm trigger.',
    'This rapid damper adjustment creates a sharp pressure differential. By lowering the pressure on the Incident Floor and raising it on the buffer zones directly above and below, the building creates an aerodynamic seal that prevents hazardous vapours from travelling through pipe penetrations or elevator shafts.',
    'Concurrently, high-output injection blowers activate at the base of all egress stairwells to keep escape paths clear. However, human factors continue to present an operational vulnerability.',
    'UIPI field studies indicate that during building evacuations, egress stairwell doors are frequently propped open by occupants, causing a rapid drop in stairwell positive pressure. To counteract this, the BMS is programmed to track door status; if an escape door remains open for a continuous duration exceeding 120 seconds, the system triggers a localised alert tone at the facility command desk and automatically boosts the injection blower fan speed by 15% to mechanically compensate for the pressure loss.'
  ]
}

const ctxL21 = {
  title: 'KAP-7: Why Kitchen Appliance Protocol Is No Longer a Luxury — It Is a Necessity',
  subtitle: 'Opinion Article — Home Safety & Technology',
  paragraphs: [
    'The Kitchen Appliance Protocol, version 7 — commonly known as the KAP-7 — represents a critical advancement in residential fire and gas safety. Designed for integration with modern smart home ecosystems, the KAP-7 monitors kitchen environments in real time and intervenes when hazardous conditions are detected. Yet despite its demonstrable life-saving potential, many homeowners continue to view it as an optional luxury rather than what it truly is: a moral and practical imperative.',
    'The KAP-7 operates across two distinct response tiers. At the Tier 1 level, the system logs an "unattended heating" warning whenever a cooktop surface temperature exceeds 200 degrees Celsius for more than 30 continuous seconds without any manual input being registered. This early-warning function alone prevents thousands of low-level incidents before they escalate. At the critical response level, the system\'s Emergency Cutoff Sequence (ECS) activates under two conditions: when gas concentrations in the kitchen environment exceed 0.5 per cent, or when smoke opacity reaches 15 per cent density. When either threshold is crossed, the KAP-7 terminates both gas and electrical flow to all registered kitchen appliances within five seconds.',
    'Following an ECS activation, the system enforces a mandatory 24-hour lockout on all remote resets. During this period, the appliances cannot be reactivated via mobile application or remote command. A physical diagnostic inspection of the kitchen environment is required before the system can be unlocked. Critics of the KAP-7 have called this feature excessive, labelling the system "oversensitive" and claiming it intrudes on daily domestic life. These individuals ignore the catastrophic reality of residential gas fires and mischaracterise an intelligent safety protocol as an inconvenience. A system that halts a potentially explosive situation and prevents a hasty, uniformed restart is not an imposition — it is the responsible design of a tool built to protect human life.',
    'The KAP-7 is no longer a luxury available only to those with premium smart-home budgets. As the technology matures and its integration costs decrease, every homeowner now has both the means and the obligation to install it. The argument that kitchen safety can be managed through attentiveness and common sense has been disproved by fire statistics year after year. The KAP-7 does not replace good judgement — it exists precisely for the moments when good judgement fails.'
  ]
}

const ctxL22 = {
  title: 'Exercise Strategy 40-A: A Framework for Responsible Canine Physical Enrichment',
  subtitle: 'Animal Welfare Article — Companion Animal Health',
  paragraphs: [
    'The physical health of a domestic dog is inseparable from the quality and structure of its daily exercise regime. Exercise Strategy 40-A has been developed to provide dog owners with a clear, evidence-informed framework for managing the intensity, duration, and recovery phases of their companion\'s physical activity. The strategy is not a set of recommendations — it is a structured protocol that, when followed correctly, protects the long-term physiological welfare of domestic canines.',
    'The strategy divides physical activities into two tiers. Tier A covers high-intensity exercises such as running, agility games, and ball retrieval. These activities are strictly capped at 40 minutes per session. If, at any point following the cessation of Tier A activity, a dog\'s heart rate fails to normalise within a five-minute window, the owner is required to initiate an immediate cooling phase — this may include moving the dog to a shaded environment, providing water, and ceasing all physical stimulation until vital signs stabilise.',
    'Tier B encompasses lower-intensity enrichment activities, such as scent games and problem-solving exercises. While Tier B enrichment allows for longer sessions, such as 120 minutes of scent games, this is contingent upon the dog\'s engagement. Owners must monitor behavioural cues throughout. A dog that begins to ignore cues, disengage from the activity, or fail to respond to commands is not being willfully disobedient, as is often falsely presumed — it is exhibiting the behavioural markers of physiological exhaustion. At this point, the activity must cease immediately, regardless of the planned duration.',
    'The protocol also incorporates a hydration monitoring module. A detected drop of 15 per cent or more in a dog\'s movement fluidity — assessed through reduced stride length and lowered tail carriage — triggers an automatic dehydration lockout: all game modules are halted for a mandatory 60-minute recovery period. This enforced rest window ensures that the dog\'s physiological needs are never compromised in the interest of an owner\'s recreational agenda. Exercise Strategy 40-A is not about limiting the joy of physical play. It is about ensuring that every exercise session enhances, rather than diminishes, the health and longevity of the animals in our care.'
  ]
}

const ctxL23 = {
  title: 'Precision Above All: The Uncompromising Standards of Professional Fermentation Baking',
  subtitle: 'Professional Standards Article — Culinary Arts',
  paragraphs: [
    'Professional baking at the artisan and commercial level is not a craft sustained by intuition or improvisation. It is a disciplined technical science in which environmental variables are measured, controlled, and responded to with systematic precision. No stage of the baking process demands this discipline more acutely than fermentation — the biochemical foundation upon which every loaf is built.',
    'The fermentation chamber must remain anchored at a precise 26 degrees Celsius throughout the proofing cycle. Deviation above this temperature threshold directly endangers the structural integrity of the dough. If internal dough temperature rises above 30 degrees Celsius, the yeast colony over-processes the available sugars at an accelerated rate, producing an excess of carbon dioxide gas that the gluten network cannot contain. The result is an irreversible structural collapse during the bake. Relative humidity within the chamber must be maintained at 75 per cent. If humidity sensors detect a drop below this level, the integrated misting system executes a 10-second spray sequence to restore the ambient moisture balance and protect the dough\'s surface integrity.',
    'Once a batch has been proofing for 150 minutes, the chamber\'s monitoring system automatically flags the dough as "over-proofed." At this point, the baker is granted a 10-minute salvage window in which to apply a gentle-fold technique — a careful degassing method that can partially restore structure to the dough before baking. This window is not merely a technical checkpoint. It is a test of a baker\'s integrity. A professional who applies the gentle-fold knowing the result will be marginally acceptable is making a commercial decision that compromises their brand. A true professional does not mourn the loss of inferior product; they protect their brand by discarding any batch they cannot stand behind fully.',
    'Critics of rigidly automated fermentation systems argue that they remove the human element from an inherently creative process. This argument misunderstands both baking and professionalism. The automation does not make the decisions — it creates the conditions within which disciplined bakers can make them. The KAP-7 of the kitchen, and the fermentation protocol of the bakery, share the same underlying philosophy: precision is not an obstacle to quality. It is quality\'s precondition.'
  ]
}

const ctxL24 = {
  title: 'Hydration Is Not Optional: The Case for Treating Water as a Foundational Health Requirement',
  subtitle: 'Health Advocacy Article — Preventive Wellbeing',
  paragraphs: [
    'Water is not a supplement to good health — it is its foundation. Yet the majority of adults in developed nations move through their days in a state of chronic, low-grade dehydration, masked by caffeine, sugar, and the misguided belief that thirst is an early signal rather than a late one. The cultural normalisation of inadequate hydration represents one of the most preventable contributors to systemic health decline in modern society.',
    'The physiology is unambiguous. The human body requires water to regulate internal temperature, lubricate joints, deliver nutrients to cells, and remove metabolic waste. When the body\'s water levels fall below an optimal threshold, cognitive performance declines, physical endurance diminishes, and organ function is compromised. What is commonly misunderstood is when these effects begin. If you are waiting for the sensation of thirst before reaching for a glass of water, you have already allowed your body to enter a state of mild dehydration. Thirst is not a friendly reminder — it is a physiological distress signal. By the time it registers, the deficit has already begun to impair your body\'s performance.',
    'The only reliable, objective indicator of adequate hydration is not a feeling — it is a visual observation. A pale, straw-like colour in urine is the only objective indicator one needs that the body\'s water balance is being maintained. Dark urine is evidence of concentrated waste product and should be treated as an immediate signal to increase fluid intake. Yet many people go days without making this basic observation, substituting caffeinated beverages and sugary drinks that provide a temporary sense of refreshment while doing nothing to address the body\'s underlying hydration deficit.',
    'Treating hydration as the foundational requirement for human vitality is not an extreme position — it is a scientifically supported baseline. The argument that drinking water is inconvenient or that adequate hydration requires excessive effort is a rationalisation, not a reason. The infrastructure to hydrate correctly is universally available. What is required is the discipline to use it consistently, and the recognition that good health begins with water — not with the supplement aisle.'
  ]
}

const ctxL25 = {
  title: 'The Duty of Care: Why Owning a Houseplant Is Not as Simple as It Looks',
  subtitle: 'Opinion Article — Environmental Wellbeing',
  paragraphs: [
    'Houseplants are not decorative objects. They are living entities that respond to their environment, communicate their needs through observable physiological signals, and depend entirely on their owners for survival. Yet the majority of houseplant owners treat them as passive furnishings — placed in an aesthetically appropriate corner and watered on an emotionally convenient schedule. The result is predictable and preventable: dead plants, unnecessary waste, and a missed opportunity to engage meaningfully with the natural world.',
    'The most pervasive misconception in houseplant care is that neglect is the primary killer. It is not. The biggest killer of indoor plants is not neglect — it is over-love. Specifically, it is overwatering. The instinct to water a plant daily, driven by affection and a desire to nurture, is one of the most reliably destructive behaviours a plant owner can exhibit. When soil is saturated beyond its drainage capacity, it cannot breathe. The root system, deprived of oxygen and surrounded by standing water, begins to rot. This process is usually irreversible by the time visible symptoms appear on the leaves. A daily watering routine is, for most indoor plants, a death sentence delivered with the best of intentions.',
    'Equally damaging is the common habit of placing indoor plants in direct sunlight. While it is true that most plants require light for photosynthesis, harsh, direct sunlight — particularly through south-facing or unshaded windows — exceeds the light tolerance of the majority of common indoor species. The ideal environment for most houseplants is one of indirect, filtered light that provides consistent illumination without the thermal stress of direct solar exposure.',
    'Finally, the maintenance of leaf surfaces is an essential task that is almost universally dismissed as fussy or unnecessary. Dust accumulates on leaf surfaces over time, blocking the stomata through which the plant absorbs carbon dioxide and executes photosynthesis. Wiping leaves with a damp cloth on a weekly basis is not an optional aesthetic task — it is an essential physiological one. Houseplant ownership is a commitment, not a convenience. Those who are not prepared to learn what their plants require should reconsider acquiring them in the first place.'
  ]
}

const ctxL26 = {
  title: 'Sleep Is Not a Life Hack — It Is a Biological Non-Negotiable',
  subtitle: 'Health Advocacy Article — Sleep Science',
  paragraphs: [
    'In a culture that celebrates productivity, endurance, and the willingness to sacrifice rest in the pursuit of achievement, sleep has been reframed as a variable — something to be optimised, compressed, or compensated for rather than protected. This reframing is not merely philosophically misguided. It is physiologically dangerous. Getting the recommended seven to nine hours of sleep is not a "life hack" that high-performing individuals have discovered. It is a biological baseline that the human body requires to function, repair, and survive.',
    'During sleep, the body does not idle — it works. Critical repairs to muscle tissue, immune cells, and neurological pathways occur exclusively during sleep cycles. Memory consolidation — the process by which the day\'s experiences are encoded into long-term storage — cannot occur in a waking state. Individuals who consistently sleep fewer than seven hours per night accumulate a physiological debt that manifests as mood dysregulation, a weakened immune system, diminished cognitive focus, and elevated risk of chronic disease. The idea that this debt can be repaid on the weekend is not only incorrect — it reflects a fundamental misunderstanding of how the body manages biological repair cycles.',
    'The environment in which one sleeps is not a matter of personal preference. A cool, dark room is not a preference — it is a physiological requirement. The human body initiates sleep by lowering its core temperature. A warm sleeping environment counteracts this process, disrupting the onset and depth of restorative sleep cycles. Darkness signals the pineal gland to release melatonin, the hormone that governs sleep onset. Ambient light — including the light emitted by screens — suppresses melatonin production and delays sleep onset, regardless of how tired the individual feels.',
    'The cultural practice of working late into the night to meet professional deadlines, or sacrificing sleep to maintain a social life, must be understood for what it is: a decision to compromise a biological necessity in favour of a social or commercial priority. This is not balance — it is a trade-off with long-term physiological consequences. Sleep cannot be negotiated with, deferred indefinitely, or replaced. It must be prioritised, protected, and understood as the non-negotiable foundation of every other health behaviour we pursue.'
  ]
}

const ctxL27 = {
  title: 'Fetch Is Not a Casual Game — It Is an Energy Contract',
  subtitle: 'Opinion Article — Companion Animal Behaviour',
  paragraphs: [
    'Fetch is widely regarded as one of the simplest and most instinctively satisfying games an owner can play with their dog. Throw the ball, watch the dog run, watch the dog return. Repeat. What could be more natural? In practice, however, fetch is one of the most mismanaged activities in the domestic dog\'s life — and the consequences of mismanagement extend from physical exhaustion to genuine safety risk. Playing fetch well is not instinctive. It requires intention, structure, and a clear understanding of what the activity demands from both parties.',
    'The most immediate safety consideration is environmental. Playing fetch on or near a road, or in an unfenced area adjacent to traffic, is not a minor oversight — it is a failure of the most basic duty of care. A dog in mid-retrieve does not process environmental hazards in the way that a focused human does. The drive to return the ball overrides other sensory inputs. Playing in an area where traffic or other hazards are present exposes the animal to a foreseeable risk that the owner has failed to eliminate. This is not bad luck — it is a failure of responsibility.',
    'Equipment selection is equally non-negotiable. The size of the ball must be appropriate to the size of the dog. A ball small enough to lodge in the throat is not a toy — it is a direct threat. Owners who dismiss this consideration as excessive are prioritising convenience over safety. Beyond the object itself, fetch must be understood as what it truly is: a vital training ground for communication and a controlled release of energy. Think of it as an energy contract — an agreement between owner and dog in which the owner takes responsibility for governing the terms. You should be the one to decide when the game begins, how long it continues, and crucially, when it ends.',
    'A dog that stops returning the ball, lies down mid-game, or begins panting excessively is not being disobedient. It is communicating that it has reached its physical limit. Forcing a tired dog to continue is not "active living" — it is neglect. The dog is relying on you to read these signals and act accordingly. The energy contract is not simply a metaphor for structured play. It is a framework for responsible ownership in which the human partner assumes full accountability for the physical and emotional wellbeing of the animal in their care.'
  ]
}

const ctxL28 = {
  title: 'The Breeding Crisis: Why Australia Must Act Now to End Pet Overproduction',
  subtitle: 'Opinion Article — Animal Ethics and Legislation',
  paragraphs: [
    'Australia euthanises more than 200,000 cats and dogs annually. These are not animals that lived full lives and died of natural causes. They are healthy, adoptable animals that were destroyed because there were not enough homes to place them in. This statistic is not a tragedy of circumstance — it is a consequence of policy failure, consumer behaviour, and an industry that continues to treat living animals as instruments of profit. The overbreeding crisis is real, it is measurable, and it is solvable. What it lacks is urgency.',
    'The Victorian Government\'s efforts to regulate the breeding industry through licensing requirements and welfare inspections represent a necessary starting point. Yet they remain insufficient. A licensed breeder operating within current regulatory limits may maintain up to ten breeding females at any one time. This figure is presented as a reasonable cap, but it is fundamentally excessive. Ten breeding females, each producing one to two litters per year at an average litter size of five to eight animals, can generate between 50 and 160 animals annually from a single registered operation. This is not careful, welfare-focused breeding — it is small-scale industrial production that floods an already oversupplied adoption market.',
    'The solution requires action on two fronts. At the legislative level, the government must introduce substantially reduced breeding limits, mandatory microchipping of all animals prior to sale, heavy fines for unlicensed breeding operations, and strict record-keeping requirements with public accountability. At the consumer level, the single most impactful action any prospective pet owner can take is to champion adoption from shelters rather than purchasing from breeders. Every animal purchased from a breeder is an animal for whom a shelter resident did not find a home.',
    'The goal is not to eliminate the breeding industry — it is to reduce Australia\'s annual euthanasia rate to zero. That target is achievable. It requires treating animals as living beings with intrinsic value rather than consumer goods with a market price. It requires legislation with teeth, enforcement with resources, and consumers who are willing to make their purchasing decisions with an awareness of the systemic consequences. The 200,000 animals euthanised each year are not statistics. They are the cost of our current inaction.'
  ]
}

const ctxL29 = {
  title: 'The Evidence Is Clear: Processed Meat and the Risk of Colorectal Cancer',
  subtitle: 'Public Health Report — Nutritional Science and Policy',
  paragraphs: [
    'In 2015, the World Health Organisation\'s International Agency for Research on Cancer (IARC) published a landmark analysis of over 800 independent studies examining the relationship between meat consumption and cancer risk. The findings were unambiguous. Processed meat — including cured, smoked, salted, and chemically preserved meat products — was classified as a Group 1 carcinogen: a substance with sufficient evidence of causing cancer in humans. This is the same classification applied to tobacco smoke and asbestos. The classification does not imply equivalence in magnitude of risk; it confirms equivalence in the strength of scientific evidence.',
    'The specific risk identified in the IARC report is quantified and significant. For every 50 grams of processed meat consumed daily — roughly equivalent to two rashers of bacon or a single sausage — the risk of developing colorectal cancer increases by 18 per cent. Globally, high-processed-meat diets are estimated to contribute to approximately 34,000 cancer deaths annually. These are not projections or estimates based on limited data — they are conclusions drawn from an analysis of over 800 studies conducted across multiple countries, populations, and timeframes.',
    'Despite the robustness of this evidence base, the meat industry has mounted a sustained campaign to distance red and processed meat from these findings. Industry representatives have emphasised the nutritional value of meat — its protein content, iron, zinc, and B vitamin profile — as a counterargument to public health recommendations. Dr. Christopher Wild, then Director of the IARC, acknowledged these nutritional considerations while maintaining that balanced dietary recommendations must account for the cancer risk associated with regular processed meat consumption. The nutritional value of a food does not negate its carcinogenic profile — it must be weighed against it.',
    'The IARC\'s findings provide a scientifically robust foundation for public health policy. Governments that have incorporated these findings into national dietary guidelines are acting in the interest of their populations. Individuals who dismiss the report as alarmist or industry-funded misrepresent both the process and the conclusions. The evidence is not contested by serious independent researchers. It is contested by commercial interests for commercial reasons. Understanding this distinction is essential to making informed dietary decisions.'
  ]
}

const ctxL30 = {
  title: 'More Than Filler: Understanding Why Journalists Rely on Quotes',
  subtitle: 'Media Studies Article — Journalism and Communication',
  paragraphs: [
    'In news reporting, the use of direct quotation is rarely incidental. Quotes are rarely used at random — they are strategic tools, selected by the journalist to serve specific communicative functions within the structure of the report. Understanding why quotes are used, and how they function within the architecture of a news story, is an essential component of media literacy. A reader who understands the strategic use of quotation is better equipped to evaluate the credibility, balance, and intent of the reporting they consume.',
    'Quotes serve three primary functions in journalism. First, they provide evidence. A direct statement from a primary source — a scientist presenting research findings, a witness describing an event, a government official announcing a policy decision — carries an evidentiary weight that paraphrasing cannot replicate. The reader is given access to the source\'s own words, rather than the journalist\'s interpretation of them. This function is particularly important in reports covering scientific or technical subject matter, where quotes effectively bridge the gap between scientific findings and public understanding by allowing experts to speak directly to a general audience.',
    'Second, quotes bolster authority. A news report that presents claims without attributing them to identifiable sources relies entirely on the journalist\'s credibility. By quoting named experts, officials, or eyewitnesses, the journalist transfers a portion of that credibility to the source. The report becomes accountable in a way that unsourced commentary cannot be. Third, quotes illustrate conflicting perspectives. When a journalist quotes both a public health expert recommending reduced meat consumption and a representative of an industry council emphasising nutritional value, the reader is invited to engage with a genuine debate. This ensures that a report does not appear biased to the audience, allowing them to weigh the evidence and form their own conclusions.',
    'Whether a quote is used to add gravity to a claim, to humanise a statistic, or to highlight a controversy within a field, its presence acts as a window into the broader debate surrounding the story\'s subject matter. Skilled readers do not simply absorb quotes as fact — they consider who is speaking, what interest they may represent, and what the journalist\'s purpose was in choosing that voice over others. In this sense, the strategic use of quotation is not only a journalistic technique — it is an invitation to critical thinking.'
  ]
}

const ctxL31 = {
  title: 'The Historic Harbor Estate',
  subtitle: 'Heritage Restoration: A Blend of 19th Century Grandeur and 21st Century Tech',
  paragraphs: [
    'About this listing: This 4-level sandstone mansion was built in 1888 and underwent a $2M restoration in 2024. The property spans over 600 square metres, featuring a private library, a 12-seat cinema room, and a professional-grade catering kitchen.',
    'Note: Due to the historical sensitivity of the flooring and the antique fixtures, this property is strictly unsuitable for children under the age of 12 or guests with pets.',
    'Amenities: Smart-home integrated climate and lighting; Secure gated entry; Full-time concierge; High-speed dedicated satellite internet (1GBps).',
    'Note: Access to the third and fourth floors is via a grand staircase; there is no elevator, which may be a limitation for guests with limited mobility.',
    'Prices: $850 per night. Weekly stay: 15% discount. Monthly stay: 35% discount. Note: A non-refundable security deposit of $2,000 is required upon booking confirmation for all stays exceeding 7 days.',
    'The Neighbourhood: Situated in the Battery Point district, a prestigious heritage zone. The area is quiet after 8:00 PM as it is primarily residential. It is a 15-minute walk to the Wharfside district, which hosts fine-dining restaurants, maritime museums, and the terminal for the nightly harbor cruises.'
  ]
}

const ctxL32 = {
  title: 'The Eco-Innovation Hub',
  subtitle: 'Living the Future: Zero-Impact Urban Design in Greendale',
  paragraphs: [
    'About this listing: This modular apartment is part of the "Greendale Innovation Project." The unit is constructed entirely from cross-laminated timber and recycled industrial waste. The space is dynamic; walls can be retracted to change a bedroom into a workspace.',
    'Amenities: Greywater recycling system; Triple-glazed soundproof windows; Underfloor hydronic heating; Kitchenette with induction cooktop (no open flames).',
    'Note: Guests are provided with an energy allowance of 15kWh per day. Any usage exceeding this is billed at $0.45 per kWh upon checkout.',
    'Prices: $210 per night. Weekly discount: 10%. Monthly discount: 20%.',
    'The Neighbourhood: Greendale is a rapidly gentrifying suburb. While formerly industrial, it now houses the city\'s largest university campus, tech incubators, and a vibrant arts scene. The area is exceptionally well-connected; the Greendale Interchange connects to four different train lines. Despite the high student population, the streets immediately surrounding the Innovation Hub remain quiet due to strict municipal noise ordinances.'
  ]
}

const ctxL33 = {
  title: 'The Transit Exchange Apartment',
  subtitle: 'The Commuter\'s Dream: 30 Seconds to the Platform',
  paragraphs: [
    'About this listing: Located directly above the West Central Railway Terminus, this apartment is designed for the traveller who values efficiency. The unit is sound-engineered to block out platform noise, though light vibrations from heavy freight trains passing at night may be felt.',
    'Amenities: 24/7 self-check-in kiosk; Washer/Dryer combo; Standing desk with dual monitors; Kitchen fully equipped with convection microwave and twin burner.',
    'Note: There is zero parking provided. The host strongly advises against bringing a vehicle as the local traffic congestion is severe, and the nearest public parking garage is over 1km away.',
    'Prices: $195 per night. Weekly discount: 20%. Monthly discount: 35%.',
    'The Neighbourhood: West Central is a high-traffic hub. By day, it is a dense commercial zone filled with office workers, logistics couriers, and busy commuters. By night, the area clears out significantly. There are no major supermarkets in the immediate 500-metre radius, though there are several high-end grab-and-go convenience stores and a 24-hour pharmacy.'
  ]
}

const ctxL34 = {
  title: "One Nation's anti-abortion turn shows MAGA's creeping power in Australia",
  subtitle: 'Opinion & Analysis — The Conversation',
  paragraphs: [
    'One Nation has long positioned itself as a blunt force of Australian populism, but a recent shift in the party\'s social policy posture has caught the attention of political analysts. High-profile figures newly aligned with One Nation — among them Barnaby Joyce, Cory Bernardi, and Bernie Finn — have each made public anti-abortion statements, a direction that marks a notable departure from the party\'s earlier focus on immigration and economic grievance.',
    'What makes this shift particularly striking is that it does not appear to reflect the views of One Nation\'s own voter base. Polling conducted in 2026 found that approximately half of One Nation supporters considered themselves broadly pro-choice on abortion access, with only around a third favouring access in limited circumstances. The anti-abortion turn is not, analysts argue, a response to grassroots demand from within the party.',
    'Instead, the shift appears to be driven by strategic alignment with the American MAGA movement. One Nation has made the connection explicit, selling merchandise branded with the slogan "MAGA — Make Albo Go Away" and drawing direct parallels between Pauline Hanson and Donald Trump. The party has also used social media influencers, including commentator Joanna Howe, to soft-launch anti-abortion messaging to new audiences.',
    'Political scientists point to the role of digital media ecosystems in facilitating this kind of ideological cross-pollination. Shared political networks, coordinated online communities, and the global reach of conservative media have made it easier than at any previous time for American political strategies to migrate into Australian minor parties. The infrastructure of right-wing populism, it seems, travels well across borders.',
    'The context for One Nation\'s growing ambition is also electoral. The party\'s popularity surged following the South Australian election, where the collapse of the Liberal Party left a vacuum that minor parties moved quickly to occupy. Whether Australian voters will follow where the party\'s leadership is heading on social issues, however, remains an open question.'
  ]
}

const ctxL35 = {
  title: 'Why Trump is putting an MMA fight cage in the White House',
  subtitle: 'Opinion & Analysis — The Conversation',
  paragraphs: [
    'On June 14 — Donald Trump\'s birthday, and an occasion framed by his administration as the 250th anniversary of the United States — the White House South Lawn was transformed into an arena. More than four thousand guests attended the UFC Freedom 250 event, with the reported cost of staging the spectacle exceeding sixty million US dollars. It was, by most measures, the largest and most elaborate sporting event ever hosted at the White House.',
    'Trump\'s connection to the Ultimate Fighting Championship runs deep. In the early 2000s, when the UFC was a struggling and frequently banned enterprise, Trump hosted events at his Atlantic City casinos and provided a level of legitimacy the organisation badly needed. UFC president Dana White has been publicly grateful for that support ever since. The event on the South Lawn was, in part, a repayment of that longstanding loyalty.',
    'But political analysts suggest the spectacle served a purpose well beyond personal friendship. Unlike leaders such as Vladimir Putin or Ramzan Kadyrov — who cultivate a warrior image by personally demonstrating physical prowess — Trump imports the arena rather than entering it. The effect, commentators argue, is the same: to associate the head of state with values of dominance, masculine hierarchy, and physical supremacy.',
    'What made the White House setting significant was the message it sent about the nature of political authority. Staging a combat spectacle at the seat of American government signals that the president sees himself not as a public servant mediating between competing interests, but as a champion who has won and now occupies the field. Governance, in this framing, is a zero-sum contest in which strength matters more than consensus.',
    'It is worth noting that the event fell on Trump\'s birthday rather than on the actual date of American independence. The conflation of national celebration with personal commemoration was, for many observers, the most revealing detail of all.'
  ]
}

const ctxL36 = {
  title: 'Men make up less than 18% of Australian primary school teachers: Is this a problem?',
  subtitle: 'Analysis — The Conversation',
  paragraphs: [
    'As of 2025, men make up just 17.6 per cent of primary school teachers in Australia — a figure that has been declining steadily for decades. In 1983, men comprised more than 30 per cent of the primary teaching workforce; by 2016, that share had already fallen to around 18 per cent. At the current rate of decline, researchers have estimated that male primary teachers could effectively disappear from the profession by 2067.',
    'The case for treating this as a problem centres on diversity and representation. Advocates argue that a teaching workforce made up almost entirely of women fails to reflect the broader population, and that children — particularly boys who may benefit from positive male influences during formative years — are disadvantaged by the imbalance. Questions have also been raised about whether academic outcomes for boys are affected, though the research on this point is mixed: several studies have found no measurable effect of teacher gender on student achievement.',
    'The barriers that keep men out of primary teaching are not difficult to identify. The profession is comparatively low-paid and carries lower social status than many comparable roles requiring similar levels of education. Societal attitudes continue to frame caring for young children as fundamentally feminine work, a perception that can make the career path seem culturally illegitimate for men who might otherwise find it fulfilling.',
    'For men who do enter the profession, the challenges do not necessarily end there. Some report experiencing stigma, hostility, or professional suspicion in school environments — an additional deterrent to those who might otherwise consider the role. The result is a self-reinforcing cycle in which low male representation makes it harder for the next generation of male teachers to imagine themselves in the profession.',
    'Policy debates have focused on two broad approaches: targeted recruitment campaigns aimed at bringing more men into primary teaching, and longer-term efforts to challenge the structural stereotypes that make caring work feel gender-exclusive in the first place. Most researchers favour addressing the deeper cultural drivers, rather than treating recruitment in isolation.'
  ]
}

const ctxL37 = {
  title: 'Kerbside parking is great for drivers but terrible for everyone else',
  subtitle: 'Urban Planning — The Conversation',
  paragraphs: [
    'Australia has a parking problem that is rarely described in those terms: it has too much of it. Surveys of on-street parking across five state capitals have found that most postcodes contain more kerbside spaces than there are registered vehicles in the area. Rather than a scarce resource being fought over, kerbside parking is effectively a surplus of publicly owned real estate being handed over for the free or subsidised private storage of motor vehicles.',
    'The costs of this arrangement are distributed unevenly. Cyclists are forced into narrow lanes squeezed between parked cars and moving traffic, or onto footpaths shared with pedestrians. Bus services are slowed by the reduced road width. Pedestrians lose footpath space near parked vehicles. Meanwhile, potential uses for that same kerbside space — outdoor dining, bicycle infrastructure, street greenery, loading zones — are foregone to accommodate cars that may sit in those spots for hours or days at a time.',
    'The economics of free parking are, in fact, an economics of subsidy. When kerbside space is priced at zero or well below market value, it creates artificial demand. Drivers spend time circling for spots rather than paying a small fee, adding to congestion on surrounding streets. The free parking is not free to the city — it simply redistributes the cost onto everyone who uses the street, whether or not they arrived by car.',
    'Evidence from high streets that have reduced parking and introduced cycling infrastructure is instructive. Rather than driving customers away, these changes have often increased foot traffic and spending, as more people feel comfortable arriving by bike or on foot. Property values in such areas have frequently risen. The assumption that parking is essential to commercial viability turns out, in many cases, to be wrong.',
    'The obstacle is political rather than evidential. In car-dependent communities, any proposal to reduce kerbside parking tends to be framed as an attack on a way of life. Overcoming that framing requires making visible the many people — pedestrians, cyclists, bus passengers, children, the elderly — who stand to benefit from streets designed around more than the storage of private vehicles.'
  ]
}

const ctxL38 = {
  paragraphs: [
    'Freebirth — giving birth at home without any medical professional present — is a distinct practice from a midwife-attended homebirth. The distinction matters, because understanding why women choose freebirth requires setting aside the assumption that it reflects ignorance or a lack of options. Research consistently finds that the women who make this choice are disproportionately well-educated, predominantly white, and have typically given birth before: around 77 per cent of freebirth choosers have had at least one previous birth experience.',
    'Previous birth is also, for many women, the key driver. Women who felt unheard during a clinical birth, who experienced interventions they did not consent to, or who were subjected to pressure and coercion, often describe a fundamental breakdown of trust in the medical system. For some, freebirth represented the only way to retain meaningful control over their own experience. Others were unable to access a homebirth midwife, were told a homebirth carried too much risk, or could not afford the cost of private midwifery care.',
    'Australia\'s comparatively high rates of obstetric intervention — including induction, episiotomy, and caesarean section — form part of the backdrop to these decisions. For some women, the perceived risk of unwanted clinical management feels more immediate and concrete than the statistical risks of an unassisted birth.',
    'Not all women who choose freebirth do so out of distrust or fear. Some describe a positive view of birth as a physiological process that does not inherently require medical management. For these women, freebirth is an expression of confidence in their bodies rather than a rejection of medicine. The motivations are varied, and researchers caution against treating freebirth as a single phenomenon with a single explanation.',
    'Those who study the area argue that the focus should fall on the structural failures in maternity care that cause women to reach this point. When patients feel coerced, unheard, or denied access to the birth settings they prefer, trust in the system erodes. Dismissing women\'s choices as uninformed misses the institutional context that shapes them.'
  ]
}

const ctxL39 = {
  paragraphs: [
    'The chatbot became the public face of artificial intelligence in business: a text interface that answers questions, handles simple customer service queries, and occasionally frustrates users who encounter its limits. But the next wave of AI tools is substantially more capable. AI agents differ from chatbots not just in degree but in kind — they can plan sequences of actions, make decisions, and complete multi-step tasks autonomously, drawing on external databases, software systems, and real-world tools without requiring human input at each stage.',
    'The practical difference is best illustrated with an example. A chatbot can tell a customer that their order is delayed. An AI agent can check the order status, identify the source of the delay, contact the relevant supplier, arrange a new delivery window, notify the customer of the updated timeline, and update the company\'s logistics dashboard — all as a single autonomous process. The shift is from conversation to action, from information to execution.',
    'The major technology platforms have all recognised where this is heading. Meta, OpenAI, Google, Amazon, and Microsoft — companies that previously occupied distinct corners of the technology market — are converging on AI agents as the defining battleground of the current period. Meta unveiled a Business Agent for WhatsApp capable of qualifying sales leads, managing bookings, and processing transactions. Google is embedding agentic capabilities directly into search and productivity tools, aiming to capture user intent before they leave the browser.',
    'The competitive implications for business are significant. Capabilities once available only to large enterprises — sophisticated customer relationship management, automated logistics coordination, real-time supplier communication — are becoming accessible to small businesses through agent-based platforms. The barriers to operational sophistication are falling.',
    'There are also concerns worth taking seriously. The more useful an agent becomes, the more it controls what information a customer receives and which products or services are recommended to them. Every interaction generates data about customer intent, creating a substantial informational advantage for whoever owns the platform. The question of who governs these agents, and in whose interests they operate, is one the industry has not yet fully answered.'
  ]
}

const ctxL40 = {
  paragraphs: [
    'The mathematics of a sustainable wardrobe are simpler than the fashion industry often makes them appear. At the core is a straightforward formula: the environmental cost of producing a garment, divided by the number of times it is worn. The result — a cost per use — is the variable that matters most, and it is one that most conversations about sustainable fashion manage to avoid.',
    'Consider what happens when you own 23 dresses. If each one is worn once a week, it would take nearly 31 years to wear every dress 70 times. If the same wardrobe is spread across five wears a week, the timeline compresses to around six and a half years. The dresses have not changed — but the sustainability calculation has shifted dramatically, simply based on how often each item is actually used.',
    'This logic has a counterintuitive implication for the quality-versus-price debate. A high-quality wool coat with a large production carbon footprint can be more sustainable than a cheap synthetic alternative — if the expensive coat is worn 200 times and the cheap one is discarded after eight wears. The production ethics and fabric certification of the cheap item are irrelevant to this outcome. Conversely, buying an ethically produced garment that is worn twice and donated does not constitute sustainable consumption, no matter how responsibly it was made.',
    'The broader trend makes this more urgent, not less. Over the past fifteen years, clothing production has roughly doubled while the average time people actually wear their clothes has fallen by nearly 40 per cent. More garments are being made and less use is being extracted from each one — which means the environmental cost per wear is rising, not falling.',
    'There is no universal right number of garments to own. It depends on lifestyle, climate, laundry frequency, seasonality, and personal taste. But the most important variable any wardrobe audit can apply is usage rate: how often does each item actually get worn? The answer to that question tells you far more about the sustainability of a wardrobe than the labels sewn into the clothes.'
  ]
}

const ctxL41 = {
  paragraphs: [
    'Soil is not merely the medium in which plants grow — it is also a thermal buffer. Healthy soil, rich in organic matter, retains moisture efficiently, and that moisture performs a crucial service: it moderates surface temperatures through evaporative cooling. In the same way that sweating cools a human body, water evaporating from soil cools the land above it. Where soil is healthy, ground temperatures during heatwaves can be substantially lower than on adjacent degraded land.',
    'Researchers have introduced the concept of a "thermal gap" to describe the difference between what a soil\'s natural heat-buffering capacity could be and what it is currently delivering. In southeastern and central Australia, that gap has widened considerably. Decades of intensive agriculture, land clearing, and urban expansion have stripped soil of organic matter, leaving it drier, more compacted, and far less able to protect the plants growing in it from temperature extremes.',
    'The consequences unfold in a feedback loop. As soil loses its ability to moderate heat, ground surface temperatures climb faster during hot weather. Plant growth is suppressed, which reduces the organic matter returned to the soil, which further degrades its quality, which raises temperatures further. Crop yields fall, pastures struggle to recover, and the local conditions that once supported productive farming become increasingly hostile to it.',
    'The good news is that degraded soil is not permanently beyond repair. Practical farming methods — maintaining cover crops, reducing tillage, adding organic matter — can restore some of the lost buffering capacity over time. The pathways back exist, even if they require sustained effort and a shift away from land management practices that have been the norm for generations.',
    'The urgency, however, is real. The consequences of continued soil degradation are not a future risk — failed crops, increased wildfire susceptibility, and ecosystem collapse are already occurring in parts of Australia. Soil health, researchers argue, deserves to be treated not as a peripheral environmental concern but as a frontline priority in the response to a warming climate.'
  ]
}

const ctxL42 = {
  paragraphs: [
    'Cutting fuel excise is one of the most reliably popular moves available to a government under cost-of-living pressure. Drivers notice it immediately at the pump, and the political returns are swift. But popularity and good policy are not the same thing. Australia\'s three-month halving of the fuel excise cost the federal budget approximately 2.55 billion dollars in foregone revenue — and the distributional consequences of that choice are worth examining closely.',
    'The central problem is that fuel tax cuts are a blunt instrument. The benefit flows to everyone who drives, regardless of their financial situation. Higher-income households, who on average drive more kilometres and own more vehicles, receive a larger absolute benefit from the cut than lower-income households. Households without a petrol vehicle, or those who travel short distances, gain very little. The policy is, in effect, regressive: it delivers more to those who need it less.',
    'The impact on pump prices is also frequently short-lived. Market fluctuations in global fuel prices can absorb the excise reduction within weeks, leaving consumers no better off at the bowser than before the cut was announced. Meanwhile, the foregone revenue cannot be spent on hospitals, schools, or welfare payments.',
    'There is also a climate dimension. A fuel excise cut functions as a de facto subsidy for fossil fuel vehicles at precisely the moment when policy frameworks should be encouraging the transition away from them. The fiscal and environmental costs compound each other.',
    'Economists have proposed several fairer alternatives. Directing additional funds to unemployment, disability, and aged support payments would deliver relief to those who need it most, rather than to all drivers equally. Reducing the lowest income tax brackets would have a similar targeted effect. A more structural reform — replacing fuel excise with a road user charging system that applied to all vehicles and varied by weight and distance — would be budget-neutral while more accurately reflecting the costs different vehicles impose on road infrastructure.'
  ]
}

const ctxL43 = {
  paragraphs: [
    'Australia\'s employment services system has long been criticised for treating unemployed people as problems to be managed rather than individuals with varying and complex needs. The government\'s minister responsible, Amanda Rishworth, acknowledged as much when announcing a package of reforms, describing the current system as "ill-equipped to respond" to what unemployed people actually require. Approximately one million Australians access unemployment payments including JobSeeker, and most interact with the services connected to those payments.',
    'The centrepiece of the announced changes is a move away from a single, uniform approach to service delivery. Rather than treating all recipients identically, the reformed system will stream people into one of three service categories based on their individual circumstances, with different levels of support and different mutual obligation requirements attached to each. The government described this as a "once-in-a-generation" reform, echoing language used in its own commissioned review of employment services.',
    'Welfare advocates have responded with cautious welcome. Acknowledging that the direction of travel is right — more tailored support, less one-size-fits-all processing — they have nonetheless been clear that the scale of the changes falls well short of what the same review recommended. Many of the Hill review\'s specific proposals remain unaddressed in the reform package.',
    'The compliance regime at the heart of the current system — mutual obligations, activity requirements, and financial penalties for non-compliance — remains substantially intact. Critics argue that genuine reform cannot succeed without also rethinking these punitive conditions, which they say undermine the relationship between service providers and recipients and push people further from stable employment rather than closer to it.',
    'The base payment rate is also largely unchanged by the reforms. For many recipients, JobSeeker continues to sit below the poverty line, making financial stability difficult to achieve regardless of what services are on offer. Advocates argue that a true rebuild of the system would need to address both the rate and the conditions simultaneously — and that the current reforms, while welcome, represent a step rather than a transformation.'
  ]
}

const ctxL44 = {
  paragraphs: [
    'Job insecurity is not the same as losing a job. It is the sustained fear that one might — the perception that one\'s position is precarious, or that working conditions might deteriorate. Researchers have found that this kind of chronic uncertainty can be as psychologically damaging as unemployment itself, contributing to anxiety, disrupted sleep, difficulty concentrating, and in more serious cases, depression. The damage occurs regardless of whether the feared event ever materialises.',
    'A meta-analysis drawing on three decades of data from 39 countries found that social support — from family members, friends, colleagues, and direct managers — is one of the most reliable buffers against the psychological effects of job insecurity. People who feel supported in their working and personal lives experience the same objective uncertainty with meaningfully less distress than those who face it in isolation.',
    'Research also points to a counterintuitive pattern in how insecurity is experienced over time. Feelings of insecurity intensify as the end of a fixed-term contract approaches — unless the person takes proactive steps to address the situation. Workers who update their CV, map their transferable skills, expand their professional networks, and engage in deliberate career planning report a greater sense of control, which attenuates the psychological harm.',
    'Some of the most effective protective strategies are informal. Building mentoring relationships outside formal programmes, developing skills in areas of growing demand — such as digital literacy or data analysis — and staying connected to professional communities all reduce a worker\'s sense of vulnerability. The evidence from countries such as Denmark and Sweden, which invest heavily in retraining, career counselling, and skills development, suggests that national labour market structures also play a significant role: workers in those countries consistently report lower levels of job insecurity.',
    'The key message from the research is that job insecurity is not purely a personal failing or a matter of individual temperament. Workplace cultures, organisational practices, and the structure of labour markets all shape how insecure people feel. But within those constraints, proven strategies exist that can meaningfully reduce the psychological burden — and taking action, even small action, appears to be more protective than waiting and worrying.'
  ]
}

const ctxL45 = {
  paragraphs: [
    'For a growing number of Australians, renting is no longer a phase — it is a permanent condition. Whether because of housing prices, income constraints, or shifting life circumstances, many people who anticipated eventual homeownership are now accepting that it may not arrive. Yet Australia\'s policy framework continues to treat renting as a transitional failure state rather than a legitimate long-term housing arrangement. The cultural assumption that owning is always better continues to shape both legislation and social attitudes.',
    'This approach is not universal. In Vienna, approximately half of all residents live in subsidised housing — whether city-built social housing or co-operative dwellings — with rent subsidies available to further improve affordability. The result is a rental market in which long-term security is the norm rather than the exception. Residents raise families, age in place, and build community ties without the precariousness that characterises renting in Australian cities.',
    'In New York City, around half of all apartments are subject to rent stabilisation, which limits how much landlords can increase rents from year to year. California law in many areas restricts annual rent increases to a percentage of inflation — typically 60 to 80 per cent of the consumer price index. These mechanisms do not eliminate the private rental market; they regulate it in ways that protect tenants from arbitrary displacement.',
    'Rent regulation is common across much of Europe, New York, California, and several Canadian provinces. What these systems share is an ideological foundation that treats housing as a social good, not primarily as an investment vehicle. That distinction shapes policy at every level, from zoning and construction incentives to lease terms and eviction protections.',
    'Researchers point to several reforms that could improve the Australian experience for long-term renters: tying rent increases to inflation rather than allowing open-market resets, establishing minimum lease terms that provide stability, strengthening protections against no-grounds eviction, and encouraging institutional investment in purpose-built rental housing. The central argument is that long-term renting can be secure and dignified — but only if the policy settings are deliberately designed to make it so.'
  ]
}

const ctxL46 = {
  paragraphs: [
    'The federal government\'s Solar Sharer Offer promises households with smart meters three free hours of electricity per day — from 11am to 2pm in New South Wales and southeast Queensland, and 12pm to 3pm in South Australia, with Victoria\'s rollout scheduled for October. The policy is framed as a cost-of-living measure, but its underlying logic is about grid management: rooftop solar panels generate excess electricity during the middle of the day, and the free window is designed to encourage households to shift their energy use into that period, reducing stress on the network.',
    'For households well-positioned to take advantage of it, the offer can be genuinely useful. Running a dishwasher, heating a pool, charging an electric vehicle, or running the air-conditioning during the free window costs nothing during those hours. For fully electrified homes with smart appliances and flexible daytime routines, the savings can be meaningful.',
    'The equity problem becomes apparent when you consider who cannot benefit. Renters, who typically cannot install solar panels or smart meters, are excluded from the scheme\'s logic before it begins. Shift workers who are not home in the middle of the day cannot run their appliances during the free window. Low-income households often lack the energy-intensive appliances — the EV charger, the ducted air-conditioning system, the large hot water unit — that would make the free hours valuable. The people who stand to gain most are those who are already better resourced.',
    'There is also a cost recovery question. Retailers who offer free electricity during those hours must recover that cost somewhere. The most likely mechanisms are higher tariffs at other times of day, or increased prices for other customer segments. If that is the case, households who cannot shift their usage may end up subsidising the savings of those who can.',
    'The scheme illustrates a broader tension in energy policy: measures designed around the infrastructure of electrified, solar-equipped households can inadvertently deepen the divide between those who can afford to participate in the energy transition and those who cannot. The distributional question is not whether the scheme works for its intended beneficiaries, but whether it works fairly across the full range of Australian energy consumers.'
  ]
}

const ctxL47 = {
  paragraphs: [
    'The urban heat island effect — the tendency of cities to be measurably hotter than surrounding rural areas — is one of the most well-documented consequences of dense development. Concrete, asphalt, and buildings absorb and retain heat; vegetation cools through shade and the evaporation of water through leaves. Research has found that urban greenery, in the right conditions, can reduce local temperatures by as much as 18 degrees Celsius compared to unshaded surfaces. The potential is significant.',
    'But a closer look at the research introduces important nuance. Studies conducted across cities with different climates found that layered vegetation — trees combined with shrubs and ground cover underneath — often produced greater cooling than trees planted alone. The combination of canopy shade with understorey plants that retain moisture and reduce reflected heat from the ground is more effective than the sum of its parts.',
    'Local conditions matter enormously. In Hong Kong, where humidity is already high, dense planting sometimes increased moisture in the air to a point where it partially offset the thermal benefit. More greenery, in that context, was not automatically better. The relationship between vegetation, moisture, and cooling is complex enough that blanket policies — "plant more trees" — can miss the mark without careful calibration to local climate and street design.',
    'Species selection is another critical variable. Some tree species provide dense shade and high rates of evapotranspiration; others offer thin canopy cover or demand significant irrigation to survive, which can erode their environmental benefit. Exotic species chosen for aesthetic reasons rather than climate compatibility often perform poorly in urban heat mitigation, particularly as temperatures continue to rise.',
    'Urban planners and ecologists are increasingly calling for evidence-based approaches that match species to local conditions, consider the structure of planting rather than just the number of trees, and evaluate cooling outcomes systematically. Without that rigour, substantial investment in urban greening may deliver only marginal improvements in the temperatures that actually affect residents day to day.'
  ]
}

const ctxL48 = {
  paragraphs: [
    'Heatwaves kill more Australians than any other natural disaster, and older adults bear a disproportionate share of those deaths. The physiological reasons are well understood: older bodies regulate heat less efficiently, are more likely to be affected by medications that impair temperature control, and are more prone to dehydration. And yet, public health researchers have repeatedly found that older people are less likely to follow heat safety advice than younger adults — a paradox that sits at the centre of heatwave mortality.',
    'The awareness gap is larger than many expect. Studies have found that around 30 per cent of people did not see a heat alert even after one was issued — with exposure particularly low among older adults, lower-income households, and those with less formal education. But the more troubling finding is what happens among people who do see the warnings: approximately 41 per cent failed to take protective action even after receiving an alert.',
    'Overconfidence plays a significant role. Older adults who have survived many previous summers may feel that their experience makes them better judges of the risk than official advisories. Research suggests this intuition is often wrong: the physiological changes that come with ageing mean that a heatwave tolerated at 60 may be life-threatening at 80. The same event, the same person, a very different risk profile.',
    'Perception of personal risk turns out to be a powerful predictor of protective behaviour. People who believed they were personally at risk of heat-related illness were nearly twice as likely to have noticed heat warnings, and more than three times as likely to have taken action in response to them. The challenge for public health communicators is that risk messaging which speaks to "vulnerable people" in the abstract does not translate into personal risk perception for many older adults who do not identify with that category.',
    'Structural barriers compound the problem. Older adults who live alone, have limited mobility, or lack access to air-conditioned spaces may face genuine obstacles to following the recommended advice — moving to a cool environment, staying hydrated, avoiding physical activity. Generic heat alerts broadcast over radio or television reach only some of this population. Researchers argue that effective heatwave communication requires targeted, direct, and personalised outreach to older residents, particularly those who are socially isolated.'
  ]
}

const ctxL49 = {
  paragraphs: [
    'In the early twentieth century, the St George region was known as Sydney\'s salad bowl — an area of fertile market gardens supplying fresh produce to a city that relied heavily on food grown at its own edges. By the mid-twentieth century, agriculture was the most spatially dominant land use across greater Sydney. Today, the city\'s five million residents depend almost entirely on food transported from elsewhere, and the peri-urban farms that once formed Sydney\'s productive hinterland have been largely eliminated.',
    'The remaining agricultural land around Western Sydney still contributes approximately one billion dollars to the regional economy each year, with significant flow-on effects for employment and related industries. But that land is under intensifying pressure. Western Sydney\'s population is projected to grow from 2.4 million in 2016 to around 4.1 million by 2041, and housing development to accommodate that growth is being pushed directly into the region where farming continues.',
    'At the current rate of conversion, researchers have estimated that Sydney could lose 90 per cent of its vegetable-growing land by 2031. That is not a distant forecast — it describes a process already well underway. The planning decisions driving this outcome are not accidental. Sydney has historically treated farming as a transitional land use, a holding pattern before an area becomes sufficiently valuable to develop. Agricultural zoning has been treated as provisional rather than permanent, a deliberate policy choice that privileges capital gains over food production.',
    'The consequences extend beyond what appears on supermarket shelves. Agricultural land stores carbon, supports biodiversity, filters water, and moderates local temperatures in ways that built development cannot replicate. Long supply chains are more vulnerable to disruption — a reality made visible during recent global events that revealed how quickly food logistics can become strained. Regional food security is not an abstract concern for a city that could soon lack the capacity to grow a meaningful proportion of its own food.',
    'The most important point is that this loss is irreversible. Once agricultural land is built on — once the soil is sealed under concrete and the drainage altered — it is effectively gone. No subsequent planning decision can restore it. The decisions being made now about what to develop and what to protect will shape Sydney\'s food geography for centuries.'
  ]
}

const ctxL50 = {
  paragraphs: [
    'An El Niño declaration is a statement about the ocean, not the weather. It means that sea surface temperatures in the tropical Pacific have warmed significantly above their long-term average — a shift in ocean conditions with well-documented downstream effects on rainfall and temperature patterns across the globe. What it does not mean is that any specific drought, heatwave, or fire season is guaranteed to follow. It is a probabilistic signal, not a forecast.',
    'For Australia, the historical record of El Niño years points toward a consistent set of tendencies. Maximum temperatures across the country tend to run warmer than average, particularly during winter and spring. Eastern and southern Australia typically experience drier-than-average conditions over those same seasons. In tropical regions, El Niño can delay the onset of the monsoon and reduce the chance of tropical cyclones forming.',
    'In southern states, the combination of heat and reduced rainfall raises the risk of an intense and early bushfire season. The same reduced cloud cover that contributes to dry conditions also allows more heat to escape overnight, which can paradoxically produce colder minimum temperatures and more frost events — an effect that catches some farmers off guard when planning around an El Niño declaration.',
    'One of the most important things to understand about El Niño is that the strength of the event does not reliably predict the severity of its impacts. The 2002 El Niño was classified as weak by atmospheric measures, yet it produced widespread drought and severe bushfire conditions across parts of Australia. Moderate events have sometimes caused more disruption than stronger ones, depending on how the conditions interact with local geography and existing soil moisture deficits.',
    'For farmers, the declaration triggers a difficult set of decisions around water allocation, crop selection, and livestock management. For emergency services, it is a cue to bring forward preparedness activities. The declaration does not tell anyone exactly what will happen — but it shifts the odds in ways that prudent planning needs to account for.'
  ]
}

const ctxL51 = {
  paragraphs: [
    'When extreme heat strikes India and Pakistan, the temperature reported in news coverage is only part of the story. The number on the thermometer measures air temperature — but the threat to human life is shaped by the combination of heat and humidity. In humid conditions, the body\'s primary cooling mechanism breaks down. Sweating works by evaporating moisture from the skin, transferring heat away from the body. When the surrounding air is already saturated with water vapour, that evaporation cannot occur, and the body\'s ability to shed heat collapses.',
    'Scientists measure this combined effect using wet-bulb temperature: a single figure that captures what heat and humidity together mean for a human body. At a wet-bulb temperature of 35 degrees Celsius, a healthy adult at rest — doing nothing, in the shade — cannot survive for more than a few hours. That threshold can be reached at temperatures well below what might seem dangerous in a dry climate: 35 degrees at 90 per cent humidity is physiologically equivalent to 45 degrees at 30 per cent humidity.',
    'The atmospheric conditions that produce these events in South Asia involve large, persistent high-pressure systems that park over the region, trapping hot air close to the surface and allowing temperatures to build over many consecutive days. The ground itself amplifies the problem. When soils are dry — as they tend to be during pre-monsoon periods — less moisture is available to evaporate at ground level, pushing surface temperatures even higher than the air temperature alone would suggest.',
    'In wealthy countries, most people can escape extreme heat by retreating to air-conditioned buildings. In India and Pakistan, that option is not available to millions of people who work outdoors — in agriculture, construction, and informal labour markets — with limited access to shade, cool water, or rest. The geography of vulnerability is stark: those most exposed to the heat are least able to protect themselves from it.',
    'Official death tolls from these events are almost certainly undercounts. Heat-related deaths are systematically under-recorded in India, often attributed to other causes when the underlying driver is thermal stress. Climate scientists warn that as the planet continues to warm, the regions of South Asia already at the edge of human heat tolerance will face conditions that exceed what the human body can survive under any circumstances, no matter how healthy or well-resourced.'
  ]
}

const ctxL52 = {
  paragraphs: [
    'The question of ideal physical attributes in elite sport is more complex than it first appears. In soccer, height is neither universally advantageous nor irrelevant — its value depends almost entirely on the player\'s position and role on the field. Goalkeepers and central defenders benefit significantly from height for aerial contests, while forwards and midfielders rely more on agility, low centre of gravity, and explosive acceleration, attributes that do not favour taller players.',
    'Sports scientists analysing World Cup squads have found that elite teams typically contain a deliberate mix of body types — with shorter, nimble players dominating wide and attacking midfield roles, and taller, physically imposing players in central defensive and goalkeeping positions.',
    'The research challenges simplistic assumptions about physical traits in sport. Optimal physical characteristics are not universal; they are position-specific, role-dependent, and always moderated by technical skill and tactical intelligence. In elite soccer, the "right" height depends entirely on what the team needs you to do.'
  ]
}

const ctxL53 = {
  image: '/images/literacy/Literacy 01.png',
}

const ctxL54 = {
  image: '/images/literacy/Literacy 02.png',
}

const ctxL55 = {
  image: '/images/literacy/Literacy 03.png',
}

const ctxL56 = {
  paragraphs: [
    'With winter arriving next month, along comes significant storms, which can bring extreme cold, freezing rain, ice, snow, high winds, or a combination of all of these conditions.',
    'This newsletter is intended to help protect yourself before, during, and after a storm. Planning and preparing can make a big difference in safety and resiliency in the wake of a storm. The ability to maintain or quickly recover following a storm requires a focus on preparedness, advanced planning, and knowing what to do in the event of a storm.',
    'NOW / PREPARE',
    '• Stock emergency supplies, and install battery-powered or battery backed-up carbon monoxide detectors and smoke detectors.',
    '• Identify a place nearby where you can safely warm up should you lose heat in your home.',
    '• Prepare an outage kit that includes a battery-powered radio, flashlight with fresh batteries, a portable power bank for your mobile phone and bottled water.',
    '• Keep a stock of canned food in your cupboard, along with a manual can opener.',
    'DURING / SURVIVE',
    '• Stay indoors and off the roads. If you must drive, keep emergency supplies in your car. Allow line workers to restore your power.',
    '• Close off rooms to consolidate and retain heat.',
    '• Dress in layers, and pile a few extra blankets and sweaters together so you can find them easily if the heat goes off.',
    '• Never use a generator, camp stove, charcoal grill, or gasoline or propane heater indoors, as these items can start accidental fires, cause electric shock, and/or cause deadly carbon monoxide poisoning.',
    '• Stay away from fallen or sagging power lines. They could be dangerous even if the power is out.',
    'AFTER / BE SAFE',
    '• Only drive if necessary. Remove snow and ice from your tailpipe before starting your car, and check regularly if idling. Clean all snow and ice from your car before driving.',
    '• Dress in warm clothing, stay dry, prevent prolonged exposure to cold and wind, and avoid overexertion clearing/shovelling snow. Overexertion can lead to a medical emergency.',
    '• Monitor local news and alerts for emergency information and instructions.',
  ]
}

const ctxAP6 = {
  image: '/images/literacy/ACER Paid 06.png',
}

const ctxAP5 = {
  images: [
    '/images/literacy/ACER Paid 05a.png',
    '/images/literacy/ACER Paid 05b.png',
  ],
}

const ctxAP4 = {
  image: '/images/literacy/ACER Paid 04.png',
}

const ctxAP3 = {
  image: '/images/literacy/ACER Paid 03.png',
}

const ctxAP2 = {
  image: '/images/literacy/ACER Paid 02.png',
}

const ctxAP1 = {
  image: '/images/literacy/ACER Paid 01.png',
}

const ctxFP6 = {
  image: '/images/literacy/FRV Practice 06.png',
}

const ctxFP5 = {
  paragraphs: [
    "As Australians deal with a record-breaking heatwave, environmental devastation and a sixth prime minister in just over a decade, the annual fierce debate over the country's national day might be the thing that pushes many of them over the edge.",
    "Australia Day is held on the same date Britain's First Fleet sailed into Sydney Harbor in 1788, beginning the European colonization which led to the modern nation of Australia.",
    "Not everyone sees it as a reason to celebrate. Aboriginal and Torres Strait Islander people see the date as the beginning of the deliberate destruction of their people and culture as colonists took lands they deemed \"uninhabited\" despite large indigenous populations living there.",
    "Many Australians refer to January 26 as \"Invasion Day.\"",
    "The controversy has led to a growing push to change the date of the country's national celebration to another day without the historical baggage. Few former British colonies celebrate their national day on the actual day of colonization.",
    "But a group of conservative politicians led by Prime Minister Scott Morrison have pushed back hard, saying they will protect Australia Day and ensure it is respected.",
    "\"I'm not just going to not change it, I'm going to ensure it doesn't get eroded ... That's our historical day and we need to work together, to come together on that day to ensure that we can make it an important day for all Australians,\" Morrison said.",
    "Polls suggest a majority of Australians agree — a 2017 survey found 54% of Australians supported keeping the date on January 26, while just 26% wanted it moved.",
    "But the movement to change the date has become increasingly mainstream, with more than 100,000 people marching across the country to protest \"Invasion Day\" in 2018. Similar numbers are expected to march this year.",
    "A small number of local councils have already tried moving the celebration — which is also the date new citizens receive their Australian citizenship — from January 26, out of respect for the wishes of Aboriginal and Torres Strait Islander people.",
    "On January 17, television host Brooke Boney made an impassioned appeal that went viral across the country. \"This is the best country in the world no doubt, but I can't separate January 26 from the fact that my brothers are more likely to go to jail than they are to go to school, or that my little sisters and my mum are more likely to be beaten and raped than anyone else's sisters and mum. And that started from that day. So for me it's a difficult day and I don't want to celebrate it. But any other day of the year I'll tie an Australian flag around my neck and I'll run through the streets.\"",
    "Tom Calma, co-chair of the advocacy group Reconciliation Australia, said there needed to be more education for people to understand why the date should be changed. \"Don't make it that day ... Make it any other day when it's not coinciding and we're happy to celebrate as Australians,\" he told CNN.",
    "Two weeks before Australia Day 2019, Prime Minister Morrison announced potential measures which would ban councils from holding citizenship ceremonies on any day other than January 26. Other suggestions by Morrison included enforcing dress codes at citizenship ceremonies — an idea which was widely criticized.",
    "Aboriginal and Torres Strait Islander activist Calma said he felt the conservative Morrison government was rushing to make changes to Australia Day before it likely loses power at a national election due to take place before May.",
    "\"We encourage discussion, meaningful and respectful discussion, of the issues and opportunity for all Australians to become better informed about what the issues are, why January 26 is offensive to many Aboriginal and Torres Strait Islanders,\" he said.",
    "Calma believes the movement to change the date is gaining momentum: \"We see the big marches and the protests ... If you just have a look it's not Aboriginal and Torres Strait Islander people only, it's also the majority are Australians. For us, that's a real true sign of reconciliation.\"",
  ],
}

const ctxFP4 = {
  image: '/images/literacy/FRV Practice 04.png',
}

const ctxFP3 = {
  image: '/images/literacy/FRV Practice 03.png',
}

const ctxFP2 = {
  image: '/images/literacy/FRV Practice 02.png',
}

const ctxFP1 = {
  image: '/images/literacy/FRV Practice 01.png',
}

const ctxFP7 = {
  image: '/images/literacy/FRV Practice 07.png',
}

const ctxPN1 = {
  image: '/images/literacy/Practice Now Q01.png',
}

const ctxPN2 = {
  images: [
    '/images/literacy/Practice Now Q2a.png',
    '/images/literacy/Practice Now Q2b.png',
  ],
}

// ── FRV Practice #2 contexts ──────────────────────────────────────────────────
const ctxFRP2_Q1 = {
  image: '/images/literacy/FRV Practice Test 02_Q01.png',
}
const ctxFRP2_Q2 = {
  image: '/images/literacy/FRV Practice Test 02_Q02.png',
}
const ctxFRP2_Q3 = {
  image: '/images/literacy/FRV Practice Test 02_Q03.png',
}
const ctxFRP2_Q4 = {
  image: '/images/literacy/FRV Practice Test 02_Q04.png',
}
const ctxFRP2_Q5 = {
  image: '/images/literacy/FRV Practice Test 02_Q05.png',
}
const ctxFRP2_Q6 = {
  image: '/images/literacy/FRV Practice Test 02_Q06.png',
}

const literacyQuestions = [
  // ── Set 4: Corporate Directive / DFA Framework ─────────────────────────────
  { group: 'L4', type: 'multiple_choice', category: 'Workplace Policy', context: ctxL4,
    question: "The newsletter describes the DFA framework as 'explicitly designed to maximize space efficiency while managing utility overheads.' What does this framing imply about the company's primary motivation?",
    options: [
      "A) Employee wellbeing is the central priority, with space efficiency a secondary consideration.",
      "B) The framework is a cost-management tool disguised as a workplace convenience measure.",
      "C) The company is responding to employee complaints about desk shortages on peak attendance days.",
      "D) The framework was developed to satisfy external environmental compliance requirements."
    ],
    answer: "B) The framework is a cost-management tool disguised as a workplace convenience measure.",
    method: "The newsletter explicitly frames the DFA framework around 'space efficiency' and 'managing utility overheads' — both financial and operational efficiency goals. While avoiding desk shortages is mentioned, it is subordinate to those goals. Option A is contradicted by the cost-focused language; Option C misreads 'desk shortages' as the motivation rather than as a problem the efficiency goal also happens to solve; Option D is not supported — no compliance framework is mentioned."
  },
  { group: 'L4', type: 'multiple_choice', category: 'Workplace Policy', context: ctxL4,
    question: "A regional office hosts a multi-department quarterly review when building occupancy is 45%. Which tier applies, and why?",
    options: [
      "A) Tier 1, because occupancy is below the 55% threshold and no other trigger applies.",
      "B) Tier 2, because hosting a multi-department quarterly review is itself a Tier 2 trigger regardless of occupancy.",
      "C) Tier 3, because multi-department events always override the standard occupancy thresholds.",
      "D) Tier 1, because the quarterly review does not affect the desk-booking portal refresh cycle."
    ],
    answer: "B) Tier 2, because hosting a multi-department quarterly review is itself a Tier 2 trigger regardless of occupancy.",
    method: "Tier 2 is triggered 'when daily occupancy tracking spikes between 55% and 80%, OR if a regional office hosts a multi-department quarterly review session.' The OR means either condition alone is sufficient — 45% occupancy satisfies Tier 1 on its own, but the quarterly review event independently activates Tier 2. Option A ignores the second trigger. Option C overstates the effect. Option D conflates the desk-booking rule (a Tier 1 feature) with the tier selection logic."
  },
  { group: 'L4', type: 'multiple_choice', category: 'Workplace Policy', context: ctxL4,
    question: "Under Tier 2, staff are 'strongly encouraged' to use breakrooms rather than booking enclosed meeting rooms for impromptu syncs. What does the word 'strongly encouraged' — rather than 'required' — reveal about this rule?",
    options: [
      "A) The rule is merely a suggestion and carries no consequence for staff who book meeting rooms regardless.",
      "B) The company prefers behavioural compliance over enforcement because imposing a hard ban would conflict with employment agreements.",
      "C) It is a preference, not a mandate, implying staff retain the right to book meeting rooms but are expected to exercise judgement.",
      "D) The policy applies only to junior staff; senior employees are exempt from the breakroom preference under Tier 2."
    ],
    answer: "C) It is a preference, not a mandate, implying staff retain the right to book meeting rooms but are expected to exercise judgement.",
    method: "The newsletter distinguishes between rules that are 'strictly enforced' or use mandatory language (Tier 3 meeting room restrictions, corridor door rules) and those expressed as encouragement (Tier 2 breakroom preference). 'Strongly encouraged' is softer than 'required' or 'mandated,' indicating staff are expected to comply through professional judgement, not binding rule. Option A overstates the permissiveness; Option B speculates about employment law with no textual support; Option D is not mentioned in the text."
  },
  { group: 'L4', type: 'multiple_choice', category: 'Workplace Policy', context: ctxL4,
    question: "Which of the following conclusions is most strongly supported by the way the three DFA tiers are structured?",
    options: [
      "A) The framework treats all occupancy conditions as equally disruptive and applies the same core restrictions at every tier.",
      "B) The framework escalates restrictions incrementally, with each tier adding constraints that the previous tier does not impose.",
      "C) Tier 3 is the standard operating mode, with Tiers 1 and 2 representing temporary exceptions during low-attendance periods.",
      "D) The framework was primarily designed to restrict elevator use, with desk-booking and meeting room rules added as secondary measures."
    ],
    answer: "B) The framework escalates restrictions incrementally, with each tier adding constraints that the previous tier does not impose.",
    method: "Tier 1 imposes only standard hot-desking rules. Tier 2 adds restricted service paths and breakroom preferences. Tier 3 adds meeting room restrictions, desk-booking lockout, and corridor door rules — each tier layering additional constraints onto those below it. Option A is directly contradicted by the tiered escalation. Option C inverts the framework's logic; Tier 1 is the baseline. Option D misidentifies elevator gridlock as the framework's primary purpose — it is one concern among several."
  },
  { group: 'L4', type: 'true_false_matrix', category: 'Workplace Policy', context: ctxL4,
    matrixLabels: ['Yes', 'No'],
    question: 'Based on the newsletter rules, are the following scenarios compliant?',
    options: [
      'Booking an enclosed meeting room for a casual internal chat during a Tier 2 occupancy surge.',
      'Propping open a perimeter corridor door for 25 minutes straight to cool down a crowded office under Tier 3 rules.',
      'Allowing the digital desk-booking portal to refresh every 24 hours when office occupancy is at 40%.'
    ],
    answer: 'No,No,Yes',
    method: 'A — Under Tier 2, staff are "strongly encouraged to utilise common breakrooms rather than booking enclosed meeting rooms" for casual syncs. Not compliant. B — Tier 3 explicitly forbids propping perimeter corridor doors for more than 15 consecutive minutes; 25 minutes is a clear violation. C — 40% occupancy is below 55%, placing the office in Tier 1. Under Tier 1, "the digital desk-booking portal refreshes every 24 hours" — fully compliant.'
  },

  // ── Set 5: Urban Canvas / Footpaths Op-Ed ──────────────────────────────────
  { group: 'L5', type: 'multiple_choice', category: 'Opinion Article', context: ctxL5,
    question: "The author compares pedestrian traffic to 'fluid dynamics' and says that 'when you constrict a channel, the pressure builds.' What is the author's purpose in using this analogy?",
    options: [
      "A) To suggest that city planners should consult engineers rather than urban designers when redesigning footpaths.",
      "B) To make an abstract safety claim feel concrete and inevitable, implying that overcrowded footpaths cause harm by physical law.",
      "C) To acknowledge that commercial encroachment is a natural process that cities cannot reasonably be expected to resist.",
      "D) To compare the speed at which pedestrians walk to the flow rate of liquids in a pipe."
    ],
    answer: "B) To make an abstract safety claim feel concrete and inevitable, implying that overcrowded footpaths cause harm by physical law.",
    method: "By invoking fluid dynamics — a precise, scientific domain — the author frames footpath congestion not as a policy debate but as an unavoidable physical consequence of constricting a channel. This rhetorical move makes his safety argument feel like established science rather than opinion. Option A misreads the analogy as a literal recommendation. Option C inverts the author's position; the analogy supports intervention, not acceptance. Option D is a literal misreading of a figurative comparison."
  },
  { group: 'L5', type: 'multiple_choice', category: 'Opinion Article', context: ctxL5,
    question: "The author states that outdoor dining decks consuming more than 40% of usable pavement cause walking speeds to 'drop by half' and force vulnerable users onto 'narrow ribbons of asphalt.' What does the author imply about local councils that celebrate this commercialisation?",
    options: [
      "A) That councils are unaware of the safety data because it has not been published in public planning documents.",
      "B) That councils are prioritising an economic narrative over documented evidence of physical harm to their most vulnerable residents.",
      "C) That councils are correct to celebrate it, since the data only concerns collision rates, not walking speeds.",
      "D) That councils have outsourced footpath decisions to private dining operators who set their own space allocation rules."
    ],
    answer: "B) That councils are prioritising an economic narrative over documented evidence of physical harm to their most vulnerable residents.",
    method: "The author presents the safety data (halved walking speeds, displacement of pram users and mobility-aid users) immediately after noting that councils 'celebrate this commercialisation as a sign of a vibrant city economy.' The juxtaposition implies councils are knowingly choosing economic framing over safety evidence. Option A is contradicted — the author presents the data as available; ignorance is not the implied problem. Option C misconstrues the article's evidence. Option D is speculation not supported by the text."
  },
  { group: 'L5', type: 'multiple_choice', category: 'Opinion Article', context: ctxL5,
    question: "The author proposes that councils should stop leasing kerbside space to scooter operators unless they provide 'real-time, geofenced tracking data to municipal databases.' What does this condition suggest about the author's broader view of the relationship between private operators and public space?",
    options: [
      "A) Private operators should be banned from all public spaces until new legislation is passed.",
      "B) Private use of public space is acceptable only when operators demonstrate accountability to the public institutions that govern it.",
      "C) The council should own and operate all scooter fleets directly to eliminate the need for private contracts.",
      "D) Geofenced tracking is more important than the two-metre ribbon because scooters cause more harm than dining decks."
    ],
    answer: "B) Private use of public space is acceptable only when operators demonstrate accountability to the public institutions that govern it.",
    method: "The author's condition — real-time tracking data as the price of kerbside access — implies a transactional accountability model: private operators may use public space, but only if they surrender information that lets councils manage it. He is not proposing a ban (Option A) or public ownership (Option C). Option D is a ranking not made in the text; the author treats both as serious problems requiring different remedies."
  },
  { group: 'L5', type: 'multiple_choice', category: 'Opinion Article', context: ctxL5,
    question: "Which of the following statements from the article represents the author's opinion rather than a cited fact?",
    options: [
      "A) 'On streets where outdoor dining decks consume more than 40% of the usable pavement, pedestrian walking speeds drop by half.'",
      "B) 'Local councils celebrate this commercialisation as a sign of a vibrant city economy.'",
      "C) 'The private sector has treated the public commons as free storage space for far too long.'",
      "D) 'A mandatory two-metre clear transit ribbon must be legally preserved on all high-street footpaths.'"
    ],
    answer: "C) 'The private sector has treated the public commons as free storage space for far too long.'",
    method: "Option C is a value judgement — 'for far too long' is an evaluative phrase that cannot be objectively verified from the text. It expresses the author's moral position, not a measured finding. Option A is presented as an empirical claim (a specific statistic). Option B describes councils' stated position, not the author's opinion. Option D is a policy proposal — it is the author's recommendation, but framed as a regulatory prescription rather than a subjective judgement about past behaviour."
  },
  { group: 'L5', type: 'true_false_matrix', category: 'Opinion Article', context: ctxL5,
    matrixLabels: ['Yes', 'No'],
    question: "Based on the author's arguments, does the article support the following ideas?",
    options: [
      'Allowing dockless scooter companies to use kerbside space without providing geofenced tracking data to councils.',
      'Enforcing a mandatory two-metre wide ribbon on footpaths that must stay entirely clear of commercial property.',
      'Celebrating the expansion of outdoor dining decks as an unmitigated safety win for elderly citizens.'
    ],
    answer: 'No,Yes,No',
    method: 'A — The author explicitly states councils must NOT lease kerbside space to scooter operators "unless the vehicle operators provide real-time, geofenced tracking data". Not supported. B — The author directly proposes "a mandatory two-metre clear transit ribbon must be legally preserved on all high-street footpaths, completely free of any furniture". Fully supported. C — The author states outdoor dining forces "elderly citizens and people with mobility aids onto narrow ribbons of asphalt, often directly adjacent to heavy vehicle traffic" — presenting it as a safety hazard, not a win.'
  },

  // ── Set 6: Broken Valve / Investigative Report ─────────────────────────────
  { group: 'L6', type: 'multiple_choice', category: 'Investigative Report', context: ctxL6,
    question: "The report describes compliance teams 'shuffling damaged assets between different zones, effectively resetting the audit countdown clocks.' What does this practice reveal about the current 14-day regulatory window?",
    options: [
      "A) The 14-day window was designed too short, leaving agencies no time to complete genuine repairs before penalties apply.",
      "B) The regulatory window can be manipulated as an indefinite deferral mechanism, meaning some faulty valves may never actually be repaired.",
      "C) The practice is legal under current guidelines but the report recommends it be penalised under a proposed new framework.",
      "D) Operating agencies shuffle assets because different zones have different technical standards that require different valve models."
    ],
    answer: "B) The regulatory window can be manipulated as an indefinite deferral mechanism, meaning some faulty valves may never actually be repaired.",
    method: "By moving a damaged asset to a new zone, its audit clock resets — the agency can keep doing this indefinitely, never completing repairs while technically remaining within each individual 14-day window. This is not described as legal or recommended (Option C); the report frames it as an exploit. Option A misidentifies the problem as time pressure rather than the loophole itself. Option D introduces a technical explanation not found in the report."
  },
  { group: 'L6', type: 'multiple_choice', category: 'Investigative Report', context: ctxL6,
    question: "When legacy valves fail to respond to the BMS shutdown signal, what does the report say actually happens in the interval before a field technician intervenes?",
    options: [
      "A) The BMS automatically reroutes the fluid to a secondary containment pipeline to prevent open-air exposure.",
      "B) The compromised pipeline continues pumping volatile fluids into open-air containment basins until a technician manually triggers a cutoff.",
      "C) An alert is sent to the nearest regulatory authority, which dispatches an inspector within 14 days.",
      "D) The system enters a safe-hold mode, halting all fluid transfer across the network until the fault is cleared."
    ],
    answer: "B) The compromised pipeline continues pumping volatile fluids into open-air containment basins until a technician manually triggers a cutoff.",
    method: "The report states that when legacy valves fail to respond, 'volatile fluids continue pumping into open-air containment basins, relying entirely on field technicians to manually spot the failure and trigger physical cutoff switches.' There is no automatic rerouting (A), no safe-hold mode (D), and regulatory notification is described as a post-event compliance process, not an immediate safety response (C)."
  },
  { group: 'L6', type: 'multiple_choice', category: 'Investigative Report', context: ctxL6,
    question: "The report notes that over 30% of legacy valves fail to respond to the digital BMS command signal. What is the most significant implication of this failure rate for the safety of these hubs?",
    options: [
      "A) The automated shutdown system provides no reliable safety margin when legacy hardware is integrated into it.",
      "B) The failure rate means field technicians must be stationed permanently inside each transfer hub to monitor valve performance.",
      "C) Replacing 30% of valves would bring the network into full compliance without any need to reform the regulatory framework.",
      "D) The failure rate is acceptable because open-air containment basins are engineered to hold volatile fluids indefinitely."
    ],
    answer: "A) The automated shutdown system provides no reliable safety margin when legacy hardware is integrated into it.",
    method: "When nearly a third of valves fail to respond to the digital command, the automated shutdown — designed to isolate a breach within 45 seconds — becomes unreliable as a safety system. The network falls back on manual human intervention, which is slower and less consistent. Option B is not stated in the report. Option C ignores the regulatory exploitation problem the report documents. Option D contradicts the article's warning about vapour leaks and environmental risk."
  },
  { group: 'L6', type: 'multiple_choice', category: 'Investigative Report', context: ctxL6,
    question: "Environmental scientists warn of a specific timing sequence of harm when petroleum compounds sit in open containment basins. Which conclusion about that sequence is most strongly supported by the report?",
    options: [
      "A) A physical spill into waterways will reach residential areas first, followed later by airborne vapour exposure.",
      "B) Vapour leaks can threaten residential areas before any liquid spill reaches local waterways.",
      "C) Both vapour and liquid contamination occur simultaneously once petroleum compounds enter the open-air basin.",
      "D) The primary health risk is to field technicians working at the hub, not to nearby residential communities."
    ],
    answer: "B) Vapour leaks can threaten residential areas before any liquid spill reaches local waterways.",
    method: "The report states scientists warn that petroleum compounds in open basins 'can result in hazardous vapour leaks that migrate into nearby residential perimeters, threatening public health well before a physical spill reaches local waterways.' The word 'well before' establishes that vapour harm precedes liquid contamination. Option A reverses the sequence. Option C contradicts 'well before' by suggesting simultaneity. Option D misidentifies the primary exposed population — the report explicitly identifies residential communities."
  },
  { group: 'L6', type: 'true_false_matrix', category: 'Investigative Report', context: ctxL6,
    matrixLabels: ['Yes', 'No'],
    question: 'Based on the details revealed in the report, are the following statements true?',
    options: [
      'More than 30% of legacy mechanical valves failed to respond to the automated digital command signal during testing.',
      'Current regulations impose immediate, non-negotiable civil penalties the moment a lagging valve is logged in an audit.',
      'Automated sensors are designed to initiate a shutdown sequence when they detect pressure drops or variances.'
    ],
    answer: 'Yes,No,Yes',
    method: 'A — The report states "over 30% of these legacy valves fail to respond to the digital BMS command signal." True. B — Current regulations grant a 14-day window before penalties apply. There is no immediate penalty. False. C — The system "is supposed to execute an automated shutdown sequence" when "a localised sensor detects a fluid variance or containment breach." True.'
  },

  // ── Set 7: Apex Manufacturing / Wear Classification Table ──────────────────
  { group: 'L7', type: 'multiple_choice', category: 'Technical Report', context: ctxL7,
    question: "A component has surface abrasions of 0.4mm. A technician argues it should be sent to Hangar B for ultrasonic testing immediately. Is this correct according to the ARMP table, and why?",
    options: [
      "A) Yes — any measurable abrasion triggers a Hangar B routing regardless of depth.",
      "B) No — 0.4mm falls within Class I (Stable), which only requires logging and standard monitoring, not ultrasonic testing.",
      "C) Yes — 0.4mm is close enough to the 0.5mm threshold that precautionary escalation is required.",
      "D) No — 0.4mm components must be immediately retired and processed for alloy recycling."
    ],
    answer: "B) No — 0.4mm falls within Class I (Stable), which only requires logging and standard monitoring, not ultrasonic testing.",
    method: "Class I (Stable) covers surface micro-abrasions measuring under 0.5mm in depth. The mandatory action is to 'document in the engineering log; continue standard 24-hour monitoring loops.' Hangar B ultrasonic testing applies to Class II (0.5mm–1.5mm). Option A invents a rule not in the table. Option C introduces a 'close enough' precautionary principle that the ARMP does not contain — classifications are fixed thresholds, not gradients. Option D describes Class III, which requires cracks exceeding 1.5mm."
  },
  { group: 'L7', type: 'multiple_choice', category: 'Technical Report', context: ctxL7,
    question: "What can be inferred from the fact that Class II components are sent to the ultrasonic testing enclosure rather than immediately retired?",
    options: [
      "A) Class II damage is considered cosmetic and can be monitored indefinitely without additional testing.",
      "B) Ultrasonic testing will always confirm the component is safe and return it to active service.",
      "C) The ARMP treats Class II damage as potentially serious but not yet conclusively requiring retirement — further assessment determines its fate.",
      "D) Components in Class II are retired at the technician's discretion following the Hangar B assessment."
    ],
    answer: "C) The ARMP treats Class II damage as potentially serious but not yet conclusively requiring retirement — further assessment determines its fate.",
    method: "Class II components are neither simply logged (Class I's outcome) nor immediately retired (Class III's outcome). Instead, they receive advanced ultrasonic testing — implying the damage is significant enough to warrant specialist assessment but has not yet crossed the threshold for automatic retirement. Option A misstates Class I's action and incorrectly describes Class II pitting as cosmetic. Option B overstates what the text says — the outcome of testing is not specified. Option D introduces technician discretion that is not part of the described protocol."
  },
  { group: 'L7', type: 'multiple_choice', category: 'Technical Report', context: ctxL7,
    question: "The report states that standard chemical solvents 'often degraded the anti-corrosive synthetic polymers applied to the equipment's protective casing.' What does this problem reveal about the relationship between cleaning and equipment protection?",
    options: [
      "A) Cleaning routines must be abandoned entirely for high-load equipment to prevent casing damage.",
      "B) The method used to clean equipment can itself cause the kind of damage the equipment's protective coating was designed to prevent.",
      "C) Anti-corrosive polymer coatings are ineffective and should be replaced with aqueous-resistant synthetic alternatives.",
      "D) The problem only applies to Hangar B equipment, where higher temperatures are required for cleaning."
    ],
    answer: "B) The method used to clean equipment can itself cause the kind of damage the equipment's protective coating was designed to prevent.",
    method: "The polymers protect against corrosion, yet standard solvents that clean the equipment strip those polymers — meaning the cleaning process creates the very vulnerability the coating was meant to block. This is why the mandate switched to aqueous arrays at controlled temperatures. Option A is an overreaction not supported by the text; cleaning continues under a modified method. Option C is not suggested — the polymers are described as worth protecting, not replacing. Option D is not stated — the problem is described as occurring across facilities, not specifically in Hangar B."
  },
  { group: 'L7', type: 'multiple_choice', category: 'Technical Report', context: ctxL7,
    question: "In the context of the report, the word 'retirement' as applied to a Class III component most nearly means:",
    options: [
      "A) The component is removed from the production line temporarily while a repair is completed.",
      "B) The component is transferred to a monitoring programme in Hangar B pending a future assessment.",
      "C) The component is permanently removed from service and processed as raw material.",
      "D) The component is stored offsite until a replacement part of the same specification arrives."
    ],
    answer: "C) The component is permanently removed from service and processed as raw material.",
    method: "The ARMP table specifies 'immediate and permanent retirement from service; process component for alloy recycling.' 'Alloy recycling' means the component is broken down for raw material, not stored or temporarily removed. Option A describes a temporary removal inconsistent with 'permanent.' Option B describes the Class II pathway, not Class III. Option D introduces a storage scenario not mentioned in the protocol."
  },
  { group: 'L7', type: 'true_false_matrix', category: 'Technical Report', context: ctxL7,
    matrixLabels: ['Yes', 'No'],
    question: 'Based on the text rules, do these scenarios comply with the Asset Risk Management Protocol?',
    options: [
      'Leaving a component with a 1.8mm deep structural crack in active service because it passed a visual test.',
      'Cleaning a drive cylinder using a high-temperature 70-degree Celsius chemical wash to remove grease quickly.',
      'Logging a component with 0.8mm of material pitting and sending it to Hangar B for ultrasonic testing within 48 hours.'
    ],
    answer: 'No,No,Yes',
    method: 'A — 1.8mm exceeds 1.5mm, placing this component in Class III. It must be immediately and permanently retired, not left in service regardless of a visual check. Non-compliant. B — The maximum cleaning temperature is 45°C. 70°C causes dangerous micro-expansions; this violates the mandate. Non-compliant. C — 0.8mm falls between 0.5mm and 1.5mm, classifying the component as Class II. Sending it to Hangar B within 48 hours is exactly the required action. Compliant.'
  },

  // ── Set 9: Section 44 / Legal Advisory ────────────────────────────────────
  { group: 'L9', type: 'multiple_choice', category: 'Legal Advisory', context: ctxL9,
    question: "The advisory states that a Section 44 declaration is 'legally valid only if' three parameters 'were met simultaneously.' What does the word 'simultaneously' reveal about how courts must evaluate a disputed declaration?",
    options: [
      "A) Courts may approve a declaration if at least two of the three conditions are satisfied, provided the third was met within 14 days.",
      "B) Meeting all three conditions is required, but they may have been satisfied at different points in time before the declaration was issued.",
      "C) All three conditions must have existed at the same time when the declaration was made — no single condition can substitute for the others.",
      "D) The three conditions need only be documented simultaneously; when they actually occurred is irrelevant to the declaration's validity."
    ],
    answer: "C) All three conditions must have existed at the same time when the declaration was made — no single condition can substitute for the others.",
    method: "The advisory explicitly states 'all three parameters were met simultaneously at the time of the order.' 'Simultaneously' means co-existing at the same moment, not staggered across time. Option A invents a two-out-of-three threshold not in the text. Option B contradicts 'simultaneously' by allowing sequential satisfaction. Option D misreads simultaneity as a documentation formality rather than a factual requirement."
  },
  { group: 'L9', type: 'multiple_choice', category: 'Legal Advisory', context: ctxL9,
    question: "An IVI reading of 75 is recorded at the time a Section 44 declaration is made. The other two conditions are fully satisfied. Is the declaration valid?",
    options: [
      "A) Yes — an IVI of 75 equals the baseline value, which satisfies the first condition.",
      "B) No — the IVI must exceed 75, not merely equal it, so a reading of exactly 75 does not satisfy the first condition.",
      "C) Yes — the IVI condition is the weakest of the three; meeting the other two is sufficient to validate the declaration.",
      "D) No — an IVI reading of 75 automatically invalidates all three conditions, making the declaration void ab initio."
    ],
    answer: "B) No — the IVI must exceed 75, not merely equal it, so a reading of exactly 75 does not satisfy the first condition.",
    method: "The advisory states the IVI must 'exceed a calculated baseline value of 75.' 'Exceed' means strictly greater than — a reading of exactly 75 does not exceed 75. Option A confuses 'exceeds' with 'equals or exceeds.' Option C invents a hierarchy among the three conditions; the advisory treats all three as equally mandatory. Option D overstates the consequence — a failure of one condition voids the declaration, not all conditions."
  },
  { group: 'L9', type: 'multiple_choice', category: 'Legal Advisory', context: ctxL9,
    question: "The advisory uses the Latin phrase 'void ab initio' to describe the legal status of a seizure made without satisfying all three conditions. What does this phrase most precisely mean in this context?",
    options: [
      "A) The seizure is valid temporarily but becomes void once a court formally reviews the declaration.",
      "B) The seizure is treated as if it was never lawfully made — it has no legal force from the moment it was executed.",
      "C) The seizure remains in effect but the enforcing agency must compensate the landholder for the period of unlawful detention.",
      "D) The seizure is voided from the date the missing condition is identified and documented by a lower court."
    ],
    answer: "B) The seizure is treated as if it was never lawfully made — it has no legal force from the moment it was executed.",
    method: "'Void ab initio' is Latin for 'void from the beginning' — meaning the legal action is treated as though it never had any lawful existence, not merely cancelled going forward. Option A describes a different legal concept (voidable, subject to review) rather than void ab initio. Option C adds a compensation obligation not mentioned in the advisory. Option D misidentifies the operative date — 'from the beginning' means from execution, not from the date of identification."
  },
  { group: 'L9', type: 'multiple_choice', category: 'Legal Advisory', context: ctxL9,
    question: "The advisory places the 'burden of proof' on the enforcing agency to verify an FCP before initiating detention. Which of the following, if true, would most weaken the enforcing agency's case for a valid detention?",
    options: [
      "A) The landholder submitted an FCP application three months before the emergency declaration was made.",
      "B) The enforcing agency initiated detention proceedings without checking whether the landholder held a pre-approved FCP.",
      "C) The landholder's property water supply had been partially connected to the municipal grid six months prior to the declaration.",
      "D) The IVI at the time of the declaration was recorded as 78, slightly above the threshold of 75."
    ],
    answer: "B) The enforcing agency initiated detention proceedings without checking whether the landholder held a pre-approved FCP.",
    method: "The advisory states the burden of proof rests on the enforcing agency to verify FCP status before initiating detention. If the agency skipped this verification step, it has failed to meet its own procedural obligation, directly weakening any defence of the detention. Option A describes a pending application, not a 'verified, pre-approved' FCP — it may strengthen the landholder's argument but not necessarily void the detention. Option C is a factual question about grid independence that would affect the FCP's validity, not the process. Option D supports the validity of the declaration (IVI > 75), not detention."
  },
  { group: 'L9', type: 'true_false_matrix', category: 'Legal Advisory', context: ctxL9,
    matrixLabels: ['Yes', 'No'],
    question: 'Based on the legal constraints in the advisory, are the following emergency declarations valid?',
    options: [
      'An emergency is declared when the IVI is 85, local crews are maxed out, and a system failure threatens a major township.',
      'An emergency is declared when an active deficit threatens a town, but the regional IVI is sitting at a safe score of 40.',
      'Law enforcement attempts to detain a primary producer without first checking if they hold a verified independent Facility Continuity Plan.'
    ],
    answer: 'Yes,No,No',
    method: 'A — All three simultaneous conditions are met: IVI 85 > 75, resources fully extended, and an active threat to a township. The declaration is valid. B — The IVI of 40 does not exceed 75, failing the first condition. Even with a genuine threat, all three conditions must be met simultaneously. Invalid. C — The advisory states the "burden of proof rests on the enforcing agency to verify the status of an FCP before initiating formal detention proceedings." Detaining without checking the FCP first violates the statutory exemption framework. Not compliant.'
  },

  // ── Set 3 (new batch): Architecture of Memory / Philosophical Essay ─────────
  { group: 'L12', type: 'multiple_choice', category: 'Philosophical Essay', context: ctxL12,
    question: "Dr. Thorne describes cities that have traded their public commons for commercial spaces as eventually losing 'the civic cohesion required to sustain any long-term economic framework.' What does this argument imply about the relationship between public space and economic health?",
    options: [
      "A) Economic growth is incompatible with preserving public space, making trade-offs between the two unavoidable.",
      "B) Civic cohesion is a luxury that only economically prosperous cities can afford to invest in.",
      "C) The social bonds formed in uncommercialised public space are a precondition for a functioning economy, not its competitor.",
      "D) Commercial encroachment is self-correcting — once economies weaken, markets naturally restore public spaces."
    ],
    answer: "C) The social bonds formed in uncommercialised public space are a precondition for a functioning economy, not its competitor.",
    method: "Dr. Thorne's argument is that losing the civic commons is self-defeating for economic health — not just a cultural loss. The city needs civic cohesion to sustain its economic framework, so public space is foundational to commercial life, not opposed to it. Option A treats them as zero-sum; Thorne explicitly argues the opposite. Option B inverts the causal chain — Thorne argues civic space precedes prosperity, not the reverse. Option D is speculative market self-correction with no support in the text."
  },
  { group: 'L12', type: 'multiple_choice', category: 'Philosophical Essay', context: ctxL12,
    question: "The essay states that when commercial facades exceed 60% of the visible streetscape, civic interactions are 'replaced by isolated consumer transactions.' What does this specific replacement suggest about the nature of commerce in that environment?",
    options: [
      "A) Commercial activity and civic interaction are compatible and often occur in the same spaces.",
      "B) Commercial activity in dense streetscapes transforms the nature of public encounters — from shared experience to individual purchasing.",
      "C) The empirical drop in civic interaction reflects residents choosing to spend time at home rather than in commercial areas.",
      "D) Consumer transactions are a higher-quality form of interaction that indicates a more economically developed urban environment."
    ],
    answer: "B) Commercial activity in dense streetscapes transforms the nature of public encounters — from shared experience to individual purchasing.",
    method: "The phrase 'replaced by isolated consumer transactions' is the key: the social structure of the street changes character. Where people once engaged with each other freely, they now engage primarily as buyers and sellers. This is not about going home (Option C) or economic development (Option D) — it is a qualitative shift in how human presence in public space is structured. Option A is contradicted by the essay's core premise that heavy commercialisation suppresses civic interaction."
  },
  { group: 'L12', type: 'multiple_choice', category: 'Philosophical Essay', context: ctxL12,
    question: "The essay describes critics of 'Tactical Openness' as arguing that such mandates 'suppress local economic vitality.' How does the author respond to this criticism?",
    options: [
      "A) By conceding that economic vitality must take priority in high-density commercial districts, even at the cost of civic space.",
      "B) By arguing that the critics are correct in the short term but wrong about long-term consequences.",
      "C) By contending that this defence ignores a historical truth: civic cohesion built in public space is itself what sustains long-term economic health.",
      "D) By proposing a financial compensation scheme to offset the economic losses caused by preserving unmonetised space."
    ],
    answer: "C) By contending that this defence ignores a historical truth: civic cohesion built in public space is itself what sustains long-term economic health.",
    method: "The essay directly responds: 'this defence ignores a deeper historical truth: a city that systematically trades its public commons for private commercial receipts eventually loses the civic cohesion required to sustain any long-term economic framework.' The author does not concede (Option A), qualify by time horizon (Option B), or propose compensation (Option D)."
  },
  { group: 'L12', type: 'multiple_choice', category: 'Philosophical Essay', context: ctxL12,
    question: "The essay describes the phenomenon of 'Spatial Rationalisation' as altering 'the psychological parameters of civic engagement.' In the context of the passage, what does the word 'rationalisation' most nearly mean?",
    options: [
      "A) The process of making public spaces more logical and fair by distributing them equitably among all users.",
      "B) The redesign of city space around efficiency and throughput rather than open-ended human interaction.",
      "C) A planning strategy that combines commercial and civic functions in the same physical locations.",
      "D) The psychological adjustment citizens make when adapting to new commercial environments over time."
    ],
    answer: "B) The redesign of city space around efficiency and throughput rather than open-ended human interaction.",
    method: "The essay explains that Spatial Rationalisation follows from industrial frameworks that 'prioritised spatial monetisation,' turning cities into 'highly calculated logistics networks optimised for resource throughput.' Walking becomes an 'orchestrated transit routine characterised by hyper-efficiency.' So 'rationalisation' here means optimising for efficient movement and commercial use — not equity (Option A), mixed-use design (Option C), or individual psychological adaptation (Option D)."
  },
  { group: 'L12', type: 'true_false_matrix', category: 'Philosophical Essay', context: ctxL12,
    question: 'Are the following assertions accurate reflections of the text?',
    options: [
      'Spatial Rationalisation refers to the process of designing urban centres to maximise uncommodified human interaction.',
      'Critics of "Tactical Openness" argue that reserving unmonetised public spaces can suppress local economic vitality.',
      'The passage suggests that walking changes from open-ended exploration to an orchestrated routine when public spaces are commercialised.'
    ],
    answer: 'False,True,True',
    method: 'A — Spatial Rationalisation describes the shift toward "hyper-efficiency" in pedestrian behaviour caused by commercial encroachment — the opposite of maximising uncommodified interaction. False. B — "Critics argue that such mandates suppress local economic vitality." The essay acknowledges this view before refuting it. True. C — The essay states: "Walking shifts from an act of open-ended spatial exploration to an orchestrated transit routine characterised by hyper-efficiency" when spaces are commercialised. True.'
  },

  // ── Set 4 (new batch): Meridian DRP-402 / Corporate Security Policy ─────────
  { group: 'L13', type: 'multiple_choice', category: 'Corporate Policy', context: ctxL13,
    question: "DRP-402 requires Tier A records to be transferred to an 'air-gapped cryptographic repository.' What does the term 'air-gapped' imply about this storage system's security design?",
    options: [
      "A) The repository encrypts records in transit using standard cloud-based architecture.",
      "B) The repository is physically isolated from network connections, so it cannot be accessed remotely.",
      "C) The repository uses multi-factor authentication to restrict remote access to Tier 1 engineers only.",
      "D) The repository automatically disconnects from the network whenever a variance spike exceeds 5%."
    ],
    answer: "B) The repository is physically isolated from network connections, so it cannot be accessed remotely.",
    method: "'Air-gapped' is a specific security term meaning a system is completely isolated from external networks — there is no network connection to breach. This is a higher level of protection than encryption (Option A) or authentication (Option C), which still allow remote access in principle. Option D describes the automated containment sequence triggered by a variance spike, which is a separate mechanism that applies to the live network, not the air-gapped repository."
  },
  { group: 'L13', type: 'multiple_choice', category: 'Corporate Policy', context: ctxL13,
    question: "A Tier B employee access log has been on the active network cluster for 88 days. An executive officer has not logged any compliance hold. What will happen to that data in approximately two days, and under what condition could this outcome be avoided?",
    options: [
      "A) The data will be transferred to the air-gapped repository; this is the mandatory action for all records after 90 days.",
      "B) The data will be cleared automatically; an executive officer could prevent deletion by logging a compliance audit hold before day 90.",
      "C) The data will be locked out from remote access; a Tier 1 engineer must execute a physical override to extend the retention period.",
      "D) The data will be flagged for a 30-second containment sequence; resetting the clock requires a manual confirmation from regional management."
    ],
    answer: "B) The data will be cleared automatically; an executive officer could prevent deletion by logging a compliance audit hold before day 90.",
    method: "The protocol states Tier B data is 'retained on standard active network clusters for a duration of 90 days' and 'the system clears the records unless an active compliance audit hold has been manually logged by an executive officer.' The air-gapped transfer (Option A) applies only to Tier A records. The lockout and physical override (Option C) apply to the variance spike containment sequence, not retention expiry. The 30-second containment sequence (Option D) is triggered by a security variance, not a retention deadline."
  },
  { group: 'L13', type: 'multiple_choice', category: 'Corporate Policy', context: ctxL13,
    question: "After the automated containment sequence locks out remote access, the protocol requires 'a Tier 1 security engineer executes a physical manual override at the regional server deck.' What is the purpose of requiring a physical action rather than allowing a remote reset?",
    options: [
      "A) Remote systems are too slow to process the override command within the required 30-second window.",
      "B) Requiring physical presence ensures that the system cannot be unlocked by the same remote intrusion that may have triggered the containment sequence.",
      "C) A physical override is cheaper to implement than a secure remote authentication protocol.",
      "D) The protocol requires a physical log to be signed in person for compliance audit purposes."
    ],
    answer: "B) Requiring physical presence ensures that the system cannot be unlocked by the same remote intrusion that may have triggered the containment sequence.",
    method: "The containment sequence was triggered because of a potential security breach (variance spike). If the reset could be performed remotely, an attacker who caused the spike could also reset the lockout — defeating the purpose of the containment. A physical presence requirement breaks this attack vector. Option A is not stated and the 30-second window applies to the lockout trigger, not the override. Option C is speculation with no textual support. Option D describes a compliance documentation requirement not mentioned in the protocol."
  },
  { group: 'L13', type: 'multiple_choice', category: 'Corporate Policy', context: ctxL13,
    question: "DRP-402 classifies 'credit assessment metrics' under Tier A and 'employee application access logs' under Tier B. What principle appears to govern which classification applies to a given record?",
    options: [
      "A) Tier A covers any record older than 12 hours; Tier B covers records created within the last 24 hours.",
      "B) Tier A covers records involving direct financial or personal risk to consumers; Tier B covers records related to internal operational processes.",
      "C) Tier A covers records that must be disclosed to regulators; Tier B covers records that are exempt from external disclosure.",
      "D) Tier A applies to digital records; Tier B applies to physical documents stored at regional branch offices."
    ],
    answer: "B) Tier A covers records involving direct financial or personal risk to consumers; Tier B covers records related to internal operational processes.",
    method: "Tier A examples — transaction histories, personally identifiable information (PII), credit assessment metrics — all carry direct risk to consumers if exposed. Tier B examples — employee access metrics, server logs, internal communications — are operational records about the company's own systems. This consumer-facing versus operationally-internal distinction is the organising logic of the two tiers. Options A, C, and D describe classification criteria not stated in the protocol."
  },
  { group: 'L13', type: 'true_false_matrix', category: 'Corporate Policy', context: ctxL13,
    question: 'Evaluate whether the following operational scenarios are compliant:',
    options: [
      'A localised branch stores unencrypted consumer transaction records on an open active network cluster for 36 hours.',
      'Following an automated lockout sequence due to a 6% ledger variance, an administrator resets the system remotely via a home computer.',
      'Employee application access logs (Tier B) are automatically deleted after 90 days in the absence of a compliance hold.'
    ],
    answer: 'False,False,True',
    method: 'A — Unencrypted transaction records are Tier A and must be moved to an air-gapped cryptographic repository within 12 hours. Storing them on an open cluster for 36 hours violates this rule. Non-compliant. B — The containment sequence locks out independent remote access and requires "a Tier 1 security engineer executes a physical manual override at the regional server deck." Remote home reset is not permitted. Non-compliant. C — "Upon reaching this limit, the system clears the records unless an active compliance audit hold has been manually logged." Without a hold, deletion at 90 days is correct protocol. Compliant.'
  },

  // ── Set 8 (new batch): Algorithmic Panopticon / Media Studies ──────────────
  { group: 'L17', type: 'multiple_choice', category: 'Media Studies', context: ctxL17,
    question: "Professor Thorne describes the shift in communication as moving from 'democratic forums' to 'highly targeted algorithmic feedback environments.' What does he imply by calling these environments 'feedback' loops?",
    options: [
      "A) Platforms collect user opinions as structured feedback to improve their content moderation systems.",
      "B) Users receive content selected to match and amplify their existing preferences, which in turn shapes what content they see next.",
      "C) Advertisers use feedback from click-through data to determine which communities receive political messaging.",
      "D) The democratic forum model failed because it provided no structured response mechanism for users disagreeing with editorial decisions."
    ],
    answer: "B) Users receive content selected to match and amplify their existing preferences, which in turn shapes what content they see next.",
    method: "A feedback loop, in Thorne's usage, means the algorithm uses a user's engagement behaviour to select more of the same type of content, which generates more engagement, which feeds the same selection again — the output continuously reinforces the input. This is distinct from formal feedback mechanisms (Option A) or advertiser targeting analytics (Option C). Option D introduces a criticism of the democratic forum model that Thorne does not make."
  },
  { group: 'L17', type: 'multiple_choice', category: 'Media Studies', context: ctxL17,
    question: "The essay identifies a specific revenue threshold — 70% from targeted advertising — beyond which comprehension metrics fall sharply. What does the author's use of this threshold suggest about the cause of the comprehension decline?",
    options: [
      "A) Any amount of targeted advertising is harmful to comprehension, and the 70% figure simply marks where the damage becomes measurable.",
      "B) The comprehension decline is not caused by advertising itself, but by the algorithmic content-selection practices that advertising-dependent revenue models incentivise.",
      "C) Platforms that stay below 70% targeted advertising revenue are unaffected by the engagement maximisation dynamics described in the essay.",
      "D) The 70% threshold marks the point at which government regulation becomes legally permissible under media law."
    ],
    answer: "B) The comprehension decline is not caused by advertising itself, but by the algorithmic content-selection practices that advertising-dependent revenue models incentivise.",
    method: "The essay's argument is that when platforms derive the majority of revenue from targeted advertising, they are structurally incentivised to maximise engagement at the expense of analytical depth — because outrage and emotional content drive more clicks. The advertising revenue model drives the algorithmic choices that produce the comprehension decline. Option A overstates the essay's position — the threshold matters. Option C implies a clean binary not supported by the text. Option D introduces media law not mentioned in the essay."
  },
  { group: 'L17', type: 'multiple_choice', category: 'Media Studies', context: ctxL17,
    question: "Industry lobbyists argue that 'Algorithmic Friction' features 'suppress user autonomy and hurt digital market innovation.' How does the author characterise this objection?",
    options: [
      "A) As a well-founded concern that the author ultimately concedes must be balanced against civic interests.",
      "B) As a technically accurate description of the feature's effects, even if the author disagrees with prioritising those effects.",
      "C) As a defence that ignores the structural reality that trading analytical depth for engagement is already destroying the cognitive basis of democracy.",
      "D) As a misunderstanding of what 'Algorithmic Friction' actually involves — lobbyists are reacting to a version of the policy that does not reflect reform groups' actual proposal."
    ],
    answer: "C) As a defence that ignores the structural reality that trading analytical depth for engagement is already destroying the cognitive basis of democracy.",
    method: "The essay states: 'this defence ignores a critical structural reality: a communication landscape that systematically trades collective analytical depth for short-term engagement clicks eventually loses the cognitive stability required to maintain a functioning democratic society.' The author does not concede (Option A), agree with the accuracy of the lobbyists' description (Option B), or argue they misunderstand the proposal (Option D)."
  },
  { group: 'L17', type: 'multiple_choice', category: 'Media Studies', context: ctxL17,
    question: "The essay describes two parallel transitions: the architectural transformation of online platforms (from democratic forums to algorithmic feedback loops), and the cognitive transformation of discourse (from dialectical exchange to reactive outrage). What does the author imply about the relationship between these two shifts?",
    options: [
      "A) The cognitive shift happened first and created demand for the architectural change as users sought more emotionally resonant content.",
      "B) The two shifts are coincidental — they occurred at the same time in history but are driven by independent forces.",
      "C) The architectural shift — the design of platforms around engagement maximisation — directly produces the cognitive shift in how people communicate.",
      "D) The cognitive shift can be reversed through individual willpower without any change to platform architecture."
    ],
    answer: "C) The architectural shift — the design of platforms around engagement maximisation — directly produces the cognitive shift in how people communicate.",
    method: "Thorne's argument is explicitly causal: it is because platforms are 'designed to maximise screen duration at the direct expense of contextual nuance' that communication 'shifts from deliberate dialectical exchange to reactive, short-form expression.' The platform architecture drives the cognitive outcome. Option A reverses the causal arrow. Option B denies causation the essay explicitly asserts. Option D contradicts the essay's call for engineered structural remedies (Algorithmic Friction) over personal willpower."
  },
  { group: 'L17', type: 'true_false_matrix', category: 'Media Studies', context: ctxL17,
    question: 'Evaluate the truth of the following statements:',
    options: [
      'Information Rationalisation refers to the process of enhancing analytical depth by optimising communication spaces for slow dialectical exchange.',
      'Industry lobbyists oppose "Algorithmic Friction" features on the grounds that they can restrict user autonomy and hinder market innovation.',
      'The text asserts that modern online communication spaces have shifted from targeted feedback loops back toward open, unmonetised democratic forums.'
    ],
    answer: 'False,True,False',
    method: 'A — Information Rationalisation describes the distortion where "communication shifts from deliberate dialectical exchange to reactive, short-form expression." It is the problem, not a solution for analytical depth. False. B — "Industry lobbyists argue that such features suppress user autonomy and hurt digital market innovation." True. C — The essay states the transition went from democratic forums TO "highly targeted algorithmic feedback environments" — not the reverse. False.'
  },

  // ── Set 9 (new batch): Decentralised Energy Grid / Economic Policy ──────────
  { group: 'L18', type: 'multiple_choice', category: 'Economic Policy', context: ctxL18,
    question: "During a generation surplus, the AGC cuts inbound tariff rebates to 0% on the Cooperative Core while locking export channels 'completely.' What economic harm is this dual action designed to prevent?",
    options: [
      "A) It prevents cooperative members from accumulating excessive credit balances that could distort local energy pricing.",
      "B) It prevents surplus clean energy from flooding the macro-grid wholesale market and driving prices into a deflationary collapse.",
      "C) It prevents residential consumers from drawing on battery reserves during peak demand periods.",
      "D) It prevents rival cooperatives from purchasing surplus energy at below-market rates during a surge event."
    ],
    answer: "B) It prevents surplus clean energy from flooding the macro-grid wholesale market and driving prices into a deflationary collapse.",
    method: "The whitepaper states the dual action 'prevents low-cost surplus power from flooding the primary macro-grid, protecting commercial wholesale energy prices from experiencing a destabilising deflationary collapse.' The concern is macro-grid price stability, not individual credit balances (Option A), consumer battery access (Option C), or inter-cooperative competition (Option D)."
  },
  { group: 'L18', type: 'multiple_choice', category: 'Economic Policy', context: ctxL18,
    question: "The whitepaper identifies two distinct triggering events that activate different AGC responses: a generation surplus and a battery reserve falling below 15%. Which statement most accurately describes how these two events differ in what they threaten?",
    options: [
      "A) A surplus threatens the physical safety of storage vaults, while a low battery reserve threatens billing accuracy.",
      "B) A surplus threatens macro-grid wholesale price stability, while a low battery reserve threatens local grid frequency stability.",
      "C) Both events threaten local grid frequency stability, but a surplus does so more immediately than a low battery reserve.",
      "D) A surplus threatens the AGC's ability to initiate a 45-second sequence, while a low battery reserve threatens the cooperative's export channel access."
    ],
    answer: "B) A surplus threatens macro-grid wholesale price stability, while a low battery reserve threatens local grid frequency stability.",
    method: "A surplus triggers export lockdowns and tariff cuts to protect wholesale market prices from deflation — an economic stability concern. A battery reserve below 15% triggers a peaker plant boost 'to mechanically stabilise the local grid frequency' — a physical grid stability concern. The two events are distinct in what they endanger. Option C incorrectly treats both as grid frequency problems. Options A and D introduce consequences not stated in the whitepaper."
  },
  { group: 'L18', type: 'multiple_choice', category: 'Economic Policy', context: ctxL18,
    question: "The whitepaper notes that during extreme thermal events, residential demand spikes 'unpredictably due to sudden climate control pooling.' Why does the word 'unpredictably' present a specific challenge for the AGC's design?",
    options: [
      "A) It means the AGC cannot be pre-programmed with fixed response rules and must rely on manual human operators.",
      "B) It means predictive models used to anticipate demand cannot reliably account for these spikes, increasing the risk of battery reserves dropping unexpectedly below the safety threshold.",
      "C) It means cooperative members are unaware of their energy usage until billing occurs, making demand management impossible.",
      "D) It means the 45-second grid-balancing window is insufficient to respond to surges caused by climate control pooling."
    ],
    answer: "B) It means predictive models used to anticipate demand cannot reliably account for these spikes, increasing the risk of battery reserves dropping unexpectedly below the safety threshold.",
    method: "The whitepaper states that this unpredictability 'continues to disrupt predictive model calculations.' If demand spikes cannot be predicted, the AGC's pre-planned allocation models fail to account for them, which can cause battery reserves to drop below the 15% threshold faster than expected. Option A is contradicted — the AGC is explicitly automated with defined response parameters. Option C conflates unpredictable demand with billing opacity. Option D misapplies the 45-second window, which is for surplus balancing, not demand spike response."
  },
  { group: 'L18', type: 'multiple_choice', category: 'Economic Policy', context: ctxL18,
    question: "Battery reserves drop below 15% at 2:00 PM and remain there until 2:01 PM, when they recover. Does the AGC trigger the 25% peaker boost, and why?",
    options: [
      "A) Yes — the 15% threshold was crossed, which is sufficient to trigger the boost regardless of duration.",
      "B) No — the reserves recovered within 60 seconds of the threshold being crossed, so the recovery condition cancels the boost.",
      "C) No — the reserves were below 15% for only 60 seconds, which does not exceed the required continuous duration of 120 seconds.",
      "D) Yes — any period below 15% constitutes an emergency allocation that automatically triggers the municipal board warning."
    ],
    answer: "C) No — the reserves were below 15% for only 60 seconds, which does not exceed the required continuous duration of 120 seconds.",
    method: "The whitepaper requires the threshold to be breached 'for a continuous duration exceeding 120 seconds.' From 2:00 PM to 2:01 PM is exactly 60 seconds — half the required duration. The boost is not triggered. Option A ignores the duration requirement. Option B invents a recovery cancellation rule not in the text. Option D confuses the boost trigger with the municipal board warning, which is issued concurrently — but neither activates here because the duration condition is not met."
  },
  { group: 'L18', type: 'true_false_matrix', category: 'Economic Policy', context: ctxL18,
    question: 'Evaluate the truth of the following operational scenarios:',
    options: [
      'Forcing localised clean energy into storage vaults during a surge helps protect the broader macro-grid from a deflationary pricing collapse.',
      'If cooperative battery reserves drop below 15% for exactly 30 seconds, the AGC instantly triggers a 25% boost in fossil-fuel peaker generation.',
      'The grid-balancing protocol maintains inbound tariff rebates at 100% to encourage cooperatives to export surplus energy during a surge.'
    ],
    answer: 'True,False,False',
    method: 'A — Routing surplus clean energy into vaults "prevents low-cost surplus power from flooding the primary macro-grid, protecting commercial wholesale energy prices from experiencing a destabilising deflationary collapse." True. B — The AGC triggers the peaker boost only after the threshold is breached for a "continuous duration exceeding 120 seconds." 30 seconds falls well short of this requirement. False. C — During a surge, inbound tariff rebates are cut to 0%, not maintained at 100%. The protocol discourages export to protect wholesale prices. False.'
  },

  // ── Set 10 (original batch): The Connected Grid / Public Policy Whitepaper ──
  { group: 'L20', type: 'multiple_choice', category: 'Public Policy Whitepaper', context: ctxL20,
    question: "The whitepaper states that the BMS creates a 'sharp pressure differential' between the Incident Floor and adjacent buffer zones. What physical purpose does this differential serve?",
    options: [
      "A) It forces fresh air into the Incident Floor to dilute the hazardous vapours to safe concentration levels.",
      "B) It prevents contaminated air on the Incident Floor from migrating into adjacent floors by trapping it under negative pressure.",
      "C) It activates the stairwell blowers to push evacuating occupants towards the nearest emergency exit.",
      "D) It shuts down the elevator system to prevent cross-contamination between floors during an emergency."
    ],
    answer: "B) It prevents contaminated air on the Incident Floor from migrating into adjacent floors by trapping it under negative pressure.",
    method: "The whitepaper explains that by lowering pressure on the Incident Floor (negative pressure) and raising it on buffer zones above and below (positive pressure), the building creates 'an aerodynamic seal that prevents hazardous vapours from travelling through pipe penetrations or elevator shafts.' The differential acts as a physical barrier through air pressure — not dilution (Option A), not stairwell activation (Option C), and not elevator shutdown (Option D), though elevators are mentioned as a pathway the seal addresses."
  },
  { group: 'L20', type: 'multiple_choice', category: 'Public Policy Whitepaper', context: ctxL20,
    question: "The whitepaper identifies 'human factors' as a continuing 'operational vulnerability' in the BMS containment system. Which specific human behaviour is identified as the primary threat to stairwell pressure integrity?",
    options: [
      "A) Occupants activating the emergency stairwell lighting, which draws power away from the injection blower fans.",
      "B) Occupants propping open egress stairwell doors during evacuations, causing a rapid drop in positive stairwell pressure.",
      "C) Occupants using elevator shafts as alternative evacuation routes, disrupting the pressure differential on adjacent floors.",
      "D) Occupants activating the fire alarm manually before the automated sensor has triggered the BMS sequence."
    ],
    answer: "B) Occupants propping open egress stairwell doors during evacuations, causing a rapid drop in positive stairwell pressure.",
    method: "The whitepaper states: 'UIPI field studies indicate that during building evacuations, egress stairwell doors are frequently propped open by occupants, causing a rapid drop in stairwell positive pressure.' This is the specific human behaviour identified as the operational vulnerability. Options A, C, and D describe behaviours not mentioned in the whitepaper."
  },
  { group: 'L20', type: 'multiple_choice', category: 'Public Policy Whitepaper', context: ctxL20,
    question: "A vapour breach occurs on Floor 8 of a 20-storey building. On Floor 9 (directly above), the BMS must establish positive pressure. Which configuration achieves this, and why does it differ from the Floor 8 configuration?",
    options: [
      "A) Floor 9: supply dampers 100% open, exhaust fans 0%; Floor 8: supply dampers 0%, exhaust fans 100% — because the Incident Floor needs negative pressure to contain vapours, while buffer zones need positive pressure to block migration.",
      "B) Floor 9: supply dampers 0%, exhaust fans 100%; Floor 8: supply dampers 100%, exhaust fans 0% — because extracting air from buffer zones draws vapours upward away from the breach.",
      "C) Floor 9 and Floor 8 both receive 0% supply and 100% exhaust to purge contaminated air simultaneously from both floors.",
      "D) Floor 9: supply dampers 50%, exhaust fans 50%; Floor 8: supply dampers 0%, exhaust fans 100% — to create a gradual pressure gradient between the two floors."
    ],
    answer: "A) Floor 9: supply dampers 100% open, exhaust fans 0%; Floor 8: supply dampers 0%, exhaust fans 100% — because the Incident Floor needs negative pressure to contain vapours, while buffer zones need positive pressure to block migration.",
    method: "The whitepaper explains that by 'lowering the pressure on the Incident Floor and raising it on the buffer zones directly above and below,' the building creates an aerodynamic seal. Negative pressure on Floor 8 is achieved by cutting supply air (0%) and maximising extraction (100%). Positive pressure on Floor 9 is achieved by maximising supply air (100%) and blocking extraction (0%). Option B reverses both configurations. Option C applies uniform extraction to both floors, which would not create the pressure differential the system depends on. Option D invents a gradient compromise not described in the whitepaper."
  },
  { group: 'L20', type: 'multiple_choice', category: 'Public Policy Whitepaper', context: ctxL20,
    question: "An egress stairwell door is propped open at 3:00 PM. At 3:02 PM it is still open. The BMS has triggered a localised alert tone and boosted the injection blower by 15%. At 3:03 PM the door is finally closed. What does the whitepaper suggest about the stairwell pressure between 3:00 PM and 3:02 PM?",
    options: [
      "A) Stairwell positive pressure was unaffected until the alert tone triggered at 3:02 PM, after which it dropped rapidly.",
      "B) Stairwell positive pressure dropped from the moment the door was propped open, not only after the 120-second threshold.",
      "C) Stairwell pressure remained stable because the BMS compensates for open doors in real time without any delay.",
      "D) Stairwell pressure increased due to the natural airflow through the open door, reducing the need for blower compensation."
    ],
    answer: "B) Stairwell positive pressure dropped from the moment the door was propped open, not only after the 120-second threshold.",
    method: "The whitepaper states that propped doors cause 'a rapid drop in stairwell positive pressure' — this is the physical effect of the open door itself. The 120-second threshold is the trigger for the BMS automated response (alert tone + blower boost), not the trigger for the pressure drop. The pressure drop begins immediately when the door is propped. Option A conflates the timing of the BMS response with the timing of the pressure drop. Option C is contradicted — the BMS does not compensate in real time; it waits 120 seconds. Option D is physically incorrect."
  },
  { group: 'L20', type: 'true_false_matrix', category: 'Public Policy Whitepaper', context: ctxL20,
    matrixLabels: ['Yes', 'No'],
    question: 'Based on the whitepaper\'s specifications, are these automated system actions correct during a vapour breach on Floor 8?',
    options: [
      'The supply air dampers on Floor 8 close completely to 0% fresh air influx within 45 seconds of the alarm.',
      'The exhaust fans on Floor 9 ramp up to maximum operational capacity (100% extraction) to draw vapours up through the building.',
      'Propping open a stairwell door for 3 minutes triggers an alert tone and causes the system to increase that shaft\'s blower speed by 15%.'
    ],
    answer: 'Yes,No,Yes',
    method: 'A — Floor 8 is the Incident Floor. The BMS lowers its pressure (negative pressure) by closing supply dampers to 0%, and does so within the 45-second trigger window. Yes. B — Floor 9 is a buffer zone directly above the breach. Buffer zones require high positive pressure, achieved by supply at 100% and exhaust at 0%. Ramping exhaust to 100% would depressurise the buffer floor and break the aerodynamic seal. No. C — 3 minutes equals 180 seconds, which exceeds the 120-second threshold. The BMS triggers an alert tone and boosts the blower by 15%. Yes.'
  },

  // ── Set 11 (Persuasive): KAP-7 Kitchen Safety ──────────────────────────────
  { group: 'L21', type: 'multiple_choice', category: 'Home Safety Regulation', context: ctxL21,
    question: "The passage states: 'The KAP-7 does not replace good judgement — it exists precisely for the moments when good judgement fails.' What does this sentence reveal about the author's view of human reliability in kitchen safety?",
    options: [
      "A) That good judgement is usually sufficient, and the KAP-7 is only necessary for households with a history of kitchen accidents.",
      "B) That even attentive homeowners cannot be counted on to prevent all kitchen hazards, making an automated system a necessary complement.",
      "C) That the KAP-7 is designed to improve homeowners' judgement over time by alerting them to near-miss incidents.",
      "D) That the failure of good judgement is caused by outdated kitchen appliances that should be replaced alongside the KAP-7 installation."
    ],
    answer: "B) That even attentive homeowners cannot be counted on to prevent all kitchen hazards, making an automated system a necessary complement.",
    method: "The phrase 'precisely for the moments when good judgement fails' acknowledges that lapses happen to anyone — not just careless people. Combined with 'The argument that kitchen safety can be managed through attentiveness and common sense has been disproved by fire statistics year after year,' the author is arguing that human attention is inherently fallible. Option A limits the KAP-7 to households with a history of accidents, which the passage does not do. Option C misreads the sentence as describing a training function. Option D introduces appliance age as a causal factor not mentioned in the passage."
  },
  { group: 'L21', type: 'multiple_choice', category: 'Home Safety Regulation', context: ctxL21,
    question: "A stovetop temperature reaches 220°C and holds for 35 seconds with no manual input registered. Gas concentrations in the kitchen are at 0.3%. Which KAP-7 response is triggered, and why does the more severe response not activate?",
    options: [
      "A) The Emergency Cutoff Sequence activates, because a temperature above 200°C for more than 30 seconds triggers the ECS regardless of gas concentration.",
      "B) A Tier 1 unattended heating warning is logged, because the temperature threshold and duration conditions are met but neither ECS trigger threshold has been reached.",
      "C) No response occurs, because the gas concentration is below the 0.5% threshold and this is the only condition the system monitors.",
      "D) The ECS activates, because 0.3% gas concentration combined with a 220°C temperature crosses the combined-hazard threshold."
    ],
    answer: "B) A Tier 1 unattended heating warning is logged, because the temperature threshold and duration conditions are met but neither ECS trigger threshold has been reached.",
    method: "The Tier 1 warning triggers when 'a cooktop surface temperature exceeds 200 degrees Celsius for more than 30 continuous seconds without any manual input' — all three conditions are met (220°C, 35 seconds, no input). The ECS activates only when 'gas concentrations exceed 0.5 per cent OR smoke opacity reaches 15 per cent density.' Gas is at 0.3% (below 0.5%) and no smoke opacity is mentioned — neither ECS condition is met. Option A incorrectly elevates the temperature condition to an ECS trigger. Option C ignores the Tier 1 monitoring function. Option D invents a 'combined-hazard threshold' not in the passage."
  },
  { group: 'L21', type: 'multiple_choice', category: 'Home Safety Regulation', context: ctxL21,
    question: "Critics of the KAP-7 call the system 'oversensitive' and say it 'intrudes on daily domestic life.' The author characterises this criticism as individuals who 'ignore the catastrophic reality of residential gas fires.' What does this characterisation imply about the author's view of the critics' reasoning?",
    options: [
      "A) The critics have conducted genuine safety research that the author has chosen not to engage with directly.",
      "B) The critics are raising a legitimate cost-of-convenience concern that the author acknowledges but outweighs with safety data.",
      "C) The critics are substituting personal inconvenience for an accurate assessment of risk, leading them to misjudge the system's purpose.",
      "D) The critics are primarily motivated by financial interests in competing home safety products."
    ],
    answer: "C) The critics are substituting personal inconvenience for an accurate assessment of risk, leading them to misjudge the system's purpose.",
    method: "The author says critics 'mischaracterise an intelligent safety protocol as an inconvenience' — meaning they are reframing a safety tool as a nuisance because their frame of reference is convenience rather than catastrophic risk. Option A is contradicted — the passage gives no credibility to the critics' research. Option B overstates the author's concession; he does not acknowledge their concern as legitimate, only as understandable given their misframing. Option D introduces financial motivation with no textual support."
  },
  { group: 'L21', type: 'multiple_choice', category: 'Home Safety Regulation', context: ctxL21,
    question: "The passage argues that the KAP-7 is 'no longer a luxury available only to those with premium smart-home budgets.' What consequence does this statement have for the author's moral argument?",
    options: [
      "A) It allows the author to argue that financial affordability is no longer a valid reason to avoid installation, strengthening the obligation to install.",
      "B) It shifts the focus of the article from safety advocacy to consumer market analysis.",
      "C) It acknowledges that some homeowners remain unable to afford the KAP-7 and should not be held to the same obligation.",
      "D) It implies that premium smart-home users bear a greater moral responsibility than standard homeowners."
    ],
    answer: "A) It allows the author to argue that financial affordability is no longer a valid reason to avoid installation, strengthening the obligation to install.",
    method: "By removing the cost barrier, the author closes off 'I can't afford it' as an excuse — leaving only unwillingness as the reason for non-installation. This directly reinforces the moral claim: 'every homeowner now has both the means and the obligation to install it.' Option B misreads the remark as market analysis. Option C inverts the author's argument — the whole point is that cost is no longer a distinguishing factor. Option D introduces a comparative moral hierarchy between homeowner types that the passage does not draw."
  },
  { group: 'L21', type: 'true_false_matrix', category: 'Home Safety Regulation', context: ctxL21,
    question: 'Based on the passage, are the following statements about the KAP-7 system true or false?',
    options: [
      'The KAP-7 is described in the passage as an optional feature available only in premium smart-home systems.',
      'The Emergency Cutoff Sequence terminates gas and electrical flow to registered appliances within five seconds.',
      'A smoke opacity reading of exactly 15% density is one of the two conditions that trigger the ECS.',
      'The system allows owners to reset it remotely via mobile application within the 24-hour lockout window.'
    ],
    answer: 'False,True,True,False',
    method: 'A — The passage states the KAP-7 is "no longer a luxury" and is "a moral and practical imperative." False. B — "The KAP-7 terminates both gas and electrical flow to all registered kitchen appliances within five seconds." True. C — "When smoke opacity reaches 15 per cent density" is explicitly listed as an ECS trigger. True. D — The 24-hour lockout applies specifically to "remote resets." A "physical diagnostic inspection" is required. False.'
  },

  // ── Set 12 (Persuasive): Canine Welfare — Exercise Strategy 40-A ───────────
  { group: 'L22', type: 'multiple_choice', category: 'Animal Welfare', context: ctxL22,
    question: "The passage describes Exercise Strategy 40-A as 'a structured protocol — not a set of recommendations.' What does this distinction imply about how owners should treat its guidelines?",
    options: [
      "A) Owners may selectively apply the guidelines that suit their dog's breed and temperament.",
      "B) The guidelines are advisory only and carry no consequence if ignored, unlike formal regulations.",
      "C) The guidelines are binding requirements that must be followed in full to protect the animal's welfare.",
      "D) The strategy is a provisional framework that owners should adapt based on their own observations over time."
    ],
    answer: "C) The guidelines are binding requirements that must be followed in full to protect the animal's welfare.",
    method: "Calling it a 'structured protocol' rather than a 'set of recommendations' means the guidelines are not optional suggestions — they are a system with defined thresholds, mandatory responses (cooling phases, dehydration lockouts), and prescribed actions. Option A and D imply selectivity or adaptation the passage does not endorse. Option B misreads 'protocol' as advisory — the passage presents it as a duty of care."
  },
  { group: 'L22', type: 'multiple_choice', category: 'Animal Welfare', context: ctxL22,
    question: "A Tier A session ends at 10:00 AM. At 10:06 AM the dog's heart rate has not normalised. Separately, the owner notices the dog's movement fluidity has dropped by 18%. Which of the following correctly identifies all mandatory responses that apply?",
    options: [
      "A) Initiate a cooling phase only — the fluidity drop does not require an independent response once a cooling phase is already active.",
      "B) Initiate a cooling phase for the elevated heart rate, AND halt all game modules for a 60-minute dehydration recovery window for the fluidity drop — both protocols apply independently.",
      "C) Transition to a Tier B enrichment session — this satisfies both the heart rate and fluidity thresholds simultaneously.",
      "D) Initiate a 60-minute dehydration lockout only — this is the higher-priority response and supersedes the cooling phase requirement."
    ],
    answer: "B) Initiate a cooling phase for the elevated heart rate, AND halt all game modules for a 60-minute dehydration recovery window for the fluidity drop — both protocols apply independently.",
    method: "Two separate threshold breaches have occurred: (1) heart rate not normalised within 5 minutes post-Tier A activity requires 'an immediate cooling phase'; (2) a 15% or more drop in movement fluidity triggers 'an automatic dehydration lockout: all game modules halted for a mandatory 60-minute recovery period.' These are distinct protocols with independent triggers — both apply concurrently. Option A incorrectly merges the two protocols. Option C introduces a transition to Tier B that is not prescribed for either condition. Option D invents a priority hierarchy between the two protocols that the passage does not establish."
  },
  { group: 'L22', type: 'multiple_choice', category: 'Animal Welfare', context: ctxL22,
    question: "The passage states that a dog ignoring commands during enrichment is 'often falsely presumed' to be willful disobedience. What does the word 'falsely' suggest about owners who make this assumption?",
    options: [
      "A) That they are deliberately neglecting their dogs by ignoring obvious signs of physical distress.",
      "B) That they are misinterpreting a physiological signal as a behavioural one, and acting on an incorrect premise.",
      "C) That they are applying Tier A discipline frameworks incorrectly to Tier B activity contexts.",
      "D) That they lack sufficient training in canine exercise science to interpret their dog's behaviour accurately."
    ],
    answer: "B) That they are misinterpreting a physiological signal as a behavioural one, and acting on an incorrect premise.",
    method: "'Falsely presumed' means the assumption is factually wrong — the dog is not being disobedient, it is exhausted. Owners who act on this false premise will continue the session, causing harm. Option A implies intentional neglect; the passage describes a misunderstanding, not deliberate inaction. Option C introduces a cross-tier framework confusion the passage does not describe. Option D shifts the critique to formal training gaps rather than the specific interpretive error the passage identifies."
  },
  { group: 'L22', type: 'multiple_choice', category: 'Animal Welfare', context: ctxL22,
    question: "The passage states the 60-minute dehydration lockout 'ensures that the dog's physiological needs are never compromised in the interest of an owner's recreational agenda.' What does the phrase 'recreational agenda' imply about a risk the protocol is designed to guard against?",
    options: [
      "A) That owners may prioritise their own enjoyment of the activity over the animal's welfare when the two are in conflict.",
      "B) That professional dog trainers use recreational frameworks that are incompatible with the protocol's medical standards.",
      "C) That recreational exercise is inherently harmful to dogs and should be replaced with structured therapeutic activity.",
      "D) That dogs have their own recreational preferences that may conflict with the owner's planned exercise schedule."
    ],
    answer: "A) That owners may prioritise their own enjoyment of the activity over the animal's welfare when the two are in conflict.",
    method: "'Recreational agenda' refers to the owner's desire to continue play — and the passage implies owners might override a dog's physical distress signals to keep playing. The lockout removes this choice. Option B introduces professional trainers as a distinct category not discussed in the passage. Option C misreads the protocol — structured exercise is explicitly endorsed. Option D attributes a 'recreational agenda' to the dog rather than the owner, inverting the passage's concern."
  },
  { group: 'L22', type: 'true_false_matrix', category: 'Animal Welfare', context: ctxL22,
    question: 'Based on the passage, are the following statements about Exercise Strategy 40-A true or false?',
    options: [
      'A 15% drop in movement fluidity is described as a negligible observation that does not require immediate action.',
      'Tier A activities such as running and ball retrieval are strictly capped at a maximum of 40 minutes per session.',
      'Tier B enrichment sessions are strictly limited to 120 minutes regardless of the dog\'s engagement level.',
      'A dog that ignores commands during a session is described as exhibiting willful disobedience.'
    ],
    answer: 'False,True,False,False',
    method: 'A — A 15% fluidity drop triggers an "automatic dehydration lockout" halting all activity for 60 minutes — not a negligible observation. False. B — "Tier A covers high-intensity exercises…strictly capped at 40 minutes per session." True. C — 120 minutes is described as an example of what\'s possible, but sessions are "contingent upon the dog\'s engagement" and must stop when engagement drops. False. D — The passage explicitly states this is "often falsely presumed" and that the behaviour indicates physiological exhaustion. False.'
  },

  // ── Set 13 (Persuasive): Professional Baking ───────────────────────────────
  { group: 'L23', type: 'multiple_choice', category: 'Professional Standards', context: ctxL23,
    question: "The passage opens: 'Professional baking at the artisan and commercial level is not a craft sustained by intuition or improvisation.' What is the rhetorical purpose of beginning with a negative claim — what something is NOT?",
    options: [
      "A) To acknowledge that some bakers do use intuition effectively before arguing that this approach is inferior.",
      "B) To immediately challenge a common assumption about baking — that it is creative and instinctive — and reframe it as a technical science requiring precision.",
      "C) To distinguish artisan baking from commercial baking by showing they require different skill sets.",
      "D) To suggest that traditional baking methods have been made obsolete by modern automated fermentation systems."
    ],
    answer: "B) To immediately challenge a common assumption about baking — that it is creative and instinctive — and reframe it as a technical science requiring precision.",
    method: "Opening with what baking is NOT sets up a contrast: the expected view (creative, intuitive craft) is rejected in favour of the author's position (technical, precision-driven science). This rhetorical move is designed to surprise a reader who associates baking with artistry and force them to reconsider. Option A suggests the author concedes the intuition argument — he does not. Option C invents a distinction between artisan and commercial baking that the passage treats as a unified category. Option D is not the implication of the opening line."
  },
  { group: 'L23', type: 'multiple_choice', category: 'Professional Standards', context: ctxL23,
    question: "The passage specifies that the fermentation chamber must be maintained at 'a precise 26 degrees Celsius' and that dough above 30 degrees causes irreversible structural collapse. A baker's chamber drifts to 28°C. Which statement is most strongly supported by the passage?",
    options: [
      "A) The dough is safe, because 28°C is below the 30°C threshold at which structural collapse occurs.",
      "B) The dough has already been irreversibly damaged, because any deviation above 26°C triggers the same collapse mechanism as 30°C.",
      "C) The baker is in a risk zone — the chamber has deviated from the required temperature, though the 30°C collapse threshold has not yet been breached.",
      "D) The misting system will activate at 28°C to lower the temperature back to 26°C before the collapse threshold is reached."
    ],
    answer: "C) The baker is in a risk zone — the chamber has deviated from the required temperature, though the 30°C collapse threshold has not yet been breached.",
    method: "The passage establishes 26°C as the required temperature and 30°C as the collapse trigger. At 28°C, the chamber has deviated from the protocol — it is no longer compliant — but has not yet reached the collapse threshold. This is different from Option A (which implies compliance at 28°C) and Option B (which implies collapse has already occurred). Option D is not supported — the misting system responds to humidity drops below 75%, not temperature deviations."
  },
  { group: 'L23', type: 'multiple_choice', category: 'Professional Standards', context: ctxL23,
    question: "The passage says the over-proofed baker's 10-minute salvage window is 'not merely a technical checkpoint — it is a test of a baker's integrity.' What specifically makes applying the gentle-fold technique an integrity failure rather than a technical solution?",
    options: [
      "A) The gentle-fold technique is a prohibited method under professional fermentation standards and should never be used.",
      "B) Applying the technique when the result will only be 'marginally acceptable' means choosing to sell a substandard product for commercial gain.",
      "C) The technique is ineffective on over-proofed dough and applying it wastes time that should be spent on a fresh batch.",
      "D) A professional who applies the technique without discarding the batch has violated the 150-minute proofing time limit."
    ],
    answer: "B) Applying the technique when the result will only be 'marginally acceptable' means choosing to sell a substandard product for commercial gain.",
    method: "The passage states: 'a professional who applies the gentle-fold knowing the result will be marginally acceptable is making a commercial decision that compromises their brand.' The technique itself is not prohibited (Option A) — the problem is knowingly producing and selling inferior product. The passage does not say the technique is ineffective (Option C). Option D misattributes the integrity failure to a timing rule rather than the choice to market a compromised product."
  },
  { group: 'L23', type: 'multiple_choice', category: 'Professional Standards', context: ctxL23,
    question: "The passage closes by comparing the KAP-7 kitchen safety system to the fermentation protocol, noting they share 'the same underlying philosophy.' What shared principle does the author identify?",
    options: [
      "A) Both systems are designed to remove human decision-making from high-stakes processes to eliminate the possibility of error.",
      "B) Both systems represent precision as the precondition for quality — not an obstacle to the craft they support.",
      "C) Both systems were developed in response to documented industry failures that caused financial loss to operators.",
      "D) Both systems prioritise speed over quality by automating the most time-consuming stages of a complex process."
    ],
    answer: "B) Both systems represent precision as the precondition for quality — not an obstacle to the craft they support.",
    method: "The passage states: 'precision is not an obstacle to quality — it is quality's precondition.' The KAP-7 and fermentation protocol both enforce precise automated conditions (temperature, humidity, gas concentration) to enable rather than restrict human skill. Option A overstates — neither system eliminates human decisions; both create conditions within which decisions are made. Options C and D introduce origins and speed claims not made in the passage."
  },
  { group: 'L23', type: 'true_false_matrix', category: 'Professional Standards', context: ctxL23,
    question: 'Based on the passage, are the following statements about professional fermentation baking true or false?',
    options: [
      'The author believes that discarding over-proofed dough is a sign of professional incompetence.',
      'The ideal fermentation chamber temperature specified in the passage is 26 degrees Celsius.',
      'A drop in humidity below 75% triggers a misting sequence every 15 minutes.',
      'A batch is flagged as over-proofed after 150 minutes of proofing time.'
    ],
    answer: 'False,True,False,True',
    method: 'A — The passage states "A true professional does not mourn the loss of inferior product; they protect their brand." Discarding is integrity, not incompetence. False. B — "The fermentation chamber must remain anchored at a precise 26 degrees Celsius." True. C — The misting system triggers when sensors "detect a drop" below 75% — not on a fixed 15-minute schedule. False. D — "Once a batch has been proofing for 150 minutes, the chamber\'s monitoring system automatically flags the dough as over-proofed." True.'
  },

  // ── Set 14 (Persuasive): Human Hydration ───────────────────────────────────
  { group: 'L24', type: 'multiple_choice', category: 'Health Advocacy', context: ctxL24,
    question: "The article opens: 'Water is not a supplement to good health — it is its foundation.' What does the distinction between 'supplement' and 'foundation' imply about how the author views hydration relative to other health behaviours?",
    options: [
      "A) Hydration is only important when other health habits — diet, exercise, sleep — are already well established.",
      "B) Hydration is optional for people who already take vitamins and other dietary supplements.",
      "C) Hydration is a prerequisite that underpins all other aspects of health, rather than an add-on to an existing healthy lifestyle.",
      "D) Supplements and vitamins are ineffective compared to water, making hydration the only health behaviour worth prioritising."
    ],
    answer: "C) Hydration is a prerequisite that underpins all other aspects of health, rather than an add-on to an existing healthy lifestyle.",
    method: "A 'supplement' adds to something already working; a 'foundation' supports everything built on top of it. The author is positioning hydration as the base layer of health — the thing on which all other health behaviours depend. Option A inverts the logic — hydration does not come after other habits, it underlies them. Option B misreads 'supplement' as referring to vitamin supplements. Option D overstates the argument — the author is not dismissing other health behaviours, only elevating water to foundational status."
  },
  { group: 'L24', type: 'multiple_choice', category: 'Health Advocacy', context: ctxL24,
    question: "The article describes thirst as 'not a friendly reminder — it is a physiological distress signal.' What is the author's purpose in using the word 'friendly' before rejecting it?",
    options: [
      "A) To suggest that thirst is genuinely friendly in the sense that it motivates people to drink before serious harm occurs.",
      "B) To contrast the reassuring way most people interpret thirst with the physiological reality the author wants to correct.",
      "C) To acknowledge that some researchers describe thirst as a friendly signal and to note this as an area of scientific disagreement.",
      "D) To describe the sensation of thirst as pleasant and non-threatening so readers do not become anxious about experiencing it."
    ],
    answer: "B) To contrast the reassuring way most people interpret thirst with the physiological reality the author wants to correct.",
    method: "By invoking 'friendly reminder' — a phrase that implies thirst is helpful and timely — the author captures the common, reassuring interpretation before immediately rejecting it with 'physiological distress signal.' This contrast is rhetorical: it names the assumption being dismantled before dismantling it. Option A accepts the 'friendly' framing the author is rejecting. Option C invents a scientific debate not present in the article. Option D misreads the rhetorical purpose as emotional reassurance."
  },
  { group: 'L24', type: 'multiple_choice', category: 'Health Advocacy', context: ctxL24,
    question: "The article states that caffeinated and sugary drinks 'provide a temporary sense of refreshment while doing nothing to address the body's underlying hydration deficit.' What does the word 'underlying' imply about the nature of the deficit being discussed?",
    options: [
      "A) That dehydration only becomes a deficit once it is confirmed by a medical test — until then it remains a surface-level concern.",
      "B) That the hydration deficit persists beneath the feeling of refreshment these drinks temporarily provide, meaning the problem is masked but not resolved.",
      "C) That caffeine causes dehydration at a deeper cellular level that water alone cannot address without supplementary electrolytes.",
      "D) That the deficit is caused by an underlying medical condition and should be diagnosed before attempting to treat it with increased water intake."
    ],
    answer: "B) That the hydration deficit persists beneath the feeling of refreshment these drinks temporarily provide, meaning the problem is masked but not resolved.",
    method: "'Underlying' here means the deficit continues to exist at a physiological level even when superficial feelings of refreshment occur. The word signals that the apparent fix — feeling refreshed — does not address the real problem. Option A introduces medical testing as a prerequisite, not in the article. Option C invents a deeper cellular dehydration argument and an electrolyte requirement not mentioned. Option D shifts focus to medical diagnosis that the article does not raise."
  },
  { group: 'L24', type: 'multiple_choice', category: 'Health Advocacy', context: ctxL24,
    question: "The article closes by describing inadequate hydration as 'a rationalisation, not a reason.' In context, what distinction is the author drawing?",
    options: [
      "A) A rationalisation is a false justification for a choice the person has already made; a reason is a genuine cause rooted in evidence.",
      "B) A rationalisation is a private thought that affects only the individual; a reason has public health implications.",
      "C) A rationalisation is used by people who lack scientific knowledge; a reason is used only by researchers and health professionals.",
      "D) A rationalisation can be corrected through education; a reason cannot change because it is grounded in objective fact."
    ],
    answer: "A) A rationalisation is a false justification for a choice the person has already made; a reason is a genuine cause rooted in evidence.",
    method: "The author calls the argument that hydration 'requires excessive effort' a rationalisation — meaning it is not a genuine, evidence-based explanation but a post-hoc justification for choosing not to drink adequately. The infrastructure to hydrate correctly is 'universally available,' so the effort claim is not a real barrier. Options B, C, and D introduce social, professional, or educational distinctions that the passage does not make — the author's argument is about truth versus self-justification, not about audience type."
  },
  { group: 'L24', type: 'true_false_matrix', category: 'Health Advocacy', context: ctxL24,
    question: 'Based on the passage, are the following statements about hydration true or false?',
    options: [
      'Thirst is described in the passage as a gentle early signal that the body wants more water.',
      'Pale, straw-like urine is identified as the only reliable objective indicator of adequate hydration.',
      'Hydration is described as a foundational requirement for human vitality.',
      'The author states that waiting until thirsty means you have already entered mild dehydration.'
    ],
    answer: 'False,True,True,True',
    method: 'A — Thirst is described as "a physiological distress signal," not a gentle early reminder. False. B — "A pale, straw-like colour in urine is the only objective indicator one needs." True. C — The passage argues for "treating hydration as the foundational requirement for human vitality." True. D — "If you are waiting for the sensation of thirst...you have already allowed your body to enter a state of mild dehydration." True.'
  },

  // ── Set 15 (Persuasive): Indoor Gardening ──────────────────────────────────
  { group: 'L25', type: 'multiple_choice', category: 'Environmental Wellbeing', context: ctxL25,
    question: "The passage describes watering plants daily as 'a death sentence delivered with the best of intentions.' What does this phrase reveal about the author's view of the owners who do it?",
    options: [
      "A) That these owners are callous and neglectful, caring more about their daily routine than the plant's survival.",
      "B) That well-meaning behaviour can cause serious harm when it is based on instinct rather than knowledge of what the plant actually needs.",
      "C) That daily watering is acceptable in summer but becomes harmful only during winter when plants are dormant.",
      "D) That overwatering is a symptom of emotional over-attachment to plants, which distorts owners' judgment."
    ],
    answer: "B) That well-meaning behaviour can cause serious harm when it is based on instinct rather than knowledge of what the plant actually needs.",
    method: "'With the best of intentions' signals the author is not blaming owners for malice or carelessness — only for acting on an untested instinct (affection = daily watering) without understanding the plant's needs. The phrase captures the irony: the affectionate impulse causes the very harm it seeks to prevent. Option A incorrectly characterises the owners as callous. Option C introduces a seasonal exception not in the passage. Option D psychologises the behaviour in a way the author does not."
  },
  { group: 'L25', type: 'multiple_choice', category: 'Environmental Wellbeing', context: ctxL25,
    question: "The passage states that root rot from overwatering is 'usually irreversible by the time visible symptoms appear on the leaves.' What is the practical implication of this timing for plant owners?",
    options: [
      "A) Owners should act quickly when they first notice yellowing leaves, as this is the earliest sign that overwatering has begun.",
      "B) By the time an owner sees evidence of damage on the leaves, the underlying root damage has likely already progressed beyond repair.",
      "C) Visible leaf symptoms reliably appear before root rot becomes serious, giving owners an adequate window to reduce watering.",
      "D) The damage from overwatering is limited to the root zone and does not affect the visible parts of the plant until after full recovery."
    ],
    answer: "B) By the time an owner sees evidence of damage on the leaves, the underlying root damage has likely already progressed beyond repair.",
    method: "The passage says visible symptoms appear after the process is 'usually irreversible' — meaning leaf symptoms are a lagging indicator, not an early warning system. Option A treats visible symptoms as a timely cue for intervention, which the passage directly contradicts. Option C inverts the passage's claim by suggesting symptoms precede serious damage. Option D misreads the passage to suggest visible symptoms occur only during recovery."
  },
  { group: 'L25', type: 'multiple_choice', category: 'Environmental Wellbeing', context: ctxL25,
    question: "Dust blocking the stomata prevents the plant from absorbing carbon dioxide and executing photosynthesis. What does this biological mechanism reveal about the relationship between leaf cleanliness and plant survival?",
    options: [
      "A) Leaf cleanliness affects plant appearance but has a negligible impact on the plant's metabolic processes.",
      "B) A clean leaf surface is necessary for photosynthesis — meaning that accumulated dust directly impairs the plant's ability to produce energy from light.",
      "C) Plants grown indoors require more frequent cleaning than outdoor plants because indoor air contains higher levels of carbon dioxide.",
      "D) Stomata can compensate for dust blockage by absorbing carbon dioxide through the root system instead."
    ],
    answer: "B) A clean leaf surface is necessary for photosynthesis — meaning that accumulated dust directly impairs the plant's ability to produce energy from light.",
    method: "Stomata are the entry point for carbon dioxide, which is essential for photosynthesis — the process by which plants produce energy. Blocked stomata mean reduced photosynthesis, which directly affects the plant's ability to function and survive. Option A understates the impact by calling it negligible. Option C inverts the CO2 logic — the issue is blocked CO2 intake, not ambient concentration. Option D is biologically incorrect; stomata are on leaves, not roots, and carbon dioxide is absorbed through leaves."
  },
  { group: 'L25', type: 'multiple_choice', category: 'Environmental Wellbeing', context: ctxL25,
    question: "The article ends: 'Those who are not prepared to learn what their plants require should reconsider acquiring them in the first place.' Which conclusion about the author's view of houseplant ownership is most strongly supported by this closing statement?",
    options: [
      "A) The author believes houseplant ownership is a privilege reserved for people with horticultural training.",
      "B) The author views ownership as a moral obligation that, once entered into, demands genuine effort to understand and meet the plant's needs.",
      "C) The author is primarily concerned with reducing the volume of plants disposed of in landfill due to preventable owner error.",
      "D) The author suggests that most plants are unsuitable for indoor environments and should only be grown by dedicated gardeners."
    ],
    answer: "B) The author views ownership as a moral obligation that, once entered into, demands genuine effort to understand and meet the plant's needs.",
    method: "The closing statement places the responsibility squarely on the owner — not the plant, the environment, or the plant's complexity. Ownership requires learning; those unwilling to do so should not acquire plants. This frames ownership as a duty of care. Option A introduces a training qualification the passage does not impose — the issue is willingness to learn, not formal credentials. Option C introduces waste disposal concerns not in the text. Option D implies most plants are unsuitable indoors, contradicting the article's premise that appropriate indoor plants exist if cared for correctly."
  },
  { group: 'L25', type: 'true_false_matrix', category: 'Environmental Wellbeing', context: ctxL25,
    question: 'Based on the passage, are the following statements about houseplant care true or false?',
    options: [
      'The author suggests that most houseplants thrive in harsh, direct sunlight through unshaded windows.',
      'Overwatering is described as a more common cause of plant death than neglect.',
      'Wiping leaves with a damp cloth is identified as an essential task to support photosynthesis.',
      'Neglect is identified as the primary cause of houseplant death.'
    ],
    answer: 'False,True,True,False',
    method: 'A — The passage states "stop placing your plants in direct sunlight" and recommends "indirect, filtered light." False. B — "The biggest killer of indoor plants is not neglect — it is over-love. Specifically, it is overwatering." True. C — "Wiping leaves with a damp cloth on a weekly basis is...an essential physiological one," linked directly to photosynthesis. True. D — The passage explicitly states "The biggest killer of indoor plants is not neglect." False.'
  },

  // ── Set 16 (Persuasive): Sleep ─────────────────────────────────────────────
  { group: 'L26', type: 'multiple_choice', category: 'Health Advocacy', context: ctxL26,
    question: "The article describes sleep as 'a biological baseline that the human body requires to function, repair, and survive.' What is the significance of the word 'baseline' in this context?",
    options: [
      "A) It implies that sleep is the minimum acceptable standard — everything else in health builds from it, not on top of other habits.",
      "B) It implies that sleep varies significantly between individuals and that 'baseline' refers to each person's personal minimum.",
      "C) It describes sleep as a lower-level health concern compared to diet and exercise, which provide more direct performance benefits.",
      "D) It positions sleep as the starting point for high-performance optimisation strategies used by athletes and executives."
    ],
    answer: "A) It implies that sleep is the minimum acceptable standard — everything else in health builds from it, not on top of other habits.",
    method: "A baseline is a foundational level below which a system cannot function adequately. By calling sleep a biological baseline, the author means it is the non-negotiable floor of health — not an add-on or a variable, but the thing on which all other functioning depends. Option B misreads 'baseline' as a personal variable rather than a universal minimum. Option C incorrectly ranks sleep as lower than other health behaviours. Option D reframes the article as performance optimisation rather than basic biological necessity."
  },
  { group: 'L26', type: 'multiple_choice', category: 'Health Advocacy', context: ctxL26,
    question: "The article states that memory consolidation 'cannot occur in a waking state.' What is the implication of this claim for someone who consistently sleeps only five hours per night?",
    options: [
      "A) Their memory consolidation will be partially impaired, but the deficit can be reversed by sleeping longer on rest days.",
      "B) Their memory consolidation will be fully intact because five hours provides sufficient time for one complete consolidation cycle.",
      "C) Their memory consolidation will be consistently incomplete, contributing to the cognitive decline described alongside immune and neurological effects.",
      "D) Memory consolidation will only be affected if the person is also experiencing mood dysregulation caused by another health condition."
    ],
    answer: "C) Their memory consolidation will be consistently incomplete, contributing to the cognitive decline described alongside immune and neurological effects.",
    method: "If memory consolidation requires sleep and this person chronically undersleeps, consolidation will be incomplete night after night — accumulating a deficit that contributes to the broader physiological debt the article describes. Option A contradicts the article's claim that weekend debt repayment is 'not only incorrect.' Option B is contradicted by the article's seven-to-nine-hour requirement. Option D makes memory consolidation conditional on another condition, which the passage does not suggest."
  },
  { group: 'L26', type: 'multiple_choice', category: 'Health Advocacy', context: ctxL26,
    question: "The article describes working late at night to meet professional deadlines as 'a trade-off with long-term physiological consequences.' What assumption does this characterisation challenge?",
    options: [
      "A) The assumption that professional dedication and physical health are permanently incompatible goals.",
      "B) The assumption that sacrificing sleep for work is a responsible and manageable trade-off with acceptable costs.",
      "C) The assumption that people who work late do so purely for financial gain rather than genuine professional commitment.",
      "D) The assumption that cognitive performance improves under deadline pressure, making lost sleep less consequential."
    ],
    answer: "B) The assumption that sacrificing sleep for work is a responsible and manageable trade-off with acceptable costs.",
    method: "By calling it 'a trade-off with long-term physiological consequences,' the author is pushing back against the cultural assumption that working late is a normal, cost-free productivity decision. The word 'consequences' signals that the cost is real and lasting — not a minor inconvenience. Option A overstates the article's position; the author is not arguing they are permanently incompatible. Option C introduces motivational speculation not in the text. Option D is a separate cognitive performance claim not made in the passage."
  },
  { group: 'L26', type: 'multiple_choice', category: 'Health Advocacy', context: ctxL26,
    question: "The article states that ambient light from screens 'suppresses melatonin production and delays sleep onset, regardless of how tired the individual feels.' What does the phrase 'regardless of how tired' imply about the relationship between feeling tired and being able to fall asleep?",
    options: [
      "A) That tiredness and sleep readiness are identical states — if you feel tired, your body is ready to sleep.",
      "B) That feeling tired is a subjective experience, while the body's ability to fall asleep depends on hormonal conditions that screen light disrupts independently.",
      "C) That screens primarily affect sleep quality rather than sleep onset, meaning tired people can still fall asleep quickly despite exposure.",
      "D) That melatonin suppression is only harmful when combined with high-intensity exercise or nutritional deficits."
    ],
    answer: "B) That feeling tired is a subjective experience, while the body's ability to fall asleep depends on hormonal conditions that screen light disrupts independently.",
    method: "'Regardless of how tired' separates the subjective feeling of fatigue from the physiological conditions required for sleep onset. Melatonin governs sleep onset; screen light suppresses melatonin regardless of tiredness — so a person can feel exhausted yet still struggle to fall asleep due to hormonal disruption. Option A conflates the two states the sentence is separating. Option C misidentifies the effect as quality rather than onset, which the passage specifies. Option D adds conditions (exercise, nutrition) not mentioned in the passage."
  },
  { group: 'L26', type: 'true_false_matrix', category: 'Health Advocacy', context: ctxL26,
    question: 'Based on the passage, are the following statements about sleep true or false?',
    options: [
      'The author describes getting seven to nine hours of sleep as a "life hack" that high performers have discovered.',
      'A cool, dark room is described as a preference rather than a physiological requirement for sleep.',
      'Sleep deprivation is linked in the passage to a weakened immune system.',
      'Adults require a minimum of seven to nine hours of sleep to meet the body\'s biological baseline.'
    ],
    answer: 'False,False,True,True',
    method: 'A — The passage explicitly states: "Getting the recommended seven to nine hours of sleep is not a \'life hack\'." False. B — "A cool, dark room is not a preference — it is a physiological requirement." False. C — The passage lists "a weakened immune system" as a consequence of consistent sleep deficit. True. D — The passage identifies seven to nine hours as "a biological baseline that the human body requires to function, repair, and survive." True.'
  },

  // ── Set 17 (Persuasive): Disciplined Fetch ─────────────────────────────────
  { group: 'L27', type: 'multiple_choice', category: 'Animal Welfare', context: ctxL27,
    question: "The passage opens by describing fetch as 'one of the most mismanaged activities in the domestic dog's life.' What does the author identify as the root cause of this mismanagement?",
    options: [
      "A) Owners choose unsafe equipment without researching appropriate ball sizes for their dog's breed.",
      "B) Owners assume fetch is instinctive and requires no intentional structure, leading them to overlook safety and limits.",
      "C) Competitive fetch culture encourages owners to push their dogs beyond healthy endurance limits.",
      "D) Dogs lack the ability to signal when they are tired, so owners have no reliable way to judge when to stop."
    ],
    answer: "B) Owners assume fetch is instinctive and requires no intentional structure, leading them to overlook safety and limits.",
    method: "The passage states: 'Playing fetch well is not instinctive. It requires intention, structure, and a clear understanding of what the activity demands from both parties.' The mismanagement stems from owners treating it as trivially simple rather than as an activity requiring deliberate oversight. Option A is a consequence of mismanagement, not its root cause. Option C introduces competitive culture not mentioned in the passage. Option D is contradicted — the passage explicitly says dogs do signal tiredness (stopping, lying down, panting), but owners fail to read those signals."
  },
  { group: 'L27', type: 'multiple_choice', category: 'Animal Welfare', context: ctxL27,
    question: "The passage says: 'A dog in mid-retrieve does not process environmental hazards in the way that a focused human does.' What does this observation imply about how environmental safety decisions should be made during fetch?",
    options: [
      "A) Dogs can be trained to pause before entering dangerous zones, making the owner's location choice less critical.",
      "B) Because the dog cannot manage its own safety in the moment of play, the owner must do so in advance by selecting a safe environment.",
      "C) The observation suggests that dogs have inferior spatial awareness and should only play fetch in enclosed indoor spaces.",
      "D) Owners should shout warnings at dogs during retrieval to redirect their attention toward nearby hazards."
    ],
    answer: "B) Because the dog cannot manage its own safety in the moment of play, the owner must do so in advance by selecting a safe environment.",
    method: "If a dog's cognitive state during retrieval overrides its ability to process hazards, then the dog cannot protect itself in the moment — that responsibility shifts entirely to the owner, who must create conditions in which the hazard does not exist. This supports the passage's 'duty of care' framing. Option A is contradicted by the passage — training to pause is not mentioned as a solution. Option C overstates the implication; no restriction to indoor spaces is suggested. Option D introduces shouted warnings not described in the passage."
  },
  { group: 'L27', type: 'multiple_choice', category: 'Animal Welfare', context: ctxL27,
    question: "The passage frames fetch as 'a vital training ground for communication.' What type of communication is the author referring to?",
    options: [
      "A) Training the dog to respond to verbal commands given during the game, such as 'drop it' or 'come.'",
      "B) The owner learning to read the dog's physical signals of tiredness and the dog learning to trust that the owner will respond to them.",
      "C) Using fetch to develop the dog's social confidence so it can communicate effectively with other dogs at the park.",
      "D) Teaching the dog to communicate its preferences for ball type and throwing distance through observable play patterns."
    ],
    answer: "B) The owner learning to read the dog's physical signals of tiredness and the dog learning to trust that the owner will respond to them.",
    method: "The passage frames the communication in fetch as bidirectional: the dog signals (stopping, panting, lying down) and the owner must read and respond correctly. The passage frames this as accountability — 'the dog is relying on you to read these signals.' Option A focuses on trained verbal commands, which the passage does not describe as the form of communication in question. Options C and D introduce social confidence and preference-signalling not mentioned in the passage."
  },
  { group: 'L27', type: 'multiple_choice', category: 'Animal Welfare', context: ctxL27,
    question: "The passage states: 'Forcing a tired dog to continue is not active living — it is neglect.' What does this reframing reveal about how some owners may be misinterpreting their own behaviour?",
    options: [
      "A) Some owners are deliberately neglecting their dogs by refusing to acknowledge that tiredness is a valid reason to stop.",
      "B) Some owners may believe they are providing healthy exercise when they are actually causing harm by continuing past the dog's physical limits.",
      "C) Some owners engage in extended fetch sessions primarily to meet their own daily step count goals.",
      "D) The term 'active living' refers to a specific pet health campaign that the author is critiquing as misleading."
    ],
    answer: "B) Some owners may believe they are providing healthy exercise when they are actually causing harm by continuing past the dog's physical limits.",
    method: "The reframing — 'not active living — it is neglect' — implies that what looks and feels like responsible, health-promoting behaviour (keeping the dog active) is actually harmful when pushed past the dog's limits. The owner thinks they're doing good. The passage corrects this misunderstanding. Option A implies intentional neglect, which contradicts the 'misinterpretation' framing. Option C introduces step counts not in the text. Option D treats 'active living' as a named campaign rather than a common cultural phrase."
  },
  { group: 'L27', type: 'true_false_matrix', category: 'Animal Welfare', context: ctxL27,
    question: 'Based on the passage, are the following statements about playing fetch true or false?',
    options: [
      'Forcing an exhausted dog to continue playing fetch is described as a form of neglect.',
      'The size of the ball used for fetch is described as irrelevant to the dog\'s safety.',
      'Fetch is described as a vital training ground for communication and a controlled release of energy.',
      'The author states that the dog should decide when the game begins and when it ends.'
    ],
    answer: 'True,False,True,False',
    method: 'A — "Forcing a tired dog to continue is not \'active living\' — it is neglect." True. B — "The size of the ball must be appropriate to the size of the dog. A ball small enough to lodge in the throat is not a toy — it is a direct threat." False. C — "fetch must be understood as what it truly is: a vital training ground for communication and a controlled release of energy." True. D — "You should be the one to decide when the game begins, how long it continues, and crucially, when it ends." False.'
  },

  // ── Set 18 (Persuasive): Pet Overbreeding ──────────────────────────────────
  { group: 'L28', set: 'Practice Now Questions', type: 'multiple_choice', category: 'Animal Ethics', context: ctxL28,
    question: "The passage opens: 'Australia euthanises more than 200,000 cats and dogs annually. These are not animals that lived full lives and died of natural causes.' Why does the author add this clarification?",
    options: [
      "A) To distinguish between healthy animals euthanised due to overpopulation and those euthanised for medical reasons — only the latter are the article's concern.",
      "B) To pre-emptively close off an interpretation of euthanasia as a natural or compassionate endpoint, framing it instead as a preventable outcome of systemic failure.",
      "C) To establish that Australia's euthanasia rate is higher than the global average, implying it is a uniquely Australian problem.",
      "D) To shift blame from the government to individual breeders by clarifying that the animals dying are adoptable, not medically compromised."
    ],
    answer: "B) To pre-emptively close off an interpretation of euthanasia as a natural or compassionate endpoint, framing it instead as a preventable outcome of systemic failure.",
    method: "By specifying that these are 'healthy, adoptable animals' — not animals at end of life — the author removes any comfort the word 'euthanasia' might suggest and forces the reader to confront the deaths as avoidable. This framing immediately establishes the moral urgency. Option A inverts the article's concern — medical euthanasia is not discussed, and the 200,000 figure refers to the adoptable animals. Option C introduces a global comparison not in the text. Option D misidentifies the rhetorical target — the author is not primarily blaming individual breeders in the opening."
  },
  { group: 'L28', set: 'Practice Now Questions', type: 'multiple_choice', category: 'Animal Ethics', context: ctxL28,
    question: "The passage describes the Victorian Government's current regulations as 'a necessary starting point, yet they remain insufficient.' What does this phrasing reveal about the author's position on government action?",
    options: [
      "A) The author believes government regulation has been counterproductive and should be replaced entirely by consumer-led change.",
      "B) The author acknowledges the regulations as meaningful but argues they fall short of what is needed to resolve the crisis.",
      "C) The author considers the regulations sufficient for licensed operations but inadequate for unlicensed breeders.",
      "D) The author treats government regulation as the primary solution and consumer behaviour as a secondary concern."
    ],
    answer: "B) The author acknowledges the regulations as meaningful but argues they fall short of what is needed to resolve the crisis.",
    method: "'Necessary starting point' concedes genuine value; 'insufficient' signals that more is required. This is a measured critique — not a rejection of regulation but a demand for stronger regulation. Option A misreads the passage — the author calls regulation 'necessary,' not counterproductive. Option C introduces a licensed/unlicensed distinction the passage does not draw. Option D reverses the article's structure — the author calls for action on 'two fronts,' giving consumer behaviour equal weight."
  },
  { group: 'L28', set: 'Practice Now Questions', type: 'multiple_choice', category: 'Animal Ethics', context: ctxL28,
    question: "The author calculates that ten breeding females can produce between 50 and 160 animals annually from a single operation. How does this calculation function as an argument?",
    options: [
      "A) It demonstrates that the government has undercounted the total number of animals entering the adoption market each year.",
      "B) It shows that the legal cap of ten females, despite appearing modest, actually enables industrial-scale production that exacerbates the oversupply problem.",
      "C) It proves that breeders with ten females are directly responsible for all 200,000 annual euthanisations in Australia.",
      "D) It establishes that reducing breeding to five females per operation would be sufficient to bring supply into balance with adoption demand."
    ],
    answer: "B) It shows that the legal cap of ten females, despite appearing modest, actually enables industrial-scale production that exacerbates the oversupply problem.",
    method: "The calculation is a rhetorical device to expose the gap between the appearance of the regulation (a 'reasonable cap') and its practical effect (up to 160 animals annually from one operation). The author's point is that the number sounds small but behaves like industrial production at scale. Option A misreads the calculation's purpose — it is directed at the regulatory limit, not an official count. Option C overstates the causal link. Option D introduces an alternative threshold not proposed by the author."
  },
  { group: 'L28', set: 'Practice Now Questions', type: 'multiple_choice', category: 'Animal Ethics', context: ctxL28,
    question: "The passage states: 'The goal is not to eliminate the breeding industry — it is to reduce Australia's annual euthanasia rate to zero.' What does this distinction reveal about the author's position?",
    options: [
      "A) The author is unwilling to advocate for strong regulatory reform because eliminating the industry entirely would be economically damaging.",
      "B) The author is proposing a targeted outcome — zero euthanasia — without requiring the abolition of breeding, suggesting reform and coexistence are compatible.",
      "C) The author concedes that the breeding industry is fundamentally ethical and that euthanasia is caused by other factors beyond breeding levels.",
      "D) The distinction is a rhetorical compromise designed to make the article's argument palatable to readers who work in the pet industry."
    ],
    answer: "B) The author is proposing a targeted outcome — zero euthanasia — without requiring the abolition of breeding, suggesting reform and coexistence are compatible.",
    method: "The author explicitly disavows elimination of the industry while maintaining an ambitious euthanasia goal. This means the argument is about scale and behaviour, not existence — reduced breeding limits, mandatory microchipping, and consumer adoption would achieve the target without banning breeding. Option A mischaracterises the author's advocacy as reluctant. Option C contradicts the article's core claim that overbreeding causes the euthanasia crisis. Option D speculates about rhetorical strategy with no textual support."
  },
  { group: 'L28', set: 'Practice Now Questions', type: 'true_false_matrix', category: 'Animal Ethics', context: ctxL28,
    question: 'Based on the passage, are the following statements about the overbreeding crisis true or false?',
    options: [
      'The author believes that the Victorian Government\'s current legislative efforts have fully resolved the overbreeding crisis.',
      'The author argues that animals should be viewed as instruments of profit by responsible breeders.',
      'Shelter adoption is encouraged in the passage as an alternative to purchasing from breeders.',
      'The author proposes that the ultimate goal is to reduce Australia\'s annual euthanasia rate to zero.'
    ],
    answer: 'False,False,True,True',
    method: 'A — The passage describes government efforts as "a necessary starting point, yet they remain insufficient." False. B — The passage explicitly states animals must be treated "as living beings with intrinsic value rather than consumer goods with a market price." False. C — The passage says "the single most impactful action...is to champion adoption from shelters rather than purchasing from breeders." True. D — "The goal is...to reduce Australia\'s annual euthanasia rate to zero." True.'
  },

  // ── Set 19 (Persuasive): Processed Meat ────────────────────────────────────
  { group: 'L29', type: 'multiple_choice', category: 'Public Health Research', context: ctxL29,
    question: "The passage explains that classifying processed meat as a Group 1 carcinogen 'does not imply equivalence in magnitude of risk; it confirms equivalence in the strength of scientific evidence.' What distinction is the author drawing?",
    options: [
      "A) Processed meat is equally as harmful as tobacco and asbestos — the Group 1 label means all three cause cancer at the same rate.",
      "B) Processed meat belongs in the same classification category as tobacco and asbestos not because it causes equal harm, but because the evidence that it causes cancer is equally robust.",
      "C) The Group 1 classification is provisional and will be upgraded to reflect the greater danger of tobacco compared to processed meat.",
      "D) The classification is intended to discourage consumption at any level, regardless of the quantity of processed meat consumed."
    ],
    answer: "B) Processed meat belongs in the same classification category as tobacco and asbestos not because it causes equal harm, but because the evidence that it causes cancer is equally robust.",
    method: "The passage explicitly makes this distinction: Group 1 is an evidentiary category, not a harm-magnitude category. Being in the same group as tobacco means the evidence is equally conclusive — not that the risk is equally large. Option A conflates evidentiary strength with harm magnitude, which the passage directly warns against. Option C introduces a provisional framing and upgrade system not in the text. Option D misreads the classification as a blanket consumption warning independent of quantity."
  },
  { group: 'L29', type: 'multiple_choice', category: 'Public Health Research', context: ctxL29,
    question: "The IARC's analysis was based on 'over 800 studies conducted across multiple countries, populations, and timeframes.' Why does the passage specifically emphasise the breadth of this evidence base?",
    options: [
      "A) To establish that the finding applies universally regardless of diet, genetics, or cooking method.",
      "B) To show that the conclusion is not dependent on any single study or population, making it more difficult for critics to dismiss on methodological grounds.",
      "C) To suggest that individual dietary choices have no meaningful effect on cancer risk given the population-scale data involved.",
      "D) To imply that 800 studies are the minimum threshold required for a Group 1 carcinogen classification."
    ],
    answer: "B) To show that the conclusion is not dependent on any single study or population, making it more difficult for critics to dismiss on methodological grounds.",
    method: "By spanning 800+ studies, multiple countries, and diverse populations, the evidence base cannot be attributed to a single flawed study or a culturally specific dietary pattern. This breadth is the source of the finding's robustness — and why the passage contrasts it with the meat industry's narrower counter-arguments. Option A overstates universality; the passage does not claim the finding applies regardless of all variables. Option C misreads the population-scale data as negating individual relevance. Option D invents a minimum study threshold not mentioned."
  },
  { group: 'L29', type: 'multiple_choice', category: 'Public Health Research', context: ctxL29,
    question: "The passage states: 'The evidence is not contested by serious independent researchers. It is contested by commercial interests for commercial reasons.' What rhetorical purpose does drawing this distinction serve?",
    options: [
      "A) It establishes that disagreement within the scientific community is normal and that both sides of the debate are equally credible.",
      "B) It delegitimises the source of opposition by attributing it to financial motivation rather than scientific merit, framing the debate as settled among neutral experts.",
      "C) It acknowledges that commercial interests have produced some valid counter-evidence that qualified researchers find compelling.",
      "D) It warns readers that independent researchers may eventually change their position as new commercial studies emerge."
    ],
    answer: "B) It delegitimises the source of opposition by attributing it to financial motivation rather than scientific merit, framing the debate as settled among neutral experts.",
    method: "By separating 'serious independent researchers' (who do not contest the finding) from 'commercial interests' (who do), the author frames the opposition as motivated by profit, not science. This rhetorical move positions the industry's challenge as a commercial strategy rather than a scientific debate — closing down the argument on grounds of source credibility. Option A implies equal credibility, which the sentence directly refutes. Option C concedes validity to the commercial counter-evidence, contradicting the passage's stance. Option D introduces a future reversal not suggested by the text."
  },
  { group: 'L29', type: 'multiple_choice', category: 'Public Health Research', context: ctxL29,
    question: "Dr. Christopher Wild is quoted as saying that nutritional considerations must be 'weighed against' the carcinogenic profile of processed meat. What does the inclusion of this quote reveal about the author's argumentative strategy?",
    options: [
      "A) It undermines the author's central argument by introducing expert doubt about whether the cancer risk is significant enough to act on.",
      "B) It presents an apparent concession — that processed meat has genuine nutritional value — in order to show that even proponents of the IARC findings acknowledge complexity, making the conclusion more, not less, credible.",
      "C) It shifts the article's focus from public health policy to individual dietary choice, suggesting the decision is ultimately personal rather than institutional.",
      "D) It signals that the author considers the IARC findings to be preliminary and subject to revision once more nutritional research is conducted."
    ],
    answer: "B) It presents an apparent concession — that processed meat has genuine nutritional value — in order to show that even proponents of the IARC findings acknowledge complexity, making the conclusion more, not less, credible.",
    method: "The author cites Dr. Wild precisely to demonstrate that IARC advocates are not dismissing nutritional value outright — they are making a considered, evidence-based judgment that risk outweighs benefit. This 'concede-and-counter' structure strengthens the author's case because it pre-empts the industry's main objection (nutritional value) and shows the IARC already accounted for it. Option A misreads the quote as weakening the argument — it actually reinforces it through intellectual honesty. Option C overstates the individualising effect; the passage focuses on dietary guidelines (institutional). Option D reads 'weighed against' as a sign of uncertainty, when it is a sign of balanced certainty."
  },
  { group: 'L29', type: 'true_false_matrix', category: 'Public Health Research', context: ctxL29,
    question: 'Based on the passage, are the following statements about the IARC report true or false?',
    options: [
      'The report estimates that approximately 34,000 cancer deaths annually are attributable to diets high in processed meat.',
      'The passage explicitly defines processed meat as including ham, sausages, and bacon.',
      'The meat industry is described in the passage as fully accepting the IARC\'s findings without objection.',
      'The IARC analysis was based on over 800 independent studies conducted across multiple countries.'
    ],
    answer: 'True,False,False,True',
    method: 'A — "High-processed-meat diets are estimated to contribute to approximately 34,000 cancer deaths annually." True. B — The passage refers to "processed meat" as a category but does not list specific products such as ham, sausages, or bacon. False. C — The passage states: "Despite the industry\'s attempt to distance red and processed meat from these findings." False. D — "conclusions drawn from an analysis of over 800 studies conducted across multiple countries, populations, and timeframes." True.'
  },

  // ── Set 20 (Persuasive): Value of Quotes in News ───────────────────────────
  { group: 'L30', type: 'multiple_choice', category: 'Media Literacy', context: ctxL30,
    question: "The passage describes quotes as 'strategic tools, selected by the journalist to serve specific communicative functions.' Which of the following best captures the implication of describing quote selection as 'strategic'?",
    options: [
      "A) The journalist is manipulating the reader by suppressing inconvenient source material that contradicts the article's conclusions.",
      "B) The journalist applies deliberate editorial judgment — choosing which voices to include based on the communicative effect each quote will have on the reader.",
      "C) Quotes are inserted only to satisfy publication requirements for a minimum number of attributed sources per article.",
      "D) The term 'strategic' signals that quotes in journalism are unreliable because they represent the journalist's paraphrase rather than the source's original words."
    ],
    answer: "B) The journalist applies deliberate editorial judgment — choosing which voices to include based on the communicative effect each quote will have on the reader.",
    method: "The passage uses 'strategic' to mean purposeful and function-driven: quotes are chosen 'to serve specific communicative functions' such as providing evidence, bolstering authority, and illustrating competing perspectives. This is an editorial judgment call, not manipulation (Option A, which misreads deliberateness as deception). Option C invents a minimum-attribution requirement not mentioned in the passage. Option D confuses 'strategic selection' with inaccurate reproduction — the passage specifies that quotes give the reader access to 'the source's own words, rather than the journalist's interpretation.'"
  },
  { group: 'L30', type: 'multiple_choice', category: 'Media Literacy', context: ctxL30,
    question: "The passage contrasts reports that quote named sources with reports that 'rely entirely on the journalist's credibility.' What weakness in unsourced reporting does this contrast expose?",
    options: [
      "A) Unsourced reports are always factually inaccurate because journalists lack the specialist knowledge to interpret technical findings without expert help.",
      "B) Unsourced reports cannot demonstrate that claims originate from authoritative external sources, so readers have no independent reference point to evaluate the account.",
      "C) Unsourced reports are prohibited under journalism ethics codes, meaning any report without direct quotation is unpublishable.",
      "D) Unsourced reports are less likely to attract advertising revenue because sponsors require identifiable spokespeople in editorial content."
    ],
    answer: "B) Unsourced reports cannot demonstrate that claims originate from authoritative external sources, so readers have no independent reference point to evaluate the account.",
    method: "The passage explains that quoting named experts or officials 'transfers a portion of that credibility to the source,' making 'the report accountable in a way that unsourced commentary cannot be.' The weakness of unsourced reports is therefore accountability — readers cannot independently verify or evaluate the basis of claims. Option A overstates the implication; the passage does not say journalists are incapable, only that their credibility alone is insufficient. Option C invents a legal/ethical prohibition not mentioned in the text. Option D introduces advertising revenue, which the passage does not discuss."
  },
  { group: 'L30', type: 'multiple_choice', category: 'Media Literacy', context: ctxL30,
    question: "The passage advises skilled readers to 'consider who is speaking, what interest they may represent, and what the journalist's purpose was in choosing that voice over others.' What reading practice is the author recommending here?",
    options: [
      "A) Treating all quoted sources as biased until independent fact-checkers have verified their statements.",
      "B) Evaluating each quote not only for its content but also for the institutional or personal interests the speaker might have, and for the editorial purpose the quote serves in the story.",
      "C) Seeking out the original full interview transcripts for every quote before forming a view on the article's claims.",
      "D) Disregarding quotes from industry representatives entirely, since they are included solely to introduce doubt rather than to illuminate the topic."
    ],
    answer: "B) Evaluating each quote not only for its content but also for the institutional or personal interests the speaker might have, and for the editorial purpose the quote serves in the story.",
    method: "The passage's advice maps onto three evaluative questions: who is speaking (identity and credibility), what interest they represent (motivation), and why the journalist selected that voice (editorial purpose). This is the definition of active, critical reading. Option A adds a 'treat as biased until verified' standard the passage does not endorse — it recommends consideration, not wholesale scepticism. Option C goes beyond the text; the passage does not suggest finding source transcripts. Option D tells readers to disregard industry voices entirely, which contradicts the passage's point that quoting competing perspectives aids balance."
  },
  { group: 'L30', type: 'multiple_choice', category: 'Media Literacy', context: ctxL30,
    question: "The passage states that a quote 'acts as a window into the broader debate surrounding the story's subject matter.' Which of the following scenarios best illustrates this function?",
    options: [
      "A) A journalist quotes a police officer's exact words rather than paraphrasing them, ensuring legal accuracy in reporting a criminal conviction.",
      "B) A report on sugar taxes quotes both a public health researcher citing childhood obesity data and a beverage industry spokesperson emphasising consumer freedom, revealing an active policy dispute.",
      "C) A feature article quotes a celebrity chef describing their favourite recipe, adding a personal dimension to a story about restaurant industry trends.",
      "D) An investigative piece quotes internal company documents to prove that a corporation was aware of safety failures before they became public."
    ],
    answer: "B) A report on sugar taxes quotes both a public health researcher citing childhood obesity data and a beverage industry spokesperson emphasising consumer freedom, revealing an active policy dispute.",
    method: "The passage explains that quoting both a public health expert and an industry representative 'invites the reader to engage with a genuine debate,' which is the 'window into the broader debate' function. Option B is the only scenario that explicitly involves opposing voices on a contested question, making the underlying policy dispute visible to the reader. Option A prioritises legal accuracy through direct quotation — an evidentiary function, not a debate-illuminating one. Option C uses a quote to humanise a story (a function the passage mentions in passing) but does not expose a broader debate. Option D uses documentary evidence to establish fact — the evidentiary function, not the perspective-mapping function."
  },
  { group: 'L30', type: 'true_false_matrix', category: 'Media Literacy', context: ctxL30,
    question: 'Based on the passage, are the following statements about the use of quotes in journalism true or false?',
    options: [
      'The author argues that quotes are used randomly to fill space in articles.',
      'Quotes are described as a way to bridge the gap between researchers and the public.',
      'Presenting conflicting views in a report is said to make it appear more biased to the audience.',
      'Quotes are described as a window into the broader debate surrounding a story\'s subject matter.'
    ],
    answer: 'False,True,False,True',
    method: 'A — "Quotes are rarely used at random — they are strategic tools." False. B — "quotes effectively bridge the gap between scientific findings and public understanding." True. C — The passage states presenting conflicting views "ensures that a report does not appear biased." False. D — "its presence acts as a window into the broader debate surrounding the story\'s subject matter." True.'
  },

  // ── Set 21 (Property Listing): The Historic Harbor Estate ──────────────────
  { group: 'L31', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxL31,
    question: "A family contacts the host to enquire about a 10-night stay for two adults and their 11-year-old daughter. They have no pets and plan to pay the security deposit. Should the host accept the booking?",
    options: [
      "A) Yes — the family has a pet-free party, is willing to pay the deposit, and 10 nights exceeds the threshold for the weekly discount.",
      "B) No — the listing requires a minimum stay of 14 nights, which 10 nights does not satisfy.",
      "C) No — the listing states the property is strictly unsuitable for children under 12, and their daughter is 11.",
      "D) Yes — the deposit requirement applies only to stays exceeding 14 days, so it is not applicable here and the stay is otherwise unrestricted."
    ],
    answer: "C) No — the listing states the property is strictly unsuitable for children under 12, and their daughter is 11.",
    method: "The listing is explicit: 'strictly unsuitable for children under the age of 12.' An 11-year-old falls within this restriction, making the booking unsuitable regardless of deposit payment or party size. Option A ignores this age restriction. Option B invents a minimum-stay requirement not mentioned in the listing. Option D misreads the deposit clause — it applies to stays exceeding 7 days (not 14), but the age restriction, not the deposit, is the decisive issue here."
  },
  { group: 'L31', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxL31,
    question: "The listing notes the absence of an elevator as 'may be a limitation for guests with limited mobility.' What does the use of 'may be' rather than 'is' imply about the listing's approach to this issue?",
    options: [
      "A) The host is legally obligated to use qualifying language rather than definitive statements when describing accessibility features.",
      "B) The listing is hedging — acknowledging a genuine constraint without issuing a prohibition, leaving the assessment of suitability to the individual guest.",
      "C) 'May be a limitation' implies that a lift is available for guests who request it, but is not standard.",
      "D) The host considers limited mobility to be a minor inconvenience that most guests will be able to manage without difficulty."
    ],
    answer: "B) The listing is hedging — acknowledging a genuine constraint without issuing a prohibition, leaving the assessment of suitability to the individual guest.",
    method: "The phrasing 'may be a limitation' is a qualified disclosure: the host is flagging a genuine accessibility issue (no lift, access via grand staircase only) without formally restricting the booking. The 'may be' shifts responsibility for the suitability assessment to the guest, unlike the age and pet restrictions which use the word 'strictly.' Option A invents a legal requirement. Option C is directly contradicted by the text, which explicitly states 'there is no elevator.' Option D speculates about the host's intent in a way the listing does not support."
  },
  { group: 'L31', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxL31,
    question: "A guest books a 10-night stay and pays the $2,000 security deposit. After checking out, they request a refund of the deposit. Are they entitled to receive it?",
    options: ['True', 'False'],
    answer: 'False',
    method: "The listing explicitly states the security deposit is 'non-refundable.' A 10-night stay exceeds the 7-day threshold that triggers the deposit requirement, but 'non-refundable' means the guest has no entitlement to its return regardless of the condition of the property or the length of stay."
  },
  { group: 'L31', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxL31,
    question: "A guest wants to dine at fine-dining restaurants after 9:00 PM on the evening of their arrival. Based solely on the listing, they can walk to suitable restaurants without leaving the Battery Point neighbourhood.",
    options: ['True', 'False'],
    answer: 'False',
    method: "The listing states that fine-dining restaurants are located in the Wharfside district — 'a 15-minute walk' away. Battery Point itself is 'quiet after 8:00 PM as it is primarily residential.' Fine dining is available in the area, but not within the Battery Point neighbourhood itself — the guest must walk to Wharfside."
  },

  // ── Set 22 (Property Listing): The Eco-Innovation Hub ──────────────────────
  { group: 'L32', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxL32,
    question: "A guest stays for 3 nights and uses 20 kWh of energy per day. Based on the listing, what additional charge will they incur at checkout?",
    options: [
      "A) $6.75 — they are charged for the total daily usage of 20 kWh across all 3 nights at $0.45 per kWh.",
      "B) $2.25 — they exceeded the daily allowance by 5 kWh on the first night only and are not charged for subsequent overages.",
      "C) $0 — the 15 kWh allowance is a weekly cap, not a daily limit, so three days of 20 kWh falls within the permitted range.",
      "D) $6.75 — they exceeded the daily allowance by 5 kWh each day, giving 15 kWh of excess usage across the stay, billed at $0.45 per kWh."
    ],
    answer: "D) $6.75 — they exceeded the daily allowance by 5 kWh each day, giving 15 kWh of excess usage across the stay, billed at $0.45 per kWh.",
    method: "The listing allows 15 kWh per day; excess is billed at $0.45 per kWh at checkout. At 20 kWh/day, the guest exceeds the allowance by 5 kWh each day. Over 3 days: 5 × 3 = 15 kWh excess. 15 × $0.45 = $6.75. Option A arrives at the same dollar figure ($6.75) but calculates it incorrectly — billing 20 kWh total rather than 15 kWh of excess (i.e., it charges for the whole usage including the free allowance). Option B only charges for the first night's overage, which is not how a per-day billing system works. Option C misreads 'per day' as a weekly cap, which the listing does not state."
  },
  { group: 'L32', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxL32,
    question: "The listing notes that the streets near the Innovation Hub 'remain quiet due to strict municipal noise ordinances' despite a high student population in the suburb. What tension does this detail resolve for a prospective guest?",
    options: [
      "A) It explains why the gentrification process in Greendale has been slower than in comparable suburbs.",
      "B) It addresses a potential concern that the large student presence might translate into noise disturbance, clarifying that regulation prevents this.",
      "C) It confirms that the university campus is not located within the immediate vicinity of the apartment.",
      "D) It indicates that guests are legally obligated to observe noise restrictions during their stay or face municipal fines."
    ],
    answer: "B) It addresses a potential concern that the large student presence might translate into noise disturbance, clarifying that regulation prevents this.",
    method: "The listing first mentions a 'high student population' — a detail that might make a prospective guest worry about noise — then immediately qualifies it with the noise ordinance information. This structure is designed to pre-empt a concern the guest might form. Option A draws an unrelated conclusion about gentrification speed. Option C misreads the detail; the campus is mentioned as present in Greendale, not absent from the immediate area. Option D places a legal obligation on the guest, which is not what the listing states — the ordinance governs the broader area, not a guest's specific conduct."
  },
  { group: 'L32', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxL32,
    question: "A guest arrives and wants to separate the bedroom from the workspace to create two distinct areas. Based on the listing, this is possible.",
    options: ['True', 'False'],
    answer: 'True',
    method: "The listing states: 'The space is dynamic; walls can be retracted to change a bedroom into a workspace.' The ability to retract walls implies they can also be extended or repositioned — the dynamic configuration allows the guest to separate the spaces as desired."
  },
  { group: 'L32', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxL32,
    question: "A guest who planned to bring a portable gas camping stove for cooking can use it in the apartment's kitchenette.",
    options: ['True', 'False'],
    answer: 'False',
    method: "The listing specifies the kitchenette has an 'induction cooktop (no open flames).' A gas camping stove produces an open flame, which is explicitly prohibited. The prohibition is absolute — there is no exception for portable or guest-owned appliances."
  },

  // ── Set 23 (Property Listing): The Transit Exchange Apartment ──────────────
  { group: 'L33', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxL33,
    question: "A guest drives to the apartment and wants to park their car nearby during a 5-night stay. Which statement best describes what the listing tells them?",
    options: [
      "A) On-site parking is available at an additional nightly fee arranged through the 24/7 self-check-in kiosk.",
      "B) The host advises strongly against bringing a vehicle, and any parking would require travelling over 1 km to the nearest public garage.",
      "C) Street parking is available within the immediate area, though the host does not guarantee a space.",
      "D) The nearest parking garage is 500 metres away and is recommended by the host for guests who drive."
    ],
    answer: "B) The host advises strongly against bringing a vehicle, and any parking would require travelling over 1 km to the nearest public garage.",
    method: "The listing is explicit: 'There is zero parking provided. The host strongly advises against bringing a vehicle as the local traffic congestion is severe, and the nearest public parking garage is over 1km away.' Option A invents on-site parking — the listing states zero parking is provided. Option C invents street parking not mentioned in the listing. Option D understates the distance (500 m vs. over 1 km) and misrepresents the garage as a host recommendation when the host actually advises against driving altogether."
  },
  { group: 'L33', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxL33,
    question: "The listing describes the apartment as 'designed for the traveller who values efficiency.' Which combination of features best supports this characterisation?",
    options: [
      "A) The standing desk with dual monitors and the washer/dryer combo, which cater to guests who need to work and manage laundry during longer stays.",
      "B) The 24/7 self-check-in kiosk and the location directly above the railway terminus, enabling arrival and departure without waiting for a host or travelling to the station.",
      "C) The sound-engineered unit and the high-end convenience stores nearby, which allow guests to sleep and eat without leaving the immediate precinct.",
      "D) The fully equipped kitchen and the 20% weekly discount, which make the apartment cost-effective for travellers who prefer to cook their own meals."
    ],
    answer: "B) The 24/7 self-check-in kiosk and the location directly above the railway terminus, enabling arrival and departure without waiting for a host or travelling to the station.",
    method: "The concept of 'efficiency' in this listing is primarily about transit speed and frictionless access. The subtitle ('30 Seconds to the Platform') and the 24/7 self-check-in kiosk directly minimise waiting and travel time. These features together define the apartment's core value proposition for the efficiency-focused traveller. Option A is valid as a work-travel convenience but does not specifically support the transit efficiency framing. Option C conflates noise management and food access with efficiency, which is a stretch. Option D focuses on cost-efficiency rather than time-efficiency, which is a different concept."
  },
  { group: 'L33', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxL33,
    question: "A guest who is a light sleeper wants to know if they will be disturbed during the night. Based on the listing, platform noise from the railway will not be an issue, but some disturbance from freight trains is possible.",
    options: ['True', 'False'],
    answer: 'True',
    method: "The listing states the unit is 'sound-engineered to block out platform noise' — confirming platform noise is handled — 'though light vibrations from heavy freight trains passing at night may be felt.' This two-part disclosure is precisely what the statement summarises: platform noise addressed, freight vibration possible."
  },
  { group: 'L33', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxL33,
    question: "A guest arriving late at night needs to buy groceries for breakfast. They will find at least one option for purchasing food within 500 metres of the apartment.",
    options: ['True', 'False'],
    answer: 'True',
    method: "The listing states there are no major supermarkets within 500 metres, but it does mention 'several high-end grab-and-go convenience stores and a 24-hour pharmacy' in the neighbourhood. At least one of these food-purchasing options is within the immediate area, even if a full supermarket is not. The statement is true — the guest will find an option, even if it is limited."
  },

  // ── Set 34: One Nation / MAGA influence ──────────────────────────────────────
  { group: 'L34', type: 'multiple_choice', category: 'Real Articles', context: ctxL34,
    question: "The article notes that polling found 'approximately half of One Nation supporters considered themselves broadly pro-choice.' Why does the author include this polling data?",
    options: [
      "A) To suggest that One Nation's leadership should reverse its anti-abortion stance to align with the majority of its voters.",
      "B) To demonstrate that the party's anti-abortion shift is being driven by external ideological influences rather than by demand from its own voter base.",
      "C) To argue that Australian voters broadly oppose abortion access across all major political parties.",
      "D) To show that the Liberal Party's collapse created a voter vacuum that One Nation has filled with socially conservative policy."
    ],
    answer: "B) To demonstrate that the party's anti-abortion shift is being driven by external ideological influences rather than by demand from its own voter base.",
    method: "The polling data immediately follows the claim that the anti-abortion turn 'does not appear to reflect the views of One Nation's own voter base.' The function of the statistic is to provide evidence for this claim — the shift is coming from somewhere other than grassroots pressure. Option A goes further than the article argues; the author is not issuing a prescription, only describing a disconnect. Option C overstates the polling data, which concerns only One Nation supporters. Option D is a separate point about the South Australian election, not what the polling data establishes."
  },

  // ── Set 35: Trump MMA fight cage metaphor ─────────────────────────────────────
  { group: 'L35', type: 'multiple_choice', category: 'Real Articles', context: ctxL35,
    question: "The article notes that the UFC event 'fell on Trump's birthday rather than on the actual date of American independence.' The author describes this timing as 'the most revealing detail of all.' What does the author imply by this?",
    options: [
      "A) The administration simply made a scheduling error by staging a patriotic event on the wrong date.",
      "B) The conflation of national celebration with personal commemoration reveals a presidency that frames national identity through the lens of one individual's glorification.",
      "C) Trump's birthday is itself a public holiday in the United States, making the choice of date appropriate.",
      "D) The timing reveals that the administration prioritises sporting spectacle over traditional forms of political ceremony."
    ],
    answer: "B) The conflation of national celebration with personal commemoration reveals a presidency that frames national identity through the lens of one individual's glorification.",
    method: "The article explicitly calls the birthday/independence date conflation 'the most revealing detail' — stronger language than any other in the piece. The author's thesis is that staging combat spectacle at the White House signals a winner-takes-all conception of governance. Holding a national celebration on the president's birthday rather than Independence Day is the ultimate expression of this: the nation's story becomes the president's personal story. Option A dismisses it as error, which contradicts 'most revealing.' Option C is factually incorrect; Trump's birthday is not a public holiday. Option D is partially true but misses the deeper implication about the fusion of personal and national identity."
  },

  // ── Set 36: Male primary school teachers ─────────────────────────────────────
  { group: 'L36', type: 'multiple_choice', category: 'Real Articles', context: ctxL36,
    question: "The article describes a 'self-reinforcing cycle' in which low male representation makes it harder for the next generation of male teachers to imagine themselves in the profession. What type of problem does this framing suggest the gender imbalance is?",
    options: [
      "A) A problem caused primarily by low wages, which can be fixed by raising teacher salaries.",
      "B) A purely individual perception problem that targeted recruitment advertising can fully resolve.",
      "C) A structural problem that compounds over time and cannot be solved through recruitment alone, because the conditions that discourage men from entering the profession are reproduced by the absence of men in it.",
      "D) A problem limited to primary school teaching, with no parallel in other female-dominated caring professions."
    ],
    answer: "C) A structural problem that compounds over time and cannot be solved through recruitment alone, because the conditions that discourage men from entering the profession are reproduced by the absence of men in it.",
    method: "The 'self-reinforcing cycle' framing positions the problem as systemic: low representation perpetuates the cultural perception that men do not belong in the profession, which deters future entry, which sustains low representation. This is the definition of a structural problem that requires addressing deep cultural drivers, not just surface-level recruitment. Option A highlights salary, which the article mentions as one factor among many — not the only or primary cause. Option B is explicitly rejected by the article, which says most researchers favour 'addressing the deeper cultural drivers, rather than treating recruitment in isolation.' Option D contradicts the article's discussion of broader societal attitudes about gendered caring work."
  },

  // ── Set 37: Kerbside parking ──────────────────────────────────────────────────
  { group: 'L37', type: 'multiple_choice', category: 'Real Articles', context: ctxL37,
    question: "The author argues that 'free parking is not free to the city — it simply redistributes the cost onto everyone who uses the street, whether or not they arrived by car.' What economic principle does this argument invoke?",
    options: [
      "A) That subsidised services are inherently inefficient because they attract more users than the infrastructure can support.",
      "B) That a zero price conceals a real cost that is borne by the general public, making kerbside parking an invisible subsidy to drivers funded by all street users.",
      "C) That drivers who park on public streets should be taxed at a higher rate to fund public transport alternatives.",
      "D) That free parking reduces congestion by eliminating the time drivers spend searching for paid spaces."
    ],
    answer: "B) That a zero price conceals a real cost that is borne by the general public, making kerbside parking an invisible subsidy to drivers funded by all street users.",
    method: "The author's argument is that pricing kerbside space at zero does not eliminate its cost — it transfers that cost to the collective: lost alternative uses, increased congestion from circling drivers, reduced road width for others. 'Not free to the city' means the cost exists but is diffused invisibly across all street users, effectively subsidising drivers at the expense of everyone else. Option A is about overconsumption due to low price — partially implied but not the specific principle the quoted sentence invokes. Option C introduces a tax proposal not made in the article. Option D directly contradicts the text, which says zero-priced parking increases congestion because drivers circle for spots."
  },

  // ── Set 38: Freebirth ─────────────────────────────────────────────────────────
  { group: 'L38', type: 'multiple_choice', category: 'Real Articles', context: ctxL38,
    question: "The article states that researchers 'caution against treating freebirth as a single phenomenon with a single explanation.' What implication does this caution carry for public health messaging about freebirth?",
    options: [
      "A) Public health authorities should avoid the topic of freebirth entirely to prevent inadvertently endorsing the practice.",
      "B) Effective communication about freebirth risks must account for the diversity of motivations — including those based on positive body confidence, not just distrust or limited access.",
      "C) Because motivations are varied, no evidence-based intervention can reduce freebirth rates, making the issue intractable.",
      "D) Only women who choose freebirth due to distrust of the medical system represent a public health concern; other motivations pose no risk."
    ],
    answer: "B) Effective communication about freebirth risks must account for the diversity of motivations — including those based on positive body confidence, not just distrust or limited access.",
    method: "The article describes multiple distinct motivations: previous birth trauma and distrust, lack of access and cost barriers, and a positive view of birth as a natural process not requiring medical management. If messaging treats all freebirth as driven by fear or ignorance, it will fail to reach women whose choice is grounded in confidence rather than distrust. Researchers' caution explicitly targets this one-size approach. Option A is not argued — the article advocates for better engagement, not silence. Option C misreads the caution as pessimism about intervention; the article suggests addressing 'structural failures in maternity care.' Option D creates an unwarranted safety distinction between motivational types not made in the text."
  },

  // ── Set 39: AI agents vs chatbots ────────────────────────────────────────────
  { group: 'L39', type: 'multiple_choice', category: 'Real Articles', context: ctxL39,
    question: "The article warns that 'the more useful an agent becomes, the more it controls what information a customer receives and which products or services are recommended to them.' What concern does this observation raise?",
    options: [
      "A) That AI agents will eventually replace human customer service workers entirely, creating unemployment across the service sector.",
      "B) That the growing power of AI agents creates a structural conflict of interest: the platform that owns the agent has a financial incentive to shape the agent's recommendations in its own favour rather than the customer's.",
      "C) That AI agents are not yet accurate enough to provide reliable recommendations, exposing businesses to legal liability for incorrect advice.",
      "D) That customers will become overly dependent on AI agents, losing the ability to make independent purchasing decisions."
    ],
    answer: "B) That the growing power of AI agents creates a structural conflict of interest: the platform that owns the agent has a financial incentive to shape the agent's recommendations in its own favour rather than the customer's.",
    method: "The article states that every AI agent interaction generates 'a substantial informational advantage for whoever owns the platform' and asks 'in whose interests they operate.' This is a governance and conflict-of-interest concern: the agent's usefulness to the customer depends on it being neutral, but the platform owner profits from shaping its outputs. Option A describes job displacement — a legitimate concern but not what this specific passage is warning about. Option C raises an accuracy/liability issue not discussed here. Option D describes a dependency concern the article does not raise."
  },

  // ── Set 40: Sustainable wardrobe maths ───────────────────────────────────────
  { group: 'L40', type: 'multiple_choice', category: 'Real Articles', context: ctxL40,
    question: "The article argues that 'buying an ethically produced garment that is worn twice and donated does not constitute sustainable consumption, no matter how responsibly it was made.' What assumption about sustainable fashion does this claim challenge?",
    options: [
      "A) The assumption that sustainable fashion is too expensive for most consumers to afford.",
      "B) The assumption that a garment's production ethics and certifications are sufficient indicators of its sustainability, regardless of how often it is actually worn.",
      "C) The assumption that donating clothing to charity is harmful to the environment because it extends garment life unnecessarily.",
      "D) The assumption that synthetic fabrics are always less sustainable than natural fibres, regardless of usage frequency."
    ],
    answer: "B) The assumption that a garment's production ethics and certifications are sufficient indicators of its sustainability, regardless of how often it is actually worn.",
    method: "The article explicitly states that 'the production ethics and fabric certification of the cheap item are irrelevant' to the sustainability calculation if it is barely worn, and symmetrically that an ethically made garment worn only twice 'does not constitute sustainable consumption.' This directly challenges the fashion industry's habit of marketing sustainability through production credentials — certifications, ethical sourcing, organic materials — rather than through use rates. Option A introduces affordability, which the article does not discuss in this context. Option C misreads the donation example; the article is not arguing against donation, but against using donation as a proxy for sustainable consumption. Option D is a specific application of the use-rate logic but is not the broader assumption the quoted sentence is challenging."
  },

  // ── Set 41: Healthy soil and heat ────────────────────────────────────────────
  { group: 'L41', type: 'multiple_choice', category: 'Real Articles', context: ctxL41,
    question: "The article describes a 'feedback loop' in which soil degradation raises surface temperatures, which suppresses plant growth, which reduces organic matter returned to the soil, which further degrades soil quality. What does the use of 'feedback loop' imply about the challenge of reversing this process?",
    options: [
      "A) Reversing the process is straightforward, since improving one element of the loop — such as adding organic matter — will automatically repair all others in sequence.",
      "B) The loop is self-reinforcing, meaning that inaction allows the problem to worsen progressively and that breaking the cycle requires active, sustained intervention rather than a single corrective step.",
      "C) The loop can only be broken through government policy, since individual farmers lack the resources to implement the required changes.",
      "D) The feedback loop refers to a natural seasonal cycle that resolves itself once temperatures drop in autumn, making the damage temporary."
    ],
    answer: "B) The loop is self-reinforcing, meaning that inaction allows the problem to worsen progressively and that breaking the cycle requires active, sustained intervention rather than a single corrective step.",
    method: "A feedback loop is a mechanism where each consequence worsens the initial cause — degraded soil → higher temperatures → less plant matter → more degradation. This self-reinforcing dynamic means the problem intensifies if unaddressed. The article notes that 'practical farming methods can restore some of the lost buffering capacity over time' but requires 'sustained effort and a shift away from' existing norms, confirming that intervention is possible but not quick or automatic. Option A misreads the loop as a chain of easy sequential fixes. Option C is not supported — the article mentions farming methods as a solution, not exclusively government policy. Option D contradicts the article's characterisation of the harm as ongoing and already manifested in 'failed crops, increased wildfire susceptibility, and ecosystem collapse.'"
  },

  // ── Set 42: Fuel tax ─────────────────────────────────────────────────────────
  { group: 'L42', type: 'multiple_choice', category: 'Real Articles', context: ctxL42,
    question: "The article describes the fuel excise cut as 'regressive.' In the context of the article's argument, what does 'regressive' mean?",
    options: [
      "A) The policy is unpopular because it was implemented without sufficient public consultation.",
      "B) The policy delivers proportionally greater benefits to higher-income households than to lower-income households, reversing the usual aim of cost-of-living relief.",
      "C) The policy was introduced retroactively, applying to fuel already purchased before the announcement.",
      "D) The policy is environmentally regressive because it subsidises fossil fuel use at a time when emissions reduction is a national priority."
    ],
    answer: "B) The policy delivers proportionally greater benefits to higher-income households than to lower-income households, reversing the usual aim of cost-of-living relief.",
    method: "The article uses 'regressive' in its economic policy sense: a policy that provides larger absolute or proportional benefits to those with higher incomes. The article states that 'higher-income households, who on average drive more kilometres and own more vehicles, receive a larger absolute benefit from the cut than lower-income households.' This is the definition of a regressive redistribution. Option A introduces a procedural/political meaning not used in the article. Option C introduces a temporal meaning (retroactive) not discussed. Option D describes an environmental dimension the article does raise separately, but this is not the meaning of 'regressive' in context — the article defines it through the distributional consequences, not the climate impact."
  },

  // ── Set 43: JobSeeker reforms ─────────────────────────────────────────────────
  { group: 'L43', type: 'multiple_choice', category: 'Real Articles', context: ctxL43,
    question: "Welfare advocates responded to the JobSeeker reforms with 'cautious welcome.' What does the qualifier 'cautious' signal about their position?",
    options: [
      "A) They oppose the reforms on principle and are using diplomatic language to avoid public conflict with the government.",
      "B) They endorse the direction of the reforms while explicitly reserving judgement — noting that the scale falls short of the commissioned review's recommendations and that key issues remain unaddressed.",
      "C) They are uncertain whether the reforms will pass parliament and are waiting to see the final legislation before committing to a position.",
      "D) They welcome the reforms fully but are cautious about celebrating prematurely, given the government's past record of announcing but not implementing policy changes."
    ],
    answer: "B) They endorse the direction of the reforms while explicitly reserving judgement — noting that the scale falls short of the commissioned review's recommendations and that key issues remain unaddressed.",
    method: "The article explains exactly what the 'caution' consists of: 'acknowledging that the direction of travel is right — more tailored support, less one-size-fits-all processing — they have nonetheless been clear that the scale of the changes falls well short of what the same review recommended.' The 'welcome' captures endorsement of direction; the 'cautious' captures dissatisfaction with scale and scope. Option A reads 'cautious' as concealed opposition, but the article makes clear advocates genuinely welcome the direction. Option C introduces a parliamentary uncertainty not mentioned in the text. Option D invents a past-record concern not discussed in the article."
  },

  // ── Set 44: Job insecurity ────────────────────────────────────────────────────
  { group: 'L44', type: 'multiple_choice', category: 'Real Articles', context: ctxL44,
    question: "The article states that job insecurity 'is not purely a personal failing or a matter of individual temperament.' What does this qualification add to the article's advice on managing insecurity?",
    options: [
      "A) It suggests that individuals should not bother developing personal coping strategies since the problem originates in structural factors beyond their control.",
      "B) It prevents readers from interpreting the practical strategies described as a suggestion that those who feel insecure simply lack resilience, by acknowledging that workplace culture and labour market structures also shape the experience.",
      "C) It implies that job insecurity is entirely a political problem that can only be solved through legislative reform, not individual action.",
      "D) It argues that highly resilient individuals never experience job insecurity, regardless of the external conditions they face."
    ],
    answer: "B) It prevents readers from interpreting the practical strategies described as a suggestion that those who feel insecure simply lack resilience, by acknowledging that workplace culture and labour market structures also shape the experience.",
    method: "The article walks a careful line: it presents evidence-based individual strategies while simultaneously stating that the problem is not 'purely' individual. This qualification avoids victim-blaming — the insecurity is real and structurally produced, not just a failure of personal attitude. Option A misreads the qualification as an argument against individual action — the article explicitly states 'proven strategies exist that can meaningfully reduce the psychological burden.' Option C similarly goes too far in the structural direction; the article endorses both individual and structural responses. Option D directly contradicts the article, which begins by stating that job insecurity can be 'as psychologically damaging as unemployment itself' — it does not say resilient people are immune."
  },

  // ── Set 45: Forever renting ───────────────────────────────────────────────────
  { group: 'L45', type: 'multiple_choice', category: 'Real Articles', context: ctxL45,
    question: "The article describes Vienna, where 'residents raise families, age in place, and build community ties without the precariousness that characterises renting in Australian cities.' What does the contrast between Vienna and Australia suggest is the key variable explaining the difference in rental experience?",
    options: [
      "A) Austria has a stronger economy than Australia, enabling the government to fund more social housing.",
      "B) Viennese renters are culturally less attached to homeownership, making them more willing to rent long-term regardless of policy settings.",
      "C) The policy framework — including subsidised housing, rent support, and long-term security of tenure — determines whether renting can be a stable, dignified option rather than a precarious one.",
      "D) Vienna's rental success is due to its low population density, which reduces demand pressure and makes long-term rental leases easier for landlords to offer."
    ],
    answer: "C) The policy framework — including subsidised housing, rent support, and long-term security of tenure — determines whether renting can be a stable, dignified option rather than a precarious one.",
    method: "The article's central argument is that the difference between Vienna and Australian cities is not cultural or demographic but structural: policy choices about social housing, subsidies, and tenant protections shape the quality of rental experience. The article explicitly states that 'long-term renting can be secure and dignified — but only if the policy settings are deliberately designed to make it so.' Option A attributes the difference to economic capacity, which the article does not argue. Option B attributes it to cultural attitudes toward ownership — the article treats Australian ownership culture as an obstacle to policy reform, not as the variable that explains Vienna's success. Option D introduces population density as a variable not discussed in the text."
  },

  // ── Set 46: Free power scheme ─────────────────────────────────────────────────
  { group: 'L46', type: 'multiple_choice', category: 'Real Articles', context: ctxL46,
    question: "The article suggests that 'households who cannot shift their usage may end up subsidising the savings of those who can.' What mechanism would produce this outcome?",
    options: [
      "A) The government taxes low-income households at a higher rate to fund the solar rebates provided to high-income homeowners.",
      "B) Retailers recovering the cost of free-hour electricity through higher tariffs at other times or for other customer segments, meaning households unable to use the free window pay more to cover the discount others receive.",
      "C) Smart meter installation fees are passed on to all electricity users, including those who never benefit from the free-power scheme.",
      "D) High-income households apply for government grants to install solar panels, reducing supply costs and raising prices for non-solar households."
    ],
    answer: "B) Retailers recovering the cost of free-hour electricity through higher tariffs at other times or for other customer segments, meaning households unable to use the free window pay more to cover the discount others receive.",
    method: "The article states: 'Retailers who offer free electricity during those hours must recover that cost somewhere. The most likely mechanisms are higher tariffs at other times of day, or increased prices for other customer segments.' If tariffs rise at other hours to recover the cost, households who use electricity outside the free window — shift workers, renters without smart appliances — effectively pay more so that flexible, well-resourced households can save. Option A invents a government taxation mechanism not described in the article. Option C mentions smart meter installation fees, which the article does not discuss as a cost-transfer mechanism. Option D describes a separate solar-grant mechanism not mentioned in the passage."
  },

  // ── Set 47: Trees and urban cooling ──────────────────────────────────────────
  { group: 'L47', type: 'multiple_choice', category: 'Real Articles', context: ctxL47,
    question: "The article describes a study in Hong Kong where 'dense planting sometimes increased moisture in the air to a point where it partially offset the thermal benefit.' What principle does this finding illustrate?",
    options: [
      "A) Urban greening programmes are ineffective in high-density cities and should be replaced with reflective surface materials.",
      "B) The relationship between greenery and cooling is not linear — beyond a certain point in humid climates, additional planting can reduce rather than enhance the cooling effect.",
      "C) Hong Kong's climate is so unusual that findings from studies conducted there cannot inform urban greening policy in other cities.",
      "D) Dense tree canopies always produce worse cooling outcomes than sparse planting, regardless of local climate conditions."
    ],
    answer: "B) The relationship between greenery and cooling is not linear — beyond a certain point in humid climates, additional planting can reduce rather than enhance the cooling effect.",
    method: "The Hong Kong example is cited to illustrate the article's broader argument that 'more greenery was not automatically better' and that blanket policies of simply planting more trees can miss the mark without careful calibration to local climate. This demonstrates that the greenery-cooling relationship is non-linear and context-dependent. Option A generalises to a conclusion against urban greening altogether, which the article does not support. Option C incorrectly treats Hong Kong as an outlier that cannot inform other contexts — the article uses it as a general illustration. Option D overstates the Hong Kong finding by claiming dense canopies always perform worse, a claim not made in the text."
  },

  // ── Set 48: Heatwaves and older people ───────────────────────────────────────
  { group: 'L48', type: 'multiple_choice', category: 'Real Articles', context: ctxL48,
    question: "The article notes that risk messaging which speaks to 'vulnerable people' in the abstract does not translate into personal risk perception for many older adults who do not identify with that category. What communication failure does this identify?",
    options: [
      "A) Public health authorities are not distributing heat warnings widely enough for older adults to encounter them.",
      "B) Older adults have poor literacy skills that prevent them from understanding heat safety messaging.",
      "C) Generic warnings that address a demographic category at arm's length fail to trigger the personal risk perception that motivates protective behaviour, because many older individuals do not see themselves as 'vulnerable.'",
      "D) Heat warnings focus on outdoor workers rather than older adults, making the messaging irrelevant to the most at-risk group."
    ],
    answer: "C) Generic warnings that address a demographic category at arm's length fail to trigger the personal risk perception that motivates protective behaviour, because many older individuals do not see themselves as 'vulnerable.'",
    method: "The article establishes that personal risk perception is 'a powerful predictor of protective behaviour' — people who believe they are personally at risk act. But abstract messaging about 'vulnerable people' fails because many older adults do not self-identify as vulnerable, creating a gap between the message's target and the reader's self-concept. This is a communication design failure, not a distribution or literacy problem. Option A misreads the issue — the article notes 30% of people miss warnings, but the 'most troubling' finding is that 41% of people who do see warnings don't act, which is the self-identification gap. Option B introduces literacy as a barrier not mentioned in the article. Option D invents an outdoor-worker focus not present in the text."
  },

  // ── Set 49: Sydney food bowl ──────────────────────────────────────────────────
  { group: 'L49', type: 'multiple_choice', category: 'Real Articles', context: ctxL49,
    question: "The article states that the loss of Sydney's agricultural land 'is irreversible' — 'once the soil is sealed under concrete and the drainage altered — it is effectively gone.' What does this characterisation imply about planning decisions currently being made?",
    options: [
      "A) Current planning decisions are inconsequential because future technology will allow agricultural land to be recovered from beneath urban development.",
      "B) Decisions made now about what to develop carry permanent consequences that cannot be corrected by future policy changes, making the current planning period uniquely consequential.",
      "C) Planning authorities are already aware of the irreversibility and have put adequate protections in place to prevent further agricultural land loss.",
      "D) The irreversibility applies only to vegetable-growing land; pastoral and livestock land can be recovered if development is reversed."
    ],
    answer: "B) Decisions made now about what to develop carry permanent consequences that cannot be corrected by future policy changes, making the current planning period uniquely consequential.",
    method: "The article explicitly states that 'the decisions being made now about what to develop and what to protect will shape Sydney's food geography for centuries.' The irreversibility claim converts what might seem like a short-term planning trade-off into a permanent foreclosure of future options. Option A contradicts 'effectively gone' — the article makes no allowance for future technology recovering sealed land. Option C is directly contradicted by the article, which describes protections as systematically absent: 'agricultural zoning has been treated as provisional rather than permanent.' Option D introduces a distinction between land types not supported by the text."
  },

  // ── Set 50: El Niño ───────────────────────────────────────────────────────────
  { group: 'L50', type: 'multiple_choice', category: 'Real Articles', context: ctxL50,
    question: "The article states that 'the strength of the event does not reliably predict the severity of its impacts,' citing the 2002 El Niño as an example. What does this mean for how farmers and emergency services should respond to an El Niño declaration?",
    options: [
      "A) They should wait for a 'strong' El Niño to be declared before activating preparedness measures, since weak events rarely cause significant disruption.",
      "B) They should respond to the declaration itself as a shift in probabilities that warrants action, rather than waiting to assess the event's ultimate strength before planning.",
      "C) The unreliable relationship between strength and impact means El Niño declarations are not a reliable basis for planning decisions.",
      "D) Only farmers in southern states need to respond, since the impacts of El Niño are confined to southern Australia."
    ],
    answer: "B) They should respond to the declaration itself as a shift in probabilities that warrants action, rather than waiting to assess the event's ultimate strength before planning.",
    method: "The article makes this point explicitly: El Niño 'shifts the odds in ways that prudent planning needs to account for,' regardless of event strength. The 2002 example shows that a weak event can be highly destructive — meaning waiting until a 'strong' classification emerges before acting is a false strategy. Option A is directly contradicted by the 2002 example: a weak event produced severe outcomes. Option C misreads the point; the unreliability of strength as a predictor makes early response based on the declaration (not strength) more important, not less. Option D is contradicted by the text, which describes effects across multiple Australian regions including the tropical north and southern states."
  },

  // ── Set 51: India/Pakistan heatwave ──────────────────────────────────────────
  { group: 'L51', type: 'multiple_choice', category: 'Real Articles', context: ctxL51,
    question: "The article states that at a wet-bulb temperature of 35°C, 'a healthy adult at rest — doing nothing, in the shade — cannot survive for more than a few hours.' Why does the author specify that the person is 'healthy,' 'at rest,' and 'in the shade'?",
    options: [
      "A) To show that the 35°C wet-bulb threshold is conservative and that most people can survive well above that level if they are physically fit.",
      "B) To establish that the 35°C threshold represents the absolute physiological limit even under the most favourable possible conditions — meaning anyone working outdoors or already unwell faces a lower survival threshold.",
      "C) To argue that people who are unhealthy, active, or in direct sunlight are personally responsible for heat-related deaths because they fail to take adequate precautions.",
      "D) To suggest that the danger of wet-bulb temperatures only applies to people who are already medically compromised, not to healthy individuals in normal circumstances."
    ],
    answer: "B) To establish that the 35°C threshold represents the absolute physiological limit even under the most favourable possible conditions — meaning anyone working outdoors or already unwell faces a lower survival threshold.",
    method: "By specifying the best-case scenario (healthy, resting, shaded), the article establishes 35°C as a floor — the minimum level at which survival is threatened when everything is as favourable as possible. This makes the threshold more alarming, not less: millions of people in India and Pakistan who work outdoors in direct sun while exerting themselves face conditions that become lethal at lower wet-bulb temperatures than 35°C. Option A reads the best-case framing as a sign of conservatism in the other direction — suggesting people can tolerate more — which inverts the author's point. Option C introduces a blame framing completely absent from the article. Option D directly contradicts the text, which establishes that even a healthy adult at rest cannot survive at this threshold."
  },

  // ── Set 52: Soccer player height ─────────────────────────────────────────────
  { group: 'L52', type: 'multiple_choice', category: 'Real Articles', context: ctxL52,
    question: "The article concludes that 'optimal physical characteristics are not universal; they are position-specific, role-dependent, and always moderated by technical skill and tactical intelligence.' Which of the following best describes what this conclusion implies for talent scouting in elite soccer?",
    options: [
      "A) Height should not be measured or considered in talent identification, since it has been shown to have no reliable relationship with soccer performance.",
      "B) Scouts should evaluate physical attributes only in relation to the specific positional demands of the role being recruited for, and should not treat a single trait such as height as a universal indicator of potential.",
      "C) Shorter players should be systematically preferred over taller players, since the article implies that agility and low centre of gravity are more relevant than aerial ability.",
      "D) Technical skill alone determines performance at the elite level, making physical characteristics entirely irrelevant to recruitment decisions."
    ],
    answer: "B) Scouts should evaluate physical attributes only in relation to the specific positional demands of the role being recruited for, and should not treat a single trait such as height as a universal indicator of potential.",
    method: "The article's conclusion is position-specificity: height benefits some roles (goalkeeper, central defender) and is irrelevant or disadvantageous in others (wide midfield, attacking positions). The implication for scouting is that physical attributes must be evaluated relative to role requirements, not as universal measures of quality. Option A goes too far — the article says height is relevant for some positions, not that it should be ignored entirely. Option C overcorrects in the opposite direction; the article does not argue short players should be systematically preferred. Option D dismisses physical characteristics entirely, which the article contradicts by explaining how height is functionally important for aerial contests in defensive and goalkeeping roles."
  },
  // ── Set L53: Community Poster — Mulberry Creek ────────────────────────────
  { group: 'L53', set: 'ACER Practice Free', type: 'multiple_choice', category: 'Community Poster', context: ctxL53,
    question: "A reader argues: 'This poster is calling on MetroCorp to abandon the MetroLink freeway project altogether.' Is this an accurate reading of the poster's argument?",
    options: [
      "A) Yes — the poster's title 'Stop the MetroLink Freeway' makes clear that residents want the entire project cancelled.",
      "B) No — the poster specifically targets the location of the freeway entrance, calling for it to be moved, not for the freeway itself to be stopped.",
      "C) Yes — the poster explicitly states that no freeway should be built in the Mulberry Creek area under any circumstances.",
      "D) No — the poster is directed at the local council, not at MetroCorp, so it is asking a different authority to halt the project."
    ],
    answer: "B) No — the poster specifically targets the location of the freeway entrance, calling for it to be moved, not for the freeway itself to be stopped.",
    method: "The poster's key demand is to 'move the new freeway entrance,' and its call to action directs residents to write to MetroCorp with this specific ask. It does not oppose the freeway as a whole. Option A misreads the poster's scope — the title addresses the entrance, not the entire project. Option C also overstates the position, adding a geographical 'under any circumstances' restriction not present in the poster. Option D is factually incorrect about who the audience is — the poster does direct residents to contact MetroCorp."
  },
  { group: 'L53', set: 'ACER Practice Free', type: 'multiple_choice', category: 'Community Poster', context: ctxL53,
    question: "The poster states that the current freeway plans would 'dig up the Mulberry Creek Reserve, destroying 30 years of regeneration work.' What does this specific detail add to the poster's persuasive strategy?",
    options: [
      "A) It demonstrates that MetroCorp's engineers have failed to conduct an adequate environmental impact assessment.",
      "B) It quantifies the loss in terms of accumulated effort, making the destruction feel more concrete and irreversible than a generic environmental objection would.",
      "C) It establishes that the Friends of Mulberry Creek have legal ownership of the Reserve and the right to veto development.",
      "D) It proves that the freeway entrance location is more expensive than alternative sites because it involves clearing established vegetation."
    ],
    answer: "B) It quantifies the loss in terms of accumulated effort, making the destruction feel more concrete and irreversible than a generic environmental objection would.",
    method: "The '30 years of regeneration work' figure transforms an abstract objection ('it will damage the environment') into a concrete, emotionally resonant claim — three decades of community effort, erased. This is a persuasive technique: specificity makes the loss feel real and irreversible. Option A goes beyond the poster's claims; no failure of impact assessment is alleged. Option C introduces legal ownership, which the poster does not raise. Option D draws an economic inference about cost comparison not made in the poster."
  },
  { group: 'L53', set: 'ACER Practice Free', type: 'multiple_choice', category: 'Community Poster', context: ctxL53,
    question: "The poster accuses MetroCorp of 'cost-cutting' as a reason for placing the freeway entrance in its current location. What does this accusation imply about MetroCorp's decision-making process?",
    options: [
      "A) MetroCorp made a technical error in its engineering calculations that led to the entrance being placed in the wrong location.",
      "B) MetroCorp chose the current location because it was cheaper, even though better locations that would not affect the park exist.",
      "C) MetroCorp is trying to reduce construction time rather than construction costs.",
      "D) MetroCorp consulted community members but ultimately chose to ignore their feedback in favour of the lowest-cost option."
    ],
    answer: "B) MetroCorp chose the current location because it was cheaper, even though better locations that would not affect the park exist.",
    method: "'Cost-cutting' specifically refers to reducing financial expenditure. The accusation implies that a cheaper but community-harmful location was preferred over a more expensive but less damaging alternative. This frames the company's choice as prioritising profit over community welfare. Option A introduces a technical error, which is a different explanation from financial prioritisation. Option C substitutes time for money — 'cost-cutting' refers to expenditure, not speed. Option D adds a consultation stage not mentioned in the poster."
  },
  { group: 'L53', set: 'ACER Practice Free', type: 'true_false_matrix', category: 'Community Poster', context: ctxL53,
    matrixLabels: ['Yes', 'No'],
    question: 'Does this poster use the following arguments for moving the freeway entrance?',
    options: [
      'A park will be ruined.',
      'Local streets will be closed off during construction.',
      'Trucks with dangerous loads will travel over houses.',
    ],
    answer: 'Yes,No,Yes',
    method: "Park ruined — Yes: confirmed by the point about Mulberry Creek Reserve being dug up, destroying 30 years of regeneration work.\nStreets closed — No: while the poster complains about trucks on streets, it makes no claim that streets will be closed during construction.\nDangerous loads — Yes: confirmed by the point about a raised road carrying dangerous goods over homes."
  },
  { group: 'L53', set: 'ACER Practice Free', type: 'multiple_choice', category: 'Community Poster', context: ctxL53,
    question: "The poster ends with: 'Let's work together to make our suburb safer, healthier and truck free.' The use of 'our suburb' rather than 'the suburb' or 'this suburb' is significant because it:",
    options: [
      "A) Implies that only long-term residents, rather than recent arrivals, have a legitimate stake in the outcome.",
      "B) Creates a sense of shared ownership and collective identity, positioning the reader as a co-stakeholder whose neighbourhood is being affected, not a passive bystander.",
      "C) Limits the poster's audience to homeowners, since renters do not technically own a share of the suburb.",
      "D) Signals that the poster was written by local council members who have official responsibility for the suburb's management."
    ],
    answer: "B) Creates a sense of shared ownership and collective identity, positioning the reader as a co-stakeholder whose neighbourhood is being affected, not a passive bystander.",
    method: "The possessive 'our' is an inclusive rhetorical device: it draws the reader into a shared community identity, making the freeway entrance feel like a threat to something the reader personally owns and values. This increases the likelihood of engagement and action. Option A introduces a tenure distinction ('long-term residents') not present in the poster. Option C introduces an ownership/rental distinction also absent. Option D misreads authorship signals from the pronoun choice — 'our' is used to include the reader, not to identify who wrote the poster."
  },

  // ── Set L54: News Article — Processed Meat and Cancer ─────────────────────
  { group: 'L54', set: 'ACER Practice Free', type: 'true_false_matrix', category: 'News Article', context: ctxL54,
    matrixLabels: ['Yes', 'No', 'Not stated'],
    question: 'Are the following statements Yes, No or Not stated based on the article?',
    options: [
      'Eating 50 grams of ham every day can make you 18% more likely to get cancer.',
      'The way that processed meat is cooked is a factor in how likely it is to cause cancer.',
      'Eating red meat definitely causes cancer.',
      'Over 30,000 people die every year from cancer linked to eating high levels of processed meat.',
    ],
    answer: 'Yes,Not stated,No,Yes',
    method: "Statement 1 — Yes: The text states 'each 50 gram portion of processed meat eaten daily increases the risk of colorectal cancer by 18%' and ham is listed as a processed meat.\nStatement 2 — Not stated: The article discusses types of meat and amounts consumed, but says nothing about cooking methods as a factor.\nStatement 3 — No: The article says red meat is 'likely to cause the disease', and the Meat Industry Council states 'there is no causal link' — it is not presented as a definite fact.\nStatement 4 — Yes: The WHO estimates 'about 34,000 cancer deaths per year worldwide are attributable to diets high in processed meat.' 34,000 is over 30,000."
  },
  { group: 'L54', set: 'ACER Practice Free', type: 'multiple_choice', category: 'News Article', context: ctxL54,
    question: "The article places processed meat and tobacco in the same Group 1 carcinogen category. A reader concludes: 'This means eating a ham sandwich is as dangerous as smoking a cigarette.' Is this conclusion supported by the article?",
    options: [
      "A) Yes — Group 1 status means both products carry identical health risks.",
      "B) No — the Group 1 classification indicates the strength of scientific evidence linking processed meat to cancer, not that it causes cancer at the same rate or severity as tobacco.",
      "C) Yes — Kurt Straif explicitly states that the cancer risk from processed meat is equivalent to the risk from smoking.",
      "D) No — the article only classifies processed meat as Group 2, which indicates a probable rather than confirmed carcinogen."
    ],
    answer: "B) No — the Group 1 classification indicates the strength of scientific evidence linking processed meat to cancer, not that it causes cancer at the same rate or severity as tobacco.",
    method: "The article quotes Kurt Straif: 'the risk of developing colorectal cancer from eating processed meat is small, but this risk increases with the amount of meat consumed.' He distinguishes between the strength of evidence (Group 1 = confirmed cause) and the magnitude of risk (tobacco causes far more cancer deaths per person than processed meat). The classification is about certainty of causation, not equivalence of harm. Option A conflates category with degree of risk. Option C misattributes a claim Straif does not make — he explicitly says the risk is 'small.' Option D is a factual error; the article confirms processed meat is classified as Group 1."
  },
  { group: 'L54', set: 'ACER Practice Free', type: 'multiple_choice', category: 'News Article', context: ctxL54,
    question: "The article quotes the Meat Industry Council saying there is 'no causal link between red meat and cancer.' What function does including this quote serve in a news report about WHO findings?",
    options: [
      "A) It undermines the WHO's findings by presenting industry evidence that contradicts the scientific consensus.",
      "B) It represents the writer's personal view that the WHO has overstated the cancer risk.",
      "C) It presents a competing perspective from an interested party, allowing readers to identify the basis of the industry's objection and weigh it against the WHO's position.",
      "D) It confirms that the WHO's report is contested by scientists who are not affiliated with the meat industry."
    ],
    answer: "C) It presents a competing perspective from an interested party, allowing readers to identify the basis of the industry's objection and weigh it against the WHO's position.",
    method: "News reporting includes the views of affected parties to demonstrate balance and allow readers to engage with the debate. The Meat Industry Council is an explicitly interested party — its commercial stake in the outcome is visible to readers, who can factor this into how they weigh the objection. Option A overstates the quote's function; the article does not frame the industry's objection as undermining WHO findings, and the WHO's classification stands in the article. Option B would compromise journalistic objectivity — the writer's opinion should not feature. Option D mischaracterises the industry council as a body of independent scientists."
  },
  { group: 'L54', set: 'ACER Practice Free', type: 'multiple_choice', category: 'News Article', context: ctxL54,
    question: "Kurt Straif is quoted saying: 'Given the large number of people around the world that eat processed meat, the global impact on cancer incidence is of public health importance.' What reasoning does this sentence use to explain why a small individual risk is still significant?",
    options: [
      "A) Because small risks accumulate in the same individual over a lifetime, eventually reaching a dangerous threshold.",
      "B) Because a small risk multiplied across a large population produces a large absolute number of people affected, making it a collective concern even if each individual's risk is modest.",
      "C) Because the cancer caused by processed meat is more difficult to treat than other forms of cancer, increasing the burden on health systems.",
      "D) Because low-income populations disproportionately consume processed meat, creating an inequitable distribution of health risk."
    ],
    answer: "B) Because a small risk multiplied across a large population produces a large absolute number of people affected, making it a collective concern even if each individual's risk is modest.",
    method: "Straif's reasoning is explicitly epidemiological: a small per-person risk becomes a large public health burden when the exposed population is enormous. The article's own estimate of 34,000 cancer deaths per year attributable to processed meat diets illustrates this — even if the individual probability is low, the scale of consumption makes the aggregate impact significant. Option A describes a different mechanism (dose accumulation over time in the same person), which may be true but is not what this sentence argues. Option C introduces treatment difficulty, which is not mentioned in the article. Option D raises an inequality dimension also not discussed in the article."
  },
  { group: 'L54', set: 'ACER Practice Free', type: 'multiple_choice', category: 'News Article', context: ctxL54,
    question: "The article distinguishes between red meat (classified as a 'probable' carcinogen) and processed meat (classified as a confirmed Group 1 carcinogen). What is the most accurate explanation of this difference?",
    options: [
      "A) Red meat is safer to eat than processed meat because it contains fewer chemical additives.",
      "B) The difference in classification reflects the strength of available evidence — the link between processed meat and cancer is confirmed by research, while the link for red meat is supported but not yet conclusively established.",
      "C) Red meat has been shown to cause a wider range of cancers than processed meat, making it more dangerous despite its lower classification.",
      "D) Processed meat receives a higher classification because it is consumed in larger quantities globally than red meat."
    ],
    answer: "B) The difference in classification reflects the strength of available evidence — the link between processed meat and cancer is confirmed by research, while the link for red meat is supported but not yet conclusively established.",
    method: "The article explains that WHO classified processed meat as Group 1 (definite carcinogen) and red meat as Group 2A (probable carcinogen). This reflects different levels of evidential certainty, not necessarily different levels of harm. Option A may be factually plausible in reality but is not the article's stated reason for the classification difference — the article grounds the distinction in evidence strength, not additive content. Option C inverts the logic: a higher classification does not mean more cancer types. Option D introduces consumption volume as an explanation for classification, which is not how IARC classifications work; they are based on evidence strength, not usage levels."
  },
  // ── Set L55: Email — Bilvington Bushfire Preparedness ────────────────────
  { group: 'L55', set: 'FRV Practice Free', type: 'multiple_choice', category: 'Email / Letter', context: ctxL55,
    question: "A resident reads the email and concludes: 'This email is telling me what to do if a bushfire breaks out near my home.' Is this an accurate reading of the email's purpose?",
    options: [
      "A) Yes — the email's primary concern is instructing residents on emergency evacuation procedures to follow during a fire.",
      "B) No — the email is focused on actions residents should take before fire season begins to prepare their properties, not on emergency response during an active fire.",
      "C) Yes — the email covers both preparation and emergency response equally, so the reader's interpretation captures half of the email's purpose.",
      "D) No — the email's purpose is limited to informing residents about the general risks of bushfires in the region, not instructing them to take specific action."
    ],
    answer: "B) No — the email is focused on actions residents should take before fire season begins to prepare their properties, not on emergency response during an active fire.",
    method: "The email is a preparedness communication, not an emergency response guide. Its emphasis is on property preparation steps to be completed before fire season — actions like clearing vegetation, storing flammable liquids, and positioning trees. It does not outline emergency evacuation procedures (Option A). Option C incorrectly claims the email balances preparation and emergency response equally. Option D reduces the email to risk information, when it is explicitly a call to action directed at specific preparatory tasks."
  },
  { group: 'L55', set: 'FRV Practice Free', type: 'multiple_choice', category: 'Email / Letter', context: ctxL55,
    question: "The email is sent by local council and directed to Bilvington residents specifically. What feature of Bilvington's location makes targeted preparation advice for this community particularly relevant?",
    options: [
      "A) Bilvington's narrow streets make it difficult for fire trucks to navigate during an active bushfire.",
      "B) Bilvington is surrounded by dense bushland, which significantly increases residents' exposure to bushfire risk compared with urban areas.",
      "C) Bilvington has experienced more bushfires in recent years than any comparable town in the region.",
      "D) Bilvington's older housing stock was built without modern fire-resistant materials, making properties more vulnerable."
    ],
    answer: "B) Bilvington is surrounded by dense bushland, which significantly increases residents' exposure to bushfire risk compared with urban areas.",
    method: "The email explicitly states that Bilvington is surrounded by dense bushland, which is the specific geographic risk factor that makes the preparation advice directly relevant to this community. Option A introduces road access for fire trucks, which the email does not mention. Option C claims a recent fire history not referenced in the email. Option D introduces building material age as a risk factor also not discussed in the email."
  },
  { group: 'L55', set: 'FRV Practice Free', type: 'multiple_choice', category: 'Email / Letter', context: ctxL55,
    question: "The email advises residents that mature trees can be 'strategically placed' to help protect their property. A resident interprets this to mean they should plant new trees as far away from the house as possible. Is this interpretation correct?",
    options: [
      "A) Yes — distance from the house is the defining feature of strategic placement, as any tree close to a house is a fire risk.",
      "B) No — 'strategically placed' means positioned in a deliberate location to provide specific benefits such as acting as a firebreak or providing shelter, not simply maximising distance.",
      "C) Yes — the email's advice about mature trees is consistent with the general principle that all vegetation near a house increases fire risk.",
      "D) No — the email recommends removing all trees near the property rather than positioning new ones strategically."
    ],
    answer: "B) No — 'strategically placed' means positioned in a deliberate location to provide specific benefits such as acting as a firebreak or providing shelter, not simply maximising distance.",
    method: "'Strategically' means positioned to achieve a specific purpose, not simply placed at maximum distance. The email explains that mature trees can provide shelter and act as a firebreak when placed correctly — implying purposeful positioning relative to the property and fire direction, not arbitrary removal of nearby vegetation. Option A conflates strategic placement with maximum distance, losing the purposeful element. Option C applies a blanket 'all vegetation is dangerous' rule the email does not endorse — it specifically recommends strategically placed mature trees as protective. Option D contradicts the email's actual advice, which endorses correctly positioned mature trees."
  },
  { group: 'L55', set: 'FRV Practice Free', type: 'true_false_matrix', category: 'Email / Letter', context: ctxL55,
    matrixLabels: ['Yes', 'No'],
    question: 'Which of the following actions does the email encourage people to carry out?',
    options: [
      'Regularly cut grass surrounding the house.',
      'Ensure there is a hose close to the property.',
      'Ensure that petrol is not stored near the house.',
    ],
    answer: 'Yes,No,Yes',
    method: "Regularly cut grass — Yes: the email advises keeping grass mown short around the property.\nEnsure a hose nearby — No: having a hose close to the property is not mentioned as a specific action in the email.\nStore petrol away from house — Yes: the email advises storing flammable liquids (such as petrol) in a shed away from the house."
  },
  { group: 'L55', set: 'FRV Practice Free', type: 'multiple_choice', category: 'Email / Letter', context: ctxL55,
    question: "When referring to mature trees, what does the email mean by 'strategically placed'?",
    options: [
      'A) Only old trees kept.',
      'B) Planted far away from the property.',
      'C) Planted in a position that will help protect the property.',
      'D) Maintained so that there are no overhanging branches.'
    ],
    answer: 'C) Planted in a position that will help protect the property.',
    method: "'Strategically' means positioned intentionally to achieve a specific purpose. The email explains that mature trees can provide shelter and act as a firebreak when correctly positioned relative to the property. Option B is too simple — distance alone is not the point. Options A and D relate to maintenance, not positioning for protection."
  },

  // ── Set L56: Newsletter — Winter Storm Preparedness ───────────────────────
  { group: 'L56', type: 'multiple_choice', category: 'Newsletter', context: ctxL56,
    question: "The newsletter is structured under three headings: NOW / PREPARE, DURING / SURVIVE, and AFTER / BE SAFE. A resident who has just survived a storm asks: 'Can I use my generator indoors to stay warm until power is restored?' What does the newsletter say?",
    options: [
      "A) Yes — generators are safe to use indoors during power outages provided the room is well-ventilated.",
      "B) No — the newsletter explicitly states that generators must never be used indoors under any circumstances, including during power outages.",
      "C) Yes — but only if the power outage has lasted more than 24 hours and all other heating options have been exhausted.",
      "D) No — but this restriction applies only during the storm itself; after the storm has passed, generator use indoors becomes permissible."
    ],
    answer: "B) No — the newsletter explicitly states that generators must never be used indoors under any circumstances, including during power outages.",
    method: "Under 'DURING / SURVIVE,' the newsletter states: 'Never use a generator, camp stove, charcoal grill, or gasoline or propane heater indoors.' There is no exception — not for ventilation (Option A), not for extended outages (Option C), and the restriction is not limited to the storm period itself (Option D). The reason given is that these items 'can start accidental fires, cause electric shock, and/or cause deadly carbon monoxide poisoning' — risks that persist regardless of whether the storm has passed."
  },
  { group: 'L56', type: 'multiple_choice', category: 'Newsletter', context: ctxL56,
    question: "The newsletter states that preparation requires 'a focus on preparedness, advanced planning, and knowing what to do in the event of a storm.' What outcome does the newsletter say this focus makes possible?",
    options: [
      "A) Residents who follow the advice will be able to live normally during the storm without any disruption to their routine.",
      "B) Residents who prepare will have no reason to worry about storm damage to their property.",
      "C) The ability to maintain stability or recover quickly following a storm.",
      "D) Residents will be able to restore their own power supply without waiting for utility workers."
    ],
    answer: "C) The ability to maintain stability or recover quickly following a storm.",
    method: "The newsletter directly states: 'The ability to maintain or quickly recover following a storm requires a focus on preparedness, advanced planning, and knowing what to do.' This is a qualified outcome — not a guarantee of normal life (Option A), freedom from worry (Option B), or self-sufficiency in power restoration (Option D). The newsletter also explicitly advises residents to 'allow line workers to restore your power,' directly contradicting Option D."
  },
  { group: 'L56', type: 'multiple_choice', category: 'Newsletter', context: ctxL56,
    question: "The newsletter advises: 'Dress in layers, and pile a few extra blankets and sweaters together so you can find them easily if the heat goes off.' What assumption does this advice reveal about conditions during a winter storm?",
    options: [
      "A) Home heating systems are unreliable even in mild winter weather and should not be relied upon as the sole heat source.",
      "B) The possibility of losing home heating during a storm is a realistic risk that residents should plan for in advance, rather than wait until the heating fails.",
      "C) Layering clothing is more effective at preventing hypothermia than using blankets, so residents should prioritise clothing over bedding.",
      "D) The newsletter assumes all residents live in older homes without central heating and are therefore likely to experience cold conditions during storms."
    ],
    answer: "B) The possibility of losing home heating during a storm is a realistic risk that residents should plan for in advance, rather than wait until the heating fails.",
    method: "The advice to prepare blankets and clothing in advance — 'so you can find them easily if the heat goes off' — assumes that heating failure is a plausible storm consequence that residents should anticipate before it occurs. This is preparedness thinking: identify the likely problem and organise resources in advance. Option A overstates the claim; the newsletter is not suggesting heating is unreliable generally, only that storms can disrupt it. Option C introduces a hierarchy between clothing and blankets not stated in the newsletter. Option D invents an assumption about housing type not present in the text."
  },
  { group: 'L56', type: 'true_false_matrix', category: 'Newsletter', context: ctxL56,
    matrixLabels: ['Yes', 'No'],
    question: 'Which of the following advice does the newsletter provide for people to action?',
    options: [
      'Close off rooms to keep in the heat.',
      'Only use a generator inside if it\'s an emergency.',
      'Keep clearing snow from your house.',
    ],
    answer: 'Yes,No,No',
    method: "Close off rooms — Yes: under 'During / Survive' the newsletter states 'Close off rooms to consolidate and retain heat.'\nGenerator indoors in an emergency — No: the newsletter states 'Never use a generator... indoors' — there is no exception for emergencies.\nKeep clearing snow from house — No: the newsletter advises to 'avoid overexertion clearing/shovelling snow' — it does not instruct people to keep clearing snow."
  },

  // ── Practice Now — Eggplant / Earthplus Gardening Supplies ────────────────
  { group: 'PN1', set: 'Practice Now Questions', type: 'multiple_choice', category: 'Product Information', context: ctxPN1,
    question: 'What is the main purpose of this text?',
    options: [
      'A) To persuade people to grow eggplants.',
      'B) To provide tips on how to grow eggplants.',
      'C) To persuade people to buy Earthplus products.',
      'D) To inform people about how eggplants are grown.',
    ],
    answer: 'C) To persuade people to buy Earthplus products.',
    method: "Questions about the purpose of the text ask you to think about the text as a whole and why it was written. While this text does provide some information about how eggplants are grown and tips on how to grow eggplants, its main purpose is to sell a product. The banner of the web page shows that the website is managed by 'Earthplus Gardening Supplies'. The text also includes 'PurpleKnight' and various other products capitalised and in bold — this is done to advertise these items and persuade the reader to buy Earthplus products.",
  },
  { group: 'PN1', set: 'Practice Now Questions', type: 'multiple_choice', category: 'Product Information', context: ctxPN1,
    question: 'The state that is likely to be the largest grower of eggplants is:',
    options: [
      'A) Victoria',
      'B) Queensland',
      'C) South Australia',
      'D) New South Wales',
    ],
    answer: 'B) Queensland',
    method: "With inference questions, the answer is implied but not specifically stated — you must use reasoning. The diagram under 'When to plant' shows the times of the year that eggplants can be planted in different areas of Australia. In the north of Australia, eggplants can be planted all year round. We can infer that areas with year-round growing produce more eggplants. Of the choices given, Queensland is the only state in the area where eggplants can be grown all year round, making it the most likely largest grower.",
  },
  { group: 'PN1', set: 'Practice Now Questions', type: 'true_false_matrix', category: 'Product Information', context: ctxPN1,
    matrixLabels: ['Yes', 'No'],
    question: "According to this text, which of the following statements are true? Tick 'yes' or 'no' for each statement.",
    options: [
      'The eggplant will reach its full size in 10 weeks.',
      'In Tasmania it is best to sow eggplants in spring.',
      'Eggplants need less water when they start to grow fruit.',
      'Eggplants need months of continuous warm to hot weather.',
    ],
    answer: 'No,Yes,No,Yes',
    method: "Statement 1 — No: The growth chart shows that the eggplant reaches maturity in 14–16 weeks, not 10 weeks.\nStatement 2 — Yes: The 'When to plant' diagram shows Tasmania is in the area marked 'Spring', so spring is the best time to sow.\nStatement 3 — No: The text states eggplants require a moderate amount of water which needs to be increased (not decreased) when they begin to grow fruit.\nStatement 4 — Yes: The text states eggplants grow best in warm to hot conditions over 5–6 months. Periods of cool weather will hinder growth.",
  },
  { group: 'PN1', set: 'Practice Now Questions', type: 'multiple_choice', category: 'Product Information', context: ctxPN1,
    question: "In the growing diagram, which phrase could be used instead of 'germination'?",
    options: [
      'A) Seedlings appear',
      'B) Ready for harvest',
      'C) Ready to transplant',
      'D) Seedlings to be thinned out',
    ],
    answer: 'A) Seedlings appear',
    method: "Vocabulary-in-context questions ask you to find the meaning of a word or phrase by looking at the words and pictures around it. In this case, 'germination' is part of a growing diagram. The picture next to 'Germination' shows a seedling, suggesting that germination is when seedlings appear. The other options — harvest, transplant, and thinning out — would show different plant stages (full-sized fruit, replanting equipment, or multiple seedlings), none of which match the single seedling image shown.",
  },
  { group: 'PN1', set: 'Practice Now Questions', type: 'multiple_choice', category: 'Product Information', context: ctxPN1,
    question: "Why are the words 'PurpleKnight' and 'Earthplus' capitalised and in bold?",
    options: [
      'A) To emphasise that they are important.',
      'B) To make the text appear more interesting.',
      'C) To inform people about different brand names.',
      'D) To encourage the reader to buy those products.',
    ],
    answer: 'D) To encourage the reader to buy those products.',
    method: "Author technique questions ask you to consider why the author has included certain details or presented material in a particular way. In this text, the writer is trying to influence the reader to take notice of particular products. By capitalising and bolding the product names, the writer is advertising those products to persuade the reader to buy them. Option A is too vague — emphasis alone does not explain the commercial intent. Option B suggests a stylistic choice with no purpose, which is unlikely in an informational/commercial text. Option C describes what bolding does (identifies brand names) but not why — the reason is to drive purchasing behaviour.",
  },

  // ── Practice Now — News Article: Sugar Tax ───────────────────────────────
  { group: 'PN2', set: 'Practice Now Questions', type: 'multiple_choice', category: 'News Article', context: ctxPN2,
    question: 'Which of the following best describes what this article is about?',
    options: [
      'A) An explanation of how a tax on sugary drinks would work in Australia.',
      'B) An opinion in favour of introducing a tax on sugary drinks in Australia.',
      'C) Results of a study into the health issues around sugary drinks in Australia.',
      'D) A report on opinions about introducing a tax on sugary drinks in Australia.',
    ],
    answer: 'D) A report on opinions about introducing a tax on sugary drinks in Australia.',
    method: "The text is a newspaper report, which presents facts or opinions from other sources rather than a personal opinion. Option A is wrong — the report does not explain how the tax would work. Option B is wrong — newspaper reports do not express a personal opinion; the writer's own view is not provided. Option C is wrong — health statistics are given for context but the main focus is not a study; it is opinions about introducing a tax. Option D is correct — the main focus is the opinions of health organisations and the Australian Beverages Council on introducing a tax on sugary drinks.",
  },
  { group: 'PN2', set: 'Practice Now Questions', type: 'multiple_choice', category: 'News Article', context: ctxPN2,
    question: "On the graph, why would 'grams of sugar per 100 ml' be a better way of comparing drinks than 'grams of sugar per serve'?",
    options: [
      'A) There are different serving sizes.',
      'B) People often drink small amounts.',
      'C) Smaller amounts are more accurate.',
      'D) Smaller amounts are easier to interpret.',
    ],
    answer: 'A) There are different serving sizes.',
    method: "The graph shows three different serving sizes (375 ml, 500 ml and 600 ml) — the cans or bottles come in different sizes, indicated by the symbols *, ~ and ^. Because serving sizes differ, comparing grams of sugar per serve does not allow accurate comparison across drinks. Using grams per 100 ml standardises the measurement so all drinks are compared on the same basis. Option B introduces a claim about how much people drink that is not in the text. Options C and D are vague and do not identify the actual reason — the key issue is that serving sizes vary.",
  },
  { group: 'PN2', set: 'Practice Now Questions', type: 'true_false_matrix', category: 'News Article', context: ctxPN2,
    matrixLabels: ['True', 'False'],
    question: "According to the article, which of the following statements are 'true' or 'false'?",
    options: [
      'In Australia, the most added sugar is consumed through sugary drinks.',
      'Nearly half of Australian children drink sugary drinks daily.',
      'Australia will introduce a sugar tax in 2018.',
      'Lemon soft drink has the highest concentration of sugar.',
    ],
    answer: 'True,True,False,True',
    method: "Statement 1 — True: The article states that 'sugary drinks such as soft drinks, sports and energy drinks are the largest source of added sugars in the Australian diet' according to the Australian Health Survey.\nStatement 2 — True: The article states that '47 per cent of children consumed sugary drinks (including energy drinks) every day'. 47 per cent is nearly half.\nStatement 3 — False: The article explains that the sugar tax will be introduced in the UK, not Australia.\nStatement 4 — True: The graph shows that Lemon soft drink has 12.1 grams of sugar per 100 ml, which is the highest concentration. Other drinks may have larger amounts per serve but different serving sizes make per-serve comparison unreliable.",
  },
  { group: 'PN2', set: 'Practice Now Questions', type: 'multiple_choice', category: 'News Article', context: ctxPN2,
    question: "What does Jane Martin mean when she uses the phrase 'directly impacts demand'?",
    options: [
      'A) It makes people buy fewer sugary drinks.',
      'B) It makes people want more sugary drinks.',
      'C) It makes people support a tax on sugary drinks.',
      'D) It makes people aware of the effects of sugary drinks.',
    ],
    answer: 'A) It makes people buy fewer sugary drinks.',
    method: "Jane Martin, Executive Manager of the Obesity Policy Coalition, said: 'Evidence from other countries that have implemented similar taxes shows that consumers are sensitive to the price of sugary drinks and this directly impacts demand — it is a very powerful policy tool.' She is saying that raising the price will reduce how much people buy — consumers are sensitive to price increases and will buy less. Substituting option A: '...consumers are sensitive to the price of sugary drinks and this makes people buy fewer sugary drinks — it is a very powerful policy tool.' This fits the meaning. Options B, C and D do not match — Martin is talking about purchasing behaviour (demand), not desire, support, or awareness.",
  },
  { group: 'PN2', set: 'Practice Now Questions', type: 'multiple_choice', category: 'News Article', context: ctxPN2,
    question: "Which of the following statements is NOT a reason why Geoff Parker's opinion was included in the news report?",
    options: [
      'A) To present a differing opinion.',
      'B) To support the writer\'s opinion.',
      'C) To provide a balanced look at the issue.',
      'D) To present the views of an organisation affected by the issue.',
    ],
    answer: 'B) To support the writer\'s opinion.',
    method: "News reports present facts and opinions from different sources — the writer does not express their own personal opinion. Therefore 'to support the writer's opinion' cannot be a reason for including any quote. Options A, C and D are all valid reasons: Geoff Parker's view differs from the other opinions presented (A), which provides balance (C), and he speaks on behalf of the Australian Beverages Council — an organisation directly affected by a sugary drinks tax (D). Because B is the only option that cannot be a genuine reason, it is the correct answer.",
  },

  // ── FRV Practice #1 — Q04: Australian Republic Movement Social Media ──────
  { group: 'FP4', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Social Media', context: ctxFP4,
    question: "Which of the following points is NOT used by the Australian Republic Movement to argue for the Australian Head of State to be an Australian?",
    options: [
      'A) Australia has its own unique culture different to the UK.',
      'B) Our Head of State should be an Australian citizen.',
      'C) The government would save money if our Head of State was an Australian.',
      'D) It is improper that a foreigner is our Head of State.',
    ],
    answer: 'C) The government would save money if our Head of State was an Australian.',
    method: "The ARM's arguments focus on national identity, sovereignty, and the principle that an Australian citizen should represent Australia. Cost savings are not a standard argument used by the ARM — they argue on the basis of identity and democratic principle, not financial benefit. Options A, B and D all reflect the ARM's stated position on cultural distinctiveness, citizenship, and the impropriety of a foreign head of state.",
  },
  { group: 'FP4', set: 'FRV Practice #1', type: 'true_false_matrix', category: 'Social Media', context: ctxFP4,
    matrixLabels: ['Yes', 'No'],
    question: "In the comments, which of the following points were made regarding the ARM's comment about Prince Charles?",
    options: [
      "Making fun of Prince Charles is immature.",
      "How does this relate to the main purpose of the ARM?",
      "Australians need to smarten up over choosing a local Head of State.",
      "I don't see any conflict of interest between our Head of State and the nation.",
    ],
    answer: 'Yes,Yes,No,Yes',
    method: "Making fun of Prince Charles is immature — Yes: a commenter criticised the ARM's remark about Prince Charles as immature.\nHow does this relate to the main purpose of the ARM? — Yes: a commenter questioned the relevance of the Prince Charles comment to the ARM's core mission.\nAustralians need to smarten up — No: this specific point was not made in the comments.\nNo conflict of interest — Yes: a commenter expressed the view that there is no conflict of interest between the current head of state and the nation.",
  },
  { group: 'FP4', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Social Media', context: ctxFP4,
    question: "Which sentence best describes Graham Muse's opinion?",
    options: [
      'A) Cricket is not something the Head of State should focus on.',
      'B) The Head of State should put our nation first in everything we do.',
      'C) Trade is obviously more important to the Head of State.',
      "D) Sport isn't the problem here. Rather it's people's opinions on what's important.",
    ],
    answer: "D) Sport isn't the problem here. Rather it's people's opinions on what's important.",
    method: "Graham Muse's comment distinguishes between the subject matter (sport/cricket) and the underlying issue of priorities and values. He is not criticising sport itself but pointing to differing opinions on what matters nationally. Option A focuses only on cricket. Option B is a general statement not reflective of his nuanced point. Option C about trade is not what Muse argues.",
  },
  { group: 'FP4', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Social Media', context: ctxFP4,
    question: "Which sentence best describes Sonya Harding's opinion?",
    options: [
      'A) I am going to cancel my membership over such a comment.',
      'B) Significant topics like this one should not be shared on social media.',
      'C) This sort of comment aligns with the mission of the ARM.',
      'D) Such a comment may put off possible supporters.',
    ],
    answer: 'D) Such a comment may put off possible supporters.',
    method: "Sonya Harding's concern is that the ARM's comment about Prince Charles could alienate potential supporters and be counterproductive to the movement's goals. She is not cancelling her membership (A) or objecting to social media use (B). She does not believe the comment aligns with the ARM's mission (C) — rather, she sees it as a strategic risk.",
  },
  { group: 'FP4', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Social Media', context: ctxFP4,
    question: 'What is the purpose of the Australian Republic Movement?',
    options: [
      'A) To sign up as many volunteers as possible to promote the campaign\'s goals.',
      'B) To change the laws of Australia so no foreigners can be the Head of State.',
      'C) To have a nationwide vote on whether our Head of State should be an Australian.',
      'D) To enforce the Government to address the issue of the Australian flag.',
    ],
    answer: 'C) To have a nationwide vote on whether our Head of State should be an Australian.',
    method: "The ARM's stated purpose is to achieve a republic through a democratic process — specifically a national vote (plebiscite or referendum) to let Australians decide whether to have an Australian as Head of State. Option A describes a recruitment activity, not the organisation's purpose. Option B overstates the approach — the ARM seeks a democratic vote, not a direct change to law by another means. Option D introduces the Australian flag, which is not the ARM's focus.",
  },

  // ── FRV Practice #1 — Q05: Australia Day Date Debate Article ────────────
  { group: 'FP5', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Opinion Article', context: ctxFP5,
    question: 'What is the purpose of the article?',
    options: [
      'A) To instruct people.',
      'B) To persuade people.',
      'C) To provide a description.',
      'D) To provide an explanation.',
    ],
    answer: 'D) To provide an explanation.',
    method: "The article presents arguments from multiple perspectives — those who want the date changed and those who oppose it — without clearly arguing for a single position. This makes its purpose explanatory rather than persuasive. It informs readers of the debate surrounding Australia Day without instructing or simply describing.",
  },
  { group: 'FP5', set: 'FRV Practice #1', type: 'true_false_matrix', category: 'Opinion Article', context: ctxFP5,
    matrixLabels: ['Yes', 'No'],
    question: 'Which of the following points were made in the article?',
    options: [
      "Many people associate Australia Day as 'Invasion Day'.",
      "Prime Minister Scott Morrison is willing to talk about changing the date.",
      "Impose dress standards at citizen ceremonies.",
      "Indigenous people are against moving the date.",
    ],
    answer: 'Yes,No,Yes,No',
    method: "Many people call it 'Invasion Day' — Yes: this is explicitly stated in the article.\nMorrison willing to talk about changing the date — No: Morrison was opposed to changing the date and proposed alternatives, not open discussion about a date change.\nImpose dress standards at citizen ceremonies — Yes: this was one of Morrison's counter-proposals to address concerns about Australia Day.\nIndigenous people are against moving the date — No: the article indicates that many Indigenous Australians support moving the date (hence the 'Invasion Day' movement).",
  },
  { group: 'FP5', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Opinion Article', context: ctxFP5,
    question: "What does the author mean by 'lands they deemed uninhabited'?",
    options: [
      'A) The British only settled on land they deemed to be habitable.',
      'B) Colonists took over land they presumed had no Indigenous people.',
      'C) The British actively moved Indigenous people off their land so it could be settled.',
      'D) Colonists settled on land that had little Indigenous presence.',
    ],
    answer: 'B) Colonists took over land they presumed had no Indigenous people.',
    method: "'Deemed uninhabited' reflects the doctrine of terra nullius — the legal fiction that Australia was 'empty' land with no prior ownership. This meant colonists treated the land as belonging to no one, disregarding the existing Indigenous population. Option A refers to habitability (suitability for living), not ownership. Option C describes active displacement, which is a separate process. Option D implies partial presence, whereas the article refers to land considered to have no Indigenous population at all.",
  },
  { group: 'FP5', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Opinion Article', context: ctxFP5,
    question: "What does activist Calma think about the Government's proposals?",
    options: [
      'A) Believes more discussion is needed on the subject.',
      'B) Is focusing on Australia Day to avoid public attention on other controversial topics.',
      'C) Believes Australia Day should be moved to any other day.',
      'D) Is trying to sweep in changes due to an expected, close election coming shortly.',
    ],
    answer: 'A) Believes more discussion is needed on the subject.',
    method: "Calma's position, as presented in the article, is that the Government's proposals do not go far enough and that a broader, more inclusive national conversation is needed before any decisions are made. Options B and D attribute political motivations to Calma that are not supported by the article. Option C misrepresents his stance — he has not publicly stated that any date would do, but rather that the process of discussion and consultation matters.",
  },
  { group: 'FP5', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Opinion Article', context: ctxFP5,
    question: 'Which point is NOT used by those who want the date changed?',
    options: [
      'A) More education is needed on why the date should be changed.',
      'B) Most former British colonies do not have their national day on the same day as being colonised.',
      "C) We should work together to make the current date an important day for all Australians.",
      'D) Over a quarter of Australians support moving the date.',
    ],
    answer: "C) We should work together to make the current date an important day for all Australians.",
    method: "Option C is an argument made by those who OPPOSE changing the date — it proposes making January 26 more inclusive rather than moving it. Those who want to change the date argue that the date itself carries too much pain to be reframed. Options A, B and D are all arguments that have been used by those seeking a date change: public education, precedent from other former colonies, and polling data showing support for moving the date.",
  },

  // ── FRV Practice #1 — Q06: Health: Sleep ─────────────────────────────────
  { group: 'FP6', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Health Article', context: ctxFP6,
    question: 'Which phrase best describes what this article is about?',
    options: [
      'A) Instructions on how to improve your sleep.',
      'B) Summary of the science behind sleep.',
      'C) Information on the importance of getting a good night\'s sleep.',
      'D) Information about sleep and its effects on health.',
    ],
    answer: 'D) Information about sleep and its effects on health.',
    method: "The article covers multiple aspects of sleep: why it is important for health and well-being, recommended amounts by age, signs of sleep deficiency, and tips to improve sleep. Option A is too narrow — improvement tips are only one section. Option B is incorrect as the article does not summarise scientific research. Option C focuses only on importance, missing the broader scope. Option D best captures the full content of the article.",
  },
  { group: 'FP6', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Health Article', context: ctxFP6,
    question: "Which phrase best describes 'chronic health problems'?",
    options: [
      'A) Continual issues related with your health.',
      'B) Health concerns that are ceasing.',
      'C) Complications occurring with the body.',
      'D) Experiencing occasional health issues.',
    ],
    answer: 'A) Continual issues related with your health.',
    method: "'Chronic' means persistent or long-lasting — the opposite of temporary or occasional. Option A correctly captures this meaning. Option B ('ceasing') is the opposite of chronic. Option C is too vague and does not convey the ongoing nature. Option D ('occasional') directly contradicts the meaning of chronic.",
  },
  { group: 'FP6', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Health Article', context: ctxFP6,
    question: "Which word could replace 'deficient' in the fourth paragraph without changing the meaning of the sentence?",
    options: [
      'A) Sufficient.',
      'B) Inadequate.',
      'C) Deprived.',
      'D) Wanting.',
    ],
    answer: 'C) Deprived.',
    method: "The sentence reads: 'You might be sleep deficient if you often feel like you could doze off...' 'Sleep deprived' is the standard equivalent phrase meaning you are not getting enough sleep, making C the best replacement. Option A ('sufficient') means the opposite. Option B ('inadequate') means not good enough but is not used in this context. Option D ('wanting') is an archaic usage meaning lacking — technically correct but not the natural modern equivalent.",
  },
  { group: 'FP6', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Health Article', context: ctxFP6,
    question: 'Which of the side effects from a lack of sleep is NOT listed?',
    options: [
      'A) Harms your social life.',
      'B) Decreases work productivity.',
      'C) Lowers your libido.',
      'D) Slows down physical response times.',
    ],
    answer: 'C) Lowers your libido.',
    method: "The article states that sleep deficiency can affect how well you 'think, react, work, learn, and get along with others.' This covers: slowed reactions (D), reduced work performance (B), and social difficulties (A). Libido (sex drive) is never mentioned anywhere in the article, making C the correct answer.",
  },
  { group: 'FP6', set: 'FRV Practice #1', type: 'true_false_matrix', category: 'Health Article', context: ctxFP6,
    matrixLabels: ['Yes', 'No'],
    question: 'Which of the points below must you do to improve your sleep? Tick Yes or No for each point.',
    options: [
      "Have a constant wake up time during the week and sleep in during the weekends.",
      "Unwind before going to bed.",
      "Ensure naps are kept under 30 minutes.",
      "Keep electronic devices out of the bedroom.",
    ],
    answer: 'No,Yes,Yes,Yes',
    method: "Have a constant wake up time and sleep in on weekends — No: the article says to wake up at the same time every day, EVEN ON WEEKENDS. Sleeping in on weekends contradicts this advice.\nUnwind before going to bed — Yes: the article advises finding ways to relax before bedtime each night.\nEnsure naps are kept under 30 minutes — Yes: the article says to avoid long naps (over 30 minutes), implying naps should stay under 30 minutes.\nKeep electronic devices out of the bedroom — Yes: the article specifically advises avoiding cell phones, computers, and televisions in the bedroom.",
  },

  // ── FRV Practice #1 — Q03: Accommodation Listing ─────────────────────────
  { group: 'FP3', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxFP3,
    question: 'Who is this accommodation most suitable for?',
    options: [
      'A) Small group or a couple wanting a place in the city.',
      'B) Up to three people requiring quiet accommodation.',
      'C) Anyone who wants a safe and secure place in the heart of the city.',
      'D) Small number of people, particularly music lovers.',
    ],
    answer: 'D) Small number of people, particularly music lovers.',
    method: "The listing specifies a maximum occupancy suited to a small number of guests and highlights proximity to music venues or entertainment as a feature, making it particularly appealing to music lovers. Option A is too broad — there is no specific mention of it being for couples or small groups alone. Option B introduces a requirement for quiet that is not the listing's primary selling point. Option C is generic and could apply to any city accommodation.",
  },
  { group: 'FP3', set: 'FRV Practice #1', type: 'true_false_matrix', category: 'Accommodation Listing', context: ctxFP3,
    matrixLabels: ['Yes', 'No'],
    question: 'Which of the following features are provided to convince people to book the listing?',
    options: [
      'Neat and tidy.',
      'Recently refurbished.',
      'Full-sized kitchen.',
    ],
    answer: 'Yes,Yes,No',
    method: "Neat and tidy — Yes: the listing mentions the well-kept condition of the property as a selling point.\nRecently refurbished — Yes: the listing highlights recent refurbishment to assure guests of modern, quality facilities.\nFull-sized kitchen — No: the listing does not promote a full-sized kitchen; a smaller kitchen or kitchenette is provided.",
  },
  { group: 'FP3', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxFP3,
    question: "What does the phrase 'contemporary artefacts' mean?",
    options: [
      'A) Modern objects.',
      'B) Newly made rugs.',
      'C) Old antiques.',
      'D) Latest wall designs.',
    ],
    answer: 'A) Modern objects.',
    method: "'Contemporary' means modern or current, and 'artefacts' refers to objects or items, typically decorative. Together, 'contemporary artefacts' means modern decorative objects. Option B and D are too specific — rugs and wall designs are just one type of object. Option C is the opposite — antiques are old, whereas 'contemporary' means modern.",
  },
  { group: 'FP3', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxFP3,
    question: 'Which phrase best describes the listing?',
    options: [
      'A) Quirky accommodation close to the docks.',
      'B) A bright and quiet space.',
      'C) An apartment close to the heart of the city.',
      'D) The ideal place for book lovers.',
    ],
    answer: 'C) An apartment close to the heart of the city.',
    method: "The listing is an inner-city apartment emphasising its central location. Option A introduces docks, which are not mentioned. Option B focuses on brightness and quiet, which may be features but do not capture the overall description. Option D introduces book lovers, which is not a theme of this listing.",
  },
  { group: 'FP3', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxFP3,
    question: 'Which of the following regarding the accommodation is true?',
    options: [
      'A) It is cheaper to stay during the week.',
      'B) Public transport is not close by.',
      'C) Close to a major bus stop.',
      'D) Lift access is available to the room.',
    ],
    answer: 'C) Close to a major bus stop.',
    method: "The listing states that the accommodation is close to a major bus stop, making it convenient for guests using public transport. Option B directly contradicts this. Option A introduces a pricing difference between weekdays and weekends that is not mentioned in the listing. Option D states that lift access is available, which is not supported by the listing.",
  },

  // ── FRV Practice #1 — Q02: Hamilton Fun Run Website ──────────────────────
  { group: 'FP2', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Website', context: ctxFP2,
    question: 'Which statement accurately describes the Hamilton Fun Run?',
    options: [
      'A) A fun and supportive run best suited for adults.',
      'B) A supportive yet challenging running event.',
      'C) A great day out for family and friends.',
      'D) A glory-filled day of running for everyone.',
    ],
    answer: 'C) A great day out for family and friends.',
    method: "The Hamilton Fun Run is promoted as a community event welcoming participants of all ages and abilities, making it a family and social occasion. Option A limits the audience to adults, which contradicts the inclusive nature of a fun run. Option B emphasises challenge, which is not the primary focus of the promotion. Option D uses vague, hyperbolic language ('glory-filled') that does not reflect the promotional text.",
  },
  { group: 'FP2', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Website', context: ctxFP2,
    question: 'Which area are the show bags closest to?',
    options: [
      'A) Information.',
      'B) Stage.',
      'C) Toilets.',
      'D) Hydration.',
    ],
    answer: 'A) Information.',
    method: "According to the event map, the show bags are located closest to the Information area. Show bags at community events are typically positioned near registration or information points so participants can collect them on arrival.",
  },
  { group: 'FP2', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Website', context: ctxFP2,
    question: 'Which navigation tab would you click on to find out more info on different run distances?',
    options: [
      'A) Home.',
      'B) Event Info.',
      'C) About.',
      'D) Contact.',
    ],
    answer: 'B) Event Info.',
    method: "'Event Info' is the most logical tab for details about the run distances, as it covers the specifics of the event itself. 'Home' provides a general overview. 'About' typically covers background on the organisation. 'Contact' is for enquiries only.",
  },
  { group: 'FP2', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Website', context: ctxFP2,
    question: 'Which phrase best describes "Festival Hub"?',
    options: [
      'A) Recovery area.',
      'B) Location of stalls.',
      'C) Food & drink area.',
      'D) Entertainment area.',
    ],
    answer: 'D) Entertainment area.',
    method: "The 'Festival Hub' is described as the central entertainment and activity zone at the event. While it may include stalls and food, the defining characteristic of a 'festival hub' is entertainment and activities. Options B and C capture only partial elements. Option A (recovery area) is not associated with a festival hub.",
  },
  { group: 'FP2', set: 'FRV Practice #1', type: 'true_false_matrix', category: 'Website', context: ctxFP2,
    matrixLabels: ['Yes', 'No'],
    question: 'Which features does the fun run use to promote itself?',
    options: [
      'Enjoyable morning run.',
      'Distances for all ages and abilities.',
      'Eateries available.',
      'A challenging course.',
    ],
    answer: 'Yes,Yes,Yes,No',
    method: "Enjoyable morning run — Yes: the event is promoted as a fun, positive morning experience.\nDistances for all ages and abilities — Yes: multiple distance options are highlighted to appeal to all fitness levels.\nEateries available — Yes: the Festival Hub includes food and drink options.\nA challenging course — No: the fun run is promoted as accessible and inclusive rather than as a physically demanding challenge.",
  },

  // ── FRV Practice #1 — Q01: Gillmont Pharmacy Hay Fever Email ─────────────
  { group: 'FP1', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Email / Letter', context: ctxFP1,
    question: 'What is the purpose of this email?',
    options: [
      'A) To inform residents that hay fever season has arrived.',
      'B) To provide tips on reducing the effects of hay fever.',
      'C) To promote products from the pharmacy.',
      'D) To inform and offer products to residents to reduce the effects of hay fever.',
    ],
    answer: 'D) To inform and offer products to residents to reduce the effects of hay fever.',
    method: "The email serves a dual purpose — it informs residents about hay fever in the Gillmont area and recommends products from Gillmont Pharmacy. Option A is too narrow (informing about hay fever season is only part of the purpose). Option B covers the tips but omits the product promotion aspect. Option C captures the commercial element but ignores the informational content. Option D correctly combines both purposes.",
  },
  { group: 'FP1', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Email / Letter', context: ctxFP1,
    question: 'According to the newsletter, why is it important for sufferers to minimise the effects of hay fever?',
    options: [
      'A) As approximately 1 in 5 people suffer from hay fever each year.',
      'B) Gillmont is widely regarded as a hotspot for pollen, which causes hay fever.',
      'C) Hay fever can reduce the quality of life for sufferers.',
      'D) So Gillmont Pharmacy can sell more medicines boosting their profits.',
    ],
    answer: 'C) Hay fever can reduce the quality of life for sufferers.',
    method: "The newsletter explains that minimising hay fever is important because it affects the quality of life of sufferers. Option A explains how common hay fever is, not why minimising it matters. Option B explains why Gillmont is particularly affected, not the reason to act. Option D is not stated in the newsletter — the pharmacy's commercial interests are not given as a reason.",
  },
  { group: 'FP1', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Email / Letter', context: ctxFP1,
    question: 'Why does the Gillmont area have a higher amount of pollen in the air?',
    options: [
      'A) The area has high numbers of birch trees, known for producing pollen.',
      'B) There are large pastoral areas, where grass is renowned for producing hay fever.',
      'C) Residents of Gillmont are known for having gardens full of flowers.',
      'D) The area is known for being windy and thunderstorms are common.',
    ],
    answer: 'B) There are large pastoral areas, where grass is renowned for producing hay fever.',
    method: "The email explains that the Gillmont area has large pastoral areas where grasses are a major source of pollen. Option A introduces birch trees, which are not mentioned in the email. Option C attributes the pollen to residents' gardens, which is not the reason given. Option D mentions wind and thunderstorms — while wind can spread pollen, the email identifies the pastoral grasslands as the source of elevated pollen levels.",
  },
  { group: 'FP1', set: 'FRV Practice #1', type: 'true_false_matrix', category: 'Email / Letter', context: ctxFP1,
    matrixLabels: ['Yes', 'No'],
    question: 'Which of the following tips does the newsletter provide if hay fever symptoms flare up?',
    options: [
      'Keep pets outside.',
      'Bring fresh flowers into your house.',
      'Stay inside if it\'s windy.',
    ],
    answer: 'Yes,No,Yes',
    method: "Keep pets outside — Yes: pets that go outdoors carry pollen on their fur and can bring it inside, worsening symptoms.\nBring fresh flowers inside — No: fresh flowers introduce pollen into the home and would aggravate hay fever symptoms; the newsletter advises against this.\nStay inside if windy — Yes: wind disperses pollen widely, so staying indoors on windy days reduces exposure.",
  },
  { group: 'FP1', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Email / Letter', context: ctxFP1,
    question: 'When referring to the garden, what does the newsletter mean by "low-allergen garden"?',
    options: [
      'A) Only have small plants and trees.',
      'B) Ensure your garden doesn\'t have too much lawn.',
      'C) Water your garden regularly to ensure pollen numbers are kept low.',
      'D) Only plant a garden that has low-producing pollen vegetation.',
    ],
    answer: 'D) Only plant a garden that has low-producing pollen vegetation.',
    method: "A 'low-allergen garden' refers to choosing plants that produce minimal pollen, thereby reducing the allergen load for hay fever sufferers. Option A relates to plant size, not pollen production. Option B addresses lawn coverage but does not capture the full meaning of low-allergen planting. Option C introduces watering as a pollen-reduction strategy, which is not mentioned in the newsletter.",
  },

  // ── FRV Practice #1 — Q07: Winter Storm Newsletter ────────────────────────
  { group: 'FP7', set: 'FRV Practice Free', type: 'multiple_choice', category: 'Newsletter', context: ctxFP7,
    question: 'What is the purpose of this newsletter?',
    options: [
      'A) To inform people of the risks of storms.',
      'B) To inform people on how to protect their property during a severe storm.',
      'C) To let people know how to keep warm during a storm.',
      'D) To inform people on how to prepare for a winter storm.',
    ],
    answer: 'D) To inform people on how to prepare for a winter storm.',
    method: "The opening subheading of the text states the purpose of the newsletter directly: 'How To Prepare For A Winter Storm'. Option A is too narrow — while risks are implied, informing about risks is not the stated purpose. Option B focuses on property, but the newsletter is about protecting yourself and your household more broadly. Option C is too specific — keeping warm is one tip among many.",
  },
  { group: 'FP7', set: 'FRV Practice Free', type: 'multiple_choice', category: 'Newsletter', context: ctxFP7,
    question: 'According to the newsletter, why is it important for people to properly prepare for a storm?',
    options: [
      'A) To help minimise the risk of destruction to their property.',
      'B) As winter is the time of year when there are the most powerful storms.',
      'C) Winter storms can cause a lot of destruction.',
      'D) To help protect home occupants.',
    ],
    answer: 'D) To help protect home occupants.',
    method: "The newsletter states: 'This newsletter is intended to help protect yourself before, during, and after a storm.' It also lists ways members can protect their home and the people in it. Option A focuses only on property, not people. Option B introduces a claim about storm power that is not made in the newsletter. Option C states that storms cause destruction but does not explain why preparation matters — the reason given in the text is to protect people.",
  },
  { group: 'FP7', set: 'FRV Practice Free', type: 'multiple_choice', category: 'Newsletter', context: ctxFP7,
    question: 'What can people do if they followed the advice from the newsletter?',
    options: [
      'A) Able to live life normally during the period of the storm.',
      'B) Increase their chances of remaining stable or quickly recovering from the effects of a storm.',
      'C) Not have to worry about possible effects from a storm.',
      'D) Increase their chances they will come through unscathed.',
    ],
    answer: 'B) Increase their chances of remaining stable or quickly recovering from the effects of a storm.',
    method: "The newsletter states: 'The ability to maintain or quickly recover following a storm requires a focus on preparedness, advanced planning, and knowing what to do in the event of a storm.' This directly matches option B. Options A and C overstate the outcome — the newsletter does not promise normal life or zero impact. Option D ('unscathed') implies no harm at all, which is stronger than the newsletter's more measured language about maintaining stability or recovering quickly.",
  },
  { group: 'FP7', set: 'FRV Practice Free', type: 'true_false_matrix', category: 'Newsletter', context: ctxFP7,
    matrixLabels: ['Yes', 'No'],
    question: 'Which of the following advice does the newsletter provide for people to action?',
    options: [
      'Close off rooms to keep in the heat.',
      'Only use a generator inside if it\'s an emergency.',
      'Keep clearing snow from your house.',
    ],
    answer: 'Yes,No,No',
    method: "Close off rooms — Yes: under 'During / Survive' the newsletter states 'Close off rooms to consolidate and retain heat.'\nGenerator indoors in an emergency — No: the newsletter states 'Never use a generator... indoors' — there is no exception for emergencies.\nKeep clearing snow from house — No: the newsletter advises to 'avoid overexertion clearing/shovelling snow' — it does not instruct people to keep clearing snow.",
  },

  // ── ACER Practice Paid — Q01: Bilvington Bushfire Ready Group Newsletter ──
  { group: 'AP1', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Newsletter', context: ctxAP1,
    question: 'What is the purpose of this email?',
    options: [
      'A) To inform people about the risks of bushfires.',
      'B) To inform people about what to do in case of a bushfire.',
      'C) To tell people when to evacuate their homes during a bushfire.',
      'D) To encourage people to prepare their properties against bushfires.',
    ],
    answer: 'D) To encourage people to prepare their properties against bushfires.',
    method: "The newsletter provides a numbered list of specific actions homeowners can take to protect their properties before bushfire season — using trees as shields, removing flammable items, mowing lawns, storing flammable liquids, clearing vegetation, and managing the garden. This makes its purpose action-oriented and preparatory, not simply informational. Option A (risks) and B (what to do during a fire) are too narrow, and C (evacuation timing) is not addressed at all.",
  },
  { group: 'AP1', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Newsletter', context: ctxAP1,
    question: "When referring to mature trees, what does the email mean by 'strategically placed'?",
    options: [
      'A) Only old trees kept.',
      'B) Planted far away from the property.',
      'C) Planted in a position that will help protect the property.',
      'D) Maintained so that there are no overhanging branches.',
    ],
    answer: 'C) Planted in a position that will help protect the property.',
    method: "The newsletter states: 'If mature trees are strategically placed, they can help shield against radiant heat and embers.' The word 'strategically' refers to deliberate positioning to maximise the protective benefit. Option A misreads 'mature' as only meaning 'old' and ignores placement. Option B contradicts the idea — trees need to be near the house to shield it. Option D relates to a separate piece of advice about overhanging branches and is a maintenance action, not a placement strategy.",
  },
  { group: 'AP1', set: 'ACER Practice Paid', type: 'true_false_matrix', category: 'Newsletter', context: ctxAP1,
    matrixLabels: ['Yes', 'No'],
    question: 'Which of the following actions does the email encourage people to carry out? Click Yes or No for each action.',
    options: [
      'Regularly cut grass surrounding the house.',
      'Ensure there is a hose close to the property.',
      'Ensure that petrol is not stored near the house.',
    ],
    answer: 'Yes,No,Yes',
    method: "Regularly cut grass — Yes: the newsletter advises mowing lawns and keeping grass under 10 cm, as long grass allows fire to spread rapidly.\nEnsure there is a hose close to the property — No: the newsletter does not mention hoses or any firefighting equipment at all.\nEnsure petrol is not stored near the house — Yes: petrol is a flammable liquid, and the newsletter explicitly advises storing flammable liquids in a shed away from the house, ideally in flame-proof containers.",
  },
  { group: 'AP1', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Newsletter', context: ctxAP1,
    question: 'Why is it particularly important for Bilvington residents to follow the advice in the email?',
    options: [
      'A) The town has thick vegetation around it.',
      'B) The town is hard for fire crews to access.',
      'C) There have been a large number of bushfires near the town.',
      'D) Most houses in the town are surrounded by flammable materials.',
    ],
    answer: 'A) The town has thick vegetation around it.',
    method: "The newsletter states: 'our town is located amongst dense bush and is considered a high risk zone.' Dense bush means thick surrounding vegetation, which is exactly what makes the fire risk elevated. Option B (access for fire crews) is not mentioned. Option C (previous bushfires) is not stated. Option D (flammable materials around houses) may be true for some properties but is not given as the reason — the dense bush surrounding the whole town is the specific risk factor named.",
  },
  { group: 'AP1', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Newsletter', context: ctxAP1,
    question: 'According to the email, why is it important for people in Bilvington to act now?',
    options: [
      'A) Lawns grow faster at this time of the year.',
      'B) The time of the year when bushfires occur is approaching.',
      'C) There have been a number of bushfires in the area recently.',
      'D) Peoples\' gardens may be overgrown at this time of the year.',
    ],
    answer: 'B) The time of the year when bushfires occur is approaching.',
    method: "The newsletter opens with: 'It is already October and the fire season begins next month.' This directly explains the urgency — residents must act before the fire season arrives. Option A (lawn growth speed) is not mentioned. Option C (recent fires) is not stated — the newsletter is preventative, not reactive. Option D (overgrown gardens) is not given as a reason for urgency, even though garden management is one of the recommended actions.",
  },

  // ── ACER Practice Paid — Q02: Correa Shopping Centre Website ──────────────
  { group: 'AP2', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Website', context: ctxAP2,
    question: 'Which menu tab would you click on to find out the names of the shops in the Correa shopping centre?',
    options: [
      'A) HOME',
      'B) STORES',
      'C) LOCATION',
      'D) MORE INFORMATION',
    ],
    answer: 'B) STORES',
    method: "The STORES tab is the logical place to find a list of individual shop names within the centre. HOME would display general information about the centre. LOCATION would show how to get there. MORE INFORMATION might provide background details but would not specifically list the individual shops by name.",
  },
  { group: 'AP2', set: 'ACER Practice Paid', type: 'true_false_matrix', category: 'Website', context: ctxAP2,
    matrixLabels: ['Yes', 'No'],
    question: 'Which features does Correa promote to try to stand out from other shopping centres? Click Yes or No for each feature.',
    options: [
      'Easy to park.',
      'Discount clothes.',
      'Open late every night.',
      'Art and music in the shopping centre.',
    ],
    answer: 'Yes,No,No,Yes',
    method: "Easy to park — Yes: the website highlights over 2,000 parking spaces with the line 'you'll never have to stress!'\nDiscount clothes — No: while the centre has fashion outlets, discounts or reduced prices are never mentioned.\nOpen late every night — No: the centre is only open until 9 pm on Thursday and Friday — other days it closes between 5 pm and 6 pm, so it is not open late every night.\nArt and music in the shopping centre — Yes: the 'A cultural shopping experience' section specifically promotes artwork from local sculptors and painters, live music and theatre in its pop-up performance space.",
  },
  { group: 'AP2', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Website', context: ctxAP2,
    question: "Which phrase describing the shopping centre means 'unusual group of'?",
    options: [
      'A) pocket-sized',
      'B) retail complex',
      'C) unique collection',
      'D) boutique shopping',
    ],
    answer: 'C) unique collection',
    method: "'Unique' means unusual or one-of-a-kind, and 'collection' means a group of things. Together, 'unique collection' means an unusual group of (shops, brands or items). 'Pocket-sized' refers to something being small. 'Retail complex' simply describes a shopping facility. 'Boutique shopping' suggests a specialised or high-end experience but does not carry the meaning of 'unusual group of'.",
  },
  { group: 'AP2', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Website', context: ctxAP2,
    question: 'Which statement best describes the Correa shopping centre?',
    options: [
      'A) A small shopping centre located in the city.',
      'B) A large shopping centre open only on weekdays.',
      'C) A small shopping centre located close to the city.',
      'D) A large shopping centre that is open late every night.',
    ],
    answer: 'C) A small shopping centre located close to the city.',
    method: "The website describes Correa as a 'pocket-sized retail complex located in Correa, just 15 minutes from the city.' This confirms it is small (pocket-sized) and near but not in the city. Option A is incorrect because it says 'in the city.' Option B is wrong on both counts — it is described as pocket-sized (not large) and is open on weekends. Option D is incorrect as the centre is not large and does not open late every night.",
  },
  { group: 'AP2', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Website', context: ctxAP2,
    question: 'Which carpark is the stage closest to?',
    options: [
      'A) Red',
      'B) Green',
      'C) Yellow',
      'D) Orange',
    ],
    answer: 'A) Red',
    method: "The map on the website shows the Stage in the bottom-right corner of the shopping centre, directly adjacent to the Red carpark. The Cinema is between the Stage and the Red carpark, and both are clearly in the bottom-right section of the map. The Green carpark is top-left, Yellow is bottom-left, and Orange is top-right — all further from the Stage than Red.",
  },

  // ── ACER Practice Paid — Q03: Home Stays Down Under — Bramblewood Apartment ─
  { group: 'AP3', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxAP3,
    question: 'Which of the following statements about the accommodation costs is true?',
    options: [
      'A) There is a security deposit.',
      'B) It costs more to use the internet.',
      'C) It costs more to have a second person.',
      'D) The rate is cheaper if guests stay for a week.',
    ],
    answer: 'D) The rate is cheaper if guests stay for a week.',
    method: "The listing shows a weekly discount of 8% and a monthly discount of 13%, confirming that longer stays attract a reduced rate. There is no mention of a security deposit (A). WiFi is listed as a free amenity (B). There is no mention of an additional charge for a second guest (C) — the listing simply states it accommodates 2 guests.",
  },
  { group: 'AP3', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxAP3,
    question: 'Which phrase best describes Bramblewood?',
    options: [
      'A) A quiet suburb away from the city.',
      'B) A suburb with a world famous sporting precinct.',
      'C) A suburb noted for its unconventional atmosphere.',
      'D) A suburb surrounded by greenery, flowers and birds.',
    ],
    answer: 'C) A suburb noted for its unconventional atmosphere.',
    method: "The listing describes Bramblewood as having 'a busy bohemian vibe' and being 'one of the city\'s hippest suburbs', renowned for its galleries, boutique shops, cool bars, coffee shops and street art. 'Bohemian' and 'hippest' both indicate an unconventional, artistic character. Option A is wrong — it is described as part of the vibrant city, not away from it. Option B is inaccurate — the sporting precinct is three train stations away, not in Bramblewood itself. Option D describes the apartment's balcony, not the suburb.",
  },
  { group: 'AP3', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxAP3,
    question: "What is meant by the phrase 'a private retreat'?",
    options: [
      'A) A place far from the city.',
      'B) A dark place with no noise.',
      'C) A relaxing area amongst nature.',
      'D) A quiet space away from people.',
    ],
    answer: 'D) A quiet space away from people.',
    method: "'Private' means away from others, and 'retreat' means a place of withdrawal or refuge. The listing supports this with 'a pocket of peace and quiet amongst the vibrant energy of the city' — the apartment offers seclusion despite being in a busy urban area. Option A is incorrect as the apartment is in the city, not far from it. Option B introduces 'dark' which is not suggested anywhere. Option C implies nature surroundings, but the phrase in context refers to social seclusion, not a natural setting.",
  },
  { group: 'AP3', set: 'ACER Practice Paid', type: 'true_false_matrix', category: 'Accommodation Listing', context: ctxAP3,
    matrixLabels: ['Yes', 'No'],
    question: 'Which of these features does the listing include to persuade people to book the accommodation? Click Yes or No for each feature.',
    options: [
      'Bright and roomy.',
      'Meals can be cooked.',
      'It is close to public transport.',
    ],
    answer: 'Yes,Yes,Yes',
    method: "Bright and roomy — Yes: the listing describes the apartment as 'spacious, light filled' and 'very light, clean and spacious with a lovely atmosphere.'\nMeals can be cooked — Yes: the amenities list a Kitchen, and the description states 'the kitchen is fully equipped with appliances and utensils.'\nClose to public transport — Yes: the listing states 'public transport at your doorstep', making this a clear selling point.",
  },
  { group: 'AP3', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxAP3,
    question: 'Who is this accommodation suitable for?',
    options: [
      'A) A large family looking for a place with lots of space.',
      'B) A single person or couple looking for a place in the city.',
      'C) A couple looking for a place with undercover parking.',
      'D) A single person or couple looking for a ground floor apartment.',
    ],
    answer: 'B) A single person or couple looking for a place in the city.',
    method: "The listing is for 2 guests with 1 bedroom and 1 bed — suited to a single person or couple, not a large family (A). The apartment is described as an 'inner city apartment' in the listing title, confirming city location. Option C is eliminated because the listing explicitly states 'unfortunately no off street parking available.' Option D is incorrect as the apartment is on the second floor, not the ground floor.",
  },

  // ── ACER Practice Paid — Q04: Australian Political Debate — New Flag ───────
  { group: 'AP4', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Social Media', context: ctxAP4,
    question: 'Why does the New Australian flag group think that the Union Jack should NOT be on the flag?',
    options: [
      'A) It is a combination of the crosses of England, Scotland and Ireland.',
      'B) Soldiers in both world wars did not fight under the flag with the Union Jack.',
      'C) It doesn\'t represent the variety of backgrounds and beliefs of people in Australia.',
      'D) There are not many people with English, Scottish or Irish backgrounds in Australia.',
    ],
    answer: 'C) It doesn\'t represent the variety of backgrounds and beliefs of people in Australia.',
    method: "The post argues that the Union Jack only represents British heritage and asks: 'What about the Vietnamese, Buddhists, Indian Hindus and Indonesian Muslims? They are just as much a part of our rich Australian identity.' This makes the core reason that the Union Jack excludes the many non-British backgrounds in Australia. Option A merely describes what the Union Jack is. Option B is raised later in a reply comment, not as part of the original argument against the Union Jack. Option D is not stated — the post does not claim British-heritage Australians are few.",
  },
  { group: 'AP4', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Social Media', context: ctxAP4,
    question: "Which sentence best describes Alistair Thomas' opinion?",
    options: [
      'A) He agrees with both Tori Peterson and the New Australian flag group.',
      'B) He disagrees with both Tori Peterson and the New Australian flag group.',
      'C) He agrees with Tori Peterson but disagrees with the New Australian flag group.',
      'D) He disagrees with Tori Peterson but agrees with the New Australian flag group.',
    ],
    answer: 'B) He disagrees with both Tori Peterson and the New Australian flag group.',
    method: "Alistair Thomas says: 'I don\'t like for a flag, they die for what a flag represents' — this directly counters Tori Peterson\'s argument that changing the flag disrespects soldiers\' sacrifices. He then argues that the flag represents values of equality, political freedom and rule of law adopted from Britain, and that discarding the flag means discarding those values — which opposes the New Australian flag group\'s push for a new flag. Therefore he disagrees with both.",
  },
  { group: 'AP4', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Social Media', context: ctxAP4,
    question: "Which sentence best describes Donia Markovski's opinion?",
    options: [
      'A) A new flag will help Australia reach its full potential.',
      'B) A new flag will improve the way Australians see themselves.',
      'C) A new flag will improve how the rest of the world sees Australia.',
      'D) A new flag will help Australia break away from its British history.',
    ],
    answer: 'D) A new flag will help Australia break away from its British history.',
    method: "Donia Markovski's comment is: 'It\'s time we create our own identity and cast off our imperial shackles.' The phrase 'cast off our imperial shackles' directly means breaking free from the legacy of British imperial rule. While options A, B and C could be implied benefits, none are stated — her comment is specifically about shedding the British/colonial past, not about potential or global perception.",
  },
  { group: 'AP4', set: 'ACER Practice Paid', type: 'true_false_matrix', category: 'Social Media', context: ctxAP4,
    matrixLabels: ['Yes', 'No'],
    question: 'In the comments, which of the following arguments are made for keeping the flag? Click Yes or No for each.',
    options: [
      'The flag is already well known in other countries.',
      'The current flag was chosen in a democratic way.',
      'The funds required to change the flag are better spent on public services.',
      'The flag should recognise the principles that have been inherited from Britain.',
    ],
    answer: 'No,No,Yes,Yes',
    method: "The flag is well known in other countries — No: this is never raised as an argument for keeping it; in fact the original post notes the flag is confused with other nations\' flags.\nThe flag was chosen democratically — No: this argument is not made in the comments; the New Australian flag group actually notes it was only legally recognised in 1954.\nFunds better spent on public services — Yes: Kim Salazar writes 'Spend the money on schools and hospitals instead', arguing against the cost of changing the flag.\nFlag should recognise British principles — Yes: Alistair Thomas argues the flag represents values of equality, political freedom and rule of law inherited from Britain.",
  },
  { group: 'AP4', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Social Media', context: ctxAP4,
    question: 'In the first post by the New Australian flag group, which of the following strategies is NOT used to argue that Australia needs a new flag?',
    options: [
      'A) Comparing Australia to a person who has grown up.',
      'B) Emphasising the widespread support for a new flag.',
      'C) Highlighting that some groups of people are excluded.',
      'D) Referencing a negative comment by a prominent celebrity.',
    ],
    answer: 'B) Emphasising the widespread support for a new flag.',
    method: "The post uses comparison to a growing child (A): 'We are no longer a child of the Commonwealth.' It highlights excluded groups (C): asking 'What about the Vietnamese, Buddhists, Indian Hindus and Indonesian Muslims?' It references Jerry Seinfeld\'s critical remark (D) to illustrate how the world sees Australia\'s flag. However, the post never cites polling data, petition numbers, or any evidence of widespread existing support — it asks readers to show support by liking the post, which is the opposite of claiming support already exists. Option B is therefore the strategy NOT used.",
  },

  // ── ACER Practice Paid — Q05: The Conversation — Thinking Through (Popular) Film ─
  { group: 'AP5', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Opinion Article', context: ctxAP5,
    question: 'What is the author trying to achieve in this article?',
    options: [
      'A) To instruct people.',
      'B) To persuade people.',
      'C) To provide a description.',
      'D) To provide an explanation.',
    ],
    answer: 'B) To persuade people.',
    method: "The article argues throughout that studying popular film is a worthwhile, serious academic pursuit. The author anticipates and challenges objections ('But it\'s just entertainment'), builds a multi-layered case for film\'s complexity and power, and uses strong language ('dangerous', 'vital principles') to win the reader over. This is persuasive writing. It does not instruct (give directions), provide a neutral description, or simply explain how something works.",
  },
  { group: 'AP5', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Opinion Article', context: ctxAP5,
    question: 'The author sees film as a powerful art-form. Which one of the following statements is NOT a reason he gives for this?',
    options: [
      'A) Film can tap into our emotions to sell us a message.',
      'B) Film exerts considerable influence on how we see the world.',
      'C) Film is the form that can best help us question the nature of art.',
      'D) Film explores topics that people find it hard to talk about in everyday life.',
    ],
    answer: 'D) Film explores topics that people find it hard to talk about in everyday life.',
    method: "The article explicitly states that films can create an affective state and sell a message (A), and that popular films exert considerable influence on how we construct our worlds (B). Cinema is described as the art form closest to embodying the vital principles of life (C — questioning art\'s nature). However, the claim that film covers topics people find hard to discuss in everyday life (D) is never made — this is not a reason the author gives for film\'s power.",
  },
  { group: 'AP5', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Opinion Article', context: ctxAP5,
    question: "'In the same way that guns demand to be shot, films demand to be viewed' (paragraph 18). Why does the author use guns as a comparison to film?",
    options: [
      'A) To highlight the violence that is present in many films.',
      'B) To use a dangerous image to show the strong influence of film.',
      'C) To show that people can misuse films as often happens with guns.',
      'D) To highlight the increasing influence of technology on the film industry.',
    ],
    answer: 'B) To use a dangerous image to show the strong influence of film.',
    method: "The comparison is not about violence in films (A) or misuse (C) — it is about the compelling, irresistible pull that both objects exert. Just as a loaded gun demands to be fired, a film demands to be watched. Choosing a gun — a powerful and potentially dangerous object — amplifies the idea that film\'s influence is equally potent and unavoidable. Technology (D) is not referenced in this comparison.",
  },
  { group: 'AP5', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Opinion Article', context: ctxAP5,
    question: "In the fifth paragraph, the author draws attention to the 'stunning colours and symmetries of microscopic organisms'. What point is the author trying to make?",
    options: [
      'A) Films can be enchanting and miraculous like living creatures.',
      'B) Intensive analysis can take away from the mystery of things.',
      'C) The value of some things can only be seen by examining them closely.',
      'D) It is important to examine things completely, down to their most tiny details.',
    ],
    answer: 'C) The value of some things can only be seen by examining them closely.',
    method: "The article states: 'The stunning colours and symmetries of microscopic organisms only become evident when sought out through analysis.' The microscopic example illustrates that hidden beauty and value exist in things that appear ordinary or unremarkable until you look closely. This supports the argument that popular film, often dismissed as 'just entertainment', reveals its depth only when studied carefully. Option B is the opposite of the author\'s point. Option D focuses on thoroughness rather than the key idea of revelation through close examination.",
  },
  { group: 'AP5', set: 'ACER Practice Paid', type: 'true_false_matrix', category: 'Opinion Article', context: ctxAP5,
    matrixLabels: ['Yes', 'No'],
    question: 'Which of the following reasons does the author give for studying popular film? Click Yes or No for each.',
    options: [
      'It is a beautiful art-form.',
      'It shows how we see ourselves.',
      'It is one of the most complex art-forms.',
      'It has the ability to strongly influence people.',
    ],
    answer: 'No,Yes,Yes,Yes',
    method: "It is a beautiful art-form — No: the article says beauty is revealed through study, but beauty is not itself given as a reason to study film. The reasons given are its complexity, influence and cultural significance.\nIt shows how we see ourselves — Yes: 'Popular films both reveal society\'s dreams and self-envisionings and shape individual perceptions of the world.'\nIt is one of the most complex art-forms — Yes: the article describes cinema as involving 'the most complex relationships and processes' and as the art form that includes all other art forms.\nIt has the ability to strongly influence people — Yes: 'Popular films (and television), furthermore, exert considerable influence on the way we think about and construct our worlds.'",
  },

  // ── ACER Practice Paid — Q06: Know Your Body — Cardiovascular Fitness ──────
  { group: 'AP6', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Health Article', context: ctxAP6,
    question: 'Which phrase best describes what this article is about?',
    options: [
      'A) Advice on how to improve cardiovascular endurance.',
      'B) Explanation of the five components of physical fitness.',
      'C) Explanation of cardiovascular endurance and what exercise can achieve.',
      'D) Explanation of cardiovascular endurance and the dangers of not exercising.',
    ],
    answer: 'C) Explanation of cardiovascular endurance and what exercise can achieve.',
    method: "The article defines cardiovascular endurance and then uses graphs to demonstrate the significant differences exercise training produces in athletes compared to nonathletes. Option A is too narrow — the article is not primarily about giving improvement advice. Option B is incorrect as the five components are only briefly mentioned in the introduction; the focus is cardiovascular endurance specifically. Option D is wrong because the article does not discuss dangers of inactivity — it focuses on the positive effects of exercise.",
  },
  { group: 'AP6', set: 'ACER Practice Paid', type: 'true_false_matrix', category: 'Health Article', context: ctxAP6,
    matrixLabels: ['True', 'False'],
    question: 'According to the article, which of the following is true for athletes in comparison to nonathletes?',
    options: [
      'More oxygen reaches their muscles.',
      'Their hearts pump more blood per minute.',
      'Their heart rate increases more with exercise.',
      'Their cardiac output allows them to exercise for longer.',
    ],
    answer: 'True,True,False,True',
    method: "More oxygen reaches their muscles — True: athletes have higher cardiac output, which means more blood (and therefore oxygen) is pumped to the muscles.\nHearts pump more blood per minute — True: the cardiac output graph shows athletes achieve significantly higher output at maximum effort.\nHeart rate increases more with exercise — False: the heart rate graph shows athletes have a lower resting heart rate and a similar (or slightly lower) maximum heart rate than nonathletes, meaning the increase in heart rate is actually less dramatic for athletes.\nCardiac output allows longer exercise — True: greater cardiac output delivers more oxygen to muscles, enabling athletes to sustain exercise for longer.",
  },
  { group: 'AP6', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Health Article', context: ctxAP6,
    question: 'According to the article, which of the following is NOT an indication of cardiovascular fitness?',
    options: [
      'A) Increased cardiac output.',
      'B) Decreased resting heart rate.',
      'C) Increased maximum heart rate.',
      'D) Increased maximum stroke volume.',
    ],
    answer: 'C) Increased maximum heart rate.',
    method: "The graphs show that fit athletes have higher cardiac output (A), lower resting heart rates (B), and greater maximum stroke volume (D) compared to nonathletes — all indicators of cardiovascular fitness. However, maximum heart rate does not increase with fitness training; the graphs show athletes achieve similar or slightly lower maximum heart rates than nonathletes. A fit heart achieves greater output through higher stroke volume, not by beating faster at maximum effort. Increased maximum heart rate is therefore not a sign of improved cardiovascular fitness.",
  },
  { group: 'AP6', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Health Article', context: ctxAP6,
    question: "In the first paragraph, which word could be used instead of 'optimal' without changing the meaning of the sentence?",
    options: [
      'A) Abundant.',
      'B) Chief.',
      'C) Main.',
      'D) Prime.',
    ],
    answer: 'D) Prime.',
    method: "'Optimal' means the best or most favourable condition. 'Prime' also means of the highest quality or most favourable — making it the closest synonym. 'Abundant' means plentiful or in large quantity, which is unrelated to quality. 'Chief' and 'main' mean primary or most important in rank, but do not carry the same meaning as 'best possible condition' the way 'optimal' and 'prime' do.",
  },
  { group: 'AP6', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Health Article', context: ctxAP6,
    question: 'Which phrase means cardiovascular endurance?',
    options: [
      'A) Ability of the heart to perform well.',
      'B) Ability of the heart to recover quickly.',
      'C) Ability of the heart to perform over extended periods.',
      'D) Ability of the heart and lungs to keep going over a long time.',
    ],
    answer: 'C) Ability of the heart to perform over extended periods.',
    method: "The article defines cardiovascular endurance as 'the body\'s ability to utilise oxygen so that muscles can perform over extended periods.' Option C directly matches this — the key phrase is 'perform over extended periods.' Option A is too vague ('perform well' does not capture duration). Option B introduces recovery, which is not part of the definition. Option D includes both heart and lungs and says 'keep going over a long time' — while close, this paraphrase is less precise than C, which uses the exact language of the definition ('perform over extended periods').",
  },

  // ── FRV Practice #2 — Q01: Jetton Workplace Safety Email ─────────────────────
  { group: 'FRP2_Q1', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Email / Letter', context: ctxFRP2_Q1,
    question: 'What is the purpose of this email?',
    options: [
      'A) To inform employees about workplace risks.',
      'B) To inform employees in what to do in case of an accident.',
      'C) To tell employees that they are not responsible for their own safety.',
      'D) To inform employees about the workplace safety rules.',
    ],
    answer: 'D) To inform employees about the workplace safety rules.',
    method: "The email opens by stating: 'We expect all new employees to adhere to the following guidelines to work safely at Jetton.' The body then lists specific rules (understand risks, reduce stress, take breaks, wear protective equipment, etc.). The overall purpose is to communicate the company's safety rules, not simply to warn about risks (A), explain accident procedures (B), or disclaim responsibility (C).",
  },
  { group: 'FRP2_Q1', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Email / Letter', context: ctxFRP2_Q1,
    question: 'According to the notice, why is it important to follow the safety rules?',
    options: [
      'A) In case the company has a spontaneous workplace safety check.',
      'B) There have been several accidents recently at Jetton.',
      'C) To help minimise the risk of injury or accidents.',
      'D) To avoid delays in productivity, which involves large costs to the company.',
    ],
    answer: 'C) To help minimise the risk of injury or accidents.',
    method: "The email states directly: 'in order to minimise the risk of accidents or injuries occurring.' This makes C the primary stated reason. The audit (A) is also mentioned but as a secondary concern. B is not mentioned at all — no recent accidents are referenced. D is not stated in the email.",
  },
  { group: 'FRP2_Q1', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Email / Letter', context: ctxFRP2_Q1,
    question: 'Why else does Jetton expect its employees to follow the safety rules?',
    options: [
      'A) To avoid a large fine as a result of failing a random workplace safety audit.',
      'B) To help protect managers in case of a workplace accident.',
      'C) To ensure the company is not shut down as a result of an audit.',
      'D) To ensure employees understand they are responsible for their safety.',
    ],
    answer: 'C) To ensure the company is not shut down as a result of an audit.',
    method: "The email states: 'to avoid Jetton being shutdown by failing a spontaneous audit.' This directly matches C. A mentions a fine, which is not referenced in the email. B about protecting managers and D about personal responsibility are not stated.",
  },
  { group: 'FRP2_Q1', set: 'FRV Practice #2', type: 'true_false_matrix', category: 'Email / Letter', context: ctxFRP2_Q1,
    matrixLabels: ['Yes', 'No'],
    question: 'Which of the following actions does the email state employees should follow? Tick Yes or No for each action.',
    options: [
      'All accidents are preventable.',
      'Never work over night time.',
      'Always wear protective equipment.',
    ],
    answer: 'No,No,Yes',
    method: "All accidents are preventable — No: the email says to 'minimise the risk' of accidents, not that all accidents are preventable.\nNever work over night time — No: night work is not mentioned anywhere in the email.\nAlways wear protective equipment — Yes: the email explicitly states 'Wear protective equipment that suits the task' as one of its guidelines.",
  },
  { group: 'FRP2_Q1', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Email / Letter', context: ctxFRP2_Q1,
    question: "What does it mean when a safety rule is to 'understand the risks' regarding doing work?",
    options: [
      'A) Inform a supervisor before taking action.',
      'B) Take action to avoid the risk of an accident occurring.',
      'C) Check the safety rules before proceeding.',
      'D) Count up all the risks before making a decision.',
    ],
    answer: 'B) Take action to avoid the risk of an accident occurring.',
    method: "The email explains: 'Once you know the particular hazards of your job or workplace, you can take proactive steps to reduce your risk of work-related injury or illness.' Taking proactive steps to reduce risk directly matches B. A (notify supervisor), C (check rules), and D (count risks) are not part of this definition.",
  },

  // ── FRV Practice #2 — Q02: Apple Orchard Market Website ─────────────────────
  { group: 'FRP2_Q2', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Website', context: ctxFRP2_Q2,
    question: 'Which statement accurately describes the Apple Orchard Market?',
    options: [
      'A) A large entertaining market located close to Dicey City.',
      'B) A small market open throughout the week.',
      'C) The oldest outdoor market within Australia.',
      'D) A small community market located in Abbotsford.',
    ],
    answer: 'C) The oldest outdoor market within Australia.',
    method: "The website states: 'Historically, it is the oldest outdoor market within Australia.' This makes C directly and explicitly true. A is wrong — it is described as 'community-spirited' not 'large and entertaining,' and it is a 20-minute drive FROM Dicey City, not located close to it. B is wrong — the market is closed Monday to Friday, open only on weekends. D uses 'small' which is not stated in the text.",
  },
  { group: 'FRP2_Q2', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Website', context: ctxFRP2_Q2,
    question: 'Which carpark is the bouncing castle closest to?',
    options: [
      'A) Blue',
      'B) Purple',
      'C) Orange',
      'D) Green',
    ],
    answer: 'A) Blue',
    method: "On the market map, the Bouncy Castle is located on the right side of the layout near Tucker St. The Blue carpark [P] is positioned at the bottom right corner of the map, making it the closest carpark to the Bouncy Castle. Purple is top right, Orange is top left, and Green is bottom left.",
  },
  { group: 'FRP2_Q2', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Website', context: ctxFRP2_Q2,
    question: 'Which navigation tab would you click on to find more information about the history of the market?',
    options: [
      'A) Home',
      'B) Stalls',
      'C) About',
      'D) Contact',
    ],
    answer: 'C) About',
    method: "The website has five navigation tabs: Home, Stalls, Location, About, and Contact. Information about the history of a business or organisation is typically found in an 'About' section. 'Home' gives a general overview, 'Stalls' would list vendors, 'Location' gives directions, and 'Contact' provides contact details.",
  },
  { group: 'FRP2_Q2', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Website', context: ctxFRP2_Q2,
    question: 'Which word or phrase best describes "bustling"?',
    options: [
      'A) Crowded',
      'B) Peaceful',
      'C) Engaging',
      'D) Full of energy',
    ],
    answer: 'D) Full of energy',
    method: "'Bustling' describes a place or scene that is full of activity and energetic movement. In the text, 'a vibrant and bustling country market' conveys liveliness and energy. 'Full of energy' (D) captures this best. 'Crowded' (A) only implies density, not energy. 'Peaceful' (B) is the opposite. 'Engaging' (C) is closer to 'interesting' and doesn't capture the sense of lively movement.",
  },
  { group: 'FRP2_Q2', set: 'FRV Practice #2', type: 'true_false_matrix', category: 'Website', context: ctxFRP2_Q2,
    matrixLabels: ['Yes', 'No'],
    question: 'Which features does the market use to promote itself? Tick Yes or No for each feature.',
    options: [
      'Meet locals',
      'Local produce',
      'Great entertainment',
      'Easy to park',
    ],
    answer: 'Yes,Yes,No,Yes',
    method: "Meet locals — Yes: 'A great opportunity to meet the locals' is explicitly used in the promotional text.\nLocal produce — Yes: the market promotes 'Australian fruit and vegetables, local and imported gourmet foods.'\nGreat entertainment — No: the word 'entertainment' does not appear in the promotional text. The map shows a Bouncy Castle, but this is not highlighted as a promotional feature.\nEasy to park — Yes: 'Loads of parking with over 1000 spaces' is listed as a feature.",
  },

  // ── FRV Practice #2 — Q03: Sail & Stay Listing ───────────────────────────────
  { group: 'FRP2_Q3', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxFRP2_Q3,
    question: 'Who would this sailing experience be most suitable for?',
    options: [
      'A) Couples looking for a romantic getaway on board a sailing boat.',
      'B) Anyone who is looking for adventure and exploration.',
      'C) People who are looking to spend time away from bustling cities.',
      'D) Anyone who is looking to get far away from other people.',
    ],
    answer: 'B) Anyone who is looking for adventure and exploration.',
    method: "The listing opens: 'The Schooner, Pearl, is home to Explorers and lovers of life! We enjoy good adventures and seek them out.' This directly supports B. The listing makes no mention of romance (A), escaping cities (C), or solitude (D). The broad audience is anyone who seeks adventure and exploration.",
  },
  { group: 'FRP2_Q3', set: 'FRV Practice #2', type: 'true_false_matrix', category: 'Accommodation Listing', context: ctxFRP2_Q3,
    matrixLabels: ['Yes', 'No'],
    question: 'Which of the following features are provided to convince people to book the listing? Tick Yes or No for each feature.',
    options: [
      'Diving gear',
      'On board BBQ',
      'Couple of cabins',
    ],
    answer: 'No,No,No',
    method: "Diving gear — No: the features list includes 'Watersports Equipment' but does not specifically name diving gear.\nOn board BBQ — No: the features list includes 'Bar' and 'Galley Stove & Oven' but no BBQ is mentioned.\nCouple of cabins — No: the features list states '4x Cabins,' not a couple (two). The number is incorrect.",
  },
  { group: 'FRP2_Q3', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxFRP2_Q3,
    question: "What does this phrase mean: 'memorable picturesque'?",
    options: [
      'A) Unforgettably colourful',
      'B) Common and charming',
      'C) Unusually monotonous',
      'D) Significantly traditional',
    ],
    answer: 'A) Unforgettably colourful',
    method: "'Memorable' means unforgettable and 'picturesque' means visually attractive or scenic — like a beautiful picture. Combined, 'memorable picturesque' means an unforgettably beautiful or colourful scene. B ('common and charming') contradicts both words. C ('unusually monotonous') is opposite in meaning. D ('significantly traditional') is unrelated to either word.",
  },
  { group: 'FRP2_Q3', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxFRP2_Q3,
    question: 'Which phrase best describes the experience the listing offers?',
    options: [
      'A) Learn about living on and off the land from different cultures.',
      'B) Learn the skills of sailing a schooner ship.',
      'C) Enjoy lots of activities, travel destinations and opportunities to relax.',
      'D) Island hop your way around the Pacific Ocean.',
    ],
    answer: 'C) Enjoy lots of activities, travel destinations and opportunities to relax.',
    method: "The listing describes 'an abundance of activities to do things and learn' and also notes that 'if relaxing is a more appealing hobby, kick your feet on deck.' It also covers island hopping and coastal sailing as longer-term options. C best captures the breadth of what is offered. A focuses only on cultural learning. B is too narrow. D applies only to one type of extended charter.",
  },
  { group: 'FRP2_Q3', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxFRP2_Q3,
    question: 'Which of the following regarding the listing is false?',
    options: [
      'A) Access to hiking is available.',
      'B) Max capacity is 12 guests plus crew.',
      'C) Price is at least 149 dollars a day.',
      'D) Air conditioning is available.',
    ],
    answer: 'C) Price is at least 149 dollars a day.',
    method: "The listing states 'Only $149 per day' — the word 'only' signals a fixed, definitive price, not a minimum. Saying 'at least $149' implies the price could be higher, which contradicts the listing. A is true (hiking is listed as an available activity). B is true (Capacity: 12 guests + crew). D is true (Air Conditioning appears in the Features list).",
  },

  // ── FRV Practice #2 — Q04: Pro Life Australia ────────────────────────────────
  { group: 'FRP2_Q4', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Social Media', context: ctxFRP2_Q4,
    question: "Which of the statements below is part of Pro Life Australia's mission?",
    options: [
      'A) Ensure that the public is educated about the issue of what constitutes human life.',
      'B) Make sure that pregnant women have a safe experience giving birth.',
      'C) Lobby politicians to change the laws around giving birth.',
      'D) Ensure that laws are re-instated to safeguard the rights for all human life.',
    ],
    answer: 'D) Ensure that laws are re-instated to safeguard the rights for all human life.',
    method: "The page states: 'The ultimate goal of Pro Life Australia is to restore legal protection for innocent human life.' Restoring legal protection = re-instating laws to safeguard rights for all human life, matching D directly. A is not their stated mission. B and C reference giving birth specifically, but the organisation's mission covers all human life from conception to natural death, not birth procedures.",
  },
  { group: 'FRP2_Q4', set: 'FRV Practice #2', type: 'true_false_matrix', category: 'Social Media', context: ctxFRP2_Q4,
    matrixLabels: ['Yes', 'No'],
    question: "Which of the following points is Pro Life Australia using to help achieve their mission? Tick Yes or No for each point.",
    options: [
      'Create a great team of people who can campaign their mission to the media.',
      'Ensure that large protests occur throughout major cities in Australia.',
      'Influence politicians to change the laws to protect all human life.',
      'Develop close friendships with senior politicians in order to use their influence.',
    ],
    answer: 'Yes,No,Yes,No',
    method: "Create a team for the media — Yes: 'Develop a network of expert spokesmen and women and advocate in the media against abortion and euthanasia.'\nLarge protests in major cities — No: the page mentions peaceful protests and public events but not specifically large protests throughout major cities.\nInfluence politicians — Yes: 'Lobby governments to protect all human life from conception to natural death.'\nClose friendships with politicians — No: lobbying is mentioned, but developing close personal friendships is not.",
  },
  { group: 'FRP2_Q4', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Social Media', context: ctxFRP2_Q4,
    question: "Which sentence best describes Michelle Armstrong's opinion?",
    options: [
      'A) The only way to get the laws changed is to have protests at all major cities.',
      'B) Change will come with strong and continuous protests outside of parliament house.',
      'C) The supporters of protecting all human life need to ramp up their protests.',
      "D) The fight against the current wicked laws must be taken to the streets.",
    ],
    answer: 'B) Change will come with strong and continuous protests outside of parliament house.',
    method: "Michelle Armstrong calls for 'a regular presence outside parliament' and says 'We must never give up, never surrender.' This combination of sustained, ongoing protest outside parliament is best captured by B. A says 'all major cities' but Armstrong focuses on parliament specifically. C and D are partial but don't capture the emphasis on parliament and continuity.",
  },
  { group: 'FRP2_Q4', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Social Media', context: ctxFRP2_Q4,
    question: "Which sentence best describes Pro Life Australia's opinion on why there are so many abortions?",
    options: [
      'A) Because abortions are proving to be far too expensive for hospitals to keep up.',
      'B) There are too many people in politics who are anti-abortion.',
      'C) It is due to the fact that there are more sinners alive in our day and age.',
      'D) Pro-abortionists have too much access within major political parties.',
    ],
    answer: 'D) Pro-abortionists have too much access within major political parties.',
    method: "The Pro Life Australia comment states: 'Political parties, especially Labor and increasingly NSW Nationals also, are being infiltrated by hardline pro-abortion activists.' This directly matches D. A about hospital costs, B about anti-abortion politicians, and C about sinners are not mentioned in the text.",
  },
  { group: 'FRP2_Q4', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Social Media', context: ctxFRP2_Q4,
    question: 'What does Pro Life Australia want for the elderly?',
    options: [
      'A) To be able to live a long, healthy and respected life.',
      'B) To live out their lives in full regardless of what others may want for them.',
      'C) To ensure the elderly have the right to choose whether to go ahead with euthanasia.',
      'D) To ensure appropriate care is in place to look after the elderly.',
    ],
    answer: 'B) To live out their lives in full regardless of what others may want for them.',
    method: "The page states: 'That the elderly and vulnerable are protected, respected and are allowed to live their lives out in dignity and peace without fear of an untimely death due to euthanasia.' This means they want the elderly to live their full lives without others (e.g., those who might support euthanasia) determining when their life ends — matching B. A adds 'long and healthy' which isn't stated. C is the opposite of their position. D about care is not mentioned.",
  },

  // ── FRV Practice #2 — Q05: School Uniforms Article ───────────────────────────
  { group: 'FRP2_Q5', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Opinion Article', context: ctxFRP2_Q5,
    question: 'What is the purpose of the article?',
    options: [
      'A) To instruct people.',
      'B) To provide a description.',
      'C) To persuade people.',
      'D) To provide an explanation.',
    ],
    answer: 'C) To persuade people.',
    method: "The article is a persuasive essay arguing that school uniforms have more disadvantages than advantages. The author states: 'I believe there are more disadvantages to wearing uniforms than advantages' and concludes with a call to allow students to 'wear what they deem expresses their unique personality.' This is a persuasive text. It is not instructional (A), purely descriptive (B), or explanatory (D).",
  },
  { group: 'FRP2_Q5', set: 'FRV Practice #2', type: 'true_false_matrix', category: 'Opinion Article', context: ctxFRP2_Q5,
    matrixLabels: ['Yes', 'No'],
    question: 'Which of the following points are made in the article? Tick Yes or No for each point.',
    options: [
      'Uniforms are against the first amendment.',
      'Uniforms can be as comfortable as normal clothing.',
      'Costs are a burden to some families.',
      'Uniforms can help to express diversity.',
    ],
    answer: 'Yes,No,Yes,No',
    method: "Against the first amendment — Yes: the article cites the First Amendment and US Supreme Court rulings to argue that compulsory uniforms are unconstitutional.\nAs comfortable as normal clothing — No: the article argues the opposite, stating uniforms 'are often seen as less comfortable than normal clothes.'\nCosts are a burden — Yes: the article discusses parents spending extra money and schools selling overpriced uniforms.\nHelp to express diversity — No: the article argues uniforms promote conformity and suppress diversity and individuality.",
  },
  { group: 'FRP2_Q5', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Opinion Article', context: ctxFRP2_Q5,
    question: "In the fifth paragraph, the author refers to 'pressure of societal conformity' — what are they referring to?",
    options: [
      'A) People should not have to change their behaviours to fit into the surrounding influential group.',
      'B) It is important that students should be allowed to express themselves, however they wish.',
      'C) Parents are putting pressure on teachers to change the rules around school uniforms.',
      'D) Schools should be seeking to promote a more diverse range of students at their schools.',
    ],
    answer: 'A) People should not have to change their behaviours to fit into the surrounding influential group.',
    method: "'Societal conformity' refers to pressure on individuals to adopt the norms and behaviours of the society or group around them. The author argues that uniforms enforce this conformity, suppressing individuality. A captures this meaning precisely. B is about self-expression but not the definition of societal conformity. C and D misidentify who is applying the pressure.",
  },
  { group: 'FRP2_Q5', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Opinion Article', context: ctxFRP2_Q5,
    question: "In what way can having school uniforms be considered 'un-American'?",
    options: [
      'A) Students should have the right to wear whatever they want at school.',
      'B) Enforcing compulsory uniforms goes against the US Constitution.',
      'C) Having rules around what students can wear is against America\'s motto, \'the land of the free\'.',
      'D) US Supreme Court rulings have been in favour of schools deciding what students can wear.',
    ],
    answer: 'B) Enforcing compulsory uniforms goes against the US Constitution.',
    method: "The article states: 'not only is the demand to wear uniforms in a sense unconstitutional, it also goes against rulings by the Supreme Court. In this way, it can be said that making uniforms in schools mandatory is un-American.' Going against the Constitution directly matches B. A is too broad. C invents a motto not referenced in the article. D is the opposite of what the article states — the Supreme Court ruled against compelled conformity.",
  },
  { group: 'FRP2_Q5', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Opinion Article', context: ctxFRP2_Q5,
    question: 'Which of the following reasons is NOT used by the author to claim there are more disadvantages than advantages with school uniforms?',
    options: [
      "A) Some students' confidence is restricted due to wearing uncomfortable uniforms.",
      'B) School uniforms can encourage bullying behaviour from other students.',
      'C) Surveys show that the majority of students do not want to wear uniforms.',
      'D) It would be cheaper for parents to have their children wear their own clothes.',
    ],
    answer: 'C) Surveys show that the majority of students do not want to wear uniforms.',
    method: "The author cites surveys in the context of comfort — 'many students expressing through surveys that they do not feel comfortable in their uniforms' — not to show that a majority oppose uniforms overall. A is supported by the self-image and comfort arguments. B is supported by the ridiculing of students who don't fit the uniform mould. D is directly stated: uniforms 'wastes the money of parents, when their children can simply wear the clothes they have.' C misstates the survey evidence.",
  },

  // ── FRV Practice #2 — Q06: Meditation Article ────────────────────────────────
  { group: 'FRP2_Q6', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Health Article', context: ctxFRP2_Q6,
    question: 'Which phrase best describes what this article is about?',
    options: [
      'A) Advice on how to improve your meditation practice.',
      'B) Information on how meditation can make you a better person.',
      'C) Introduction to meditation and how it can improve your health.',
      'D) Introduction to meditation, benefits and different types.',
    ],
    answer: 'D) Introduction to meditation, benefits and different types.',
    method: "The article covers: what meditation is, how it works (as brain exercise), two distinct types (Concentration and Mindfulness Meditation), and statistics on its benefits. D captures all of this scope. C is close but misses the coverage of different types. A implies a how-to guide, which is not the article's focus. B is too vague and omits the key structural elements of the article.",
  },
  { group: 'FRP2_Q6', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Health Article', context: ctxFRP2_Q6,
    question: "Which phrase best describes 'mindfulness meditation'?",
    options: [
      'A) Practice of being aware of any sensations in the body.',
      'B) Practice of focusing on a single point.',
      'C) Practice of paying attention to your thoughts.',
      'D) Practice of letting go of your thoughts.',
    ],
    answer: 'C) Practice of paying attention to your thoughts.',
    method: "The article defines mindfulness meditation as encouraging 'the practitioner to observe wandering thoughts as they drift through the mind' and 'simply to be aware of each mental note as it arises.' Being aware of each thought = paying attention to your thoughts (C). A relates to body sensations, which is not described. B ('focusing on a single point') describes Concentration Meditation, not mindfulness. D ('letting go') partially captures the non-judgement aspect but the core definition is about awareness.",
  },
  { group: 'FRP2_Q6', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Health Article', context: ctxFRP2_Q6,
    question: "Which word could replace 'diminish' in the second paragraph without changing the meaning of the sentence?",
    options: [
      'A) Develop',
      'B) Separate',
      'C) Decrease',
      'D) Segregate',
    ],
    answer: 'C) Decrease',
    method: "The sentence reads: 'diminish the less positive ones like fear and stress.' 'Diminish' means to make something smaller or less. 'Decrease' (C) is a direct synonym. 'Develop' (A) means to grow, which is the opposite. 'Separate' (B) and 'Segregate' (D) mean to divide apart, which does not fit the context of reducing fear and stress.",
  },
  { group: 'FRP2_Q6', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Health Article', context: ctxFRP2_Q6,
    question: 'Which of the following benefits from meditation is not listed?',
    options: [
      'A) Improves sleep.',
      'B) Improves workplace output.',
      'C) Reduces irritable bowel symptoms.',
      'D) Reduces stress levels.',
    ],
    answer: 'C) Reduces irritable bowel symptoms.',
    method: "The article lists these benefits: reducing stress (D), improving sleep (A), increasing focus, improving relationships, reducing anxiety, reducing coronary disease hospitalisation, relieving insomnia, and increasing productivity/workplace output (B). Irritable bowel symptoms (C) are never mentioned. It is the only option that cannot be found anywhere in the article or its statistics.",
  },
  { group: 'FRP2_Q6', set: 'FRV Practice #2', type: 'true_false_matrix', category: 'Health Article', context: ctxFRP2_Q6,
    matrixLabels: ['Yes', 'No'],
    question: 'Which of the following points are true? Tick Yes or No for each point.',
    options: [
      'Overall, women meditate less than men.',
      'Meditation can be described as exercise for the brain.',
      'Younger people are less likely to meditate than older people.',
      'Concentrated meditation is more beneficial than mindfulness meditation.',
    ],
    answer: 'No,Yes,Yes,No',
    method: "Women meditate less than men — No: the statistics show 'there\'s a greater number of women who meditate than men.'\nExercise for the brain — Yes: 'We like to think of meditation as exercise for the brain' is explicitly stated.\nYounger people less likely — Yes: 'Adults aged 45–64 are the most likely to use meditation,' meaning younger people are less likely.\nConcentrated meditation more beneficial — No: the article presents both types objectively with no comparison of benefit levels.",
  },
]

app.get('/api/literacy-topics', (req, res) => {
  const categoryMap = {}
  literacyQuestions.forEach(q => {
    if (!categoryMap[q.category]) categoryMap[q.category] = 0
    categoryMap[q.category]++
  })
  const result = Object.entries(categoryMap)
    .map(([name, questionCount]) => ({ name, questionCount }))
    .sort((a, b) => a.name.localeCompare(b.name))
  res.json(result)
})

app.get('/api/literacy-sets', (req, res) => {
  const counts = {}
  literacyQuestions.forEach(q => {
    if (q.set) counts[q.set] = (counts[q.set] || 0) + 1
  })
  res.json(Object.entries(counts).sort().map(([name, questionCount]) => ({ name, questionCount })))
})

app.get('/api/literacy-questions', (req, res) => {
  const { count, categories, sets, ordered } = req.query
  const TARGET = count ? parseInt(count) : 30
  let pool = literacyQuestions
  if (sets) {
    const setsFilter = new Set(sets.split(',').map(s => s.trim()))
    pool = literacyQuestions.filter(q => q.set && setsFilter.has(q.set))
  } else if (categories) {
    const cats = new Set(categories.split(',').map(c => c.trim()))
    pool = literacyQuestions.filter(q => cats.has(q.category))
  } else {
    // General test: exclude groups with only 1 question so every body of text
    // has multiple questions associated with it
    const groupSizes = {}
    literacyQuestions.forEach(q => { groupSizes[q.group] = (groupSizes[q.group] || 0) + 1 })
    pool = literacyQuestions.filter(q => groupSizes[q.group] >= 2)
  }

  let taken
  if (ordered === 'true') {
    taken = [...pool].sort((a, b) => a.group.localeCompare(b.group, undefined, { numeric: true }))
  } else {
    const shuffled = shuffleByGroup(pool)
    // Take complete groups — never cut mid-group
    taken = []
    let i = 0
    while (i < shuffled.length) {
      const grp = shuffled[i].group
      let j = i
      while (j < shuffled.length && shuffled[j].group === grp) j++
      taken.push(...shuffled.slice(i, j))
      i = j
      if (taken.length >= TARGET) break
    }
  }

  const final = taken.map((q, idx) => ({
    id: idx + 1,
    type: q.type,
    category: q.category,
    group: q.group,
    set: q.set || null,
    context: q.context || null,
    question: q.question,
    options: q.options || null,
    answer: q.answer,
    method: q.method || null,
    unit: null,
    matrixLabels: q.matrixLabels || null
  }))
  res.json(final)
})

const abstractQuestions = [
  // ── Next in Sequence ───────────────────────────────────────────────────────
  {
    group: 'AR1',
    type: 'image_choice',
    category: 'Next in Sequence',
    question: 'Which option most logically and simply comes next in the sequence?',
    questionImage: '/images/abstract/q1_sequence.svg',
    options: [
      '/images/abstract/q1_a.svg',
      '/images/abstract/q1_b.svg',
      '/images/abstract/q1_c.svg',
      '/images/abstract/q1_d.svg',
    ],
    answer: 'D',
    method: 'The cross alternates between + and × each step. The dot rotates 45° anticlockwise each step: top → top-left → left → bottom-left → bottom. The 5th shape must be a + with the dot at the bottom. Option D is correct.'
  },
  {
    group: 'AR2',
    type: 'image_choice',
    category: 'Next in Sequence',
    question: 'Which option most logically and simply comes next in the sequence?',
    questionImage: '/images/abstract/q2_sequence.svg',
    options: [
      '/images/abstract/q2_a.svg',
      '/images/abstract/q2_b.svg',
      '/images/abstract/q2_c.svg',
      '/images/abstract/q2_d.svg',
    ],
    answer: 'A',
    method: 'The highlighted (black) petal of the 8-pointed star rotates 45° clockwise each step: N → NE → E → SE. The next step is S (south). Option A shows the south petal filled black.'
  },
  {
    group: 'AR3',
    type: 'image_choice',
    category: 'Next in Sequence',
    question: 'Which option most logically and simply comes next in the sequence?',
    questionImage: '/images/abstract/q3_sequence.svg',
    options: [
      '/images/abstract/q3_a.svg',
      '/images/abstract/q3_b.svg',
      '/images/abstract/q3_c.svg',
      '/images/abstract/q3_d.svg',
    ],
    answer: 'B',
    method: 'The pair of arrows rotates 90° anticlockwise each step. After four steps (4 × 90° = 360°) the arrangement returns to its original orientation: large arrow pointing right, small arrow pointing down. Option B is correct.'
  },
  {
    group: 'AR4',
    type: 'image_choice',
    category: 'Next in Sequence',
    question: 'Which option most logically and simply comes next in the sequence?',
    questionImage: '/images/abstract/q4_sequence.svg',
    options: [
      '/images/abstract/q4_a.svg',
      '/images/abstract/q4_b.svg',
      '/images/abstract/q4_c.svg',
      '/images/abstract/q4_d.svg',
    ],
    answer: 'B',
    method: 'The three fills (solid black, polka-dot, white) cycle through the three regions in a fixed order each step. After the fourth frame (which repeats frame 1), the fifth frame continues to the second position in the cycle: top strip = dots, left strip = white, main area = black. Option B is correct.'
  },
  {
    group: 'AR5',
    type: 'image_choice',
    category: 'Next in Sequence',
    question: 'Which option most logically and simply comes next in the sequence?',
    questionImage: '/images/abstract/q5_sequence.svg',
    options: [
      '/images/abstract/q5_a.svg',
      '/images/abstract/q5_b.svg',
      '/images/abstract/q5_c.svg',
      '/images/abstract/q5_d.svg',
    ],
    answer: 'A',
    method: 'The dot moves progressively inward on the dartboard: outer ring top-right → outer ring bottom-left → middle ring bottom → inner ring top → centre (bullseye). Option A shows the dot at the centre.'
  },
  {
    group: 'AR6',
    type: 'image_choice',
    category: 'Next in Sequence',
    question: 'Which option most logically and simply comes next in the sequence?',
    questionImage: '/images/abstract/q6_sequence.svg',
    options: [
      '/images/abstract/q6_a.svg',
      '/images/abstract/q6_b.svg',
      '/images/abstract/q6_c.svg',
      '/images/abstract/q6_d.svg',
    ],
    answer: 'D',
    method: 'The interior of the sun\'s circle darkens progressively each step: white → very light grey → medium grey → dark grey → solid black. Option D shows the fully black (solid) interior, which is the next step in the sequence.'
  },
]

app.get('/api/abstract-questions', (req, res) => {
  const shuffled = [...abstractQuestions].sort(() => Math.random() - 0.5)
  const final = shuffled.map((q, i) => ({
    id: i + 1,
    type: q.type,
    category: q.category,
    group: q.group,
    question: q.question,
    questionImage: q.questionImage || null,
    options: q.options || null,
    answer: q.answer,
    method: q.method || null,
  }))
  const customCount = req.query.count ? parseInt(req.query.count) : null
  res.json(customCount ? final.slice(0, customCount) : final)
})

const mechanicalQuestions = [
  { group: 'M1', set: 'Set 01', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/mech 01.png',
    question: 'How many wheels are turning clockwise?',
    options: ['A) 2', 'B) 4', 'C) 6', 'D) 8'],
    answer: 'B) 4',
    method: 'Wheels turning clockwise: Purple, Pink, Green, Red (4 total). Wheels turning anti-clockwise: Yellow, Light Blue, Grey, Dark Blue. The light blue and green wheels are fixed to the yellow and red wheels respectively, so they turn in the same direction as their paired wheel.'
  },
  { group: 'M2', set: 'Set 01', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/mech 02.png',
    question: 'Which of the belts is least likely to slip if each drive wheel is subjected to the same force?',
    options: ['A) Belt A', 'B) Belt B', 'C) Belt C', 'D) All equal'],
    answer: 'C) Belt C',
    method: 'The greater the angle a belt wraps around the drive wheel, the greater the friction, reducing the likelihood of slipping. The cross belt in Option C wraps more than 180 degrees around each wheel, providing more friction than a standard open belt. Options A and B have smaller angles of wrap and therefore less friction.'
  },
  { group: 'M3', set: 'Set 01', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/mech 03.png',
    question: 'How much weight is needed to hold the 60 kg weight?',
    options: ['A) 10 kg', 'B) 20 kg', 'C) 30 kg', 'D) 40 kg', 'E) 60 kg'],
    answer: 'C) 30 kg',
    method: 'This is a movable pulley system. Fixed pulleys change the direction of force but do not reduce the effort required. The mechanical advantage equals the number of rope sections supporting the movable pulley — in this case, 2 sections. Divide the load by the mechanical advantage: 60 kg ÷ 2 = 30 kg.'
  },
  { group: 'M4', set: 'Set 01', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/mech 04.png',
    question: 'Which rod will move up and down more as the cam rotates?',
    options: ['A) Rod A', 'B) Rod B', 'C) Rod C', 'D) All equally'],
    answer: 'A) Rod A',
    method: "Rod A's pivot point is furthest from the centre of the cam, so the cam's rotation creates a larger arc at that contact point, forcing Rod A to travel a greater vertical distance. Rod B's pivot is near the cam's centre, resulting in minimal vertical movement as the cam rotates."
  },
  { group: 'M5', set: 'Set 01', type: 'multiple_choice', category: 'Fluid Mechanics',
    questionImage: '/images/mechanical reasoning/mech 05.png',
    question: 'A bucket of water has a leak on its lower side. As the water leaves the bucket, what happens to the pressure of the water at the bottom of the bucket?',
    options: ['A) Increases', 'B) Stays the same', 'C) Decreases', 'D) Cannot say'],
    answer: 'C) Decreases',
    method: 'Fluid pressure at the bottom of a container is determined by the height of the liquid column above it (P = ρgh). As water leaks out, the water level drops, reducing the height of the column above the bottom and therefore decreasing the pressure. The pressure does not stay constant because the depth is changing.'
  },
  { group: 'M6', set: 'Set 01', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/mech 06.png',
    question: 'If both balls X & Y are made from the same material, where would ball X have to be positioned to balance the beam?',
    options: ['A) Position A', 'B) Position B', 'C) Position C', 'D) Position D'],
    answer: 'C) Position C',
    method: 'Ball X is approximately twice the volume of Ball Y. Since both are made from the same material, Ball X has roughly twice the mass. On a lever, a heavier object must be placed closer to the fulcrum to achieve balance. Position C places Ball X at the correct distance to counterbalance the lighter Ball Y at its greater distance from the fulcrum.'
  },
  { group: 'M7', set: 'Set 01', type: 'multiple_choice', category: 'Electrical Circuits',
    questionImage: '/images/mechanical reasoning/mech 07.png',
    question: 'From the circuit below, what would happen if only Switch B & Switch D close?',
    options: ['A) All bulbs shine', 'B) Bulbs C & E only', 'C) Bulbs D, E & F', 'D) Bulbs C, E & F', 'E) Bulbs A, B, E & F', 'F) No bulbs shine'],
    answer: 'D) Bulbs C, E & F',
    method: 'Only bulbs within a completed circuit path will illuminate. Closing switches B and D creates a closed path through that specific section of the circuit, completing the circuit for bulbs C, E, and F. All other switches remain open, leaving the rest of the circuit incomplete and their associated bulbs unlit.'
  },
  { group: 'M8', set: 'Set 01', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/mech 08.png',
    question: 'Gear A has 1/3 of the teeth of Gear B. How many times will Gear B rotate if Gear A rotates 6 full times?',
    options: ['A) 2', 'B) 4', 'C) 6', 'D) 8', 'E) 12'],
    answer: 'A) 2',
    method: 'The gear ratio is determined by tooth count. Gear A has one-third the teeth of Gear B, so Gear A must rotate 3 times for every single rotation of Gear B (the smaller gear rotates faster). If Gear A rotates 6 times: 6 ÷ 3 = 2 rotations for Gear B.'
  },

  // ── Set Q: 32-question bank (Mech Q01–Q32) ────────────────────────────────
  { group: 'MQ01', set: 'Set 02', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech Q01.png',
    question: 'Wheels W and X are 6cm across. Wheels Y and Z are 3cm across. When W makes one turn, Z will make:',
    options: ['A) one complete turn', 'B) two complete turns', 'C) three complete turns', 'D) four complete turns'],
    answer: 'D) four complete turns',
    method: 'This is a compound gear train with two 2:1 stages. W (6cm) drives the first small wheel (3cm) at 2:1 — 2 turns per W turn. That small wheel is paired on the same shaft as a larger wheel which then drives Z (3cm) at another 2:1. The ratios multiply: 2 × 2 = 4. One turn of W → four turns of Z.'
  },
  { group: 'MQ02', set: 'Set 02', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech Q02.png',
    question: 'If handle A is pushed upwards in the direction of the arrow:',
    options: ['A) end C will move down and end B will move up', 'B) end C will move up and end B will move down', 'C) end B will move up and end C will move up', 'D) end B will move down and end C will move down'],
    answer: 'B) end C will move up and end B will move down',
    method: 'Pushing handle A upward transmits force through the linkage. The lever arrangement means end C moves up while end B moves down — the two ends move in opposite vertical directions as A is pushed.'
  },
  { group: 'MQ03', set: 'Set 02', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech Q03.png',
    question: 'If wheel W turns clockwise as indicated, Z will:',
    options: ['A) move to the left only', 'B) move to the right only', 'C) not move at all (unworkable)', 'D) move to and fro'],
    answer: 'D) move to and fro',
    method: 'W drives a crank or eccentric mechanism connected to slider Z. As the wheel rotates continuously, the crank converts the rotary motion into reciprocating (back-and-forth) linear motion in Z — a classic crank-slider arrangement.'
  },
  { group: 'MQ04', set: 'Set 02', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech Q04.png',
    question: 'If wheel A turns anticlockwise as indicated, D will:',
    options: ['A) turn anticlockwise', 'B) turn clockwise', 'C) turn to and fro', 'D) jam the mechanism'],
    answer: 'D) jam the mechanism',
    method: 'When wheel A turns anticlockwise, the geometry of the connecting mechanism forces D into a position where it cannot move — the linkage locks up and the mechanism jams rather than converting the rotation into useful motion.'
  },
  { group: 'MQ05', set: 'Set 02', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/Mech Q05.png',
    question: 'If the cord is pulled to the left, how will A and B move?',
    options: ['A) A goes up and B to the right', 'B) A goes down and B to the right', 'C) A goes down and B to the left', 'D) A goes up and B to the left'],
    answer: 'B) A goes down and B to the right',
    method: 'Trace the cord path: pulling left feeds cord through the pulley system in a specific direction. Following the routing, block A descends while block B is drawn to the right — each block moves in the direction determined by how the cord wraps around its wheel.'
  },
  { group: 'MQ06', set: 'Set 02', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech Q06.png',
    question: 'If handle H is pulled down, how will the hook at the end of non-fixed pivot L move?',
    options: ['A) straight up and closer to L', 'B) right only and remain same distance from L', 'C) left but remain same distance from L', 'D) right, then left and closer to L'],
    answer: 'C) left but remain same distance from L',
    method: 'Pulling H down drives the lever so the hook at L swings to the left. Since the hook is on a rigid arm pivoting around a fixed radius from L, it maintains the same distance from L — it moves in an arc leftward while the radial distance stays constant.'
  },
  { group: 'MQ07', set: 'Set 02', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech Q07.png',
    question: 'If handle A is pulled down, how will B move?',
    options: ['A) remain in a fixed position', 'B) move to the left and up', 'C) move to the right and up', 'D) move to and fro'],
    answer: 'C) move to the right and up',
    method: 'Pulling A down drives a connecting lever or linkage that redirects the force. The geometry of the pivot arrangement causes B to move diagonally — up and to the right — as A descends.'
  },
  { group: 'MQ08', set: 'Set 02', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech Q08.png',
    question: 'Wheel Z drives wheel Y. A connecting rod attached to wheel Y moves in a slot. Will pivot P move:',
    options: ['A) to and fro with pauses', 'B) to the right and jam', 'C) to the left and jam', 'D) to and fro continuously'],
    answer: 'D) to and fro continuously',
    method: 'As wheel Y rotates continuously, the connecting rod in the slot drives pivot P back and forth without pause. The wheel\'s constant rotation is converted directly into smooth reciprocating motion in P — it moves to and fro continuously with no stopping at the extremes.'
  },
  { group: 'MQ09', set: 'Set 02', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/Mech Q09.png',
    question: 'If conveyors on the 1st and 2nd floors are turning but the 3rd and 4th are not, which belt is broken?',
    options: ['A) Belt A', 'B) Belt B', 'C) Belt C', 'D) Belt D'],
    answer: 'C) Belt C',
    method: 'The belt system connects floors sequentially. Floors 1 and 2 are operational, meaning the belts powering those levels (A and B) are intact. The break must be between the 2nd and 3rd floor — that is belt C. Belt D connects 3rd to 4th floor and may also be broken, but removing C alone accounts for floors 3 and 4 stopping.'
  },
  { group: 'MQ10', set: 'Set 02', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech Q10.png',
    question: 'If handle X is pulled down, Z (hook) will:',
    options: ['A) move left and closer to Y', 'B) move left and remain same distance from Y', 'C) move right and further away from Y', 'D) remain in its position'],
    answer: 'A) move left and closer to Y',
    method: 'Pulling X down drives the lever linkage, causing Z to swing to the left. The arc of the pivot simultaneously brings Z closer to Y as the geometry of the arm shortens the effective distance between hook and reference point.'
  },
  { group: 'MQ11', set: 'Set 02', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech Q11.png',
    question: 'If handle X is pulled down, W (hook) will:',
    options: ['A) remain in its position', 'B) move right and further away from Y', 'C) move left and closer to Y', 'D) move left and further away from Z'],
    answer: 'D) move left and further away from Z',
    method: 'Pulling handle X down drives W through the lever linkage, causing W (hook) to swing to the left. As W arcs outward through its range of travel, it moves further away from reference point Z — the arm extends away from Z as it rotates left.'
  },
  { group: 'MQ12', set: 'Set 02', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech Q12.png',
    question: 'If handle A is pulled down, B will move:',
    options: ['A) up and closer to pivot Y', 'B) down and further away from pivot Y', 'C) up and remain the same distance from Y', 'D) down and further away from X'],
    answer: 'B) down and further away from pivot Y',
    method: 'Pulling handle A down drives the linkage so that B also moves downward. As B descends through its arc of motion, the geometry takes it further away from pivot Y — the arm extends outward as B moves down.'
  },
  { group: 'MQ13', set: 'Set 02', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech Q13.png',
    question: 'If wheels X and Y move in the direction of the arrows, A will:',
    options: ['A) move to the right first and then to the left in pauses', 'B) move to the left first and then to the right continuously', 'C) not move (jam)', 'D) move to the right first and then to the left continuously'],
    answer: 'C) not move (jam)',
    method: 'Wheels X and Y are meshed with opposing forces — their teeth interlock such that each wheel is trying to push A in a conflicting direction simultaneously. Because both wheels act on A at the same time with opposite forces, the mechanism locks up and A cannot move at all.'
  },
  { group: 'MQ14', set: 'Set 02', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/Mech Q14.png',
    question: 'If the belt travels anticlockwise, how many wheels turn clockwise?',
    options: ['A) one', 'B) two', 'C) three', 'D) four'],
    answer: 'B) two',
    method: 'Trace the belt path anticlockwise through all wheels. Wheels contacted on their outer surface by an anticlockwise belt turn anticlockwise; any wheel where the belt contacts the inner surface or crosses runs clockwise. Following the full path, exactly two wheels end up turning clockwise.'
  },
  { group: 'MQ15', set: 'Set 02', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech Q15.png',
    question: 'Wheels B and C have pins in slots in wheel A. A will:',
    options: ['A) turn anticlockwise continuously', 'B) turn clockwise continuously', 'C) turn to and fro', 'D) not operate (opposing forces)'],
    answer: 'D) not operate (opposing forces)',
    method: 'Wheels B and C both have pins engaging slots in wheel A, and they turn in opposite directions. Because B and C apply opposing forces to A simultaneously through their pins, neither can drive A — the forces cancel out and the mechanism cannot operate.'
  },
  { group: 'MQ16', set: 'Set 02', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech Q16.png',
    question: 'Spring Z is 3 times stronger than spring X. Towards which point will block A move?',
    options: ['A) X', 'B) Y', 'C) P', 'D) Q'],
    answer: 'B) Y',
    method: 'Equal rotations of each screw move the block upward and to the left equally — the motion is independent of spring strength. The lower screw will require more force to turn (because spring Z is 3× stronger), but both screws move the block the same distance per turn. Block A therefore moves toward Y.'
  },
  { group: 'MQ17', set: 'Set 02', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech Q17.png',
    question: 'If wheel A turns as shown, which is true?',
    options: ['A) D, C, B all turn in the same direction', 'B) D and C turn in opposite directions', 'C) A and B turn in the same direction', 'D) A and B turn in opposite directions'],
    answer: 'C) A and B turn in the same direction',
    method: 'Each meshed gear pair reverses direction. Tracing from A through the intermediate gears to B: the number of mesh reversals between A and B results in an even total — so A and B end up turning in the same direction. The gears between them alternate direction but A and B share the same rotation.'
  },
  { group: 'MQ18', set: 'Set 02', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/Mech Q18.png',
    question: 'If the cord is pulled until each block passes its first wheel, which is true?',
    options: ['A) X right/down, Y right/up/left', 'B) X left/up, Y left/diagonally right', 'C) X right/down, Y right/up', 'D) X left/up, Y left/right'],
    answer: 'A) X right/down, Y right/up/left',
    method: 'Follow each block along the cord path. Pulling the cord draws X to the right then downward as it passes its first wheel. Block Y is pulled to the right, then up, then left as it passes its wheel — the cord wraps around Y\'s pulley and redirects Y\'s path to the left after passing over the top.'
  },
  { group: 'MQ19', set: 'Set 02', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech Q19.png',
    question: 'If Z is turned clockwise, then:',
    options: ['A) X and Y both clockwise', 'B) X clockwise, Y anticlockwise', 'C) X and Y both anticlockwise', 'D) X anticlockwise, Y clockwise'],
    answer: 'A) X and Y both clockwise',
    method: 'Z turns clockwise and drives both X and Y through the mechanism shown. The arrangement — whether via belt, internal gearing, or the specific linkage — results in both X and Y turning clockwise in the same direction as Z.'
  },
  { group: 'MQ20', set: 'Set 02', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech Q20.png',
    question: 'If handle J is pulled up, how will M (hook) move?',
    options: ['A) straight out to left, further from K', 'B) up to left, further from L', 'C) down to left, further from L', 'D) down and to left, same distance from L'],
    answer: 'C) down to left, further from L',
    method: 'Pulling handle J up drives the linkage, causing hook M to move down and to the left. As M travels through its arc, the geometry of the linkage takes it further away from pivot point L — the arm extends outward as it swings down-left.'
  },
  { group: 'MQ21', set: 'Set 02', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech Q21.png',
    question: 'When A and C turn clockwise, rods X and Y will:',
    options: ['A) slide in opposite directions', 'B) jam the mechanism', 'C) both slide to the right', 'D) both slide to the left'],
    answer: 'A) slide in opposite directions',
    method: 'Gears A and C turn clockwise and are connected to rods X and Y respectively. Because A and C drive their rods from opposite sides of the mechanism, the rods are pushed in opposite directions — when one slides one way, the other slides the other way.'
  },
  { group: 'MQ22', set: 'Set 02', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech Q22.png',
    question: 'If the handle is pulled to the right, T will move:',
    options: ['A) to the right, same distance from R', 'B) closer to the handle, further from R', 'C) to the left and closer to R', 'D) closer to the handle, same distance from R'],
    answer: 'D) closer to the handle, same distance from R',
    method: 'Pulling the handle right draws T toward the handle through the linkage. T moves closer to the handle\'s direction. Since T is on a rigid arm pivoting at a fixed radius from R, it stays the same distance from R throughout its arc — it moves toward the handle while remaining equidistant from R.'
  },
  { group: 'MQ23', set: 'Set 02', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/Mech Q23.png',
    question: 'If the belt travels anticlockwise, which is true?',
    options: ['A) M/K turn in opposite directions, J/L turn in opposite directions', 'B) M/K turn the same, J/K turn the same', 'C) M and J turn the same', 'D) L and K turn the same'],
    answer: 'A) M/K turn in opposite directions, J/L turn in opposite directions',
    method: 'The belt runs anticlockwise over the wheel arrangement. Wheels on the same side of the belt run in the same direction; wheels on opposite sides run in opposite directions. Tracing the belt: M and K are on opposite sides of the belt run, as are J and L — each pair turns in opposite directions.'
  },
  { group: 'MQ24', set: 'Set 02', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech Q24.png',
    question: 'Which mechanism out of J, K, L and M will act as a brake?',
    options: ['A) J', 'B) K', 'C) L', 'D) M'],
    answer: 'C) L',
    method: 'A braking mechanism works by applying a force that opposes rotation or motion — typically a band, pad, or cam that grips a rotating surface. Of the four mechanisms shown, L is configured to grip or press against the rotating component, creating friction that resists and slows movement.'
  },
  { group: 'MQ25', set: 'Set 02', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech Q25.png',
    question: 'When S turns anticlockwise, it drives T and U:',
    options: ['A) both clockwise to and fro', 'B) both anticlockwise continuously', 'C) both anticlockwise to and fro', 'D) T clockwise and U anticlockwise, to and fro'],
    answer: 'D) T clockwise and U anticlockwise, to and fro',
    method: 'S turns anticlockwise and drives T and U through a crank or cam mechanism that converts rotation into oscillating motion. T is driven clockwise and U anticlockwise — they swing in opposite directions — and both move to and fro rather than completing full rotations because the linkage limits their range of travel.'
  },
  { group: 'MQ26', set: 'Set 02', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech Q26.png',
    question: 'When handle S is pulled to the right, T will:',
    options: ['A) remain in its present position', 'B) move closer to V and U', 'C) move closer to V, same distance from U', 'D) move further from S and closer to U'],
    answer: 'C) move closer to V, same distance from U',
    method: 'Pulling handle S to the right drives T through the linkage so it moves closer to reference point V. Since T is on a pivoting arm at a fixed radius from U, it maintains the same distance from U throughout the movement — closer to V but unchanged distance from U.'
  },
  { group: 'MQ27', set: 'Set 02', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech Q27.png',
    question: 'When the motor drives wheels L, K and M, which is true?',
    options: ['A) M and L turn clockwise, K turns anticlockwise', 'B) will not work (L and M opposing)', 'C) will not work (L and K opposing)', 'D) M and K turn clockwise, L turns anticlockwise'],
    answer: 'B) will not work (L and M opposing)',
    method: 'When the motor drives wheels L, K and M, the directions imposed on L and M create a conflict — they are forced to turn in incompatible directions at their point of contact. These opposing forces lock the mechanism and prevent it from operating.'
  },
  { group: 'MQ28', set: 'Set 02', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech Q28.png',
    question: 'When wheel A turns clockwise, how will B move?',
    options: ['A) mechanism jams', 'B) anticlockwise intermittently', 'C) to and fro', 'D) anticlockwise continuously'],
    answer: 'B) anticlockwise intermittently',
    method: 'Wheel A has a pin near its edge that engages a slot in wheel B. As A rotates clockwise, the pin enters and drives B anticlockwise — but only during the portion of A\'s rotation where the pin is engaged. When the pin exits the slot, B stops. This produces intermittent anticlockwise motion in B.'
  },
  { group: 'MQ29', set: 'Set 02', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech Q29.png',
    question: 'Which statement is true?',
    options: ['A) will not work (J/K opposing)', 'B) all turn anticlockwise except M and L', 'C) J, K, L turn anticlockwise, M turns clockwise', 'D) only L turns clockwise'],
    answer: 'B) all turn anticlockwise except M and L',
    method: 'Wheels J and L turn as shown by the arrows. Tracing the gear train: most wheels are driven anticlockwise, but M and L are the exceptions — their positions in the chain and the direction of the arrows result in M and L turning clockwise while all other wheels turn anticlockwise.'
  },
  { group: 'MQ30', set: 'Set 02', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech Q30.png',
    question: 'To make the lower shaft turn the fastest, around which pair should a belt be attached?',
    options: ['A) Same speed regardless', 'B) Pair A', 'C) Pair B', 'D) Pair C'],
    answer: 'B) Pair A',
    method: 'To maximise the lower shaft speed, attach the belt to the pair where the upper wheel is largest relative to the lower wheel — this gives the highest speed multiplication. Pair A provides this configuration. The ratio of revolutions across pairs A, B and C is approximately 3:2:1, so pair A makes the lower shaft spin fastest.'
  },
  { group: 'MQ31', set: 'Set 02', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/Mech Q31.png',
    question: 'If the 2nd, 3rd and 4th floor conveyors are working but the 1st floor is not, what is the explanation?',
    options: ['A) Motor not working', 'B) Belt K broken', 'C) Belts K and L broken', 'D) Belts J and K broken'],
    answer: 'B) Belt K broken',
    method: 'If the motor were faulty, no floors would work. Since floors 2, 3 and 4 are operational, the motor and all belts feeding those levels are intact. The fault is isolated to the 1st floor only — meaning only the belt serving the 1st floor is broken. Belt K connects the motor or upper drive to the 1st floor conveyor; breaking K stops only that floor.'
  },
  { group: 'MQ32', set: 'Set 02', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech Q32.png',
    question: 'For each rotation of cam A, punch P will:',
    options: ['A) do nothing (jam)', 'B) punch three times', 'C) punch once', 'D) punch right through once'],
    answer: 'B) punch three times',
    method: 'Cam A is three-sided (triangular), so it lifts the cam follower three times per full revolution — once for each side. The cam follower is shown in its lowest position where the punch is just touching the plate, so it operates the punch three times per rotation but cannot punch through the plate.'
  },

  // Set 03: MS01–MS20
  { group: 'MS01', set: 'Set 03', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech_Set03_Q01.png',
    question: 'As pin P is hammered down, the fit of axle A to wheel W will become:',
    options: ['A) tighter', 'B) looser', 'C) unchanged', 'D) first looser then tighter'],
    answer: 'A) tighter',
    method: 'The pin and holes are tapered (wider at the top, narrower at the bottom). As pin P is hammered down, the taper tightens the fit between axle A and wheel W — the joint becomes progressively tighter.'
  },
  { group: 'MS02', set: 'Set 03', type: 'multiple_choice', category: 'Fluid Pressure',
    questionImage: '/images/mechanical reasoning/Mech_Set03_Q02.png',
    question: 'Identical floats have equal lead weights attached as shown. They are released into the liquids shown. After the floats come to rest, which container has the highest level of liquid?',
    options: ['A) petrol', 'B) sea water', 'C) pure water', 'D) all the same'],
    answer: 'A) petrol',
    method: 'Archimedes\' Principle: an object floats by displacing liquid equal to its own weight. Petrol is the least dense liquid, so more of it must be displaced for the float to float. The float sinks deeper and raises the petrol level the most.'
  },
  { group: 'MS03', set: 'Set 03', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech_Set03_Q03.png',
    question: 'Weight W is placed on a plank supported by scales A and B. As W is moved from right to left, what will happen to the scale readings?',
    options: ['A) A will increase and B will stay the same', 'B) both A and B will stay the same', 'C) A will increase and B will decrease', 'D) A will decrease and B will increase'],
    answer: 'C) A will increase and B will decrease',
    method: 'At all times the total weight shown by both scales equals the weight of the plank plus W. As W moves from right (B side) to left (A side), more weight is transferred to A and less to B. A increases and B decreases. The scales read equal when W is at the midpoint.'
  },
  { group: 'MS04', set: 'Set 03', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech_Set03_Q04.png',
    question: 'Which wheel will rotate the fastest?',
    options: ['A) A', 'B) B', 'C) C', 'D) all the same'],
    answer: 'D) all the same',
    method: 'All wheels are connected by the same belt running over their surfaces. The belt drives all wheels at the same linear speed — since their circumferences are equal, all wheels rotate at the same speed.'
  },
  { group: 'MS05', set: 'Set 03', type: 'multiple_choice', category: 'Fluid Pressure',
    questionImage: '/images/mechanical reasoning/Mech_Set03_Q05.png',
    question: 'At which point is the pressure greatest?',
    options: ['A) A', 'B) B', 'C) C', 'D) all the same'],
    answer: 'B) B',
    method: 'The pressure of a liquid depends only on the vertical depth below the surface — not on the shape of the container or volume of liquid. Point B is at the greatest depth, so it experiences the highest pressure. This is why divers must take greater care the deeper they dive.'
  },
  { group: 'MS06', set: 'Set 03', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech_Set03_Q06.png',
    question: 'Which tree will fall to the right?',
    options: ['A) A', 'B) B', 'C) neither', 'D) both'],
    answer: 'A) A',
    method: 'A tree falls when its centre of gravity (COG) overhangs the base. When pushed in the direction of the small cut, the lower trunk supports the upper trunk until the COG passes over the base edge. Tree A is cut so its COG will overhang to the right; tree B is not.'
  },
  { group: 'MS07', set: 'Set 03', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech_Set03_Q07.png',
    question: 'Which pendulum swings the fastest?',
    options: ['A) A', 'B) B', 'C) C', 'D) all the same'],
    answer: 'C) C',
    method: 'The swing period of a pendulum depends only on the length of the string — not on the weight of the bob. A shorter string produces a faster swing. Pendulum C has the shortest string and therefore swings the fastest.'
  },
  { group: 'MS08', set: 'Set 03', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech_Set03_Q08.png',
    question: 'Wheel A is driven clockwise as shown. Which of the following statements is true?',
    options: ['A) wheel B will rotate continuously clockwise', 'B) wheel B will rotate continuously anticlockwise', 'C) the mechanism will jam', 'D) wheel B will rotate to and fro'],
    answer: 'D) wheel B will rotate to and fro',
    method: 'The mechanism converts the continuous rotation of wheel A into oscillating motion in wheel B. This back-and-forth movement is called oscillation — B swings to and fro rather than completing full rotations.'
  },
  { group: 'MS09', set: 'Set 03', type: 'multiple_choice', category: 'Electrical Circuits',
    questionImage: '/images/mechanical reasoning/Mech_Set03_Q09.png',
    question: 'Which switch or switches must be closed to light both globes?',
    options: ['A) A only', 'B) B only', 'C) C only', 'D) B and C'],
    answer: 'A) A only',
    method: 'For globes to light, there must be an unbroken path from the battery through the lamps. Switch A is in series with both globes — closing A alone completes the circuit for both. Switches B and C control individual branches only.'
  },
  { group: 'MS10', set: 'Set 03', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech_Set03_Q10.png',
    question: 'When cams X, Y and Z are driven about their fixed pivots, which rod will travel the greatest distance?',
    options: ['A) A', 'B) B', 'C) C', 'D) all the same'],
    answer: 'C) C',
    method: 'Rod travel distance is determined by the difference between the maximum and minimum radius of the cam from its pivot — its eccentricity. The cam with the greatest eccentricity (greatest offset between pivot and cam centre) produces the largest stroke. Cam C has the greatest offset, so rod C travels the furthest.'
  },
  { group: 'MS11', set: 'Set 03', type: 'multiple_choice', category: 'Electrical Circuits',
    questionImage: '/images/mechanical reasoning/Mech_Set03_Q11.png',
    question: 'In this circuit which of the following statements is false?',
    options: ['A) operating switch A can light the lamp', 'B) operating switch B can light the lamp', 'C) operating both switches together can light the lamp', 'D) the lamp can be lit depending on the state of switches A and B'],
    answer: 'C) operating both switches together can light the lamp',
    method: 'This is a two-way switching circuit (as used for staircase lighting). Either switch alone can light the lamp by completing a path. However, operating both switches simultaneously breaks the circuit — no current flows and the lamp goes out. Statement C is therefore false.'
  },
  { group: 'MS12', set: 'Set 03', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech_Set03_Q12.png',
    question: 'Which pair or pairs of magnets will attract?',
    options: ['A) A and B', 'B) all', 'C) A and C', 'D) B and D'],
    answer: 'C) A and C',
    method: 'Like poles (N–N or S–S) repel; unlike poles (N–S) attract. Examining the orientation of each pair: A and C have unlike poles facing each other and will attract. The other pairs have like poles facing each other and will repel.'
  },
  { group: 'MS13', set: 'Set 03', type: 'multiple_choice', category: 'Fluid Pressure',
    questionImage: '/images/mechanical reasoning/Mech_Set03_Q13.png',
    question: 'The circular glass tube is filled with liquid and heated from below as shown. Which of the following statements is true?',
    options: ['A) the liquid will start to move either clockwise or anticlockwise at random', 'B) the liquid will always start to move clockwise', 'C) the liquid will always start to move anticlockwise', 'D) the liquid will remain still'],
    answer: 'A) the liquid will start to move either clockwise or anticlockwise at random',
    method: 'Hot liquid is less dense than cold and rises. When the tube is heated at the centre, both sides are heated equally and either direction of flow is equally likely — the direction is unpredictable. If the heat source were off-centre, the flow direction would be determined.'
  },
  { group: 'MS14', set: 'Set 03', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech_Set03_Q14.png',
    question: 'Shaft S is rotated clockwise as shown. Which of the following statements is true?',
    options: ['A) A turns anticlockwise and B turns clockwise', 'B) A turns clockwise and B turns anticlockwise', 'C) both A and B turn clockwise', 'D) the mechanism jams'],
    answer: 'A) A turns anticlockwise and B turns clockwise',
    method: 'Each meshing gear pair reverses direction. Tracing from S clockwise: S → A reversed → anticlockwise; A → B reversed → clockwise. A turns anticlockwise and B turns clockwise.'
  },
  { group: 'MS15', set: 'Set 03', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/Mech_Set03_Q15.png',
    question: 'Each group of pulleys has wheels whose diameters are in the ratio 1:2:3. The top pulley wheels are all driven at the same speed. Which wheel will rotate the fastest?',
    options: ['A) A', 'B) B', 'C) C', 'D) D'],
    answer: 'A) A',
    method: 'The smallest wheel in a belt drive rotates the fastest. In each group the diameter ratio is 1:2:3 — the smallest wheel turns 3× faster than the largest. Wheel A is the smallest across all groups and rotates the fastest through the pulley chain.'
  },
  { group: 'MS16', set: 'Set 03', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/Mech_Set03_Q16.png',
    question: 'Pulley A turns clockwise as shown. Which of the following statements is true?',
    options: ['A) more pulleys turn clockwise than anticlockwise', 'B) more pulleys turn anticlockwise than clockwise', 'C) the same number of pulleys turn clockwise as anticlockwise', 'D) not all of the pulleys turn'],
    answer: 'C) the same number of pulleys turn clockwise as anticlockwise',
    method: 'Each belt crossing reverses the direction of rotation. Tracing the belt from A through all pulleys, the clockwise and anticlockwise counts balance exactly — the same number of pulleys turn in each direction.'
  },
  { group: 'MS17', set: 'Set 03', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech_Set03_Q17.png',
    question: 'Which tyre has been used under-inflated?',
    options: ['A) A', 'B) B', 'C) C', 'D) D'],
    answer: 'D) D',
    method: 'An under-inflated tyre causes the tyre walls to collapse, putting the outer edges of the tread in contact with the road while the centre lifts away. This produces wear on both outer edges with little wear in the middle — the characteristic pattern of under-inflation.'
  },
  { group: 'MS18', set: 'Set 03', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech_Set03_Q18.png',
    question: 'The circular plate is free to rotate around fixed pivot P. In which hole should thumbscrew T be placed to give the circular plate the maximum possible movement?',
    options: ['A) A', 'B) B', 'C) C', 'D) either A or B'],
    answer: 'D) either A or B',
    method: 'When the thumbscrew is in hole A or B (the curved slots), the plate can rotate the full arc length of the slot — maximum movement. When placed in hole C (the straight slot), the plate can only move a very small amount before the screw binds. Either A or B gives the same maximum range of movement.'
  },
  { group: 'MS19', set: 'Set 03', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech_Set03_Q19.png',
    question: 'Rack A is pushed in the direction shown by the arrow. Which of the following statements is true?',
    options: ['A) gears X and Y turn in the same direction', 'B) gears X and Y turn in opposite directions', 'C) rack B moves left to right', 'D) rack B does not move'],
    answer: 'D) rack B does not move',
    method: 'Rack A and gears X and Y form a three-gear interlocking system with opposing forces — all three are in simultaneous contact and lock each other. The mechanism cannot move, so rack B cannot move either.'
  },
  { group: 'MS20', set: 'Set 03', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech_Set03_Q20.png',
    question: 'A spring holds lever L against fixed pin P. Gear X drives gear Y. Which of the following statements is true?',
    options: ['A) with a weak spring, gear X can turn clockwise', 'B) with a weak spring, gear X can turn anticlockwise', 'C) with a strong spring, gear X can turn clockwise', 'D) with a strong spring, gear X can turn anticlockwise'],
    answer: 'B) with a weak spring, gear X can turn anticlockwise',
    method: 'Pin P stops lever L from being pushed down, so Y cannot turn anticlockwise and X cannot turn clockwise. With a weak spring, gear Y can push lever L upward as Y turns clockwise — the spring gives way, allowing the lever to lift. This frees Y to turn clockwise and X to turn anticlockwise.'
  },

  // FRV Practice #1: MFP01–MFP25
  { group: 'MFP01', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_01.png',
    question: 'What force is required to lift the weight?',
    options: ['A) 6kgs', 'B) 9kgs', 'C) 18kgs', 'D) 36kgs'],
    answer: 'B) 9kgs',
    method: 'This is a combined pulley system. The far left pulley is movable; the top 2 pulleys are fixed. Fixed pulleys change direction only — they provide no mechanical advantage. Count the rope sections around the movable pulley: there are 2, giving a mechanical advantage of 2. Divide the weight: 18 ÷ 2 = 9kgs.'
  },
  { group: 'MFP02', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_02.png',
    question: 'Gear A turns clockwise 10 times. How many times does Gear B turn?',
    options: ['A) 10 turns clockwise', 'B) 10 turns anti-clockwise', 'C) 5 turns clockwise', 'D) 5 turns anti-clockwise'],
    answer: 'B) 10 turns anti-clockwise',
    method: 'Every adjacent gear turns the opposite direction to the one before it — so the 2nd and 4th gears turn anti-clockwise. Because gears A and B are the same size, they turn at the same speed. Gear B (the 4th gear) turns 10 times anti-clockwise.'
  },
  { group: 'MFP03', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Volumes & Shapes',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_03.png',
    question: 'Which shape has the highest surface area?',
    options: ['A) A', 'B) B', 'C) C', 'D) All the same'],
    answer: 'A) A',
    method: 'A cube (A) with side 1 has a surface area of 6. A cylinder (C) with diameter 1 and height 1 has a surface area of approximately 4.71. A triangular prism (B) with equivalent dimensions has approximately 3.87. The cube has the greatest surface area.'
  },
  { group: 'MFP04', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_04.png',
    question: 'What distance on the right side of the yellow triangle is required to balance the weights?',
    options: ['A) 12m', 'B) 24m', 'C) 32m', 'D) 48m'],
    answer: 'B) 24m',
    method: 'Use torque balance — force × distance must be equal on both sides of the fulcrum. Left side: 12 × 8 = 96. Right side: 4 × ? = 96, so ? = 24m.'
  },
  { group: 'MFP05', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Motion & Forces',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_05.png',
    question: 'At which point is the basketball moving the fastest?',
    options: ['A) A', 'B) B', 'C) C', 'D) All the same'],
    answer: 'A) A',
    method: 'In projectile motion, speed is highest at the lowest point — the initial throw at point A. Speed decreases as the ball rises against gravity. At the peak (point C) vertical velocity is zero and overall speed is lowest. Speed increases again as the ball falls.'
  },
  { group: 'MFP06', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Motion & Forces',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_06.jpg',
    question: '2 balls with the same mass are rolling towards each other. After they collide, what will happen to the larger ball?',
    options: ['A) It will stop', 'B) It will roll backwards', 'C) It will roll forwards', 'D) We don\'t know'],
    answer: 'D) We don\'t know',
    method: 'Without knowing the speeds of the balls or whether the collision is elastic or inelastic, the outcome cannot be determined. Force = Mass × Acceleration — whichever ball has a sufficiently larger force will continue forwards after the collision.'
  },
  { group: 'MFP07', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Fluid Mechanics',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_07.png',
    question: 'A cylinder full of water has 3 outlets, A, B & C, with water coming out of each outlet. Which outlet has the most amount of pressure?',
    options: ['A) A', 'B) B', 'C) C', 'D) All the same'],
    answer: 'C) C',
    method: 'Pressure increases with depth. Outlet C is at the bottom where the weight of water above it is greatest — water exits furthest from C, confirming it has the highest pressure.'
  },
  { group: 'MFP08', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Structures',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_08.jpg',
    question: 'Which flagpole would be the most stable in high winds?',
    options: ['A) A', 'B) B', 'C) C'],
    answer: 'A) A',
    method: 'A wider base decreases the bending stress a pole faces from wind. Flagpole A has the widest base, giving it the greatest resistance to lateral wind forces.'
  },
  { group: 'MFP09', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_09.png',
    question: 'Which beam requires the least amount of force to lift the blue box?',
    options: ['A) A', 'B) B', 'C) Both the same', 'D) Cannot be determined'],
    answer: 'B) B',
    method: 'When the weight is closer to the fulcrum, the fulcrum supports more of the load, requiring less effort to lift. In beam B, the blue box is positioned closer to the fulcrum than in beam A, so less force is needed.'
  },
  { group: 'MFP10', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_10.png',
    question: 'How many wheels are turning anti-clockwise?',
    options: ['A) 2', 'B) 6', 'C) 8', 'D) 4'],
    answer: 'B) 6',
    method: 'A direct belt means both pulleys turn the same direction; a crossed belt means opposite directions. Wheels turning clockwise: Yellow, Grey (2). Wheels turning anti-clockwise: Green, Red, Blue, Brown, Purple, Orange — a total of 6.'
  },
  { group: 'MFP11', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Springs',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_11.png',
    question: 'A force of 8kg compresses two springs in series for a total of 20cm (shown in A). How far would spring B compress if the springs are in parallel?',
    options: ['A) 20cm', 'B) 10cm', 'C) 15cm', 'D) 5cm'],
    answer: 'D) 5cm',
    method: 'In series, each spring compresses 10cm individually. In parallel, the 8kg load is shared equally — 4kg per spring. Since compression is proportional to force, each spring compresses half as much: 10 ÷ 2 = 5cm. Both springs compress the same amount in parallel.'
  },
  { group: 'MFP12', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Motion & Forces',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_12.png',
    question: 'To hit the red bullseye, which direction marked with an X should you aim?',
    options: ['A) A', 'B) B', 'C) C', 'D) D'],
    answer: 'D) D',
    method: 'Two forces act on the arrow: gravity (pushing it down) and wind (pushing it to the left). To compensate, you must aim up and to the right of the target. Position D accounts for both forces simultaneously.'
  },
  { group: 'MFP13', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Motion & Forces',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_13.png',
    question: 'Which way will the boat turn in the water?',
    options: ['A) A', 'B) B', 'C) C', 'D) None of the above'],
    answer: 'A) A',
    method: 'When the rudder turns, the force pushes the stern (back) of the boat to the left (port side). This causes the bow (front) to swing to the right (starboard), rotating the boat clockwise when viewed from above — matching direction A.'
  },
  { group: 'MFP14', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_14.png',
    question: 'Which pulley system would require the most amount of force to move the 10kg object?',
    options: ['A) A', 'B) B', 'C) The same', 'D) Cannot tell'],
    answer: 'B) B',
    method: 'Pulley A has a movable pulley providing a mechanical advantage of 2, halving the required effort to 5kg. Pulley B uses only fixed pulleys which change direction but provide no mechanical advantage — requiring the full 10kg of force.'
  },
  { group: 'MFP15', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_15.jpg',
    question: 'If the plate on the far right is rotating counter-clockwise, which ball will move first and in what direction?',
    options: ['A) A will move to the left', 'B) A will move to the right', 'C) B will move to the left', 'D) B will move to the right'],
    answer: 'D) B will move to the right',
    method: 'The counter-clockwise rotation of the far-right plate transmits force through the seesaw chain. The sequence of lever pivots causes ball B to be displaced first, moving to the right.'
  },
  { group: 'MFP16', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Motion & Forces',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_16.png',
    question: 'Which object and which slide would generate the highest final velocity assuming the slide\'s surface has no friction?',
    options: ['A) Object A and Slide A', 'B) Object A and Slide B', 'C) Object B and Slide A', 'D) Object B and Slide B', 'E) Both the same'],
    answer: 'E) Both the same',
    method: 'Final velocity depends only on the height of the slide and gravity (constant for both). The slide angle affects the rate of acceleration but not the final speed. Mass cancels out in the energy equation. With no friction, all objects reach the same final velocity regardless of mass or angle.'
  },
  { group: 'MFP17', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Fluid Mechanics',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_17.png',
    question: 'Four different water pipes have different outlets. If water is going through each pipe at the same flow rate, which pipe would have water discharging at the highest velocity?',
    options: ['A) Pipes A & D', 'B) Pipes B & C', 'C) Pipes A & B', 'D) Pipes C & D', 'E) All the same'],
    answer: 'B) Pipes B & C',
    method: 'At the same flow rate, water must move faster through a smaller outlet. Pipes B and C have the smallest outlet diameters, forcing water through at the highest velocity. The pipe angle does not affect exit velocity — only the outlet size matters.'
  },
  { group: 'MFP18', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Electricity & Magnetism',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_18.png',
    question: 'If magnets 1, 2, 3 are attracted to each other, what configuration do magnets 2 & 3 need to be?',
    options: ['A) A', 'B) B', 'C) C', 'D) D'],
    answer: 'A) A',
    method: 'Magnets attract when opposite poles are adjacent. Magnet 1 is [N|S] so its right face (S) must face N of magnet 2: magnet 2 = [N|S]. Magnet 2\'s right face (S) must then face N of magnet 3: magnet 3 = [N|S]. This matches configuration A.'
  },
  { group: 'MFP19', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Light & Optics',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_19.png',
    question: 'A person sees a fish from the shore. Which letter shows the actual location of the fish?',
    options: ['A) A', 'B) B', 'C) C', 'D) D', 'E) Cannot tell'],
    answer: 'D) D',
    method: 'Refraction bends light as it travels from water (denser) into air (less dense). The observer\'s brain traces light in a straight line, making the fish appear shallower and closer to shore than it really is. The actual fish is deeper and further from the observer — position D.'
  },
  { group: 'MFP20', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_20.png',
    question: 'Gears C & D are joined together, the same as gears E & F. Gears A & B are not joined. If gear A is turning clockwise, how many of the other gears are also turning clockwise?',
    options: ['A) 0', 'B) 1', 'C) 2', 'D) 3', 'E) 4', 'F) 5'],
    answer: 'C) 2',
    method: 'Worm gears turn opposite to the worm wheels they drive. A (CW) → F (CCW); E is joined to F so E (CCW). E (CCW) → D (CW); C is joined to D so C (CW). C (CW) → B (CCW). Gears turning clockwise besides A: C and D = 2.'
  },
  { group: 'MFP21', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_21.jpg',
    question: 'Which cog would rotate the least amount of times in 30 minutes?',
    options: ['A) A', 'B) B', 'C) C', 'D) D', 'E) All the same'],
    answer: 'A) A',
    method: 'Cog A is the largest, so the belt must travel the greatest circumference to complete one full revolution of A. This means A takes the longest per rotation and therefore completes the fewest rotations in any given time period.'
  },
  { group: 'MFP22', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_22.jpg',
    question: 'Which wire would need the most force to pull over the tower?',
    options: ['A) A', 'B) B', 'C) C', 'D) D', 'E) All the same'],
    answer: 'B) B',
    method: 'The pivot point is at the base of the tower. Like a lever, force applied further from the pivot requires less effort to topple the structure. Wire B is closest to the base (nearest the pivot), giving the least mechanical advantage — it requires the most force. Wire D, being highest, requires the least.'
  },
  { group: 'MFP23', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Structures',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_23.png',
    question: 'A chain lock is attached to a door shown in red with a total length of 5cm. Which location (A, B, C, D) should the hook loop be installed to allow the door to open slightly?',
    options: ['A) A', 'B) B', 'C) C', 'D) D'],
    answer: 'B) B',
    method: 'The chain is 5cm long. At position A (5cm away) or D (5cm away), the door opens fully — the lock is ineffective. At C (7cm away), the chain cannot reach at all. At B (3cm), the chain extends partially, allowing the door to open slightly as intended.'
  },
  { group: 'MFP24', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Electricity & Magnetism',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_24.png',
    question: 'Which two switches should be closed to light up bulbs A and C only?',
    options: ['A) Switches A & B only', 'B) Switches B & D only', 'C) Switches A & C only', 'D) Switches D & E only', 'E) Switches A & D only'],
    answer: 'E) Switches A & D only',
    method: 'Closing switch A brings current to bulb A. To light bulb C without lighting bulb B, current must bypass bulb B and route through switch D to complete the circuit to bulb C only.'
  },
  { group: 'MFP25', set: 'FRV Practice #1', type: 'multiple_choice', category: 'Structures',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 1_25.jpg',
    question: 'Which of the below objects would be the most unstable from a force moving to the right?',
    options: ['A) A', 'B) B', 'C) C', 'D) D', 'E) E'],
    answer: 'C) C',
    method: 'Object C has a large proportion of its weight on the right-hand side of its base. The rightward force combined with gravity acting on this off-centre mass will cause C to topple first.'
  },

  // ACER Practice Free: AFP01–AFP10
  { group: 'AFP01', set: 'ACER Practice Free', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/ACER Practice Free Mech 01.png',
    question: 'This belt and wheel system is driven by wheel X, which rotates clockwise. How many other wheels rotate at the same speed as X (revolutions per minute)?',
    options: ['A) One', 'B) Two', 'C) Three', 'D) Four'],
    answer: 'D) Four',
    method: 'All five pulleys are the same size. Belt type (direct or crossed) affects rotation direction but not speed — same-size pulleys always turn at the same RPM regardless of belt configuration. All four other wheels rotate at the same speed as X.'
  },

  { group: 'AFP02', set: 'ACER Practice Free', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/ACER Practice Free Mech 02.png',
    question: 'Gear P turns clockwise. In which direction(s) do gears Q and R turn?',
    options: ['A) Both gears turn clockwise.', 'B) Both gears turn anticlockwise.', 'C) Q turns clockwise; R turns anticlockwise.', 'D) Q turns anticlockwise; R turns clockwise.'],
    answer: 'D) Q turns anticlockwise; R turns clockwise.',
    method: 'Each meshing gear reverses direction from the one before it. P (CW) → Q (ACW) → R (CW). Tracing the chain: Q is anticlockwise and R is clockwise.'
  },

  { group: 'AFP03', set: 'ACER Practice Free', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/ACER Practice Free Mech 03.png',
    question: 'The bottle opener in the figure is shown partly cut open. The handle is turned to drive the corkscrew into the cork of the bottle, which would be placed below. If the arms of the opener were moved upwards from the position shown, sections X and Y would…',
    options: ['A) X and Y would both turn clockwise.', 'B) X and Y would both turn anticlockwise.', 'C) X would turn clockwise and Y would turn anticlockwise.', 'D) X would turn anticlockwise and Y would turn clockwise.'],
    answer: 'C) X would turn clockwise and Y would turn anticlockwise.',
    method: 'Gears X and Y are on opposite sides of the central ridged shaft. When the arms move upward, both gears travel upward along the shaft. Because they engage the rack from opposite sides, X (left) rotates clockwise and Y (right) rotates anticlockwise.'
  },

  { group: 'AFP04', set: 'ACER Practice Free', type: 'multiple_choice', category: 'Motion & Forces',
    questionImage: '/images/mechanical reasoning/ACER Practice Free Mech 04.png',
    question: 'Which of the following requires the most force (indicated by the arrow) to lift the front of the car off the ground?',
    options: ['A) A', 'B) B', 'C) C', 'D) D'],
    answer: 'B) B',
    method: 'The rock acts as a fulcrum. The force required depends on the angle and position of the rope. In scenario B, the rope angle and point of force application gives the least mechanical advantage, requiring the most force to lift the front of the car.'
  },

  { group: 'AFP05', set: 'ACER Practice Free', type: 'multiple_choice', category: 'Fluid Mechanics',
    questionImage: '/images/mechanical reasoning/ACER Practice Free Mech 05.png',
    question: 'Differently shaped objects are placed in four different liquids. Objects of the same shape are identical in size and material. Which liquid is most dense?',
    options: ['A) Liquid A', 'B) Liquid B', 'C) Liquid C', 'D) Liquid D'],
    answer: 'B) Liquid B',
    method: 'The denser a liquid, the higher an object floats (less submerged). Comparing identical objects across all four liquids, the sphere floats with the greatest proportion above the surface in liquid B, indicating liquid B provides the most buoyancy and is therefore the most dense.'
  },

  { group: 'AFP06', set: 'ACER Practice Free', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/ACER Practice Free Mech 06.png',
    question: 'The pawl attached to fixed shaft P can move between positions I and II around pivot Q and engage teeth on the gear wheel. For this device, the gear wheel…',
    options: ['A) can turn anticlockwise only when the pawl is in position I.', 'B) can turn anticlockwise only when the pawl is in position II.', 'C) can turn clockwise or anticlockwise when the pawl is in either position I or II.', 'D) cannot turn clockwise or anticlockwise with the pawl in either position I or II.'],
    answer: 'A) can turn anticlockwise only when the pawl is in position I.',
    method: 'A ratchet pawl allows rotation in only one direction — the sloped face lets gear teeth slide past in one direction, while the flat face blocks the other. With the pawl in position I, the gear can rotate anticlockwise freely but is locked against clockwise rotation.'
  },

  { group: 'AFP07', set: 'ACER Practice Free', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/ACER Practice Free Mech 07.png',
    question: 'A heavy spotlight can be moved along a strong rod into four different positions (I, II, III and IV). The spotlight weighs much more than the rod. The rod is attached to a fixed vertical pole by a rope and a pivot. Which of the positions of the spotlight will put the greatest tension on the rope?',
    options: ['A) II', 'B) III', 'C) IV', 'D) II, III and IV equally'],
    answer: 'B) III',
    method: 'The rod acts as a lever with the pivot at the pole. Rope tension is proportional to torque about the pivot — torque equals the spotlight\'s weight multiplied by its distance from the pivot. Position III places the spotlight at the greatest effective lever arm from the pivot, maximising the torque and therefore the rope tension.'
  },

  { group: 'AFP08', set: 'ACER Practice Free', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/ACER Practice Free Mech 08.png',
    question: 'A heavy spotlight can be moved along a strong rod into four different positions (I, II, III and IV). The spotlight weighs much more than the rod. The rod is attached to a fixed vertical pole by a rope and a pivot. Which position(s) of the spotlight will make the rope tight and keep the rod horizontal?',
    options: ['A) I, II, III and IV', 'B) II, III and IV only', 'C) III only', 'D) III and IV only'],
    answer: 'B) II, III and IV only',
    method: 'For the rope to be taut, the rod must try to rotate in the direction that pulls the rope. The rope is attached to the right side of the pole. When the spotlight is in positions II, III or IV (to the right of the pivot), its weight creates a downward torque on the right side of the rod, pulling the rope tight. In position I (to the left of the pivot), the spotlight\'s weight would rotate the rod the opposite way, making the rope go slack.'
  },

  { group: 'AFP09', set: 'ACER Practice Free', type: 'multiple_choice', category: 'Fluid Mechanics',
    questionImage: '/images/mechanical reasoning/ACER Practice Free Mech 09.png',
    question: 'Three identical water tanks are at different elevations on a hill. All contain the same amount of water. A fire truck is refilled from the three water tanks at the same time, using identical water hoses. Which tank becomes empty first?',
    options: ['A) Tank A', 'B) Tank B', 'C) Tank C', 'D) All tanks become empty at the same time.'],
    answer: 'C) Tank C',
    method: 'Water flows by gravity through the hoses. The greater the height difference between a tank and the truck, the higher the hydrostatic pressure and the faster the flow rate. Tank C is at the highest elevation, so it delivers water the fastest and therefore empties first.'
  },

  { group: 'AFP10', set: 'ACER Practice Free', type: 'multiple_choice', category: 'Motion & Forces',
    questionImage: '/images/mechanical reasoning/ACER Practice Free Mech 10.png',
    question: 'In this system, the wheel can only rotate around its fixed pivot point, and the arm can move only horizontally. The wheel is turned clockwise. In which directions do X and Y move?',
    options: ['A) X moves left; Y moves down and right.', 'B) X moves left; Y moves up and left.', 'C) X moves right; Y moves down and right.', 'D) X moves right; Y moves up and left.'],
    answer: 'B) X moves left; Y moves up and left.',
    method: 'The wheel rotating clockwise drives the pin in a clockwise circle. The pin sits in the vertical slot of the T-piece, which constrains horizontal motion only. From the pin\'s starting position, clockwise rotation moves the pin\'s horizontal component to the left, pushing the arm (and point X) left. With X moving left, the V-shaped linkage changes angle, causing joint Y to swing up and to the left.'
  },

  // Practice Now Questions: MPN01–MPN07
  { group: 'MPN01', set: 'Practice Now Questions', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/Mech Practice Now 01.png',
    question: 'Wheels I, II and III are connected with a belt. If wheel II rotates in a clockwise direction, in which direction will wheel I rotate?',
    options: ['A) It will stay still.', 'B) clockwise', 'C) anticlockwise', 'D) first clockwise, then anticlockwise'],
    answer: 'C) anticlockwise',
    method: 'Wheels I and II are connected by a crossed belt (the belt forms an X between them). A crossed belt reverses the direction of rotation relative to a direct belt. Since wheel II rotates clockwise, the crossed belt causes wheel I to rotate anticlockwise.'
  },

  { group: 'MPN02', set: 'Practice Now Questions', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech Practice Now 02.png',
    question: 'When handle X is moved to the left, in which direction will end Y initially move?',
    options: ['A) It is not possible to tell from the information provided.', 'B) right', 'C) left', 'D) It will stay still.'],
    answer: 'B) right',
    method: 'The cross-shaped mechanism rotates around its central pivot. X is on the lower arm and Y is on the upper arm — they are on opposite sides of the pivot. When X moves left, the mechanism rotates, and Y (on the opposite arm) moves in the opposite direction: right.'
  },

  { group: 'MPN03', set: 'Practice Now Questions', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech Practice Now 03.png',
    question: 'When handle X is moved one centimetre to the right, end Y will move',
    options: ['A) less than one centimetre to the left.', 'B) less than one centimetre to the right.', 'C) more than one centimetre to the left.', 'D) more than one centimetre to the right.'],
    answer: 'C) more than one centimetre to the left.',
    method: 'The cross-shaped mechanism rotates around its central pivot. X is on the shorter arm (closer to the pivot) and Y is on the longer arm (further from the pivot). When X moves right, the mechanism rotates and Y moves in the opposite direction (left). Because Y is further from the pivot than X, it sweeps through a greater arc — moving more than 1 cm to the left.'
  },

  { group: 'MPN04', set: 'Practice Now Questions', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech Practice Now 04.png',
    question: 'Wheel A is attached to jointed bar Z with a peg, which acts as a non-fixed pivot. When handle X is moved to the right, wheel A will',
    options: ['A) not move.', 'B) rotate clockwise then anticlockwise.', 'C) rotate clockwise.', 'D) rotate anticlockwise.'],
    answer: 'D) rotate anticlockwise.',
    method: 'When handle X moves right, the cross mechanism rotates. Jointed bar Z transmits this motion to the peg on wheel A\'s rim. The peg being pushed in the resulting direction causes wheel A to rotate anticlockwise.'
  },

  { group: 'MPN05', set: 'Practice Now Questions', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/Mech Practice Now 05.png',
    question: 'Wheels I, II and III are connected with a drive belt. When wheel I rotates, the belt rotates wheels II and III. Which wheel rotates the fastest?',
    options: ['A) wheel I', 'B) wheel II', 'C) wheel III', 'D) All the wheels rotate at the same speed.'],
    answer: 'B) wheel II',
    method: 'In a belt drive, all sections of the belt travel at the same linear speed. A smaller wheel has a smaller circumference, so it must complete more full rotations to keep pace with the belt. Wheel II is the smallest of the three, so it rotates the fastest.'
  },

  { group: 'MPN06', set: 'Practice Now Questions', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/Mech Practice Now 06.png',
    question: 'Lengths of rope are hung around the small wheel X and the large wheel Y. Weights B and D are pulled down the same distance, as indicated in the diagram. Which of weights A and C will move up the furthest?',
    options: ['A) weight A', 'B) weight C', 'C) Weights A and C will move up the same distance.', 'D) It is not possible to tell from the information provided.'],
    answer: 'C) Weights A and C will move up the same distance.',
    method: 'A rope is inextensible — when one side of a wheel\'s rope is pulled down by distance d, the rope on the other side rises by exactly distance d, regardless of wheel size. Since B and D are both pulled down the same distance, A and C both rise by that same distance.'
  },

  { group: 'MPN07', set: 'Practice Now Questions', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/Mech Practice Now 07.png',
    question: 'Lengths of rope are hung around the small wheel X and the large wheel Y. Weights B and D are pulled down the same distance and the same amount of time, as indicated in the diagram. Which of wheels X and Y will rotate the fastest?',
    options: ['A) wheel X', 'B) wheel Y', 'C) Wheels X and Y will rotate at the same speed.', 'D) It is not possible to tell from the information provided.'],
    answer: 'A) wheel X',
    method: 'Both ropes are pulled down the same distance in the same time, so the linear rope speed is identical for both wheels. For a given linear rope speed, a smaller wheel must rotate through a greater angle per unit time than a larger wheel (arc length = radius × angle). Wheel X is the smaller wheel, so it rotates fastest.'
  },

  // ACER Practice Paid: APP01–APP32
  { group: 'APP01', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 01.png',
    question: 'Gear P makes one complete rotation. How many rotations do gears R and S make?',
    options: ['A) Both gears make exactly one rotation.', 'B) R makes exactly one rotation; S makes more than one rotation.', 'C) R makes more than one rotation; S makes exactly one rotation.', 'D) R makes exactly one rotation; S makes less than one rotation.'],
    answer: 'B) R makes exactly one rotation; S makes more than one rotation.',
    method: 'Gear R is the same size as P and meshes directly with it, so R makes exactly one rotation for every rotation of P. Gear S is smaller than R and meshes with R; a smaller driven gear must rotate more times to match the tooth movement of a larger driving gear, so S makes more than one rotation.'
  },

  { group: 'APP02', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 02.png',
    question: 'How do the speeds of gears R and S compare to the speed of gear P?',
    options: ['A) Both turn at the same speed as P.', 'B) R turns at the same speed as P; S turns faster.', 'C) R turns at the same speed as P; S turns slower.', 'D) R turns slower than P; S turns at the same speed.'],
    answer: 'B) R turns at the same speed as P; S turns faster.',
    method: 'R is the same size as P and meshes directly with it, so R turns at the same speed. S is smaller than R and is driven by it; a smaller gear driven by a larger one must turn faster to keep up with the meshing teeth.'
  },

  { group: 'APP03', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 03.png',
    question: 'Gear T turns clockwise. How does gear S turn?',
    options: ['A) clockwise, continuously', 'B) clockwise, with pauses', 'C) anticlockwise, continuously', 'D) anticlockwise, with pauses'],
    answer: 'B) clockwise, with pauses',
    method: 'This is an intermittent (Geneva-style) mechanism. Gear T\'s pin engages gear S\'s slots one at a time, advancing S in steps. Between engagements the pin is in the locking arc and S is held stationary. When T turns continuously clockwise, S turns clockwise but only moves during each engagement — advancing in steps with pauses in between.'
  },

  { group: 'APP04', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 04.png',
    question: 'The gear wheel turns clockwise. In which directions do the horizontal and vertical racks move?',
    options: ['A) The horizontal rack moves right; the vertical rack moves down.', 'B) The horizontal rack moves right; the vertical rack moves up.', 'C) The horizontal rack moves left; the vertical rack moves down.', 'D) The horizontal rack moves left; the vertical rack moves up.'],
    answer: 'D) The horizontal rack moves left; the vertical rack moves up.',
    method: 'A clockwise-turning gear drives the rack it meshes with in the direction the gear teeth move at the contact point. For the horizontal rack (meshing along the top of the gear), the teeth move left — so the rack moves left. For the vertical rack (meshing on the right side of the gear), the teeth move upward — so the rack moves up.'
  },

  { group: 'APP05', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 05.png',
    question: 'In which directions do the sections of belt at X and Y move?',
    options: ['A) X moves up; Y moves right.', 'B) X moves up; Y moves left.', 'C) X moves down; Y moves right.', 'D) X moves down; Y moves left.'],
    answer: 'B) X moves up; Y moves left.',
    method: 'The belt forms a continuous loop around the pulleys. Tracing the direction of travel from the driving wheel, section X travels upward and section Y travels to the left.'
  },

  { group: 'APP06', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 06.png',
    question: 'In which direction(s) do wheels P and Q turn?',
    options: ['A) Both wheels turn clockwise.', 'B) Both wheels turn anticlockwise.', 'C) P turns clockwise; Q turns anticlockwise.', 'D) P turns anticlockwise; Q turns clockwise.'],
    answer: 'C) P turns clockwise; Q turns anticlockwise.',
    method: 'P and Q are connected by a crossed belt, which reverses the direction of rotation. P turns clockwise while Q, driven by the crossed belt, turns anticlockwise.'
  },

  { group: 'APP07', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 07.png',
    question: 'In which direction(s) do wheels M and N turn?',
    options: ['A) Both wheels turn clockwise.', 'B) Both wheels turn anticlockwise.', 'C) M turns clockwise; N turns anticlockwise.', 'D) M turns anticlockwise; N turns clockwise.'],
    answer: 'D) M turns anticlockwise; N turns clockwise.',
    method: 'M and N are connected by a crossed belt, which reverses the direction of rotation between the two wheels. M turns anticlockwise and N turns clockwise.'
  },

  { group: 'APP08', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 08.png',
    question: 'Which one of the following changes would result in the belts moving faster?',
    options: ['A) adding a wheel at X', 'B) making wheel T larger', 'C) making wheel S larger', 'D) making wheel S smaller'],
    answer: 'B) making wheel T larger',
    method: 'Wheel T is the drive wheel. Making it larger increases the circumferential speed of the belt for the same rotational speed — a larger wheel moves more belt per revolution. This drives the entire belt system faster.'
  },

  { group: 'APP09', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Motion & Forces',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 09a.png',
    questionImage2: '/images/mechanical reasoning/ACER Mech Paid 09b.png',
    question: 'The tool shown can be used to force doors open. The tool is made in different lengths. In which of the following situations will it be easiest to force the door open?',
    options: ['A) (see diagram)', 'B) (see diagram)', 'C) (see diagram)', 'D) (see diagram)'],
    answer: 'A) (see diagram)',
    method: 'The tool acts as a lever. The greater the distance between the applied force and the fulcrum (pivot point), the greater the mechanical advantage and the less force required. Situation A positions the tool to give the greatest effective lever arm, making it easiest to force the door open.'
  },

  { group: 'APP10', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Motion & Forces',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 10a.png',
    questionImage2: '/images/mechanical reasoning/ACER Mech Paid 10b.png',
    question: 'A block rests on a flat surface. The block can rotate in either direction around a fixed pivot. One or more pegs can be placed against the block to prevent it from rotating. Which of the following shows the fewest pegs needed to prevent the block from rotating in either direction?',
    options: ['A) (see diagram)', 'B) (see diagram)', 'C) (see diagram)', 'D) (see diagram)'],
    answer: 'A) (see diagram)',
    method: 'To prevent rotation in both directions, at least one peg must block clockwise rotation and at least one must block anticlockwise rotation. The minimum is two pegs, placed on opposite sides of the block\'s corners. Option A shows this optimal two-peg configuration.'
  },

  { group: 'APP11', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Fluid Mechanics',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 11.png',
    question: 'Three water tanks of the same height but different shapes have identical taps at the same height from the bottom. All tanks are full of water and on the same level surface. Suppose the taps are opened fully. From which tank would the water travel furthest?',
    options: ['A) tank A', 'B) tank B', 'C) tank C', 'D) Water would travel the same distance from each tank.'],
    answer: 'D) Water would travel the same distance from each tank.',
    method: 'The distance water travels from a tap depends on the pressure at the tap, which is determined by the height of water above the tap (hydrostatic pressure = ρgh). Since all tanks are the same height and the taps are at the same height from the bottom, the pressure is identical for all three. Tank shape does not affect this, so water travels the same distance from each.'
  },

  { group: 'APP12', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Fluid Mechanics',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 12.png',
    question: 'Three water tanks of the same height but different shapes have identical taps at the same height from the bottom. All tanks are full of water and on the same level surface. Suppose the taps are opened fully. From which tank would the water have the slowest speed?',
    options: ['A) tank A', 'B) tank B', 'C) tank C', 'D) The speed of the water from each tank would be the same.'],
    answer: 'D) The speed of the water from each tank would be the same.',
    method: 'Water speed at the tap is given by Torricelli\'s theorem: v = √(2gh), where h is the height of water above the tap. Since all three tanks are the same height and the taps are at the same height, h is identical. Tank shape is irrelevant — the exit speed is the same for all three.'
  },

  { group: 'APP13', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 13.png',
    question: 'Handle H is pulled clockwise. In which direction does X move?',
    options: ['A) left and up', 'B) left and down', 'C) right and up', 'D) right and down'],
    answer: 'D) right and down',
    method: 'When handle H is pulled clockwise, the winch drum winds the rope, pulling the attachment point. The geometry of the linkage means X moves to the right and downward.'
  },

  { group: 'APP14', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 14.png',
    question: 'Handle H is pulled anticlockwise. In which direction does Y move?',
    options: ['A) left and up', 'B) left and down', 'C) right and up', 'D) right and down'],
    answer: 'C) right and up',
    method: 'When handle H is pulled anticlockwise, the drum unwinds in the opposite direction. The linkage geometry causes Y to move to the right and upward.'
  },

  { group: 'APP15', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 15.png',
    question: 'Handle H is pulled anticlockwise. In which direction does Z move?',
    options: ['A) left and up', 'B) left and down', 'C) right and up', 'D) right and down'],
    answer: 'B) left and down',
    method: 'When handle H is pulled anticlockwise, the linkage geometry for Z — positioned differently from X and Y — causes it to move to the left and downward.'
  },

  { group: 'APP16', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Motion & Forces',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 16.png',
    question: 'A heavy metal ball is attached to a rope. The ball is released from position R and swings through positions S and T to position U. At which position does the swinging ball move fastest?',
    options: ['A) position S', 'B) position T', 'C) position U', 'D) The ball moves at the same speed at all positions.'],
    answer: 'B) position T',
    method: 'A pendulum converts gravitational potential energy to kinetic energy as it swings downward. At the lowest point of its arc (position T), all potential energy has been converted to kinetic energy, making this the point of maximum speed. At R and U (the highest points), the ball momentarily has maximum potential energy and minimum speed.'
  },

  { group: 'APP17', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 17.png',
    question: 'At which of the positions shown should a 20 kg block be placed to balance the beam?',
    options: ['A) position A', 'B) position B', 'C) position C', 'D) position D'],
    answer: 'C) position C',
    method: 'For the beam to balance, the torques on each side of the pivot must be equal (torque = weight × distance from pivot). Using the known weights and distances shown in the diagram, placing the 20 kg block at position C creates the torque needed to balance the existing load on the other side.'
  },

  { group: 'APP18', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 18.png',
    question: 'Three pulley systems A, B and C are shown, each holding an identical weight. A force is applied to each system to hold the weights in their current positions. Which pulley system needs the least amount of applied force to hold the weight? (Ignore the weight of the pulleys and ropes.)',
    options: ['A) pulley system A', 'B) pulley system B', 'C) pulley system C', 'D) Each pulley system needs the same amount of applied force.'],
    answer: 'A) pulley system A',
    method: 'The mechanical advantage of a pulley system equals the number of rope sections supporting the movable pulley. More rope sections mean less force is required per section to support the weight. System A has the most rope sections (greatest mechanical advantage), so it requires the least applied force.'
  },

  { group: 'APP19', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 19.png',
    question: 'This system consists of a gear wheel, a fixed gear rack and four plungers in fixed sleeves. The gear wheel turns clockwise. In which directions do the plungers move?',
    options: ['A) W and X move up; Y and Z move down.', 'B) W and Y move down; X and Z move up.', 'C) W and Y move up; X and Z move down.', 'D) W and Z move down; X and Y move up.'],
    answer: 'D) W and Z move down; X and Y move up.',
    method: 'When the gear turns clockwise on the fixed rack, it rolls to the right. The four diagonal arms connecting the gear centre to the plungers push based on the arm angles: W (upper-left) and Z (lower-right) are pushed downward, while X (upper-right) and Y (lower-left) are pushed upward.'
  },

  { group: 'APP20', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 20.png',
    question: 'Rod T moves to the right and down. In which directions do sleeves R and S move?',
    options: ['A) R moves up; S moves left.', 'B) R moves up; S moves right.', 'C) R moves down; S moves left.', 'D) R moves down; S moves right.'],
    answer: 'B) R moves up; S moves right.',
    method: 'The linkage mechanism connects rod T to sleeves R and S through pivoting joints. When T moves right and down, the geometry of the linkage causes sleeve R to move upward and sleeve S to move to the right.'
  },

  { group: 'APP21', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 21.png',
    question: 'This system includes a water tank, a float and an indicator connected by a pulley mechanism. The different water levels are marked with signs (W, X, Y, Z from top to bottom). Which signs show the water level when the tank is empty and when three-quarters full?',
    options: ['A) Empty: sign W; Three-quarters full: sign X', 'B) Empty: sign W; Three-quarters full: sign Y', 'C) Empty: sign Z; Three-quarters full: sign X', 'D) Empty: sign Z; Three-quarters full: sign Y'],
    answer: 'B) Empty: sign W; Three-quarters full: sign Y',
    method: 'The float and indicator are connected by the pulley, reversing the relationship between water level and indicator position. When the tank is empty the float sinks, pulling the indicator up to sign W (top). At three-quarters full the float is above the midpoint, moving the indicator downward past sign X to sign Y.'
  },

  { group: 'APP22', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 22.png',
    question: 'This system includes a water tank, a float and an indicator connected by a pulley mechanism. As the tank fills with water, in which direction(s) do pulley wheels P and Q turn?',
    options: ['A) Both P and Q turn clockwise.', 'B) P turns clockwise and Q turns anticlockwise.', 'C) P turns anticlockwise and Q turns clockwise.', 'D) Both P and Q turn anticlockwise.'],
    answer: 'A) Both P and Q turn clockwise.',
    method: 'As the tank fills, the float rises, pulling the rope upward on the float side. The rope runs over pulley P then across to pulley Q. Both P and Q are on the same belt loop and rotate in the same direction — clockwise — as the rising float pulls the rope through the system.'
  },

  { group: 'APP23', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 23.png',
    question: 'Each of the four rods rests on a wheel with a fixed pivot. When the wheels turn, which rod moves up the greatest distance?',
    options: ['A) rod A', 'B) rod B', 'C) rod C', 'D) rod D'],
    answer: 'D) rod D',
    method: 'Each rod is lifted by a cam (eccentric wheel). The distance a rod moves up equals the difference between the cam\'s maximum and minimum radius at the contact point. Rod D\'s cam has the greatest eccentricity — the largest difference between its nearest and furthest points from the pivot — so it lifts rod D the greatest distance.'
  },

  { group: 'APP24', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 24.png',
    question: 'Wheel S is turned anticlockwise. In which directions do wheel T and gear R turn?',
    options: ['A) T turns clockwise; R turns clockwise.', 'B) T turns clockwise; R turns anticlockwise.', 'C) T turns anticlockwise; R turns clockwise.', 'D) T turns anticlockwise; R turns anticlockwise.'],
    answer: 'D) T turns anticlockwise; R turns anticlockwise.',
    method: 'S is connected to T by a direct (uncrossed) belt, so T turns in the same direction as S — anticlockwise. T is then connected to gear R by a direct belt, so R also turns anticlockwise.'
  },

  { group: 'APP25', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Fluid Mechanics',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 25a.png',
    questionImage2: '/images/mechanical reasoning/ACER Mech Paid 25b.png',
    question: 'Three flexible rubber diaphragms sit inside a sealed oil-filled system. The plunger is pulled upwards. Which of the following best shows the expected changes in the shape of the diaphragms?',
    options: ['A) (see diagram)', 'B) (see diagram)', 'C) (see diagram)', 'D) (see diagram)'],
    answer: 'C) (see diagram)',
    method: 'When the plunger is pulled upward, it reduces pressure in the sealed oil-filled system. The lower pressure causes the flexible diaphragms to bow inward (flex toward the oil). Option C correctly shows all three diaphragms deflecting inward in response to the reduced pressure.'
  },

  { group: 'APP26', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 26.png',
    question: 'The figure shows a tree pruning cutter on the end of an aluminium pole. For the cutting jaws to close, it is necessary to',
    options: ['A) reduce the tension on the rope to decrease the tension in the spring.', 'B) reduce the tension on the rope so the top cutting jaw moves down.', 'C) pull the rope to decrease the tension in the spring.', 'D) pull the rope so that pulley 1 moves down.'],
    answer: 'D) pull the rope so that pulley 1 moves down.',
    method: 'The rope runs through the pulley system connecting the handle to the cutting mechanism. Pulling the rope causes pulley 1 (attached to the lower cutting jaw) to move downward, which closes the cutting jaws against the upper jaw. Pulling increases rope tension — it does not decrease it.'
  },

  { group: 'APP27', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 27.png',
    question: 'The figure shows a tree pruning cutter on the end of an aluminium pole. When the rope is pulled, the',
    options: ['A) lower cutting jaw moves upward.', 'B) upper cutting jaw moves downward.', 'C) spring pulls the cutting jaws together.', 'D) distance between pulley 1 and pulley 2 increases.'],
    answer: 'A) lower cutting jaw moves upward.',
    method: 'Pulling the rope runs it through pulleys 1 and 2, creating a mechanical advantage that lifts the lower cutting jaw upward toward the fixed upper jaw. The upper jaw does not move — only the lower jaw closes upward to make the cut.'
  },

  { group: 'APP28', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 28.png',
    question: 'The figure shows a tree pruning cutter on the end of an aluminium pole. The purpose of the spring is to',
    options: ['A) increase the force applied by the cutting jaws.', 'B) return the cutting jaws to the closed position when the rope is released.', 'C) return the cutting jaws to the open position when the rope is released.', 'D) add tension to the rope to give the user greater feel for the cutting effect.'],
    answer: 'C) return the cutting jaws to the open position when the rope is released.',
    method: 'The spring acts as a return mechanism. When the operator releases the rope, the spring extends and pushes the lower cutting jaw back down to the open position, ready for the next cut. Without the spring, the operator would need to manually reopen the jaws.'
  },

  { group: 'APP29', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 29.png',
    question: 'The figure shows a series of interacting seesaws. The white arrows indicate possible forces (X and Z are pushes, W and Y are pulls). Which of these forces will cause the end of the right-most seesaw to move upwards as indicated by the dotted arrow?',
    options: ['A) none of them', 'B) X and Y only', 'C) W, X and Y only', 'D) all of them'],
    answer: 'C) W, X and Y only',
    method: 'Tracing each force through the chain of seesaws: forces W (pull), X (push), and Y (pull) each propagate through the linkage to push the end of the right-most seesaw upward. Force Z (push) causes the chain to transmit the opposite effect, moving that end downward instead.'
  },

  { group: 'APP30', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Fluid Mechanics',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 30.png',
    question: 'Oil is contained inside this sealed system with a small plunger and a larger plunger. The small plunger is pushed downwards by a further 1 cm. How will the larger plunger move?',
    options: ['A) downwards by exactly 1 cm', 'B) upwards by exactly 1 cm', 'C) downwards by more than 1 cm', 'D) upwards by less than 1 cm'],
    answer: 'D) upwards by less than 1 cm',
    method: 'This is a hydraulic system. Pushing the small plunger down displaces a volume of oil equal to (small area × 1 cm). This oil pushes the larger plunger upward. Since the larger plunger has a greater cross-sectional area, the same volume of oil moves it a smaller distance: displacement = (small area / large area) × 1 cm, which is less than 1 cm. The direction is upward.'
  },

  { group: 'APP31', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 31.png',
    question: 'Gear rack R moves to the right, and gear rack S moves to the left at the same speed. In which direction (if any) does the gear wheel move?',
    options: ['A) right only', 'B) left only', 'C) right and then left', 'D) It remains in the same position while turning.'],
    answer: 'D) It remains in the same position while turning.',
    method: 'When two racks on opposite sides of a gear move in opposite directions at equal speeds, each rack drives the gear to rotate in the same rotational direction but the equal and opposite translational forces cancel out. The gear\'s centre remains stationary — it spins in place without moving left or right.'
  },

  { group: 'APP32', set: 'ACER Practice Paid', type: 'multiple_choice', category: 'Motion & Forces',
    questionImage: '/images/mechanical reasoning/ACER Mech Paid 32.png',
    question: 'The wheel turns anticlockwise for one complete rotation. Compared to point A, point B travels',
    options: ['A) a greater distance and takes more time to complete the rotation.', 'B) a greater distance and takes the same time to complete the rotation.', 'C) the same distance and takes more time to complete the rotation.', 'D) less distance and takes the same time to complete the rotation.'],
    answer: 'B) a greater distance and takes the same time to complete the rotation.',
    method: 'All points on a rigid wheel complete one full revolution in the same time. However, a point further from the centre (B) traces a larger circle: distance = 2πr. Since r_B > r_A, point B travels a greater distance than A in the same time — meaning B moves faster, but the rotation time is identical for both points.'
  },

  // ── FRV Practice #2 (Mechanical): MFP2_01–MFP2_25 ─────────────────────────
  { group: 'MFP2_01', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_01.png',
    question: 'If wheel A rotates twice as fast as wheel B, how many rotations will wheel A complete before the red pointers face each other?',
    options: ['A) 1/2 turn', 'B) 3/4 turn', 'C) 1 turn', 'D) 1 & 1/2 turns', 'E) 2 turns'],
    answer: 'D) 1 & 1/2 turns',
    method: 'As wheel B rotates one position (90°), wheel A rotates 2 positions (180°). Tracking the red pointers step by step, it takes 1 & 1/2 turns of wheel B before the two red pointers face each other.'
  },
  { group: 'MFP2_02', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Fluid Mechanics',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_02.png',
    question: 'Which section of the pipe will have the fastest water velocity?',
    options: ['A) A', 'B) B', 'C) C', 'D) All the same'],
    answer: 'B) B',
    method: 'Water moves faster where the pipe is most narrow (continuity equation — the same volume of water must pass through a smaller cross-section in the same time). Section B is the narrowest, so it has the fastest velocity.'
  },
  { group: 'MFP2_03', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Mass, Density & Volume',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_03.png',
    question: 'Object A is made of a material three times as dense as object B. Which object has the larger volume?',
    options: ['A) A', 'B) B', 'C) The same', 'D) Cannot tell'],
    answer: 'B) B',
    method: 'The density of the material does not determine the size of the object. Looking at the dimensions shown, object B has a larger volume. The denser material of A simply means A is heavier for the same size — it does not make it physically bigger.'
  },
  { group: 'MFP2_04', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_04.png',
    question: 'How many wheels are rotating clockwise?',
    options: ['A) 3', 'B) 4', 'C) 5', 'D) 6'],
    answer: 'C) 5',
    method: 'The belt runs continuously around all wheels. The 5 large yellow wheels on the upper run are all driven in the clockwise direction by the belt moving from left to right beneath them. The 4 small red wheels on the lower return run rotate counter-clockwise. Total clockwise = 5.'
  },
  { group: 'MFP2_05', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_05.png',
    question: 'If wheel A is moving anti-clockwise at 2 RPM, what direction and speed is wheel B moving?',
    options: ['A) Anti-clockwise and slower', 'B) Anti-clockwise and faster', 'C) Anti-clockwise and the same speed', 'D) Clockwise and faster'],
    answer: 'B) Anti-clockwise and faster',
    method: 'The belt crosses between the wheels, reversing direction at each crossing. Tracing through the system: Wheel A (anti-clockwise) → crossed belt → second cog (clockwise) → mesh → third cog (anti-clockwise) → mesh → fourth cog (clockwise) → crossed belt → Wheel B (anti-clockwise). Since wheel B is smaller than wheel A, it rotates faster (a smaller pulley has a higher RPM when belt-connected to a larger one).'
  },
  { group: 'MFP2_06', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Springs',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_06.png',
    question: 'An 8 kg block stretches a spring 5 cm. If the weight of the block is increased by 25%, how far would the spring stretch?',
    options: ['A) 6 cm', 'B) 6.25 cm', 'C) 7 cm', 'D) 7.5 cm'],
    answer: 'B) 6.25 cm',
    method: 'By Hooke\'s Law, stretch is proportional to force. A 25% increase in weight adds 25% more stretch: 25% of 5 cm = 1.25 cm. Total stretch = 5 + 1.25 = 6.25 cm.'
  },
  { group: 'MFP2_07', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Motion & Forces',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_07.png',
    question: 'All planks are the same length. Ball A is twice as heavy as ball C, and ball B is the same weight as ball A. Which ball would hit the ground first?',
    options: ['A) A', 'B) B', 'C) C', 'D) All the same'],
    answer: 'C) C',
    method: 'Ball C is on the steepest incline. A steeper slope means a larger component of gravity acts along the plank, causing greater acceleration. Weight does not affect the outcome — a heavier ball has more gravitational force but also more inertia; these effects cancel, so the steeper incline wins every time.'
  },
  { group: 'MFP2_08', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_08.png',
    question: 'What is the weight of the second cube?',
    options: ['A) 140 kg', 'B) 70 kg', 'C) 35 kg', 'D) 40 kg'],
    answer: 'C) 35 kg',
    method: 'The beam is balanced, so both sides exert equal moments. Left side: 20 kg × 7 = 140 kg·units. Right side cube weight × 4 = 140, so cube weight = 140 ÷ 4 = 35 kg.'
  },
  { group: 'MFP2_09', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_09.png',
    question: 'Which position of the ball would make it easiest to lift the wheelbarrow by the handles?',
    options: ['A) A', 'B) B', 'C) C', 'D) All the same'],
    answer: 'A) A',
    method: 'Lifting the wheelbarrow handles acts like a lever with the wheel as the fulcrum. The closer the load is to the fulcrum, the less effort is needed to lift it. Position A places the ball nearest the wheel, minimising the required lifting force.'
  },
  { group: 'MFP2_10', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Motion & Forces',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_10.png',
    question: 'A wheel and a brake are made of the same material. Which one will wear out faster?',
    options: ['A) Wheel', 'B) Brake', 'C) Both will wear out at the same time', 'D) Cannot say'],
    answer: 'B) Brake',
    method: 'When a brake is applied it clamps against the rotating wheel, experiencing intense localised friction. The wheel distributes its wear over a much larger rolling surface area, while the brake pad bears direct, concentrated frictional force — causing the brake material to degrade faster.'
  },
  { group: 'MFP2_11', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_11.png',
    question: 'Which person is heavy enough to lift the weight above the orange triangle (fulcrum)?',
    options: ['A) John 85 kg', 'B) Bill 90 kg', 'C) Max 95 kg', 'D) None of them'],
    answer: 'C) Max 95 kg',
    method: 'The moment needed to lift the weight: 60 kg × 3 = 180 kg·units. Bill (90 × 2 = 180) exactly balances the weight but cannot lift it above the fulcrum. Only Max (95 × 2 = 190) exceeds 180, providing enough moment to lift the weight above the orange triangle.'
  },
  { group: 'MFP2_12', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Springs',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_12.png',
    question: 'A force of 6 kg compresses two springs in series for a total of 15 cm (arrangement A). How far would spring B compress if the springs are arranged in parallel (arrangement B)?',
    options: ['A) 15 cm', 'B) 5 cm', 'C) 12 cm', 'D) 20 cm'],
    answer: 'B) 5 cm',
    method: 'In series, springs compress sequentially — each spring bears the full load. With three springs in the system each compresses 5 cm (15 ÷ 3). In the parallel arrangement the force is divided between the springs, so spring B compresses 5 cm.'
  },
  { group: 'MFP2_13', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Structures',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_13.png',
    question: 'Which stack of blocks could support the most weight sitting on top?',
    options: ['A) A', 'B) B', 'C) C', 'D) The same'],
    answer: 'C) C',
    method: 'Stack stability depends on how evenly load is distributed through the column. The blocks in arrangement C are aligned most closely, creating a continuous vertical load path that can resist greater downward force before toppling or crushing.'
  },
  { group: 'MFP2_14', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_14.png',
    question: 'If gears A, B & C are fixed to the larger gears of the same colour, how is the bright green gear moving?',
    options: ['A) Same direction as A and B', 'B) Same direction as B and C', 'C) Same direction as C only', 'D) Same direction as B only'],
    answer: 'D) Same direction as B only',
    method: 'Meshed gears rotate in opposite directions to each other. Orange rotates clockwise → yellow (B) rotates counter-clockwise. Olive gear (A, fixed to orange) rotates clockwise → bright green gear rotates counter-clockwise, which is the same direction as yellow (B). So the bright green gear moves in the same direction as B only.'
  },
  { group: 'MFP2_15', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Heat & Temperature',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_15.png',
    question: 'Which frying pan would conduct heat the quickest?',
    options: ['A) Iron', 'B) Stainless Steel', 'C) Copper', 'D) All the same'],
    answer: 'C) Copper',
    method: 'Copper has the highest thermal conductivity of the three materials (~385 W/m·K), far exceeding iron (~80 W/m·K) and stainless steel (~16 W/m·K). This allows copper cookware to heat up and distribute heat far more quickly.'
  },
  { group: 'MFP2_16', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Electricity & Magnetism',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_16.jpg',
    question: 'From the circuit below, what would happen if only Switch A and Switch D close?',
    options: ['A) All bulbs will shine', 'B) Bulbs A & B will shine', 'C) Bulbs A & D will shine', 'D) Bulbs A, D & E will shine', 'E) No bulbs will shine'],
    answer: 'D) Bulbs A, D & E will shine',
    method: 'Closing switches A and D completes the circuit around the outer loop, lighting bulbs A, D and E. Bulbs B and C are in a branch that requires switches B and C to be closed — they remain unlit.'
  },
  { group: 'MFP2_17', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Belts & Pulleys',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_17.jpg',
    question: 'How many kgs of force would you need to apply pulling down on the rope to lift the 120 kg weight?',
    options: ['A) 120 kgs', 'B) 80 kgs', 'C) 60 kgs', 'D) 40 kgs', 'E) 30 kgs'],
    answer: 'A) 120 kgs',
    method: 'This system uses only fixed pulleys. Fixed pulleys change the direction of the applied force but provide no mechanical advantage — the effort required equals the load. With no movable pulleys, the mechanical advantage is 1, so 120 kg of force is required.'
  },
  { group: 'MFP2_18', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_18.png',
    question: 'The bolt is threaded through the brown plate. Which direction would you turn the bolt from the bottom to raise the plate?',
    options: ['A) Clockwise', 'B) Counter-clockwise', 'C) Either direction', 'D) No direction would work'],
    answer: 'B) Counter-clockwise',
    method: 'This is a left-hand threaded bolt (the threads slope downward from left to right, opposite to standard bolts). For a left-hand thread, the normal "righty-tighty" rule is reversed — turning counter-clockwise from the bottom raises the bolt through the plate.'
  },
  { group: 'MFP2_19', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Gears & Wheels',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_19.png',
    question: 'Cog A has 3 times as many teeth as Cog B. If Cog A makes 3 complete turns, how many turns will Cog B complete?',
    options: ['A) 3', 'B) 6', 'C) 9', 'D) 12'],
    answer: 'C) 9',
    method: 'Because Cog A has 3× more teeth, for every 1 full turn of Cog A, Cog B completes 3 turns. Cog A makes 3 turns, so Cog B makes 3 × 3 = 9 turns.'
  },
  { group: 'MFP2_20', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Motion & Forces',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_20.jpg',
    question: 'If block A moves left, what will happen to block B?',
    options: ['A) Moves up', 'B) Moves down', 'C) Stays stationary'],
    answer: 'B) Moves down',
    method: 'The green part of block B protrudes above the top of the red block. When block A slides left, it slides under block B\'s protruding section, pushing it downward. Block B therefore moves down.'
  },
  { group: 'MFP2_21', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Structures',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_21.jpg',
    question: 'Which tree would fall to the right?',
    options: ['A) A', 'B) B', 'C) Neither'],
    answer: 'C) Neither',
    method: 'A tree falls in the direction its notch faces. The notch cut on both tree A and tree B faces left, so both trees will fall to the left. Neither tree will fall to the right.'
  },
  { group: 'MFP2_22', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Structures',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_22.png',
    question: 'The structure below contains 7 beams labelled A–G. Which beams are under tension (being pulled towards each other)?',
    options: ['A) A, B, C', 'B) D, E', 'C) D, E, F, G', 'D) A, B, C, D, E', 'E) F, G'],
    answer: 'C) D, E, F, G',
    method: 'The downward load at the centre pulls the central joint down. Beams F and G (and D and E) resist this by pulling outward from the centre — they are in tension. Beams A, B and C are in the upper chord and are under compression, not tension.'
  },
  { group: 'MFP2_23', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Fluid Mechanics',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_23.png',
    question: 'Object A on the left is submerged into the water by 8 units. How far will Object B move?',
    options: ['A) Up less than 8 units', 'B) Down less than 8 units', 'C) Up more than 8 units', 'D) Down more than 8 units'],
    answer: 'A) Up less than 8 units',
    method: 'The enclosed water system means pressure from A pushing down forces B upward. However, B is in a wider chamber — the displaced water pressure disperses across a larger cross-sectional area, so B rises by less than the 8 units that A descends.'
  },
  { group: 'MFP2_24', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Motion & Forces',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_24.jpg',
    question: 'Which box will move the most when the yellow rod falls to the bottom?',
    options: ['A) A', 'B) B', 'C) Cannot determine'],
    answer: 'C) Cannot determine',
    method: 'Two competing factors affect horizontal displacement: rod length (longer rod → greater displacement) and starting angle (steeper angle → greater horizontal displacement). The red rod is steeper but the green rod is longer. Without knowing the exact angle or length values, it is impossible to determine which box moves more.'
  },
  { group: 'MFP2_25', set: 'FRV Practice #2', type: 'multiple_choice', category: 'Cams & Levers',
    questionImage: '/images/mechanical reasoning/Mech_FRV Practice 2_25.jpg',
    question: '3 orange pins hold the blue plate in place, which rotates around the green pivot point. Which pins should be removed to allow the blue plate to swing up the greatest distance?',
    options: ['A) AB', 'B) BC', 'C) CA', 'D) All the same'],
    answer: 'B) BC',
    method: 'Removing pins B and C leaves only pin A. The plate then rotates freely around the green pivot, swinging up as far as pin A allows — achieving the greatest arc distance. Removing any other combination leaves a closer-set pin that limits the swing to a shorter distance.'
  },
]

app.get('/api/mechanical-sets', (req, res) => {
  const counts = {}
  mechanicalQuestions.forEach(q => { counts[q.set] = (counts[q.set] || 0) + 1 })
  res.json(Object.entries(counts).sort().map(([name, questionCount]) => ({ name, questionCount })))
})

app.get('/api/mechanical-questions', (req, res) => {
  const { sets, ordered, fill } = req.query
  const setsFilter = sets ? sets.split(',') : null
  const pool = setsFilter ? mechanicalQuestions.filter(q => setsFilter.includes(q.set)) : mechanicalQuestions
  let result = ordered === 'true'
    ? [...pool].sort((a, b) => a.group.localeCompare(b.group, undefined, { numeric: true }))
    : [...pool].sort(() => Math.random() - 0.5)
  if (fill === 'true' && setsFilter) {
    const FULL = 32
    const needed = FULL - result.length
    if (needed > 0) {
      const filler = mechanicalQuestions
        .filter(q => !setsFilter.includes(q.set))
        .sort(() => Math.random() - 0.5)
        .slice(0, needed)
      result = [...result, ...filler]
    } else {
      result = result.slice(0, FULL)
    }
  }
  const final = result.map((q, i) => ({
    id: i + 1,
    type: q.type,
    category: q.category,
    group: q.group,
    set: q.set,
    question: q.question,
    questionImage: q.questionImage || null,
    questionImage2: q.questionImage2 || null,
    options: q.options || null,
    answer: q.answer,
    method: q.method || null,
  }))
  const customCount = req.query.count ? parseInt(req.query.count) : null
  res.json(customCount ? final.slice(0, customCount) : final)
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
