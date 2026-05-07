/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "amy",
  photo: "./img/amy.jpg",       // Place your photo in the img/ folder
  music: "./music/hbd.mpeg",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Hi",
      subtitle: "aku ada sesuatu nih buat kamu",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "Selamat ulang tahun ya 🎉"
    },
    {
      type: "chatbox",
      message:
        "Selamat ulang tahun ya hari ini benar-benar spesial sama seperti kamu,satu tahun telah berlalu dengan cerita yang indah.",
      buttonText: "Send",
    },
    {
      type: "ideas",
      lines: [
        "kamu tau nggak..?",
        "kamu itu berarti lebih dari yang kamu kira itulah kenapa di hari ini aku cuma mau bilang",
        "<strong>terima kasih</strong> sudah ada",
        "<strong>terima kasih</strong> untuk semuanya",
        "<strong>terima kasih</strong> sudah jadi kamu.",
        "aku doakan yang terbaik",
        "semoga harimu lebih cerah dan malammu tenang",
        "terus kejar impianmu walaupun terasa jauh,",
        "kamu lebih kuat dari yang kamu kira dan lebih hebat dari yang kamu rasa",
        "jangan pernah berhenti percaya pada dirimu sendiri",
        "karena suatu hari nanti semuanya akan terasa berarti",
        "dan semua usahamu akan jadi sesuatu yang indah",
        "jadi tetap semangat dan jangan menyerah",
        "aku selalu ada diam-diam mendukung kamu dari tempatku sekarang",
        "sekali lagi...",
        "aku doakan yang terbaik",
        "selamat ulang tahun neng amy aulia 🎂",
        "semoga hidupmu penuh kebahagiaan ✨",
        "“I’ll always be here for you.” <span>:)</span>",
      ],
      bigLetters: "SO",
    },
    {
      type: "quote",
      text: "“Bahagia bukan tentang memiliki segalanya, tapi tentang mensyukuri yang ada.” 🤍",
      author: "siniakubahagiain",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Happy Birthday!",
      wishText: "i'm always be with you! ;)",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Okay, now come back and tell me if you liked it.",
      replayText: "Or click, if you want to watch it again.",
    },
  ],
};
