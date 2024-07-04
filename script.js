// Data hotel berdasarkan destinasi
const hotelData = {
    yogyakarta: [
        { name: "Hyatt Regency Yogyakarta", facilities: "Kolam Renang, Spa, Restoran", price: "Rp 3.000.000 per malam", address: "Yogyakarta, Indonesia" },
        { name: "The Phoenix Hotel Yogyakarta", facilities: "Kolam Renang, Gym, Restoran", price: "Rp 1.500.000 per malam", address: "Yogyakarta, Indonesia" },
        { name: "Amanjiwo Yogyakarta", facilities: "Kolam Renang, Spa, Restoran", price: "Rp 5.000.000 per malam", address: "Yogyakarta, Indonesia" },
        { name: "Grand Aston Yogyakarta", facilities: "Kolam Renang, Spa, Restoran", price: "Rp 2.500.000 per malam", address: "Yogyakarta, Indonesia" },
        { name: "Jambuluwuk Malioboro Yogyakarta", facilities: "Kolam Renang, Gym, Restoran", price: "Rp 1.800.000 per malam", address: "Yogyakarta, Indonesia" }
        // Tambahkan hotel lainnya untuk Yogyakarta jika diperlukan
    ],
    bali: [
        { name: "The Ritz-Carlton Bali", facilities: "Private Beach, Kolam Renang Infinity, Restoran", price: "Rp 7.000.000 per malam", address: "Bali, Indonesia" },
        { name: "Four Seasons Resort Bali at Jimbaran Bay", facilities: "Kolam Renang, Spa, Restoran", price: "Rp 8.000.000 per malam", address: "Bali, Indonesia" },
        { name: "AYANA Resort and Spa Bali", facilities: "Private Beach, Kolam Renang Infinity, Spa", price: "Rp 6.500.000 per malam", address: "Bali, Indonesia" },
        { name: "COMO Uma Ubud Bali", facilities: "Mountain View, Kolam Renang, Spa", price: "Rp 4.500.000 per malam", address: "Bali, Indonesia" },
        { name: "Mandapa, a Ritz-Carlton Reserve", facilities: "Private Pool, Kolam Renang, Spa", price: "Rp 9.000.000 per malam", address: "Bali, Indonesia" }
        // Tambahkan hotel lainnya untuk Bali jika diperlukan
    ],
    rajaAmpat: [
        { name: "Raja Ampat Dive Lodge", facilities: "Beachfront, Diving Center, Restaurant", price: "Rp 2.500.000 per malam", address: "Raja Ampat, Indonesia" },
        { name: "Papua Explorers Resort", facilities: "Overwater Bungalows, Diving Center, Restaurant", price: "Rp 4.000.000 per malam", address: "Raja Ampat, Indonesia" },
        { name: "Raja Ampat Dive Resort", facilities: "Diving Center, Sea View, Restaurant", price: "Rp 3.000.000 per malam", address: "Raja Ampat, Indonesia" },
        { name: "Misool Eco Resort", facilities: "Overwater Bungalows, Diving Center, Restaurant", price: "Rp 5.500.000 per malam", address: "Raja Ampat, Indonesia" },
        { name: "Kri Eco Resort", facilities: "Beachfront, Diving Center, Restaurant", price: "Rp 3.800.000 per malam", address: "Raja Ampat, Indonesia" }
        // Tambahkan hotel lainnya untuk Raja Ampat jika diperlukan
    ],
    danauToba: [
        { name: "Tabo Cottages", facilities: "Lake View, Restaurant, Traditional Batak House", price: "Rp 1.200.000 per malam", address: "Danau Toba, Indonesia" },
        { name: "Toledo Inn", facilities: "Lakefront, Restaurant, Garden", price: "Rp 800.000 per malam", address: "Danau Toba, Indonesia" },
        { name: "Sere Manis Homestay", facilities: "Lake View, Garden, Restaurant", price: "Rp 600.000 per malam", address: "Danau Toba, Indonesia" },
        { name: "Toba Village Inn", facilities: "Lakefront, Restaurant, Cultural Shows", price: "Rp 1.000.000 per malam", address: "Danau Toba, Indonesia" },
        { name: "Mas Cottages", facilities: "Lake View, Restaurant, Traditional Batak House", price: "Rp 900.000 per malam", address: "Danau Toba, Indonesia" }
        // Tambahkan hotel lainnya untuk Danau Toba jika diperlukan
    ],
    bromo: [
        { name: "Jiwa Jawa Resort Bromo", facilities: "Mountain View, Restaurant, Cultural Activities", price: "Rp 1.800.000 per malam", address: "Bromo, Indonesia" },
        { name: "Bromo Cottages", facilities: "Mountain View, Restaurant, Trekking Packages", price: "Rp 1.500.000 per malam", address: "Bromo, Indonesia" },
        { name: "Lava View Lodge", facilities: "Mountain View, Restaurant, Cultural Tours", price: "Rp 1.200.000 per malam", address: "Bromo, Indonesia" },
        { name: "Bromo Terrace Hotel", facilities: "Mountain View, Restaurant, Spa", price: "Rp 1.700.000 per malam", address: "Bromo, Indonesia" },
        { name: "Whiz Capsule Hotel Bromo", facilities: "Mountain View, Restaurant, Capsule Rooms", price: "Rp 600.000 per malam", address: "Bromo, Indonesia" }
        // Tambahkan hotel lainnya untuk Bromo jika diperlukan
    ],
    wakatobi: [
        { name: "Wakatobi Dive Resort", facilities: "Beachfront, Diving Center, Spa", price: "Rp 3.500.000 per malam", address: "Wakatobi, Indonesia" },
        { name: "Patuno Resort Wakatobi", facilities: "Sea View, Diving Center, Restaurant", price: "Rp 2.800.000 per malam", address: "Wakatobi, Indonesia" },
        { name: "Wakatobi Patuno Resort Tomia", facilities: "Beachfront, Diving Center, Restaurant", price: "Rp 3.200.000 per malam", address: "Wakatobi, Indonesia" },
        { name: "Wakatobi Dive Resort Onemobaa", facilities: "Sea View, Diving Center, Spa", price: "Rp 3.700.000 per malam", address: "Wakatobi, Indonesia" },
        { name: "Wakatobi Villas", facilities: "Beachfront, Diving Center, Spa", price: "Rp 4.200.000 per malam", address: "Wakatobi, Indonesia" }
        // Tambahkan hotel lainnya untuk Wakatobi jika diperlukan
    ],
    samarinda: [
        { name: "Midtown Hotel Samarinda", facilities: "City View, Restaurant, Gym", price: "Rp 900.000 per malam", address: "Samarinda, Indonesia" },
        { name: "Swiss-Belhotel Borneo Samarinda", facilities: "River View, Restaurant, Spa", price: "Rp 1.200.000 per malam", address: "Samarinda, Indonesia" },
        { name: "Grand Victoria Hotel Samarinda", facilities: "City View, Restaurant, Swimming Pool", price: "Rp 1.000.000 per malam", address: "Samarinda, Indonesia" },
        { name: "Horison Samarinda Hotel", facilities: "City View, Restaurant, Spa", price: "Rp 1.100.000 per malam", address: "Samarinda, Indonesia" },
        { name: "Mesra Business & Resort Hotel", facilities: "River View, Restaurant, Gym", price: "Rp 800.000 per malam", address: "Samarinda, Indonesia" }
        // Tambahkan hotel lainnya untuk Samarinda jika diperlukan
    ]
    // Tambahkan destinasi dan hotel lainnya jika diperlukan
};

// Fungsi untuk memperbarui opsi hotel berdasarkan destinasi yang dipilih
function updateHotelOptions() {
    let destination = document.getElementById('destination').value;
    let hotelOptionsDiv = document.getElementById('hotelOptions');
    let hotels = hotelData[destination];

    // Bersihkan pilihan hotel sebelumnya
    hotelOptionsDiv.innerHTML = '';

    // Buat pilihan hotel baru berdasarkan data yang tersedia
    hotels.forEach(hotel => {
        let hotelCard = document.createElement('div');
        hotelCard.classList.add('hotel-card');
        hotelCard.innerHTML = `
            <h3>${hotel.name}</h3>
            <p><strong>Fasilitas:</strong> ${hotel.facilities}</p>
            <p><strong>Harga:</strong> ${hotel.price}</p>
            <p><strong>Alamat:</strong> ${hotel.address}</p>
            <button type="button" onclick="confirmBooking('${hotel.name}', '${hotel.price}', '${hotel.address}')">Pesan Sekarang</button>
        `;
        hotelOptionsDiv.appendChild(hotelCard);
    });
}

// Panggil fungsi untuk memuat pilihan hotel berdasarkan destinasi awal
updateHotelOptions();

// Handle perubahan pilihan destinasi
document.getElementById('destination').addEventListener('change', function() {
    updateHotelOptions();
});

// Handle form submission untuk pemesanan hotel
document.getElementById('hotelBookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Silakan pilih hotel terlebih dahulu!');
});

// Function untuk konfirmasi pemesanan
function confirmBooking(hotelName, price, address) {
    // Simpan detail pemesanan ke sessionStorage
    let bookingData = {
        hotelName: hotelName,
        price: price,
        address: address
    };
    sessionStorage.setItem('bookingData', JSON.stringify(bookingData));

    // Redirect ke halaman konfirmasi
    window.location.href = 'confirmation.html';
}
