document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM fully loaded"); // Debug point 3
  
  const businessInput = document.getElementById('businessName');
  const certName = document.getElementById('cert-name');
  const generateBtn = document.getElementById('generateBtn');

  // Debug: Log elements
  console.log("Elements:", {
    businessInput,
    certName,
    generateBtn
  });

  // Verify elements exist
  if (!businessInput || !certName || !generateBtn) {
    console.error("Error: Missing elements!");
    return;
  }

  // Name update functionality
  businessInput.addEventListener('input', function() {
    certName.textContent = this.value || "Your Business Name";
  });

  // PDF Generation
  generateBtn.addEventListener('click', function() {
    console.log("Button clicked - attempting PDF generation...");
    
    const element = document.getElementById('certificatePreview');
    if (!element) {
      console.error("Error: Certificate preview div not found!");
      return;
    }

    const options = {
      margin: 0,
      filename: 'certificate.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { 
        scale: 2,
        logging: true, // Enable to see rendering details
        useCORS: true  // Critical for external images
      },
      jsPDF: { 
        unit: 'px', 
        format: [800, 600], // Adjusted to common PDF size
        orientation: 'landscape' 
      }
    };

    html2pdf()
      .set(options)
      .from(element)
      .save()
      .catch(err => {
        console.error("PDF generation failed:", err);
      });
  });
});
