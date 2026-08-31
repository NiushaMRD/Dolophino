"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Plus,
  Trash2,
  X,
} from "lucide-react";

import {
  addReservation,
  deleteReservation,
  getReservations,
} from "@/lib/storage";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekDays = ["M", "T", "W", "T", "F", "S", "S"];

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Japanese",
  "Chinese",
];

const sessionTypes = [
  "Live lesson",
  "Self study",
  "Practice",
  "Speaking",
];

function getDateKey(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(
    day
  ).padStart(2, "0")}`;
}

function formatDate(dateString) {
  const date = new Date(`${dateString}T12:00:00`);

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function ReservationCalendar() {
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState(today.getDate());

  const [reservations, setReservations] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    title: "",
    language: "English",
    type: "Self study",
    time: "18:00",
    duration: "30",
  });

  useEffect(() => {
    setReservations(getReservations());
  }, []);

  const selectedDate = useMemo(
    () => getDateKey(year, month, selectedDay),
    [year, month, selectedDay]
  );

  const selectedReservations = useMemo(
    () =>
      reservations.filter(
        (reservation) => reservation.date === selectedDate
      ),
    [reservations, selectedDate]
  );

  const days = useMemo(() => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const firstDay = new Date(year, month, 1).getDay();

    const mondayOffset =
      firstDay === 0 ? 6 : firstDay - 1;

    const result = [];

    for (let index = 0; index < mondayOffset; index++) {
      result.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      result.push(day);
    }

    return result;
  }, [month, year]);

  const hasReservation = (day) => {
    if (!day) return false;

    const date = getDateKey(year, month, day);

    return reservations.some(
      (reservation) => reservation.date === date
    );
  };

  const previousMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((current) => current - 1);
    } else {
      setMonth((current) => current - 1);
    }

    setSelectedDay(1);
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((current) => current + 1);
    } else {
      setMonth((current) => current + 1);
    }

    setSelectedDay(1);
  };

  const openReservationForm = () => {
    setForm({
      title: "",
      language: "English",
      type: "Self study",
      time: "18:00",
      duration: "30",
    });

    setShowForm(true);
  };

  const createReservation = (event) => {
    event.preventDefault();

    if (!form.title.trim()) {
      return;
    }

    const reservation = addReservation({
      date: selectedDate,
      time: form.time,
      title: form.title.trim(),
      language: form.language,
      type: form.type,
      duration: Number(form.duration),
    });

    setReservations((current) => [
      ...current,
      reservation,
    ]);

    setShowForm(false);
  };

  const removeReservation = (id) => {
    deleteReservation(id);

    setReservations((current) =>
      current.filter(
        (reservation) => reservation.id !== id
      )
    );
  };

  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        {/* Calendar */}
        <div className="rounded-3xl border border-[#E5E7EB] bg-white p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-black text-[#24343A]">
                {monthNames[month]} {year}
              </h2>

              <p className="mt-1 text-[10px] font-semibold text-[#52636A]">
                Select a day to view or create a learning session.
              </p>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={previousMonth}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E9F9F4] text-[#24343A] transition hover:bg-[#DDF3EC]"
                aria-label="Previous month"
              >
                <ChevronLeft size={17} />
              </button>

              <button
                type="button"
                onClick={nextMonth}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E9F9F4] text-[#24343A] transition hover:bg-[#DDF3EC]"
                aria-label="Next month"
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-7 gap-1.5 sm:gap-2">
            {weekDays.map((day, index) => (
              <span
                key={`${day}-${index}`}
                className="py-2 text-center text-[9px] font-black text-[#4AA991]"
              >
                {day}
              </span>
            ))}

            {days.map((day, index) =>
              day ? (
                <button
                  key={`${year}-${month}-${day}`}
                  type="button"
                  onClick={() => setSelectedDay(day)}
                  className={`relative flex aspect-square items-center justify-center rounded-xl text-xs font-black transition ${
                    selectedDay === day
                      ? "bg-[#FF6F91] text-white shadow-md"
                      : "text-[#24343A] hover:bg-[#FFF0F4]"
                  }`}
                >
                  {day}

                  {hasReservation(day) && (
                    <span
                      className={`absolute bottom-1 h-1.5 w-1.5 rounded-full ${
                        selectedDay === day
                          ? "bg-white"
                          : "bg-[#7BC9B6]"
                      }`}
                    />
                  )}
                </button>
              ) : (
                <div key={`empty-${index}`} />
              )
            )}
          </div>
        </div>

        {/* Selected Day */}
        <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-[#4AA991]">
                Selected Day
              </p>

              <h2 className="mt-2 text-xl font-black text-[#24343A]">
                {formatDate(selectedDate)}
              </h2>

              <p className="mt-1 text-[10px] font-semibold text-[#52636A]">
                {selectedReservations.length} scheduled session
                {selectedReservations.length === 1 ? "" : "s"}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E9F9F4] text-[#4AA991]">
              <CalendarDays size={19} />
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {selectedReservations.length > 0 ? (
              selectedReservations.map((reservation) => (
                <div
                  key={reservation.id}
                  className="rounded-2xl bg-[#F4FBF8] p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[9px] font-black text-[#FF6F91]">
                        {reservation.time}
                      </p>

                      <h3 className="mt-1 text-xs font-black text-[#24343A]">
                        {reservation.title}
                      </h3>

                      <p className="mt-1 text-[9px] font-bold text-[#52636A]">
                        {reservation.language} •{" "}
                        {reservation.type}
                      </p>

                      <div className="mt-2 flex items-center gap-1 text-[9px] font-bold text-[#7A898E]">
                        <Clock3 size={11} />
                        {reservation.duration} min
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        removeReservation(reservation.id)
                      }
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#8A969A] transition hover:bg-[#FFF0F4] hover:text-[#FF6F91]"
                      aria-label="Delete reservation"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-[#D5E4E1] bg-[#FAFCFC] p-5 text-center">
                <CalendarDays
                  size={25}
                  className="mx-auto text-[#B8C5C8]"
                />

                <p className="mt-3 text-xs font-black text-[#24343A]">
                  No sessions scheduled
                </p>

                <p className="mt-1 text-[9px] font-semibold leading-5 text-[#52636A]">
                  Add a learning session for this day.
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={openReservationForm}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6F91] py-3 text-xs font-black text-white transition hover:bg-[#E9577B]"
            >
              <Plus size={15} />
              Add Learning Session
            </button>
          </div>
        </div>
      </div>

      {/* Reservation Modal */}
      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#24343A]/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-wider text-[#4AA991]">
                  NEW RESERVATION
                </p>

                <h2 className="mt-2 text-2xl font-black text-[#24343A]">
                  Schedule a Session
                </h2>

                <p className="mt-2 text-xs font-semibold text-[#52636A]">
                  {formatDate(selectedDate)}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F4F7F7] text-[#52636A] hover:bg-[#FFF0F4] hover:text-[#FF6F91]"
              >
                <X size={17} />
              </button>
            </div>

            <form
              onSubmit={createReservation}
              className="mt-7 space-y-4"
            >
              <div>
                <label className="mb-2 block text-[9px] font-black uppercase tracking-wider text-[#4AA991]">
                  Session Title
                </label>

                <input
                  value={form.title}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      title: event.target.value,
                    }))
                  }
                  placeholder="e.g. English Conversation"
                  className="w-full rounded-xl border border-[#E0E8EA] bg-[#F8FAFA] px-4 py-3 text-xs font-semibold text-[#24343A] outline-none focus:border-[#7BC9B6]"
                  autoFocus
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[9px] font-black uppercase tracking-wider text-[#4AA991]">
                    Language
                  </label>

                  <select
                    value={form.language}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        language: event.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-[#E0E8EA] bg-[#F8FAFA] px-4 py-3 text-xs font-semibold text-[#24343A] outline-none focus:border-[#7BC9B6]"
                  >
                    {languages.map((language) => (
                      <option key={language}>
                        {language}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[9px] font-black uppercase tracking-wider text-[#4AA991]">
                    Session Type
                  </label>

                  <select
                    value={form.type}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        type: event.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-[#E0E8EA] bg-[#F8FAFA] px-4 py-3 text-xs font-semibold text-[#24343A] outline-none focus:border-[#7BC9B6]"
                  >
                    {sessionTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[9px] font-black uppercase tracking-wider text-[#4AA991]">
                    Time
                  </label>

                  <input
                    type="time"
                    value={form.time}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        time: event.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-[#E0E8EA] bg-[#F8FAFA] px-4 py-3 text-xs font-semibold text-[#24343A] outline-none focus:border-[#7BC9B6]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[9px] font-black uppercase tracking-wider text-[#4AA991]">
                    Duration
                  </label>

                  <select
                    value={form.duration}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        duration: event.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-[#E0E8EA] bg-[#F8FAFA] px-4 py-3 text-xs font-semibold text-[#24343A] outline-none focus:border-[#7BC9B6]"
                  >
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">60 minutes</option>
                    <option value="90">90 minutes</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-3 sm:flex-row">
                <button
                  type="submit"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#7BC9B6] py-3.5 text-xs font-black text-white transition hover:bg-[#63B8A2]"
                >
                  <Check size={15} />
                  Save Reservation
                </button>

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-xl bg-[#F0F3F4] px-5 py-3.5 text-xs font-black text-[#52636A]"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}