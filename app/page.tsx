
export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#101014",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "40px 20px",
      textAlign: "center"
    }}>
      <h1 style={{
        fontSize: "42px",
        color: "#d8b46a"
      }}>
        GiftZone
      </h1>

      <p style={{ color: "#cccccc" }}>
        The perfect gift, just a click away.
      </p>

      <h2 style={{ marginTop: "70px" }}>
        Discover Digital Gift Cards
      </h2>

      <p>
        Shop your favourite digital gift cards
        from anywhere in the world.
      </p>

      <button style={{
        background: "#d8b46a",
        color: "#101014",
        border: "none",
        padding: "15px 30px",
        borderRadius: "8px",
        fontWeight: "bold",
        marginTop: "20px"
      }}>
        Explore Gift Cards
      </button>

      <p style={{
        marginTop: "100px",
        color: "#888"
      }}>
        © 2026 GiftZone. All rights reserved.
      </p>
    </main>
  );
}
