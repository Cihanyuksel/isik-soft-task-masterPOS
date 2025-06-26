import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export function exportToExcel(data, fileName = "products.xlsx") {
  console.log("Exporting data:", data);
  if (!data || data.length === 0) {
    alert("Export edilecek veri yok!");
    return;
  }
  // 1. Data’yı worksheet formatına çevir
  const worksheet = XLSX.utils.json_to_sheet(data);

  // 2. Yeni workbook oluştur
  const workbook = XLSX.utils.book_new();

  // 3. Worksheet’i workbook’a ekle
  XLSX.utils.book_append_sheet(workbook, worksheet, "Products");

  // 4. Workbook’u binary formatta yaz
  const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

  // 5. Blob oluştur ve indir
  const blob = new Blob([wbout], { type: "application/octet-stream" });
  saveAs(blob, fileName);
}
