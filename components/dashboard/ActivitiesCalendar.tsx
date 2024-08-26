"use client";

import { useState } from "react";
import { Calendar } from "../ui/calendar";

export default function ActivitiesCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-base font-semibold">Calendar</h2>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className=""
      />
    </div>
  );
}
