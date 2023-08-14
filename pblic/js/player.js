
const playerFormHandler = async (event) => {
  event.preventDefault();

const gifContainer = document.querySelector(".gif-container");


  const team = [];

  // Build an array of all the selected team members
  document.querySelectorAll('.team-member:checked').forEach(item => team.push(item.value));

  //Check for duplicates
  const players = await debug.players.find({
    name:{ $in:team },
    jersey_number: { $in:team }
  });

  if (players.length > 0) {
    //There are duplicate players
    alert('There are duplicate players in your team.  Please remove any duplicates before submitting.');
  }else{
    //no duplicate players
    await debug.teams.insertOne({ team });
  }
  }

  const response = await fetch('/api/teams', {
    method: 'POST',
    body: JSON.stringify({ team }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    gifContainer.style.zIndex = 50;
    gifContainer.style.opacity = "1";

      setTimeout(function () {
        gifContainer.style.display = "none";
           
    document.location.reload(true);
    document.location.replace('/team');
   }, 6000);
    

    
  } else {
      alert(response.statusText);
  }



document
  .querySelector('.player-form')
  .addEventListener('submit', playerFormHandler);
