export default function List({ transcription }: { transcription: String[] }) {
  return (
    <ul className="flex flex-col items-center flex-1 space-y-2 text-white overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:bg-neutral-500">
      {transcription.length > 0 ? (
        transcription.map((item, index) => {
          return (
            <li key={index} className="w-full p-3 bg-gray-800 rounded-md">
              {item}
            </li>
          );
        })
      ) : (
        <div className="">Speak Please</div>
      )}
    </ul>
  );
}
