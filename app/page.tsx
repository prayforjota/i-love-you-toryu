import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50 flex justify-center items-center p-4">
      <div className="letter-container max-w-2xl w-full bg-white border border-gray-300 shadow-lg p-8 rounded-sm relative">
        {/* Stamp-like element */}
        <div className="absolute top-8 right-8 border-2 border-gray-400 p-2 rounded-sm rotate-3">
          <Image src="/placeholder.svg?height=60&width=60" alt="Stamp" width={60} height={60} className="opacity-70" />
        </div>

        {/* Letter header */}
        <div className="mb-8 border-b border-gray-300 pb-4">
          <div className="flex items-center gap-4">
            <Image
              src="https://i.imgur.com/VRfiVrY.jpeg"
              alt="Avatar"
              width={64}
              height={64}
              className="rounded-full border border-gray-300"
            />
            <div>
              <h1 className="text-2xl font-serif font-bold text-gray-800">JoTa Dev &lt;/&gt;</h1>
              <p className="text-gray-600 italic">"i'm lost in the world, i down my whole life"</p>
            </div>
          </div>
        </div>

        {/* Letter body */}
        <div className="font-serif text-gray-800 space-y-6">
          <p className="text-sm leading-relaxed">Dear Reader,</p>

          <p className="text-sm leading-relaxed">Allow me to introduce myself:</p>

          <div className="pl-4 border-l-2 border-gray-200">
            <p className="text-sm leading-relaxed">
              ⠀　⠀𐐪　⠀ jota 🧸 dev　　 　۶ৎ
              <br />
              ⠀　　𐙚　　discord manager +16k 　 ₊ ◞　
              <br />
              　˙　　˳　　⁺　　i am music
            </p>
          </div>

          <p className="text-sm leading-relaxed">
            I hope this letter finds you well. Please feel free to reach out if you wish to connect.
          </p>

          <p className="text-sm leading-relaxed">Sincerely yours,</p>

          <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-300">
            <div className="text-xs text-gray-500">User ID: 1153044095548264520</div>
            <div className="text-xs text-gray-500">{new Date().toLocaleDateString()}</div>
          </div>
        </div>

        {/* Paper texture overlay */}
        <div className="absolute inset-0 bg-paper-texture opacity-5 pointer-events-none"></div>
      </div>
    </div>
  )
}

