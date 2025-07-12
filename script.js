const businessInput = document.getElementById('businessName');
const certName = document.getElementById('cert-name');
const generateBtn = document.getElementById('generateBtn');

businessInput.addEventListener ('input', () => {
  certName.innerText = businessInput.value || "Your Business Name";
});

generateBtn.addEventListener ('click', () => {
    const element = document.getElementById('certificatePreview');

  const opt = {
    margin:       0,
    filename:     'certificate.pdf',
    image:        { type: 'jpeg', quality: 1 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'px', format: [1123, 794], orientation: 'landscape' }
};


html2pdf().set(opt).from(element).save();
})