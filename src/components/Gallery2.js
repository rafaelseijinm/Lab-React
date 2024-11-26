import React from "react";

function Gallery() {
  // Links das imagens (substitua pelas URLs reais das imagens)
  const images = [
    { src: "https://upload.wikimedia.org/wikipedia/pt/7/7c/Dark_Souls_1_capa.png", alt: "Dark Souls 1" },
    { src: "https://upload.wikimedia.org/wikipedia/pt/thumb/2/22/Dark_Souls_2_capa.png/270px-Dark_Souls_2_capa.png", alt: "Dark Souls 2" },
    { src: "https://upload.wikimedia.org/wikipedia/en/b/bb/Dark_souls_3_cover_art.jpg", alt: "Dark Souls 3" },
  ];

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>Dark Souls Gallery</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {images.map((img, index) => (
          <div key={index} style={{ maxWidth: "200px", textAlign: "center" }}>
            <img
              src={img.src}
              alt={img.alt}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
            <p style={{ marginTop: "10px", fontWeight: "bold" }}>{img.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
