// Câu hỏi toán học nâng cao cho học sinh trung học phổ thông
// Chủ đề: Tổ hợp, Vectơ và Hình học tọa độ

const questions = [
    // Tổ hợp
    {
        question: 'Có bao nhiêu cách để chọn 3 người từ một nhóm 10 người?',
        answer: '10C3 = 120'
    },
    {
        question: 'Có bao nhiêu cách sắp xếp 5 quyển sách khác nhau trên một kệ?',
        answer: '5! = 120'
    },
    // Vectơ
    {
        question: 'Cho vector A = (2, 3) và B = (4, -1). Tính tổng A + B.',
        answer: 'A + B = (6, 2)'
    },
    {
        question: 'Tìm độ dài của vector C = (3, 4).',
        answer: '||C|| = 5'
    },
    // Hình học tọa độ
    {
        question: 'Viết phương trình đường thẳng đi qua hai điểm (1, 2) và (3, 4).',
        answer: 'y - 2 = (1) * (x - 1)\n(đường thẳng có hệ số góc 1)'
    },
    {
        question: 'Tính khoảng cách từ điểm (1, 1) đến đường thẳng y = 2x + 1.',
        answer: 'Khoảng cách = sqrt(1/5)'
    },
    // Thêm nhiều câu hỏi...
];

module.exports = questions;