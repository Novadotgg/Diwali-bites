export interface Professor {
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
    "id": "dr-aishwarya-gopalakrishnan",
    "salutation": "Respected",
    "name": "Dr. Aishwarya Gopalakrishnan",
    "designation": "Assistant Professor",
    "department": "Finance & International Business Management",
    "image": "/professors/dr-aishwarya-gopalakrishnan.jpg",
    "gender": "female",
    "specialMessage": "Respected Dr. Aishwarya, our financial projections show 100% happiness returns! We cordially invite you to taste our global festive mojitos and traditional sweets."
  },
  {
    "id": "dr-roopali-kudare",
    "salutation": "Respected",
    "name": "Dr. Roopali P. Kudare",
    "designation": "Professor",
    "department": "Financial Management & General Management",
    "image": "/professors/dr-roopali-kudare.jpg",
    "gender": "female",
    "specialMessage": "Respected Dr. Roopali, your 20+ years of academic wisdom inspire us. Please grace Stall No. 4 and treat yourself to our signature festive delicacies."
  },
  {
    "id": "dr-kirti-dharwadkar",
    "salutation": "Respected",
    "name": "Dr. Kirti Dharwadkar",
    "designation": "Director & Professor",
    "department": "Human Resource Management & Economics",
    "image": "/professors/dr-kirti-dharwadkar.jpg",
    "gender": "female",
    "specialMessage": "Respected Director Ma'am, under your esteemed leadership, Diwali sparkles brighter! It is our utmost honor to invite you to inaugurate and bless Stall No. 4."
  },
  {
    "id": "mr-shivaji-desai",
    "salutation": "Respected",
    "name": "Mr. Shivaji Desai",
    "designation": "Professor of Practice",
    "department": "Logistics & Supply Chain Management",
    "image": "/professors/mr-shivaji-desai.jpg",
    "gender": "male",
    "specialMessage": "Respected Prof. Shivaji, our snack supply chain is optimized for zero delays and maximum taste! We warmly welcome you to experience our stall feast."
  },
  {
    "id": "dr-bhushan-pardeshi",
    "salutation": "Respected",
    "name": "Dr. Bhushan Pardeshi",
    "designation": "Associate Professor & HOD (Research)",
    "department": "Finance & Accounting Management",
    "image": "/professors/dr-bhushan-pardeshi.jpg",
    "gender": "male",
    "specialMessage": "Respected Dr. Bhushan, peer-reviewed and empirically proven: Diwali Bites sweets bring immediate joy! We look forward to your gracious presence."
  },
  {
    "id": "dr-kajal-maheshwari",
    "salutation": "Respected",
    "name": "Dr. Kajal Maheshwari",
    "designation": "Associate Professor",
    "department": "Marketing & Supply Chain Management",
    "image": "/professors/dr-kajal-maheshwari.jpg",
    "gender": "female",
    "specialMessage": "Respected Dr. Kajal, our marketing campaign led all footsteps to Stall No. 4! Please join us for delightful festive bites and refreshing sips."
  },
  {
    "id": "dr-yogendra-deokar",
    "salutation": "Respected",
    "name": "Dr. Yogendrakumar Deokar",
    "designation": "Associate Professor",
    "department": "Marketing & Services Management",
    "image": "/professors/dr-yogendra-deokar.jpg",
    "gender": "male",
    "specialMessage": "Respected Dr. Yogendra, showcasing student entrepreneurship in full Diwali spirit! We would be delighted to host you for festive treats at Stall No. 4."
  },
  {
    "id": "dr-pranita-burbure",
    "salutation": "Respected",
    "name": "Dr. Pranita Burbure",
    "designation": "Associate Professor",
    "department": "Human Resource Management",
    "image": "/professors/dr-pranita-burbure.jpg",
    "gender": "female",
    "specialMessage": "Respected Dr. Pranita, your heartwarming encouragement empowers us. We warmly invite you to celebrate the festival of lights with our student family."
  },
  {
    "id": "dr-santosh-shinde",
    "salutation": "Respected",
    "name": "Dr. Santosh Shinde",
    "designation": "Associate Professor",
    "department": "Marketing Management",
    "image": "/professors/dr-santosh-shinde.jpg",
    "gender": "male",
    "specialMessage": "Respected Dr. Santosh, supreme customer satisfaction and pure festive flavors await you! We cordially welcome you to grace Stall No. 4."
  },
  {
    "id": "dr-anishkumar-karia",
    "salutation": "Respected",
    "name": "Dr. Anishkumar Karia",
    "designation": "Associate Professor & Controller of Examination",
    "department": "Finance & Accounting Management",
    "image": "/professors/dr-anishkumar-karia.jpg",
    "gender": "male",
    "specialMessage": "Respected Dr. Anishkumar, no examinations today, only 100% marks in delicious festive treats! We warmly request your blessings at our stall."
  },
  {
    "id": "dr-amarish-padma",
    "salutation": "Respected",
    "name": "Dr. Amarish Padma",
    "designation": "Assistant Professor",
    "department": "Financial Management",
    "image": "/professors/dr-amarish-padma.jpg",
    "gender": "male",
    "specialMessage": "Respected Dr. Amarish, the balance sheet of happiness is fully audited and in surplus! Please join us for authentic festive sweets and refreshments."
  },
  {
    "id": "dr-swapnil-sonkamble",
    "salutation": "Respected",
    "name": "Dr. Swapnil Sonkamble",
    "designation": "Assistant Professor & TPO",
    "department": "Marketing Management & HR",
    "image": "/professors/dr-swapnil-sonkamble.jpg",
    "gender": "male",
    "specialMessage": "Respected Dr. Swapnil, our stall is placing 100% smiles this Diwali! We warmly invite you to enjoy our curated Chaat and festive Mojitos."
  },
  {
    "id": "dr-padmalochana-bisoyi",
    "salutation": "Respected",
    "name": "Dr. Padmalochana Bisoyi",
    "designation": "Assistant Professor & Associate Research Head",
    "department": "Finance & Economics",
    "image": "/professors/dr-padmalochana-bisoyi.jpg",
    "gender": "female",
    "specialMessage": "Respected Dr. Padmalochana, maximum festive utility and zero opportunity cost! We would be honored by your gracious presence at Stall No. 4."
  },
  {
    "id": "dr-sanjay-gaikwad",
    "salutation": "Respected",
    "name": "Dr. Sanjay Gaikwad",
    "designation": "Assistant Professor",
    "department": "Financial Management",
    "image": "/professors/dr-sanjay-gaikwad.jpg",
    "gender": "male",
    "specialMessage": "Respected Dr. Sanjay, 20+ years of scholarly excellence and continuous support! Please grace our festive stall and savor our handcrafted delicacies."
  },
  {
    "id": "dr-iram-sultana-ansari",
    "salutation": "Respected",
    "name": "Dr. Iram-Sultana Ansari",
    "designation": "Assistant Professor",
    "department": "Human Resource Management",
    "image": "/professors/dr-iram-sultana-ansari.jpg",
    "gender": "female",
    "specialMessage": "Respected Dr. Iram, highest happiness and bonding quotient guaranteed! We warmly invite you to share Diwali laughter and delicacies with us."
  },
  {
    "id": "dr-vishal-wagh",
    "salutation": "Respected",
    "name": "Dr. Vishal W. Wagh",
    "designation": "Assistant Professor",
    "department": "Marketing & Supply Chain Management",
    "image": "/professors/dr-vishal-wagh.jpg",
    "gender": "male",
    "specialMessage": "Respected Dr. Vishal, our brand of festive joy is trending campus-wide! We look forward to hosting you for refreshing sips at Stall No. 4."
  },
  {
    "id": "dr-dileep-pawar",
    "salutation": "Respected",
    "name": "Dr. Dileep Pawar",
    "designation": "Assistant Professor",
    "department": "General & Pharma Management",
    "image": "/professors/dr-dileep-pawar.jpg",
    "gender": "male",
    "specialMessage": "Respected Dr. Dileep, proven tonic for health and festive cheer: crispy tangy Dahi Chaat and chilled Mojito! Please visit us at Stall No. 4."
  },
  {
    "id": "ms-poorva-sane",
    "salutation": "Respected",
    "name": "Ms. Poorva Shripad Sane",
    "designation": "Assistant Professor",
    "department": "Economics & Financial Management",
    "image": "/professors/ms-poorva-sane.jpg",
    "gender": "female",
    "specialMessage": "Respected Prof. Poorva, adding sweetness to every calculation! We would be delighted to have your gracious presence at our Diwali Bites stall."
  },
  {
    "id": "mr-sameer-thakur",
    "salutation": "Respected",
    "name": "Mr. Sameer Thakur",
    "designation": "Assistant Professor",
    "department": "Economics & Marketing Management",
    "image": "/professors/mr-sameer-thakur.jpg",
    "gender": "male",
    "specialMessage": "Respected Prof. Sameer, festive spirits are booming at an all-time high! Please join us at Stall No. 4 for delightful treats and celebrations."
  },
  {
    "id": "ms-yugandhara-konde",
    "salutation": "Respected",
    "name": "Ms. Yugandhara Konde",
    "designation": "Assistant Professor",
    "department": "Human Resource Management",
    "image": "/professors/ms-yugandhara-konde.jpg",
    "gender": "female",
    "specialMessage": "Respected Prof. Yugandhara, your positive mentorship lights our path. Please celebrate this Diwali with our special treats reserved for you."
  },
  {
    "id": "mrs-puja-gavande",
    "salutation": "Respected",
    "name": "Mrs. Puja Gavande",
    "designation": "Assistant Professor - Business Analytics",
    "department": "Business Analytics & Finance",
    "image": "/professors/mrs-puja-gavande.jpg",
    "gender": "female",
    "specialMessage": "Respected Prof. Puja, the data speaks for itself: 100% taste accuracy and joyful vibes! We look forward to welcoming you to Stall No. 4."
  },
  {
    "id": "mr-shyam-shelke",
    "salutation": "Respected",
    "name": "Mr. Shyam Shelke",
    "designation": "Assistant Professor",
    "department": "Marketing Management",
    "image": "/professors/mr-shyam-shelke.jpg",
    "gender": "male",
    "specialMessage": "Respected Prof. Shyam, viral campus enthusiasm and genuine festive flavours! We warmly invite you to taste our festive specials."
  },
  {
    "id": "ms-sonali-mohite",
    "salutation": "Respected",
    "name": "Ms. Sonali Mohite",
    "designation": "Assistant Professor",
    "department": "Human Resource Management",
    "image": "/professors/ms-sonali-mohite.jpg",
    "gender": "female",
    "specialMessage": "Respected Prof. Sonali, organizational joy at its peak! We would be delighted to host you for festive treats and refreshing sips."
  },
  {
    "id": "miss-pooja-lonale",
    "salutation": "Respected",
    "name": "Miss. Pooja Lonale",
    "designation": "Placement Associate",
    "department": "Human Resource Management",
    "image": "/professors/miss-pooja-lonale.jpg",
    "gender": "female",
    "specialMessage": "Respected Miss Pooja, placement into pure festive happiness guaranteed! Please grace Stall No. 4 and enjoy our delightful Diwali treats."
  },
  {
    "id": "ms-pooja-nalawade",
    "salutation": "Respected",
    "name": "Ms. Pooja Nalawade",
    "designation": "Head - Training & Placement",
    "department": "Corporate Relations & Talent Development",
    "image": "/professors/ms-pooja-nalawade.jpg",
    "gender": "female",
    "specialMessage": "Respected Ma'am, 100% festive intake with highest packages of taste and delight! We warmly invite you to visit our stall."
  },
  {
    "id": "mrs-swati-satpute",
    "salutation": "Respected",
    "name": "Mrs. Swati Satpute",
    "designation": "Librarian SBPIM",
    "department": "Library & Information Science",
    "image": "/professors/mrs-swati-satpute.jpg",
    "gender": "female",
    "specialMessage": "Respected Mrs. Swati, bookmark this Diwali for sweetness and laughter! We would be deeply honored by your presence at Stall No. 4."
  },
  {
    "id": "ms-tanmayi-nachane",
    "salutation": "Respected",
    "name": "Ms. Tanmayi Nachane",
    "designation": "Teaching Associate",
    "department": "Human Resource Management",
    "image": "/professors/ms-tanmayi-nachane.jpg",
    "gender": "female",
    "specialMessage": "Respected Prof. Tanmayi, vibrant energy and sweet celebrations! We warmly welcome you to celebrate the festive season with us at Stall No. 4."
  }
]
