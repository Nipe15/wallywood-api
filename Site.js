async function getRandomposters() {
    const { data, error } = await supabase
        .from('posters')
        .select('*')
        .limit(4);

    if (error) {
        console.error("Error fetching random songs:", error);
    } else {
        console.log("Random songs:", data);
    }

    
    const posterContainer = document.getElementById('poster-container');
    data.forEach(song => {

        const posterDiv = document.createElement('div');
        posterDiv.classList.add('poster');


        posterDiv.innerHTML = `
            <p>${poster.title} -  ${poster.artists.name}</p>
        `;

        posterContainer.appendChild(posterDiv);
    });
    if (data.length === 0) {
        console.log("No songs found.");
        return; 
    }
}


getRandomposters();