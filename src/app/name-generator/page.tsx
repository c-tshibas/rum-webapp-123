'use client';

import { useState } from 'react';

// Name data arrays
const firstNames = [
  'Alexander', 'Sophia', 'Benjamin', 'Isabella', 'William', 'Charlotte', 'James', 'Amelia',
  'Oliver', 'Mia', 'Henry', 'Harper', 'Sebastian', 'Evelyn', 'Gabriel', 'Luna',
  'Theodore', 'Nova', 'Elijah', 'Aurora', 'Lucas', 'Aria', 'Jackson', 'Zoe',
  'Liam', 'Emma', 'Noah', 'Olivia', 'Ethan', 'Ava', 'Mason', 'Chloe',
  'Aiden', 'Grace', 'Logan', 'Lily', 'Matthew', 'Ella', 'David', 'Scarlett'
];

const lastNames = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
  'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas',
  'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White',
  'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson', 'Walker', 'Young',
  'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores'
];

const fantasyFirstNames = [
  'Aelindra', 'Thorin', 'Lysander', 'Seraphina', 'Gareth', 'Celestine', 'Draven', 'Elara',
  'Kieran', 'Morgana', 'Zephyr', 'Raven', 'Orion', 'Lyanna', 'Cassius', 'Evangeline',
  'Darian', 'Isadora', 'Phoenix', 'Aurelia', 'Thaddeus', 'Cordelia', 'Valdris', 'Nerissa'
];

const fantasyLastNames = [
  'Stormwind', 'Nightfall', 'Goldleaf', 'Ironforge', 'Shadowmere', 'Brightblade', 'Frostborn', 'Starweaver',
  'Moonwhisper', 'Dragonheart', 'Thornfield', 'Silvermoon', 'Darkbane', 'Lightbringer', 'Stormcaller', 'Flamestrike'
];

interface GeneratedName {
  id: number;
  fullName: string;
  category: string;
}

export default function NameGeneratorPage() {
  const [generatedNames, setGeneratedNames] = useState<GeneratedName[]>([]);
  const [nameType, setNameType] = useState<'modern' | 'fantasy'>('modern');
  const [nameCount, setNameCount] = useState(1);

  const generateRandomName = (type: 'modern' | 'fantasy'): string => {
    if (type === 'modern') {
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      return `${firstName} ${lastName}`;
    } else {
      const firstName = fantasyFirstNames[Math.floor(Math.random() * fantasyFirstNames.length)];
      const lastName = fantasyLastNames[Math.floor(Math.random() * fantasyLastNames.length)];
      return `${firstName} ${lastName}`;
    }
  };

  const handleGenerateNames = () => {
    const newNames: GeneratedName[] = [];
    for (let i = 0; i < nameCount; i++) {
      newNames.push({
        id: Date.now() + i,
        fullName: generateRandomName(nameType),
        category: nameType
      });
    }
    setGeneratedNames(newNames);
  };

  const copyToClipboard = (name: string) => {
    navigator.clipboard.writeText(name);
    // You could add a toast notification here
  };

  const clearNames = () => {
    setGeneratedNames([]);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Random Name Generator
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Generate random names for your characters, projects, or any creative endeavor. 
          Choose between modern and fantasy names!
        </p>
      </div>

      {/* Controls */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Name Type
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="modern"
                    checked={nameType === 'modern'}
                    onChange={(e) => setNameType(e.target.value as 'modern' | 'fantasy')}
                    className="mr-2 text-blue-600"
                  />
                  <span className="text-gray-700">Modern Names</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="fantasy"
                    checked={nameType === 'fantasy'}
                    onChange={(e) => setNameType(e.target.value as 'modern' | 'fantasy')}
                    className="mr-2 text-blue-600"
                  />
                  <span className="text-gray-700">Fantasy Names</span>
                </label>
              </div>
            </div>

            {/* Number of Names */}
            <div>
              <label htmlFor="nameCount" className="block text-sm font-medium text-gray-700 mb-3">
                Number of Names
              </label>
              <select
                id="nameCount"
                value={nameCount}
                onChange={(e) => setNameCount(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                {[1, 2, 3, 4, 5, 10, 15, 20].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Generate Button */}
          <div className="mt-6 flex justify-center space-x-4">
            <button
              onClick={handleGenerateNames}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Generate Names
            </button>
            {generatedNames.length > 0 && (
              <button
                onClick={clearNames}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Generated Names */}
      {generatedNames.length > 0 && (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Generated Names
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {generatedNames.map((nameObj) => (
              <div
                key={nameObj.id}
                className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {nameObj.fullName}
                    </h3>
                    <span className="text-sm text-gray-500 capitalize">
                      {nameObj.category}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(nameObj.fullName)}
                    className="text-blue-600 hover:text-blue-700 p-2 rounded transition-colors"
                    title="Copy to clipboard"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Usage Tips */}
      <section className="mt-16 pt-16 border-t">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Usage Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Modern Names</h3>
              <p className="text-gray-600">
                Perfect for contemporary fiction, realistic characters, pseudonyms, 
                or any project that needs believable modern names.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fantasy Names</h3>
              <p className="text-gray-600">
                Ideal for fantasy novels, RPG characters, game development, 
                or any creative project in magical or fictional worlds.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
