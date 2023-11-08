// Lấy ra các phần tử cần thiết
const showSearchHistoryBtn = document.getElementById("showSearchHistoryBtn");
const searchHistory = document.getElementById("searchHistory");

// Thêm sự kiện click vào class btn
showSearchHistoryBtn.addEventListener("click", function() {
    // Kiểm tra trạng thái hiển thị của class header__search-history
    if (searchHistory.style.display === "block" || searchHistory.style.display === "") {
        searchHistory.style.display = "none"; // Ẩn class header__search-history
    } else {
        searchHistory.style.display = "block"; // Hiển thị class header__search-history
    }
});