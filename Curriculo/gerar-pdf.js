const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Carregar o arquivo HTML
    await page.goto(`file://${__dirname}/curriculo.html`, { waitUntil: 'load' });

    // Gerar PDF
    await page.pdf({
        path: 'curriculo.pdf',
        format: 'A4',
        printBackground: true,
        margin: {
            top: '20mm',
            bottom: '20mm',
            left: '10mm',
            right: '10mm',
        },
    });

    await browser.close();
    console.log('PDF criado com sucesso!');
})();
