const form = document.getElementById('certificate-form');
const businessInput = document.getElementById('business-name');
const businessText = document.getElementById('business-text');
const preview = document.getElementById('certificate-preview');

businessInput.addEventListener('input', () => {
  businessText.textContent = businessInput.value || 'Your Business Name';
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // PDF settings
  const opt = {
    margin: 0,
    filename: 'business_certificate.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: {
      scale: 2, // High resolution
      useCORS: true
    },
    jsPDF: {
      unit: 'px',
      format: [1123, 794],
      orientation: 'landscape'
    }
  };

  html2pdf().set(opt).from(preview).save();
});
