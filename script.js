function cleartext() {
    document.getElementById('text-input').value = "";
    document.getElementById('translatedText').innerHTML = "";

}

function cleartranslation(){
  document.getElementById('translatedText').textcontent = "";
}


const handleTranslation = async () => {
    const text = document.getElementById('text-input').value;
    const url = 'https://api.funtranslations.com/translate/yoda.json';
    const params = new URLSearchParams({ text: text });
    
    try {
      const response = await fetch(`${url}?${params}`, {
        method: 'GET',
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();

      document.getElementById('translatedText').textContent = data.contents.translated;
    } catch (error) {
      console.error('Error fetching translation:', error);
      document.getElementById('translatedText').textContent = 'Translation failed, try again!';
    }
  };

document.getElementById('translateButton').addEventListener('click', handleTranslation);

document.getElementById('clearButton').addEventListener('click', cleartext);
