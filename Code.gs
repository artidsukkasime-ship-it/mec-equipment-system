// ตั้งค่าการเชื่อมต่อฐานข้อมูล SQL (Supabase)
const SUPABASE_URL = "https://yipgnhuramxawuubodjn.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpcGduaHVyYW14YXd1dWJvZGpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU4ODE1OTAsImV4cCI6MjEwMTQ1NzU5MH0.n50KhWK5rg0ALbtfxsVg1M6Dy0OKFAJNUfn55ir6z6E";
const CONFIG = {
  SHEET_NAME: "detail",
  FOLDER_ID: "1HDHNh9Z43Og9yJLSsrXef9rdX3n6Df4t",
  
  // 1. คลังรหัสรูปภาพลายเซ็น (ของใครของมัน คนไหนยังไม่มีรูปให้ใส่ "" เว้นว่างไว้เซ็นมือ)
  SIGNATURES: {
    "นายอาทิตย์ สุขเกษม": "1jM6KBOK5hF4WawMv5PtVkUFm-gDcHnlL",
    "นายเฉลิมพร จันทร์ยงค์": "1tm7Ae5MME4_JpMSidVbtlHm5jrqY0IWN",
    "นายกิจานันท์ ดวงพัตรา": "15WWEcvgAVE_grriYBxC3bbAW1vDseD2s",
    "นายพิชิต พลายเถื่อน": "1LVQAKfT2OGaZDYToJZsxS8iGK5Iv_Tje",
    "นายนิธิสันต์ ขำดีธนาวงศ์": "1jOh-Hm1r6kkysOIpKJFQ61ts0r5vRKmZ",
    "นายเทพพร ศรีวิชัย": "1_EGZZu59SnoglsTNya6McxaJ2umy8A4p",
    "นายสมพงษ์ ขำจา": "1kre3dMlX55Z2EbpcDDeTACt_U8rID2Qs",
    "นายโชคชัย เมืองธรรม": "1WzP8R2lWGnvnVHEvIrXhx_KlYFgcQH1G", // 👈 วางรหัสใหม่ของพี่โชคชัยตรงนี้เลยครับ!
    "นายสามสาย ทดลอง": ""
  },

  // 2. คลังตำแหน่งพนักงาน (ดึงตามรายชื่อที่เลือกจากหน้าเว็บเท่านั้น)
  POSITIONS: {
    "นายอาทิตย์ สุขเกษม": "นักวิทยาศาสตร์การแพทย์ปฏิบัติการ", 
    "นายเฉลิมพร จันทร์ยงค์": "หัวหน้ากลุ่มวิศวกรรมการแพทย์",
    "นายกิจานันท์ ดวงพัตรา": "วิศวกรไฟฟ้าปฏิบัติการ",
    "นายพิชิต พลายเถื่อน": "นายช่างเทคนิคชำนาญงาน",
    "นายนิธิสันต์ ขำดีธนาวงศ์": "นายช่างไฟฟ้าชำนาญงาน",
    "นายเทพพร ศรีวิชัย": "นายช่างไฟฟ้าปฏิบัติงาน",
    "นายสมพงษ์ ขำจา": "ช่างฝีมือโรงงาน ระดับ ช4",
    "นายโชคชัย เมืองธรรม": "ช่างฝีมือโรงงาน ระดับ ช4",
    "นายสามสาย ทดลอง": "ตำแหน่งทดสอบระบบ"
  },

  // 3. คลังรหัส Google Docs Template ของเครื่องมือแพทย์แต่ละประเภท
  TEMPLATES: {
    "AED": "1Lz2W7-oJkwUgxpW7e5jQtehf2Zsw9GKZR5FJe_cUnHs", 
    "Electrosurgical": "1prZrxUtLaoNBBok0Et-C3ae2eD4mpGohPDZbnTMn0yg", 
    "Doppler": "1H37zhLIkGJe3UfebVR8Uv3H71iFc6y6l4v5VQfPpnsU", 
    "Pulse_Oximeter": "1W_YgpyXm8YEtxyQNzdKnFfIDRNngGVOXW49yRTURawM",
    "O2_Concentrator": "1pqrIBgbe0Y87pW-JZl0qeKXqCRfY4b6qTW7Fg9PuIdc",
    "Patient_Thermometer": "1Maii3YBIMZYcXCXJQnCZtSSZbi_7-nN-t_dl_idYm_M",
    "Adult_Scale": "1_SxICMrQAf10or6Hfuxbp6s4l5JoQr6JRkzDI2uMXS4",
    "General_Scale": "1QCuJkoxxrDerias_YZaccsznIIq9cwvrYXFDjn8o-KI",
    "Infant_Scale": "1vKn5AkUQdBaFoTBoFGajIRAwBgtu-dECoM8Az1LM4VQ",
    "Precision_Scale": "15lZNVOCIVYDQkdnlMiq48vFUoG2zhTu1xeUG4S0xPv8",
    "NIBP": "1nohX92B4Oqx5thvdik-hvGxjHXQIOYSyYNW8jchLnLM",
    "Infusion": "1ICZ-2eGbYI5nFWBbNl_L0v7gXBwqjIORaoxXolfX0-s",
    "SyringePump": "115qdt2PptQ57oP5coIIwnKVcsn1UI_8I2Fo6Z46Z7WI",
    "Ventilator": "1BkGdIp8865OLHPaARWqSgX2WkOky_kRUXPIFln3ODBI",
    "HighFlow": "1PiAA1BFhLMBMj7bsJA71-z2NxPYLfNvtBuV5BKDjkdI",
    "Defibrillator": "1_wMMHC_7A-ecLW0Hsxk77hDQQnFlnOiwkjlvaN-n9IQ",
    "Suction": "1SYiddZVbkvKU7nRI7xaMt-5bGb8elm1AXis2GYbFAYo",
    "BP_Monitor": "13wJoRJR5cNwC8mvbZ5NsrXNEnWB920BkUSC66Vw8Xm4",
    "Vital Sign Monitor ": "1IMxhqm6vRlyH7OxRiBjFDKYa9wHnB0u_Y7TibqoLgbk",
    "Anesthesia Machine": "1tQtL_Y3dw5EFoRxYQLQwkSUFGyRufnZfSfBS5Xus06M",
    "Mercury_BP": "1egyU1zkwBvPN49TmyhlcnDxd1ARJW50CvtGLvSvwkxw",
    "Thermo_Hygro": "1fHfDX4tcx4s9CMVoUV5XhSZkqxAEbD1h5xU9RhdScuw",
    "Medicine_Fridge": "1a-RgbzQJkQ0kdt6DSsK9uRNZOOAcjBoweApXWION-KU",
    "Fetal Monitor": "1Q_xVwVr_ZeQvKg0o5oNy-lOVDK4tjvdcH8yHgj2cW5Q",
    "ECG_Electrocardiogram": "1wofJO-5IRwD5uGzl8RmGlmmIOl_qlo4A8CoxvI-NZKY",
    "Suction_Mobile": "16xJuGm3yaTGui_pQDRWEDc7ySR3aqZdLXIR_w_mHD6M",
    "Suction_Pipeline": "1N-kCt9DiX_5JzIBp3SwiShh6xUi7vdBDztNS9LdkpuA",
    "Flow_Meter": "1IWTTcwJum8Ef20_oCWHv2bJ_e17rKGcX0k0DrUHFLmc",
    "Infant_Incubator": "1sjP9uxZ4K-Jq_y7_Qg4IdBsyWpv34amR9edtBUtwMUM",
    "Radiant_Warmer": "1k74FXUrsQbqFP862ZbyVKmqe6EgAHwlX-IxKejAl0lw",
    "Hematocrit": "1iSKU08cepPxknZn406AiYipTG41JS2DV2zf7cl5hUg8", 
    "Hydrocollator": "1RWLkSYLLR8KiIupRZ55hE17UZUOHEyhXgilHZ62Znbg", 
    "Centrifuge": "1sV2CbHPMPgWuCoU-9oHljMf_E3ybX_3-l_VBxH099Ls", 
    "Drainage_Suction": "ID_DRAINAGE",
    "Paraffin_Bath": "1hvgYGmdEW5opH3C-NjqwFOLIFAww5k-XXFgEq0Rh4D4",
    "Water_Bath": "10WU3MacPOaStEmSgGIx3m4yG-nljd2rRU3rNBmvg86U",
    "Oxygen_Regulator": "ID_O2REG",
    "Vaporizer": "1NGulY3LJy4n6C-jBrv9uf0RmyjxpvaOi0lPP1tIiOdQ",
    "Rotator": "ID_ROTATOR", 
    "Alarm_Clock": "ID_CLOCK",
    "Ultrasound Therapeutic": "1NK3UFDLGeb6c_b6Y0yNWX8ZUeX7-R9w_A5Lk0DPk0O0",
    "Tourniquet": "ID_TOURNIQUET",
    "Refrig_Thermometer": "1HN7g2fpHn274m64Sc_AHwcyFBbnOrfFZgrppLz7J428",
    "Blood_Bank": "1wH_K1dsxVEp6QJZLMYh6lXbMIw_EcNkCJvFAiKaP7PU",
    "Hypo_Hyperthermia": "1AHDRwfPvDEzOwgBuRfEt7nBV5UG3x5tkSHr-RZwGuSw",
    "Traction": "1kgsktNvzbmGe-OI7SEgy7SZvYMzObFxNBIDvVqFzFwc",
    "Incubator": "1e32dYVpBqTGaYF3q8lDrdjv1bInsz4vWsrjKWK3WF_U",
    "Freezer_Bank": "1nfwc1Z--feX4eidwZcyqHkOKSot0qG-QBmYEH9eHAlk",
    "Ultrasound_Machine": "1xZCFgQrdGX1IL_JDJgNRVH21Q-cGFmfdDI88C0tc9wI"
    
  }
};

const REPORT_LOG_HEADERS = [
  "hospital_name", "ReportNo", "ID No", "Detail", "Manufacture",
  "Model", "Serial No", "number", "dept_user", "dept_user", "Date", "Result", "ผู้ทดสอบ", "ผู้รับรอง"
];

function getSpreadsheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error("ไม่พบ Spreadsheet สำหรับบันทึกข้อมูล");
  return ss;
}

function getReportLogSheet_() {
  const ss = getSpreadsheet_();
  let sheet = ss.getSheetByName("ReportLog");
  if (!sheet) sheet = ss.insertSheet("ReportLog");
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(REPORT_LOG_HEADERS);
  }
  sheet.getRange(1, 1, 1, REPORT_LOG_HEADERS.length).setFontWeight("bold").setBackground("#f3f3f3");
  return sheet;
}

function getTemplateId_(deviceGroup) {
  const templateId = CONFIG.TEMPLATES[deviceGroup];
  if (!templateId || templateId.indexOf("ID_") === 0 || templateId.indexOf("รหัสID") !== -1) return "";
  return templateId;
}

function getOutputFolder_() {
  try {
    if (CONFIG.FOLDER_ID) return DriveApp.getFolderById(CONFIG.FOLDER_ID);
  } catch (e) {
    console.warn("Folder access error: " + e.message);
  }
  const fallbackName = "Hospital2 Reports";
  const existing = DriveApp.getFoldersByName(fallbackName);
  if (existing.hasNext()) return existing.next();
  return DriveApp.createFolder(fallbackName);
}

function createFallbackReportDoc_(fileName, formObject, reportNo, finalStatusText) {
  const doc = DocumentApp.create(fileName);
  const body = doc.getBody();
  body.appendParagraph("รายงานสอบเทียบและบำรุงรักษา").setHeading(DocumentApp.ParagraphHeading.HEADING1);
  body.appendParagraph("ReportNo: " + reportNo);
  body.appendParagraph("Result: " + finalStatusText);
  doc.saveAndClose();
  return DriveApp.getFileById(doc.getId());
}

function doGet() {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    // 1. ดึงข้อมูลจากชีตชื่อ "เปิด/ปิด"
    var configSheet = ss.getSheetByName("เปิด/ปิด");
    
    var systemStatus = "ON"; 
    if (configSheet) {
      // 2. ดึงค่าจากช่อง A1 ตามที่ระบุ
      var cellValue = configSheet.getRange("A1").getValue();
      if (cellValue !== "") {
        systemStatus = cellValue.toString().trim().toUpperCase();
      }
    }
    
    // 3. ตรวจสอบสถานะเงื่อนไข
    if (systemStatus === "ON") {
      // ถ้าพิมพ์ ON ให้เข้าแอปปกติ
      return HtmlService.createTemplateFromFile('Index').evaluate()
        .setTitle('ระบบโปรแกรมออกผลใบรับรอง ศบส.ราชบุรี 5')
        .addMetaTag('viewport', 'width=1200, user-scalable=yes')
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    } else {
      // ถ้าพิมพ์ OFF หรือค่าอื่นๆ ให้บล็อกหน้าจอ
      return HtmlService.createHtmlOutput(
        "<div style='text-align:center; margin-top:100px; font-family:sans-serif; padding:20px;'>" +
        "<h2 style='color:#dc3545; font-size:28px; font-weight:bold;'>⚠️ ไม่ได้รับอนุญาตให้เข้าใช้งาน</h2>" +
        "<p style='font-size:18px; color:#495057;'>ขณะนี้ระบบปิดการใช้งานชั่วคราว</p>" +
        "<p style='color:#6c757d;'>กรุณาติดต่อ นายอาทิตย์ สุขเกษม เพื่อเปิดสิทธิ์การเข้าถึงระบบ</p>" +
        "</div>"
      );
    }
    
  } catch(e) {
    return HtmlService.createHtmlOutput("<h3 style='color:red; text-align:center; margin-top:50px;'>เกิดข้อผิดพลาดในการตรวจสอบสิทธิ์ระบบ</h3>");
  }
}

function getSuggestions(input) {
  try {
    const ss = getSpreadsheet_();
    const sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
    const data = sheet.getDataRange().getValues();
    const headers = data[0].map(h => h.toString().trim());
    const searchVal = input.toString().toLowerCase().trim();
    if (!searchVal) return [];

    const searchColumns = ["ID No", "Detail", "Manufacture", "Model", "Serial No", "number", "dept_user"];
    const colIndices = searchColumns.map(colName => headers.indexOf(colName)).filter(idx => idx !== -1);
    const suggestions = [];

    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      const match = colIndices.some(idx => row[idx].toString().toLowerCase().includes(searchVal));
      if (match) suggestions.push(row[headers.indexOf("ID No")].toString().trim());
      if (suggestions.length >= 8) break;
    }
    return [...new Set(suggestions)];
  } catch (e) { return []; }
}

function searchDevice(idNo) {
  try {
    const ss = getSpreadsheet_();
    const sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
    const data = sheet.getDataRange().getValues();
    const headers = data[0].map(h => h.toString().trim());
    if (!idNo) return { found: false, message: "No ID provided" };

    const searchId = idNo.toString().trim().toLowerCase();
    const searchColumns = ["ID No", "Detail", "Manufacture", "Model", "Serial No", "number", "dept_user"];
    const colIndices = searchColumns.map(colName => headers.indexOf(colName));

    const row = data.find((r, index) => {
      if (index === 0) return false;
      return colIndices.some(colIdx => {
        if (colIdx === -1 || !r[colIdx]) return false;
        return r[colIdx].toString().trim().toLowerCase().includes(searchId);
      });
    });

    if (row) {
      let obj = {};
      headers.forEach((h, i) => {
        let val = row[i];
        if (val instanceof Date) val = Utilities.formatDate(val, "GMT+7", "dd/MM/yyyy");
        obj[h] = val;
      });
      return { found: true, data: obj };
    }
  } catch (e) { console.error("Search Error: " + e.message); }
  return { found: false, clearOldData: true };
}

function processReport(formObject) {
  try {
    // 🛡️ [เพิ่มใหม่] ป้องกันการกดเบิ้ลหลายรอบ (ถ้า ID เครื่องและข้อมูลชุดเดิมถูกส่งมาติดกันใน 5 วินาที ให้ข้ามทันที)
    const cache = CacheService.getScriptCache();
    const lockKey = "LOCK_" + (formObject["ID No"] || "NO_ID") + "_" + (formObject["hospital_name"] || "NO_HOSP");
    if (cache.get(lockKey)) {
      return { success: false, error: "ระบบกำลังดำเนินการบันทึกข้อมูลซ้ำซ้อน กรุณารอสักครู่..." };
    }
    cache.put(lockKey, "locked", 5); // ล็อกไว้ 5 วินาที

    // 🏥 บังคับรับค่าโรงพยาบาลแบบยืดหยุ่นที่สุด
    let cleanHospital = "";
    if (formObject["hospital_name"]) cleanHospital = formObject["hospital_name"].toString().trim();
    else if (formObject["hospitalSelect"]) cleanHospital = formObject["hospitalSelect"].toString().trim();
    else if (formObject["hospital"]) cleanHospital = formObject["hospital"].toString().trim();
    else cleanHospital = "โรงพยาบาลอู่ทอง"; // กำหนดค่าสำรองเผื่อไว้ กรณีส่งค่ามาไม่ทัน

    let hospitalFinalValue = cleanHospital;
    formObject["hospital_name"] = hospitalFinalValue;
    formObject["hospital"] = hospitalFinalValue; // ให้รองรับทั้งสองฟิลด์

    // 🔍 🚀 [จุดที่ 1 เพิ่มตรงนี้] ตรวจสอบและบันทึกเครื่องเข้า Sheet1 อัตโนมัติ (ถ้ายังไม่มีในระบบ)
    let autoRegResult = { success: true, registered: false, message: "" };
    try {
      autoRegResult = checkAndAutoRegisterDevice(formObject);
      console.log("Auto Register Master Result: " + autoRegResult.message);
    } catch (regErr) {
      console.warn("Auto Register Master Warning: " + regErr.toString());
    }

    const folder = getOutputFolder_();
    const templateId = getTemplateId_(formObject.deviceGroup);

    // --- 1. Logic การคำนวณคำว่า PASS / FAIL ---
    let isPassedCondition = false;
    let passCount = 0;
    let failCount = 0;
    let totalFields = 0;

    for (let key in formObject) {
      if (key !== "res_final" && (key.startsWith("res_") || key.includes("Result") || key.includes("test_"))) {
        totalFields++;
        var value = String(formObject[key]).toUpperCase().trim();
        if (value === "PASS" || value.indexOf("ผ่าน") !== -1) {
          passCount++;
        } else if (value === "FAIL" || value.indexOf("ไม่ผ่าน") !== -1 || value === "") {
          failCount++; 
        }
      }
    }

    if (totalFields === 0 || passCount === 0) {
      isPassedCondition = false; 
    } else if (passCount > failCount) {
      isPassedCondition = true;  
    } else {
      isPassedCondition = false; 
    }

    if (formObject["Test Alarm Occlusion"]) {
      const occlusionResult = formObject["Test Alarm Occlusion"].toString();
      if (occlusionResult.indexOf("Fail") !== -1 || occlusionResult.indexOf("ไม่มีเสียง") !== -1) {
        isPassedCondition = false;
      }
    }

    const finalStatusText = isPassedCondition ? "ผ่านเกณฑ์มาตรฐาน" : "ไม่ผ่านเกณฑ์มาตรฐาน";
    const reportNo = getNextReportNo(formObject["ID No"], finalStatusText);

    var datePart = Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yy");
    var hoursPart = Utilities.formatDate(new Date(), "GMT+7", "HH");
    var minsPart = Utilities.formatDate(new Date(), "GMT+7", "mm");
    var timestamp = datePart + " " + hoursPart + "." + minsPart;

    let hospitalName = hospitalFinalValue.replace(/[/\\?%*:|"<>]/g, "-");
    let deviceName = formObject["Detail"] ? formObject["Detail"].toString().replace(/[/\\?%*:|"<>]/g, "-") : "";

    const fileName = (reportNo + "_" + hospitalName + "_" + (formObject["ID No"] || "") + (deviceName ? "_" + deviceName : "") + "_" + timestamp).toUpperCase();

    let copy;
    if (templateId) {
      try {
        copy = DriveApp.getFileById(templateId).makeCopy(fileName, folder);
      } catch (templateError) {
        console.warn("Template error, using fallback: " + templateError.message);
        copy = createFallbackReportDoc_(fileName, formObject, reportNo, finalStatusText);
      }
    } else {
      copy = createFallbackReportDoc_(fileName, formObject, reportNo, finalStatusText);
    }
    const doc = DocumentApp.openById(copy.getId());
    const body = doc.getBody();

    body.replaceText("{{ReportNo}}", reportNo);
    // 🏥 [จุดแก้ชื่อโรงพยาบาล] แทนที่แท็กด้วยชื่อโรงพยาบาลจริงที่เลือกมาจากหน้าบ้าน
    body.replaceText("\\{\\{\\s*hospital_name\\s*\\}\\}", hospitalFinalValue);
    // body.replaceText("\\{\\{\\s*hospital\\s*\\}\\}", hospitalFinalValue); 👈 คอมเมนต์บรรทัดนี้ทิ้งไว้ครับ

    if (formObject.carrierGas) {
      if (Array.isArray(formObject.carrierGas)) {
        formObject.carrierGas = formObject.carrierGas.join(", ");
      }
    } else {
      formObject.carrierGas = "-";
    }

    for (let key in formObject) {
      if (key !== "tester" && key !== "approver" && key !== "res_final" && key !== "hospital_name" && key !== "hospital") {
        let val = formObject[key] || "-";
        
        // 🔠 แปลงค่าที่เป็นข้อความทั้งหมดให้เป็นตัวพิมพ์ใหญ่
        if (typeof val === "string") {
          val = val.toUpperCase();
        }
        
        body.replaceText(`{{${key}}}`, val);
      }
    }

    let rawDate = formObject.action_date; 
    let formattedDate = "";
    if (rawDate && rawDate.trim() !== "") {
      let parts = rawDate.split("-");
      let yearAD = parseInt(parts[0], 10);
      let month = parts[1];
      let day = parts[2];
      let yearBE = yearAD < 2400 ? yearAD + 543 : yearAD; 
      formattedDate = day + "/" + month + "/" + yearBE; 
    } else {
      formattedDate = Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy 'ณ เวลา' HH:mm 'น.'");
    }

    body.replaceText("{{Date}}", formattedDate);
    body.replaceText("{{check_pass}}", isPassedCondition ? "✅" : "☐");
    body.replaceText("{{check_fail}}", isPassedCondition ? "☐" : "✅");
    body.replaceText("{{res_final}}", finalStatusText);

    processFormAndSignaturesTable(formObject, body, isPassedCondition);
    doc.saveAndClose();

    // 📌 1. บันทึกข้อมูลลงใน Supabase ทุกกรณีตามปกติเพื่อเก็บประวัติสถิติ
    var sqlResult = insertReportLogToSupabase(formObject, reportNo, finalStatusText);
    if (!sqlResult.success) {
      console.warn("Warning: ไม่สามารถบันทึกข้อมูลลง SQL ได้: " + sqlResult.error);
    }

    // 🛑 2. แยกเงื่อนไขการจัดการไฟล์ PDF ตามผลการทดสอบ
    if (!isPassedCondition) {
      // ❌ กรณี "ไม่ผ่านเกณฑ์": สร้าง PDF ชั่วคราวเพื่อให้ได้ลิงก์ไปพรีวิวหน้าเว็บ
      const tempPdfBlob = copy.getAs(MimeType.PDF);
      const tempPdfFile = folder.createFile(tempPdfBlob); 
      copy.setTrashed(true); // ลบไฟล์ Google Doc ต้นฉบับทิ้ง

      let previewUrl = "";
      try {
        tempPdfFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        previewUrl = tempPdfFile.getUrl().replace('/view', '/preview');
      } catch (e) {}

      // 🗑️ สั่งลบไฟล์ PDF ชั่วคราวนี้ทิ้งทันที (ส่งไปถังขยะ) 
      // เพื่อไม่ให้ไฟล์ของเครื่องที่ไม่ผ่านไปปะปนหรือนอนค้างในโฟลเดอร์หลัก
      tempPdfFile.setTrashed(true);

      return { 
        success: true, 
        url: previewUrl, // ส่งลิงก์ให้หน้าเว็บเปิดพรีวิวได้ปกติ
        reportNo: reportNo,
        autoReg: autoRegResult // 👈 [จุดที่ 2 เพิ่มตรงนี้] ส่งสถานะการลงทะเบียนกลับไปหน้าเว็บ
      };
    }

    // ✅ กรณี "ผ่านเกณฑ์มาตรฐาน": สร้างไฟล์ PDF และเก็บไว้ในโฟลเดอร์ตามปกติ
    const pdfBlob = copy.getAs(MimeType.PDF);
    const pdfFile = folder.createFile(pdfBlob);
    copy.setTrashed(true);
    try {
      pdfFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    } catch (sharingError) {}

    return { 
      success: true, 
      url: pdfFile.getUrl().replace('/view', '/preview'),
      reportNo: reportNo,
      autoReg: autoRegResult // 👈 [จุดที่ 3 เพิ่มตรงนี้] ส่งสถานะการลงทะเบียนกลับไปหน้าเว็บ
    };

  } catch (e) {
    console.error(e);
    return { success: false, error: e.toString() };
  }
}

function getRecentFiles() {
  try {
    const folder = DriveApp.getFolderById(CONFIG.FOLDER_ID);
    const files = folder.getFiles();
    const list = [];
    let count = 0;
    while (files.hasNext() && count < 10) { // 👈 เปลี่ยนจาก 8 เป็น 10 ตรงนี้ครับ
      const file = files.next();
      if (file.getMimeType() === MimeType.PDF) {
        list.push({ name: file.getName(), url: file.getUrl(), date: Utilities.formatDate(file.getDateCreated(), "GMT+7", "dd/MM HH:mm") });
        count++;
      }
    }
    return list;
  } catch (e) { return []; }
}

function getNextReportNo(idNo, result) {
  try {
    const supabaseUrl = "https://yipgnhuramxawuubodjn.supabase.co";
    const supabaseKey = "sb_publishable_3--CEvZdocvc53awXEyn6A_cqP39HWo";

    const url = `${supabaseUrl}/rest/v1/report_logs?select=report_no&order=created_at.desc&limit=1`;
    
    const options = {
      method: "get",
      headers: {
        "apikey": supabaseKey,
        "Authorization": "Bearer " + supabaseKey,
        "Content-Type": "application/json"
      },
      muteHttpExceptions: true
    };

    const response = UrlFetchApp.fetch(url, options);
    const data = JSON.parse(response.getContentText());

    let nextNum = 1; // 👈 เริ่มต้นที่ 1 สำหรับข้อมูลชุดแรก (จะได้ 0001)
    if (data && data.length > 0 && data[0].report_no) {
      let lastReportNo = data[0].report_no; 
      let parts = lastReportNo.split("-");
      let currentNum = parseInt(parts[parts.length - 1], 10);
      
      if (!isNaN(currentNum)) {
        nextNum = currentNum + 1; // ดึงเลขล่าสุดมาบวกเพิ่ม 1
      }
    }

    return `ศบส5-${String(nextNum).padStart(4, '0')}`;

  } catch (e) {
    console.error("Error getting next report no from Supabase: " + e.toString());
    return `ศบส5-0001`; // 👈 กรณี Error ให้เริ่มต้นที่ 0001
  }
}

function getCalibrationHistory() {
  var url = SUPABASE_URL + "/rest/v1/report_logs?select=*&order=id.desc";
  var options = {
    "method": "get",
    "headers": {
      "apikey": SUPABASE_KEY,
      "Authorization": "Bearer " + SUPABASE_KEY,
      "Cache-Control": "no-cache, no-store, max-age=0, must-revalidate",
      "Pragma": "no-cache"
    },
    "muteHttpExceptions": true
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    if (response.getResponseCode() === 200) {
      var rows = JSON.parse(response.getContentText());
      
      var history = rows.map(function(item) {
        var dateValue = item.Date || item.date || item.record_date || "";
        if (dateValue) {
          var d = new Date(dateValue);
          if (!isNaN(d.getTime())) {
            dateValue = Utilities.formatDate(d, "GMT+7", "dd/MM/yyyy HH:mm");
          }
        }
        
        return {
          hospital: item.hospital_name || item.hospital || "",
          reportNo: item.ReportNo || item.report_no || "",
          id: item["ID No"] || item.id_no || item.id || "",
          name: item.Detail || item.detail || "",
          manufacture: item.Manufacture || item.manufacture || "",
          model: item.Model || item.model || "",
          serialNo: item["Serial No"] || item.serial_no || "",
          number: item.number || item.number_col || "",
          dept1: item.dept_user || "",
          date: dateValue,
          result: item.Result || item.result_status || "",
          tester: item["ผู้ทดสอบ"] || item.tester || "",
          approver: item["ผู้รับรอง"] || item.approver || ""
        };
      });

      return history;
    } else {
      console.error("Error from SQL: " + response.getContentText());
      return [];
    }
  } catch (e) {
    console.error("Fetch Error: " + e.toString());
    return [];
  }
}

function generateExcelServer(headers, rowsData, fileName) {
  try {
    const tempSS = SpreadsheetApp.create(fileName);
    const sheet = tempSS.getSheets()[0];
    sheet.appendRow(headers);
    if (rowsData && rowsData.length > 0) {
      sheet.getRange(2, 1, rowsData.length, headers.length).setValues(rowsData);
    }
    SpreadsheetApp.flush();
    const file = DriveApp.getFileById(tempSS.getId());
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    return { success: true, url: "https://docs.google.com/spreadsheets/d/" + tempSS.getId() + "/export?format=xlsx" };
  } catch (e) { return { success: false, error: e.toString() }; }
}



function processFormAndSignaturesTable(formData, body, isPassedCondition) {
  try {
    var rawTester = formData.tester;
    var rawApprover = formData.approver;
    if (Array.isArray(rawTester)) rawTester = rawTester[0];
    if (Array.isArray(rawApprover)) rawApprover = rawApprover[0];
    
    var selectedTester = rawTester ? String(rawTester).trim() : "";     
    var selectedApprover = rawApprover ? String(rawApprover).trim() : ""; 
    
    var testerPosition = " ";
    var approverPosition = " ";
    if (selectedTester !== "" && CONFIG.POSITIONS[selectedTester]) testerPosition = String(CONFIG.POSITIONS[selectedTester]);
    else if (selectedTester !== "") testerPosition = "-";
    
    if (selectedApprover !== "" && CONFIG.POSITIONS[selectedApprover]) approverPosition = String(CONFIG.POSITIONS[selectedApprover]);
    else if (selectedApprover !== "") approverPosition = "-";
    
    var finalTesterName = selectedTester !== "" ? String(selectedTester) : " ";
    var finalApproverName = selectedApprover !== "" ? String(selectedApprover) : " ";
    
    var testerSigId = selectedTester !== "" ? (CONFIG.SIGNATURES[selectedTester] || null) : null;
    var approverSigId = selectedApprover !== "" ? (CONFIG.SIGNATURES[selectedApprover] || null) : null;
    
    var testerBlob = null;
    var approverBlob = null;
    
    // 🔒 ตรวจสอบกฎลายเซ็น
    if (isPassedCondition) {
      if (testerSigId && String(testerSigId) !== "") {
        try { testerBlob = DriveApp.getFileById(String(testerSigId)).getBlob(); } catch(err) { Logger.log("โหลดภาพผู้ทดสอบพลาด: " + err); }
      }
      if (approverSigId && String(approverSigId) !== "") {
        try { approverBlob = DriveApp.getFileById(String(approverSigId)).getBlob(); } catch(err) { Logger.log("โหลดภาพผู้รับรองพลาด: " + err); }
      }
    }

    if (body) {
      var tables = body.getTables();
      
      // วนลูปค้นหาตารางส่วนที่ 4
      for (var i = 0; i < tables.length; i++) {
        var currentTable = tables[i];
        var tableText = currentTable.getText();
        
        // ถ้าไม่ใช่ตารางที่มีแท็กชื่อบุคคล ให้ข้ามไป (ช่วยข้ามตาราง PM ด้านบน)
        if (tableText.indexOf("{{tester}}") === -1 && tableText.indexOf("{{approver}}") === -1) {
          continue;
        }
        
        var numRows = currentTable.getNumRows();
        
        // ลูปที่ 1: วิ่งแทนค่า "ชื่อ" ลงไปในตารางก่อน เพื่อใช้เป็นหมุดอ้างอิงตำแหน่งที่ถูกต้อง
        for (var r = 0; r < numRows; r++) {
          var row = currentTable.getRow(r);
          var numCells = row.getNumCells();
          for (var c = 0; c < numCells; c++) {
            var cell = row.getCell(c);
            if (cell.findText("{{tester}}")) cell.replaceText("{{tester}}", finalTesterName);
            if (cell.findText("{{approver}}")) cell.replaceText("{{approver}}", finalApproverName);
          }
        }
        
        // ลูปที่ 2: วิ่งเจาะลึกหาแท็ก {{sign}} และ {{Position}} โดยเช็คจากแถวและคอลัมน์รอบข้างชื่อ
        for (var r = 0; r < numRows; r++) {
          var row = currentTable.getRow(r);
          var numCells = row.getNumCells();
          
          for (var c = 0; c < numCells; c++) {
            var cell = row.getCell(c);
            var cellText = cell.getText();
            
            // ตรวจสอบว่าช่องนี้ หรือช่องรอบข้างในคอลลัมน์เดียวกัน เป็นของใคร
            if (cellText.indexOf("{{sign}}") !== -1 || cellText.indexOf("{{Position}}") !== -1) {
              
              // 🎯 ค้นหาหมุดอ้างอิง: เช็คดูว่าแถวบน แถวปัจจุบัน หรือแถวล่าง ในคอลัมน์เดียวกัน (c) มีชื่อใครอยู่
              var isApprover = false;
              
              // เช็คในช่องตัวเอง
              if (cellText.indexOf(finalApproverName) !== -1) isApprover = true;
              
              // เช็คแถวบน (ถ้ามี)
              if (r > 0 && currentTable.getRow(r-1).getNumCells() > c) {
                if (currentTable.getRow(r-1).getCell(c).getText().indexOf(finalApproverName) !== -1) isApprover = true;
              }
              // เช็คแถวล่าง (ถ้ามี)
              if (r < numRows - 1 && currentTable.getRow(r+1).getNumCells() > c) {
                if (currentTable.getRow(r+1).getCell(c).getText().indexOf(finalApproverName) !== -1) isApprover = true;
              }
              
              // 1. แทนค่าลายเซ็น {{sign}} ตามหมุดที่เจอ
              if (cell.findText("{{sign}}")) {
                var currentBlob = isApprover ? approverBlob : testerBlob;
                replaceTextInCellWithImageOrBlank(cell, "{{sign}}", currentBlob);
              }
              
              // 2. แทนค่าตำแหน่ง {{Position}} ตามหมุดที่เจอ
              if (cell.findText("{{Position}}")) {
                var currentPosition = isApprover ? approverPosition : testerPosition;
                cell.replaceText("{{Position}}", currentPosition);
              }
            }
            
          } // จบลูปคอลัมน์
        } // จบลูปแถว
        
      } // จบลูปตาราง
    }
  } catch(e) {
    Logger.log("Error ในตารางเซ็นชื่อ: " + e.toString());
  }
}

// ฟังก์ชันย่อยสำหรับนำรูปภาพลายเซ็นไปใส่ในเซลล์ตาราง (เวอร์ชันล็อกขนาด: กว้าง 5 ซม. / สูง 1 ซม.)
function replaceTextInCellWithImageOrBlank(cell, targetTag, imageBlob) {
  try {
    var searchResult = cell.findText(targetTag);
    if (!searchResult) return; 

    var textElement = searchResult.getElement();
    
    if (imageBlob && imageBlob !== null) {
      var paragraph = textElement.getParent().asParagraph();
      if (paragraph) {
        // 1. เคลียร์ข้อความแท็ก {{sign}} ออกไปก่อนเพื่อให้ Layout ได้สัดส่วนที่ตั้งไว้
        cell.replaceText(targetTag, "");
        
        // 2. แปะรูปภาพลายเซ็นลงในย่อหน้าโดยตรง
        var img = paragraph.appendInlineImage(imageBlob);
        
        // 🎯 กำหนดขนาดตายตัวตามที่พี่อาทิตย์ต้องการ
        //ความกว้าง 5 ซม. = 142 พิกเซล / ความสูง 1 ซม. = 28 พิกเซล
        img.setWidth(142);  
        img.setHeight(28);  
        
        // บังคับการจัดหน้าของ Paragraph ให้กระชับ ไม่ให้ระยะขอบตารางบีบตัวรูปภาพ
        paragraph.setLineSpacing(1.0);
        paragraph.setSpacingBefore(0);
        paragraph.setSpacingAfter(0);
      }
    } else {
      // ถ้าไม่ผ่านเกณฑ์ หรือไม่มีบล็อบภาพ ให้เคลียร์แท็กเป็นช่องว่างตามโค้ดเดิม
      cell.replaceText(targetTag, " ");
    }
  } catch (e) {
    Logger.log("Error ในฟังก์ชันย่อย replaceTextInCellWithImageOrBlank: " + e.toString());
    try { cell.replaceText(targetTag, " "); } catch(err) {}
  }
}

// โค้ดนี้เอาไว้แปะในหน้าสคริปต์ฝั่ง .gs (Server)
function getExcelDownloadUrl(htmlTableData) {
  // สร้างเป็นไฟล์ HTML ชั่วคราวในระบบ เพื่อให้บราวเซอร์ดาวน์โหลดตรงๆ ไม่ผ่าน Sandbox
  return "data:application/vnd.ms-excel;base64," + Utilities.base64Encode(htmlTableData, Utilities.Charset.UTF_8);
}




function getFilesFromFolder() {
  var folderId = "1HDHNh9Z43Og9yJLSsrXef9rdX3n6Df4t";
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFiles();
  var fileList = [];
  var count = 0;
  
  // จำกัดการดึงข้อมูลแค่ 200 ไฟล์ล่าสุด เพื่อไม่ให้ Browser ค้าง
  while (files.hasNext() && count < 200) {
    var file = files.next();
    fileList.push({ name: file.getName(), url: file.getUrl() });
    count++;
  }
  return fileList;
}


// ใน Code.gs เพิ่มฟังก์ชันนี้
function getPdfBlobUrl(fileId) {
  var file = DriveApp.getFileById(fileId);
  var blob = file.getBlob();
  // แปลงเป็น Base64 เพื่อให้หน้าเว็บนำไปแสดงผลได้โดยไม่ติดสิทธิ์
  var base64 = Utilities.base64Encode(blob.getBytes());
  return "data:application/pdf;base64," + base64;
}







function deleteAllFiles(folderId) {
  try {
    const folder = DriveApp.getFolderById(folderId);
    const files = folder.getFiles();
    let count = 0;
    
    // ปรับลดเหลือ 10 ไฟล์ต่อรอบ เพื่อให้การตอบสนองเร็วที่สุดและไม่ Timeout
    while (files.hasNext() && count < 10) {
      files.next().setTrashed(true);
      count++;
    }
    return { count: count, remaining: files.hasNext() };
  } catch (e) {
    return { count: 0, remaining: false };
  }
}

function getTestPlans() {
  var plansUrl = SUPABASE_URL + "/rest/v1/" + encodeURIComponent("ชื่อรายการแผนสอบเทียบ") + "?select=*&order=id.desc";
  var logsUrl = SUPABASE_URL + "/rest/v1/report_logs?select=*";
  
  var options = {
    "method": "get",
    "headers": { "apikey": SUPABASE_KEY, "Authorization": "Bearer " + SUPABASE_KEY },
    "muteHttpExceptions": true
  };

  try {
    var plansResponse = UrlFetchApp.fetch(plansUrl, options);
    var logsResponse = UrlFetchApp.fetch(logsUrl, options);
    if (plansResponse.getResponseCode() !== 200 || logsResponse.getResponseCode() !== 200) {
      return [];
    }

    var rows = JSON.parse(plansResponse.getContentText());
    var logs = JSON.parse(logsResponse.getContentText());

    var today = new Date("2027-11-15"); // จำลองเป็นเดือนพฤศจิกายน 2570 (ซึ่งนับเป็นปีงบ 2571)
today.setHours(0, 0, 0, 0);

    // 🎯 คำนวณหา "ปีงบประมาณปัจจุบัน" แบบไดนามิกอัตโนมัติ
    var currentYearAD = today.getFullYear();
    var currentMonth = today.getMonth() + 1;
    var currentYearBE = currentYearAD + 543;
    var currentFiscalYear = (currentMonth >= 10) ? currentYearBE + 1 : currentYearBE;

    var thaiMonths = [
      "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", 
      "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];

    // 🌟 1. รวบรวมรายชื่อโรงพยาบาลทั้งหมดในเขตสุขภาพที่ 5 ให้ครบถ้วนทุกจังหวัด
    var allRegion5Hospitals = [
      // จังหวัดสุพรรณบุรี
      "โรงพยาบาลอู่ทอง", "รพ.สต.เครือข่ายอู่ทอง", "โรงพยาบาลศูนย์เจ้าพระยายมราช", "โรงพยาบาลสมเด็จพระสังฆราช องค์ที่ 17",
      "โรงพยาบาลด่านช้าง", "โรงพยาบาลเดิมบางนางบวช", "โรงพยาบาลบางปลาม้า", "โรงพยาบาลศรีประจันต์",
      "โรงพยาบาลสองพี่น้อง", "โรงพยาบาลสามชุก", "โรงพยาบาลหนองหญ้าไซ", "โรงพยาบาลดอนเจดีย์",
      // จังหวัดนครปฐม
      "โรงพยาบาลนครปฐม", "โรงพยาบาลเมตตาประชารักษ์ (วัดไร่ขิง)", "โรงพยาบาลกำแพงแสน", "โรงพยาบาลดอนตูม",
      "โรงพยาบาลบางเลน", "โรงพยาบาลพุทธมณฑล", "โรงพยาบาลสามพราน", "โรงพยาบาลหลวงพ่อเปิ่น",
      // จังหวัดราชบุรี
      "โรงพยาบาลราชบุรี", "โรงพยาบาลดำเนินสะดวก", "โรงพยาบาลบ้านโป่ง", "โรงพยาบาลจอมบึง",
      "โรงพยาบาลปากท่อ", "โรงพยาบาลโพธาราม", "โรงพยาบาลวัดเพลง", "โรงพยาบาลสวนผึ้ง",
      "โรงพยาบาลบ้านคา", "โรงพยาบาลบางแพ",
      // จังหวัดกาญจนบุรี
      "โรงพยาบาลพหลพลพยุหเสนา", "โรงพยาบาลสมเด็จพระปิยมหาราชรมณียเขต", "โรงพยาบาลทองผาภูมิ", "โรงพยาบาลท่ากระดาน",
      "โรงพยาบาลท่าม่วง", "โรงพยาบาลไทรโยค", "โรงพยาบาลบ่อพลอย", "โรงพยาบาลพนมทวน",
      "โรงพยาบาลเลาขวัญ", "โรงพยาบาลสังขละบุรี", "โรงพยาบาลหนองปรือ", "โรงพยาบาลห้วยกระเจาเฉลิมพระเกียรติฯ",
      "โรงพยาบาลสมเด็จพระสังฆราชองค์ที่ 19 (ท่าเรือ)", "โรงพยาบาลด่านมะขามเตี้ย",
      // จังหวัดเพชรบุรี
      "โรงพยาบาลพระจอมเกล้า", "โรงพยาบาลชะอำ", "โรงพยาบาลท่ายาง", "โรงพยาบาลบ้านลาด",
      "โรงพยาบาลบ้านแหลม", "โรงพยาบาลแก่งกระจาน", "โรงพยาบาลหนองหญ้าปล้อง", "โรงพยาบาลเขาย้อย",
      // จังหวัดสมุทรสาคร
      "โรงพยาบาลสมุทรสาคร", "โรงพยาบาลกระทุ่มแบน", "โรงพยาบาลบ้านแพ้ว (องค์การมหาชน)",
      // จังหวัดสมุทรสงคราม
      "โรงพยาบาลสมเด็จพระพุทธเลิศหล้า", "โรงพยาบาลนภาลัย", "โรงพยาบาลอัมพวา",
      // จังหวัดประจวบคีรีขันธ์
      "โรงพยาบาลประจวบคีรีขันธ์", "โรงพยาบาลหัวหิน", "โรงพยาบาลกุยบุรี", "โรงพยาบาลทับสะแก",
      "โรงพยาบาลบางสะพาน", "โรงพยาบาลบางสะพานน้อย", "โรงพยาบาลปราณบุรี", "โรงพยาบาลสามร้อยยอด"
    ];

    var data = [];

    // 🌟 2. วนลูปสร้างตารางให้ครบทุกโรงพยาบาลในเขต 5 ทันที
    allRegion5Hospitals.forEach(function(hospName, idx) {
      // ค้นหาว่าโรงพยาบาลนี้เคยถูกบันทึกแผนไว้ใน Supabase หรือยัง
      var existingPlan = rows.find(function(r) {
        return standardizeHospitalName(r.Hospital) === standardizeHospitalName(hospName);
      });

      var planId = existingPlan ? existingPlan.id : "auto_" + idx;
      var startDateStr = existingPlan ? (existingPlan.StartDate || "") : "";
      var endDateStr = existingPlan ? (existingPlan.EndDate || "") : "";
      var originalMonthText = existingPlan ? (existingPlan.Month || "") : ("ตุลาคม " + (currentFiscalYear - 1));

      var actualMonthText = originalMonthText;
      for (let m = 0; m < thaiMonths.length; m++) {
        if (originalMonthText.includes(thaiMonths[m])) {
          var targetBE = (m >= 9) ? currentFiscalYear - 1 : currentFiscalYear;
          actualMonthText = thaiMonths[m] + " " + targetBE;
          break;
        }
      }

      var calculatedStatus = existingPlan ? (existingPlan.Status || "รอดำเนินการ") : "รอดำเนินการ";
      var logCount = 0;

      var cleanPlanHospital = standardizeHospitalName(hospName);
      var hospitalLogs = logs.filter(function(log) {
        var logHospital = log.hospital_name || log.hospital || log.Hospital || "";
        if (standardizeHospitalName(logHospital) !== cleanPlanHospital) return false;

        var logDateStr = log.record_date || log.created_at || log.Timestamp || "";
        if (!logDateStr) return false;
        
        var logDate = new Date(logDateStr);
        if (isNaN(logDate.getTime())) return false;

        var logYearAD = logDate.getFullYear();
        var logMonth = logDate.getMonth() + 1;
        var logFiscal = (logMonth >= 10) ? logYearAD + 543 + 1 : logYearAD + 543;

        return logFiscal === currentFiscalYear;
      });

      logCount = hospitalLogs.length;

      if (logCount > 0) {
        calculatedStatus = "ดำเนินการแล้ว";

        var logDates = hospitalLogs.map(function(log) {
          return new Date(log.record_date || log.created_at || log.Timestamp).getTime();
        });

        logDates.sort(function(a, b) { return a - b; });
        
        var minLogDate = new Date(logDates[0]);
        var maxLogDate = new Date(logDates[logDates.length - 1]);

        startDateStr = Utilities.formatDate(minLogDate, "GMT+7", "yyyy-MM-dd");
        endDateStr = Utilities.formatDate(maxLogDate, "GMT+7", "yyyy-MM-dd");

        var mIndex = minLogDate.getMonth();
        var yBE = (mIndex >= 9) ? currentFiscalYear - 1 : currentFiscalYear;
        actualMonthText = thaiMonths[mIndex] + " " + yBE;
      }

      data.push({
        id: planId,
        month: actualMonthText,
        startDate: startDateStr,
        endDate: endDateStr,
        hospital: hospName,
        status: calculatedStatus,
        count: logCount
      });
    });

    return data;
  } catch (e) { 
    console.error("getTestPlans Error: " + e.toString());
    return []; 
  }
}


// ฟังก์ชันอัปเดตข้อมูลแผนงานใน Supabase (รองรับการแก้เดือนและวันที่ด้วย id)
function updatePlanData(id, planData) {
  var tableName = encodeURIComponent("ชื่อรายการแผนสอบเทียบ");
  var url = SUPABASE_URL + "/rest/v1/" + tableName + "?id=eq." + id;
  
  // ฟังก์ชันช่วยตรวจสอบและแปลงปีให้เป็น ค.ศ. (YYYY-MM-DD) ป้องกันปีเพี้ยน
  function sanitizeDate(dateStr) {
    if (!dateStr) return null;
    var parts = dateStr.split("-");
    if (parts.length === 3) {
      var y = parseInt(parts[0], 10);
      var m = parts[1];
      var d = parts[2];
      if (y > 2400) {
        y = y - 543;
      }
      return y + "-" + m + "-" + d;
    }
    return dateStr;
  }

  var payload = {
    "Month": planData.month || "",
    "StartDate": sanitizeDate(planData.startDate),
    "EndDate": sanitizeDate(planData.endDate)
  };

  var options = {
    "method": "patch",
    "contentType": "application/json",
    "headers": {
      "apikey": SUPABASE_KEY,
      "Authorization": "Bearer " + SUPABASE_KEY,
      "Prefer": "return=minimal"
    },
    "payload": JSON.stringify(payload),
    "muteHttpExceptions": true
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    var responseCode = response.getResponseCode();
    if (responseCode >= 200 && responseCode < 300) {
      return "success";
    } else {
      return "error: " + response.getContentText();
    }
  } catch (e) {
    return "error: " + e.toString();
  }
}


function deletePlan(index) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("แผน");
  if (sheet) {
    sheet.deleteRow(index + 2);
    return "success";
  }
  return "error";
}



// ฟังก์ชันสำหรับแปลงตัวแปร Lead ให้กลายเป็น "ตาราง" ใน Google Doc อัตโนมัติ
function insertEcgTableFromVariables(body, formObject) {
  var leadsData = {};
  
  // กวาดหาข้อมูล Lead ทั้งหมดจากฟอร์มที่ส่งมา
  for (var key in formObject) {
    if (key.startsWith("ecg_lead_") || key === "Lead I" || key === "Lead II" || key === "Lead III" || key === "AVR" || key === "AVL" || key === "AVF" || key === "V" || key === "1mV") {
      // จัดการดึงชื่อ Lead ให้สะอาด
      let leadName = key;
      if (key.startsWith("ecg_lead_")) {
        // แปลงจาก name ใน form เช่น ecg_lead_0 กลับมาเป็นชื่อ Lead ตามลำดับมาตรฐาน
        const leadNamesMap = ['Lead I', 'Lead II', 'Lead III', 'AVR', 'AVL', 'AVF', 'V', '1mV'];
        let idx = parseInt(key.replace("ecg_lead_", ""));
        if (!isNaN(idx) && leadNamesMap[idx]) leadName = leadNamesMap[idx];
      }
      leadsData[leadName] = formObject[key];
    }
  }

  // หากไม่มีข้อมูล Lead ของ ECG ให้ข้ามฟังก์ชันนี้ไป
  if (Object.keys(leadsData).length === 0) return;

  var leadRows = [
    ['Lead I', leadsData['Lead I'] || 'OK'],
    ['Lead II', leadsData['Lead II'] || 'OK'],
    ['Lead III', leadsData['Lead III'] || 'OK'],
    ['AVR', leadsData['AVR'] || 'OK'],
    ['AVL', leadsData['AVL'] || 'OK'],
    ['AVF', leadsData['AVF'] || 'OK'],
    ['V', leadsData['V'] || 'OK'],
    ['1mV', leadsData['1mV'] || 'N/A']
  ];

  // ค้นหาตำแหน่งตัวแปร {{lead_i}} ในเอกสาร
  var foundElement = body.findText('{{lead_i}}');
  
  if (foundElement) {
    var element = foundElement.getElement();
    var parent = element.getParent();
    var pIndex = parent.getParent().getChildIndex(parent);
    
    // เคลียร์ตัวแปรเก่าทั้ง 8 บรรทัดทิ้งไม่ให้ข้อความซ้ำซ้อน
    body.replaceText('{{lead_i}}', '');
    body.replaceText('{{lead_ii}}', '');
    body.replaceText('{{lead_iii}}', '');
    body.replaceText('{{lead_avr}}', '');
    body.replaceText('{{lead_avl}}', '');
    body.replaceText('{{lead_avf}}', '');
    body.replaceText('{{lead_v}}', '');
    body.replaceText('{{lead_1mv}}', '');
    
    // สร้างตารางใหม่แทรกแทนที่ตำแหน่งเดิม
    var tableContents = [
      ['ชื่อ Lead', 'ผลการตรวจสอบ (Status)'],
      ...leadRows
    ];
    var table = body.insertTable(pIndex + 1, tableContents);
    
    // ตกแต่งตารางให้สวยงาม
    styleEcgTable(table);
  }
}

// ฟังก์ชันตกแต่งตารางใน Google Doc (หัวตารางสีน้ำเงิน ทำแถวสลับสี และใส่สีตัวอักษรตามสถานะ)
function styleEcgTable(table) {
  var headerRow = table.getRow(0);
  headerRow.setBackgroundColor('#0d6efd'); // สีน้ำเงิน Primary
  for (var i = 0; i < headerRow.getNumCells(); i++) {
    var cell = headerRow.getCell(i);
    var p = cell.getChild(0).asParagraph();
    p.setForegroundColor('#ffffff');
    p.setBold(true);
    p.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  }
  
  for (var r = 1; r < table.getNumRows(); r++) {
    var row = table.getRow(r);
    if (r % 2 === 0) {
      row.setBackgroundColor('#f8f9fa'); // ทำแถวสลับสี (Zebra striping)
    }
    for (var c = 0; c < row.getNumCells(); c++) {
      var cell = row.getCell(c);
      var p = cell.getChild(0).asParagraph();
      if (c === 0) {
        p.setAlignment(DocumentApp.HorizontalAlignment.LEFT);
      } else {
        p.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
        p.setBold(true);
        var textVal = p.getText();
        if (textVal === 'OK') {
          p.setForegroundColor('#198754'); // สีเขียว
        } else if (textVal === 'Not OK') {
          p.setForegroundColor('#dc3545'); // สีแดง
        } else {
          p.setForegroundColor('#6c757d'); // สีเทา (N/A)
        }
      }
    }
  }
}

function deleteAllFiles() {
  try {
    const folder = getOutputFolder_();
    const files = folder.getFiles();
    let count = 0;
    
    // ทยอยลบทีละ 10 ไฟล์ต่อรอบ เพื่อป้องกันปัญหา Script Timeout
    while (files.hasNext() && count < 10) {
      var file = files.next();
      // ลบเฉพาะไฟล์ PDF เพื่อความปลอดภัย (หากต้องการลบทุกไฟล์ให้เอา if ออก)
      if (file.getMimeType() === MimeType.PDF) {
        file.setTrashed(true);
        count++;
      }
    }
    
    // ตรวจสอบว่ายังมีไฟล์ PDF หลงเหลืออยู่อีกหรือไม่
    var remaining = false;
    while (files.hasNext()) {
      if (files.next().getMimeType() === MimeType.PDF) {
        remaining = true;
        break;
      }
    }
    
    // 🚀 เพิ่มเงื่อนไข: ถ้าตรวจสอบแล้วว่าไม่มีไฟล์เหลืออยู่ (remaining เป็น false)
    // ให้สั่งล้างข้อมูลใน Supabase ทันที
    if (!remaining && count > 0) {
      clearReportLogSheet();
    }
    
    return { success: true, count: count, remaining: remaining };
  } catch (e) {
    return { success: false, error: e.toString() };
  }
}


function clearReportLogSheet() {
  // ใช้เงื่อนไข id.gte.0 แปลว่าเลือกทุกแถวที่มี id มากกว่าหรือเท่ากับ 0 (ลบทั้งหมด)
  var url = SUPABASE_URL + "/rest/v1/report_logs?id=gte.0";
  var options = {
    "method": "delete",
    "headers": {
      "apikey": SUPABASE_KEY,
      "Authorization": "Bearer " + SUPABASE_KEY,
      "Prefer": "return=minimal"
    },
    "muteHttpExceptions": true
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    var responseCode = response.getResponseCode();
    if (responseCode >= 200 && responseCode < 300) {
      Logger.log("ลบข้อมูลทั้งหมดใน Supabase สำเร็จ!");
      return { success: true };
    } else {
      Logger.log("Error clearing Supabase: " + response.getContentText());
      return { success: false, error: response.getContentText() };
    }
  } catch (e) {
    Logger.log("Fetch Error: " + e.toString());
    return { success: false, error: e.toString() };
  }
}




// ฟังก์ชันตรวจสอบและลบข้อมูลอัตโนมัติ (สามารถตั้ง Trigger ให้รันทุกวันได้)
function checkAndCleanReportLog() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("ReportLog");
  if (!sheet) return;

  const lastRow = sheet.getLastRow();
  
  // 1. เงื่อนไขแจ้งเตือนเมื่อใกล้ครบ 38,000 แถว ส่งอีเมลหาแอดมิน
  if (lastRow >= 38000) {
    var email = Session.getActiveUser().getEmail();
    if (email) {
      MailApp.sendEmail(
        email, 
        "⚠️ แจ้งเตือน: ข้อมูล ReportLog เกินขีดจำกัด", 
        "เรียน คุณอาทิตย์,\n\nขณะนี้ข้อมูลในชีต ReportLog มีจำนวนถึง " + lastRow + " แถวแล้ว ข้อมูลบันทึก เกินขีดจำกัดแล้วครับ กรุณาล้างข้อมูลหรือสำรองข้อมูลด่วน!"
      );
    }
  }

  // 2. เงื่อนไขลบข้อมูลอัตโนมัติเมื่ออายุครบ 1 ปี (365 วัน)
  // สมมติว่า คอลัมน์ Date (วันที่บันทึก) อยู่ที่คอลัมน์ J (แถวที่ 10 ใน index 0-based คือ 9)
  if (lastRow > 1) {
    const dataRange = sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn());
    const values = dataRange.getValues();
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    let dateColIndex = -1;
    for (let h = 0; h < headers.length; h++) {
      let hName = headers[h].toString().trim().toLowerCase();
      if (hName === "date" || hName.indexOf("วันที่") !== -1) {
        dateColIndex = h;
        break;
      }
    }

    if (dateColIndex !== -1) {
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1); // ย้อนหลังไป 1 ปีเต็ม

      let rowsToDelete = [];
      // วนลูปเช็กจากล่างขึ้นบน เพื่อเวลาลบแถวจะไม่กระทบ Index
      for (let i = values.length - 1; i >= 0; i--) {
        let cellDate = new Date(values[i][dateColIndex]);
        if (!isNaN(cellDate.getTime()) && cellDate < oneYearAgo) {
          rowsToDelete.push(i + 2); // บวก 2 เพราะข้อมูลเริ่มที่แถว 2
        }
      }

      // ทำการลบแถวที่อายุเกิน 1 ปี
      for (let r = 0; r < rowsToDelete.length; r++) {
        sheet.deleteRow(rowsToDelete[r]);
      }
    }
  }
}

// ฟังก์ชันเช็กจำนวนแถวเพื่อส่งค่าไปเตือนบนหน้าเว็บ
function checkReportLogLimit() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("ReportLog");
    if (!sheet) return { isFull: false };
    
    let lastRow = sheet.getLastRow();
    if (lastRow >= 38000) {
      return { isFull: true, totalRows: lastRow };
    }
    return { isFull: false, totalRows: lastRow };
  } catch (e) {
    return { isFull: false };
  }
}






// ฟังก์ชันเช็กจำนวนไฟล์ PDF และลบไฟล์ที่เก่าเกิน 1 ปีอัตโนมัติ (ตั้ง Trigger ทำงานรายวัน)
function checkAndCleanPdfFolder() {
  try {
    const folder = getOutputFolder_(); 
    const files = folder.getFiles();
    
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1); // ย้อนหลังไป 1 ปีเต็ม
    
    let totalPdfCount = 0;
    
    while (files.hasNext()) {
      var file = files.next();
      if (file.getMimeType() === MimeType.PDF) {
        totalPdfCount++;
        
        // เช็กอายุไฟล์ ถ้าสร้างนานเกิน 1 ปีแล้ว ให้ส่งเข้าถังขยะอัตโนมัติ
        var fileDate = file.getDateCreated();
        if (fileDate < oneYearAgo) {
          file.setTrashed(true);
        }
      }
    }
    
    // แจ้งเตือนทางอีเมลถ้าจำนวนไฟล์ PDF เกิน 38,000 ไฟล์
    if (totalPdfCount >= 38000) {
      var email = Session.getActiveUser().getEmail();
      if (email) {
        MailApp.sendEmail(
          email,
          "⚠️ แจ้งเตือน: ไฟล์ PDF ในโฟลเดอร์เกินขีดจำกัดแล้ว",
          "เรียน คุณอาทิตย์,\n\nขณะนี้ข้อมูลไฟล์ PDF ในโฟลเดอร์รายงานมีจำนวนถึง " + totalPdfCount + " ไฟล์ ข้อมูลไฟล์ PDF เกินขีดจำกัดแล้วครับ กรุณาล้างข้อมูลหรือสำรองข้อมูลออกด่วน"
        );
      }
    }
  } catch (e) {
    console.error("Error in checkAndCleanPdfFolder: " + e.toString());
  }
}

// ฟังก์ชันเช็กจำนวนไฟล์เพื่อส่งไปเตือนบนหน้าเว็บ (เกณฑ์ 38,000 ไฟล์)
function checkPdfFolderLimit() {
  try {
    const folder = getOutputFolder_();
    const files = folder.getFiles();
    let count = 0;
    
    while (files.hasNext()) {
      if (files.next().getMimeType() === MimeType.PDF) {
        count++;
      }
    }
    
    if (count >= 38000) {
      return { isFull: true, totalFiles: count };
    }
    return { isFull: false, totalFiles: count };
  } catch (e) {
    return { isFull: false };
  }
}


// ฟังก์ชันค้นหาและแกะข้อมูลจากไฟล์ PDF ในโฟลเดอร์ Google Drive โดยตรง
function searchReportLogs(filter) {
  try {
    const folderId = "1HDHNh9Z43Og9yJLSsrXef9rdX3n6Df4t";
    const folder = DriveApp.getFolderById(folderId);
    const files = folder.getFiles();
    
    const results = [];
    const searchHospital = filter.hospital ? filter.hospital.trim().toLowerCase() : "";
    const searchDevice = filter.device ? filter.device.trim().toLowerCase() : "";
    const startDate = filter.startDate ? new Date(filter.startDate) : null;
    const endDate = filter.endDate ? new Date(filter.endDate) : null;
    if (endDate) endDate.setHours(23, 59, 59);

    while (files.hasNext()) {
      var file = files.next();
      if (file.getMimeType() === MimeType.PDF) {
        let fileName = file.getName();
        let nameWithoutExt = fileName.replace('.pdf', '');
        let parts = nameWithoutExt.split('_');
        
        let reportNo = parts[0] || "";
        let hospital = parts[1] || "";
        let idNo = parts[2] || "";
        // กรณีชื่อเครื่องหรือรายละเอียดอาจมีขีดล่างซ้อน ให้รวมพาร์ทที่เหลือกลับเข้าด้วยกัน
        let detail = parts.slice(3, parts.length - 1).join('_') || parts[3] || "";
        let dateStr = parts[parts.length - 1] || "";
        
        let matchHospital = !searchHospital || hospital.toLowerCase().includes(searchHospital);
        let matchDevice = !searchDevice || idNo.toLowerCase().includes(searchDevice) || detail.toLowerCase().includes(searchDevice);
        let matchDate = true;

        if ((startDate || endDate) && dateStr) {
          let dateParts = dateStr.split(' ')[0].split('/');
          if (dateParts.length === 3) {
            let d = parseInt(dateParts[0], 10);
            let m = parseInt(dateParts[1], 10) - 1;
            let y = parseInt(dateParts[2], 10);
            if (y < 100) y += 2000;
            let fileDate = new Date(y, m, d);
            
            if (startDate && fileDate < startDate) matchDate = false;
            if (endDate && fileDate > endDate) matchDate = false;
          }
        }

        if (matchHospital && matchDevice && matchDate) {
          // เพิ่มลิงก์ดาวน์โหลดตรงเข้าไปด้วย เพื่อให้หน้าเว็บนำไปสร้างปุ่มโหลดได้สมบูรณ์
          let directDownloadUrl = "https://drive.google.com/uc?export=download&id=" + file.getId();

          results.push({
            rowId: file.getId(),
            hospital: hospital,
            reportNo: reportNo,
            idNo: idNo,
            detail: detail,
            serialNo: "-",
            date: dateStr,
            result: "ผ่านเกณฑ์มาตรฐาน (Pass)",
            downloadUrl: directDownloadUrl // <--- เพิ่มตรงนี้ครับ
          });
        }
      }
    }
    return results;
  } catch (e) {
    console.error("Search Folder Error: " + e.toString());
    return [];
  }
}



function setFolderFilesPublic() {
  var folderId = "1HDHNh9Z43Og9yJLSsrXef9rdX3n6Df4t";
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFiles();
  
  var count = 0;
  while (files.hasNext()) {
    var file = files.next();
    try {
      // ตั้งค่าให้ทุกคนที่มีลิงก์สามารถดูและดาวน์โหลดได้
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      count++;
    } catch (e) {
      console.log("Error file: " + file.getName());
    }
  }
  Logger.log("ตั้งค่าสิทธิ์สาธารณะสำเร็จทั้งหมด " + count + " ไฟล์");
}


function getPdfFilesAsBase64WithId(fileIds) {
  var results = [];
  fileIds.forEach(function(id) {
    try {
      var file = DriveApp.getFileById(id);
      var blob = file.getBlob();
      results.push({
        id: file.getId(),
        name: file.getName(),
        data: Utilities.base64Encode(blob.getBytes())
      });
    } catch (e) {
      console.error("ไม่สามารถดึงไฟล์ ID: " + id + " ได้เนื่องจาก: " + e.toString());
    }
  });
  return results;
}


function insertReportLogToSupabase(formObject, reportNo, finalStatusText) {
  var url = SUPABASE_URL + "/rest/v1/report_logs";
  
  // ป้องกัน Error กรณี formObject เป็นค่าว่างหรือ undefined
  formObject = formObject || {};
  
  var rawHospital = formObject["hospital_name"] || formObject["hospitalSelect"] || "รพ.อู่ทอง";
  var hospitalName = rawHospital ? rawHospital.toString().trim() : "";
  
  var payload = {
    hospital_name: hospitalName,
    report_no: reportNo || "",
    id_no: formObject["ID No"] || "",
    detail: formObject["Detail"] || "",
    manufacture: formObject["Manufacture"] || "",
    model: formObject["Model"] || "",
    serial_no: formObject["Serial No"] || "",
    number_col: formObject["number"] || "",
    dept_user: formObject["dept_user"] || "",
    record_date: Utilities.formatDate(new Date(), "GMT+7", "yyyy-MM-dd'T'HH:mm:ss"),
    result_status: finalStatusText || "",
    tester: formObject["tester"] || "",
    approver: formObject["approver"] || ""
  };

  var options = {
    "method": "post",
    "contentType": "application/json",
    "headers": {
      "apikey": SUPABASE_KEY,
      "Authorization": "Bearer " + SUPABASE_KEY,
      "Prefer": "return=minimal"
    },
    "payload": JSON.stringify(payload),
    "muteHttpExceptions": true
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    var responseCode = response.getResponseCode();
    if (responseCode >= 200 && responseCode < 300) {
      Logger.log("บันทึกข้อมูลลง SQL สำเร็จ!");
      return { success: true };
    } else {
      Logger.log("Error from SQL: " + response.getContentText());
      return { success: false, error: response.getContentText() };
    }
  } catch (e) {
    Logger.log("Fetch Error: " + e.toString());
    return { success: false, error: e.toString() };
  }
}

function getReportLogsFromSupabase() {
  var url = SUPABASE_URL + "/rest/v1/report_logs?select=*&order=id.desc";
  var options = {
    "method": "get",
    "headers": {
      "apikey": SUPABASE_KEY,
      "Authorization": "Bearer " + SUPABASE_KEY
    },
    "muteHttpExceptions": true
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    if (response.getResponseCode() === 200) {
      var data = JSON.parse(response.getContentText());
      return { success: true, data: data };
    } else {
      return { success: false, error: response.getContentText() };
    }
  } catch (e) {
    return { success: false, error: e.toString() };
  }
}

function updatePlanStatus(id, newStatus) {
  var tableName = encodeURIComponent("ชื่อรายการแผนสอบเทียบ");
  var url = SUPABASE_URL + "/rest/v1/" + tableName + "?id=eq." + id;
  
  var options = {
    "method": "patch",
    "contentType": "application/json",
    "headers": {
      "apikey": SUPABASE_KEY,
      "Authorization": "Bearer " + SUPABASE_KEY,
      "Prefer": "return=minimal"
    },
    "payload": JSON.stringify({ "Status": newStatus }),
    "muteHttpExceptions": true
  };

  var response = UrlFetchApp.fetch(url, options);
  return (response.getResponseCode() >= 200 && response.getResponseCode() < 300) ? "success" : "error: " + response.getContentText();
}

// ฟังก์ชันอัปเดตข้อมูลแผนงานใน Supabase (รองรับการแก้เดือนและวันที่ด้วย id)
function updatePlanData(id, planData) {
  var tableName = encodeURIComponent("ชื่อรายการแผนสอบเทียบ");
  var url = SUPABASE_URL + "/rest/v1/" + tableName + "?id=eq." + id;
  
  var payload = {
    "Month": planData.month || "",
    "StartDate": planData.startDate || null,
    "EndDate": planData.endDate || null
  };

  var options = {
    "method": "patch",
    "contentType": "application/json",
    "headers": {
      "apikey": SUPABASE_KEY,
      "Authorization": "Bearer " + SUPABASE_KEY,
      "Prefer": "return=minimal"
    },
    "payload": JSON.stringify(payload),
    "muteHttpExceptions": true
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    var responseCode = response.getResponseCode();
    if (responseCode >= 200 && responseCode < 300) {
      return "success";
    } else {
      return "error: " + response.getContentText();
    }
  } catch (e) {
    return "error: " + e.toString();
  }
}


// ฟังก์ชันลบแผนงานใน Supabase (รองรับการลบด้วย id)
function deletePlan(id) {
  var tableName = encodeURIComponent("ชื่อรายการแผนสอบเทียบ");
  var url = SUPABASE_URL + "/rest/v1/" + tableName + "?id=eq." + id;
  
  var options = {
    "method": "delete",
    "headers": {
      "apikey": SUPABASE_KEY,
      "Authorization": "Bearer " + SUPABASE_KEY,
      "Prefer": "return=minimal"
    },
    "muteHttpExceptions": true
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    var responseCode = response.getResponseCode();
    if (responseCode >= 200 && responseCode < 300) {
      return "success";
    } else {
      return "error: " + response.getContentText();
    }
  } catch (e) {
    return "error: " + e.toString();
  }
}


// ฟังก์ชันตรวจสอบข้อมูลการสอบเทียบใน report_logs (รองรับปีงบประมาณและช่วงวันที่)
function checkHospitalLogs(hospitalName, startDate, endDate) {
  var url = SUPABASE_URL + "/rest/v1/report_logs?select=*";
  var options = {
    "method": "get",
    "headers": { 
      "apikey": SUPABASE_KEY, 
      "Authorization": "Bearer " + SUPABASE_KEY 
    },
    "muteHttpExceptions": true
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    if (response.getResponseCode() === 200) {
      var logs = JSON.parse(response.getContentText());
      var cleanTargetHospital = standardizeHospitalName(hospitalName);
      
      // 🎯 คำนวณหา "ปีงบประมาณปัจจุบัน" แบบไดนามิก (เช่น ค.ศ. 2026/พ.ศ. 2569 หรือ 2570)
      var today = new Date();
      var currentYearAD = today.getFullYear();
      var currentMonth = today.getMonth() + 1;
      var currentYearBE = currentYearAD + 543;
      var currentFiscalYear = (currentMonth >= 10) ? currentYearBE + 1 : currentYearBE;

      // แปลงช่วงวันที่ (ถ้ามี) เป็น Timestamp เพื่อใช้กรองช่วงเวลา
      var planStart = startDate ? new Date(startDate).getTime() : null;
      var planEnd = endDate ? new Date(endDate).getTime() : null;

      if (planStart) {
        var dStart = new Date(startDate);
        dStart.setHours(0, 0, 0, 0);
        planStart = dStart.getTime();
      }
      if (planEnd) {
        var dEnd = new Date(endDate);
        dEnd.setHours(23, 59, 59, 999);
        planEnd = dEnd.getTime();
      }
      
      // กรองหาข้อมูลที่ชื่อโรงพยาบาลตรงกัน และอยู่ในช่วงวันที่ หรือ ปีงบประมาณเดียวกัน
      var matchedLogs = logs.filter(function(log) {
        var logHospital = log.hospital_name || log.hospital || log.Hospital || "";
        if (standardizeHospitalName(logHospital) !== cleanTargetHospital) return false;

        var logDateStr = log.record_date || log.created_at || log.Timestamp || "";
        if (!logDateStr) return false;
        
        var logDate = new Date(logDateStr);
        if (isNaN(logDate.getTime())) return false;
        var logTime = logDate.getTime();

        // 1. ถ้าระบุช่วงวันที่ของแผนงานมา ให้เช็กว่า log อยู่ในช่วงวันนั้นๆ หรือไม่
        if (planStart && planEnd) {
          return logTime >= planStart && logTime <= planEnd;
        }

        // 2. หากไม่มีช่วงวันที่ ให้เช็กเทียบกับ "ปีงบประมาณปัจจุบัน"
        var logYearAD = logDate.getFullYear();
        var logMonth = logDate.getMonth() + 1;
        var logFiscal = (logMonth >= 10) ? logYearAD + 543 + 1 : logYearAD + 543;

        return logFiscal === currentFiscalYear;
      });

      return {
        hasLogs: matchedLogs.length > 0,
        logCount: matchedLogs.length
      };
    }
    return { hasLogs: false, logCount: 0 };
  } catch (e) {
    Logger.log("Check Hospital Logs Error: " + e.toString());
    return { hasLogs: false, logCount: 0 };
  }
}








function autoUpdatePlanStatus() {
  var plansUrl = SUPABASE_URL + "/rest/v1/" + encodeURIComponent("ชื่อรายการแผนสอบเทียบ") + "?select=*";
  var logsUrl = SUPABASE_URL + "/rest/v1/report_logs?select=*";
  
  var options = {
    "method": "get",
    "headers": { "apikey": SUPABASE_KEY, "Authorization": "Bearer " + SUPABASE_KEY },
    "muteHttpExceptions": true
  };

  try {
    var plansResponse = UrlFetchApp.fetch(plansUrl, options);
    var logsResponse = UrlFetchApp.fetch(logsUrl, options);

    if (plansResponse.getResponseCode() === 200 && logsResponse.getResponseCode() === 200) {
      var plans = JSON.parse(plansResponse.getContentText());
      var logs = JSON.parse(logsResponse.getContentText());
      
      plans.forEach(function(plan) {
        if (!plan.Hospital) return;
        
        var cleanPlanHospital = standardizeHospitalName(plan.Hospital);
        var hasCalibrationDone = logs.some(function(log) {
          var logHospital = log.hospital_name || log.hospital || log.Hospital || "";
          return standardizeHospitalName(logHospital) === cleanPlanHospital;
        });

        var newStatus = hasCalibrationDone ? "ดำเนินการแล้ว" : (plan.Status || "รอดำเนินการ");
        if (newStatus !== plan.Status) {
          updatePlanStatus(plan.id, newStatus);
        }
      });
    }
  } catch (e) { Logger.log("Auto Update Error: " + e.toString()); }
}





// 🏥 ฟังก์ชันมาตรฐานสำหรับจัดรูปแบบชื่อโรงพยาบาล (ป้องกัน Error กรณีฟังก์ชันเดิมหาย)
function standardizeHospitalName(name) {
  if (!name) return "";
  return name.toString().trim()
    .replace("โรงพยาบาล", "รพ.")
    .replace("รพ .", "รพ.")
    .replace(/\s+/g, "");
}

// 🚀 ฟังก์ชันอัปเดตสถานะแผนงานอัตโนมัติ
function autoUpdatePlanStatus() {
  var plansUrl = SUPABASE_URL + "/rest/v1/" + encodeURIComponent("ชื่อรายการแผนสอบเทียบ") + "?select=*";
  var logsUrl = SUPABASE_URL + "/rest/v1/report_logs?select=*";
  
  var options = {
    "method": "get",
    "headers": { "apikey": SUPABASE_KEY, "Authorization": "Bearer " + SUPABASE_KEY },
    "muteHttpExceptions": true
  };

  try {
    var plansResponse = UrlFetchApp.fetch(plansUrl, options);
    var logsResponse = UrlFetchApp.fetch(logsUrl, options);

    if (plansResponse.getResponseCode() === 200 && logsResponse.getResponseCode() === 200) {
      var plans = JSON.parse(plansResponse.getContentText());
      var logs = JSON.parse(logsResponse.getContentText());
      
      plans.forEach(function(plan) {
        if (!plan.Hospital) return;
        
        var cleanPlanHospital = standardizeHospitalName(plan.Hospital);
        var hasCalibrationDone = logs.some(function(log) {
          var logHospital = log.hospital_name || log.hospital || log.Hospital || "";
          return standardizeHospitalName(logHospital) === cleanPlanHospital;
        });

        var newStatus = hasCalibrationDone ? "ดำเนินการแล้ว" : (plan.Status || "รอดำเนินการ");
        if (newStatus !== plan.Status) {
          if (typeof updatePlanStatus === 'function') {
            updatePlanStatus(plan.id, newStatus);
          }
        }
      });
    }
  } catch (e) { 
    Logger.log("Auto Update Error: " + e.toString()); 
  }
}

// 🚀 ฟังก์ชันสร้างแผนอัตโนมัติจาก report_logs (ปรับปรุงการคำนวณปี พ.ศ. ให้ถูกต้อง)
function autoCreatePlansFromLogs() {
  try {
    var logsUrl = SUPABASE_URL + "/rest/v1/report_logs?select=*";
    var plansUrl = SUPABASE_URL + "/rest/v1/" + encodeURIComponent("ชื่อรายการแผนสอบเทียบ") + "?select=*";
    
    var options = {
      "method": "get",
      "headers": { "apikey": SUPABASE_KEY, "Authorization": "Bearer " + SUPABASE_KEY },
      "muteHttpExceptions": true
    };

    var logsResponse = UrlFetchApp.fetch(logsUrl, options);
    var plansResponse = UrlFetchApp.fetch(plansUrl, options);

    if (logsResponse.getResponseCode() !== 200 || plansResponse.getResponseCode() !== 200) {
      Logger.log("❌ ไม่สามารถดึงข้อมูลจาก Supabase ได้");
      return;
    }

    var logs = JSON.parse(logsResponse.getContentText());
    var existingPlans = JSON.parse(plansResponse.getContentText());

    if (!logs || logs.length === 0) {
      Logger.log("⚠️ ไม่พบข้อมูลใน report_logs");
      return;
    }

    var thaiMonths = [
      "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", 
      "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", 
      "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];

    function cleanHospName(name) {
      if (!name) return "";
      return name.toString().trim()
        .replace("โรงพยาบาล", "รพ.")
        .replace("รพ .", "รพ.")
        .replace(/\s+/g, "");
    }

    var hospitalGroups = {};

    // 📌 ขั้นตอนที่ 1: จัดกลุ่ม logs ตามโรงพยาบาลและปี ค.ศ.
    logs.forEach(function(log) {
      var rawHospital = log.hospital_name || log.hospital || log.Hospital || "";
      if (!rawHospital) return;
      
      var hospitalName = rawHospital.toString().trim();
      var cleanKey = cleanHospName(hospitalName);

      var logDateStr = log.record_date || log.created_at || log.Timestamp || "";
      if (!logDateStr) return;

      var logDate = new Date(logDateStr);
      if (isNaN(logDate.getTime())) return;

      var logYearAD = logDate.getFullYear(); // เช่น 2026
      var groupKey = cleanKey + "_" + logYearAD;

      if (!hospitalGroups[groupKey]) {
        hospitalGroups[groupKey] = {
          hospitalName: hospitalName,
          cleanKey: cleanKey,
          yearAD: logYearAD,
          monthIndex: logDate.getMonth(),
          dates: []
        };
      }
      hospitalGroups[groupKey].dates.push(logDate.getTime());
    });

    // 📌 ขั้นตอนที่ 2: ตรวจสอบและสร้างแผนใหม่ถ้ายังไม่มี
    for (var key in hospitalGroups) {
      var group = hospitalGroups[key];
      var hospitalName = group.hospitalName;
      var cleanTargetKey = group.cleanKey;
      var logYearAD = group.yearAD;
      
      // ✅ คำนวณปี พ.ศ. ให้ถูกต้องแม่นยำ (2026 + 543 = 2569)
      var logYearBE = logYearAD > 2500 ? logYearAD : logYearAD + 543; 
      var monthNameThai = thaiMonths[group.monthIndex] + " " + logYearBE;

      group.dates.sort(function(a, b) { return a - b; });
      var minDate = new Date(group.dates[0]);                    
      var maxDate = new Date(group.dates[group.dates.length - 1]); 

      var startDateStr = Utilities.formatDate(minDate, "GMT+7", "yyyy-MM-dd");
      var endDateStr = Utilities.formatDate(maxDate, "GMT+7", "yyyy-MM-dd");

      var planExists = existingPlans.some(function(plan) {
        var planHospital = plan.Hospital || plan.hospital || "";
        var cleanPlanKey = cleanHospName(planHospital);

        if (cleanPlanKey !== cleanTargetKey) return false;

        var planStartDate = plan.StartDate || plan.startDate || "";
        if (!planStartDate) return false;

        var planYear = new Date(planStartDate).getFullYear();
        return planYear === logYearAD;
      });

      if (!planExists) {
        var newPlanPayload = {
          "Month": monthNameThai,
          "StartDate": startDateStr, 
          "EndDate": endDateStr,     
          "Hospital": hospitalName,
          "Status": "ดำเนินการแล้ว"
        };

        var postOptions = {
          "method": "post",
          "headers": {
            "apikey": SUPABASE_KEY,
            "Authorization": "Bearer " + SUPABASE_KEY,
            "Content-Type": "application/json",
            "Prefer": "return=minimal"
          },
          "payload": JSON.stringify(newPlanPayload),
          "muteHttpExceptions": true
        };

        var postUrl = SUPABASE_URL + "/rest/v1/" + encodeURIComponent("ชื่อรายการแผนสอบเทียบ");
        var postResponse = UrlFetchApp.fetch(postUrl, postOptions);
        
        Logger.log("✅ สร้างแผนสำเร็จ: " + hospitalName + " (" + monthNameThai + ") | Code: " + postResponse.getResponseCode());
      } else {
        Logger.log("ℹ️ มีแผนของ " + hospitalName + " ปี " + logYearAD + " อยู่แล้ว");
      }
    }

  } catch (e) {
    Logger.log("❌ Error: " + e.toString());
  }
}


function deleteFileById(fileId, reportNo) {
  try {
    // 1. ลบไฟล์ PDF ออกจาก Google Drive (ส่งไปถังขยะ)
    if (fileId && fileId.trim() !== "") {
      try {
        DriveApp.getFileById(fileId).setTrashed(true);
      } catch (driveErr) {
        console.warn("Drive Warning: ไม่พบไฟล์ใน Google Drive หรือลบไม่ได้ - " + driveErr.toString());
      }
    }
    
    // 2. ลบข้อมูลแถวออกจากตารางใน Supabase (จะทำก็ต่อเมื่อมีการส่ง reportNo มาจริง ๆ)
    if (reportNo && reportNo.trim() !== "") {
      var sqlResult = deleteReportLogFromSupabase(reportNo);
      if (!sqlResult.success) {
        throw new Error("ลบข้อมูลใน Database ไม่สำเร็จ: " + sqlResult.error);
      }
    }
    
    return { success: true };
  } catch (e) {
    return { success: false, error: e.toString() };
  }
}

function deleteReportLogFromSupabase(reportNo) {
  try {
    var tableName = "report_logs"; 
    var cleanReportNo = reportNo ? reportNo.toString().trim() : "";
    
    // 🔍 1. พิมพ์ Log ออกมาดูชัดๆ ว่าค่าที่ส่งเข้ามาคืออะไร
    Logger.log(">>> กำลังสั่งลบ ReportNo จาก Supabase: [" + cleanReportNo + "]");

    if (!cleanReportNo) {
      Logger.log(">>> Error: หมายเลขรายงานเป็นค่าว่าง!");
      return { success: false, error: "หมายเลขรายงานเป็นค่าว่าง" };
    }
    
    // 2. ปรับ URL ให้ใช้เงื่อนไขแบบตรงไปตรงมาที่สุด
    var url = SUPABASE_URL + "/rest/v1/" + tableName + "?report_no=eq." + encodeURIComponent(cleanReportNo);
    
    var options = {
      "method": "delete",
      "headers": {
        "apikey": SUPABASE_KEY,
        "Authorization": "Bearer " + SUPABASE_KEY,
        "Content-Type": "application/json",
        "Prefer": "return=representation" // ให้ Supabase ส่งข้อมูลแถวที่ถูกลบกลับมาเช็ก
      },
      "muteHttpExceptions": true
    };
    
    var response = UrlFetchApp.fetch(url, options);
    var responseCode = response.getResponseCode();
    var responseText = response.getContentText();
    
    // 🔍 3. ดูผลลัพธ์ที่ Supabase ตอบกลับมาใน Execution Log
    Logger.log(">>> Supabase Response Code: " + responseCode);
    Logger.log(">>> Supabase Response Body: " + responseText);
    
    if (responseCode >= 200 && responseCode < 300) {
      return { success: true };
    } else {
      return { success: false, error: "Code " + responseCode + ": " + responseText };
    }
  } catch (err) {
    Logger.log(">>> Catch Error: " + err.toString());
    return { success: false, error: err.toString() };
  }
}
function deleteDataFromServer(id) {
  try {
    // โค้ดสำหรับติดต่อ Database หรือเรียก API ที่ต้องใช้ Secret Key ตรงนี้
    // ตัวอย่างเช่น การลบแถวใน Google Sheet หรือยิง API ภายนอก
    
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ชื่อชีตของคุณ");
    // ทำกระบวนการค้นหาและลบข้อมูลด้วย id...
    
    return { success: true, message: "ลบข้อมูลสำเร็จ" };
  } catch (error) {
    return { success: false, message: error.toString() };
  }
}



function getChartDataFromSupabase() {
  var url = SUPABASE_URL + "/rest/v1/report_logs?select=*";
  var options = {
    "method": "get",
    "headers": {
      "apikey": SUPABASE_KEY,
      "Authorization": "Bearer " + SUPABASE_KEY
    },
    "muteHttpExceptions": true
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    if (response.getResponseCode() === 200) {
      var rows = JSON.parse(response.getContentText());
      
      // ตัวอย่าง: นับจำนวนตามผลการทดสอบ (ผ่าน / ไม่ผ่าน) หรือแบ่งตามความเสี่ยง/ประเภทเครื่องมือ
      let statusCounts = { "ผ่านเกณฑ์มาตรฐาน": 0, "ไม่ผ่านเกณฑ์มาตรฐาน": 0 };
      
      rows.forEach(function(item) {
        let status = item.Result || item.result_status || "ผ่านเกณฑ์มาตรฐาน";
        if (status.includes("ผ่าน")) {
          statusCounts["ผ่านเกณฑ์มาตรฐาน"]++;
        } else {
          statusCounts["ไม่ผ่านเกณฑ์มาตรฐาน"]++;
        }
      });

      return {
        success: true,
        labels: ['ผ่านเกณฑ์มาตรฐาน', 'ไม่ผ่านเกณฑ์มาตรฐาน'],
        values: [statusCounts["ผ่านเกณฑ์มาตรฐาน"], statusCounts["ไม่ผ่านเกณฑ์มาตรฐาน"]]
      };
    } else {
      return { success: false, error: response.getContentText() };
    }
  } catch (e) {
    return { success: false, error: e.toString() };
  }
}

function getRegion5DashboardData(selectedYear) {
  var url = SUPABASE_URL + "/rest/v1/report_logs?select=*";
  var options = {
    "method": "get",
    "headers": {
      "apikey": SUPABASE_KEY,
      "Authorization": "Bearer " + SUPABASE_KEY
    },
    "muteHttpExceptions": true
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    if (response.getResponseCode() === 200) {
      var allRows = JSON.parse(response.getContentText());
      // 1. กำหนดให้ถ้าไม่มีการส่งปีมา ให้คำนวณหาปีงบประมาณปัจจุบันอัตโนมัติ (เช่น 2570)
var targetFiscalYear = selectedYear ? parseInt(selectedYear) : null;
if (!targetFiscalYear) {
    var now = new Date();
    var yBE = now.getFullYear() + 543;
    var m = now.getMonth() + 1;
    targetFiscalYear = (m >= 10) ? yBE + 1 : yBE; // ถ้าเป็น ต.ค. เป็นต้นไป จะดีดเป็นปีงบถัดไปให้อัตโนมัติ
}

      // 📌 ตัวกรองข้อมูลเฉพาะปีงบประมาณที่เลือก (คำนวณตามปีงบประมาณไทย ต.ค. - ก.ย.)
      var rows = allRows.filter(function(item) {
        if (!targetFiscalYear) return true;
        var dateObj = new Date(item.record_date || item.created_at);
        if (isNaN(dateObj.getTime())) return false;
        
        var yearBE = dateObj.getFullYear() + 543;
        var month = dateObj.getMonth() + 1; // 1-12
        var fiscalYear = (month >= 10) ? yearBE + 1 : yearBE;

        return fiscalYear === targetFiscalYear;
      });

      var hospitals = [
        "โรงพยาบาลอู่ทอง", "รพ.สต.เครือข่ายอู่ทอง", "โรงพยาบาลศูนย์เจ้าพระยายมราช", "โรงพยาบาลสมเด็จพระสังฆราช องค์ที่ 17",
        "โรงพยาบาลด่านช้าง", "โรงพยาบาลเดิมบางนางบวช", "โรงพยาบาลบางปลาม้า", "โรงพยาบาลศรีประจันต์",
        "โรงพยาบาลสองพี่น้อง", "โรงพยาบาลสามชุก", "โรงพยาบาลหนองหญ้าไซ", "โรงพยาบาลดอนเจดีย์",
        "โรงพยาบาลนครปฐม", "โรงพยาบาลเมตตาประชารักษ์ (วัดไร่ขิง)", "โรงพยาบาลกำแพงแสน", "โรงพยาบาลดอนตูม",
        "โรงพยาบาลบางเลน", "โรงพยาบาลพุทธมณฑล", "โรงพยาบาลสามพราน", "โรงพยาบาลหลวงพ่อเปิ่น",
        "โรงพยาบาลราชบุรี", "โรงพยาบาลดำเนินสะดวก", "โรงพยาบาลบ้านโป่ง", "โรงพยาบาลจอมบึง",
        "โรงพยาบาลปากท่อ", "โรงพยาบาลโพธาราม", "โรงพยาบาลวัดเพลง", "โรงพยาบาลสวนผึ้ง",
        "โรงพยาบาลบ้านคา", "โรงพยาบาลบางแพ",
        "โรงพยาบาลพหลพลพยุหเสนา", "โรงพยาบาลสมเด็จพระปิยมหาราชรมณียเขต", "โรงพยาบาลทองผาภูมิ", "โรงพยาบาลท่ากระดาน",
        "โรงพยาบาลท่าม่วง", "โรงพยาบาลไทรโยค", "โรงพยาบาลบ่อพลอย", "โรงพยาบาลพนมทวน",
        "โรงพยาบาลเลาขวัญ", "โรงพยาบาลสังขละบุรี", "โรงพยาบาลหนองปรือ", "โรงพยาบาลห้วยกระเจาเฉลิมพระเกียรติฯ",
        "โรงพยาบาลสมเด็จพระสังฆราชองค์ที่ 19 (ท่าเรือ)", "โรงพยาบาลด่านมะขามเตี้ย",
        "โรงพยาบาลพระจอมเกล้า", "โรงพยาบาลชะอำ", "โรงพยาบาลท่ายาง", "โรงพยาบาลบ้านลาด",
        "โรงพยาบาลบ้านแหลม", "โรงพยาบาลแก่งกระจาน", "โรงพยาบาลหนองหญ้าปล้อง", "โรงพยาบาลเขาย้อย",
        "โรงพยาบาลสมุทรสาคร", "โรงพยาบาลกระทุ่มแบน", "โรงพยาบาลบ้านแพ้ว (องค์การมหาชน)",
        "โรงพยาบาลสมเด็จพระพุทธเลิศหล้า", "โรงพยาบาลนภาลัย", "โรงพยาบาลอัมพวา",
        "โรงพยาบาลประจวบคีรีขันธ์", "โรงพยาบาลหัวหิน", "โรงพยาบาลกุยบุรี", "โรงพยาบาลทับสะแก",
        "โรงพยาบาลบางสะพาน", "โรงพยาบาลบางสะพานน้อย", "โรงพยาบาลปราณบุรี", "โรงพยาบาลสามร้อยยอด"
      ];

      var stats = {};
      var costStats = {}; 
      var analysisData = {}; 
      var grandTotalCost = 0; 
      var testerCounts = {}; // สร้างตัวแปรนับจำนวนเครื่องผู้ทดสอบ
      var testerCosts = {};  // 📌 สร้างตัวแปรเก็บค่าใช้จ่ายรวมของผู้ทดสอบ
      var equipmentCounts = {}; // 📌 [เพิ่มใหม่] ตัวแปรนับจำนวนตามชื่อรายการเครื่องมือแพทย์

      hospitals.forEach(function(h) {
        stats[h] = { test: 0, calibrate: 0, maintenance: 0 };
        costStats[h] = 0; 
        analysisData[h] = []; 
      });

   // 🎯 รายการเรตราคามาตรฐาน (เรียงลำดับจากคำยาว/เฉพาะเจาะจง ไปหาคำสั้น เพื่อป้องกันการชนกันของคำ)
  const priceList = {
    // 📌 กลุ่มปรับอุณหภูมิร่างกาย (แก้ปัญหาเรื่องคำว่า thermometer ไปทับซ้อน)
    "hypo-hyperthermia": 800,
    "เครื่องปรับอุณหภูมิร่างกาย": 800,
    "hyperthermia": 800,
    
    // รายการอื่นๆ ทั้งหมดตามมาตรฐาน ศบส.5
    "ultrasound scanner": 400,
    "ultrasound therapeutic": 500,
    "ultrasound": 400,
    "pharmaceutical refrig": 500,
    "pharmacy refrigerators": 500,
    "ตู้แช่แข็งในห้องปฏิบัติการ Freezer Bank": 450,
    "blood bank": 500,
    "ตู้แช่เลือด": 500,
    "ventilator": 800,
    "infusion pump": 550,
    "syringe pump": 700,
    "hematocrit": 450,
    "auto defibrillator": 400,
    "defibrillator": 500,
    "aed": 400,
    "pacer": 450,
    "electro surgical": 600,
    "electrosurgical": 600,
    "patient monitor": 400,
    "vital sign": 400,
    "anesthesia machine": 1950,
    "vaporizer": 450,
    "infant incubator": 750,
    "infant warmer": 550,
    "suction": 350,
    "vacuum": 450,
    "flow meter": 200,
    "alarm clock": 350,
    "parafine": 450,
    "pack heater": 650,
    "traction": 450,
    "water bath": 650,
    "อ่างน้ำ": 650,
    "dry bath": 650,
    "air/oxygen": 500,
    "oxygen concentrator": 500,
    "high flow": 500,
    "Doppler": 350,
    "Fetal Monitor": 750,
    "tourniquet": 450,
    "ekg": 500,
    "pulse oximeter": 350,
    "infrared thermometer": 200,
    "incubator": 650,
    "analog blood pressure": 300,
    "digital blood pressure": 450,
    "thermometer": 100,
    "adult weight": 450,
    "weight machine neo": 450,
    "weight general": 450,
    "weight": 450,
    "rotator": 450,
    "centrifuge": 450,
    "sero fuge": 450,
    "amalgamator": 450
  };
      function getDevicePrice(detailName, fullRowText = "") {
  if (!detailName && !fullRowText) return 300;

  // 1. รวมข้อความเพื่อค้นหา
  let searchString = ((detailName || "") + " " + (fullRowText || "")).toLowerCase();

  // 2. เรียงลำดับ Keys ของ priceList โดยเอาคำที่ "ยาวที่สุด" ขึ้นก่อนเสมอ
  // วิธีนี้จะทำให้ "ultrasound therapeutic" (ยาว) ถูกเช็คก่อน "ultrasound" (สั้น)
  let sortedKeys = Object.keys(priceList).sort((a, b) => b.length - a.length);

  // 3. วนลูปเช็คตามลำดับความยาวที่เรียงไว้
  for (let key of sortedKeys) {
    if (searchString.includes(key.toLowerCase())) {
      return priceList[key];
    }
  }

  // ถ้ายังหาไม่เจอ ให้พิมพ์ชื่อนี้ออกมาดูใน Log
  console.log("ยังหาเรตราคาไม่เจอ (ถูกตีเป็น 300 บาท):", detailName);
  return 300;
}

      rows.forEach(function(item) {
        var dateObj = new Date(item.record_date || item.created_at);
        var rawHosp = (item.hospital_name || item.hospital || "").toString().trim();
        
        var resultStatus = (item.result_status || item.Result || "").toString().toLowerCase();
        var isFailed = resultStatus.includes("ไม่ผ่าน") || resultStatus.includes("fail") || resultStatus.includes("error");
        
        var itemCost = isFailed ? 0 : getDevicePrice(item.detail || item.Detail);

        // 📌 [เพิ่มใหม่] เก็บและนับจำนวนตามชื่อรายการเครื่องมือแพทย์
        var deviceName = (item.detail || item.Detail || "").toString().trim();
        if (deviceName) {
          equipmentCounts[deviceName] = (equipmentCounts[deviceName] || 0) + 1;
        }

        var testerName = (item.tester || "ไม่ระบุชื่อ").toString().trim();
        if (testerName) {
          testerCounts[testerName] = (testerCounts[testerName] || 0) + 1;
          testerCosts[testerName] = (testerCosts[testerName] || 0) + itemCost;
        }
        
        // 🎯 ค้นหาชื่อโรงพยาบาลแบบยืดหยุ่น
        var matchedHosp = hospitals.find(function(h) {
          return h === rawHosp || h.includes(rawHosp) || rawHosp.includes(h);
        });

        // 🌟 ป้องกันกรณีชื่อใน Supabase สะกดไม่ตรงกับลิสต์กลาง ให้ปัดเข้าโรงพยาบาลใกล้เคียงหรือโรงพยาบาลแรกสุดแทน
        if (!matchedHosp) {
          if (rawHosp.includes("อู่ทอง")) matchedHosp = "โรงพยาบาลอู่ทอง";
          else if (rawHosp.includes("บางสะพาน")) matchedHosp = "โรงพยาบาลบางสะพาน";
          else if (rawHosp.includes("เดิมบาง")) matchedHosp = "โรงพยาบาลเดิมบางนางบวช";
          else matchedHosp = hospitals[0]; // สำรองเข้าโรงพยาบาลแรกสุดเพื่อไม่ให้เงินตกหล่น
        }

        if (matchedHosp) {
          costStats[matchedHosp] += itemCost;
          grandTotalCost += itemCost; // 📌 ให้นำยอดมารวมที่นี่ เพื่อให้ยอดรายโรงพยาบาลกับยอดรวมตรงกันเป๊ะ

          var textCheck = ((item.detail || item.Detail || "") + " " + (item.report_type || "") + " " + resultStatus).toLowerCase();
          
          if (textCheck.includes("maintenance") || textCheck.includes("บำรุงรักษา") || textCheck.includes("pm")) {
            stats[matchedHosp].maintenance++;
          } else if (textCheck.includes("test") || textCheck.includes("ทดสอบ")) {
            stats[matchedHosp].test++;
          } else {
            stats[matchedHosp].calibrate++;
          }

          if (isFailed) {
            var formattedDate = !isNaN(dateObj.getTime()) ? (dateObj.getDate() + '/' + (dateObj.getMonth() + 1) + '/' + (dateObj.getFullYear() + 543)) : "-";
            var fullDevicePrice = getDevicePrice(item.detail || item.Detail);

            analysisData[matchedHosp].push({
    id_no: item.id_no || item["ID No"] || "-",              
    model: item.model || item.Model || "-",              
    serial_no: item.serial_no || item["Serial No"] || "-",      
    dept_user: item.dept_user || "-",      
    result_status: item.result_status || item.Result || "ไม่ผ่าน",
    record_date: formattedDate,
    cost: fullDevicePrice,
    detail: item.detail || item.Detail || "-" // 👈 เพิ่มบรรทัดนี้เข้าไปครับ เพื่อส่งชื่อเครื่องไปให้ฝั่งหน้าเว็บ
});
          }
        }
      });

      var hospitalFailArray = [];
      for (var hosp in analysisData) {
        if (analysisData[hosp].length > 0) {
          hospitalFailArray.push({ hospital: hosp, count: analysisData[hosp].length });
        }
      }

      hospitalFailArray.sort(function(a, b) { return b.count - a.count; });
      var top5FailHospitals = hospitalFailArray.slice(0, 5);

      // 📌 แปลงข้อมูลผู้ทดสอบให้อยู่ในรูปอาเรย์เพื่อส่งกลับไปหน้าเว็บ
      var testerNames = [];
      var testerTotals = [];
      var testerCostValues = [];
      for (var tName in testerCounts) {
        testerNames.push(tName);
        testerTotals.push(testerCounts[tName]);
        testerCostValues.push(testerCosts[tName]);
      }

      // 📌 [เพิ่มใหม่] แปลงข้อมูลชื่อเครื่องและจำนวนให้อยู่ในรูปอาเรย์สำหรับส่งกลับไปหน้าเว็บ
      var equipLabels = [];
      var equipValues = [];
      for (var eqName in equipmentCounts) {
        equipLabels.push(eqName);
        equipValues.push(equipmentCounts[eqName]);
      }
return {
          success: true,
          labels: hospitals,
          test: hospitals.map(h => stats[h].test),
          calibrate: hospitals.map(h => stats[h].calibrate),
          maintenance: hospitals.map(h => stats[h].maintenance),
          costs: hospitals.map(h => costStats[h]), 
          analysis: analysisData,
          topFailList: top5FailHospitals,
          fiscalYear: targetFiscalYear, // 👈 ใช้ค่าปีปัจจุบันที่คำนวณได้ทันที ไม่บังคับตายตัวที่ 2569 แล้ว
          totalCost: grandTotalCost,
          testerLabels: testerNames,
          testerCounts: testerTotals,
          testerCosts: testerCostValues,
          equipmentLabels: equipLabels,
          equipmentCounts: equipValues
      };
    } else {
      return { success: false, error: response.getContentText() };
    }
  } catch (e) {
    return { success: false, error: e.toString() };
  }
}

// ฟังก์ชันแปลงวันที่ใน record_date ให้เป็น "ปีงบประมาณไทย" (เช่น 2569)
function getThaiFiscalYear(dateString) {
  if (!dateString) return null;
  var d = new Date(dateString);
  if (isNaN(d.getTime())) return null;
  
  var year = d.getFullYear(); // ปี ค.ศ.
  var month = d.getMonth() + 1; // เดือน (1-12)
  
  // ปีงบประมาณไทยเริ่ม 1 ตุลามคม ของปี ค.ศ. ก่อนหน้า ถึง 30 กันยายน ของปี ค.ศ. ถัดไป
  // เช่น ต.ค. 2025 - ก.ย. 2026 คือ ปีงบประมาณ 2569 (พ.ศ. 2026 + 543)
  if (month >= 10) {
    return year + 543 + 1;
  } else {
    return year + 543;
  }
}


function getHospitalSummaryList(selectedYear) {
  // หากไม่ได้ส่งปีมา หรือเลือกเป็น "all" ให้ดึงภาพรวมทั้งหมด หรือกำหนดปีปัจจุบัน
  var targetYear = selectedYear ? selectedYear.toString().trim() : "2570";
  
  var url = "";
  
  // ตรวจสอบเงื่อนไขหากเลือก "ทุกปี" หรือระบุปี พ.ศ. เจาะจง
  if (targetYear === "all") {
    // ดึงข้อมูลทั้งหมดโดยไม่กรองช่วงปี
    url = SUPABASE_URL + "/rest/v1/report_logs?select=hospital_name,tester,created_at";
  } else {
    // แปลงปี พ.ศ. เป็น ค.ศ. สำหรับคำนวณช่วงวันที่ (1 ต.ค. ปีก่อน ถึง 30 ก.ย. ปีนั้น)
    var pYear = parseInt(targetYear);
    var startYear = pYear - 543 - 1; // เช่น 2570 -> 2026
    var endYear = pYear - 543;     // เช่น 2570 -> 2027
    
    var startDate = startYear + "-10-01T00:00:00Z";
    var endDate = endYear + "-09-30T23:59:59Z";
    
    // คิวรีข้อมูลเฉพาะช่วงปีงบประมาณนั้น
    url = SUPABASE_URL + "/rest/v1/report_logs?select=hospital_name,tester,created_at&created_at=gte." + startDate + "&created_at=lte." + endDate;
  }
  
  var options = {
    "method": "get",
    "headers": {
      "apikey": SUPABASE_KEY,
      "Authorization": "Bearer " + SUPABASE_KEY
    },
    "muteHttpExceptions": true
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    if (response.getResponseCode() === 200) {
      var rows = JSON.parse(response.getContentText());
      
      var hospitalCounts = {};
      var testerCounts = {}; 
      var grandTotal = 0;
      
      rows.forEach(function(item) {
        var hosp = (item.hospital_name || "").toString().trim();
        var tester = (item.tester || "ไม่ระบุชื่อ").toString().trim(); 
        
        if (hosp) {
          hospitalCounts[hosp] = (hospitalCounts[hosp] || 0) + 1;
          grandTotal++;
        }

        if (tester) {
          testerCounts[tester] = (testerCounts[tester] || 0) + 1; 
        }
      });

      var list = [];
      for (var hospName in hospitalCounts) {
        list.push({
          name: hospName,
          count: hospitalCounts[hospName]
        });
      }

      list.sort(function(a, b) {
        return b.count - a.count;
      });

      var testerNames = [];
      var testerTotals = [];
      for (var tName in testerCounts) {
        testerNames.push(tName);
        testerTotals.push(testerCounts[tName]);
      }

      return { 
        success: true, 
        hospitals: list, 
        totalMachines: grandTotal,
        testerLabels: testerNames,  
        testerCounts: testerTotals   
      };
      
    } else {
      return { success: false, error: response.getContentText() };
    }
  } catch (e) {
    return { success: false, error: e.toString() };
  }
}
// 📦 ฟังก์ชันรวบรวมไฟล์ PDF ตามรายชื่อ ID มาบีบอัดเป็น Zip ส่งกลับไปให้ดาวน์โหลด
function createZipFromIds(fileIds) {
  try {
    if (!fileIds || fileIds.length === 0) {
      return { success: false, error: "ไม่มีรายชื่อไฟล์สำหรับบีบอัด" };
    }

    // 🛡️ ป้องกันขนาดไฟล์เกินขีดจำกัดของ Google Apps Script (แนะนำครั้งละไม่เกิน 10 ไฟล์)
    if (fileIds.length > 10) {
      return { success: false, error: "เลือกไฟล์จำนวนมากเกินไป (จำกัดครั้งละไม่เกิน 10 ไฟล์ เพื่อป้องกันขนาดไฟล์เกินขีดจำกัด)" };
    }

    var blobs = [];
    fileIds.forEach(function(id) {
      try {
        var file = DriveApp.getFileById(id);
        blobs.push(file.getBlob());
      } catch (err) {
        console.warn("ไม่สามารถดึงไฟล์ ID: " + id + " ได้");
      }
    });

    if (blobs.length === 0) {
      return { success: false, error: "ไม่พบไฟล์ที่สามารถดาวน์โหลดได้" };
    }

    var zipBlob = Utilities.zip(blobs, "Reports_Zip_" + Utilities.formatDate(new Date(), "GMT+7", "yyyyMMdd_HHmmss") + ".zip");
    var folder = getOutputFolder_();
    var zipFile = folder.createFile(zipBlob);
    zipFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    var downloadUrl = "https://drive.google.com/uc?export=download&id=" + zipFile.getId();

    return { success: true, url: downloadUrl, count: blobs.length };

  } catch (e) {
    return { success: false, error: "ขนาดไฟล์รวมใหญ่เกินขีดจำกัดของระบบ (แนะนำให้ทยอยดาวน์โหลดทีละกลุ่ม)" };
  }
}


// 📊 ฟังก์ชันดึงสถิติผลการดำเนินงาน 5 หมวดหมู่สำหรับแสดงผลหน้าเว็บ
function getPerformanceSummaryStats() {
  var url = SUPABASE_URL + "/rest/v1/report_logs?select=*";
  var options = {
    "method": "get",
    "headers": {
      "apikey": SUPABASE_KEY,
      "Authorization": "Bearer " + SUPABASE_KEY
    },
    "muteHttpExceptions": true
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    if (response.getResponseCode() === 200) {
      var rows = JSON.parse(response.getContentText());
      
      // ตัวแปรเก็บผลลัพธ์
      let stats = {
        highItem: 0, highMachine: 0,
        midItem: 0, midMachine: 0,
        basicItem: 0, basicMachine: 0,
        maintItem: 0, maintMachine: 0,
        failItem: 0, failMachine: 0
      };

      rows.forEach(function(item) {
        var detail = (item.detail || item.Detail || "").toString().toLowerCase();
        var resultStatus = (item.result_status || item.Result || "").toString().toLowerCase();
        var isFailed = resultStatus.includes("ไม่ผ่าน") || resultStatus.includes("fail") || resultStatus.includes("error");

        // 1. เช็คเกณฑ์ไม่ผ่าน
        if (isFailed) {
          stats.failItem++;
          stats.failMachine++;
          return; // ข้ามไปไม่นับในหมวดผ่านปกติ
        }

        // 2. เช็คหมวดหมู่การบำรุงรักษา / PM
        if (detail.includes("maintenance") || detail.includes("บำรุงรักษา") || detail.includes("pm")) {
          stats.maintItem++;
          stats.maintMachine++;
        } 
        // 3. เช็คกลุ่มความเสี่ยง (สามารถปรับแต่ง Keyword ค้นหาชื่อเครื่องตามที่คุณใช้งานจริงได้ที่นี่)
        else if (detail.includes("ventilator") || detail.includes("defibrillator") || detail.includes("anesthesia") || detail.includes("infant incubator")) {
          stats.highItem++;
          stats.highMachine++;
        } else if (detail.includes("infusion") || detail.includes("syringe") || detail.includes("monitor") || detail.includes("suction")) {
          stats.midItem++;
          stats.midMachine++;
        } else {
          // จัดเข้าหมวดพื้นฐานเป็นค่าเริ่มต้น
          stats.basicItem++;
          stats.basicMachine++;
        }
      });

      return { success: true, data: stats };
    } else {
      return { success: false, error: response.getContentText() };
    }
  } catch (e) {
    return { success: false, error: e.toString() };
  }
}



// 📊 ฟังก์ชันดึงและกรองสถิติ 5 หมวดหมู่ (ปรับปรุงใหม่ รองรับกรณีไม่เลือกช่วงวันที่)
function getMesotStatsByHospitalAndDate(hospitalName, startDate, endDate) {
    var url = SUPABASE_URL + "/rest/v1/report_logs?select=*";
    var options = {
        "method": "get",
        "headers": {
            "apikey": SUPABASE_KEY,
            "Authorization": "Bearer " + SUPABASE_KEY
        },
        "muteHttpExceptions": true
    };

    try {
        var response = UrlFetchApp.fetch(url, options);
        if (response.getResponseCode() === 200) {
            var rows = JSON.parse(response.getContentText());

            let highItem = 0, highMachine = 0;
            let midItem = 0, midMachine = 0;
            let basicItem = 0, basicMachine = 0;
            let maintItem = 0, maintMachine = 0;
            let failItem = 0, failMachine = 0;

            // ทำความสะอาดชื่อโรงพยาบาลที่รับมาจากหน้าเว็บ
            var cleanTargetHosp = standardizeHospitalName(hospitalName).toLowerCase();

            // ดึงเฉพาะปีจากช่องวันที่ที่ผู้ใช้เลือก (เช่น "2026")
            var targetYear = startDate ? startDate.split('-')[0] : '';

            rows.forEach(function(item) {
                var rowHosp = standardizeHospitalName(item.hospital_name || item.hospital || '').toLowerCase();
                
                // 1. ตรวจสอบชื่อโรงพยาบาลว่าตรงกันหรือไม่
                if (!rowHosp.includes(cleanTargetHosp) && !cleanTargetHosp.includes(rowHosp)) {
                    return; // ถ้าไม่ใช่โรงพยาบาลที่เลือก ให้ข้ามแถวนี้ไป
                }

                // 2. เช็กเฉพาะ "ปี" เท่านั้น (ไม่สนวัน/เดือน) ถ้ามีระบุปีมา
                if (targetYear && item.created_at) {
                    var itemYear = item.created_at.split('-')[0]; // ดึงปีจากฐานข้อมูล (เช่น "2026")
                    if (itemYear !== targetYear) {
                        return; // ถ้าปีไม่ตรงกัน ให้ข้าม
                    }
                }

                var detail = (item.detail || '').toLowerCase();
                var resultStatus = (item.result_status || '').toLowerCase();
                var machineCount = 1;

                // 3. จัดหมวดหมู่ตามเงื่อนไขปกติ
                if (resultStatus.includes('ไม่ผ่าน') || resultStatus.includes('fail')) {
                    failItem++;
                    failMachine += machineCount;
                    return;
                }

                if (detail.includes('maintenance') || detail.includes('บำรุงรักษา') || detail.includes('pm')) {
                    maintItem++;
                    maintMachine += machineCount;
                } else if (detail.includes('ventilator') || detail.includes('defibrillator') || detail.includes('anesthesia') || detail.includes('incubator') || detail.includes('high flow')) {
                    highItem++;
                    highMachine += machineCount;
                } else if (detail.includes('infusion') || detail.includes('syringe') || detail.includes('monitor') || detail.includes('suction') || detail.includes('doppler')) {
                    midItem++;
                    midMachine += machineCount;
                } else {
                    basicItem++;
                    basicMachine += machineCount;
                }
            });

            return {
                success: true,
                data: {
                    highItem: highItem, highMachine: highMachine,
                    midItem: midItem, midMachine: midMachine,
                    basicItem: basicItem, basicMachine: basicMachine,
                    maintItem: maintItem, maintMachine: maintMachine,
                    failItem: failItem, failMachine: failMachine
                }
            };
        } else {
            return { success: false, error: response.getContentText() };
        }
    } catch (e) {
        return { success: false, error: e.toString() };
    }
}


function testFetch() {
  // ลองทดสอบดึงข้อมูลของโรงพยาบาลบางสะพาน
  var result = getMemoStatsByHospitalAndDate("โรงพยาบาลบางสะพาน", "", "");
  Logger.log(result);
}




function searchDeviceMaster(keyword) {
  try {
    var ssId = "13J5p-NhT0A8BmG4aYiRuWfKFquWp5D9Y0wf1iciJD9U";
    var ss = SpreadsheetApp.openById(ssId);
    
    // 🎯 ดึงชีตแรกสุดทางซ้ายมือสุดของไฟล์มาใช้งานทันที ( Sheet1 )
    var sheet = ss.getSheets()[0];
    
    if (!sheet) {
      return { success: false, error: "ไม่พบชีตในไฟล์" };
    }

    var data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      return { success: false, error: "ไม่มีข้อมูลในตาราง" };
    }

    var headers = data[0].map(function(h) { return h.toString().trim(); });
    var searchVal = keyword ? keyword.toString().toLowerCase().trim() : "";
    
    if (!searchVal) {
      return { success: false, error: "กรุณาระบุคำค้นหา" };
    }

    var matchedRow = null;

    for (let i = 1; i < data.length; i++) {
      let row = data[i];
      let isMatch = row.some(function(cellVal) {
        if (!cellVal) return false;
        return cellVal.toString().toLowerCase().trim().includes(searchVal);
      });

      if (isMatch) {
        matchedRow = row;
        break;
      }
    }

    if (matchedRow) {
      var obj = {};
      headers.forEach(function(h, index) {
        var val = matchedRow[index];
        if (val instanceof Date) {
          val = Utilities.formatDate(val, "GMT+7", "dd/MM/yyyy");
        }
        obj[h] = val !== undefined && val !== null ? val.toString() : "";
      });
      return { success: true, data: obj };
    } else {
      return { success: false, error: "ไม่พบข้อมูล" };
    }

  } catch (e) {
    return { success: false, error: e.toString() };
  }
}
// ➕ ฟังก์ชันเพิ่มเครื่องมือแพทย์ใหม่ (เช็คความซ้ำจาก ID No + hospital + Detail)
function addNewDeviceMaster(formData) {
  try {
    var ssId = "13J5p-NhT0A8BmG4aYiRuWfKFquWp5D9Y0wf1iciJD9U";
    var ss = SpreadsheetApp.openById(ssId);
    var sheet = ss.getSheets()[0]; // ชีตแรก (Sheet1)
    
    var data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      return insertBrandNewRow(sheet, formData, data.length);
    }

    var headers = data[0].map(function(h) { return h.toString().trim(); });
    
    // ดึง Index ของคอลัมน์ที่ใช้ตรวจสอบความซ้ำ
    var hospColIdx = headers.indexOf("hospital");
    var idNoColIdx = headers.indexOf("ID No");
    var detailColIdx = headers.indexOf("Detail");
    var serialColIdx = headers.indexOf("Serial No");

    var targetIdNo = (formData["ID No"] || "").toString().trim().toLowerCase();
    
    if (!targetIdNo) {
      return { success: false, error: "กรุณาระบุรหัสเครื่อง (ID No)" };
    }

    var existingRowIndex = -1;

    // 🔍 1. ตรวจสอบข้อมูลว่าซ้ำกันในระบบหรือยัง
    for (let i = 1; i < data.length; i++) {
      let row = data[i];
      
      let rHosp = hospColIdx !== -1 && row[hospColIdx] ? row[hospColIdx].toString().trim().toLowerCase() : "";
      let rIdNo = idNoColIdx !== -1 && row[idNoColIdx] ? row[idNoColIdx].toString().trim().toLowerCase() : "";
      let rDetail = detailColIdx !== -1 && row[detailColIdx] ? row[detailColIdx].toString().trim().toLowerCase() : "";
      let rSerial = serialColIdx !== -1 && row[serialColIdx] ? row[serialColIdx].toString().trim().toLowerCase() : "";

      let fHosp = (formData["hospital"] || "").toString().trim().toLowerCase();
      let fDetail = (formData["Detail"] || "").toString().trim().toLowerCase();
      let fSerial = (formData["Serial No"] || "").toString().trim().toLowerCase();

      // 🎯 [เพิ่มการเช็ก Detail เข้าไป] ถ้ารหัส ID No ตรงกัน + โรงพยาบาลเดียวกัน + ชื่อเครื่อง (Detail) เหมือนกัน
      if (rIdNo === targetIdNo && rHosp === fHosp && rDetail === fDetail) {
        existingRowIndex = i + 1; // ตำแหน่งแถวใน Google Sheets (นับรวมหัวตาราง)
        break;
      }
    }

    // 🛑 2. ถ้าพบว่ามีข้อมูลอยู่แล้ว -> ห้ามบันทึกซ้ำ ส่งข้อความแจ้งเตือนพร้อมบอกตำแหน่งแถวทันที
    if (existingRowIndex !== -1) {
      return { 
        success: false, // ให้ตีเป็น false เพื่อไม่ให้ขึ้นหน้าต่าง "สำเร็จ" สีเขียว
        error: "⚠️ มีข้อมูลรหัสเครื่องนี้ (" + formData["ID No"] + ") และชื่อเครื่อง (" + formData["Detail"] + ") อยู่ในระบบแล้ว!\n📍 พบข้อมูลอยู่ที่ Google Sheets แถวที่ " + existingRowIndex 
      };
    } 
    
    // 🆕 3. ถ้ายังไม่มีในระบบ -> บันทึกเพิ่มเป็นแถวใหม่ตามปกติ
    else {
      return insertBrandNewRow(sheet, formData, data.length);
    }

  } catch (e) {
    return { success: false, error: "Add Device Error: " + e.toString() };
  }
}

// 📌 ฟังก์ชันช่วยเพิ่มแถวใหม่
function insertBrandNewRow(sheet, formData, totalRows) {
  var headers = sheet.getDataRange().getValues()[0].map(function(h) { return h.toString().trim(); });
  var newDetailId = "d" + totalRows;
  var nowDateTime = Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy, HH:mm:ss");

  var newRow = headers.map(function(header) {
    switch (header) {
      case "detail_id": return newDetailId;
      case "hospital": return formData["hospital"] || "";
      case "ID No": return (formData["ID No"] || "").toUpperCase();
      case "Detail": return formData["Detail"] || "";
      case "Manufacture": return (formData["Manufacture"] || "").toUpperCase();
      case "Model": return (formData["Model"] || "").toUpperCase();
      case "Serial No": return (formData["Serial No"] || "").toUpperCase();
      case "number": return (formData["number"] || "").toUpperCase();
      case "dept_user": return formData["dept_user"] || "";
      case "detail_img": return formData["detail_img"] || "";
      case "cal_date": return Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy, HH:mm:ss");
      default: return formData[header] !== undefined ? formData[header] : "";
    }
  });

  sheet.appendRow(newRow);
  var newRowPosition = sheet.getLastRow();
  return { success: true, message: "✅ บันทึกข้อมูลเครื่องมือแพทย์ใหม่เข้าทะเบียนหลักสำเร็จ (บันทึกไว้ที่ Google Sheets แถวที่ " + newRowPosition + ")" };
}

// 📌 ฟังก์ชันช่วยเพิ่มแถวใหม่ (ใช้ร่วมกัน)
function insertBrandNewRow(sheet, formData, totalRows) {
  var headers = sheet.getDataRange().getValues()[0].map(function(h) { return h.toString().trim(); });
  var newDetailId = "d" + totalRows;
  var nowDateTime = Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy, HH:mm:ss");

  var newRow = headers.map(function(header) {
    switch (header) {
      case "detail_id": return newDetailId;
      case "hospital": return formData["hospital"] || "";
      case "ID No": return (formData["ID No"] || "").toUpperCase();
      case "Detail": return formData["Detail"] || "";
      case "Manufacture": return (formData["Manufacture"] || "").toUpperCase();
      case "Model": return (formData["Model"] || "").toUpperCase();
      case "Serial No": return (formData["Serial No"] || "").toUpperCase();
      case "number": return (formData["number"] || "").toUpperCase();
      case "dept_user": return formData["dept_user"] || "";
      case "detail_img": return formData["detail_img"] || "";
      case "cal_date": return Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy, HH:mm:ss");
      default: return formData[header] !== undefined ? formData[header] : "";
    }
  });

  sheet.appendRow(newRow);
  return { success: true, message: "บันทึกเครื่องมือแพทย์ใหม่เข้าทะเบียนหลักสำเร็จเรียบร้อยแล้ว!" };
}








// 🧪 ฟังก์ชันทดสอบการเชื่อมต่อและค้นหาข้อมูลใน Google Sheets แบบสมบูรณ์
function testConnectionAndSearch() {
  try {
    var ssId = "13J5p-NhT0A8BmG4aYiRuWfKFquWp5D9Y0wf1iciJD9U";
    
    // 1. ลองเปิดไฟล์ Spreadsheet
    var ss = SpreadsheetApp.openById(ssId);
    Logger.log("✅ 1. เปิดไฟล์สำเร็จ: " + ss.getName());
    
    // 2. ดึงชีตแรกสุดของไฟล์มาทดสอบ
    var sheet = ss.getSheets()[0];
    if (!sheet) {
      Logger.log("❌ 2. ไม่พบชีตในไฟล์");
      return;
    }
    Logger.log("✅ 2. เปิดชีตแรกสุดสำเร็จ: " + sheet.getName() + " (มีข้อมูลทั้งหมด " + sheet.getLastRow() + " แถว)");
    
    // 3. ทดลองค้นหารหัสเครื่องจริง (เช่น E&L-01 หรือ UTH-3115)
    var testKeyword = "E&L-01";
    Logger.log("🔍 3. กำลังทดลองค้นหารหัส: " + testKeyword);
    
    var searchResult = searchDeviceMaster(testKeyword);
    if (searchResult.success) {
      Logger.log("🎉 ค้นหาเจอข้อมูลสำเร็จ! รายละเอียด: " + JSON.stringify(searchResult.data, null, 2));
    } else {
      Logger.log("⚠️ ค้นหาไม่พบข้อมูล: " + searchResult.error);
    }

  } catch (e) {
    Logger.log("❌ เกิดข้อผิดพลาด: " + e.toString());
  }
}




// 📋 ดึงข้อมูลทั้งหมดจาก Sheet1
function getAllDevicesMaster() {
  try {
    var ssId = "13J5p-NhT0A8BmG4aYiRuWfKFquWp5D9Y0wf1iciJD9U";
    var ss = SpreadsheetApp.openById(ssId);
    var sheet = ss.getSheets()[0];
    
    var data = sheet.getDataRange().getValues();
    if (data.length <= 1) return { success: true, data: [] };

    var headers = data[0].map(function(h) { return h.toString().trim(); });
    var records = [];

    for (let i = 1; i < data.length; i++) {
      let row = data[i];
      let obj = {};
      headers.forEach(function(h, index) {
        let val = row[index];
        if (val instanceof Date) {
          val = Utilities.formatDate(val, "GMT+7", "dd/MM/yyyy");
        }
        obj[h] = val !== undefined && val !== null ? val.toString() : "";
      });
      records.push(obj);
    }

    return { success: true, data: records };
  } catch (e) {
    return { success: false, error: e.toString() };
  }
}

// ✏️ อัปเดตข้อมูลเครื่องที่แก้ไขลงใน Sheet1 ตาม detail_id
function updateDeviceMasterInSheet(formData) {
  try {
    var ssId = "13J5p-NhT0A8BmG4aYiRuWfKFquWp5D9Y0wf1iciJD9U";
    var ss = SpreadsheetApp.openById(ssId);
    var sheet = ss.getSheets()[0];
    
    var data = sheet.getDataRange().getValues();
    var headers = data[0].map(function(h) { return h.toString().trim(); });
    var detailIdColIdx = headers.indexOf("detail_id");

    if (detailIdColIdx === -1) {
      return { success: false, error: "ไม่พบคอลัมน์ detail_id ในชีต" };
    }

    var targetDetailId = formData["detail_id"];
    var rowIndexToUpdate = -1;

    for (let i = 1; i < data.length; i++) {
      if (data[i][detailIdColIdx].toString().trim() === targetDetailId.toString().trim()) {
        rowIndexToUpdate = i + 1; 
        break;
      }
    }

    if (rowIndexToUpdate === -1) {
      return { success: false, error: "ไม่พบรหัสรายการที่ต้องการแก้ไข" };
    }

    headers.forEach(function(header, colIndex) {
      if (formData[header] !== undefined) {
        sheet.getRange(rowIndexToUpdate, colIndex + 1).setValue(formData[header]);
      }
    });

    return { success: true };
  } catch (e) {
    return { success: false, error: e.toString() };
  }
}

// 🗑️ ลบแถวข้อมูลใน Google Sheets ตาม detail_id
function deleteDeviceMasterByDetailId(detailId) {
  try {
    var ssId = "13J5p-NhT0A8BmG4aYiRuWfKFquWp5D9Y0wf1iciJD9U";
    var ss = SpreadsheetApp.openById(ssId);
    var sheet = ss.getSheets()[0];
    
    var data = sheet.getDataRange().getValues();
    var headers = data[0].map(function(h) { return h.toString().trim(); });
    var detailIdColIdx = headers.indexOf("detail_id");

    if (detailIdColIdx === -1) {
      return { success: false, error: "ไม่พบคอลัมน์ detail_id ในชีต" };
    }

    var rowIndexToDelete = -1;
    for (let i = 1; i < data.length; i++) {
      if (data[i][detailIdColIdx].toString().trim() === detailId.toString().trim()) {
        rowIndexToDelete = i + 1;
        break;
      }
    }

    if (rowIndexToDelete !== -1) {
      sheet.deleteRow(rowIndexToDelete);
      return { success: true };
    } else {
      return { success: false, error: "ไม่พบรายการที่ต้องการลบในระบบ" };
    }

  } catch (e) {
    return { success: false, error: e.toString() };
  }
}


// 🔍 ฟังก์ชันตรวจสอบและบันทึกเครื่องให้อัตโนมัติ (พร้อมบอกตำแหน่งแถวและข้อความแจ้งเตือนที่ชัดเจน)
function checkAndAutoRegisterDevice(formData) {
  try {
    var ssId = "13J5p-NhT0A8BmG4aYiRuWfKFquWp5D9Y0wf1iciJD9U";
    var ss = SpreadsheetApp.openById(ssId);
    var sheet = ss.getSheets()[0]; // Sheet1 (ทะเบียนหลัก)
    
    var data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      return insertNewDeviceRow(sheet, formData);
    }

    var headers = data[0].map(function(h) { return h.toString().trim(); });
    var idNoColIdx = headers.indexOf("ID No");

    var targetIdNo = (formData["ID No"] || "").toString().trim().toLowerCase();
    var existingRowIndex = -1;

    // ตรวจสอบว่ามี ID No นี้ในระบบหรือยัง และอยู่แถวที่เท่าไหร่
    for (let i = 1; i < data.length; i++) {
      let rowIdNo = data[i][idNoColIdx] ? data[i][idNoColIdx].toString().trim().toLowerCase() : "";
      if (rowIdNo === targetIdNo && targetIdNo !== "") {
        existingRowIndex = i + 1; // นับรวมหัวตาราง เป็นตำแหน่งแถวใน Google Sheets จริงๆ
        break;
      }
    }

    // ถ้ายังไม่มีในระบบ -> บันทึกเพิ่มให้อัตโนมัติ
    if (existingRowIndex === -1 && targetIdNo !== "") {
      return insertNewDeviceRow(sheet, formData, headers);
    } else {
      // ถ้ามีอยู่แล้ว -> แจ้งเตือนพร้อมระบุตำแหน่งแถวใน Google Sheets ให้ชัดเจน
      return { 
        success: true, 
        registered: false, 
        message: "⚠️ มีข้อมูลรหัสเครื่องนี้ (" + formData["ID No"] + ") อยู่ในระบบแล้ว! (พบข้อมูลอยู่ที่ Google Sheets แถวที่ " + existingRowIndex + ")" 
      };
    }

  } catch (e) {
    return { success: false, error: e.toString() };
  }
}

// 📌 ฟังก์ชันช่วยเพิ่มแถวข้อมูลใหม่
function insertNewDeviceRow(sheet, formData, headers) {
  var lastRow = sheet.getLastRow();
  var newDetailId = "d" + lastRow;
  var nowDateTime = Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy, HH:mm:ss");
  
  var newRowData = [];
  headers.forEach(function(h) {
    if (h === "detail_id") {
      newRowData.push(newDetailId);
    } else if (h === "cal_date" && !formData[h]) {
      newRowData.push(nowDateTime);
    } else {
      let val = formData[h] !== undefined && formData[h] !== null ? formData[h] : "";
      newRowData.push(val);
    }
  });

  sheet.appendRow(newRowData);
  var newRowPosition = sheet.getLastRow();
  return { 
    success: true, 
    registered: true, 
    message: "✅ บันทึกข้อมูลเครื่องใหม่เข้าทะเบียนหลักสำเร็จ (บันทึกไว้ที่ Google Sheets แถวที่ " + newRowPosition + ")" 
  };
}

// 📌 ฟังก์ชันช่วยเพิ่มแถวข้อมูลใหม่ให้ตรงกับหัวตารางทั้ง 14 คอลัมน์เป๊ะๆ
function insertNewDeviceRow(sheet, formData, headers) {
  var lastRow = sheet.getLastRow();
  var newDetailId = "d" + lastRow; // สร้าง detail_id ต่อเนื่อง

  var nowDateTime = Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy, HH:mm:ss");
  
  var newRowData = [];
  headers.forEach(function(h) {
    if (h === "detail_id") {
      newRowData.push(newDetailId);
    } else if (h === "cal_date" && !formData[h]) {
      newRowData.push(nowDateTime);
    } else {
      // ดึงค่าตามชื่อฟิลด์หัวตาราง หากไม่มีค่าให้เว้นว่างไว้
      let val = formData[h] !== undefined && formData[h] !== null ? formData[h] : "";
      newRowData.push(val);
    }
  });

  sheet.appendRow(newRowData);
  return { success: true, registered: true, message: "บันทึกข้อมูลเครื่องใหม่เข้าทะเบียนหลักครบถ้วนเรียบร้อยแล้ว" };
}






function importSheetToFirebase() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var dataRange = sheet.getDataRange();
  var values = dataRange.getValues();
  
  // แถวที่ 1 คือ Header หัวตาราง เริ่มอ่านข้อมูลตั้งแต่แถวที่ 2 เป็นต้นไป
  var headers = values[0];
  
  // ตั้งค่า Project ID ของ Firebase เรา (จากโปรเจกต์ mec-equipment-db)
  var projectId = "mec-equipment-db"; 
  var collectionName = "equipment_list";
  
  // วนลูปทีละแถวข้อมูล
  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    
    // ข้ามแถวที่ว่างเปล่าไม่มี ID No
    if (!row[0]) continue; 
    
    var payload = {
      "fields": {
        "hospitalID": { "stringValue": "โรงพยาบาลอู่ทอง" }, // หรือดึงจากคอลัมน์ถ้ามี
        "No": { "stringValue": String(row[0] || "") },
        "Detail": { "stringValue": String(row[1] || "") },
        "Manufacture": { "stringValue": String(row[2] || "") },
        "Model": { "stringValue": String(row[3] || "") },
        "Serial No": { "stringValue": String(row[4] || "") },
        "number": { "stringValue": String(row[5] || "") },
        "dept_user": { "stringValue": String(row[6] || "") },
        "detail_img": { "stringValue": String(row[7] || "") },
        "ระดับความเสี่ยง": { "stringValue": String(row[8] || "") }
        
      }
    };
    
    var url = "https://firestore.googleapis.com/v1/projects/" + projectId + "/databases/(default)/documents/" + collectionName;
    
    var options = {
      "method": "post",
      "contentType": "application/json",
      "payload": JSON.stringify(payload),
      "muteHttpExceptions": true
    };
    
    try {
      var response = UrlFetchApp.fetch(url, options);
      Logger.log("Row " + i + " imported: " + response.getResponseCode());
    } catch (error) {
      Logger.log("Error at row " + i + ": " + error.toString());
    }
  }
  
  Logger.log("Import Completed!");
}

function migrateSheetToFirebase() {
  var sheetId = "13J5p-NhT0A8BmG4aYiRuWfKFquWp5D9Y0wf1iciJD9U"; 
  var ss = SpreadsheetApp.openById(sheetId);
  var sheet = ss.getSheets()[0]; 
  
  var data = sheet.getDataRange().getValues();
  if (data.length <= 1) {
    Logger.log("ไม่พบข้อมูลในชีต");
    return;
  }
  
  // ดึงหัวคอลัมน์ทั้งหมดจากแถวแรกโดยอัตโนมัติ
  var headers = data[0].map(function(h) { return h.toString().trim(); });
  
  var projectId = "mec-equipment-db";
  var collectionName = "equipment_list";
  
  var successCount = 0;
  
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    
    // ดึงค่าจากคอลัมน์ "ID No" มาเป็นชื่อ Document ID ใน Firebase
    var idNoIndex = headers.indexOf("ID No");
    var idNo = (idNoIndex !== -1 && row[idNoIndex]) ? row[idNoIndex].toString().trim() : "";
    
    if (!idNo) {
      idNo = "row_" + (i + 1); // ถ้า ID No ว่าง ใช้ชื่อสำรอง
    }
    
    // สร้างโครงสร้างดึงข้อมูลทุกคอลัมน์ที่มีในชีต
    var fields = {};
    headers.forEach(function(header, index) {
      if (!header) return; // ข้ามถ้าหัวคอลัมน์ว่าง
      var val = row[index] !== undefined && row[index] !== null ? row[index].toString() : "";
      
      // จัดการแปลงรูปแบบข้อมูลที่เป็นวันที่
      if (row[index] instanceof Date) {
        val = Utilities.formatDate(row[index], "GMT+7", "dd/MM/yyyy HH:mm:ss");
      }
      
      fields[header] = { stringValue: val };
    });
    
    var payload = { fields: fields };
    
    var url = "https://firestore.googleapis.com/v1/projects/" + projectId + "/databases/(default)/documents/" + collectionName + "?documentId=" + encodeURIComponent(idNo);
    
    var options = {
      "method": "post",
      "contentType": "application/json",
      "payload": JSON.stringify(payload),
      "muteHttpExceptions": true
    };
    
    try {
      var response = UrlFetchApp.fetch(url, options);
      var responseCode = response.getResponseCode();
      if (responseCode >= 200 && responseCode < 300) {
        successCount++;
        Logger.log("✅ ส่งข้อมูลแถวที่ " + (i + 1) + " (ID: " + idNo + ") สำเร็จครบทุกคอลัมน์");
      } else {
        Logger.log("⚠️ ผิดพลาดแถวที่ " + (i + 1) + ": " + response.getContentText());
      }
    } catch (error) {
      Logger.log("❌ Error แถวที่ " + (i + 1) + ": " + error.toString());
    }
  }
  
  Logger.log("🎉 ย้ายข้อมูลทุกคอลัมน์เข้า Firebase สำเร็จจำนวน " + successCount + " รายการ");
}


function deleteAllDocumentsInFirebase() {
  var projectId = "mec-equipment-db";
  var collectionName = "equipment_list";
  
  // 1. ดึงรายการเอกสารทั้งหมดใน Collection (ดึงทีละหน้าสูงสุด 500 รายการต่อรอบ)
  var url = "https://firestore.googleapis.com/v1/projects/" + projectId + "/databases/(default)/documents/" + collectionName + "?pageSize=500";
  var options = {
    "method": "get",
    "muteHttpExceptions": true
  };
  
  var response = UrlFetchApp.fetch(url, options);
  var data = JSON.parse(response.getContentText());
  
  if (!data.documents || data.documents.length === 0) {
    Logger.log("📭 ไม่พบข้อมูลใน Collection นี้แล้ว (โล่งแล้วครับ)");
    return;
  }
  
  var count = 0;
  // 2. วนลูปสั่งลบทีละเอกสาร
  data.documents.forEach(function(doc) {
    var docName = doc.name; // ค่าจะได้รูปแบบเช่น projects/mec-equipment-db/databases/(default)/documents/equipment_list/E&L-01
    var deleteUrl = "https://firestore.googleapis.com/v1/" + docName;
    
    var deleteOptions = {
      "method": "delete",
      "muteHttpExceptions": true
    };
    
    var delRes = UrlFetchApp.fetch(deleteUrl, deleteOptions);
    if (delRes.getResponseCode() === 200 || delRes.getResponseCode() === 204) {
      count++;
      Logger.log("🗑️ ลบสำเร็จ: " + docName);
    } else {
      Logger.log("⚠️ ลบไม่สำเร็จ: " + docName);
    }
  });
  
  Logger.log("🎉 ลบข้อมูลชุดนี้เสร็จสิ้น จำนวน " + count + " รายการ");
  
  // หากข้อมูลมีมากกว่า 500 รายการ สามารถกดรันซ้ำอีกรอบจนกว่าจะหมดครับ
}
