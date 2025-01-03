function updatePreview() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');

    const output = `
        <h2 class="text-2xl font-bold">${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <h3 class="text-xl mt-4">Skills</h3>
        <ul>${skills}</ul>
    `;

    document.getElementById('output').innerHTML = output;
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const previewContent = document.getElementById('output').innerHTML;

    doc.html(previewContent, {
        callback: function (doc) {
            doc.save("resume.pdf");
        },
        x: 10,
        y: 10
    });
}
