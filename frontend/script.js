async function addNote() {
  const input = document.getElementById("noteInput");
  const note = input.value;
  await fetch('http://localhost:3000/api/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: note })
  });
  input.value = "";
  loadNotes();
}

async function loadNotes() {
  const res = await fetch('http://localhost:3000/api/notes');
  const notes = await res.json();
  const list = document.getElementById("notesList");
  list.innerHTML = "";
  notes.forEach(n => {
    const li = document.createElement("li");
    li.textContent = n.content;
    list.appendChild(li);
  });
}

loadNotes();