const createTopic = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#topic').value.trim();
  const description = document.querySelector('#topic-description').value.trim();
  

  const newTopic = await fetch('/api/new_topic', {
    method: 'POST',
    body: JSON.stringify({title, description}),
    headers: { 'Content-Type': 'application/json' },
  })
    
  if(newTopic.ok){
    alert("You have successfully created a new topic! ");
    document.location.replace('/');
  }

}

document
  .querySelector('.topic-form')
  .addEventListener('submit', createTopic);
