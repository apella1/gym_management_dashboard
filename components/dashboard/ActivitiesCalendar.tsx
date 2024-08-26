"use client";

import { useState } from "react";
import { Calendar } from "../ui/calendar";

export default function ActivitiesCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="self-end"
      />
    </div>
  );
}
