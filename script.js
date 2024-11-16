document
  .getElementById("khodamForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("nameInput").value;
    if (name.trim() !== "") {
      addKhodamToTable(name);
      document.getElementById("nameInput").value = "";
    }
  });

const khodams = [
  { name: "Khodam Si Raja Kelembekan", image: "assets/raja.jpeg" },
  { name: "Khodam Sihir Kucing", image: "assets/sihir.jpeg" },
  { name: "Khodam Kucing Si Pencuri Makanan", image: "assets/pencuri.jpeg" },
  { name: "Khodam Kucing Pahlawan Tidur", image: "assets/tidur.jpeg" },
  { name: "Khodam Kucing Pemberani Lemes", image: "assets/lemes.jpeg" },
  { name: "Khodam Kucing Juragan Cakar", image: "assets/cakar.jpeg" },
  { name: "Khodam Kucing Tomlol", image: "assets/tomlol.jpeg" },
  { name: "Khodam Kucing Master Meler", image: "assets/meler.jpeg" },
  { name: "Khodam Kucing Super Peluk", image: "assets/peluk.jpeg" },
  { name: "Khodam Kucing Si Raja Jamet", image: "assets/jamet.jpeg" },
  { name: "Khodam Kucing Penjaga Tangga", image: "assets/tangga.jpeg" },
  { name: "Khodam Kucing Super Slay", image: "assets/super.jpeg" },
  { name: "Khodam Kucing Si Raja Kelembekan", image: "assets/kelambekan.jpeg" },
  { name: "Khodam Kucing Si Penguasa Sofa", image: "assets/sofa.jpeg" },
  { name: "Khodam Kucing Ninja Terlambat", image: "assets/ninja.jpeg" },
  { name: "Khodam Kucing Pecinta Panci", image: "assets/ninja.jpeg" },
  { name: "Khodam Kucing Master Tidur Siang", image: "assets/turu.jpeg" },
  { name: "Khodam Kucing Pembantu Kucing Gila", image: "assets/gila.jpeg" },
  { name: "Khodam Kucing Badut Handal", image: "assets/badut.jpeg" },
  { name: "Khodam Kucing Penyusup Kulkas", image: "assets/kulkas.jpeg" },
  { name: "Khodam Kucing Raja Gerobak", image: "assets/gerobak.jpeg" },
  { name: "Khodam Kucing Pemabuk", image: "assets/mabuk.jpeg" },
  { name: "Khodam Kucing Sigma Brutal", image: "assets/sigma.jpeg" },
  { name: "Khodam Kucing Pemburu Kabel", image: "assets/kabel.jpeg" },
];

// Function to hash the name and map it to an index
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

function getKhodamByName(name) {
  const index = Math.abs(hashCode(name)) % khodams.length;
  return khodams[index];
}

function addKhodamToTable(name) {
  const tableBody = document.getElementById("tableBody");
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = name;

  const khodam = getKhodamByName(name);
  const imageCell = document.createElement("td");
  const image = document.createElement("img");
  image.src = khodam.image;
  image.alt = khodam.name;
  image.style.width = "200px"; // Atur ukuran gambar sesuai kebutuhan
  imageCell.appendChild(image);

  const khodamNameCell = document.createElement("td");
  khodamNameCell.textContent = khodam.name;

  row.appendChild(nameCell);
  row.appendChild(imageCell);
  row.appendChild(khodamNameCell);

  // Add new row to the top of the table body
  tableBody.insertBefore(row, tableBody.firstChild);
}
