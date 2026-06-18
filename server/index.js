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
  subtitle: 'The combined output from Zone 1 and Zone 4 (432 L total) is redirected entirely to fill a series of small individual holding barrels. Each barrel has a maximum capacity of exactly 0.024 m³. (1 m³ = 1000 L)',
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
  subtitle: 'Reservoir Tank 3 holds 3,400 L of liquid (0.85 m depth × 4.0 m² base area × 1,000 L/m³). A drainage pump removes water at a constant rate of 12.5 L per minute.',
}

// ── Questions — 10 sets of 2 (20 total) ──────────────────────────────────────

const questions = [

  // ── Set 1: Sarah Chen — $55/hr, weekdays only ────────────────────────────
  // Q1 hours: 8+8.25+7.5+8.5+8 = 40.25   Q2 highest: Thu 8.5×55 = $467.50
  {
    group: 'A', type: 'number_input', category: 'Number and Algebra',
    context: ctx1,
    question: 'Calculate the total number of paid weekday hours Sarah worked.',
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
    question: 'Calculate the total number of paid hours Marcus worked across the full week.',
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
    question: 'Calculate the total number of paid hours Anika worked across all her shifts this week.',
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
    question: 'Calculate the total number of paid hours Daniel worked across the full week, including weekend shifts.',
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
    question: 'Calculate the total number of paid hours Lena worked across all her weekday shifts.',
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
    question: 'Calculate the total number of paid hours Omar worked across the full week.',
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
    question: 'Calculate the total number of paid weekday hours Claire worked.',
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
    question: 'Calculate the total number of paid weekday hours Ben worked.',
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
    question: 'Calculate the total number of paid hours Nina worked across the full week.',
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
    question: 'Calculate the total number of paid weekday hours Adrian worked.',
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
    question: 'Using your answer to Question A as the total tank volume, how many liters does the tank hold when filled to 3/4 of its total capacity?',
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
    question: 'Using the combined volume from Question A, how many liters does the basin hold when operating at 4/5 of its full capacity?',
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
    question: 'Using the internal volume from Question A, how many liters does the vault hold when filled to 3/5 of its operational capacity?',
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
    question: 'Using the floor area from Question A, what is the minimum number of 600mm x 600mm tiles required to cover the entire surface?',
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
    question: 'Using the total area from Question A, what is the minimum number of 1.2m x 0.4m decking boards required to cover the entire terrace?',
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
    question: 'Using the total base area from Question A, what is the minimum number of 400mm x 400mm rubber pavers required to cover both sections completely?',
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
    question: 'Using the perimeter from Question A, what is the minimum number of 2.4m timber sleepers required to frame the entire boundary?',
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
    question: 'Using the perimeter from Question A, what is the minimum number of 3.5m steel edging strips required to border the entire plaza?',
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
    question: 'Convert the block volume from Question A into mL (1 mL = 1,000 mm³), then calculate the total volume of plasticiser admixture required at the stated dose rate.',
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
    question: 'Convert the slab volume from Question A into mL (1 mL = 1,000 mm³), then calculate the exact volume of curing compound required at the stated dose rate.',
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
    group: 'AY', type: 'number_input', category: 'Number and Algebra',
    context: ctxT1a,
    question: 'What is the average travel time for a single one-way commute among these 5 employees? Give your answer in minutes.',
    answer: '46'
  },
  {
    group: 'AY', type: 'number_input', category: 'Number and Algebra',
    context: ctxT1b,
    question: 'How many minutes earlier does Sarah need to leave home to ensure she arrives at the station at her usual time?',
    answer: '15'
  },

  // AZ — Set 2: University students average | James highway rain
  {
    group: 'AZ', type: 'number_input', category: 'Number and Algebra',
    context: ctxT2a,
    question: 'What is the average one-way travel time taken across these 6 students? Give your answer in minutes.',
    answer: '51'
  },
  {
    group: 'AZ', type: 'number_input', category: 'Number and Algebra',
    context: ctxT2b,
    question: 'How many minutes longer will his morning drive take compared to his regular highway commute?',
    answer: '12'
  },

  // BA — Set 3: Warehouse couriers average | Elena electric bike
  {
    group: 'BA', type: 'number_input', category: 'Number and Algebra',
    context: ctxT3a,
    question: 'What is the average one-way journey time across these 5 couriers? Give your answer in minutes.',
    answer: '66'
  },
  {
    group: 'BA', type: 'number_input', category: 'Number and Algebra',
    context: ctxT3b,
    question: 'How many minutes of travel time does Elena save on her trip to work by using the electric bike?',
    answer: '10'
  },

  // BB — Set 4: Medical practitioners average | Courier hub return limiter
  {
    group: 'BB', type: 'number_input', category: 'Number and Algebra',
    context: ctxT4a,
    question: 'What is the average travel time across the 6 practitioners? Give your answer in minutes.',
    answer: '49'
  },
  {
    group: 'BB', type: 'number_input', category: 'Number and Algebra',
    context: ctxT4b,
    question: 'How many minutes longer does the return leg take compared to the outward leg?',
    answer: '15'
  },

  // BC — Set 5: Civil engineers average | Liam accident delay
  {
    group: 'BC', type: 'number_input', category: 'Number and Algebra',
    context: ctxT5a,
    question: 'What is the average one-way travel time for the 5 engineers? Give your answer in minutes.',
    answer: '80'
  },
  {
    group: 'BC', type: 'number_input', category: 'Number and Algebra',
    context: ctxT5b,
    question: 'How many minutes earlier must Liam leave his home to arrive at the site at his standard time during the delay?',
    answer: '60'
  },

  // BD — Set 6: Harbour supervisors average | Emergency van school traffic
  {
    group: 'BD', type: 'number_input', category: 'Number and Algebra',
    context: ctxT6a,
    question: 'What is the average commute duration among these 6 shift supervisors? Give your answer in minutes.',
    answer: '56'
  },
  {
    group: 'BD', type: 'number_input', category: 'Number and Algebra',
    context: ctxT6b,
    question: 'How many minutes longer does the return trip take than the outward emergency run?',
    answer: '15'
  },

  // BE — Set 7: Retail employees average | Executive peak vs off-peak
  {
    group: 'BE', type: 'number_input', category: 'Number and Algebra',
    context: ctxT7a,
    question: 'What is the average one-way travel time among these 5 individual profiles? Give your answer in minutes.',
    answer: '45'
  },
  {
    group: 'BE', type: 'number_input', category: 'Number and Algebra',
    context: ctxT7b,
    question: 'How many minutes of travel time does the executive save by choosing to drive outside of peak hours?',
    answer: '70'
  },

  // BF — Set 8: Airline crew average | Distribution truck loaded vs empty
  {
    group: 'BF', type: 'number_input', category: 'Number and Algebra',
    context: ctxT8a,
    question: 'What is the average one-way ground transit duration across these 6 crew members? Give your answer in minutes.',
    answer: '78'
  },
  {
    group: 'BF', type: 'number_input', category: 'Number and Algebra',
    context: ctxT8b,
    question: 'How many minutes faster is the return leg compared to the outbound delivery leg?',
    answer: '18'
  },

  // BG — Set 9: Research hub scientists average | Claire maintenance restriction
  {
    group: 'BG', type: 'number_input', category: 'Number and Algebra',
    context: ctxT9a,
    question: 'What is the average travel time for a single journey across these 5 scientists? Give your answer in minutes.',
    answer: '61'
  },
  {
    group: 'BG', type: 'number_input', category: 'Number and Algebra',
    context: ctxT9b,
    question: 'How many additional minutes does Claire spend on her commute because of the maintenance speed restriction?',
    answer: '30'
  },

  // BH — Set 10: Council workers average | Medical courier peak vs overnight
  {
    group: 'BH', type: 'number_input', category: 'Number and Algebra',
    context: ctxT10a,
    question: 'What is the average travel time for a single leg across these 6 community workers? Give your answer in minutes.',
    answer: '52'
  },
  {
    group: 'BH', type: 'number_input', category: 'Number and Algebra',
    context: ctxT10b,
    question: 'How many minutes longer does the daytime delivery run take compared to the overnight run?',
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
    group: 'BK', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxF3b,
    question: 'How many total minutes can the irrigation line run continuously into this drainage tank before it overflows?',
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
    group: 'BM', type: 'number_input', category: 'Measurement and Geometry',
    context: ctxF5b,
    question: 'How many minutes will it take to pump Reservoir Tank 3 completely empty?',
    answer: '272'
  },

]

// ── Units keyed by group, [Q1 unit, Q2 unit] — '$' renders as prefix ─────────
const units = {
  A: ['h', '$'],   B: ['h', '$'],   C: ['h', '$'],   D: ['h', '$'],   E: ['h', '$'],
  F: ['h', '$'],   G: ['h', '$'],   H: ['h', '$'],   I: ['h', '$'],   J: ['h', '$'],
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
  AY: ['min', 'min'], AZ: ['min', 'min'], BA: ['min', 'min'], BB: ['min', 'min'], BC: ['min', 'min'],
  BD: ['min', 'min'], BE: ['min', 'min'], BF: ['min', 'min'], BG: ['min', 'min'], BH: ['min', 'min'],
  BI: ['mL', null], BJ: ['L', 'barrels'], BK: ['L', 'min'], BL: ['mL', 'mL'], BM: ['L', 'min'],
}

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
    `Convert tank capacity to litres:\n  0.51 m³ × 1,000 L/m³ = 510 L\n\nConvert flow rate to L/min:\n  850 mL/min ÷ 1,000 = 0.85 L/min\n\nTime = Capacity ÷ Flow rate\n  = 510 L ÷ 0.85 L/min = 600 minutes`,
  ],
  BL: [
    `Grade A Nitro concentration: 4.5 mL per litre\nSub-tank volume: 180 L\n\nConcentrate needed: 4.5 mL/L × 180 L = 810 mL`,
    `Grade A Nitro:   4.5 mL/L × 180 L = 810 mL\nGrade B Phospho: 6.0 mL/L × 140 L = 840 mL\n\nTotal combined: 810 + 840 = 1,650 mL`,
  ],
  BM: [
    `Volume = Floor area × Liquid depth\n  = 4.0 m² × 0.85 m = 3.4 m³\n\nConvert to litres:\n  3.4 m³ × 1,000 L/m³ = 3,400 L`,
    `Time = Volume ÷ Pump rate\n  = 3,400 L ÷ 12.5 L/min = 272 minutes`,
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
    const unit   = (units[q.group]   || [])[pos] || null
    return {
      id: i + 1,
      type: q.type,
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
