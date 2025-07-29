import { useState } from "react";

const SerrosPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBeat, setSelectedBeat] = useState(null);

  const beats = [
    {
      id: 1,
      title: "Midnight Dreams",
      category: "Trap",
      tempo: "140 BPM",
      price: "$49",
      audio: "https://example.com/audio1.mp3",
      image: "https://placehold.co/300x300/1a1a2e/ffffff?text=Midnight+Dreams"
    },
    {
      id: 2,
      title: "Urban Legends",
      category: "Hip-Hop",
      tempo: "95 BPM",
      price: "$55",
      audio: "https://example.com/audio2.mp3",
      image: "https://placehold.co/300x300/16213e/ffffff?text=Urban+Legends"
    },
    {
      id: 3,
      title: "Neon Nights",
      category: "R&B",
      tempo: "80 BPM",
      price: "$52",
      audio: "https://example.com/audio3.mp3",
      image: "https://placehold.co/300x300/0f3460/ffffff?text=Neon+Nights"
    },
    {
      id: 4,
      title: "Street Symphony",
      category: "Trap",
      tempo: "150 BPM",
      price: "$47",
      audio: "https://example.com/audio4.mp3",
      image: "https://placehold.co/300x300/533483/ffffff?text=Street+Symphony"
    },
    {
      id: 5,
      title: "Golden Era",
      category: "Boom Bap",
      tempo: "88 BPM",
      price: "$60",
      audio: "https://example.com/audio5.mp3",
      image: "https://placehold.co/300x300/7209b7/ffffff?text=Golden+Era"
    },
    {
      id: 6,
      title: "Digital Dreams",
      category: "Future Bass",
      tempo: "100 BPM",
      price: "$58",
      audio: "https://example.com/audio6.mp3",
      image: "https://placehold.co/300x300/8338ec/ffffff?text=Digital+Dreams"
    },
    {
      id: 7,
      title: "Concrete Jungle",
      category: "Trap",
      tempo: "145 BPM",
      price: "$45",
      audio: "https://example.com/audio7.mp3",
      image: "https://placehold.co/300x300/9d4edd/ffffff?text=Concrete+Jungle"
    },
    {
      id: 8,
      title: "Soul Search",
      category: "R&B",
      tempo: "75 BPM",
      price: "$50",
      audio: "https://example.com/audio8.mp3",
      image: "https://placehold.co/300x300/b56576/ffffff?text=Soul+Search"
    },
    {
      id: 9,
      title: "Retro Wave",
      category: "Future Bass",
      tempo: "110 BPM",
      price: "$53",
      audio: "https://example.com/audio9.mp3",
      image: "https://placehold.co/300x300/e5989b/ffffff?text=Retro+Wave"
    },
    {
      id: 10,
      title: "Grime Time",
      category: "Boom Bap",
      tempo: "92 BPM",
      price: "$57",
      audio: "https://example.com/audio10.mp3",
      image: "https://placehold.co/300x300/f4a261/ffffff?text=Grime+Time"
    },
    {
      id: 11,
      title: "City Lights",
      category: "Hip-Hop",
      tempo: "98 BPM",
      price: "$51",
      audio: "https://example.com/audio11.mp3",
      image: "https://placehold.co/300x300/e9c46a/ffffff?text=City+Lights"
    },
    {
      id: 12,
      title: "Dark Matter",
      category: "Trap",
      tempo: "155 BPM",
      price: "$48",
      audio: "https://example.com/audio12.mp3",
      image: "https://placehold.co/300x300/e76f51/ffffff?text=Dark+Matter"
    },
    // Add more beats to reach 60+
    ...Array.from({ length: 48 }, (_, i) => ({
      id: i + 13,
      title: `Beat ${i + 13}`,
      category: ["Trap", "Hip-Hop", "R&B", "Boom Bap", "Future Bass"][i % 5],
      tempo: `${Math.floor(Math.random() * 40) + 80} BPM`,
      price: `$${Math.floor(Math.random() * 20) + 45}`,
      audio: `https://example.com/audio${i + 13}.mp3`,
      image: `https://placehold.co/300x300/${['1a1a2e', '16213e', '0f3460', '533483', '7209b7'][i % 5]}/ffffff?text=Beat+${i + 13}`
    }))
  ];

  const categories = ['all', 'Trap', 'Hip-Hop', 'R&B', 'Boom Bap', 'Future Bass'];

  const filteredBeats = selectedCategory === 'all'
    ? beats
    : beats.filter(beat => beat.category === selectedCategory);

  const playBeat = (beat) => {
    setSelectedBeat(beat);
  };

  const closePlayer = () => {
    setSelectedBeat(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl font-bold shadow-2xl">
              S
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            SERROS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Award-winning music producer crafting premium beats for artists worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>60+ Beats Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>4+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Worldwide Clients</span>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Beats Created", value: "60+" },
              { label: "Happy Clients", value: "250+" },
              { label: "Years Active", value: "4+" },
              { label: "Countries Reached", value: "15+" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beat Library */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Beat Library</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore my collection of premium beats across multiple genres. Each beat is crafted with precision and available for immediate purchase.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category === 'all' ? 'All Beats' : category}
              </button>
            ))}
          </div>

          {/* Beat Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredBeats.map((beat) => (
              <div
                key={beat.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 group cursor-pointer"
                onClick={() => playBeat(beat)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={beat.image}
                    alt={beat.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-200">
                      Preview & Purchase
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">{beat.title}</h3>
                  <div className="flex justify-between items-center text-sm text-gray-400 mb-3">
                    <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300">{beat.category}</span>
                    <span>{beat.tempo}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-400">{beat.price}</span>
                    <button
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 text-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        playBeat(beat);
                      }}
                    >
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">About Serros</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                With over 4 years of experience in the music industry, Serros has established himself as a premier beat maker known for his innovative sound design and genre-blending productions. His beats have been featured in tracks that have amassed millions of streams across various platforms.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Serros specializes in creating beats that not only sound incredible but also inspire artists to elevate their craft. Each production is meticulously crafted with attention to detail, ensuring professional quality that stands out in today's competitive music landscape.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-2xl font-bold text-purple-400 mb-2">100%</div>
                  <div className="text-gray-300">Royalty-Free</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-2xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl border-2 border-purple-500/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎧</div>
                  <p className="text-xl text-gray-300">Premium Quality Beats</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl">
                60+
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/80 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold">
                S
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Serros Productions</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Creating the soundtrack of your success. Premium beats for artists who demand excellence.
            </p>
            <div className="flex justify-center space-x-6 text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">Instagram</a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">Twitter</a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">SoundCloud</a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">Email</a>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 text-gray-500">
              <p>&copy; 2024 Serros Productions. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Beat Player Modal */}
      {selectedBeat && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-white/20">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">{selectedBeat.title}</h3>
              <button
                onClick={closePlayer}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            <img
              src={selectedBeat.image}
              alt={selectedBeat.title}
              className="w-full h-48 object-cover rounded-xl mb-6"
            />
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-400">Category:</span>
                <span className="text-white">{selectedBeat.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Tempo:</span>
                <span className="text-white">{selectedBeat.tempo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Price:</span>
                <span className="text-purple-400 font-bold">{selectedBeat.price}</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200">
                Purchase Beat
              </button>
              <button className="px-6 py-3 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-colors duration-200">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SerrosPortfolio;