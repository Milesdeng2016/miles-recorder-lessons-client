import { Prefetch } from "../prefetch";

interface HeaderProps {
  recording: Boolean;
}

export default function Header({ recording }: HeaderProps) {
  return (
    <div className="w-full flex items-center justify-between pb-4">
      <div className="flex items-center text-2xl font-semibold leading-none tracking-tight text-white">
        Miles's Recorder
      </div>
      <div className="flex gap-2 items-center">
        <Prefetch
          models={[
            {
              name: "Download VAD",
              path: process.env.VAD_MODEL_PATH!,
            },
            {
              name: "Download WHISPER",
              path: process.env.WHISPER_MODEL_PATH!,
            },
          ]}
        />
        <div className="flex items-center gap-2 text-white px-3 py-1 rounded-full text-sm font-medium bg-gray-700 hover:bg-gray-600">
          {recording ? (
            <>
              <svg
                className="fill-red-500 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              Recording
            </>
          ) : (
            <>
              <svg
                className={`size-4 fill-green-500 stroke-green-600`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 10v3" />
                <path d="M6 6v11" />
                <path d="M10 3v18" />
                <path d="M14 8v7" />
                <path d="M18 5v13" />
                <path d="M22 10v3" />
              </svg>
              Not Recording
            </>
          )}
        </div>
      </div>
    </div>
  );
}
