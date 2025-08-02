export interface DictionaryEntry {
  letter: string;
  primeMover: {
    term: string;
    description: string;
    icon: string;
  };
  hybridVehicle: {
    term: string;
    description: string;
    icon: string;
  };
}

export const dictionaryData: DictionaryEntry[] = [
  {
    letter: 'A',
    primeMover: {
      term: 'Alternator',
      description: 'A device that converts mechanical energy into electrical energy through electromagnetic induction.',
      icon: '⚡'
    },
    hybridVehicle: {
      term: 'All-Electric Range',
      description: 'The distance a hybrid vehicle can travel using only electric power before the engine starts.',
      icon: '🔋'
    }
  },
  {
    letter: 'B',
    primeMover: {
      term: 'Boiler',
      description: 'A closed vessel where fluid is heated to create steam or hot water for power generation.',
      icon: '🔥'
    },
    hybridVehicle: {
      term: 'Battery Pack',
      description: 'A collection of battery cells that store electrical energy to power the electric motor.',
      icon: '🔋'
    }
  },
  {
    letter: 'C',
    primeMover: {
      term: 'Combustion Engine',
      description: 'An engine that generates power by burning fuel in a combustion chamber.',
      icon: '🚗'
    },
    hybridVehicle: {
      term: 'Charging Port',
      description: 'An inlet where external electricity can be connected to charge the vehicle battery.',
      icon: '🔌'
    }
  },
  {
    letter: 'D',
    primeMover: {
      term: 'Diesel Generator',
      description: 'A generator powered by a diesel engine, commonly used for backup power.',
      icon: '⚙️'
    },
    hybridVehicle: {
      term: 'Dual Mode',
      description: 'The ability of a hybrid vehicle to operate in both electric and gasoline modes.',
      icon: '🔄'
    }
  },
  {
    letter: 'E',
    primeMover: {
      term: 'Electric Motor',
      description: 'A device that converts electrical energy into mechanical energy through magnetic fields.',
      icon: '⚡'
    },
    hybridVehicle: {
      term: 'Energy Recovery',
      description: 'The process of capturing and storing energy that would otherwise be lost during braking.',
      icon: '♻️'
    }
  },
  {
    letter: 'F',
    primeMover: {
      term: 'Fuel Cell',
      description: 'A device that generates electricity through chemical reactions between hydrogen and oxygen.',
      icon: '💨'
    },
    hybridVehicle: {
      term: 'Fuel Economy',
      description: 'The efficiency of a vehicle measured in miles per gallon or kilometers per liter.',
      icon: '⛽'
    }
  },
  {
    letter: 'G',
    primeMover: {
      term: 'Gas Turbine',
      description: 'A rotary engine that extracts energy from flowing combustion gases.',
      icon: '🌪️'
    },
    hybridVehicle: {
      term: 'Generator Mode',
      description: 'When the hybrid engine runs specifically to generate electricity for the battery.',
      icon: '⚡'
    }
  },
  {
    letter: 'H',
    primeMover: {
      term: 'Hydraulic Power',
      description: 'Power generated using pressurized fluid to drive machinery and equipment.',
      icon: '💧'
    },
    hybridVehicle: {
      term: 'Hybrid Controller',
      description: 'The computer system that manages power flow between engine, motor, and battery.',
      icon: '🖥️'
    }
  },
  {
    letter: 'I',
    primeMover: {
      term: 'Internal Combustion',
      description: 'The process of burning fuel inside an engine cylinder to create power.',
      icon: '🔥'
    },
    hybridVehicle: {
      term: 'Inverter',
      description: 'A device that converts DC power from the battery to AC power for the electric motor.',
      icon: '🔄'
    }
  },
  {
    letter: 'J',
    primeMover: {
      term: 'Jet Engine',
      description: 'A reaction engine that generates thrust by expelling hot gases at high speed.',
      icon: '✈️'
    },
    hybridVehicle: {
      term: 'Jump Start',
      description: 'The ability to start the vehicle using electric power when the main engine is off.',
      icon: '⚡'
    }
  },
  {
    letter: 'K',
    primeMover: {
      term: 'Kinetic Energy',
      description: 'The energy of motion that can be converted into useful work or electricity.',
      icon: '⚡'
    },
    hybridVehicle: {
      term: 'Kilowatt Hour',
      description: 'A unit of energy measurement used to describe battery capacity in electric vehicles.',
      icon: '📊'
    }
  },
  {
    letter: 'L',
    primeMover: {
      term: 'Linear Generator',
      description: 'A generator that produces electricity from linear motion rather than rotational motion.',
      icon: '↔️'
    },
    hybridVehicle: {
      term: 'Lithium Battery',
      description: 'A rechargeable battery type commonly used in hybrid and electric vehicles.',
      icon: '🔋'
    }
  },
  {
    letter: 'M',
    primeMover: {
      term: 'Motor Generator',
      description: 'A device that can function as both an electric motor and an electrical generator.',
      icon: '⚙️'
    },
    hybridVehicle: {
      term: 'Mild Hybrid',
      description: 'A hybrid system that cannot drive the vehicle on electric power alone.',
      icon: '🚗'
    }
  },
  {
    letter: 'N',
    primeMover: {
      term: 'Nuclear Reactor',
      description: 'A device that initiates controlled nuclear reactions to generate thermal energy.',
      icon: '☢️'
    },
    hybridVehicle: {
      term: 'Nickel Battery',
      description: 'An older type of rechargeable battery technology used in early hybrid vehicles.',
      icon: '🔋'
    }
  },
  {
    letter: 'O',
    primeMover: {
      term: 'Otto Engine',
      description: 'A four-stroke internal combustion engine invented by Nikolaus Otto.',
      icon: '🚗'
    },
    hybridVehicle: {
      term: 'Onboard Charger',
      description: 'A device that converts AC power from the grid to DC power for the battery.',
      icon: '🔌'
    }
  },
  {
    letter: 'P',
    primeMover: {
      term: 'Photovoltaic Cell',
      description: 'A device that converts light energy directly into electrical energy.',
      icon: '☀️'
    },
    hybridVehicle: {
      term: 'Plug-in Hybrid',
      description: 'A hybrid vehicle that can be charged by plugging into an external power source.',
      icon: '🔌'
    }
  },
  {
    letter: 'Q',
    primeMover: {
      term: 'Quadruple Expansion',
      description: 'A steam engine that uses steam four times in successive cylinders.',
      icon: '🚂'
    },
    hybridVehicle: {
      term: 'Quick Charge',
      description: 'Fast charging technology that rapidly replenishes vehicle battery power.',
      icon: '⚡'
    }
  },
  {
    letter: 'R',
    primeMover: {
      term: 'Rotary Engine',
      description: 'An internal combustion engine with a rotating rotor instead of pistons.',
      icon: '🔄'
    },
    hybridVehicle: {
      term: 'Regenerative Braking',
      description: 'A system that captures energy during braking and stores it in the battery.',
      icon: '♻️'
    }
  },
  {
    letter: 'S',
    primeMover: {
      term: 'Steam Engine',
      description: 'An engine that uses steam pressure to produce mechanical work.',
      icon: '🚂'
    },
    hybridVehicle: {
      term: 'Series Hybrid',
      description: 'A hybrid where the engine only generates electricity and never directly drives the wheels.',
      icon: '🔋'
    }
  },
  {
    letter: 'T',
    primeMover: {
      term: 'Turbine',
      description: 'A rotary mechanical device that extracts energy from fluid flow.',
      icon: '🌪️'
    },
    hybridVehicle: {
      term: 'Traction Motor',
      description: 'The electric motor that directly drives the wheels of a hybrid vehicle.',
      icon: '⚡'
    }
  },
  {
    letter: 'U',
    primeMover: {
      term: 'Uninterruptible Power',
      description: 'A backup power system that provides immediate power during electrical outages.',
      icon: '🔋'
    },
    hybridVehicle: {
      term: 'Ultra Capacitor',
      description: 'A high-capacity energy storage device that can quickly charge and discharge.',
      icon: '⚡'
    }
  },
  {
    letter: 'V',
    primeMover: {
      term: 'Voltage Regulator',
      description: 'A device that maintains constant voltage output from a generator.',
      icon: '📊'
    },
    hybridVehicle: {
      term: 'Vehicle-to-Grid',
      description: 'Technology that allows hybrid vehicles to supply electricity back to the power grid.',
      icon: '🔌'
    }
  },
  {
    letter: 'W',
    primeMover: {
      term: 'Wind Turbine',
      description: 'A device that converts wind energy into electrical energy.',
      icon: '💨'
    },
    hybridVehicle: {
      term: 'Watt Hour',
      description: 'A unit of energy measurement equal to one watt of power used for one hour.',
      icon: '📊'
    }
  },
  {
    letter: 'X',
    primeMover: {
      term: 'Xenon Flash',
      description: 'A high-intensity light source used in some specialized power applications.',
      icon: '💡'
    },
    hybridVehicle: {
      term: 'eXtra Range',
      description: 'Additional driving distance provided by the hybrid powertrain system.',
      icon: '📏'
    }
  },
  {
    letter: 'Y',
    primeMover: {
      term: 'Yaw Generator',
      description: 'A system that rotates wind turbines to face the wind for optimal power generation.',
      icon: '🔄'
    },
    hybridVehicle: {
      term: 'Yoke Assembly',
      description: 'The steering mechanism that connects driver input to vehicle direction.',
      icon: '🎮'
    }
  },
  {
    letter: 'Z',
    primeMover: {
      term: 'Zero Emission Generator',
      description: 'An eco-friendly power source that produces electricity without pollutants.',
      icon: '🌱'
    },
    hybridVehicle: {
      term: 'Zero Emission Capability',
      description: 'The ability for a vehicle to operate without producing exhaust emissions.',
      icon: '🌱'
    }
  }
];