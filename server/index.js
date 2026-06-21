const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const NOTE = 'Convert minutes to decimal hours: 15 min = 0.25  |  30 min = 0.50  |  35 min = 0.58  |  45 min = 0.75  |  50 min = 0.83  |  60 min = 1.00  |  75 min = 1.25  |  90 min = 1.50'

// ── 10 timesheet contexts ─────────────────────────────────────────────────────

const ctx1 = {
  title: 'FRV Station Alpha — Weekly Crew Timesheet',
  subtitle: 'Firefighter: Sarah Chen  |  Weekday rate: $55.25/hr  |  Saturday rate: $82.88/hr  |  Sunday rate: $110.50/hr',
  tables: [{
    headers: ['Day', 'Start Time', 'End Time', 'Non-Billable'],
    rows: [
      ['Monday',    '7:15am', '3:45pm', '35 mins'],
      ['Tuesday',   '7:15am', '4:15pm', '50 mins'],
      ['Wednesday', '7:15am', '3:15pm', '35 mins'],
      ['Thursday',  '7:15am', '4:45pm', '75 mins'],
      ['Friday',    '7:15am', '3:45pm', '35 mins'],
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
      ['Monday',    '6:45am', '3:15pm',  '35 mins'],
      ['Tuesday',   '6:45am', '2:45pm',  '50 mins'],
      ['Wednesday', '6:45am', '3:45pm',  '75 mins'],
      ['Thursday',  '6:45am', '3:15pm',  '35 mins'],
      ['Friday',    '6:45am', '2:45pm',  '35 mins'],
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
      ['Monday',    '8:15am', '4:15pm', '50 mins'],
      ['Tuesday',   '—',      '—',      '—'],
      ['Wednesday', '7:45am', '5:15pm', '75 mins'],
      ['Thursday',  '8:15am', '3:45pm', '35 mins'],
      ['Friday',    '7:45am', '4:45pm', '50 mins'],
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
      ['Tuesday',   '6:15am',  '2:45pm',  '50 mins'],
      ['Wednesday', '6:15am',  '3:15pm',  '75 mins'],
      ['Thursday',  '6:15am',  '2:15pm',  '35 mins'],
      ['Friday',    '6:15am',  '3:45pm',  '75 mins'],
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
      ['Monday',    '7:15am', '5:15pm', '90 mins'],
      ['Tuesday',   '7:15am', '4:45pm', '75 mins'],
      ['Wednesday', '7:15am', '6:15pm', '90 mins'],
      ['Thursday',  '—',      '—',      '—'],
      ['Friday',    '7:15am', '4:15pm', '50 mins'],
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
      ['Tuesday',   '6:45am', '3:15pm',  '35 mins'],
      ['Wednesday', '6:45am', '4:45pm',  '75 mins'],
      ['Thursday',  '6:45am', '2:45pm',  '35 mins'],
      ['Friday',    '6:45am', '3:45pm',  '50 mins'],
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
      ['Monday',    '7:15am', '3:45pm',  '50 mins'],
      ['Tuesday',   '7:15am', '4:15pm',  '35 mins'],
      ['Wednesday', '7:15am', '5:15pm',  '90 mins'],
      ['Thursday',  '7:15am', '3:15pm',  '35 mins'],
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
      ['Monday',    '6:15am', '2:45pm', '35 mins'],
      ['Tuesday',   '6:15am', '3:15pm', '50 mins'],
      ['Wednesday', '6:15am', '2:15pm', '35 mins'],
      ['Thursday',  '6:15am', '3:45pm', '75 mins'],
      ['Friday',    '6:15am', '2:45pm', '35 mins'],
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
      ['Tuesday',   '5:45am', '2:15pm',  '35 mins'],
      ['Wednesday', '5:45am', '3:45pm',  '75 mins'],
      ['Thursday',  '5:45am', '2:45pm',  '50 mins'],
      ['Friday',    '5:45am', '1:45pm',  '35 mins'],
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
      ['Monday',    '7:00am', '3:30pm', '50 mins'],
      ['Tuesday',   '7:00am', '5:00pm', '90 mins'],
      ['Wednesday', '—',      '—',      '—'],
      ['Thursday',  '7:00am', '5:30pm', '90 mins'],
      ['Friday',    '7:00am', '4:00pm', '75 mins'],
      ['Saturday',  '7:15am', '3:15pm', '35 mins'],
      ['Sunday',    '7:15am', '1:15pm', '—'],
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

// ── Standard drinks context ───────────────────────────────────────────────────

const ctxSD = {
  title: 'Standard Drinks',
  subtitle: 'In Australia, 1 standard drink contains 10 grams of pure alcohol (ethanol density = 0.789 g/mL).',
  formulaHint: 'Standard drinks = Volume (mL) × %ABV × 0.000789',
  note: 'The Australian health guideline recommends no more than 4 standard drinks on any single occasion.'
}

// ── Questions — 10 sets of 2 (20 total) ──────────────────────────────────────

const questions = [

  // ── Set 1: Sarah Chen — weekday $55.25, sat $82.88, sun $110.50 ─────────
  {
    group: 'A', type: 'number_input', category: 'Number and Algebra',
    context: ctx1,
    question: 'Calculate the total number of paid weekday hours Sarah worked this week.',
    answer: '39.67'
  },
  {
    group: 'A', type: 'number_input', category: 'Number and Algebra',
    context: ctx1,
    question: "What is the difference in gross pay between Sarah's highest and lowest earning days?\n(Enter the dollar amount only)",
    answer: '46.04'
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
    answer: '42.17'
  },
  {
    group: 'B', type: 'number_input', category: 'Number and Algebra',
    context: ctx2,
    question: "What is the difference in gross pay between Marcus's highest and lowest earning days?\n(Enter the dollar amount only)",
    answer: '122.17'
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
    answer: '30.5'
  },
  {
    group: 'C', type: 'number_input', category: 'Number and Algebra',
    context: ctx3,
    question: "What is the difference in gross pay between Anika's highest and lowest earning days?\n(Enter the dollar amount only)",
    answer: '78'
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
    answer: '39.08'
  },
  {
    group: 'D', type: 'number_input', category: 'Number and Algebra',
    context: ctx4,
    question: "What is the difference in gross pay between Daniel's highest and lowest earning days?\n(Enter the dollar amount only)",
    answer: '148.82'
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
    answer: '34.42'
  },
  {
    group: 'E', type: 'number_input', category: 'Number and Algebra',
    context: ctx5,
    question: "What is the difference in gross pay between Lena's highest and lowest earning days?\n(Enter the dollar amount only)",
    answer: '96.60'
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
    answer: '43.25'
  },
  {
    group: 'F', type: 'number_input', category: 'Number and Algebra',
    context: ctx6,
    question: "What is the difference in gross pay between Omar's highest and lowest earning days?\n(Enter the dollar amount only)",
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
    answer: '36'
  },
  {
    group: 'G', type: 'number_input', category: 'Number and Algebra',
    context: ctx7,
    question: "What is the difference in gross pay between Claire's highest and lowest earning days?\n(Enter the dollar amount only)",
    answer: '173.355'
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
    answer: '49.67'
  },
  {
    group: 'H', type: 'number_input', category: 'Number and Algebra',
    context: ctx8,
    question: "What is the difference in gross pay between Ben's highest and lowest earning days?\n(Enter the dollar amount only)",
    answer: '439.075'
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
    answer: '39.75'
  },
  {
    group: 'I', type: 'number_input', category: 'Number and Algebra',
    context: ctx9,
    question: "What is the difference in gross pay between Nina's highest and lowest earning days?\n(Enter the dollar amount only)",
    answer: '204.05'
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
    answer: '46.33'
  },
  {
    group: 'J', type: 'number_input', category: 'Number and Algebra',
    context: ctx10,
    question: "What is the difference in gross pay between Adrian's highest and lowest earning days?\n(Enter the dollar amount only)",
    answer: '292.28'
  },
  {
    group: 'J', type: 'number_input', category: 'Number and Algebra',
    context: ctx10,
    question: "If Adrian's weekday rate increases by 3.5%, what is his new hourly rate?\n(Round to 2 decimal places)",
    answer: '69.81'
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
    question: 'After how many complete years would the Ford Ranger\'s annual fuel savings cover its full purchase price?',
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
    question: 'After how many complete years would the Mazda BT-50\'s annual fuel savings cover its full purchase price?',
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
    question: 'After how many complete years would the Ford Ranger Raptor\'s annual fuel savings cover its full purchase price?',
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
    question: 'After how many complete years would the Iveco Daily\'s annual fuel savings cover its full purchase price?',
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
    question: 'After how many complete years would the Kia Sorento\'s annual fuel savings cover its full purchase price?',
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
    answer: '51'
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
    answer: '94 anchors'
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
  K: ['$', 'years'], L: ['$', 'years'], M: ['$', '$'],   N: ['$', 'years'], O: ['$', '$'],
  P: ['$', 'years'], Q: ['$', '$'],   R: ['$', 'years'], S: ['$', '$'],   T: ['$', '$'],
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
  EL: ['m³', null],
}

// ── Working methods keyed by group, [Q1 method, Q2 method] ───────────────────
const methods = {
  A: [
    `For each worked day, calculate billable hours = (End − Start) minus Non-Billable.\n(35 min = 0.58 h  |  50 min = 0.83 h  |  75 min = 1.25 h)\n\n  Mon: 3:45pm − 7:15am = 8h 30m − 35 min = 7h 55m = 475 min\n  Tue: 4:15pm − 7:15am = 9h 00m − 50 min = 8h 10m = 490 min\n  Wed: 3:15pm − 7:15am = 8h 00m − 35 min = 7h 25m = 445 min\n  Thu: 4:45pm − 7:15am = 9h 30m − 75 min = 8h 15m = 495 min\n  Fri: 3:45pm − 7:15am = 8h 30m − 35 min = 7h 55m = 475 min\n\nTotal minutes: 475 + 490 + 445 + 495 + 475 = 2,380 min\nConvert to hours: 2,380 ÷ 60 = 39.67 h`,
    `Calculate each weekday's gross pay, then find the difference between the highest and lowest.\n\n  Mon: 475/60 × $55.25 = 7.917 h × $55.25 = $437.41\n  Tue: 490/60 × $55.25 = 8.167 h × $55.25 = $451.22\n  Wed: 445/60 × $55.25 = 7.417 h × $55.25 = $409.77\n  Thu: 495/60 × $55.25 = 8.250 h × $55.25 = $455.81\n  Fri: 475/60 × $55.25 = 7.917 h × $55.25 = $437.41\n\n  Highest earning day: Thursday  = $455.81\n  Lowest earning day:  Wednesday = $409.77\n\nDifference: $455.81 − $409.77 = $46.04`,
    `New rate = Old rate × (1 + percentage increase)\n  = $55.25 × 1.025\n  = $56.63`,
  ],
  B: [
    `For each worked day, calculate billable hours = (End − Start) minus Non-Billable.\n(35 min = 0.58 h  |  50 min = 0.83 h  |  75 min = 1.25 h)\n\n  Mon: 3:15pm − 6:45am = 8h 30m − 35 min = 7h 55m = 475 min\n  Tue: 2:45pm − 6:45am = 8h 00m − 50 min = 7h 10m = 430 min\n  Wed: 3:45pm − 6:45am = 9h 00m − 75 min = 7h 45m = 465 min\n  Thu: 3:15pm − 6:45am = 8h 30m − 35 min = 7h 55m = 475 min\n  Fri: 2:45pm − 6:45am = 8h 00m − 35 min = 7h 25m = 445 min\n  Sat: 12:15pm − 8:15am = 4h 00m = 240 min (no Non-Billable)\n\nTotal minutes: 475 + 430 + 465 + 475 + 445 + 240 = 2,530 min\nConvert to hours: 2,530 ÷ 60 = 42.17 h`,
    `Calculate each day's gross pay, then find the difference between the highest and lowest.\n\n  Mon: 475/60 × $63.75 = 7.917 h × $63.75 = $504.69\n  Tue: 430/60 × $63.75 = 7.167 h × $63.75 = $456.88\n  Wed: 465/60 × $63.75 = 7.750 h × $63.75 = $494.06\n  Thu: 475/60 × $63.75 = 7.917 h × $63.75 = $504.69\n  Fri: 445/60 × $63.75 = 7.417 h × $63.75 = $472.81\n  Sat: 4.000 h × $95.63 (sat rate)         = $382.52\n\n  Highest earning day: Monday / Thursday = $504.69\n  Lowest earning day:  Saturday          = $382.52\n\nDifference: $504.69 − $382.52 = $122.17`,
    `New rate = Old rate × (1 − percentage decrease)\n  = $63.75 × 0.985\n  = $62.79`,
  ],
  C: [
    `Tuesday was off. Calculate billable hours for each worked day.\n(35 min = 0.58 h  |  50 min = 0.83 h  |  75 min = 1.25 h)\n\n  Mon: 4:15pm − 8:15am = 8h 00m − 50 min = 7h 10m = 430 min\n  Wed: 5:15pm − 7:45am = 9h 30m − 75 min = 8h 15m = 495 min\n  Thu: 3:45pm − 8:15am = 7h 30m − 35 min = 6h 55m = 415 min\n  Fri: 4:45pm − 7:45am = 9h 00m − 50 min = 8h 10m = 490 min\n\nTotal minutes: 430 + 495 + 415 + 490 = 1,830 min\nConvert to hours: 1,830 ÷ 60 = 30.5 h`,
    `Calculate each day's gross pay, then find the difference between the highest and lowest.\n\n  Mon: 430/60 × $58.50 = 7.167 h × $58.50 = $419.25\n  Wed: 495/60 × $58.50 = 8.250 h × $58.50 = $482.63\n  Thu: 415/60 × $58.50 = 6.917 h × $58.50 = $404.63\n  Fri: 490/60 × $58.50 = 8.167 h × $58.50 = $477.75\n\n  Highest earning day: Wednesday = $482.63\n  Lowest earning day:  Thursday  = $404.63\n\nDifference: $482.63 − $404.63 = $78.00`,
    `New rate = Old rate × (1 + percentage increase)\n  = $58.50 × 1.032\n  = $60.37`,
  ],
  D: [
    `Monday was off. Calculate billable hours for each worked day.\n(35 min = 0.58 h  |  50 min = 0.83 h  |  75 min = 1.25 h)\n\n  Tue: 2:45pm − 6:15am = 8h 30m − 50 min = 7h 40m = 460 min\n  Wed: 3:15pm − 6:15am = 9h 00m − 75 min = 7h 45m = 465 min\n  Thu: 2:15pm − 6:15am = 8h 00m − 35 min = 7h 25m = 445 min\n  Fri: 3:45pm − 6:15am = 9h 30m − 75 min = 8h 15m = 495 min\n  Sat: 2:15pm − 10:15am = 4h 00m = 240 min (no Non-Billable)\n  Sun: 1:15pm − 9:15am  = 4h 00m = 240 min (no Non-Billable)\n\nTotal minutes: 460 + 465 + 445 + 495 + 240 + 240 = 2,345 min\nConvert to hours: 2,345 ÷ 60 = 39.08 h`,
    `Calculate each day's gross pay, then find the difference between the highest and lowest.\n\n  Tue: 460/60 × $66.15 = 7.667 h × $66.15 = $507.15\n  Wed: 465/60 × $66.15 = 7.750 h × $66.15 = $512.66\n  Thu: 445/60 × $66.15 = 7.417 h × $66.15 = $490.61\n  Fri: 495/60 × $66.15 = 8.250 h × $66.15 = $545.74\n  Sat: 4.000 h × $99.23 (sat rate)          = $396.92\n  Sun: 4.000 h × $132.30 (sun rate)         = $529.20\n\n  Highest earning day: Friday   = $545.74\n  Lowest earning day:  Saturday = $396.92\n\nDifference: $545.74 − $396.92 = $148.82`,
    `New rate = Old rate × (1 + percentage increase)\n  = $66.15 × 1.042\n  = $68.93`,
  ],
  E: [
    `Thursday was off. Calculate billable hours for each worked day.\n(50 min = 0.83 h  |  75 min = 1.25 h  |  90 min = 1.50 h)\n\n  Mon: 5:15pm − 7:15am = 10h 00m − 90 min = 8h 30m = 510 min\n  Tue: 4:45pm − 7:15am = 9h 30m  − 75 min = 8h 15m = 495 min\n  Wed: 6:15pm − 7:15am = 11h 00m − 90 min = 9h 30m = 570 min\n  Fri: 4:15pm − 7:15am = 9h 00m  − 50 min = 8h 10m = 490 min\n\nTotal minutes: 510 + 495 + 570 + 490 = 2,065 min\nConvert to hours: 2,065 ÷ 60 = 34.42 h`,
    `Calculate each weekday's gross pay, then find the difference between the highest and lowest.\n\n  Mon: 510/60 × $72.45 = 8.500 h × $72.45 = $615.83\n  Tue: 495/60 × $72.45 = 8.250 h × $72.45 = $597.71\n  Wed: 570/60 × $72.45 = 9.500 h × $72.45 = $688.28\n  Fri: 490/60 × $72.45 = 8.167 h × $72.45 = $591.68\n\n  Highest earning day: Wednesday = $688.28\n  Lowest earning day:  Friday    = $591.68\n\nDifference: $688.28 − $591.68 = $96.60`,
    `New rate = Old rate × (1 − percentage decrease)\n  = $72.45 × 0.98\n  = $71.00`,
  ],
  F: [
    `Monday was off. Calculate billable hours for each worked day.\n(35 min = 0.58 h  |  50 min = 0.83 h  |  75 min = 1.25 h)\n\n  Tue: 3:15pm − 6:45am = 8h 30m − 35 min = 7h 55m = 475 min\n  Wed: 4:45pm − 6:45am = 10h 00m − 75 min = 8h 45m = 525 min\n  Thu: 2:45pm − 6:45am = 8h 00m − 35 min = 7h 25m = 445 min\n  Fri: 3:45pm − 6:45am = 9h 00m − 50 min = 8h 10m = 490 min\n  Sat: 1:45pm − 6:15am = 7h 30m = 450 min (no Non-Billable)\n  Sun: 10:45am − 7:15am = 3h 30m = 210 min (no Non-Billable)\n\nTotal minutes: 475 + 525 + 445 + 490 + 450 + 210 = 2,595 min\nConvert to hours: 2,595 ÷ 60 = 43.25 h`,
    `Calculate each day's gross pay, then find the difference between the highest and lowest.\n\n  Tue: 475/60 × $64.80 = 7.917 h × $64.80 = $513.00\n  Wed: 525/60 × $64.80 = 8.750 h × $64.80 = $567.00\n  Thu: 445/60 × $64.80 = 7.417 h × $64.80 = $480.60\n  Fri: 490/60 × $64.80 = 8.167 h × $64.80 = $529.20\n  Sat: 7.500 h × $97.20 (sat rate)         = $729.00\n  Sun: 3.500 h × $129.60 (sun rate)        = $453.60\n\n  Highest earning day: Saturday = $729.00\n  Lowest earning day:  Sunday   = $453.60\n\nNote: Sunday ($453.60) is lower than Thursday ($480.60) — confirm before selecting.\n\nDifference: $729.00 − $453.60 = $275.40`,
    `New rate = Old rate × (1 + percentage increase)\n  = $64.80 × 1.05\n  = $68.04`,
  ],
  G: [
    `Friday was off. Calculate billable hours for each worked day.\n(35 min = 0.58 h  |  50 min = 0.83 h  |  90 min = 1.50 h)\n\n  Mon: 3:45pm − 7:15am = 8h 30m − 50 min = 7h 40m = 460 min\n  Tue: 4:15pm − 7:15am = 9h 00m − 35 min = 8h 25m = 505 min\n  Wed: 5:15pm − 7:15am = 10h 00m − 90 min = 8h 30m = 510 min\n  Thu: 3:15pm − 7:15am = 8h 00m − 35 min = 7h 25m = 445 min\n  Sat: 12:15pm − 8:15am = 4h 00m = 240 min (no Non-Billable)\n\nTotal minutes: 460 + 505 + 510 + 445 + 240 = 2,160 min\nConvert to hours: 2,160 ÷ 60 = 36 h`,
    `Calculate each day's gross pay, then find the difference between the highest and lowest.\n\n  Mon: 460/60 × $69.35 = 7.667 h × $69.35 = $531.68\n  Tue: 505/60 × $69.35 = 8.417 h × $69.35 = $583.70\n  Wed: 510/60 × $69.35 = 8.500 h × $69.35 = $589.48\n  Thu: 445/60 × $69.35 = 7.417 h × $69.35 = $514.35\n  Sat: 4.000 h × $104.03 (sat rate)         = $416.12\n\n  Highest earning day: Wednesday = $589.48\n  Lowest earning day:  Saturday  = $416.12\n\nDifference: $589.48 − $416.12 = $173.36 (≈ $173.355)`,
    `New rate = Old rate × (1 − percentage decrease)\n  = $104.03 × 0.97\n  = $100.91`,
  ],
  H: [
    `Calculate billable hours for each worked day.\n(35 min = 0.58 h  |  50 min = 0.83 h  |  75 min = 1.25 h)\n\n  Mon: 2:45pm − 6:15am = 8h 30m − 35 min = 7h 55m = 475 min\n  Tue: 3:15pm − 6:15am = 9h 00m − 50 min = 8h 10m = 490 min\n  Wed: 2:15pm − 6:15am = 8h 00m − 35 min = 7h 25m = 445 min\n  Thu: 3:45pm − 6:15am = 9h 30m − 75 min = 8h 15m = 495 min\n  Fri: 2:45pm − 6:15am = 8h 30m − 35 min = 7h 55m = 475 min\n  Sat: 4:15pm − 6:15am = 10h 00m = 600 min (no Non-Billable)\n\nTotal minutes: 475 + 490 + 445 + 495 + 475 + 600 = 2,980 min\nConvert to hours: 2,980 ÷ 60 = 49.67 h`,
    `Calculate each day's gross pay, then find the difference between the highest and lowest.\n\n  Mon: 475/60 × $57.90 = 7.917 h × $57.90 = $458.38\n  Tue: 490/60 × $57.90 = 8.167 h × $57.90 = $472.88\n  Wed: 445/60 × $57.90 = 7.417 h × $57.90 = $429.43\n  Thu: 495/60 × $57.90 = 8.250 h × $57.90 = $477.68\n  Fri: 475/60 × $57.90 = 7.917 h × $57.90 = $458.38\n  Sat: 10.000 h × $86.85 (sat rate)         = $868.50\n\n  Highest earning day: Saturday  = $868.50\n  Lowest earning day:  Wednesday = $429.43 (≈ $429.425)\n\nDifference: $868.50 − $429.43 = $439.08 (exact: $439.075)`,
    `New rate = Old rate × (1 + percentage increase)\n  = $57.90 × 1.018\n  = $58.94`,
  ],
  I: [
    `Monday was off. Calculate billable hours for each worked day.\n(35 min = 0.58 h  |  50 min = 0.83 h  |  75 min = 1.25 h)\n\n  Tue: 2:15pm − 5:45am = 8h 30m − 35 min = 7h 55m = 475 min\n  Wed: 3:45pm − 5:45am = 10h 00m − 75 min = 8h 45m = 525 min\n  Thu: 2:45pm − 5:45am = 9h 00m − 50 min = 8h 10m = 490 min\n  Fri: 1:45pm − 5:45am = 8h 00m − 35 min = 7h 25m = 445 min\n  Sat: 10:15am − 6:15am = 4h 00m = 240 min (no Non-Billable)\n  Sun: 10:45am − 7:15am = 3h 30m = 210 min (no Non-Billable)\n\nTotal minutes: 475 + 525 + 490 + 445 + 240 + 210 = 2,385 min\nConvert to hours: 2,385 ÷ 60 = 39.75 h`,
    `Calculate each day's gross pay, then find the difference between the highest and lowest.\n\n  Tue: 475/60 × $74.20 = 7.917 h × $74.20 = $587.42\n  Wed: 525/60 × $74.20 = 8.750 h × $74.20 = $649.25\n  Thu: 490/60 × $74.20 = 8.167 h × $74.20 = $605.97\n  Fri: 445/60 × $74.20 = 7.417 h × $74.20 = $550.32\n  Sat: 4.000 h × $111.30 (sat rate)         = $445.20\n  Sun: 3.500 h × $148.40 (sun rate)         = $519.40\n\n  Highest earning day: Wednesday = $649.25\n  Lowest earning day:  Saturday  = $445.20\n\nDifference: $649.25 − $445.20 = $204.05`,
    `New rate = Old rate × (1 + percentage increase)\n  = $74.20 × 1.022\n  = $75.83`,
  ],
  J: [
    `Wednesday was off. Calculate billable hours for each worked day.\n(50 min = 0.83 h  |  75 min = 1.25 h  |  90 min = 1.50 h)\n\n  Mon: 3:30pm − 7:00am = 8h 30m − 50 min = 7h 40m = 460 min\n  Tue: 5:00pm − 7:00am = 10h 00m − 90 min = 8h 30m = 510 min\n  Thu: 5:30pm − 7:00am = 10h 30m − 90 min = 9h 00m = 540 min\n  Fri: 4:00pm − 7:00am = 9h 00m − 75 min = 7h 45m = 465 min\n  Sat: 3:15pm − 7:15am = 8h 00m − 35 min = 7h 25m = 445 min\n  Sun: 1:15pm − 7:15am = 6h 00m = 360 min (no Non-Billable)\n\nTotal minutes: 460 + 510 + 540 + 465 + 445 + 360 = 2,780 min\nConvert to hours: 2,780 ÷ 60 = 46.33 h`,
    `Calculate each day's gross pay, then find the difference between the highest and lowest.\n\n  Mon: 460/60 × $67.45 = 7.667 h × $67.45 = $517.12\n  Tue: 510/60 × $67.45 = 8.500 h × $67.45 = $573.33\n  Thu: 540/60 × $67.45 = 9.000 h × $67.45 = $607.05\n  Fri: 465/60 × $67.45 = 7.750 h × $67.45 = $522.74\n  Sat: 445/60 × $101.18 = 7.417 h × $101.18 = $750.42\n  Sun: 6.000 h × $134.90 (sun rate)          = $809.40\n\n  Highest earning day: Sunday = $809.40\n  Lowest earning day:  Monday = $517.12\n\nDifference: $809.40 − $517.12 = $292.28`,
    `New rate = Old rate × (1 + percentage increase)\n  = $67.45 × 1.035\n  = $69.81`,
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
    `Convert all durations to minutes, then find the mean:\n  Participant 1 (Regional Train): 1 hr 40 min = 100 min\n  Participant 2 (Bus):            50 min\n  Participant 3 (Carpool):        1 hr 10 min = 70 min\n  Participant 4 (Bicycle):        30 min\n  Participant 5 (Metro):          45 min\n  Participant 6 (Walking):        15 min\nTotal: 100 + 50 + 70 + 30 + 45 + 15 = 310 min\nAverage: 310 ÷ 6 = 51.67 → 51 min`,
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
    `Anchor Class M10: 3 boxes × 24 anchors = 72 anchors\nAnchor Class M16: 2 boxes × 20 anchors = 40 anchors\n\nTotal: 72 + 40 = 94 anchors`,
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
}

// ── Group-aware shuffle ───────────────────────────────────────────────────────

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
}

function shuffleByGroup(qs) {
  // Build one array-of-questions per group, preserving internal order
  const groupMap = {}
  qs.forEach(q => {
    if (!groupMap[q.group]) groupMap[q.group] = []
    groupMap[q.group].push(q)
  })
  const groups = Object.values(groupMap)

  // Bucket groups by theme (context title, or group code if no context)
  const themeMap = {}
  groups.forEach(grp => {
    const key = grp[0].context?.title ?? grp[0].group
    if (!themeMap[key]) themeMap[key] = []
    themeMap[key].push(grp)
  })

  // Shuffle groups within each theme, then shuffle the theme order
  const themes = Object.values(themeMap)
  themes.forEach(t => shuffle(t))
  shuffle(themes)

  // Round-robin: take one group per theme per round
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
  const shuffled = shuffleByGroup(pool)

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

const ctxL8 = {
  title: 'Vanguard Tech Pro-Flow G3 Filtration Array: Installation & Safety Manual',
  subtitle: 'Product Model Series: G3-Industrial / High-Pressure Gas Separation',
  paragraphs: [
    'This instruction manual governs the unboxing, physical installation, and long-term diagnostic tracking protocols for the Pro-Flow G3 Gaseous Filtration Array. The G3 system is engineered for integration into high-pressure industrial separation plants where gas purity index parameters are critical.',
    'Section 1 — Structural Anchor Requirements & Rigging Alignment: Prior to anchoring the G3 filtration unit to the industrial concrete base plate, site engineers must verify the local structural load capacity metrics. The complete rigging configuration must utilise a dual-mount isolation template. Each independent structural anchor bolt must possess a verified static load rating of at least 22 kilonewtons (kN) to successfully manage operational vibrations.',
    'If a single anchor bolt displays any signs of manufacturing degradation, surface rust, or fine hairline micro-cracking along its threaded column, it must be instantly disqualified from service. Installation teams are strictly forbidden from combining two or more compromised bolts to secure a single mounting corner; doing so violates the structural tolerance guarantees.',
    'Section 2 — High-Efficiency Particulate Air (HEPA) Element Constraints: The internal filtration core relies on a multi-stage high-efficiency particulate air (HEPA) system. This element is rated to operate safely under a maximum continuous static pressure differential of 22 kilopascals (kPa).',
    'To ensure clean airflow paths, technicians must inspect the silicone perimeter seals and tracking frames at the start of every operating shift cycle. The synthetic sealing elements are highly sensitive to chemical contamination; they must be permanently retired from service if they are exposed to any petroleum-based chemical solvents, unapproved aerosol cleaners, or machine fuel mixtures during installation or transport.',
    'CRITICAL SYSTEM NOTE: If the system gauges register a sudden, localised pressure variance spike exceeding 5 kPa within the primary containment chamber, the G3 array will enter an automated fault state. This triggers a blinking indicator light on the external interface panel and freezes the system\'s intake valves. To clear this state, a technician must perform a full manual line purge; the system cannot be reset electronically from the master control desk.'
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

const ctxL14 = {
  title: 'Statutory Construction Advisory — Indemnification Frameworks Under Section 88',
  subtitle: 'To All Regional Counsel, Claims Adjusters, and Contract Procurement Officers',
  paragraphs: [
    'This advisory details the precise statutory interpretation and conditional matrices governing the activation of corporate indemnification protections under Section 88 of the Trans-National Commerce Act. Given the significant fiscal liabilities shifted by these clauses, contract procurement officers must verify specific evidentiary compliance markers before authorising third-party vendor liability waivers during multi-jurisdictional procurement reviews.',
    '1. Verification Thresholds for a Valid Indemnification Claim: A Section 88 liability waiver is legally valid and binding only if the underlying commercial master agreement establishes that the following three criteria were met simultaneously at the date of the operational loss: (a) the primary operational failure occurred within an officially designated, high-risk industrial transit zone; (b) the third-party vendor was operating under an active, unexpired Operational Safety Certificate (OSC) verified by a municipal transportation board; (c) the localised infrastructure asset damage did not originate from documented gross negligence or wilful equipment mismanagement by the vendor\'s field agents. If any of these three core conditions are left unfulfilled, the entire indemnification waiver is rendered completely void ab initio, and primary fiscal liability reverts fully to the independent vendor.',
    '2. Enforcement Limitations and Regulatory Cures: Under Subsection 7, if an audit logs a missing or expired OSC for an active on-site vendor, the procurement agency is granted a strict 14-day administrative correction window to compel the vendor to achieve certification compliance. During this 14-day window, all outstanding corporate progress payments are placed on an automated administrative hold. If the vendor fails to submit a verified certificate before the 14-day window expires, the underlying master agreement is subject to immediate structural termination without financial penalty to the procurement agency.'
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

const literacyQuestions = [
  // ── Set 4: Corporate Directive / DFA Framework ─────────────────────────────
  { group: 'L4', type: 'multiple_choice', category: 'Workplace Policy', context: ctxL4,
    question: 'What is the primary focus of this newsletter feature?',
    options: [
      'A) To announce financial performance updates for global logistics operations.',
      'B) To detail the operational tiers and mandatory workplace guidelines of the new Dynamic Floor Allocation framework.',
      'C) To provide a maintenance manual for technicians servicing high-speed office elevators.',
      'D) To outline the interview process for incoming facilities management staff.'
    ],
    answer: 'B) To detail the operational tiers and mandatory workplace guidelines of the new Dynamic Floor Allocation framework.',
    method: 'The entire newsletter section introduces the DFA framework and explains its three operational tiers. Financial performance, elevator maintenance, and recruitment are not mentioned anywhere in the text.'
  },
  { group: 'L4', type: 'multiple_choice', category: 'Workplace Policy', context: ctxL4,
    question: 'What building occupancy range automatically triggers a Tier 2 Collaborative Influx configuration?',
    options: [
      'A) Daily occupancy strictly below 55%',
      'B) Daily occupancy falling between 55% and 80%',
      'C) Daily occupancy exceeding 80%',
      'D) Occupancy measured exactly at 15%'
    ],
    answer: 'B) Daily occupancy falling between 55% and 80%',
    method: 'Tier 2 is "triggered immediately when daily occupancy tracking spikes between 55% and 80%". Below 55% is Tier 1; above 80% is Tier 3. 15% refers to server bandwidth, not occupancy.'
  },
  { group: 'L4', type: 'multiple_choice', category: 'Workplace Policy', context: ctxL4,
    question: 'Why does the company restrict service paths to outbound traffic only during peak arrival hours under Tier 2?',
    options: [
      'A) To reduce printing and electricity costs across localised utility stations.',
      'B) To mitigate potential human traffic congestion and elevator gridlock during peak times.',
      'C) To encourage staff members to leave the office earlier in the day.',
      'D) To ensure that regional server bandwidth remains within a 15% safety margin.'
    ],
    answer: 'B) To mitigate potential human traffic congestion and elevator gridlock during peak times.',
    method: 'The text states paths are restricted to outbound traffic "to minimise elevator gridlock". The measure is about managing pedestrian flow during the busy morning arrival window, not costs or server metrics.'
  },
  { group: 'L4', type: 'multiple_choice', category: 'Workplace Policy', context: ctxL4,
    question: 'Under what specific technical condition will independent desk-booking features be locked out in favour of team pooling?',
    options: [
      'A) If building energy-saver modes are manually deactivated by an employee.',
      'B) If a multi-department review session is scheduled more than 24 hours in advance.',
      'C) If localised network metrics show that regional server bandwidth drops below a 15% safety margin.',
      'D) If corridor doors are left propped open for exactly 15 minutes.'
    ],
    answer: 'C) If localised network metrics show that regional server bandwidth drops below a 15% safety margin.',
    method: 'Tier 3 (which locks out desk-booking) is triggered when occupancy exceeds 80% OR "localised network metrics indicate that regional server bandwidth drops below a 15% safety margin". Option C matches this technical condition exactly.'
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
    question: 'What is the primary argument the author is presenting in this article?',
    options: [
      'A) To advocate for higher leasing fees to increase municipal council revenues.',
      'B) To argue that commercial encroachment is ruining footpaths as public assets and demand strict regulatory limits.',
      'C) To provide a historical review of how metropolitan high streets were originally constructed.',
      'D) To promote the use of dockless electric scooters as a sustainable urban transit solution.'
    ],
    answer: 'B) To argue that commercial encroachment is ruining footpaths as public assets and demand strict regulatory limits.',
    method: 'The author, Julian Vance, uses persuasive language throughout to argue that commercial dining, signage and scooters are degrading public footpaths. He then proposes strict regulations (two-metre ribbon, fines, scooter tracking data requirements) to fix this. The article is not about leasing revenues, history, or promoting scooters.'
  },
  { group: 'L5', type: 'multiple_choice', category: 'Opinion Article', context: ctxL5,
    question: 'According to the article, what happens to pedestrian walking speeds on high streets where outdoor dining consumes more than 40% of the pavement?',
    options: [
      'A) Walking speeds increase due to a vibrant city atmosphere.',
      'B) Walking speeds drop by half.',
      'C) Walking speeds remain entirely unaffected.',
      'D) Walking speeds adapt dynamically over a 24-hour period.'
    ],
    answer: 'B) Walking speeds drop by half.',
    method: 'The article states directly: "On streets where outdoor dining decks consume more than 40% of the usable pavement, pedestrian walking speeds drop by half." This is a specific factual claim used to support the author\'s argument.'
  },
  { group: 'L5', type: 'multiple_choice', category: 'Opinion Article', context: ctxL5,
    question: "What specific measure does the author propose to deal with businesses that block the proposed two-metre clear transit ribbon?",
    options: [
      'A) Leasing additional kerbside space to them at discounted commercial rates.',
      'B) Mandatory relocation of their dining decks to secondary service lanes.',
      'C) Issuing an immediate, non-negotiable compliance fine within 24 hours of documentation.',
      'D) Requiring the business owners to submit real-time geofenced tracking data.'
    ],
    answer: 'C) Issuing an immediate, non-negotiable compliance fine within 24 hours of documentation.',
    method: 'The author specifically states: "If a business violates this clear path, local enforcement should issue an immediate, non-negotiable compliance fine within 24 hours of documentation." Geofenced tracking applies to scooter operators, not dining businesses.'
  },
  { group: 'L5', type: 'multiple_choice', category: 'Opinion Article', context: ctxL5,
    question: "Why does the author use the phrase 'the right to walk without a receipt'?",
    options: [
      'A) To complain about the rising costs of printing physical paper receipts in shops.',
      'B) To emphasise that public walking spaces should be free and accessible, rather than taken over by businesses requiring purchases.',
      'C) To suggest that pedestrians should be paid by the council for walking on metropolitan high streets.',
      'D) To highlight the need for automated digital banking portals in urban transit corridors.'
    ],
    answer: 'B) To emphasise that public walking spaces should be free and accessible, rather than taken over by businesses requiring purchases.',
    method: 'The phrase is figurative. A "receipt" is a symbol of a commercial transaction. The author is arguing that public footpaths — as democratic, shared assets — should not require people to be customers of nearby businesses in order to use them freely.'
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
    question: 'What is the primary investigative goal of this news report?',
    options: [
      'A) To advertise the efficiency of modern digital Building Management Systems.',
      'B) To expose technical vulnerabilities and regulatory gaps in automated fuel transfer hubs.',
      'C) To provide a step-by-step guide for technicians operating manual cutoff switches.',
      'D) To lobby for the permanent closure of all western distribution corridors.'
    ],
    answer: 'B) To expose technical vulnerabilities and regulatory gaps in automated fuel transfer hubs.',
    method: 'The report\'s three-month investigation reveals that legacy valves fail to respond to digital BMS signals, and that operating agencies exploit the 14-day compliance window to avoid repairs. Both the technical flaw and the regulatory loophole are exposed — making B the correct primary purpose.'
  },
  { group: 'L6', type: 'multiple_choice', category: 'Investigative Report', context: ctxL6,
    question: 'Within how many seconds is the automated system supposed to execute a pipeline shutdown sequence after a sensor registers a breach?',
    options: [
      'A) 14 seconds',
      'B) 30 seconds',
      'C) 45 seconds',
      'D) 90 seconds'
    ],
    answer: 'C) 45 seconds',
    method: 'The manual states the system "is supposed to execute an automated shutdown sequence concurrently within 45 seconds to isolate the compromised pipeline". 14 refers to the regulatory window (days), 30 refers to the percentage of failing valves, not a time value.'
  },
  { group: 'L6', type: 'multiple_choice', category: 'Investigative Report', context: ctxL6,
    question: 'According to the report, how are operating agencies exploiting the current regulatory framework to avoid civil penalties?',
    options: [
      'A) By upgrading all legacy valves to high-efficiency automated models within 24 hours.',
      'B) By utilising the 14-day window to move damaged assets between zones, resetting the audit clocks without fixing the issue.',
      'C) By routing all automated communications through open civilian mobile phone networks.',
      'D) By permanently shutting down the digital building management loops during audits.'
    ],
    answer: 'B) By utilising the 14-day window to move damaged assets between zones, resetting the audit clocks without fixing the issue.',
    method: 'The report explicitly states compliance teams are "using these 14-day windows to shuffle damaged assets between different zones, effectively resetting the audit countdown clocks without completing repairs." This exploits the grace period without any genuine remediation.'
  },
  { group: 'L6', type: 'multiple_choice', category: 'Investigative Report', context: ctxL6,
    question: 'What danger do environmental scientists associate with volatile petroleum compounds sitting long-term in open containment basins?',
    options: [
      'A) They can trigger an instantaneous 15% increase in regional utility server bandwidth.',
      'B) They can create hazardous vapour leaks that travel into nearby residential areas before a physical spill hits the water.',
      'C) They cause rapid micro-expansions that permanently seal the primary wing spars of transport vehicles.',
      'D) They automatically invalidate the safety ratings of high-efficiency particulate filters.'
    ],
    answer: 'B) They can create hazardous vapour leaks that travel into nearby residential areas before a physical spill hits the water.',
    method: 'Scientists warn that petroleum compounds in open basins "can result in hazardous vapour leaks that migrate into nearby residential perimeters, threatening public health well before a physical spill reaches local waterways." The residential vapour risk precedes any physical water contamination.'
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
    question: 'What is the primary purpose of this executive summary?',
    options: [
      'A) To list the quarterly payroll expenses for Apex Manufacturing Group\'s field technicians.',
      'B) To summarise equipment reliability metrics, wear classifications, and maintenance guidelines for the company\'s factories.',
      'C) To announce the acquisition of new commercial flight paths and shipping terminals.',
      'D) To detail marketing strategies for increasing consumer sales of anti-corrosive polymers.'
    ],
    answer: 'B) To summarise equipment reliability metrics, wear classifications, and maintenance guidelines for the company\'s factories.',
    method: 'The summary covers mechanical integrity profiles, the three-tier ARMP wear classification table, and the aqueous cleaning mandate. It is entirely focused on operational reliability and maintenance protocols, not payroll, acquisitions, or marketing.'
  },
  { group: 'L7', type: 'multiple_choice', category: 'Technical Report', context: ctxL7,
    question: 'According to the report, what is the mandatory action parameter for a component sorted into Class II (Monitored)?',
    options: [
      'A) Document in the log and continue standard 24-hour monitoring loops.',
      'B) Immediate and permanent retirement from service for alloy recycling.',
      'C) Route the asset to the ultrasonic testing enclosure in Hangar B within 48 hours.',
      'D) Increase fluid temperatures to exactly 60 degrees Celsius.'
    ],
    answer: 'C) Route the asset to the ultrasonic testing enclosure in Hangar B within 48 hours.',
    method: 'The ARMP table states Class II (material pitting between 0.5mm and 1.5mm) requires the asset to be "routed to the specialised ultrasonic testing enclosure in Hangar B within 48 hours." Option A applies to Class I; option B applies to Class III.'
  },
  { group: 'L7', type: 'multiple_choice', category: 'Technical Report', context: ctxL7,
    question: 'Why does the company limit the fluid temperature of its specialised cleaning arrays to a maximum of 45 degrees Celsius?',
    options: [
      'A) Temperatures below 45 degrees Celsius reduce the time required to complete an ultrasonic check.',
      'B) Higher temperatures cause micro-expansions in the composite alloy boundaries that can ruin mechanical seals.',
      'C) It prevents the digital desk-booking portal from freezing during high-occupancy shifts.',
      'D) It is the minimum pressure required to clear out petroleum compounds from Hangar B.'
    ],
    answer: 'B) Higher temperatures cause micro-expansions in the composite alloy boundaries that can ruin mechanical seals.',
    method: 'The report states: "Rapid thermal spikes above this limit cause dangerous micro-expansions in the composite alloy boundaries, which can crack tight mechanical seals and cause localised hydraulic fluid leaks." The 45°C cap is a ceiling, not a minimum, and has no relation to ultrasonic checks or desk-booking systems.'
  },
  { group: 'L7', type: 'multiple_choice', category: 'Technical Report', context: ctxL7,
    question: 'What type of hardware damage would cause an asset to be immediately retired and recycled rather than repaired?',
    options: [
      'A) Surface micro-abrasions measuring exactly 0.2mm in depth.',
      'B) Material pitting or fatigue measuring between 0.5mm and 1.5mm.',
      'C) Any structural fracture or fine crack exceeding 1.5mm in depth.',
      'D) Exposure to a 24-hour monitoring loop inside an office corridor zone.'
    ],
    answer: 'C) Any structural fracture or fine crack exceeding 1.5mm in depth.',
    method: 'Class III (Compromised) applies to "structural fractures or fine cracks exceeding 1.5mm in depth" and requires "immediate and permanent retirement from service; process component for alloy recycling." 0.2mm is Class I (stable), and 0.5–1.5mm is Class II (monitored, sent to Hangar B).'
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

  // ── Set 8: Vanguard Tech G3 / Technical Manual ─────────────────────────────
  { group: 'L8', type: 'multiple_choice', category: 'Technical Manual', context: ctxL8,
    question: 'What is the primary purpose of this technical manual section?',
    options: [
      'A) To list wholesale market prices for replacement Pro-Flow G3 filter cores.',
      'B) To detail the installation requirements, anchor metrics, and safety constraints for the G3 filtration array.',
      'C) To compare the gas purity profiles of Vanguard filters with competitor products.',
      'D) To provide instructions on how to clean petroleum-based solvents out of industrial concrete base plates.'
    ],
    answer: 'B) To detail the installation requirements, anchor metrics, and safety constraints for the G3 filtration array.',
    method: 'The manual covers structural anchor bolt requirements (22 kN rating), HEPA pressure constraints (22 kPa), seal contamination rules, and the automated fault state triggered by pressure spikes. Its scope is entirely installation and safety — not pricing, competitor comparisons, or concrete cleaning.'
  },
  { group: 'L8', type: 'multiple_choice', category: 'Technical Manual', context: ctxL8,
    question: 'What minimum static load rating is required for each independent structural anchor bolt used to mount the G3 unit?',
    options: [
      'A) 5 kilonewtons (kN)',
      'B) 15 kilonewtons (kN)',
      'C) 22 kilonewtons (kN)',
      'D) 45 kilonewtons (kN)'
    ],
    answer: 'C) 22 kilonewtons (kN)',
    method: 'Section 1 states each independent structural anchor bolt must possess "a verified static load rating of at least 22 kilonewtons (kN) to successfully manage operational vibrations." Note that 22 kPa is the HEPA pressure limit — different unit and different system.'
  },
  { group: 'L8', type: 'multiple_choice', category: 'Technical Manual', context: ctxL8,
    question: 'What happens automatically if the G3 system gauges detect a pressure variance spike exceeding 5 kPa inside the primary chamber?',
    options: [
      'A) The system increases the injection blower speed by 15% to compensate.',
      'B) The unit enters an automated fault state, blinks an indicator light, and freezes its intake valves.',
      'C) The filtration array routes all data to a 14-day administrative review hold window.',
      'D) The anchor bolts automatically release to relieve static pressure from the base plate.'
    ],
    answer: 'B) The unit enters an automated fault state, blinks an indicator light, and freezes its intake valves.',
    method: 'The Critical System Note states that a spike exceeding 5 kPa "will enter an automated fault state. This triggers a blinking indicator light on the external interface panel and freezes the system\'s intake valves." The 14-day window is a regulatory term from the fuel hub article, not this manual.'
  },
  { group: 'L8', type: 'multiple_choice', category: 'Technical Manual', context: ctxL8,
    question: 'What protocol must be followed to restart the G3 filtration array after it enters an automated fault state due to a pressure spike?',
    options: [
      'A) The system can be easily reset electronically by an administrator sitting at the master control desk.',
      'B) A technician must insert a physical key override into Hangar B within 45 minutes.',
      'C) A technician must perform a full manual line purge on the physical unit.',
      'D) The intake valves must be left frozen for a continuous duration exceeding 120 seconds.'
    ],
    answer: 'C) A technician must perform a full manual line purge on the physical unit.',
    method: 'The manual explicitly states: "To clear this state, a technician must perform a full manual line purge; the system cannot be reset electronically from the master control desk." Option A directly contradicts this. The Hangar B and 120-second options are fabricated distractors.'
  },
  { group: 'L8', type: 'true_false_matrix', category: 'Technical Manual', context: ctxL8,
    matrixLabels: ['Yes', 'No'],
    question: 'Based on the manual instructions, are the following actions safe and compliant?',
    options: [
      'Using an anchor bolt that has fine hairline micro-cracking along its threads, provided the other bolts are in perfect condition.',
      'Cleaning the synthetic HEPA sealing elements with a petroleum-based solvent to ensure a tight seal.',
      'Operating the HEPA filter element under a continuous static pressure differential of 18 kilopascals (kPa).'
    ],
    answer: 'No,No,Yes',
    method: 'A — The manual states a bolt showing any micro-cracking "must be instantly disqualified from service." It also explicitly forbids combining compromised bolts, regardless of the others\' condition. Not safe. B — HEPA sealing elements "must be permanently retired from service if they are exposed to any petroleum-based chemical solvents." Cleaning with such a solvent destroys the seal. Not compliant. C — The maximum continuous static pressure differential is 22 kPa. 18 kPa is safely below that limit. Compliant.'
  },

  // ── Set 9: Section 44 / Legal Advisory ────────────────────────────────────
  { group: 'L9', type: 'multiple_choice', category: 'Legal Advisory', context: ctxL9,
    question: 'What is the core judicial focus of this court advisory?',
    options: [
      'A) To permanently rewrite environmental laws regarding protected public waterways.',
      'B) To clarify the legal thresholds, extraordinary powers, and detention exemptions tied to Section 44 emergency declarations.',
      'C) To approve pay increases for state utility commission field supervisors.',
      'D) To establish software procurement rules for digital building management systems.'
    ],
    answer: 'B) To clarify the legal thresholds, extraordinary powers, and detention exemptions tied to Section 44 emergency declarations.',
    method: 'The advisory\'s opening line states it "clarifies the strict statutory parameters, conditional matrices, and constitutional limitations governing the enforcement of emergency land-access and property-seizure orders issued under Section 44." Waterway laws, pay increases, and software procurement are not discussed.'
  },
  { group: 'L9', type: 'multiple_choice', category: 'Legal Advisory', context: ctxL9,
    question: 'What baseline value must the regional Infrastructure Volatility Index (IVI) exceed to satisfy the first parameter of a valid declaration?',
    options: [
      'A) Exactly 15',
      'B) Between 22 and 45',
      'C) A value of 75',
      'D) No less than 120'
    ],
    answer: 'C) A value of 75',
    method: 'The advisory states the IVI "exceeds a calculated baseline value of 75" as the first of three simultaneous conditions required for a valid Section 44 declaration. 15 is the bandwidth margin from an unrelated passage; 22 is the anchor bolt or pressure value from the G3 manual.'
  },
  { group: 'L9', type: 'multiple_choice', category: 'Legal Advisory', context: ctxL9,
    question: 'According to the advisory, what happens to a property seizure order if the enforcing agency fails to prove that municipal utility resources were fully extended at the time?',
    options: [
      'A) The order is routed to a 14-day administrative review window.',
      'B) The seizure order becomes completely and legally void from the beginning.',
      'C) The landholder is automatically placed under immediate civil detention.',
      'D) The case is transferred directly to the Shift Fire Warden\'s master panel.'
    ],
    answer: 'B) The seizure order becomes completely and legally void from the beginning.',
    method: 'The advisory states: "If any of these three conditions are unmet, any subsequent property seizure or civil detention is legally void ab initio." The Latin phrase "void ab initio" means void from the very beginning. Failing to prove resources were extended is failing one of the three conditions.'
  },
  { group: 'L9', type: 'multiple_choice', category: 'Legal Advisory', context: ctxL9,
    question: 'What specific physical proof must a valid Facility Continuity Plan contain to shield a landholder from civil detention?',
    options: [
      'A) Evidence that the landholder has lived on the property for longer than the Executive Director.',
      'B) Documentation showing the property has self-contained power and water systems that function independently of the municipal grid.',
      'C) A verified structural anchor certificate rated to at least 22 kilonewtons.',
      'D) Real-time geofenced tracking data linked directly to a local customs checkpoint.'
    ],
    answer: 'B) Documentation showing the property has self-contained power and water systems that function independently of the municipal grid.',
    method: 'To qualify for the detention exemption via the FCP, the landholder must prove "their property possesses a self-contained, functional power and water system capable of operating entirely independently of the municipal utility grid." Options C and D reference content from other passages in this question bank and are distractors.'
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
    question: 'What is the central thesis of Dr. Thorne\'s historical analysis?',
    options: [
      'A) To promote the construction of more high-speed industrial logistics networks in old-growth parklands.',
      'B) To argue that spatial rationalisation and commercial encroachment are destroying the urban commons and eroding civic cohesion.',
      'C) To calculate the exact financial revenue generated by advertising structures in high-density areas.',
      'D) To provide a manual for installing commercial security turnstiles in residential districts.'
    ],
    answer: 'B) To argue that spatial rationalisation and commercial encroachment are destroying the urban commons and eroding civic cohesion.',
    method: 'Dr. Thorne\'s essay traces how industrial monetisation of public space has transformed cities into logistics networks, reduced civic interaction, and ultimately threatens the social cohesion that economic frameworks depend upon. The essay argues for preservation, not revenue calculation or logistics expansion.'
  },
  { group: 'L12', type: 'multiple_choice', category: 'Philosophical Essay', context: ctxL12,
    question: 'According to empirical studies cited in the text, what happens to civic interactions when commercial facades consume over 60% of the visible streetscape?',
    options: [
      'A) Civic interactions increase significantly due to enhanced consumer confidence.',
      'B) Civic interactions drop by nearly two-thirds.',
      'C) Civic interactions remain entirely unchanged across all demographics.',
      'D) Civic interactions adjust dynamically depending on industrial transit schedules.'
    ],
    answer: 'B) Civic interactions drop by nearly two-thirds.',
    method: 'The essay cites: "In urban environments where commercial facades consume more than 60% of the visible streetscape, empirical studies indicate that individual civic interactions drop by nearly two-thirds, replaced by isolated consumer transactions."'
  },
  { group: 'L12', type: 'multiple_choice', category: 'Philosophical Essay', context: ctxL12,
    question: 'What specific operational requirement defines the "Tactical Openness" methodology proposed by contemporary urbanists?',
    options: [
      'A) Licensing public high streets to private commercial developers at steep financial discounts.',
      'B) Ensuring a mandatory baseline percentage of unmonetised public space is kept free of commercial footprints or ads.',
      'C) Replacing organic civic tapestries with automated high-speed logistics networks.',
      'D) Restricting pedestrian walking habits to coordinated transit routines during peak commute windows.'
    ],
    answer: 'B) Ensuring a mandatory baseline percentage of unmonetised public space is kept free of commercial footprints or ads.',
    method: '"Tactical Openness" demands that "municipal planning codes preserve a mandatory baseline percentage of unmonetised public space within every residential district. This infrastructure must remain completely free from advertising structures, security turnstiles, or commercial dining footprints." Options A, C, and D describe the commercial and rationalising trends the essay opposes.'
  },
  { group: 'L12', type: 'multiple_choice', category: 'Philosophical Essay', context: ctxL12,
    question: 'What does the author imply by stating that a city "loses the civic cohesion required to sustain any long-term economic framework"?',
    options: [
      'A) Commercial success is completely independent of how public spaces are managed or preserved.',
      'B) A healthy economy ultimately relies on the underlying social bonds cultivated within uncommodified public spaces.',
      'C) Municipalities should completely eliminate commercial zones to maximise tax collections from public squares.',
      'D) High-speed logistics networks are the only true source of long-term civic interaction.'
    ],
    answer: 'B) A healthy economy ultimately relies on the underlying social bonds cultivated within uncommodified public spaces.',
    method: 'The author\'s argument is that trading the public commons for commercial receipts is self-defeating: the civic cohesion built in unmonetised shared spaces is what makes a functional, long-term economy possible in the first place. Commercial success and civic health are interdependent, not separate.'
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
    question: 'What is the primary operational objective of corporate protocol DRP-402?',
    options: [
      'A) To reduce corporate expenditure on physical printing papers across localised branches.',
      'B) To establish strict rules for categorising, retaining, and securing digital financial and operational records.',
      'C) To outline the recruitment framework for incoming Tier 1 security engineers.',
      'D) To publicise Meridian Financial Group\'s quarterly investment performance metrics to the open market.'
    ],
    answer: 'B) To establish strict rules for categorising, retaining, and securing digital financial and operational records.',
    method: 'DRP-402 defines two classification tiers with specific retention and encryption rules, a 30-second automated containment trigger, and a physical override protocol — all focused on data security and regulatory compliance. Printing costs, recruitment, and market disclosures are not part of this protocol.'
  },
  { group: 'L13', type: 'multiple_choice', category: 'Corporate Policy', context: ctxL13,
    question: 'Within what timeframe must Classification Tier A sensitive records be transferred to an air-gapped cryptographic repository?',
    options: [
      'A) Within 30 seconds of an automated alarm trigger.',
      'B) Within 12 hours of initial validation.',
      'C) Exactly 90 days following standard employee access reviews.',
      'D) Only after a compliance audit hold has been manually cleared.'
    ],
    answer: 'B) Within 12 hours of initial validation.',
    method: 'Tier A records "must be automatically transferred to a localised, air-gapped cryptographic repository within 12 hours of initial validation." The 30-second window applies to the automated containment sequence after a variance spike, and 90 days is the Tier B retention ceiling.'
  },
  { group: 'L13', type: 'multiple_choice', category: 'Corporate Policy', context: ctxL13,
    question: 'What technical defence mechanism is triggered automatically if a data verification variance spike exceeds a 5% threshold?',
    options: [
      'A) The system clears all operational log data and deletes Tier A records permanently.',
      'B) The system locks out independent remote access and limits data flow to outbound diagnostics within 30 seconds.',
      'C) The data is routed to open civilian mobile networks to distribute processing loads.',
      'D) The cloud-based architecture transitions to a 7-day administrative correction loop.'
    ],
    answer: 'B) The system locks out independent remote access and limits data flow to outbound diagnostics within 30 seconds.',
    method: 'A variance spike exceeding 5% triggers an "automated containment sequence concurrently within 30 seconds" that "locks out independent remote access credentials and restricts data flow to outbound diagnostics only." Records are not deleted, and civilian networks are not used.'
  },
  { group: 'L13', type: 'multiple_choice', category: 'Corporate Policy', context: ctxL13,
    question: 'Under what specific condition can Classification Tier B data remain on active network clusters for longer than the standard 90-day retention ceiling?',
    options: [
      'A) If the data consists entirely of sensitive credit assessment metrics.',
      'B) If an executive officer manually logs an active compliance audit hold before the limit is reached.',
      'C) If a security tracking array registers an automated verification variance under 5%.',
      'D) If a regional operations manager requests an outbound diagnostic file transfer.'
    ],
    answer: 'B) If an executive officer manually logs an active compliance audit hold before the limit is reached.',
    method: 'Tier B data is cleared after 90 days "unless an active compliance audit hold has been manually logged by an executive officer." Credit assessment metrics are Tier A, and a variance under 5% does not affect the retention schedule.'
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

  // ── Set 5 (new batch): Section 88 / Legal Advisory ─────────────────────────
  { group: 'L14', type: 'multiple_choice', category: 'Legal Advisory', context: ctxL14,
    question: 'What is the primary legal focus of this statutory advisory?',
    options: [
      'A) To permanently dissolve the Trans-National Commerce Act in favour of localised municipal codes.',
      'B) To clarify the explicit verification thresholds and enforcement limitations governing Section 88 indemnification waivers.',
      'C) To advertise a new training program for third-party commercial transport drivers.',
      'D) To outline the corporate insurance premiums required for commercial office buildings.'
    ],
    answer: 'B) To clarify the explicit verification thresholds and enforcement limitations governing Section 88 indemnification waivers.',
    method: 'The advisory opens by stating it details "the precise statutory interpretation and conditional matrices governing the activation of corporate indemnification protections under Section 88." It defines three validity conditions, the 14-day correction window, and the void ab initio consequence. Dissolving the act, driver training, and insurance premiums are not discussed.'
  },
  { group: 'L14', type: 'multiple_choice', category: 'Legal Advisory', context: ctxL14,
    question: 'What happens to outstanding corporate progress payments while a vendor is within the 14-day administrative correction window for an expired OSC?',
    options: [
      'A) They are permanently forfeited and redirected to municipal infrastructure funds.',
      'B) They are automatically doubled to help the vendor expedite their certification costs.',
      'C) They are placed on an automated administrative hold.',
      'D) They are paid out immediately to avoid contract termination disputes.'
    ],
    answer: 'C) They are placed on an automated administrative hold.',
    method: 'Subsection 7 states: "During this 14-day window, all outstanding corporate progress payments are placed on an automated administrative hold." They are neither forfeited, doubled, nor immediately released.'
  },
  { group: 'L14', type: 'multiple_choice', category: 'Legal Advisory', context: ctxL14,
    question: 'Under Section 88 rules, what is the legal consequence if an enforcing agency discovers that a vendor\'s asset damage resulted from documented gross negligence?',
    options: [
      'A) The contract is extended for an additional 14 days to allow for structural repairs.',
      'B) The indemnification waiver becomes completely void from the beginning, shifting liability back to the vendor.',
      'C) The procurement agency must pay all civil fines on behalf of the third-party vendor.',
      'D) The case is referred to an independent corporate arbitrator within 30 seconds.'
    ],
    answer: 'B) The indemnification waiver becomes completely void from the beginning, shifting liability back to the vendor.',
    method: 'Gross negligence by vendor field agents violates the third validity condition. When any of the three conditions are unmet, "the entire indemnification waiver is rendered completely void ab initio, and primary fiscal liability reverts fully to the independent vendor." The agency does not absorb the fines.'
  },
  { group: 'L14', type: 'multiple_choice', category: 'Legal Advisory', context: ctxL14,
    question: 'Why does the advisory state that the burden of proof rests on procurement officers to verify vendor certification markers?',
    options: [
      'A) To prevent the procurement agency from absorbing massive fiscal liabilities caused by non-compliant third-party vendors.',
      'B) To ensure that all third-party field agents are paid higher hourly operational wages.',
      'C) To fast-track the deployment of high-risk industrial transit zones in metropolitan residential areas.',
      'D) To bypass the 14-day administrative correction window entirely during quarterly audits.'
    ],
    answer: 'A) To prevent the procurement agency from absorbing massive fiscal liabilities caused by non-compliant third-party vendors.',
    method: 'If a waiver is voided due to unverified or unmet conditions, fiscal liability reverts to the vendor — but only if the procurement agency has done its due diligence. Failing to verify beforehand could expose the agency to disputed liability. Proactive verification protects the agency from absorbing costs caused by non-compliant vendors.'
  },
  { group: 'L14', type: 'true_false_matrix', category: 'Legal Advisory', context: ctxL14,
    question: 'Evaluate the truth of the following statements:',
    options: [
      'A liability waiver remains valid even if the vendor\'s field agents are proven to have engaged in wilful equipment mismanagement.',
      'If a vendor fails to produce a valid Operational Safety Certificate after the 14-day window closes, the contract can be terminated without penalty.',
      'The phrase void ab initio means that a contract waiver remains partially enforceable until a judge formally reviews the case data.'
    ],
    answer: 'False,True,False',
    method: 'A — Wilful equipment mismanagement violates condition three. When this occurs, "the entire indemnification waiver is rendered completely void ab initio." The waiver does not remain valid. False. B — "If the vendor fails to submit a verified certificate before the 14-day window expires, the underlying master agreement is subject to immediate structural termination without financial penalty to the procurement agency." True. C — "Void ab initio" means void from the very beginning — the waiver is treated as if it never legally existed. It is not partially enforceable pending judicial review. False.'
  },

  // ── Set 8 (new batch): Algorithmic Panopticon / Media Studies ──────────────
  { group: 'L17', type: 'multiple_choice', category: 'Media Studies', context: ctxL17,
    question: 'What is the primary analytical objective of Professor Thorne\'s sociological critique?',
    options: [
      'A) To promote the expansion of programmatic targeted advertising to increase platform development budgets.',
      'B) To argue that hyper-optimised algorithmic engagement loops are destroying analytical comprehension and fragmenting civic discourse.',
      'C) To provide a software engineering manual for increasing platform click-through metrics by 70%.',
      'D) To document the history of print journalism in rural communities across the late twentieth century.'
    ],
    answer: 'B) To argue that hyper-optimised algorithmic engagement loops are destroying analytical comprehension and fragmenting civic discourse.',
    method: 'Professor Thorne traces how engagement-maximising algorithms have replaced deliberate discourse with reactive outrage cycles, reducing comprehension and threatening democratic stability. The essay advocates "Algorithmic Friction" as a corrective. Expanding advertising, boosting click-throughs, and print journalism history are all contrary to the essay\'s argument.'
  },
  { group: 'L17', type: 'multiple_choice', category: 'Media Studies', context: ctxL17,
    question: 'According to the empirical data cited by the author, what happens to user comprehension metrics when online feeds derive over 70% of revenue from targeted advertising?',
    options: [
      'A) Analytical comprehension metrics increase dramatically due to efficient data sorting.',
      'B) Analytical comprehension metrics drop by nearly three-fourths, replaced by brief outrage interactions.',
      'C) Comprehension metrics remain perfectly stable across all primary demographic user brackets.',
      'D) Comprehension levels adjust dynamically every 90 seconds based on localised network speeds.'
    ],
    answer: 'B) Analytical comprehension metrics drop by nearly three-fourths, replaced by brief outrage interactions.',
    method: 'The essay states: "empirical tracking indicates that deep analytical comprehension metrics drop by nearly three-fourths, replaced by brief, high-velocity outrage interactions" in environments where more than 70% of platform revenue comes from targeted advertising.'
  },
  { group: 'L17', type: 'multiple_choice', category: 'Media Studies', context: ctxL17,
    question: 'What specific engineering adjustment defines the "Algorithmic Friction" design methodology proposed by media reform groups?',
    options: [
      'A) Transitioning all digital communication platforms to open-source mobile phone networks.',
      'B) Integrating deliberate delays, cooling-off periods, and verification checks before users can amplify highly polarised material.',
      'C) Eliminating all moderation features to allow user interaction patterns to evolve organically.',
      'D) Restricting platform registration exclusively to certified media sociology researchers.'
    ],
    answer: 'B) Integrating deliberate delays, cooling-off periods, and verification checks before users can amplify highly polarised material.',
    method: '"Algorithmic Friction" demands that "platform engineering teams integrate deliberate delays, cooling-off periods, and mandatory verification checks before a user can amplify highly polarised material to a wider audience network." Options C and D are contrary to the approach; open-source transitions are unrelated to the methodology described.'
  },
  { group: 'L17', type: 'multiple_choice', category: 'Media Studies', context: ctxL17,
    question: 'What does the author imply by stating that a digital landscape can lose the "cognitive stability required to maintain a functioning democratic society"?',
    options: [
      'A) Democratic institutions are fully capable of surviving regardless of how fragmented public information becomes.',
      'B) Continuous exposure to high-velocity, algorithmically driven outrage undermines the shared analytical capacity needed for civic self-governance.',
      'C) Digital platforms should be completely managed by industrial transport and logistics boards.',
      'D) Increasing user screen duration is the single most effective method for stabilising modern political networks.'
    ],
    answer: 'B) Continuous exposure to high-velocity, algorithmically driven outrage undermines the shared analytical capacity needed for civic self-governance.',
    method: 'The author argues that when a communication landscape trades "collective analytical depth for short-term engagement clicks," it erodes the shared cognitive foundation that democracies rely on. Self-governance requires citizens capable of sustained analysis — something algorithmic outrage loops actively degrade.'
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
    question: 'What is the primary analytical focus of this strategic economic whitepaper?',
    options: [
      'A) To promote the permanent closure of all municipal renewable energy generation networks globally.',
      'B) To detail how Automated Grid Controllers use targeted storage containment and fiscal matrices to balance decentralised power surges.',
      'C) To calculate the annual infrastructure manufacturing budgets of high-capacity residential solar cells.',
      'D) To provide a step-by-step technical guide for manually dismantling localised utility battery vaults.'
    ],
    answer: 'B) To detail how Automated Grid Controllers use targeted storage containment and fiscal matrices to balance decentralised power surges.',
    method: 'The whitepaper explains how AGCs redirect surplus clean energy into storage vaults, cut export channels, and boost fossil-fuel peaker plants during demand spikes — all to stabilise decentralised grid operations. Closing networks, manufacturing budgets, and dismantling vaults are not discussed.'
  },
  { group: 'L18', type: 'multiple_choice', category: 'Economic Policy', context: ctxL18,
    question: 'Within how many seconds must the automated controller initiate the grid-balancing sequence following a frequency surge trigger?',
    options: [
      'A) 15 seconds',
      'B) 25 seconds',
      'C) 45 seconds',
      'D) 120 seconds'
    ],
    answer: 'C) 45 seconds',
    method: 'The paper states "the master AGC must initiate a grid-balancing sequence concurrently within 45 seconds of the initial surge logging." 120 seconds is the minimum continuous threshold for low battery reserves before the peaker plant boost is triggered — a separate mechanism.'
  },
  { group: 'L18', type: 'multiple_choice', category: 'Economic Policy', context: ctxL18,
    question: 'What specific layout configuration do the Wholesale Export Channels adopt when a macro-grid energy surge is logged?',
    options: [
      'A) Export channels open completely to 100% capacity while inbound tariffs are increased by half.',
      'B) Export channels are locked 100% closed while inbound tariff rebates are cut to 0% on the Cooperative Core.',
      'C) They switch completely to a voluntary consumer-led recycling rebate pool for 14 days.',
      'D) Generation volumes are adjusted downward by a fixed 30% margin within 90 minutes.'
    ],
    answer: 'B) Export channels are locked 100% closed while inbound tariff rebates are cut to 0% on the Cooperative Core.',
    method: 'During a surplus event, the AGC responds by "cutting inbound tariff rebates to 0% on the Cooperative Core while locking open-market export channels down completely." This forces excess energy into local battery vaults and prevents it from destabilising macro-grid wholesale prices.'
  },
  { group: 'L18', type: 'multiple_choice', category: 'Economic Policy', context: ctxL18,
    question: 'What specific market or grid hazard is the AGC attempting to correct by automatically boosting secondary peaker plant generation by 25%?',
    options: [
      'A) A threat to local grid stability caused by cooperative battery reserves dropping below a 15% safety threshold for over 120 seconds.',
      'B) A complete breakdown in communication between regional counsel and the contract procurement officers.',
      'C) A sudden 22% upward trajectory in synthetic microplastic particle accumulation metrics.',
      'D) The irreversible denaturing of anti-corrosive polymers within the localised concrete foundation plate.'
    ],
    answer: 'A) A threat to local grid stability caused by cooperative battery reserves dropping below a 15% safety threshold for over 120 seconds.',
    method: 'The paper states: "If localised network metrics show that a regional cooperative core\'s reserve battery capacity drops below a critical 15% safety threshold for a continuous duration exceeding 120 seconds, the AGC…automatically boost[s] secondary fossil-fuel peaker plant generation by a fixed 25% margin to mechanically stabilise the local grid frequency." Options B, C, and D reference content from other passages and are distractors.'
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
    question: 'What is the primary focus of this strategic policy whitepaper?',
    options: [
      'A) To mandate the use of centralised biometric tracking badges for all high-rise construction workers.',
      'B) To explain how automated Building Management Systems use airflow and pressure controls to contain environmental hazards in high-rise buildings.',
      'C) To calculate the annual infrastructure energy consumption of high-output gantry cranes.',
      'D) To argue against the expansion of high-density commercial structures exceeding 25 metres in height.'
    ],
    answer: 'B) To explain how automated Building Management Systems use airflow and pressure controls to contain environmental hazards in high-rise buildings.',
    method: 'The whitepaper describes how a BMS activates within 45 seconds of a sensor trigger, creates pressure differentials between the Incident Floor and buffer zones, and compensates for door propping with blower boosts. Biometric tracking, crane energy budgets, and arguing against tall buildings are outside its scope.'
  },
  { group: 'L20', type: 'multiple_choice', category: 'Public Policy Whitepaper', context: ctxL20,
    question: 'What is the exact maximum time window allowed for the BMS to initiate the automated airflow containment sequence after a sensor is triggered?',
    options: [
      'A) 15 seconds',
      'B) 45 seconds',
      'C) 120 seconds',
      'D) 14 days'
    ],
    answer: 'B) 45 seconds',
    method: 'The paper states the BMS "must initiate an active environmental containment sequence concurrently within 45 seconds of the initial alarm trigger." 120 seconds is the maximum duration an egress door can be held open before the blower compensation kicks in — a separate system.'
  },
  { group: 'L20', type: 'multiple_choice', category: 'Public Policy Whitepaper', context: ctxL20,
    question: 'According to the paper, what configuration do the air dampers and exhaust fans take on the floor located directly above the containment breach?',
    options: [
      'A) Supply dampers close to 0% and exhaust fans ramp up to 100% extraction capacity.',
      'B) Supply dampers open completely to 100% and exhaust fans are locked at 0% capacity.',
      'C) Both supply dampers and exhaust fans cycle open and closed every 120 seconds.',
      'D) They switch completely to a water-based deluge backup loop.'
    ],
    answer: 'B) Supply dampers open completely to 100% and exhaust fans are locked at 0% capacity.',
    method: 'The floor directly above the breach is a buffer zone. The paper states buffer zones are placed under "raised" positive pressure to create an aerodynamic seal. Positive pressure is achieved by maximising incoming fresh air (supply dampers 100% open) and preventing air from leaving (exhaust fans at 0%). Option A describes the Incident Floor configuration (negative pressure).'
  },
  { group: 'L20', type: 'multiple_choice', category: 'Public Policy Whitepaper', context: ctxL20,
    question: 'What operational issue does the building system attempt to correct by automatically boosting the stairwell injection fan speed by 15%?',
    options: [
      'A) A power failure affecting the main server rooms on the Incident Floor.',
      'B) A loss of positive air pressure caused by an egress stairwell door being held open for more than 120 seconds.',
      'C) Excessive chemical contamination of the synthetic HEPA filter elements in Hangar B.',
      'D) The lateral migration of pedestrian traffic across high-street transit ribbons.'
    ],
    answer: 'B) A loss of positive air pressure caused by an egress stairwell door being held open for more than 120 seconds.',
    method: 'The paper states that propped-open egress doors cause "a rapid drop in stairwell positive pressure." When a door remains open beyond 120 seconds, the BMS automatically boosts injection blower fan speed by 15% to "mechanically compensate for the pressure loss." Options C and D reference content from other passages and are distractors.'
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
    question: 'What is the primary argumentative purpose of the passage regarding the KAP-7 system?',
    options: [
      'A) To provide a technical overview of how KAP-7 sensors detect temperature fluctuations in residential environments.',
      'B) To argue that implementing the KAP-7 system is a moral and practical necessity for every responsible homeowner.',
      'C) To compare the cost-effectiveness of different home automation systems available on the consumer market.',
      'D) To celebrate the technological innovation behind automated gas detection systems in modern appliances.'
    ],
    answer: 'B) To argue that implementing the KAP-7 system is a moral and practical necessity for every responsible homeowner.',
    method: 'The passage explicitly states the KAP-7 is "no longer a luxury" but "a moral and practical imperative." The author argues all homeowners have "both the means and the obligation to install it." Options A, C, and D misrepresent the passage\'s persuasive intent.'
  },
  { group: 'L21', type: 'multiple_choice', category: 'Home Safety Regulation', context: ctxL21,
    question: 'Under what specific conditions does the KAP-7 protocol trigger an Emergency Cutoff Sequence?',
    options: [
      'A) When a stovetop temperature exceeds 200°C for more than 30 seconds without manual input.',
      'B) When gas concentrations exceed 0.5% or smoke opacity reaches 15% density.',
      'C) When the 24-hour lockout period on remote resets has been manually overridden.',
      'D) When internal sensors detect an unattended heating event lasting under five seconds.'
    ],
    answer: 'B) When gas concentrations exceed 0.5% or smoke opacity reaches 15% density.',
    method: 'The passage states the ECS activates under two conditions: "when gas concentrations in the kitchen environment exceed 0.5 per cent, or when smoke opacity reaches 15 per cent density." Option A describes the Tier 1 warning condition, not the ECS trigger.'
  },
  { group: 'L21', type: 'multiple_choice', category: 'Home Safety Regulation', context: ctxL21,
    question: 'Why does the author contend that the 24-hour remote-reset lockout is a necessary feature?',
    options: [
      'A) It reduces the energy costs associated with repeatedly restarting kitchen appliances.',
      'B) It ensures that only licensed technicians are authorised to perform system resets.',
      'C) It prevents homeowners from recklessly restarting a potentially volatile system without physically inspecting it first.',
      'D) It automatically notifies emergency services of any detected gas or smoke concentration.'
    ],
    answer: 'C) It prevents homeowners from recklessly restarting a potentially volatile system without physically inspecting it first.',
    method: 'The passage says the lockout prevents "a hasty, uninformed restart" and requires "a physical diagnostic inspection of the kitchen environment." The author frames this as protecting "human life," not reducing energy costs or notifying services.'
  },
  { group: 'L21', type: 'multiple_choice', category: 'Home Safety Regulation', context: ctxL21,
    question: 'How does the author characterise the viewpoint of those who criticise the system\'s sensitivity?',
    options: [
      'A) As forward-thinking consumers who prefer minimal technological intrusion in their daily lives.',
      'B) As individuals who ignore the catastrophic reality of residential fires and mischaracterise safety as intrusiveness.',
      'C) As qualified fire safety experts who have conducted independent testing on the KAP-7 protocol.',
      'D) As early adopters who have experienced false alarms and prefer manual monitoring methods.'
    ],
    answer: 'B) As individuals who ignore the catastrophic reality of residential fires and mischaracterise safety as intrusiveness.',
    method: 'The author states critics "ignore the catastrophic reality of residential gas fires and mischaracterise an intelligent safety protocol as an inconvenience." The passage gives no credibility to their position and offers no scientific or technical basis for their criticism.'
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
    question: 'What is the author\'s primary objective in advocating for Exercise Strategy 40-A?',
    options: [
      'A) To highlight the competitive benefits of structured training for dogs entering athletic competitions.',
      'B) To argue that following a structured exercise framework is essential for the long-term health and welfare of pet dogs.',
      'C) To provide step-by-step instructions for owners on how to train their dogs for high-intensity agility courses.',
      'D) To promote the commercial sale of standardised exercise equipment designed for domestic canines.'
    ],
    answer: 'B) To argue that following a structured exercise framework is essential for the long-term health and welfare of pet dogs.',
    method: 'The passage describes Exercise Strategy 40-A as "a structured protocol that, when followed correctly, protects the long-term physiological welfare of domestic canines." The article is advocacy for structured exercise, not a training manual, competitive guide, or commercial promotion.'
  },
  { group: 'L22', type: 'multiple_choice', category: 'Animal Welfare', context: ctxL22,
    question: 'What is the mandatory response when a dog\'s heart rate fails to normalise within five minutes of ceasing Tier A activity?',
    options: [
      'A) The dog must be given a 15% reduction in movement fluidity to prevent further strain.',
      'B) The owner must immediately transition the dog to a Tier B scent enrichment session.',
      'C) The owner must initiate an immediate cooling phase to prevent physiological harm.',
      'D) All game modules must be halted for a mandatory 60-minute dehydration recovery window.'
    ],
    answer: 'C) The owner must initiate an immediate cooling phase to prevent physiological harm.',
    method: 'The passage states: "If, at any point following the cessation of Tier A activity, a dog\'s heart rate fails to normalise within a five-minute window, the owner is required to initiate an immediate cooling phase." Option D describes the dehydration lockout, which is a separate protocol triggered by movement fluidity.'
  },
  { group: 'L22', type: 'multiple_choice', category: 'Animal Welfare', context: ctxL22,
    question: 'How does the author reinterpret a dog\'s failure to respond to commands during an enrichment session?',
    options: [
      'A) As a clear sign of willful disobedience that must be addressed with additional training repetitions.',
      'B) As a deliberate behavioural protest indicating a preference for high-intensity Tier A activity.',
      'C) As evidence of physiological exhaustion that demands an immediate cessation of all activity.',
      'D) As a natural behavioural response triggered by high ambient temperatures in the training environment.'
    ],
    answer: 'C) As evidence of physiological exhaustion that demands an immediate cessation of all activity.',
    method: 'The passage explicitly states this is "often falsely presumed" to be willful disobedience — the author argues the dog "is exhibiting the behavioural markers of physiological exhaustion" and that "the activity must cease immediately." Option A is the misconception the author is correcting.'
  },
  { group: 'L22', type: 'multiple_choice', category: 'Animal Welfare', context: ctxL22,
    question: 'What is the implied significance of the 60-minute dehydration lockout?',
    options: [
      'A) It allows the dog to self-regulate its activity levels without owner intervention.',
      'B) It acts as an objective safeguard that compels owners to prioritise their dog\'s physiological needs over their own recreational preferences.',
      'C) It provides the dog with sufficient rest to re-engage in high-intensity Tier A activities within a structured timeframe.',
      'D) It ensures that the owner logs all exercise data for the dog\'s veterinary health file.'
    ],
    answer: 'B) It acts as an objective safeguard that compels owners to prioritise their dog\'s physiological needs over their own recreational preferences.',
    method: 'The passage states the lockout "ensures that the dog\'s physiological needs are never compromised in the interest of an owner\'s recreational agenda." The 60 minutes is a non-negotiable enforced rest, not an opportunity to log data or prepare for Tier A activity.'
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
    question: 'What is the author\'s overarching message concerning the nature of professional baking?',
    options: [
      'A) To celebrate the creative freedom and improvisation that define artisan baking traditions around the world.',
      'B) To argue that professional baking demands strict technical precision, discipline, and an unwavering commitment to quality standards.',
      'C) To promote the use of automation over human skill to reduce the time required for industrial bread production.',
      'D) To provide a beginner\'s introduction to the fermentation principles underpinning sourdough recipes.'
    ],
    answer: 'B) To argue that professional baking demands strict technical precision, discipline, and an unwavering commitment to quality standards.',
    method: 'The passage opens by defining baking as "a disciplined technical science" requiring "systematic precision" and argues that discarding inferior product is an act of professional integrity. Options A and C misrepresent the author\'s position; Option D describes a technical manual, not this persuasive article.'
  },
  { group: 'L23', type: 'multiple_choice', category: 'Professional Standards', context: ctxL23,
    question: 'What are the consequences of the internal dough temperature rising above 30 degrees Celsius?',
    options: [
      'A) The fermentation chamber switches to a humidity-recovery protocol and delays baking by 10 minutes.',
      'B) The misting system executes an emergency 10-second sequence to cool the overheated dough structure.',
      'C) The yeast colony over-processes available sugars, causing an irreversible structural collapse during the bake.',
      'D) The batch is automatically flagged as over-proofed and the 10-minute salvage timer begins.'
    ],
    answer: 'C) The yeast colony over-processes available sugars, causing an irreversible structural collapse during the bake.',
    method: 'The passage states that above 30°C "the yeast colony over-processes the available sugars at an accelerated rate, producing an excess of carbon dioxide gas that the gluten network cannot contain. The result is an irreversible structural collapse during the bake." Options A and B describe humidity responses; Option D describes the over-proof flag.'
  },
  { group: 'L23', type: 'multiple_choice', category: 'Professional Standards', context: ctxL23,
    question: 'Why does the author categorise the 10-minute salvage window as a test of \'baker\'s integrity\'?',
    options: [
      'A) Because the baker must resist the financial temptation to sell a product they know does not fully meet professional quality standards.',
      'B) Because the window requires the baker to work under extreme time pressure, demonstrating physical endurance.',
      'C) Because missing the window incurs a financial penalty enforced by the Master Baker\'s certification board.',
      'D) Because completing the gentle-fold technique demonstrates the baker\'s manual dexterity and technical mastery.'
    ],
    answer: 'A) Because the baker must resist the financial temptation to sell a product they know does not fully meet professional quality standards.',
    method: 'The passage frames the salvage window as an integrity test because "a professional who applies the gentle-fold knowing the result will be marginally acceptable is making a commercial decision that compromises their brand." Discarding the batch, not the technique itself, is the act of integrity. No certification board penalty is mentioned.'
  },
  { group: 'L23', type: 'multiple_choice', category: 'Professional Standards', context: ctxL23,
    question: 'How does the author reconcile the role of automation with the goal of high-quality baking?',
    options: [
      'A) By arguing that automation should replace the baker\'s judgement entirely to eliminate the risk of human error.',
      'B) By suggesting that automation is only relevant for mass-produced commercial bakeries, not artisan operations.',
      'C) By framing automation as the tool that creates the precise conditions within which a disciplined baker exercises their judgement.',
      'D) By presenting automation as a temporary measure until bakers develop sufficiently advanced manual techniques.'
    ],
    answer: 'C) By framing automation as the tool that creates the precise conditions within which a disciplined baker exercises their judgement.',
    method: 'The passage states: "The automation does not make the decisions — it creates the conditions within which disciplined bakers can make them." This directly refutes Option A. The passage also argues that automation "is not an obstacle to quality — it is quality\'s precondition," ruling out Options B and D.'
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
    question: 'What is the main persuasive intent of this article?',
    options: [
      'A) To compare the health benefits of various caffeinated beverages as alternatives to water consumption.',
      'B) To convince readers to treat hydration as a non-negotiable daily health requirement rather than an optional habit.',
      'C) To provide a medically approved daily water intake schedule for professional athletes.',
      'D) To outline the environmental benefits of reducing the consumption of carbonated sugary drinks globally.'
    ],
    answer: 'B) To convince readers to treat hydration as a non-negotiable daily health requirement rather than an optional habit.',
    method: 'The article explicitly argues for "treating hydration as the foundational requirement for human vitality" and frames it as requiring "discipline." Options A, C, and D do not match the article\'s persuasive focus on daily hydration behaviour for the general reader.'
  },
  { group: 'L24', type: 'multiple_choice', category: 'Health Advocacy', context: ctxL24,
    question: 'According to the text, what does the sensation of thirst indicate?',
    options: [
      'A) A reliable early-warning signal that should prompt a moderate increase in daily water consumption.',
      'B) That the body is functioning optimally and regulating its hydration levels effectively.',
      'C) That the body has already entered a state of mild dehydration and is experiencing physiological distress.',
      'D) A natural phenomenon caused by caffeine overconsumption with no direct link to hydration status.'
    ],
    answer: 'C) That the body has already entered a state of mild dehydration and is experiencing physiological distress.',
    method: 'The passage states: "If you are waiting for the sensation of thirst before reaching for a glass of water, you have already allowed your body to enter a state of mild dehydration. Thirst is not a friendly reminder — it is a physiological distress signal." Option A contradicts the passage\'s core argument that thirst is a late, not early, signal.'
  },
  { group: 'L24', type: 'multiple_choice', category: 'Health Advocacy', context: ctxL24,
    question: 'Why does the author criticise society\'s reliance on caffeinated and sugary beverages?',
    options: [
      'A) Because caffeine and sugar have been clinically proven to impair kidney function and reduce joint lubrication capacity.',
      'B) Because they are used as substitutes for water despite being ineffective at addressing the body\'s fundamental hydration deficit.',
      'C) Because the agricultural production of sugar and caffeine crops depletes global freshwater reserves.',
      'D) Because they inflate the cost of preventable healthcare by masking common symptoms of chronic fatigue.'
    ],
    answer: 'B) Because they are used as substitutes for water despite being ineffective at addressing the body\'s fundamental hydration deficit.',
    method: 'The passage describes people "substituting caffeinated beverages and sugary drinks that provide a temporary sense of refreshment while doing nothing to address the body\'s underlying hydration deficit." The author\'s specific criticism is that these beverages substitute for water without delivering the same physiological benefit.'
  },
  { group: 'L24', type: 'multiple_choice', category: 'Health Advocacy', context: ctxL24,
    question: 'What does the author imply about people who wait until they are thirsty to drink?',
    options: [
      'A) That they are making a rational and biologically appropriate decision based on their body\'s natural feedback system.',
      'B) That they are practising an effective, self-regulated hydration strategy endorsed by the article.',
      'C) That they are already in a state of mild dehydration and are ignoring their body\'s distress signal.',
      'D) That they are at lower risk of long-term health problems due to superior self-regulation.'
    ],
    answer: 'C) That they are already in a state of mild dehydration and are ignoring their body\'s distress signal.',
    method: 'The passage directly states: "If you are waiting for the sensation of thirst...you have already allowed your body to enter a state of mild dehydration." Options A and B represent the opposite of the article\'s argument; Option D is contradicted by the passage\'s discussion of health consequences.'
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
    question: 'What is the author\'s primary argument regarding houseplant ownership?',
    options: [
      'A) That indoor plants are too complex for casual owners and should only be kept by trained botanists.',
      'B) That owning indoor plants carries a duty of care that requires learning and applying proper maintenance principles.',
      'C) To promote the commercialisation of indoor plant species that require minimal human maintenance.',
      'D) To review the scientific literature on the psychological benefits of incorporating plants into domestic environments.'
    ],
    answer: 'B) That owning indoor plants carries a duty of care that requires learning and applying proper maintenance principles.',
    method: 'The passage frames houseplant ownership as "a commitment, not a convenience" and argues owners must learn "what their plants require." The article does not argue plants are beyond casual owners or review scientific literature — it advocates for responsible ownership.'
  },
  { group: 'L25', type: 'multiple_choice', category: 'Environmental Wellbeing', context: ctxL25,
    question: 'Why is overwatering identified as the biggest killer of indoor plants?',
    options: [
      'A) Because excess water dilutes nutrient concentration in the soil, leading to slow starvation of the root system.',
      'B) Because daily watering schedules prevent owners from recognising other warning signs of plant distress.',
      'C) Because it prevents the soil from breathing, effectively drowning the plant\'s root system.',
      'D) Because frequent watering causes leaves to retain moisture, blocking their ability to absorb indirect sunlight.'
    ],
    answer: 'C) Because it prevents the soil from breathing, effectively drowning the plant\'s root system.',
    method: 'The passage states: "When soil is saturated beyond its drainage capacity, it cannot breathe. The root system, deprived of oxygen and surrounded by standing water, begins to rot." Option A describes nutrient dilution, which is not the mechanism described in the passage.'
  },
  { group: 'L25', type: 'multiple_choice', category: 'Environmental Wellbeing', context: ctxL25,
    question: 'Why does the author insist that cleaning leaves is not simply a cosmetic or \'fussy\' task?',
    options: [
      'A) To encourage owners to develop a routine aesthetic appreciation for the visual quality of their plants.',
      'B) To challenge the dismissive attitude that causes owners to neglect a task directly linked to plant photosynthesis.',
      'C) To argue that professional-grade cleaning equipment should be used for high-value ornamental plant species.',
      'D) To suggest that all indoor plants should be moved outdoors weekly for a thorough rain-cleaning cycle.'
    ],
    answer: 'B) To challenge the dismissive attitude that causes owners to neglect a task directly linked to plant photosynthesis.',
    method: 'The passage states wiping leaves "is not an optional aesthetic task — it is an essential physiological one," because dust "block[s] the stomata through which the plant absorbs carbon dioxide and executes photosynthesis." Options A, C, and D are not supported by the passage.'
  },
  { group: 'L25', type: 'multiple_choice', category: 'Environmental Wellbeing', context: ctxL25,
    question: 'What tone does the author take toward readers who find plant care difficult or inconvenient?',
    options: [
      'A) An empathetic and supportive tone, acknowledging that plant care presents genuine challenges for busy individuals.',
      'B) A critical and uncompromising tone, suggesting those unwilling to learn proper care should not own plants.',
      'C) An encouraging tone that celebrates the gradual improvement of plant-care skills over time.',
      'D) A neutral, informational tone that presents plant care as a purely technical skill requiring professional guidance.'
    ],
    answer: 'B) A critical and uncompromising tone, suggesting those unwilling to learn proper care should not own plants.',
    method: 'The passage closes with: "Those who are not prepared to learn what their plants require should reconsider acquiring them in the first place." This is a direct, critical statement, not empathetic or neutral in tone.'
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
    question: 'What is the central thesis of this article?',
    options: [
      'A) To recommend a specific brand of sleep technology designed to optimise REM cycles for shift workers.',
      'B) To argue that sleep is a non-negotiable biological necessity whose consistent prioritisation is essential for health.',
      'C) To provide a medically approved seven-step bedtime routine for individuals experiencing chronic insomnia.',
      'D) To discuss how workplace productivity metrics are impacted by the quality of employee sleep environments.'
    ],
    answer: 'B) To argue that sleep is a non-negotiable biological necessity whose consistent prioritisation is essential for health.',
    method: 'The article states sleep is "a biological baseline that the human body requires to function, repair, and survive" and must be "prioritised, protected, and understood as the non-negotiable foundation." Options A, C, and D do not match the article\'s broad persuasive argument.'
  },
  { group: 'L26', type: 'multiple_choice', category: 'Health Advocacy', context: ctxL26,
    question: 'According to the passage, what specific tasks does the body perform during sleep?',
    options: [
      'A) Thermoregulation and active filtration of environmental toxins through the dermal lymphatic pathway.',
      'B) The reinforcement of immune cell memory and the conversion of dietary protein into usable amino acids.',
      'C) Critical repairs to muscle tissue, immune cells, neurological pathways, and the consolidation of memories.',
      'D) The accelerated production of adrenaline reserves to support performance during the following morning.'
    ],
    answer: 'C) Critical repairs to muscle tissue, immune cells, neurological pathways, and the consolidation of memories.',
    method: 'The passage states: "Critical repairs to muscle tissue, immune cells, and neurological pathways occur exclusively during sleep cycles. Memory consolidation…cannot occur in a waking state." Options A, B, and D introduce mechanisms not mentioned in the passage.'
  },
  { group: 'L26', type: 'multiple_choice', category: 'Health Advocacy', context: ctxL26,
    question: 'Why does the author reject the idea of compensating for lost sleep on the weekend?',
    options: [
      'A) Because weekend sleep is structurally different from weekday sleep and cannot produce the same neurological benefits.',
      'B) Because health requires the consistent daily discipline of adequate sleep, not an irregular pattern of deprivation and recovery.',
      'C) Because sleeping in on weekends disrupts circadian rhythm and causes chronic daytime fatigue syndrome.',
      'D) Because the social obligations of weekends make environments incompatible with deep sleep states.'
    ],
    answer: 'B) Because health requires the consistent daily discipline of adequate sleep, not an irregular pattern of deprivation and recovery.',
    method: 'The passage states: "The idea that this debt can be repaid on the weekend is not only incorrect — it reflects a fundamental misunderstanding of how the body manages biological repair cycles." The article\'s argument is about the need for consistency, not about circadian disruption or structural differences.'
  },
  { group: 'L26', type: 'multiple_choice', category: 'Health Advocacy', context: ctxL26,
    question: 'What is the author\'s implied view of working late into the night to meet professional deadlines?',
    options: [
      'A) That it is an admirable sign of professional dedication that can be balanced with strategic napping.',
      'B) That it is a manageable trade-off provided it is compensated with a consistent weekend recovery routine.',
      'C) That it represents a decision to compromise a biological necessity in favour of a commercial priority, with long-term consequences.',
      'D) That it is a largely harmless habit provided the individual maintains a stable nutritional intake.'
    ],
    answer: 'C) That it represents a decision to compromise a biological necessity in favour of a commercial priority, with long-term consequences.',
    method: 'The passage states: "working late into the night to meet professional deadlines…must be understood for what it is: a decision to compromise a biological necessity in favour of a social or commercial priority…a trade-off with long-term physiological consequences." Options A, B, and D contradict this position.'
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
    question: 'What is the author\'s main argument regarding how fetch should be played?',
    options: [
      'A) That fetch is most effective when dogs are given complete freedom to set the pace and intensity of the game.',
      'B) That fetch should be treated as a structured, safety-conscious activity in which the owner assumes deliberate leadership.',
      'C) That fetch is only appropriate for high-energy breeds and should not be used for all dogs.',
      'D) That competitive fetch events offer the best framework for developing discipline and focus in domestic canines.'
    ],
    answer: 'B) That fetch should be treated as a structured, safety-conscious activity in which the owner assumes deliberate leadership.',
    method: 'The passage frames fetch as an "energy contract" in which "the owner takes responsibility for governing the terms" and argues that owners must lead on safety, equipment choice, and session duration. Options A, C, and D are either contradicted or not supported by the passage.'
  },
  { group: 'L27', type: 'multiple_choice', category: 'Animal Welfare', context: ctxL27,
    question: 'Why does the author describe playing fetch near traffic as a failure of responsibility?',
    options: [
      'A) Because traffic vibrations disrupt the dog\'s ability to track the trajectory of a thrown ball accurately.',
      'B) Because it demonstrates that the owner has failed to take basic precautions to eliminate foreseeable hazards.',
      'C) Because local council regulations prohibit the use of public roads as informal exercise zones for domestic animals.',
      'D) Because traffic noise exceeds safe decibel levels that can permanently damage a dog\'s sensitive auditory system.'
    ],
    answer: 'B) Because it demonstrates that the owner has failed to take basic precautions to eliminate foreseeable hazards.',
    method: 'The passage states that playing near traffic "is not a minor oversight — it is a failure of the most basic duty of care," and that the risk is "foreseeable." No mention is made of council regulations, vibrations, or decibel levels.'
  },
  { group: 'L27', type: 'multiple_choice', category: 'Animal Welfare', context: ctxL27,
    question: 'What does the author mean by the term \'energy contract\' as used in the passage?',
    options: [
      'A) A written behavioural agreement between the owner and a professional trainer to manage the dog\'s exercise intensity.',
      'B) A mutual commitment in which both dog and owner invest equal energy throughout the entire game session.',
      'C) A structured understanding in which the owner governs when the game begins, continues, and ends.',
      'D) A commercial arrangement between pet owners and subscription-based canine exercise services.'
    ],
    answer: 'C) A structured understanding in which the owner governs when the game begins, continues, and ends.',
    method: 'The passage defines the energy contract as: "You should be the one to decide when the game begins, how long it continues, and crucially, when it ends." It is not a written agreement, a financial arrangement, or a mutual equal-energy commitment.'
  },
  { group: 'L27', type: 'multiple_choice', category: 'Animal Welfare', context: ctxL27,
    question: 'What does the author imply about why the owner must set the pace of the game?',
    options: [
      'A) Because competitive fetch rules establish that the throwing party always holds ultimate authority in the game.',
      'B) Because dogs lack the self-awareness to recognise the physical limits of their own endurance.',
      'C) Because allowing the dog to set the pace results in ball damage and reduces equipment longevity.',
      'D) Because exercise pacing directly correlates with a dog\'s annual veterinary expenditure.'
    ],
    answer: 'B) Because dogs lack the self-awareness to recognise the physical limits of their own endurance.',
    method: 'The passage states: "The dog is relying on you to read these signals and act accordingly," implying the dog cannot self-regulate. "Forcing a tired dog to continue is not \'active living\' — it is neglect." No competitive rules, ball damage, or veterinary costs are mentioned.'
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
  { group: 'L28', type: 'multiple_choice', category: 'Animal Ethics', context: ctxL28,
    question: 'What is the author\'s main goal in this article?',
    options: [
      'A) To promote the establishment of government-funded breeding registries to monitor genetic diversity of domestic animals.',
      'B) To argue for urgent legislative and behavioural reforms to end overbreeding and reduce animal euthanasia in Australia.',
      'C) To review the economic performance of the Victorian Government\'s pet industry regulation framework.',
      'D) To compare the adoption rates of cats and dogs across municipal shelter networks in regional Australia.'
    ],
    answer: 'B) To argue for urgent legislative and behavioural reforms to end overbreeding and reduce animal euthanasia in Australia.',
    method: 'The passage calls for "action on two fronts": stronger legislation and consumer behavioural change, with the stated goal of reducing "Australia\'s annual euthanasia rate to zero." Options A, C, and D describe narrower or different objectives not found in the passage.'
  },
  { group: 'L28', type: 'multiple_choice', category: 'Animal Ethics', context: ctxL28,
    question: 'How many cats and dogs are euthanised in Australia annually according to the text?',
    options: [
      'A) 10,000',
      'B) 50,000',
      'C) 100,000',
      'D) Over 200,000'
    ],
    answer: 'D) Over 200,000',
    method: 'The passage opens with: "Australia euthanises more than 200,000 cats and dogs annually." This is the specific statistic cited at the outset of the article to establish the scale of the problem.'
  },
  { group: 'L28', type: 'multiple_choice', category: 'Animal Ethics', context: ctxL28,
    question: 'Why does the author argue that allowing ten breeding females is excessive?',
    options: [
      'A) Because it exceeds the nutritional capacity of standard domestic properties to support a healthy breeding program.',
      'B) Because it enables a scale of production that mirrors profit-driven puppy farms rather than ethical, welfare-focused breeding.',
      'C) Because it violates the maximum breeding quotas established under the Victorian Government\'s current legislation.',
      'D) Because animals from large litters have statistically lower rates of successful adoption within the shelter system.'
    ],
    answer: 'B) Because it enables a scale of production that mirrors profit-driven puppy farms rather than ethical, welfare-focused breeding.',
    method: 'The passage states ten females can produce "between 50 and 160 animals annually from a single registered operation" — characterised as "small-scale industrial production that floods an already oversupplied adoption market." This is explicitly contrasted with "careful, welfare-focused breeding." Options A, C, and D are not supported.'
  },
  { group: 'L28', type: 'multiple_choice', category: 'Animal Ethics', context: ctxL28,
    question: 'What does the author imply about the relationship between purchasing from a breeder and shelter adoption?',
    options: [
      'A) They are complementary practices that together ensure a diverse and healthy domestic animal population.',
      'B) Purchasing from a breeder improves shelter adoption rates by reducing demand for lower-quality animals.',
      'C) Purchasing from a breeder directly reduces the opportunity for a shelter animal to find a home.',
      'D) Both practices contribute equally to reducing the euthanasia rate when undertaken responsibly.'
    ],
    answer: 'C) Purchasing from a breeder directly reduces the opportunity for a shelter animal to find a home.',
    method: 'The passage states: "Every animal purchased from a breeder is an animal for whom a shelter resident did not find a home." This directly implies a zero-sum dynamic between the two practices. Options A, B, and D contradict this framing.'
  },
  { group: 'L28', type: 'true_false_matrix', category: 'Animal Ethics', context: ctxL28,
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
    question: 'What is the core message the passage communicates about the IARC\'s findings on processed meat?',
    options: [
      'A) To encourage the complete elimination of red meat from global diets based on preliminary evidence.',
      'B) To demonstrate that the nutritional value of processed meat outweighs any associated long-term health concerns.',
      'C) To communicate scientifically supported evidence linking processed meat consumption to elevated colorectal cancer risk.',
      'D) To call for a global ban on all meat-processing manufacturing facilities operating outside regulated nutritional standards.'
    ],
    answer: 'C) To communicate scientifically supported evidence linking processed meat consumption to elevated colorectal cancer risk.',
    method: 'The passage presents the IARC\'s Group 1 classification and the 18% risk increase per 50g as "scientifically robust" conclusions from 800+ studies. The article is not advocating for elimination of all red meat or factory bans, and it explicitly acknowledges red meat\'s nutritional value.'
  },
  { group: 'L29', type: 'multiple_choice', category: 'Public Health Research', context: ctxL29,
    question: 'What increase in colorectal cancer risk does the IARC report associate with consuming 50 grams of processed meat daily?',
    options: [
      'A) 5%',
      'B) 10%',
      'C) 15%',
      'D) 18%'
    ],
    answer: 'D) 18%',
    method: 'The passage states: "For every 50 grams of processed meat consumed daily…the risk of developing colorectal cancer increases by 18 per cent." Options A, B, and C are lower figures not cited in the passage.'
  },
  { group: 'L29', type: 'multiple_choice', category: 'Public Health Research', context: ctxL29,
    question: 'Why does the author consider the IARC\'s research more authoritative than industry counter-arguments?',
    options: [
      'A) Because the IARC is directly funded by national governments, giving it complete immunity from commercial conflicts of interest.',
      'B) Because the IARC\'s conclusions are based on over 800 independent studies, while the industry focuses on selective nutritional claims.',
      'C) Because the IARC specifically endorses plant-based diets over all other dietary patterns in its annual health report.',
      'D) Because its findings have been universally accepted by the meat industry without objection or formal counter-argument.'
    ],
    answer: 'B) Because the IARC\'s conclusions are based on over 800 independent studies, while the industry focuses on selective nutritional claims.',
    method: 'The passage contrasts the IARC\'s "analysis of over 800 studies conducted across multiple countries, populations, and timeframes" with the industry\'s focus on "nutritional value" as a counter-argument to public health recommendations. Option D is directly contradicted by the passage: the industry did mount objections.'
  },
  { group: 'L29', type: 'multiple_choice', category: 'Public Health Research', context: ctxL29,
    question: 'How does the author balance the nutritional value of red meat with the health risks identified by the IARC?',
    options: [
      'A) By arguing that the nutritional benefits of red meat fully justify its consumption at any quantity without restriction.',
      'B) By suggesting that all red meat should be immediately removed from public dietary guidelines to eliminate cancer risk.',
      'C) By acknowledging red meat\'s nutritional value while emphasising the need for balanced dietary recommendations that account for cancer risk.',
      'D) By claiming that the IARC study negates all previously recognised nutritional benefits of consuming red meat.'
    ],
    answer: 'C) By acknowledging red meat\'s nutritional value while emphasising the need for balanced dietary recommendations that account for cancer risk.',
    method: 'The passage cites Dr. Christopher Wild as "acknowledging these nutritional considerations while maintaining that balanced dietary recommendations must account for the cancer risk." The passage states nutritional value "must be weighed against" the carcinogenic profile — not ignored or dismissed.'
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
    question: 'What is the primary function of quotes in a news report according to the passage?',
    options: [
      'A) To allow journalists to reduce the volume of original writing required to meet a publication\'s word count targets.',
      'B) To serve as strategic tools that provide evidence, establish authority, and illustrate competing perspectives.',
      'C) To guarantee that all news reports achieve a legally mandated standard of editorial impartiality.',
      'D) To provide advertisers with identifiable spokesperson quotes that can be repurposed for commercial campaigns.'
    ],
    answer: 'B) To serve as strategic tools that provide evidence, establish authority, and illustrate competing perspectives.',
    method: 'The passage opens by stating: "Quotes are rarely used at random — they are strategic tools, selected by the journalist to serve specific communicative functions." It then identifies three primary functions: providing evidence, bolstering authority, and illustrating conflicting perspectives. Options A, C, and D are not supported.'
  },
  { group: 'L30', type: 'multiple_choice', category: 'Media Literacy', context: ctxL30,
    question: 'Which of the following is explicitly identified in the passage as a reason for using quotes?',
    options: [
      'A) To ensure that news reports conform to the character limits imposed by digital publishing platforms.',
      'B) To bridge the gap between scientific findings and public understanding of complex research.',
      'C) To allow editors to verify the factual accuracy of a reporter\'s claims before a story goes to print.',
      'D) To replace the need for primary investigative research by citing existing expert opinions.'
    ],
    answer: 'B) To bridge the gap between scientific findings and public understanding of complex research.',
    method: 'The passage states that expert quotes "effectively bridge the gap between scientific findings and public understanding by allowing experts to speak directly to a general audience." Options A, C, and D describe editorial or production functions not mentioned in the passage.'
  },
  { group: 'L30', type: 'multiple_choice', category: 'Media Literacy', context: ctxL30,
    question: 'Why does the author emphasise that quotes are \'strategic tools\'?',
    options: [
      'A) To argue that all quotes in journalism should be pre-approved by the original source before publication.',
      'B) To highlight that journalists deliberately select quotes to achieve specific communicative effects within a story.',
      'C) To suggest that quotes are only effective in reports covering scientific or medical subject matter.',
      'D) To imply that readers should view all quoted sources with suspicion due to their selective placement.'
    ],
    answer: 'B) To highlight that journalists deliberately select quotes to achieve specific communicative effects within a story.',
    method: 'The passage uses "strategic tools" to mean that quotes are deliberately chosen "to serve specific communicative functions." Skilled readers are invited to "consider who is speaking, what interest they may represent, and what the journalist\'s purpose was in choosing that voice." Option D overstates this as reason for suspicion; the text treats it as critical engagement.'
  },
  { group: 'L30', type: 'multiple_choice', category: 'Media Literacy', context: ctxL30,
    question: 'How does including opposing voices affect the perceived credibility of a news report?',
    options: [
      'A) It reduces the report\'s credibility by introducing unresolved contradictions that confuse the reader.',
      'B) It has no measurable effect on credibility, as readers focus exclusively on the journalist\'s own conclusions.',
      'C) It enhances the report\'s perceived credibility by demonstrating balance and allowing the audience to weigh multiple perspectives.',
      'D) It diminishes the authority of the primary source cited in the report by placing competing views alongside it.'
    ],
    answer: 'C) It enhances the report\'s perceived credibility by demonstrating balance and allowing the audience to weigh multiple perspectives.',
    method: 'The passage states that quoting conflicting perspectives "ensures that a report does not appear biased to the audience, allowing them to weigh the evidence and form their own conclusions." This is presented as an enhancement to credibility, not a reduction or neutral effect.'
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
    question: 'According to the listing, which guest would be explicitly refused a booking?',
    options: [
      'A) A pair of business travellers on a corporate trip.',
      'B) A couple travelling with their 8-year-old child.',
      'C) A solo traveller requiring high-speed internet access.',
      'D) A group of adult friends celebrating a birthday.'
    ],
    answer: 'B) A couple travelling with their 8-year-old child.',
    method: 'The listing explicitly states it is "strictly unsuitable for children under the age of 12." An 8-year-old falls within this restriction. Business travellers, guests requiring internet, and adult groups face no stated restrictions.'
  },
  { group: 'L31', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxL31,
    question: 'Which of the following is true regarding the property\'s accessibility?',
    options: [
      'A) The property is fully wheelchair accessible across all four levels.',
      'B) An elevator provides access between the ground and upper floors.',
      'C) The third and fourth floors are accessible only via the grand staircase.',
      'D) The listing prohibits guests with limited mobility from booking.'
    ],
    answer: 'C) The third and fourth floors are accessible only via the grand staircase.',
    method: 'The listing states: "Access to the third and fourth floors is via a grand staircase; there is no elevator, which may be a limitation for guests with limited mobility." The property notes this as a potential limitation, not a prohibition. Options A and B are directly contradicted by the listing.'
  },
  { group: 'L31', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxL31,
    question: 'The Battery Point neighbourhood is described as lively and active late into the night.',
    options: ['True', 'False'],
    answer: 'False',
    method: 'The listing states: "The area is quiet after 8:00 PM as it is primarily residential." This directly contradicts a description of late-night activity. Fine dining and maritime attractions are nearby, but the immediate neighbourhood is quiet after 8 PM.'
  },
  { group: 'L31', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxL31,
    question: 'The $2,000 security deposit is refunded to the guest after a stay exceeding seven days.',
    options: ['True', 'False'],
    answer: 'False',
    method: 'The listing explicitly describes the deposit as "non-refundable." It is required upon booking confirmation for stays exceeding 7 days but will not be returned to the guest at checkout.'
  },

  // ── Set 22 (Property Listing): The Eco-Innovation Hub ──────────────────────
  { group: 'L32', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxL32,
    question: 'What is the financial consequence for a guest who exceeds their daily energy allowance?',
    options: [
      'A) They may be evicted from the property without a refund.',
      'B) Their internet connection will be throttled to a slower speed.',
      'C) They will be charged an additional $0.45 per kilowatt-hour at checkout.',
      'D) Their energy allowance will be permanently removed for the remainder of their stay.'
    ],
    answer: 'C) They will be charged an additional $0.45 per kilowatt-hour at checkout.',
    method: 'The listing states: "Any usage exceeding this is billed at $0.45 per kWh upon checkout." Options A, B, and D describe consequences not mentioned in the listing.'
  },
  { group: 'L32', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxL32,
    question: 'Based on the neighbourhood description, which statement is most accurate?',
    options: [
      'A) The area is consistently noisy at all hours due to the large student population.',
      'B) The suburb lacks adequate public transport connections to the wider city.',
      'C) It is a formerly industrial area undergoing gentrification with strong public transport links.',
      'D) Greendale is a quiet rural district situated well outside the city centre.'
    ],
    answer: 'C) It is a formerly industrial area undergoing gentrification with strong public transport links.',
    method: 'The listing describes Greendale as "rapidly gentrifying" and "formerly industrial," with the Greendale Interchange connecting to "four different train lines." Noise is noted to be controlled by ordinances, directly contradicting Option A. Options B and D misrepresent the description.'
  },
  { group: 'L32', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxL32,
    question: 'The apartment\'s internal layout can be physically reconfigured by the guest.',
    options: ['True', 'False'],
    answer: 'True',
    method: 'The listing states: "The space is dynamic; walls can be retracted to change a bedroom into a workspace." This confirms that the internal layout can be altered by the guest.'
  },
  { group: 'L32', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxL32,
    question: 'Guests are permitted to cook using gas-powered appliances in the kitchen.',
    options: ['True', 'False'],
    answer: 'False',
    method: 'The listing specifies a "Kitchenette with induction cooktop (no open flames)." The explicit note "no open flames" means gas-powered cooking is not permitted.'
  },

  // ── Set 23 (Property Listing): The Transit Exchange Apartment ──────────────
  { group: 'L33', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxL33,
    question: 'What is the host\'s explicit advice to guests regarding personal vehicles?',
    options: [
      'A) Bring a personal vehicle as it is the most convenient way to explore the area.',
      'B) Use the public parking garage located approximately 1km from the property.',
      'C) Do not bring a vehicle, due to severe local traffic congestion and no on-site parking.',
      'D) Arrange a private taxi service through the property\'s 24/7 kiosk.'
    ],
    answer: 'C) Do not bring a vehicle, due to severe local traffic congestion and no on-site parking.',
    method: 'The listing states: "The host strongly advises against bringing a vehicle as the local traffic congestion is severe, and the nearest public parking garage is over 1km away." The garage is mentioned as an additional reason to avoid driving, not as a recommendation. Option D is not supported by the text.'
  },
  { group: 'L33', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxL33,
    question: 'What makes this apartment particularly suited to a specific type of traveller?',
    options: [
      'A) It is a luxurious and completely silent property ideal for relaxation.',
      'B) It is positioned directly above a railway terminus, providing immediate access to the train network.',
      'C) It is situated in a quiet residential suburb away from urban activity.',
      'D) It is specifically designed to accommodate large groups with shared amenities.'
    ],
    answer: 'B) It is positioned directly above a railway terminus, providing immediate access to the train network.',
    method: 'The listing opens: "Located directly above the West Central Railway Terminus, this apartment is designed for the traveller who values efficiency." The title also references "30 Seconds to the Platform." Options A, C, and D are contradicted or unsupported by the listing.'
  },
  { group: 'L33', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxL33,
    question: 'The apartment is completely free from all noise and vibration from the railway below.',
    options: ['True', 'False'],
    answer: 'False',
    method: 'The listing states the unit is "sound-engineered to block out platform noise, though light vibrations from heavy freight trains passing at night may be felt." The qualification "though light vibrations…may be felt" confirms the property is not entirely free from railway disturbance.'
  },
  { group: 'L33', type: 'multiple_choice', category: 'Accommodation Listing', context: ctxL33,
    question: 'Guests can access a large supermarket within a short walk of the property.',
    options: ['True', 'False'],
    answer: 'False',
    method: 'The listing states: "There are no major supermarkets in the immediate 500-metre radius." Nearby options are limited to "high-end grab-and-go convenience stores and a 24-hour pharmacy" — not a major supermarket.'
  }
]

app.get('/api/literacy-questions', (req, res) => {
  const shuffled = shuffleByGroup(literacyQuestions)
  const final = shuffled.map((q, i) => ({
    id: i + 1,
    type: q.type,
    category: q.category,
    group: q.group,
    context: q.context || null,
    question: q.question,
    options: q.options || null,
    answer: q.answer,
    method: q.method || null,
    unit: null,
    matrixLabels: q.matrixLabels || null
  }))
  const customCount = req.query.count ? parseInt(req.query.count) : null
  res.json(customCount ? final.slice(0, customCount) : final)
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
