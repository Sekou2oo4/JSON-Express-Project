document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('load-btn');
  const result = document.getElementById('result');

  button.addEventListener('click', async () => {
    try {
      const response = await fetch('/api/data');
      const data = await response.json();

      result.innerHTML = '';

      data.forEach(book => {
        const div = document.createElement('div');
        div.innerHTML = `
          <h3>${book.title}</h3>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Year:</strong> ${book.year}</p>
        `;
        result.appendChild(div);
      });
    } catch (err) {
      console.error(err);
      result.textContent = 'Error loading books.';
    }
  });
});
