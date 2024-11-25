const allDropdown = document.querySelectorAll("#sidebar .slide-dropdown");
const sideMenuLinks = document.querySelectorAll("#sidebar .side-menu a");

// Fungsi untuk menutup dropdown saat klik di luar menu sidebar
document.addEventListener("click", (e) => {
  const isClickInsideSidebar = e.target.closest("#sidebar"); // Cek apakah klik di dalam sidebar
  const isClickInsideDropdown = e.target.closest(".slide-dropdown"); // Cek apakah klik di dalam dropdown

  // Jika klik di luar sidebar dan dropdown, tutup semua dropdown
  if (!isClickInsideSidebar) {
    allDropdown.forEach((dropdown) => {
      dropdown.classList.remove("show"); // Menyembunyikan dropdown
    });
    sideMenuLinks.forEach((link) => {
      const iconRight = link.querySelector(".icon-right");
      if (iconRight) iconRight.classList.remove("rotate"); // Mengembalikan posisi icon ke kanan
    });
  }
});

// Menangani klik pada side menu links
sideMenuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Mencegah aksi default link

    // Hapus kelas active dari semua link di sidebar
    sideMenuLinks.forEach((otherLink) => {
      otherLink.classList.remove("active");
    });

    // Menambahkan kelas active pada link yang diklik
    link.classList.add("active");

    // Menemukan icon-right di dalam link
    const iconRight = link.querySelector(".icon-right");

    // Mencari apakah link yang diklik memiliki dropdown
    const dropdown = link.nextElementSibling;

    // Jika link yang diklik memiliki dropdown
    if (dropdown && dropdown.classList.contains("slide-dropdown")) {
      // Jika dropdown sudah terbuka, tutup dropdown
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
        if (iconRight) iconRight.classList.remove("rotate"); // Putar kembali icon-right ke kanan
      } else {
        // Jika dropdown tidak terbuka, buka dropdown
        allDropdown.forEach((otherDropdown) => {
          otherDropdown.classList.remove("show"); // Tutup semua dropdown lain
        });
        dropdown.classList.add("show"); // Buka dropdown ini
        if (iconRight) iconRight.classList.add("rotate"); // Putar icon-right ke bawah
      }
    } else {
      // Jika tidak ada dropdown, pastikan semua dropdown ditutup
      allDropdown.forEach((dropdown) => {
        dropdown.classList.remove("show");
      });
      if (iconRight) iconRight.classList.remove("rotate"); // Putar kembali icon-right ke kanan
    }
  });
});
