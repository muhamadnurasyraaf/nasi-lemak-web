function loadPage(pageName) {
  const content = document.getElementById("content")

  switch (pageName) {
    case "intro":
      content.innerHTML = `
                <h2>Introduction & The Significance of Nasi Lemak</h2>
                <img src="nasi-lemak.jpg" alt="A plate of Nasi Lemak">
                <p>Nasi Lemak is often considered the national dish of Malaysia, beloved for its simple yet flavorful combination of coconut rice, sambal (spicy chili paste), hard-boiled egg, fried anchovies, and cucumber slices. It holds significant cultural value in Malaysia and neighboring countries.</p>
                <h3>Historical Context</h3>
                <p>Originating as a traditional Malay dish, Nasi Lemak has evolved from a humble breakfast or lunch for rural farmers into a dish that symbolizes the cultural melting pot of Malaysia. "Nasi" means rice, while "Lemak" refers to the rich, creamy texture from coconut milk.</p>
                <h3>Cultural Significance</h3>
                <p>Nasi Lemak holds deep cultural ties to Malay, Chinese, Indian, and indigenous traditions, making it a symbol of Malaysia's diverse heritage. It is enjoyed across all social classes and occasions, from everyday life to special celebrations.</p>
            `
      break
    case "story":
      content.innerHTML = `
                <h2>Story Behind Nasi Lemak</h2>
                <img src="nasi-lemak-history.jpg" alt="Traditional preparation of Nasi Lemak">
                <h3>Origins and Evolution</h3>
                <p>Historically, Nasi Lemak originated as a meal for farmers and laborers due to its inexpensive ingredients. The coconut rice provided energy, while sambal added flavor and preservation. Over time, it has been adapted with variations like fried chicken, beef rendang, or seafood.</p>
                <h3>The Dish's Role in Malaysian Culture</h3>
                <p>Nasi Lemak is a symbol of community and nationhood in Malaysia, eaten by people from all walks of life. It's comfort food, often linked to memories of family, home, and national pride.</p>
                <h3>Cultural Preservation</h3>
                <p>Nasi Lemak has gained global recognition, appearing in international food festivals, cooking shows, and documentaries. Local chefs continue to innovate while respecting its traditional roots.</p>
            `
      break
    case "creative-industry":
      content.innerHTML = `
                <h2>Nasi Lemak and the Creative Industry</h2>
                <img src="nasi-lemak-creative.jpg" alt="Modern presentation of Nasi Lemak">
                <h3>The Role of Culinary Heritage in the Creative Industry</h3>
                <p>Culinary traditions like Nasi Lemak contribute significantly to the creative industry by merging heritage with innovation. The culinary world's embrace of traditional dishes allows them to be elevated into the mainstream while preserving their essence.</p>
                <h3>Innovation in Culinary Practices</h3>
                <p>Chefs and culinary creatives have found new ways to innovate and present Nasi Lemak, adapting it with unique ingredients or serving it in contemporary presentations.</p>
                <h3>Visual and Experiential Aspects</h3>
                <p>The creative industry highlights Nasi Lemak through stunning food photography, advertisements, and social media trends. Many restaurants have redesigned Nasi Lemak to create more visually appealing versions.</p>
            `
      break
    case "preservation":
      content.innerHTML = `
                <h2>Preserving Nasi Lemak's Cultural Identity</h2>
                <img src="nasi-lemak-traditional.jpg" alt="Traditional Nasi Lemak preparation">
                <h3>Culinary Heritage and Preservation Efforts</h3>
                <p>Preserving Nasi Lemak involves keeping the recipe intact and ensuring traditional methods are passed down. Initiatives like cooking schools, documentaries, and culinary heritage programs focus on preserving its authentic form while adapting to modern trends.</p>
                <h3>Challenges in Preservation</h3>
                <p>One challenge in preserving Nasi Lemak is the risk of over-commercialization. As it gains global recognition, there's potential for its authenticity to be diluted. Finding a balance between tradition and global appeal is crucial.</p>
            `
      break
    case "innovation":
      content.innerHTML = `
                <h2>Innovations and Fusion with Modern Trends</h2>
                <img src="nasi-lemak-fusion.jpg" alt="Fusion Nasi Lemak dish">
                <h3>Fusion with Global Trends</h3>
                <p>Chefs experiment with plant-based ingredients, making vegan Nasi Lemak a popular option. Others incorporate international flavors like truffle oil or Korean kimchi, innovating while respecting the dish's integrity.</p>
                <h3>Role of Technology in Innovation</h3>
                <p>Food bloggers, social media influencers, and critics use platforms like Instagram and TikTok to showcase Nasi Lemak creatively. Food delivery platforms make the dish more accessible globally, spreading cultural heritage.</p>
            `
      break
    case "future":
      content.innerHTML = `
                <h2>The Future of Nasi Lemak in the Creative Industry</h2>
                <img src="nasi-lemak-future.jpg" alt="Futuristic presentation of Nasi Lemak">
                <h3>Cultural Impact on Global Cuisine</h3>
                <p>Nasi Lemak's influence on global cuisines is growing. It's becoming a point of cultural exchange, featured in food festivals, pop-up events, and culinary tours, bringing it to international attention.</p>
                <h3>Sustaining Cultural Identity through Innovation</h3>
                <p>The future of Nasi Lemak lies in adapting to changing tastes while preserving its cultural identity. The next generation of chefs, food innovators, and cultural custodians will play a key role in its continued significance.</p>
                <h3>Conclusion</h3>
                <p>Nasi Lemak exemplifies how culinary traditions can be preserved and innovated within the creative industry. It reflects culture, community, and creativity, thriving as both a symbol of cultural heritage and a beloved dish in the evolving global food scene.</p>
            `
      break
    default:
      content.innerHTML = "<p>Please select a page from the menu.</p>"
  }
}

// Load the intro page by default
window.onload = () => {
  loadPage("intro")
}

