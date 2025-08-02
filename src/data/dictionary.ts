// Import all engineering term images
import alternatorImg from "@/assets/terms/alternator.jpg";
import allElectricRangeImg from "@/assets/terms/all-electric-range.jpg";
import boilerImg from "@/assets/terms/boiler.jpg";
import batteryPackImg from "@/assets/terms/battery-pack.jpg";
import combustionEngineImg from "@/assets/terms/combustion-engine.jpg";
import chargingPortImg from "@/assets/terms/charging-port.jpg";
import electricMotorImg from "@/assets/terms/electric-motor.jpg";
import energyRecoveryImg from "@/assets/terms/energy-recovery.jpg";
import fuelCellImg from "@/assets/terms/fuel-cell.jpg";
import fuelEconomyImg from "@/assets/terms/fuel-economy.jpg";
import gasTurbineImg from "@/assets/terms/gas-turbine.jpg";
import hybridControllerImg from "@/assets/terms/hybrid-controller.jpg";
import inverterImg from "@/assets/terms/inverter.jpg";
import lithiumBatteryImg from "@/assets/terms/lithium-battery.jpg";
import regenerativeBrakingImg from "@/assets/terms/regenerative-braking.jpg";
import zeroEmissionImg from "@/assets/terms/zero-emission.jpg";

export interface DictionaryEntry {
  letter: string;
  primeMover: {
    term: string;
    description: string;
    image: string;
  };
  hybridVehicle: {
    term: string;
    description: string;
    image: string;
  };
}

export const dictionaryData: DictionaryEntry[] = [
  {
    letter: 'A',
    primeMover: {
      term: 'Alternator',
      description: 'A device that converts mechanical energy into electrical energy through electromagnetic induction.',
      image: alternatorImg
    },
    hybridVehicle: {
      term: 'All-Electric Range',
      description: 'The distance a hybrid vehicle can travel using only electric power before the engine starts.',
      image: allElectricRangeImg
    }
  },
  {
    letter: 'B',
    primeMover: {
      term: 'Boiler',
      description: 'A closed vessel where fluid is heated to create steam or hot water for power generation.',
      image: boilerImg
    },
    hybridVehicle: {
      term: 'Battery Pack',
      description: 'A collection of battery cells that store electrical energy to power the electric motor.',
      image: batteryPackImg
    }
  },
  {
    letter: 'C',
    primeMover: {
      term: 'Combustion Engine',
      description: 'An engine that generates power by burning fuel in a combustion chamber.',
      image: combustionEngineImg
    },
    hybridVehicle: {
      term: 'Charging Port',
      description: 'An inlet where external electricity can be connected to charge the vehicle battery.',
      image: chargingPortImg
    }
  },
  {
    letter: 'D',
    primeMover: {
      term: 'Diesel Generator',
      description: 'A generator powered by a diesel engine, commonly used for backup power.',
      image: alternatorImg // Reusing similar image
    },
    hybridVehicle: {
      term: 'Dual Mode',
      description: 'The ability of a hybrid vehicle to operate in both electric and gasoline modes.',
      image: hybridControllerImg
    }
  },
  {
    letter: 'E',
    primeMover: {
      term: 'Electric Motor',
      description: 'A device that converts electrical energy into mechanical energy through magnetic fields.',
      image: electricMotorImg
    },
    hybridVehicle: {
      term: 'Energy Recovery',
      description: 'The process of capturing and storing energy that would otherwise be lost during braking.',
      image: energyRecoveryImg
    }
  },
  {
    letter: 'F',
    primeMover: {
      term: 'Fuel Cell',
      description: 'A device that generates electricity through chemical reactions between hydrogen and oxygen.',
      image: fuelCellImg
    },
    hybridVehicle: {
      term: 'Fuel Economy',
      description: 'The efficiency of a vehicle measured in miles per gallon or kilometers per liter.',
      image: fuelEconomyImg
    }
  },
  {
    letter: 'G',
    primeMover: {
      term: 'Gas Turbine',
      description: 'A rotary engine that extracts energy from flowing combustion gases.',
      image: gasTurbineImg
    },
    hybridVehicle: {
      term: 'Generator Mode',
      description: 'When the hybrid engine runs specifically to generate electricity for the battery.',
      image: alternatorImg
    }
  },
  {
    letter: 'H',
    primeMover: {
      term: 'Hydraulic Power',
      description: 'Power generated using pressurized fluid to drive machinery and equipment.',
      image: boilerImg // Reusing similar image
    },
    hybridVehicle: {
      term: 'Hybrid Controller',
      description: 'The computer system that manages power flow between engine, motor, and battery.',
      image: hybridControllerImg
    }
  },
  {
    letter: 'I',
    primeMover: {
      term: 'Internal Combustion',
      description: 'The process of burning fuel inside an engine cylinder to create power.',
      image: combustionEngineImg
    },
    hybridVehicle: {
      term: 'Inverter',
      description: 'A device that converts DC power from the battery to AC power for the electric motor.',
      image: inverterImg
    }
  },
  {
    letter: 'J',
    primeMover: {
      term: 'Jet Engine',
      description: 'A reaction engine that generates thrust by expelling hot gases at high speed.',
      image: gasTurbineImg // Similar technology
    },
    hybridVehicle: {
      term: 'Jump Start',
      description: 'The ability to start the vehicle using electric power when the main engine is off.',
      image: batteryPackImg
    }
  },
  {
    letter: 'K',
    primeMover: {
      term: 'Kinetic Energy',
      description: 'The energy of motion that can be converted into useful work or electricity.',
      image: electricMotorImg
    },
    hybridVehicle: {
      term: 'Kilowatt Hour',
      description: 'A unit of energy measurement used to describe battery capacity in electric vehicles.',
      image: batteryPackImg
    }
  },
  {
    letter: 'L',
    primeMover: {
      term: 'Linear Generator',
      description: 'A generator that produces electricity from linear motion rather than rotational motion.',
      image: alternatorImg
    },
    hybridVehicle: {
      term: 'Lithium Battery',
      description: 'A rechargeable battery type commonly used in hybrid and electric vehicles.',
      image: lithiumBatteryImg
    }
  },
  {
    letter: 'M',
    primeMover: {
      term: 'Motor Generator',
      description: 'A device that can function as both an electric motor and an electrical generator.',
      image: electricMotorImg
    },
    hybridVehicle: {
      term: 'Mild Hybrid',
      description: 'A hybrid system that cannot drive the vehicle on electric power alone.',
      image: hybridControllerImg
    }
  },
  {
    letter: 'N',
    primeMover: {
      term: 'Nuclear Reactor',
      description: 'A device that initiates controlled nuclear reactions to generate thermal energy.',
      image: boilerImg // Steam generation similar
    },
    hybridVehicle: {
      term: 'Nickel Battery',
      description: 'An older type of rechargeable battery technology used in early hybrid vehicles.',
      image: batteryPackImg
    }
  },
  {
    letter: 'O',
    primeMover: {
      term: 'Otto Engine',
      description: 'A four-stroke internal combustion engine invented by Nikolaus Otto.',
      image: combustionEngineImg
    },
    hybridVehicle: {
      term: 'Onboard Charger',
      description: 'A device that converts AC power from the grid to DC power for the battery.',
      image: chargingPortImg
    }
  },
  {
    letter: 'P',
    primeMover: {
      term: 'Photovoltaic Cell',
      description: 'A device that converts light energy directly into electrical energy.',
      image: fuelCellImg // Similar energy conversion
    },
    hybridVehicle: {
      term: 'Plug-in Hybrid',
      description: 'A hybrid vehicle that can be charged by plugging into an external power source.',
      image: chargingPortImg
    }
  },
  {
    letter: 'Q',
    primeMover: {
      term: 'Quadruple Expansion',
      description: 'A steam engine that uses steam four times in successive cylinders.',
      image: boilerImg
    },
    hybridVehicle: {
      term: 'Quick Charge',
      description: 'Fast charging technology that rapidly replenishes vehicle battery power.',
      image: chargingPortImg
    }
  },
  {
    letter: 'R',
    primeMover: {
      term: 'Rotary Engine',
      description: 'An internal combustion engine with a rotating rotor instead of pistons.',
      image: combustionEngineImg
    },
    hybridVehicle: {
      term: 'Regenerative Braking',
      description: 'A system that captures energy during braking and stores it in the battery.',
      image: regenerativeBrakingImg
    }
  },
  {
    letter: 'S',
    primeMover: {
      term: 'Steam Engine',
      description: 'An engine that uses steam pressure to produce mechanical work.',
      image: boilerImg
    },
    hybridVehicle: {
      term: 'Series Hybrid',
      description: 'A hybrid where the engine only generates electricity and never directly drives the wheels.',
      image: hybridControllerImg
    }
  },
  {
    letter: 'T',
    primeMover: {
      term: 'Turbine',
      description: 'A rotary mechanical device that extracts energy from fluid flow.',
      image: gasTurbineImg
    },
    hybridVehicle: {
      term: 'Traction Motor',
      description: 'The electric motor that directly drives the wheels of a hybrid vehicle.',
      image: electricMotorImg
    }
  },
  {
    letter: 'U',
    primeMover: {
      term: 'Uninterruptible Power',
      description: 'A backup power system that provides immediate power during electrical outages.',
      image: batteryPackImg
    },
    hybridVehicle: {
      term: 'Ultra Capacitor',
      description: 'A high-capacity energy storage device that can quickly charge and discharge.',
      image: batteryPackImg
    }
  },
  {
    letter: 'V',
    primeMover: {
      term: 'Voltage Regulator',
      description: 'A device that maintains constant voltage output from a generator.',
      image: alternatorImg
    },
    hybridVehicle: {
      term: 'Vehicle-to-Grid',
      description: 'Technology that allows hybrid vehicles to supply electricity back to the power grid.',
      image: chargingPortImg
    }
  },
  {
    letter: 'W',
    primeMover: {
      term: 'Wind Turbine',
      description: 'A device that converts wind energy into electrical energy.',
      image: gasTurbineImg
    },
    hybridVehicle: {
      term: 'Watt Hour',
      description: 'A unit of energy measurement equal to one watt of power used for one hour.',
      image: batteryPackImg
    }
  },
  {
    letter: 'X',
    primeMover: {
      term: 'Xenon Flash',
      description: 'A high-intensity light source used in some specialized power applications.',
      image: electricMotorImg
    },
    hybridVehicle: {
      term: 'eXtra Range',
      description: 'Additional driving distance provided by the hybrid powertrain system.',
      image: allElectricRangeImg
    }
  },
  {
    letter: 'Y',
    primeMover: {
      term: 'Yaw Generator',
      description: 'A system that rotates wind turbines to face the wind for optimal power generation.',
      image: gasTurbineImg
    },
    hybridVehicle: {
      term: 'Yoke Assembly',
      description: 'The steering mechanism that connects driver input to vehicle direction.',
      image: hybridControllerImg
    }
  },
  {
    letter: 'Z',
    primeMover: {
      term: 'Zero Emission Generator',
      description: 'An eco-friendly power source that produces electricity without pollutants.',
      image: zeroEmissionImg
    },
    hybridVehicle: {
      term: 'Zero Emission Capability',
      description: 'The ability for a vehicle to operate without producing exhaust emissions.',
      image: zeroEmissionImg
    }
  }
];