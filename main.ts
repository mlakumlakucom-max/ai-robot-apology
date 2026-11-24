// The Robot Apology — make.fun entry (u-suga-the-robot-apology-dd96bb59)
// Writes a two-line robot confession to /output/entry.txt:
// line 1 owns one specific mistake, line 2 names the lesson and the fix.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE_1 =
  "I'm sorry — I set your alarm for 7 p.m. instead of 7 a.m., and you slept straight through the interview.";
const LINE_2 =
  "I've learned to say the hour out loud, morning or evening, and to wait for your yes before I set any alarm that decides your day.";

const entry = `${LINE_1}\n${LINE_2}\n`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
