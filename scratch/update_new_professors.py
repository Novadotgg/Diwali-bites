new_caris = [
    "dr-anishkumar-karia",
    "dr-bhushan-pardeshi",
    "dr-pranita-burbure",
    "dr-santosh-shinde",
    "mr-shyam-shelke",
    "ms-tanmayi-nachane",
    "dr-yogendra-deokar"
]

with open("src/data/professors.ts", "r", encoding="utf-8") as f:
    content = f.read()

count = 0
for pid in new_caris:
    old_str = f'"/professors/{pid}.jpg"'
    new_str = f'"/professors/cari-{pid}.jpg"'
    if old_str in content:
        content = content.replace(old_str, new_str)
        count += 1
    else:
        print(f"Warning: {old_str} not found")

with open("src/data/professors.ts", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Successfully updated {count} new caricature images in professors.ts!")
