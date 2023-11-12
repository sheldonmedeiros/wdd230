document.addEventListener("DOMContentLoaded", function () {
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => displayMembers(data.members))
        .catch(error => console.error("Error fetching members:", error));
});

function displayMembers(members) {
    const membersContainer = document.getElementById("members-container");

    // Iterate through members and display them
    members.forEach(member => {
        const memberElement = document.createElement("div");
        memberElement.classList.add("member-card"); // or "member-list-item" for list view

        // Customize the member card or list item content based on your design
        memberElement.innerHTML = `
            <h2>${member.name}</h2>
            <p>Address: ${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership Level: ${member.membershipLevel}</p>
            <p>${member.additionalInfo || ""}</p>
            <!-- Add more details as needed -->
        `;

        membersContainer.appendChild(memberElement);
    });
}