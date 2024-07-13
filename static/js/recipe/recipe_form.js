document.addEventListener('DOMContentLoaded', function() {
    const addIngredient = document.getElementById('add-ingredient');
    const ingredientsContainer = document.getElementById('ingredients-container');
    const addInstruction = document.getElementById('add-instruction');
    const instructionsContainer = document.getElementById('instructions-container');

    addIngredient.addEventListener('click', function() {
        const newIngredient = document.createElement('div');
        newIngredient.className = 'ingredient-item';
        newIngredient.innerHTML = `
            <input type="text" name="ingredients[]" required>
            <button type="button" class="remove-ingredient">삭제</button>
        `;
        ingredientsContainer.appendChild(newIngredient);
    });

    addInstruction.addEventListener('click', function() {
        const newInstruction = document.createElement('div');
        newInstruction.className = 'instruction-item';
        newInstruction.innerHTML = `
            <textarea name="instructions[]" required></textarea>
            <button type="button" class="remove-instruction">삭제</button>
        `;
        instructionsContainer.appendChild(newInstruction);
    });

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-ingredient')) {
            e.target.closest('.ingredient-item').remove();
        }
        if (e.target.classList.contains('remove-instruction')) {
            e.target.closest('.instruction-item').remove();
        }
    });
});

console.log('Recipe form script loaded');