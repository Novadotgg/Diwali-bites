import os

caris = [
    "dr-aishwarya-gopalakrishnan",
    "dr-roopali-kudare",
    "dr-kirti-dharwadkar",
    "mr-shivaji-desai",
    "dr-kajal-maheshwari",
    "dr-amarish-padma",
    "dr-padmalochana-bisoyi",
    "dr-sanjay-gaikwad",
    "dr-iram-sultana-ansari",
    "dr-vishal-wagh",
    "dr-dileep-pawar",
    "ms-poorva-sane",
    "mr-sameer-thakur",
    "ms-yugandhara-konde",
    "mrs-puja-gavande",
    "ms-sonali-mohite",
    "miss-pooja-lonale",
    "ms-pooja-nalawade",
    "mrs-swati-satpute"
]

with open("src/data/professors.ts", "r", encoding="utf-8") as f:
    content = f.read()

count = 0
for pid in caris:
    old_str = f'"/professors/{pid}.jpg"'
    new_str = f'"/professors/cari-{pid}.jpg"'
    if old_str in content:
        content = content.replace(old_str, new_str)
        count += 1
    else:
        print(f"Warning: {old_str} not found")

with open("src/data/professors.ts", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Successfully updated {count} caricature images in professors.ts!")
