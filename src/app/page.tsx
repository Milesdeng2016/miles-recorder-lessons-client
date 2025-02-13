"use client";
import Header from "@/components/Header";
import List from "@/components/List";
import { useVad } from "../vad/use-vad";
import { useWhisper } from "@/whisper/use-whisper";
import { useState } from "react";
export default function Home() {
  const [transcription, setTranscription] = useState<String[]>([]);
  const { localRun } = useWhisper();
  const { recording, processing } = useVad({
    onSpeechEnd: async ({ float32Array }) => {
      let value = await localRun(float32Array);
      if (value.trim()) {
        setTranscription((pre) => [...pre, value]);
      }
    },
  });
  return (
    <div className="w-[100vw] h-[100vh] p-4 bg-black">
      <div className="rounded-2xl h-full ring-1 ring-zinc-800 px-8 py-8 flex flex-col">
        <Header recording={recording} />
        <List transcription={transcription} />
      </div>
    </div>
  );
}
