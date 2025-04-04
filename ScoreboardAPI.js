

// This is code for google sheep app deploy



function doPost(e) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const params = e.parameter;
    
    // Validation
    if (!params.name || !params.country || !params.score) {
      return ContentService.createTextOutput(JSON.stringify({ error: "Invalid data" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    sheet.appendRow([
      params.name.substring(0, 20),
      Number(params.score),
      params.country.substring(0, 2).toUpperCase(),
      new Date(params.timestamp)
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  
  
  
  
  }
  
  function doGet(e) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = sheet.getDataRange().getValues().slice(1).map(row => ({
      name: row[0],
      score: Number(row[1]),
      country: row[2],
      timestamp: row[3]
    }));
  
    return ContentService.createTextOutput(JSON.stringify(data))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  
  
  