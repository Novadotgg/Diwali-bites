export interface Professor {
  realImage?: string
  caricature?: string
  cardImage?: string
  id: string
  name: string
  salutation?: string
  department: string
  designation: string
  image: string
  gender?: 'male' | 'female'
  specialMessage?: string
}

// ============================================================================
// OFFICIAL FACULTY DIRECTORY (EXTRACTED & VERIFIED FROM SBPIM SCREENSHOTS)
// ============================================================================
export const professorsList: Professor[] = [
  {
    "id": "dr-kirti-dharwadkar",
    "salutation": "Respected",
    "name": "Dr. Kirti Dharwadkar",
    "designation": "Director & Professor",
    "department": "Human Resource Management & Economics",
    "image": "/professors/real/dr-kirti-dharwadkar.jpg",
    "realImage": "/professors/real/dr-kirti-dharwadkar.jpg",
    "caricature": "/professors/cari-dr-kirti-dharwadkar.jpg",
    "cardImage": "/invitation/cards/dr-kirti-dharwadkar.jpg",
    "gender": "female",
    "specialMessage": "Respected Director Ma'am, under your esteemed leadership, Diwali sparkles brighter! It is our utmost honor to invite you to inaugurate and bless our Diwali Bites stall."
  },
  {
    "id": "dr-roopali-kudare",
    "salutation": "Respected",
    "name": "Dr. Roopali P. Kudare",
    "designation": "Professor",
    "department": "Financial Management & General Management",
    "image": "/professors/real/dr-roopali-kudare.jpg",
    "realImage": "/professors/real/dr-roopali-kudare.jpg",
    "caricature": "/professors/cari-dr-roopali-kudare.jpg",
    "cardImage": "/invitation/cards/dr-roopali-kudare.jpg",
    "gender": "female",
    "specialMessage": "Respected Dr. Roopali, your 20+ years of academic wisdom inspire us. Please grace our stall and treat yourself to our signature festive delicacies."
  },
  {
    "id": "mr-shivaji-desai",
    "salutation": "Respected",
    "name": "Mr. Shivaji Desai",
    "designation": "Professor of Practice",
    "department": "Logistics & Supply Chain Management",
    "image": "/professors/real/mr-shivaji-desai.jpg",
    "realImage": "/professors/real/mr-shivaji-desai.jpg",
    "caricature": "/professors/cari-mr-shivaji-desai.jpg",
    "cardImage": "/invitation/cards/mr-shivaji-desai.jpg",
    "gender": "male",
    "specialMessage": "Respected Prof. Shivaji, our snack supply chain is optimized for zero delays and maximum taste! We warmly welcome you to experience our stall feast."
  },
  {
    "id": "dr-kajal-maheshwari",
    "salutation": "Respected",
    "name": "Dr. Kajal Maheshwari",
    "designation": "Associate Professor",
    "department": "Marketing & Supply Chain Management",
    "image": "/professors/real/dr-kajal-maheshwari.jpg",
    "realImage": "/professors/real/dr-kajal-maheshwari.jpg",
    "caricature": "/professors/cari-dr-kajal-maheshwari.jpg",
    "cardImage": "/invitation/cards/dr-kajal-maheshwari.jpg",
    "gender": "female",
    "specialMessage": "Respected Dr. Kajal, our marketing campaign led all footsteps to our festive stall! Please join us for delightful festive bites and refreshing sips."
  },
  {
    "id": "dr-bhushan-pardeshi",
    "salutation": "Respected",
    "name": "Dr. Bhushan Pardeshi",
    "designation": "Associate Professor & HOD (Research)",
    "department": "Finance & Accounting Management",
    "image": "/professors/real/dr-bhushan-pardeshi.jpg",
    "realImage": "/professors/real/dr-bhushan-pardeshi.jpg",
    "caricature": "/professors/cari-dr-bhushan-pardeshi.jpg",
    "cardImage": "/invitation/cards/dr-bhushan-pardeshi.jpg",
    "gender": "male",
    "specialMessage": "Respected Dr. Bhushan, peer-reviewed and empirically proven: Diwali Bites sweets bring immediate joy! We look forward to your gracious presence."
  },
  {
    "id": "dr-pranita-burbure",
    "salutation": "Respected",
    "name": "Dr. Pranita Burbure",
    "designation": "Associate Professor",
    "department": "Human Resource Management",
    "image": "/professors/real/dr-pranita-burbure.jpg",
    "realImage": "/professors/real/dr-pranita-burbure.jpg",
    "caricature": "/professors/cari-dr-pranita-burbure.jpg",
    "cardImage": "/invitation/cards/dr-pranita-burbure.jpg",
    "gender": "female",
    "specialMessage": "Respected Dr. Pranita, your heartwarming encouragement empowers us. We warmly invite you to celebrate the festival of lights with our student family."
  },
  {
    "id": "dr-yogendra-deokar",
    "salutation": "Respected",
    "name": "Dr. Yogendrakumar Deokar",
    "designation": "Associate Professor",
    "department": "Marketing & Services Management",
    "image": "/professors/real/dr-yogendra-deokar.jpg",
    "realImage": "/professors/real/dr-yogendra-deokar.jpg",
    "caricature": "/professors/cari-dr-yogendra-deokar.jpg",
    "cardImage": "/invitation/cards/dr-yogendra-deokar.jpg",
    "gender": "male",
    "specialMessage": "Respected Dr. Yogendra, showcasing student entrepreneurship in full Diwali spirit! We would be delighted to host you for festive treats at our stall."
  },
  {
    "id": "dr-anishkumar-karia",
    "salutation": "Respected",
    "name": "Dr. Anishkumar Karia",
    "designation": "Associate Professor & Controller of Examination",
    "department": "Finance & Accounting Management",
    "image": "/professors/real/dr-anishkumar-karia.jpg",
    "realImage": "/professors/real/dr-anishkumar-karia.jpg",
    "caricature": "/professors/cari-dr-anishkumar-karia.jpg",
    "cardImage": "/invitation/cards/dr-anishkumar-karia.jpg",
    "gender": "male",
    "specialMessage": "Respected Dr. Anishkumar, no examinations today, only 100% marks in delicious festive treats! We warmly request your blessings at our stall."
  },
  {
    "id": "dr-santosh-shinde",
    "salutation": "Respected",
    "name": "Dr. Santosh Shinde",
    "designation": "Associate Professor",
    "department": "Marketing Management",
    "image": "/professors/real/dr-santosh-shinde.jpg",
    "realImage": "/professors/real/dr-santosh-shinde.jpg",
    "caricature": "/professors/cari-dr-santosh-shinde.jpg",
    "cardImage": "/invitation/cards/dr-santosh-shinde.jpg",
    "gender": "male",
    "specialMessage": "Respected Dr. Santosh, supreme customer satisfaction and pure festive flavors await you! We cordially welcome you to grace our stall."
  },
  {
    "id": "dr-swapnil-sonkamble",
    "salutation": "Respected",
    "name": "Dr. Swapnil Sonkamble",
    "designation": "Assistant Professor & TPO",
    "department": "Marketing Management & HR",
    "image": "/professors/real/dr-swapnil-sonkamble.jpg",
    "realImage": "/professors/real/dr-swapnil-sonkamble.jpg",
    "caricature": "/professors/cari-dr-swapnil-sonkamble.jpg",
    "cardImage": "/invitation/cards/dr-swapnil-sonkamble.jpg",
    "gender": "male",
    "specialMessage": "Respected Dr. Swapnil, our stall is placing 100% smiles this Diwali! We warmly invite you to enjoy our curated Chaat and festive Mojitos."
  },
  {
    "id": "dr-amarish-padma",
    "salutation": "Respected",
    "name": "Dr. Amarish Padma",
    "designation": "Assistant Professor",
    "department": "Financial Management",
    "image": "/professors/real/dr-amarish-padma.jpg",
    "realImage": "/professors/real/dr-amarish-padma.jpg",
    "caricature": "/professors/cari-dr-amarish-padma.jpg",
    "cardImage": "/invitation/cards/dr-amarish-padma.jpg",
    "gender": "male",
    "specialMessage": "Respected Dr. Amarish, the balance sheet of happiness is fully audited and in surplus! Please join us for authentic festive sweets and refreshments."
  },
  {
    "id": "dr-aishwarya-gopalakrishnan",
    "salutation": "Respected",
    "name": "Dr. Aishwarya Gopalakrishnan",
    "designation": "Assistant Professor",
    "department": "Finance & International Business Management",
    "image": "/professors/real/dr-aishwarya-gopalakrishnan.jpg",
    "realImage": "/professors/real/dr-aishwarya-gopalakrishnan.jpg",
    "caricature": "/professors/cari-dr-aishwarya-gopalakrishnan.jpg",
    "cardImage": "/invitation/cards/dr-aishwarya-gopalakrishnan.jpg",
    "gender": "female",
    "specialMessage": "Respected Dr. Aishwarya, our financial projections show 100% happiness returns! We cordially invite you to taste our global festive mojitos and traditional sweets."
  },
  {
    "id": "dr-padmalochana-bisoyi",
    "salutation": "Respected",
    "name": "Dr. Padmalochana Bisoyi",
    "designation": "Assistant Professor & Associate Research Head",
    "department": "Finance & Economics",
    "image": "/professors/real/dr-padmalochana-bisoyi.jpg",
    "realImage": "/professors/real/dr-padmalochana-bisoyi.jpg",
    "caricature": "/professors/cari-dr-padmalochana-bisoyi.jpg",
    "cardImage": "/invitation/cards/dr-padmalochana-bisoyi.jpg",
    "gender": "female",
    "specialMessage": "Respected Dr. Padmalochana, maximum festive utility and zero opportunity cost! We would be honored by your gracious presence at our stall."
  },
  {
    "id": "dr-iram-sultana-ansari",
    "salutation": "Respected",
    "name": "Dr. Iram-Sultana Ansari",
    "designation": "Assistant Professor",
    "department": "Human Resource Management",
    "image": "/professors/real/dr-iram-sultana-ansari.jpg",
    "realImage": "/professors/real/dr-iram-sultana-ansari.jpg",
    "caricature": "/professors/cari-dr-iram-sultana-ansari.jpg",
    "cardImage": "/invitation/cards/dr-iram-sultana-ansari.jpg",
    "gender": "female",
    "specialMessage": "Respected Dr. Iram, highest happiness and bonding quotient guaranteed! We warmly invite you to share Diwali laughter and delicacies with us."
  },
  {
    "id": "dr-sanjay-gaikwad",
    "salutation": "Respected",
    "name": "Dr. Sanjay Gaikwad",
    "designation": "Assistant Professor",
    "department": "Financial Management",
    "image": "/professors/real/dr-sanjay-gaikwad.jpg",
    "realImage": "/professors/real/dr-sanjay-gaikwad.jpg",
    "caricature": "/professors/cari-dr-sanjay-gaikwad.jpg",
    "cardImage": "/invitation/cards/dr-sanjay-gaikwad.jpg",
    "gender": "male",
    "specialMessage": "Respected Dr. Sanjay, 20+ years of scholarly excellence and continuous support! Please grace our festive stall and savor our handcrafted delicacies."
  },
  {
    "id": "dr-dileep-pawar",
    "salutation": "Respected",
    "name": "Dr. Dileep Pawar",
    "designation": "Assistant Professor",
    "department": "General & Pharma Management",
    "image": "/professors/real/dr-dileep-pawar.jpg",
    "realImage": "/professors/real/dr-dileep-pawar.jpg",
    "caricature": "/professors/cari-dr-dileep-pawar.jpg",
    "cardImage": "/invitation/cards/dr-dileep-pawar.jpg",
    "gender": "male",
    "specialMessage": "Respected Dr. Dileep, proven tonic for health and festive cheer: crispy tangy Dahi Chaat and chilled Mojito! Please visit us at our stall."
  },
  {
    "id": "dr-vishal-wagh",
    "salutation": "Respected",
    "name": "Dr. Vishal W. Wagh",
    "designation": "Assistant Professor",
    "department": "Marketing & Supply Chain Management",
    "image": "/professors/real/dr-vishal-wagh.jpg",
    "realImage": "/professors/real/dr-vishal-wagh.jpg",
    "caricature": "/professors/cari-dr-vishal-wagh.jpg",
    "cardImage": "/invitation/cards/dr-vishal-wagh.jpg",
    "gender": "male",
    "specialMessage": "Respected Dr. Vishal, our brand of festive joy is trending campus-wide! We look forward to hosting you for refreshing sips at our stall."
  },
  {
    "id": "mr-sameer-thakur",
    "salutation": "Respected",
    "name": "Mr. Sameer Thakur",
    "designation": "Assistant Professor",
    "department": "Economics & Marketing Management",
    "image": "/professors/real/mr-sameer-thakur.jpg",
    "realImage": "/professors/real/mr-sameer-thakur.jpg",
    "caricature": "/professors/cari-mr-sameer-thakur.jpg",
    "cardImage": "/invitation/cards/mr-sameer-thakur.jpg",
    "gender": "male",
    "specialMessage": "Respected Prof. Sameer, festive spirits are booming at an all-time high! Please join us at our stall for delightful treats and celebrations."
  },
  {
    "id": "ms-poorva-sane",
    "salutation": "Respected",
    "name": "Ms. Poorva Shripad Sane",
    "designation": "Assistant Professor",
    "department": "Economics & Financial Management",
    "image": "/professors/real/ms-poorva-sane.jpg",
    "realImage": "/professors/real/ms-poorva-sane.jpg",
    "caricature": "/professors/cari-ms-poorva-sane.jpg",
    "cardImage": "/invitation/cards/ms-poorva-sane.jpg",
    "gender": "female",
    "specialMessage": "Respected Prof. Poorva, adding sweetness to every calculation! We would be delighted to have your gracious presence at our Diwali Bites stall."
  },
  {
    "id": "mrs-puja-gavande",
    "salutation": "Respected",
    "name": "Mrs. Puja Gavande",
    "designation": "Assistant Professor - Business Analytics",
    "department": "Business Analytics & Finance",
    "image": "/professors/real/mrs-puja-gavande.jpg",
    "realImage": "/professors/real/mrs-puja-gavande.jpg",
    "caricature": "/professors/cari-mrs-puja-gavande.jpg",
    "cardImage": "/invitation/cards/mrs-puja-gavande.jpg",
    "gender": "female",
    "specialMessage": "Respected Prof. Puja, the data speaks for itself: 100% taste accuracy and joyful vibes! We look forward to welcoming you to our stall."
  },
  {
    "id": "ms-yugandhara-konde",
    "salutation": "Respected",
    "name": "Ms. Yugandhara Konde",
    "designation": "Assistant Professor",
    "department": "Human Resource Management",
    "image": "/professors/real/ms-yugandhara-konde.jpg",
    "realImage": "/professors/real/ms-yugandhara-konde.jpg",
    "caricature": "/professors/cari-ms-yugandhara-konde.jpg",
    "cardImage": "/invitation/cards/ms-yugandhara-konde.jpg",
    "gender": "female",
    "specialMessage": "Respected Prof. Yugandhara, your positive mentorship lights our path. Please celebrate this Diwali with our special treats reserved for you."
  },
  {
    "id": "ms-sonali-mohite",
    "salutation": "Respected",
    "name": "Ms. Sonali Mohite",
    "designation": "Assistant Professor",
    "department": "Human Resource Management",
    "image": "/professors/real/ms-sonali-mohite.jpg",
    "realImage": "/professors/real/ms-sonali-mohite.jpg",
    "caricature": "/professors/cari-ms-sonali-mohite.jpg",
    "cardImage": "/invitation/cards/ms-sonali-mohite.jpg",
    "gender": "female",
    "specialMessage": "Respected Prof. Sonali, organizational joy at its peak! We would be delighted to host you for festive treats and refreshing sips."
  },
  {
    "id": "mr-shyam-shelke",
    "salutation": "Respected",
    "name": "Mr. Shyam Shelke",
    "designation": "Assistant Professor",
    "department": "Marketing Management",
    "image": "/professors/real/mr-shyam-shelke.jpg",
    "realImage": "/professors/real/mr-shyam-shelke.jpg",
    "caricature": "/professors/cari-mr-shyam-shelke.jpg",
    "cardImage": "/invitation/cards/mr-shyam-shelke.jpg",
    "gender": "male",
    "specialMessage": "Respected Prof. Shyam, viral campus enthusiasm and genuine festive flavours! We warmly invite you to taste our festive specials."
  },
  {
    "id": "ms-pooja-nalawade",
    "salutation": "Respected",
    "name": "Ms. Pooja Nalawade",
    "designation": "Head - Training & Placement",
    "department": "Corporate Relations & Talent Development",
    "image": "/professors/real/ms-pooja-nalawade.jpg",
    "realImage": "/professors/real/ms-pooja-nalawade.jpg",
    "caricature": "/professors/cari-ms-pooja-nalawade.jpg",
    "cardImage": "/invitation/cards/ms-pooja-nalawade.jpg",
    "gender": "female",
    "specialMessage": "Respected Ma'am, 100% festive intake with highest packages of taste and delight! We warmly invite you to visit our stall."
  },
  {
    "id": "miss-pooja-lonale",
    "salutation": "Respected",
    "name": "Miss. Pooja Lonale",
    "designation": "Placement Associate",
    "department": "Human Resource Management",
    "image": "/professors/real/miss-pooja-lonale.jpg",
    "realImage": "/professors/real/miss-pooja-lonale.jpg",
    "caricature": "/professors/cari-miss-pooja-lonale.jpg",
    "cardImage": "/invitation/cards/miss-pooja-lonale.jpg",
    "gender": "female",
    "specialMessage": "Respected Miss Pooja, placement into pure festive happiness guaranteed! Please grace our stall and enjoy our delightful Diwali treats."
  },
  {
    "id": "mrs-swati-satpute",
    "salutation": "Respected",
    "name": "Mrs. Swati Satpute",
    "designation": "Librarian SBPIM",
    "department": "Library & Information Science",
    "image": "/professors/real/mrs-swati-satpute.jpg",
    "realImage": "/professors/real/mrs-swati-satpute.jpg",
    "caricature": "/professors/cari-mrs-swati-satpute.jpg",
    "cardImage": "/invitation/cards/mrs-swati-satpute.jpg",
    "gender": "female",
    "specialMessage": "Respected Mrs. Swati, bookmark this Diwali for sweetness and laughter! We would be deeply honored by your presence at our stall."
  },
  {
    "id": "ms-tanmayi-nachane",
    "salutation": "Respected",
    "name": "Ms. Tanmayi Nachane",
    "designation": "Teaching Associate",
    "department": "Human Resource Management",
    "image": "/professors/real/ms-tanmayi-nachane.jpg",
    "realImage": "/professors/real/ms-tanmayi-nachane.jpg",
    "caricature": "/professors/cari-ms-tanmayi-nachane.jpg",
    "cardImage": "/invitation/cards/ms-tanmayi-nachane.jpg",
    "gender": "female",
    "specialMessage": "Respected Prof. Tanmayi, vibrant energy and sweet celebrations! We warmly welcome you to celebrate the festive season with us at our stall."
  }
]
