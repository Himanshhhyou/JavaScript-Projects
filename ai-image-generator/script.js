const themeToggle = document.querySelector('.theme-toggle');
const promptInput = document.querySelector('.prompt-input');
const promptBtn = document.querySelector('.prompt-btn');
const promptForm = document.querySelector('.prompt-form');
const modelSelect = document.querySelector('#model-select');
const countSelect = document.querySelector('#count-select');
const ratioSelect = document.querySelector('#ratio-select');
const gridGallery = document.querySelector('.gallery-grid');

const examplePrompts = [
  "A magic forest with glowing plants and fairy homes among giant mushrooms",
  "An old steampunk airship floating through golden clouds at sunset",
  "A future Mars colony with glass domes and gardens against red mountains",
  "A dragon sleeping on gold coins in a crystal cave",
  "An underwater kingdom with merpeople and glowing coral buildings",
  "A floating island with waterfalls pouring into clouds below",
  "A witch's cottage in fall with magic herbs in the garden",
  "A robot painting in a sunny studio with art supplies around it",
  "A magical library with floating glowing books and spiral staircases",
  "A Japanese shrine during cherry blossom season with lanterns and misty mountains",
  "A cosmic beach with glowing sand and an aurora in the night sky",
  "A medieval marketplace with colorful tents and street performers",
  "A cyberpunk city with neon signs and flying cars at night",
  "A peaceful bamboo forest with a hidden ancient temple",
  "A giant turtle carrying a village on its back in the ocean",
];
// Load saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}
else{
    document.body.classList.remove('dark-theme');
}

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    const icon = themeToggle.querySelector('i');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
}

const generateImages = (model, count, ratio, prompt) => {
    const MODEL_URL = `https://api-inference.huggingface.co/models/${model}`;
    try{
    
    }catch
};

promptBtn.addEventListener('click', () => {
    const randomPrompt = examplePrompts[Math.floor(Math.random()*examplePrompts.length)];
    promptInput.value = randomPrompt;
}
)

const createImageCards = (model, count, ratio, prompt) => {
    gridGallery.innerHTML = '';
    for(let i=0; i<count; i++){
            gridGallery.innerHTML += `<div class="img-card loading" id="img-card-${i}" style="aspect-ratio: ${ratio};">
                        <div class="status-container">
                            <div class="spinner"></div>
                            <i class="fa-solid fa-triangle-exclamation"></i>
                            <p class="status-text">Generating...</p>
                        </div>
                        <img src="test.png" class="result-img">
                        </div>`
    }
}
generateImages(model, count, ratio, prompt);

const handleFormSubmit = (e)=>{
    e.preventDefault();
    const selectedModel = modelSelect.value;
    const imageCount = Number(countSelect.value) || 1;
    const aspectRatio = ratioSelect.value || "1/1";
    const promptText = promptInput.value.trim();
    createImageCards(selectedModel, imageCount, aspectRatio, promptText);
}
promptForm.addEventListener('submit', handleFormSubmit);
themeToggle.addEventListener('click', toggleTheme);