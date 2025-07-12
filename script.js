// Update certificate in real-time as user types
document.getElementById('businessInput').addEventListener('input', function () {
  const businessName = this.value.trim() || "Your Business Name";
  document.getElementById('businessName').textContent = businessName;
});

// Function to generate and download PDF
function downloadPDF() {
  const element = document.getElementById('certificateContainer');

  const opt = {
    margin:       0,
    filename:     'business-certificate.pdf',
    image:        { type: 'jpeg', quality: 1 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'px', format: [1123, 794], orientation: 'landscape' }
  };

  html2pdf().set(opt).from(element).save();
}
