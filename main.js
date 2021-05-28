/*
bài 1: Tính tiền lương nhân viên
Bước1: Input
- luong1Ngay, soNgayLam

Bước2: Handle 
- Tạo biến luong1Ngay, soNgayLam, luongThucNhan
- Tính lương thực nhận: luongThucNhan = luong1Ngay * soNgayLam
Bước3: Output 
- Xuất tiền lương thực nhận 
*/
var luong1Ngay = 100000;
var soNgayLam = 26;
var luongThucNhan;
luongThucNhan = luong1Ngay * soNgayLam;

console.log('Tien luong nhan vien:', luongThucNhan + 'VNĐ');


/*
bài 2: Tính Giá trị trung bình
Bước1: Input
- Giá trị 5 số thực: 2; 3/5; -0.234; 4/3; -0.55 

Bước2: Handle 
- Tạo 5 biến a, b, c, d, e, mean
- Gán giá trị cho từng biến a,b,c,d,e,mean
- Tính giá trị trung bình: mean = (a + b + c + d + e)/5
Bước3: Output 
-Xuất giá trị trung bình
*/
var a = 2;
var b = 3/5;
var c = -0.234;
var d = 4/3;
var e = -0.55;
//mean: Giá trị trung bình
var mean = (a + b + c + d + d)/2;
console.log('Giá trị trung bình:', mean);


/*
Bài 3: Tính số tiền USD quy ra VNĐ
// Input:
- Giá 1 USD = 23 000 vnd 

// Xử lý:
Bước 1: tạo biến soTienUsd,tienQuyDoi
bước 2: Gán giá trị cho biến soTienUsd
Bước 3: Tính số tiền USD quy ra VNĐ
Bước 4: In kết quả ra console

// Output:
Kết quả như ví dụ:
2usd = 47000 vnd
*/
var soTienUsd = 2;
var tienQuyDoi = soTienUsd* 23500;
console.log('Giá tiền quy đổi:', tienQuyDoi + 'VNĐ');



/*
Bài 4:
// Input:
Hình chữ nhật có 2 cạnh: 
 dài: 10
 rộng: 8

// Xử Lý:
BƯớc 1: Tạo biến a,b tương ứng với chiều dài và chiều rộng HCN 
Bước 2: Gán giá trị cho từng biến a,b 
Bước 3: Sử dụng công thức chu vi HCN: (a + b)*2
Bước 4: Sử dụng công thức Diện Tích HCN: a*b 
Bước 5: In kết quả ra console

// Output:
Kết quả : chuVi,dienTich hình chữ nhật.
*/
var a = 10;
var b = 8;
var chuVi = (a + b)*2;
var dienTich = a*b;
console.log('Chu vi HCN:', chuVi);
console.log('Dien Tich HCN:', dienTich);



/*
Bài5:
// input 
1 số có 2 chữ số : 99

// Xu ly 
Bước 1: Tạo biến a,ten,unit 
Bước 2: Gán giá trị cho a
Bước 3: Tách số hàng chục theo công thức: ten=Math.floor(n/10)
Bước 4: Tách số hàng đơn vị theo công thức: unit = a%10;
Bước 5:In kết quả ra console

// output
Kết quả Sum 
*/
var a = 99;
var ten = Math.floor(a%100/10);
var unit = a%10;
var sum = ten + unit;
console.log('Kết quả:', sum);
