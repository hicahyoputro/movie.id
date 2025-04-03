// Data dummy untuk daftar manga
const mangaData = [
    { title: "One Piece", cover: "images/one-piece.jpg", link: "#", category: "general" },
    { title: "Naruto", cover: "images/naruto.jpg", link: "#", category: "general" },
    { title: "Attack on Titan", cover: "images/aot.jpg", link: "#", category: "general" },
    { title: "My Hero Academia", cover: "images/mha.jpg", link: "#", category: "general" },
    { title: "Demon Slayer", cover: "images/demon-slayer.jpg", link: "#", category: "general" },
    { title: "Bleach", cover: "images/bleach.jpg", link: "#", category: "general" },
    { title: "Death Note", cover: "images/death-note.jpg", link: "#", category: "general" },
    { title: "Fullmetal Alchemist", cover: "images/fma.jpg", link: "#", category: "general" },
    { title: "Tokyo Ghoul", cover: "images/tokyo-ghoul.jpg", link: "#", category: "general" },
    { title: "Hunter x Hunter", cover: "images/hxh.jpg", link: "#", category: "general" },
    { title: "Dragon Ball", cover: "images/dragon-ball.jpg", link: "#", category: "general" },
    { title: "Sailor Moon", cover: "images/sailor-moon.jpg", link: "#", category: "general" },
    { title: "Fairy Tail", cover: "images/fairy-tail.jpg", link: "#", category: "general" },
    { title: "Jojo's Bizarre Adventure", cover: "images/jojo.jpg", link: "#", category: "general" },
    { title: "Black Clover", cover: "images/black-clover.jpg", link: "#", category: "general" },
    { title: "Jujutsu Kaisen", cover: "images/jujutsu-kaisen.jpg", link: "#", category: "general" },
    { title: "Spy x Family", cover: "images/spy-x-family.jpg", link: "#", category: "general" },
    { title: "Chainsaw Man", cover: "images/chainsaw-man.jpg", link: "#", category: "general" },
    { title: "Blue Lock", cover: "images/blue-lock.jpg", link: "#", category: "general" },
    { title: "Haikyuu!!", cover: "images/haikyuu.jpg", link: "#", category: "general" },
    { title: "Manga 18+ A", cover: "images/manga-18-a.jpg", link: "#", category: "18+" },
    { title: "Manga 18+ B", cover: "images/manga-18-b.jpg", link: "#", category: "18+" },
    { title: "Manga 18+ B", cover: "images/manga-18-b.jpg", link: "#", category: "18+" },
    { title: "Manga 18+ B", cover: "images/manga-18-b.jpg", link: "#", category: "18+" },
    { title: "Manga 18+ B", cover: "images/manga-18-b.jpg", link: "#", category: "18+" },
    { title: "Manga 18+ B", cover: "images/manga-18-b.jpg", link: "#", category: "18+" },
    { title: "Manga 18+ B", cover: "images/manga-18-b.jpg", link: "#", category: "18+" },
];

// Fungsi untuk menampilkan daftar manga
function displayMangaList(data, containerId) {
    const mangaGrid = document.getElementById(containerId);
    if (!mangaGrid) return; // Pastikan elemen target ada di DOM

    mangaGrid.innerHTML = ""; // Bersihkan konten sebelumnya

    data.forEach(manga => {
        const mangaItem = document.createElement("div");
        mangaItem.classList.add("manga-item");

        mangaItem.innerHTML = `
            <img src="${manga.cover}" alt="${manga.title}">
            <h3>${manga.title}</h3>
            <a href="${manga.link}">Baca Sekarang</a>
        `;

        mangaGrid.appendChild(mangaItem);
    });
}

// Inisialisasi tampilan awal untuk index.html
if (document.getElementById("recommended-grid")) {
    displayMangaList(mangaData.slice(0, 5), "recommended-grid"); // Tampilkan 3 rekomendasi
    displayMangaList(mangaData.slice(0, 5), "recommended-grid18"); // Tampilkan 3 rekomendasi
    displayMangaList(mangaData.filter(manga => manga.category === "general").slice(0, 8), "manga-grid"); // Tampilkan 8 manga umum pertama
}

// Inisialisasi tampilan awal untuk daftar-manga.html
if (document.getElementById("full-manga-grid")) {
    displayMangaList(mangaData.filter(manga => manga.category === "general"), "full-manga-grid"); // Tampilkan semua manga umum
}

// Inisialisasi tampilan awal untuk daftar-manga-18.html
if (document.getElementById("age-verification-modal")) {
    const modal = document.getElementById("age-verification-modal");
    const confirmButton = document.getElementById("confirm-age");
    const denyButton = document.getElementById("deny-age");

    // Pastikan elemen modal dan tombol ada di DOM
    if (modal && confirmButton && denyButton) {
        // Tampilkan modal saat halaman dimuat
        modal.style.display = "flex";

        // Konfirmasi usia
        confirmButton.addEventListener("click", () => {
            modal.style.display = "none"; // Hilangkan modal
            displayMangaList(mangaData.filter(manga => manga.category === "18+"), "full-manga-18-grid"); // Tampilkan semua manga 18+
        });

        // Tolak akses
        denyButton.addEventListener("click", () => {
            window.location.href = "index.html"; // Redirect ke halaman utama
        });
    }
}

// Fungsi pencarian manga
document.querySelectorAll("#search-button").forEach(button => {
    button.addEventListener("click", () => {
        const query = document.getElementById("search-input").value.toLowerCase();
        const filteredData = mangaData.filter(manga =>
            manga.title.toLowerCase().includes(query)
        );
        if (document.getElementById("manga-grid")) {
            displayMangaList(filteredData.filter(manga => manga.category === "general"), "manga-grid");
        } else if (document.getElementById("full-manga-grid")) {
            displayMangaList(filteredData.filter(manga => manga.category === "general"), "full-manga-grid");
        } else if (document.getElementById("full-manga-18-grid")) {
            displayMangaList(filteredData.filter(manga => manga.category === "18+"), "full-manga-18-grid");
        }
    });
});