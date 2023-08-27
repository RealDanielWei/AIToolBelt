let categories = [
    {
        categoryName: "Chat Bot",
        tools: [
            {
                name: "ChatGPT",
                description: "State-of-the-art text generation model.",
                link: "https://chat.openai.com",
                //icon: "path_to_chatgpt_icon.png"
            },
        ]
    },
    {
        categoryName: "Text to Speech",
        tools: [
            {
                name: "Tool B",
                description: "AI tool for image processing.",
                link: "#",
                //icon: "path_to_tool_B_icon.png"
            },
        ]
    },
    // ... other categories
];

document.addEventListener("DOMContentLoaded", function() {
    let toolList = document.getElementById("AI Tool Belts");

    for(let category of categories) {
        // Create category title
        let categoryTitle = document.createElement("h2");
        categoryTitle.innerText = category.categoryName;
        toolList.appendChild(categoryTitle);

        // Loop through tools in the category
        for(let tool of category.tools) {
            let toolDiv = document.createElement("div");
            toolDiv.className = "tool";

            toolDiv.innerHTML = `
                <!-- <img src="${tool.icon}" alt="${tool.name} icon" class="tool-icon">  -->
                <h3><a href="${tool.link}" target="_blank">${tool.name}</a></h3>
                <p>${tool.description}</p>
            `;

            toolList.appendChild(toolDiv);
        }
    }
});