// lib/storage.js

const STORAGE_KEY = "dolophino_user";
const SETTINGS_KEY = "dolophino_settings";
const MESSAGES_KEY = "dolophino_messages";
const TEST_KEY = "dolophino_placement_test";
const RESERVATIONS_KEY = "dolophino_reservations";

const defaultUser = {
  isLoggedIn: true,
  firstName: "Sofia",
  lastName: "Morgan",
  email: "sofia@example.com",
  level: "B1 — Intermediate",
  learningLanguages: ["English", "Spanish", "French"],
  avatar: "",
};

const defaultSettings = {
  emailNotifications: true,
  weeklyReminder: true,
  achievementNotifications: true,
  publicProfile: false,
  soundEffects: true,
  dailyGoal: true,
};

const defaultMessages = {
  "emma-wilson": [
    {
      id: 1,
      sender: "Emma Wilson",
      text: "Hey Sofia! Great work on your speaking exercise! 👏",
      time: "10:24 AM",
      mine: false,
    },
    {
      id: 2,
      sender: "Sofia Morgan",
      text: "Thank you! I’m trying to practice a little every day.",
      time: "10:27 AM",
      mine: true,
    },
    {
      id: 3,
      sender: "Emma Wilson",
      text: "That’s the best way to improve. Keep going! 🌟",
      time: "10:29 AM",
      mine: false,
    },
  ],

  "dolophino-team": [
    {
      id: 1,
      sender: "Dolophino Team",
      text: "Welcome to Dolophino! Your new learning journey starts here. 🎉",
      time: "Yesterday",
      mine: false,
    },
  ],

  "james-carter": [
    {
      id: 1,
      sender: "James Carter",
      text: "Hey Sofia! Want to practice English conversation tomorrow?",
      time: "Yesterday",
      mine: false,
    },
  ],
};

function isBrowser() {
  return typeof window !== "undefined";
}

function readStorage(key, fallback) {
  if (!isBrowser()) {
    return fallback;
  }

  try {
    const value = localStorage.getItem(key);

    if (!value) {
      return fallback;
    }

    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  if (!isBrowser()) {
    return;
  }

  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore localStorage errors.
  }
}

/* =========================================================
   USER
========================================================= */

export function getUser() {
  return readStorage(STORAGE_KEY, defaultUser);
}

export function saveUser(user) {
  writeStorage(STORAGE_KEY, {
    ...user,
    isLoggedIn: true,
  });
}

export function updateUser(updates) {
  const currentUser = getUser();

  const updatedUser = {
    ...currentUser,
    ...updates,
    isLoggedIn: true,
  };

  saveUser(updatedUser);

  return updatedUser;
}

export function logoutUser() {
  if (!isBrowser()) {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
}

/* =========================================================
   SETTINGS
========================================================= */

export function getSettings() {
  return readStorage(SETTINGS_KEY, defaultSettings);
}

export function saveSettings(settings) {
  writeStorage(SETTINGS_KEY, settings);
}

export function updateSetting(key, value) {
  const currentSettings = getSettings();

  const updatedSettings = {
    ...currentSettings,
    [key]: value,
  };

  saveSettings(updatedSettings);

  return updatedSettings;
}

/* =========================================================
   MESSAGES
========================================================= */

export function getMessages() {
  return readStorage(MESSAGES_KEY, defaultMessages);
}

export function saveMessages(messages) {
  writeStorage(MESSAGES_KEY, messages);
}

export function getConversation(contactId) {
  const messages = getMessages();

  return messages[contactId] || [];
}

export function sendMessage(contactId, text, user = null) {
  const cleanText = String(text || "").trim();

  if (!cleanText) {
    return null;
  }

  const messages = getMessages();
  const conversation = messages[contactId] || [];

  const senderName = user
    ? `${user.firstName || ""} ${user.lastName || ""}`.trim()
    : "Sofia Morgan";

  const newMessage = {
    id: Date.now(),
    sender: senderName || "Sofia Morgan",
    text: cleanText,
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    mine: true,
  };

  const updatedMessages = {
    ...messages,
    [contactId]: [...conversation, newMessage],
  };

  saveMessages(updatedMessages);

  return newMessage;
}

/* =========================================================
   PLACEMENT TEST
========================================================= */

export function getPlacementTest() {
  return readStorage(TEST_KEY, null);
}

export function savePlacementTest(testData) {
  writeStorage(TEST_KEY, testData);
}

/*
  Backward-compatible alias.
*/
export function savePlacementBooking(testData) {
  savePlacementTest(testData);
}

export function clearPlacementTest() {
  if (!isBrowser()) {
    return;
  }

  localStorage.removeItem(TEST_KEY);
}

/* =========================================================
   RESERVATIONS
========================================================= */

export function getReservations() {
  return readStorage(RESERVATIONS_KEY, []);
}

export function saveReservations(reservations) {
  writeStorage(RESERVATIONS_KEY, reservations);
}

export function addReservation(reservation) {
  const reservations = getReservations();

  const newReservation = {
    id: reservation.id || `reservation-${Date.now()}`,
    date: reservation.date,
    time: reservation.time,
    title: reservation.title || "Learning Session",
    language: reservation.language || "English",
    type: reservation.type || "Self study",
    duration: reservation.duration || 30,
    status: reservation.status || "scheduled",
    createdAt: reservation.createdAt || new Date().toISOString(),
  };

  const updatedReservations = [
    ...reservations,
    newReservation,
  ];

  saveReservations(updatedReservations);

  return newReservation;
}

export function updateReservation(id, updates) {
  const reservations = getReservations();

  const updatedReservations = reservations.map((reservation) =>
    reservation.id === id
      ? {
          ...reservation,
          ...updates,
        }
      : reservation
  );

  saveReservations(updatedReservations);

  return updatedReservations.find(
    (reservation) => reservation.id === id
  );
}

export function deleteReservation(id) {
  const reservations = getReservations();

  const updatedReservations = reservations.filter(
    (reservation) => reservation.id !== id
  );

  saveReservations(updatedReservations);

  return updatedReservations;
}

export function getReservationsForDate(date) {
  const reservations = getReservations();

  return reservations.filter(
    (reservation) => reservation.date === date
  );
}

export function clearReservations() {
  if (!isBrowser()) {
    return;
  }

  localStorage.removeItem(RESERVATIONS_KEY);
}

/* =========================================================
   RESET
========================================================= */

export function resetDolophinoData() {
  if (!isBrowser()) {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(SETTINGS_KEY);
  localStorage.removeItem(MESSAGES_KEY);
  localStorage.removeItem(TEST_KEY);
  localStorage.removeItem(RESERVATIONS_KEY);
}