function extractTextFromFolderImages() {
  // Replace with your folder's ID (the folder that contains your images)
  var folderId = "1D0RzBJJcqQHYxhGSmDfglo8vGZelSGo-";
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFiles();
  
  // Create a new Google Doc to store all OCR outputs
  var outputDoc = DocumentApp.create("<enter initial file name>");
  // var outputDoc = DocumentApp.openById("<enter doc link after first iteration>")
  var outputBody = outputDoc.getBody();

  var i = 0;
  
  // Loop through all files in the folder
  while (files.hasNext()) {
    var file = files.next();
    // Process only image files
    // console.log("Starting process")
    if (file.getMimeType().indexOf("image/") === 0) {
      
      // Set up resource metadata for the OCR conversion
      var resource = {
        title: file.getName().split(".")[0] + " OCR",
        mimeType: file.getMimeType()
      };
      
      // Use the advanced Drive service to create a new file with OCR enabled.
      // (Ensure you have enabled the Drive API service: In Apps Script editor > Services > Add Drive API)
      var ocrFile = Drive.Files.insert(resource, file.getBlob(), {ocr: true});
      
      // Open the newly created Google Doc (which now contains the OCR text)
      var doc = DocumentApp.openById(ocrFile.id);
      var extractedText = doc.getBody().getText();

      Logger.log(i++);
      Utilities.sleep(5000);
      
      // Append the filename and its OCR text to the output document
      outputBody.appendParagraph("File: " + file.getName());
      outputBody.appendParagraph(extractedText);
      outputBody.appendHorizontalRule();
      
      // Optionally, trash the temporary OCR document to keep your Drive clean
      DriveApp.getFileById(ocrFile.id).setTrashed(true);
      file.setTrashed(true);
    }
  }
  
  Logger.log("OCR extraction complete. Consolidated output document: " + outputDoc.getUrl());
}
