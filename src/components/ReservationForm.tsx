"use client";

import { useState } from "react";
import { CalendarDays, Clock, Users, MessageCircle } from "lucide-react";
import { units, waLink } from "@/lib/site";

/*
 * Formulário de reserva sem backend: monta a mensagem e abre o WhatsApp
 * da unidade escolhida com tudo preenchido. Menos fricção, confirmação
 * humana em minutos — o fluxo real da casa, só que sem digitação.
 */
export function ReservationForm() {
  const [unitId, setUnitId] = useState(units[0].id);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("2");
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");

  const unit = units.find((u) => u.id === unitId) ?? units[0];

  const message = [
    `Olá! Quero reservar uma mesa na unidade ${unit.shortName}.`,
    name && `Nome: ${name}`,
    date && `Data: ${date.split("-").reverse().join("/")}`,
    time && `Horário: ${time}`,
    `Pessoas: ${people}`,
    notes && `Observações: ${notes}`,
  ]
    .filter(Boolean)
    .join("\n");

  const inputClass =
    "w-full rounded-lg border border-line bg-obsidian px-4 py-3.5 text-sand placeholder:text-sand-dim/60 focus:border-gold focus:outline-none [color-scheme:dark]";

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(waLink(message, unit.whatsapp), "_blank", "noopener");
      }}
    >
      <fieldset>
        <legend className="eyebrow mb-4">Unidade</legend>
        <div className="grid grid-cols-2 gap-3">
          {units.map((u) => (
            <label
              key={u.id}
              className={`flex cursor-pointer items-center justify-center rounded-lg border px-4 py-3.5 text-sm font-semibold transition-colors ${
                unitId === u.id
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-line text-sand-dim hover:border-sand/40"
              }`}
            >
              <input
                type="radio"
                name="unidade"
                value={u.id}
                checked={unitId === u.id}
                onChange={() => setUnitId(u.id)}
                className="sr-only"
              />
              {u.shortName}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="eyebrow mb-2 block">
            Seu nome
          </label>
          <input
            id="nome"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Como devemos te chamar?"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="pessoas" className="eyebrow mb-2 block">
            <Users aria-hidden className="mr-1.5 inline h-3.5 w-3.5" />
            Pessoas
          </label>
          <select
            id="pessoas"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className={inputClass}
          >
            {["2", "3", "4", "5", "6", "7", "8"].map((n) => (
              <option key={n} value={n}>
                {n} pessoas
              </option>
            ))}
            <option value="mais de 8">Mais de 8 (grupo)</option>
          </select>
        </div>
        <div>
          <label htmlFor="data" className="eyebrow mb-2 block">
            <CalendarDays aria-hidden className="mr-1.5 inline h-3.5 w-3.5" />
            Data
          </label>
          <input
            id="data"
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="horario" className="eyebrow mb-2 block">
            <Clock aria-hidden className="mr-1.5 inline h-3.5 w-3.5" />
            Horário
          </label>
          <input
            id="horario"
            type="time"
            required
            min="11:30"
            max="23:30"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="obs" className="eyebrow mb-2 block">
          Observações <span className="normal-case">(opcional)</span>
        </label>
        <textarea
          id="obs"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Aniversário? Cadeirão? Restrição alimentar? Conta pra gente."
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-8 py-4 text-base font-semibold text-sand transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember"
      >
        <MessageCircle aria-hidden className="h-5 w-5" />
        Confirmar pelo WhatsApp
      </button>
      <p className="text-center text-xs leading-relaxed text-sand-dim">
        Você será direcionado ao WhatsApp da unidade {unit.shortName} com a
        mensagem pronta. Resposta em poucos minutos no horário de funcionamento.
      </p>
    </form>
  );
}
