document.addEventListener("DOMContentLoaded", function() {
    let tools = [
        {
            name: "ChatGPT",
            description: "State-of-the-art text generation model.",
            link: "https://chat.openai.com"
        },
        {
            name: "Tool B",
            description: "Another great AI tool description.",
            link: "#"
        },
        // Add more tools as needed
    ];

    let toolList = document.getElementById("AI Tool Belts");
    
    for(let tool of tools) {
        let toolDiv = document.createElement("div");
        toolDiv.className = "tool";

        toolDiv.innerHTML = `
            <h2><a href="${tool.link}" target="_blank">${tool.name}</a></h2>
            <p>${tool.description}</p>
        `;

        toolList.appendChild(toolDiv);
    }
});