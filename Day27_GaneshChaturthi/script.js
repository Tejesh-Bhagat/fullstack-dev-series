// ===== GANESH CHATURTHI 2025 - INTERACTIVE FEATURES =====

// ===== COUNTDOWN TIMER =====
const visarjanDate = new Date("2025-09-07T18:00:00").getTime()

function updateCountdown() {
  const now = new Date().getTime()
  const timeLeft = visarjanDate - now

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

  document.getElementById("days").textContent = days > 0 ? days : 0
  document.getElementById("hours").textContent = hours > 0 ? hours : 0
  document.getElementById("minutes").textContent = minutes > 0 ? minutes : 0
  document.getElementById("seconds").textContent = seconds > 0 ? seconds : 0

  if (timeLeft < 0) {
    document.getElementById("countdown-timer").innerHTML =
      '<div class="time-unit"><span class="time-number">🎉</span><span class="time-label">Ganesh Visarjan Day!</span></div>'
  }
}

// Update countdown every second
setInterval(updateCountdown, 1000)
updateCountdown()

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated")
    }
  })
}, observerOptions)

// Observe all elements with animate-on-scroll class
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
  observer.observe(el)
})

// ===== ENHANCED GALLERY INTERACTIONS =====
document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", function () {
    // Create celebration effect
    this.style.transform = "scale(1.08) rotate(1deg)"
    this.style.transition = "transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)"

    setTimeout(() => {
      this.style.transform = "scale(1.03) translateY(-5px)"
      this.style.transition = "transform 0.4s ease"
    }, 800)

    // Add sparkle effects
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        const sparkle = document.createElement("div")
        sparkle.innerHTML = ["✨", "🌟", "💫", "⭐", "🎆", "🎇"][Math.floor(Math.random() * 6)]
        sparkle.style.position = "absolute"
        sparkle.style.fontSize = "1.5rem"
        sparkle.style.pointerEvents = "none"
        sparkle.style.animation = "float 2s ease-out forwards"
        sparkle.style.left = Math.random() * 100 + "%"
        sparkle.style.top = Math.random() * 100 + "%"
        sparkle.style.zIndex = "10"
        this.appendChild(sparkle)

        setTimeout(() => sparkle.remove(), 2000)
      }, i * 150)
    }
  })
})

// ===== TEMPLE CARD INTERACTIONS =====
document.querySelectorAll(".temple-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-15px) scale(1.02)"
    this.style.boxShadow = "0 40px 80px rgba(255, 107, 53, 0.3)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)"
    this.style.boxShadow = "0 30px 60px rgba(255, 107, 53, 0.2)"
  })
})

// ===== MODERN CARD INTERACTIONS =====
document.querySelectorAll(".modern-card").forEach((card) => {
  card.addEventListener("click", function () {
    // Add ripple effect
    const ripple = document.createElement("div")
    ripple.style.position = "absolute"
    ripple.style.borderRadius = "50%"
    ripple.style.background = "rgba(255, 107, 53, 0.3)"
    ripple.style.transform = "scale(0)"
    ripple.style.animation = "ripple 0.6s linear"
    ripple.style.left = "50%"
    ripple.style.top = "50%"
    ripple.style.width = "100px"
    ripple.style.height = "100px"
    ripple.style.marginLeft = "-50px"
    ripple.style.marginTop = "-50px"

    this.appendChild(ripple)
    setTimeout(() => ripple.remove(), 600)
  })
})

// ===== PRAYER SECTION INTERACTION =====
document.querySelector(".prayer-section").addEventListener("click", function () {
  // Create blessing effect
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const blessing = document.createElement("div")
      blessing.innerHTML = ["🙏", "🕉️", "🪔", "🌸"][Math.floor(Math.random() * 4)]
      blessing.style.position = "absolute"
      blessing.style.fontSize = "2rem"
      blessing.style.pointerEvents = "none"
      blessing.style.animation = "float 3s ease-out forwards"
      blessing.style.left = Math.random() * 100 + "%"
      blessing.style.top = Math.random() * 100 + "%"
      blessing.style.zIndex = "10"
      this.appendChild(blessing)

      setTimeout(() => blessing.remove(), 3000)
    }, i * 200)
  }
})

// ===== PERFORMANCE OPTIMIZATION =====
// Lazy load images for better performance
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src || img.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  // Observe all images for lazy loading
  document.querySelectorAll("img").forEach((img) => {
    imageObserver.observe(img)
  })
}

// ===== SMOOTH SCROLLING FOR BETTER UX =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// ===== CONSOLE GREETING =====
console.log("🙏 Welcome to the Modern Ganesh Chaturthi 2025 Celebration!")
console.log("🎉 Experience the perfect blend of tradition and technology!")
console.log("✨ Ganpati Bappa Morya!")

// ===== KEYBOARD ACCESSIBILITY =====
document.addEventListener("keydown", (e) => {
  // Add keyboard navigation for gallery items
  if (e.key === "Enter" || e.key === " ") {
    if (e.target.classList.contains("gallery-item")) {
      e.preventDefault()
      e.target.click()
    }
  }
})

// ===== THEME DETECTION =====
// Detect user's preferred color scheme
if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  // Disable animations for users who prefer reduced motion
  document.documentElement.style.setProperty("--animation-duration", "0s")
}

// ===== FESTIVAL COUNTDOWN NOTIFICATIONS =====
function checkFestivalProximity() {
  const now = new Date().getTime()
  const timeLeft = visarjanDate - now
  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24))

  // Show special message when festival is very close
  if (daysLeft <= 1 && daysLeft > 0) {
    console.log("🎊 Ganesh Visarjan is tomorrow! Get ready for the grand celebration!")
  } else if (daysLeft === 0) {
    console.log("🎉 Today is Ganesh Visarjan! Ganpati Bappa Morya!")
  }
}

// Check festival proximity on load
checkFestivalProximity()
