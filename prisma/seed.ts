import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

const sectors = [
  {
      "sectorValue": 1,
      "sectorName": "Manufacturing"
  },
  {
      "sectorValue": 19,
      "sectorName": "Construction materials"
  },
  {
      "sectorValue": 18,
      "sectorName": "Electronics and Optics"
  },
  {
      "sectorValue": 6,
      "sectorName": "Food and Beverage"
  },
  {
      "sectorValue": 342,
      "sectorName": "Bakery & confectionery products"
  },
  {
      "sectorValue": 43,
      "sectorName": "Beverages"
  },
  {
      "sectorValue": 42,
      "sectorName": "Fish & fish products"
  },
  {
      "sectorValue": 40,
      "sectorName": "Meat & meat products"
  },
  {
      "sectorValue": 39,
      "sectorName": "Milk & dairy products"
  },
  {
      "sectorValue": 437,
      "sectorName": "Other"
  },
  {
      "sectorValue": 378,
      "sectorName": "Sweets & snack food"
  },
  {
      "sectorValue": 13,
      "sectorName": "Furniture"
  },
  {
      "sectorValue": 389,
      "sectorName": "Bathroom/sauna"
  },
  {
      "sectorValue": 385,
      "sectorName": "Bedroom"
  },
  {
      "sectorValue": 390,
      "sectorName": "Childrenâ€™s room"
  },
  {
      "sectorValue": 98,
      "sectorName": "Kitchen"
  },
  {
      "sectorValue": 101,
      "sectorName": "Living room"
  },
  {
      "sectorValue": 392,
      "sectorName": "Office"
  },
  {
      "sectorValue": 394,
      "sectorName": "Other (Furniture)"
  },
  {
      "sectorValue": 341,
      "sectorName": "Outdoor"
  },
  {
      "sectorValue": 99,
      "sectorName": "Project furniture"
  },
  {
      "sectorValue": 12,
      "sectorName": "Machinery"
  },
  {
      "sectorValue": 94,
      "sectorName": "Machinery components"
  },
  {
      "sectorValue": 91,
      "sectorName": "Machinery equipment/tools"
  },
  {
      "sectorValue": 224,
      "sectorName": "Manufacture of machinery"
  },
  {
      "sectorValue": 97,
      "sectorName": "Maritime"
  },
  {
      "sectorValue": 271,
      "sectorName": "Aluminium and steel workboats"
  },
  {
      "sectorValue": 269,
      "sectorName": "Boat/Yacht building"
  },
  {
      "sectorValue": 230,
      "sectorName": "Ship repair and conversion"
  },
  {
      "sectorValue": 93,
      "sectorName": "Metal structures"
  },
  {
      "sectorValue": 508,
      "sectorName": "Other"
  },
  {
      "sectorValue": 227,
      "sectorName": "Repair and maintenance service"
  },
  {
      "sectorValue": 11,
      "sectorName": "Metalworking"
  },
  {
      "sectorValue": 67,
      "sectorName": "Construction of metal structures"
  },
  {
      "sectorValue": 263,
      "sectorName": "Houses and buildings"
  },
  {
      "sectorValue": 267,
      "sectorName": "Metal products"
  },
  {
      "sectorValue": 542,
      "sectorName": "Metal works"
  },
  {
      "sectorValue": 75,
      "sectorName": "CNC-machining"
  },
  {
      "sectorValue": 62,
      "sectorName": "Forgings, Fasteners"
  },
  {
      "sectorValue": 69,
      "sectorName": "Gas, Plasma, Laser cutting"
  },
  {
      "sectorValue": 66,
      "sectorName": "MIG, TIG, Aluminum welding"
  },
  {
      "sectorValue": 9,
      "sectorName": "Plastic and Rubber"
  },
  {
      "sectorValue": 54,
      "sectorName": "Packaging"
  },
  {
      "sectorValue": 556,
      "sectorName": "Plastic goods"
  },
  {
      "sectorValue": 559,
      "sectorName": "Plastic processing technology"
  },
  {
      "sectorValue": 55,
      "sectorName": "Blowing"
  },
  {
      "sectorValue": 57,
      "sectorName": "Moulding"
  },
  {
      "sectorValue": 53,
      "sectorName": "Plastics welding and processing"
  },
  {
      "sectorValue": 560,
      "sectorName": "Plastic profiles"
  },
  {
      "sectorValue": 5,
      "sectorName": "Printing"
  },
  {
      "sectorValue": 148,
      "sectorName": "Advertising"
  },
  {
      "sectorValue": 150,
      "sectorName": "Book/Periodicals printing"
  },
  {
      "sectorValue": 145,
      "sectorName": "Labelling and packaging printing"
  },
  {
      "sectorValue": 7,
      "sectorName": "Textile and Clothing"
  },
  {
      "sectorValue": 44,
      "sectorName": "Clothing"
  },
  {
      "sectorValue": 45,
      "sectorName": "Textile"
  },
  {
      "sectorValue": 8,
      "sectorName": "Wood"
  },
  {
      "sectorValue": 337,
      "sectorName": "Other (Wood)"
  },
  {
      "sectorValue": 51,
      "sectorName": "Wooden building materials"
  },
  {
      "sectorValue": 47,
      "sectorName": "Wooden houses"
  },
  {
      "sectorValue": 3,
      "sectorName": "Other"
  },
  {
      "sectorValue": 37,
      "sectorName": "Creative industries"
  },
  {
      "sectorValue": 29,
      "sectorName": "Energy technology"
  },
  {
      "sectorValue": 33,
      "sectorName": "Environment"
  },
  {
      "sectorValue": 2,
      "sectorName": "Service"
  },
  {
      "sectorValue": 25,
      "sectorName": "Business services"
  },
  {
      "sectorValue": 35,
      "sectorName": "Engineering"
  },
  {
      "sectorValue": 28,
      "sectorName": "Information Technology and Telecommunications"
  },
  {
      "sectorValue": 581,
      "sectorName": "Data processing, Web portals, E-marketing"
  },
  {
      "sectorValue": 576,
      "sectorName": "Programming, Consultancy"
  },
  {
      "sectorValue": 121,
      "sectorName": "Software, Hardware"
  },
  {
      "sectorValue": 122,
      "sectorName": "Telecommunications"
  },
  {
      "sectorValue": 22,
      "sectorName": "Tourism"
  },
  {
      "sectorValue": 141,
      "sectorName": "Translation services"
  },
  {
      "sectorValue": 21,
      "sectorName": "Transport and Logistics"
  },
  {
      "sectorValue": 111,
      "sectorName": "Air"
  },
  {
      "sectorValue": 114,
      "sectorName": "Rail"
  },
  {
      "sectorValue": 112,
      "sectorName": "Road"
  },
  {
      "sectorValue": 113,
      "sectorName": "Water"
  }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const sector of sectors) {
    const user = await prisma.sector.create({
      data: sector
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
  // prisma.sector.createMany({
  //   data: sectors
  // })
  // console.log(`Seeding finished.`)
  // console.log(`Seeding finished.`, sectors)
  
}

main()
.then(async () => {
  console.log(`Seeding success`)
  await prisma.$disconnect()
})
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  console.log(`Seeding failed`)
    process.exit(1)
  })
