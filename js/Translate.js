async function translatePage() {


    const apiKey = 'AIzaSyBC7h4eqquz6LryHbGAGCgGk9svOdZI2mg';

    const targetLang = document.getElementById('language').value;





    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode: function (node) {
            return node.nodeValue.trim() !== '' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });





    const textNodes = [];
    while (walker.nextNode()) {
        textNodes.push(walker.currentNode);
    }



    for (const node of textNodes) {
        const originalText = node.nodeValue;




        const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                q: originalText,
                target: targetLang,
                format: 'text'
            })
        });

        const data = await response.json();
        node.nodeValue = data.data.translations[0].translatedText;
    }
}