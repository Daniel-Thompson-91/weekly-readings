//3 year reading plan array
const weeklyReadings = [
  {
    weekNumber: 1,
    reading1: "Joshua 1-3",
    reading2: "Psalm 88-89",
    reading3: "Mark 1"
  },
  {
    weekNumber: 2,
    reading1: "Joshua 4-6",
    reading2: "Psalm 90-93",
    reading3: "Mark 2-3"
  },
  {
    weekNumber: 3,
    reading1: "Joshua 7-8",
    reading2: "Psalm 94-98",
    reading3: "Mark 4-5"
  },
  {
    weekNumber: 4,
    reading1: "Joshua 9-10",
    reading2: "Psalm 99-102",
    reading3: "Mark 6"
  },
  {
    weekNumber: 5,
    reading1: "Joshua 11-13",
    reading2: "Psalm 103-104",
    reading3: "Mark 7-8"
  },
  {
    weekNumber: 6,
    reading1: "Joshua 14-16",
    reading2: "Psalm 105-106",
    reading3: "Mark 9"
  },
  {
    weekNumber: 7,
    reading1: "Joshua 17-19",
    reading2: "Psalm 107-108",
    reading3: "Mark 10"
  },
  {
    weekNumber: 8,
    reading1: "Joshua 20-22",
    reading2: "Psalm 109-111",
    reading3: "Mark 11"
  },
  {
    weekNumber: 9,
    reading1: "Joshua 23-24",
    reading2: "Psalm 112-116",
    reading3: "Mark 12-13"
  },
  {
    weekNumber: 10,
    reading1: "Judges 1-3",
    reading2: "Psalm 117-118",
    reading3: "Mark 14"
  },
  {
    weekNumber: 11,
    reading1: "Judges 4-5",
    reading2: "Psalm 119",
    reading3: "Mark 15-16"
  },
  {
    weekNumber: 12,
    reading1: "Judges 6-7",
    reading2: "Psalm 120-125",
    reading3: "Luke 1"
  },
  {
    weekNumber: 13,
    reading1: "Judges 8-9",
    reading2: "Psalm 126-132",
    reading3: "Luke 2"
  },
  {
    weekNumber: 14,
    reading1: "Judges 10-12",
    reading2: "Psalm 133-137",
    reading3: "Luke 3"
  },
  {
    weekNumber: 15,
    reading1: "Judges 13-15",
    reading2: "Psalm 138-141",
    reading3: "Luke 4"
  },
  {
    weekNumber: 16,
    reading1: "Judges 16-17",
    reading2: "Psalm 142-145",
    reading3: "Luke 5-6"
  },
  {
    weekNumber: 17,
    reading1: "Judges 18-19",
    reading2: "Psalm 146-150",
    reading3: "Luke 7"
  },
  {
    weekNumber: 18,
    reading1: "Judges 20-21",
    reading2: "Proverbs 1-2",
    reading3: "Luke 8"
  },
  {
    weekNumber: 19,
    reading1: "Ruth 1-2",
    reading2: "Proverbs 3-4",
    reading3: "Luke 9-10"
  },
  {
    weekNumber: 20,
    reading1: "Ruth 3-4",
    reading2: "Proverbs 5-6",
    reading3: "Luke 11"
  },
  {
    weekNumber: 21,
    reading1: "1 Samuel 1-2",
    reading2: "Proverbs 7-9",
    reading3: "Luke 12"
  },
  {
    weekNumber: 22,
    reading1: "1 Samuel 3-5",
    reading2: "Proverbs 10-11",
    reading3: "Luke 13"
  },
  {
    weekNumber: 23,
    reading1: "1 Samuel 6-8",
    reading2: "Proverbs 12-13",
    reading3: "Luke 14-15"
  },
  {
    weekNumber: 24,
    reading1: "1 Samuel 9-10",
    reading2: "Proverbs 14-15",
    reading3: "Luke 16-17"
  },
  {
    weekNumber: 25,
    reading1: "1 Samuel 11-13",
    reading2: "Proverbs 16-17",
    reading3: "Luke 18-19"
  },
  {
    weekNumber: 26,
    reading1: "1 Samuel 14-15",
    reading2: "Proverbs 18-19",
    reading3: "Luke 20-21"
  },
  {
    weekNumber: 27,
    reading1: "1 Samuel 16-17",
    reading2: "Proverbs 20-21",
    reading3: "Luke 22"
  },
  {
    weekNumber: 28,
    reading1: "1 Samuel 18-19",
    reading2: "Proverbs 22-23",
    reading3: "Luke 23-24"
  },
  {
    weekNumber: 29,
    reading1: "1 Samuel 20-21",
    reading2: "Proverbs 24-25",
    reading3: "John 1"
  },
  {
    weekNumber: 30,
    reading1: "1 Samuel 22-24",
    reading2: "Proverbs 26-27",
    reading3: "John 2-3"
  },
  {
    weekNumber: 31,
    reading1: "1 Samuel 25-26",
    reading2: "Proverbs 28-29",
    reading3: "John 4"
  },
  {
    weekNumber: 32,
    reading1: "1 Samuel 27-31",
    reading2: "Proverbs 30-31",
    reading3: "John 5-6"
  },
  {
    weekNumber: 33,
    reading1: "2 Samuel 1-2",
    reading2: "Ecclesiastes 1-2",
    reading3: "John 7"
  },
  {
    weekNumber: 34,
    reading1: "2 Samuel 3-4",
    reading2: "Ecclesiastes 3-5",
    reading3: "John 8"
  },
  {
    weekNumber: 35,
    reading1: "2 Samuel 5-7",
    reading2: "Ecclesiastes 6-7",
    reading3: "John 9-10"
  },
  {
    weekNumber: 36,
    reading1: "2 Samuel 8-11",
    reading2: "Ecclesiastes 8-9",
    reading3: "John 11"
  },
  {
    weekNumber: 37,
    reading1: "2 Samuel 12-13",
    reading2: "Ecclesiastes 10-11",
    reading3: "John 12"
  },
  {
    weekNumber: 38,
    reading1: "2 Samuel 14-15",
    reading2: "Song of Solomon 1-3",
    reading3: "John 13-14"
  },
  {
    weekNumber: 39,
    reading1: "2 Samuel 16-17",
    reading2: "Song of Solomon 4-6",
    reading3: "John 15-16"
  },
  {
    weekNumber: 40,
    reading1: "2 Samuel 18-19",
    reading2: "Song of Solomon 7-8",
    reading3: "John 17-18"
  },
  {
    weekNumber: 41,
    reading1: "2 Samuel 20-21",
    reading2: "Isaiah 1-2",
    reading3: "John 19"
  },
  {
    weekNumber: 42,
    reading1: "2 Samuel 22-23",
    reading2: "Isaiah 3-5",
    reading3: "John 20-21"
  },
  {
    weekNumber: 43,
    reading1: "2 Samuel 24",
    reading2: "Isaiah 6-8",
    reading3: "Acts 1"
  },
  {
    weekNumber: 44,
    reading1: "1 Kings 1-2",
    reading2: "Isaiah 9-10",
    reading3: "Acts 2"
  },
  {
    weekNumber: 45,
    reading1: "1 Kings 3-5",
    reading2: "Isaiah 11-14",
    reading3: "Acts 3"
  },
  {
    weekNumber: 46,
    reading1: "1 Kings 6-7",
    reading2: "Isaiah 15-19",
    reading3: "Acts 4"
  },
  {
    weekNumber: 47,
    reading1: "1 Kings 8",
    reading2: "Isaiah 20-23",
    reading3: "Acts 5"
  },
  {
    weekNumber: 48,
    reading1: "1 Kings 9-10",
    reading2: "Isaiah 24-26",
    reading3: "Acts 6"
  },
  {
    weekNumber: 49,
    reading1: "1 Kings 11-12",
    reading2: "Isaiah 27-29",
    reading3: "Acts 7"
  },
  {
    weekNumber: 50,
    reading1: "1 Kings 13-14",
    reading2: "Isaiah 30-32",
    reading3: "Acts 8"
  },
  {
    weekNumber: 51,
    reading1: "1 Kings 15-16",
    reading2: "Isaiah 33-35",
    reading3: "Acts 9"
  },
  {
    weekNumber: 52,
    reading1: "1 Kings 17-18",
    reading2: "Isaiah 36-37",
    reading3: "Acts 10"
  },
  {
    weekNumber: 53,
    reading1: "1 Kings 19-20",
    reading2: "Isaiah 38-41",
    reading3: "Acts 11"
  },
  {
    weekNumber: 54,
    reading1: "1 Kings 21-22",
    reading2: "Isaiah 42-43",
    reading3: "Acts 12"
  },
  {
    weekNumber: 55,
    reading1: "2 Kings 1-3",
    reading2: "Isaiah 44-45",
    reading3: "Acts 13"
  },
  {
    weekNumber: 56,
    reading1: "2 Kings 4-5",
    reading2: "Isaiah 46-48",
    reading3: "Acts 14"
  },
  {
    weekNumber: 57,
    reading1: "2 Kings 6-8",
    reading2: "Isaiah 49-51",
    reading3: "Acts 15"
  },
  {
    weekNumber: 58,
    reading1: "2 Kings 9-10",
    reading2: "Isaiah 52-55",
    reading3: "Acts 16"
  },
  {
    weekNumber: 59,
    reading1: "2 Kings 11-13",
    reading2: "Isaiah 56-58",
    reading3: "Acts 17"
  },
  {
    weekNumber: 60,
    reading1: "2 Kings 14-15",
    reading2: "Isaiah 59-61",
    reading3: "Acts 18"
  },
  {
    weekNumber: 61,
    reading1: "2 Kings 16-17",
    reading2: "Isaiah 62-64",
    reading3: "Acts 19"
  },
  {
    weekNumber: 62,
    reading1: "2 Kings 18-19",
    reading2: "Isaiah 65-66",
    reading3: "Acts 20"
  },
  {
    weekNumber: 63,
    reading1: "2 Kings 20-22",
    reading2: "Jeremiah 1-2",
    reading3: "Acts 21"
  },
  {
    weekNumber: 64,
    reading1: "2 Kings 23-25",
    reading2: "Jeremiah 3-4",
    reading3: "Acts 22"
  },
  {
    weekNumber: 65,
    reading1: "1 Chronicles 1-3",
    reading2: "Jeremiah 5-6",
    reading3: "Acts 23"
  },
  {
    weekNumber: 66,
    reading1: "1 Chronicles 4-5",
    reading2: "Jeremiah 7-9",
    reading3: "Acts 24"
  },
  {
    weekNumber: 67,
    reading1: "1 Chronicles 6-7",
    reading2: "Jeremiah 10-12",
    reading3: "Acts 25"
  },
  {
    weekNumber: 68,
    reading1: "1 Chronicles 8-10",
    reading2: "Jeremiah 13-15",
    reading3: "Acts 26"
  },
  {
    weekNumber: 69,
    reading1: "1 Chronicles 11-12",
    reading2: "Jeremiah 16-18",
    reading3: "Acts 27"
  },
  {
    weekNumber: 70,
    reading1: "1 Chronicles 13-15",
    reading2: "Jeremiah 19-22",
    reading3: "Acts 28"
  },
  {
    weekNumber: 71,
    reading1: "1 Chronicles 16-18",
    reading2: "Jeremiah 23-24",
    reading3: "Romans 1"
  },
  {
    weekNumber: 72,
    reading1: "1 Chronicles 19-21",
    reading2: "Jeremiah 25-26",
    reading3: "Romans 2"
  },
  {
    weekNumber: 73,
    reading1: "1 Chronicles 22-24",
    reading2: "Jeremiah 27-29",
    reading3: "Romans 3-4"
  },
  {
    weekNumber: 74,
    reading1: "1 Chronicles 25-27",
    reading2: "Jeremiah 30-31",
    reading3: "Romans 5-6"
  },
  {
    weekNumber: 75,
    reading1: "1 Chronicles 28-29",
    reading2: "Jeremiah 32-33",
    reading3: "Romans 7-8"
  },
  {
    weekNumber: 76,
    reading1: "2 Chronicles 1-4",
    reading2: "Jeremiah 34-36",
    reading3: "Romans 9"
  },
  {
    weekNumber: 77,
    reading1: "2 Chronicles 5-7",
    reading2: "Jeremiah 37-39",
    reading3: "Romans 10-11"
  },
  {
    weekNumber: 78,
    reading1: "2 Chronicles 8-10",
    reading2: "Jeremiah 40-43",
    reading3: "Romans 12-13"
  },
  {
    weekNumber: 79,
    reading1: "2 Chronicles 11-14",
    reading2: "Jeremiah 44-46",
    reading3: "Romans 14"
  },
  {
    weekNumber: 80,
    reading1: "2 Chronicles 15-18",
    reading2: "Jeremiah 47-48",
    reading3: "Romans 15-16"
  },
  {
    weekNumber: 81,
    reading1: "2 Chronicles 19-22",
    reading2: "Jeremiah 49-50",
    reading3: "1 Corinthians 1-2"
  },
  {
    weekNumber: 82,
    reading1: "2 Chronicles 23-25",
    reading2: "Jeremiah 51-52",
    reading3: "1 Corinthians 3-4"
  },
  {
    weekNumber: 83,
    reading1: "2 Chronicles 26-29",
    reading2: "Lamentations 1-2",
    reading3: "1 Corinthians 5-6"
  },
  {
    weekNumber: 84,
    reading1: "2 Chronicles 30-32",
    reading2: "Lamentations 3-5",
    reading3: "1 Corinthians 7"
  },
  {
    weekNumber: 85,
    reading1: "2 Chronicles 33-35",
    reading2: "Ezekiel 1-4",
    reading3: "1 Corinthians 8-9"
  },
  {
    weekNumber: 86,
    reading1: "2 Chronicles 36",
    reading2: "Ezekiel 5-7",
    reading3: "1 Corinthians 10-11"
  },
  {
    weekNumber: 87,
    reading1: "Ezra 1-3",
    reading2: "Ezekiel 8-11",
    reading3: "1 Corinthians 12-13"
  },
  {
    weekNumber: 88,
    reading1: "Ezra 4-6",
    reading2: "Ezekiel 12-15",
    reading3: "1 Corinthians 14"
  },
  {
    weekNumber: 89,
    reading1: "Ezra 7-10",
    reading2: "Ezekiel 16-17",
    reading3: "1 Corinthians 15-16"
  },
  {
    weekNumber: 90,
    reading1: "Nehemiah 1-3",
    reading2: "Ezekiel 18-19",
    reading3: "2 Corinthians 1-2"
  },
  {
    weekNumber: 91,
    reading1: "Nehemiah 4-6",
    reading2: "Ezekiel 20-21",
    reading3: "2 Corinthians 3-4"
  },
  {
    weekNumber: 92,
    reading1: "Nehemiah 7-8",
    reading2: "Ezekiel 22-23",
    reading3: "2 Corinthians 5-7"
  },
  {
    weekNumber: 93,
    reading1: "Nehemiah 9-10",
    reading2: "Ezekiel 24-27",
    reading3: "2 Corinthians 8-9"
  },
  {
    weekNumber: 94,
    reading1: "Nehemiah 11-13",
    reading2: "Ezekiel 28-30",
    reading3: "2 Corinthians 10-11"
  },
  {
    weekNumber: 95,
    reading1: "Esther 1-2",
    reading2: "Ezekiel 31-33",
    reading3: "2 Corinthians 12-13"
  },
  {
    weekNumber: 96,
    reading1: "Esther 3-6",
    reading2: "Ezekiel 34-36",
    reading3: "Galatians 1-2"
  },
  {
    weekNumber: 97,
    reading1: "Esther 7-10",
    reading2: "Ezekiel 37-39",
    reading3: "Galatians 3-4"
  },
  {
    weekNumber: 98,
    reading1: "Job 1-3",
    reading2: "Ezekiel 40-41",
    reading3: "Galatians 5-6"
  },
  {
    weekNumber: 99,
    reading1: "Job 4-6",
    reading2: "Ezekiel 42-44",
    reading3: "Ephesians 1-2"
  },
  {
    weekNumber: 100,
    reading1: "Job 7-9",
    reading2: "Ezekiel 45-47",
    reading3: "Ephesians 3-4"
  },
  {
    weekNumber: 101,
    reading1: "Job 10-11",
    reading2: "Ezekiel 48",
    reading3: "Ephesians 5-6"
  },
  {
    weekNumber: 102,
    reading1: "Job 12-14",
    reading2: "Daniel 1-2",
    reading3: "Phillippians 1-2"
  },
  {
    weekNumber: 103,
    reading1: "Job 15-16",
    reading2: "Daniel 3-4",
    reading3: "Phillippians 3-4"
  },
  {
    weekNumber: 104,
    reading1: "Job 17-19",
    reading2: "Daniel 5-6",
    reading3: "Colotians 1-2"
  },
  {
    weekNumber: 105,
    reading1: "Job 20-21",
    reading2: "Daniel 7-9",
    reading3: "Colotians 3-4"
  },
  {
    weekNumber: 106,
    reading1: "Job 22-24",
    reading2: "Daniel 10-12",
    reading3: "1 Thessalonians 1-3"
  },
  {
    weekNumber: 107,
    reading1: "Job 25-28",
    reading2: "Hosea 1-4",
    reading3: "1 Thessalonians 4-5"
  },
  {
    weekNumber: 108,
    reading1: "Job 29-30",
    reading2: "Hosea 5-9",
    reading3: "2 Thessalonians"
  },
  {
    weekNumber: 109,
    reading1: "Job 31-32",
    reading2: "Hosea 10-14",
    reading3: "1 Timothy 1-3"
  },
  {
    weekNumber: 110,
    reading1: "Job 33-34",
    reading2: "Joel",
    reading3: "1 Timothy 4-6"
  },
  {
    weekNumber: 111,
    reading1: "Job 35-37",
    reading2: "Amos 1-3",
    reading3: "2 Timothy 1-2"
  },
  {
    weekNumber: 112,
    reading1: "Job 38-39",
    reading2: "Amos 4-7",
    reading3: "2 Timothy 3-4"
  },
  {
    weekNumber: 113,
    reading1: "Job 40-42",
    reading2: "Amos 8-9",
    reading3: "Titus"
  },
  {
    weekNumber: 114,
    reading1: "Psalm 1-5",
    reading2: "Obadiah",
    reading3: "Philemon"
  },
  {
    weekNumber: 115,
    reading1: "Psalm 6-8",
    reading2: "Jonah",
    reading3: "Hebrews 1-2"
  },
  {
    weekNumber: 116,
    reading1: "Psalm 9-12",
    reading2: "Micah 1-4",
    reading3: "Hebrews 3-4"
  },
  {
    weekNumber: 117,
    reading1: "Psalm 13-17",
    reading2: "Micah 5-7",
    reading3: "Hebrews 5-6"
  },
  {
    weekNumber: 118,
    reading1: "Psalm 18",
    reading2: "Nahum",
    reading3: "Hebrews 7-8"
  },
  {
    weekNumber: 119,
    reading1: "Psalm 19-21",
    reading2: "Habakkuk",
    reading3: "Hebrews 9"
  },
  {
    weekNumber: 120,
    reading1: "Psalm 22-24",
    reading2: "Zephaniah",
    reading3: "Hebrews 10"
  },
  {
    weekNumber: 121,
    reading1: "Psalm 25-27",
    reading2: "Haggai",
    reading3: "Hebrews 11"
  },
  {
    weekNumber: 122,
    reading1: "Psalm 28-31",
    reading2: "Zechariah 1-5",
    reading3: "Hebrews 12-13"
  },
  {
    weekNumber: 123,
    reading1: "Psalm 32-34",
    reading2: "Zechariah 6-9",
    reading3: "James 1-3"
  },
  {
    weekNumber: 124,
    reading1: "Psalm 35-36",
    reading2: "Zechariah 10-14",
    reading3: "James 4-5"
  },
  {
    weekNumber: 125,
    reading1: "Psalm 37-38",
    reading2: "Malachi",
    reading3: "1 Peter 1-3"
  },
  {
    weekNumber: 126,
    reading1: "Psalm 39-41",
    reading2: "Matthew 1-2",
    reading3: "1 Peter 4-5"
  },
  {
    weekNumber: 127,
    reading1: "Psalm 42-44",
    reading2: "Matthew 3-4",
    reading3: "2 Peter"
  },
  {
    weekNumber: 128,
    reading1: "Psalm 45-48",
    reading2: "Matthew 5-6",
    reading3: "1 John 1-2"
  },
  {
    weekNumber: 129,
    reading1: "Psalm 49-51",
    reading2: "Matthew 7-8",
    reading3: "1 John 3-5"
  },
  {
    weekNumber: 130,
    reading1: "Psalm 52-55",
    reading2: "Matthew 9-10",
    reading3: "2 John"
  },
  {
    weekNumber: 131,
    reading1: "Psalm 56-59",
    reading2: "Matthew 11-12",
    reading3: "3 John"
  },
  {
    weekNumber: 132,
    reading1: "Psalm 60-64",
    reading2: "Matthew 13",
    reading3: "Jude"
  },
  {
    weekNumber: 133,
    reading1: "Psalm 65-67",
    reading2: "Matthew 14-15",
    reading3: "Revalation 1-2"
  },
  {
    weekNumber: 134,
    reading1: "Psalm 68-69",
    reading2: "Matthew 16-17",
    reading3: "Revalation 3-4"
  },
  {
    weekNumber: 135,
    reading1: "Psalm 70-72",
    reading2: "Matthew 18-19",
    reading3: "Revalation 5-6"
  },
  {
    weekNumber: 136,
    reading1: "Psalm 73-75",
    reading2: "Matthew 20-21",
    reading3: "Revalation 7-8"
  },
  {
    weekNumber: 137,
    reading1: "Psalm 76-77",
    reading2: "Matthew 22-23",
    reading3: "Revalation 9-10"
  },
  {
    weekNumber: 138,
    reading1: "Psalm 78-79",
    reading2: "Matthew 24-25",
    reading3: "Revalation 11-12"
  },
  {
    weekNumber: 139,
    reading1: "Psalm 80-83",
    reading2: "Matthew 26",
    reading3: "Revalation 13-14"
  },
  {
    weekNumber: 140,
    reading1: "Psalm 84-87",
    reading2: "Matthew 27-28",
    reading3: "Revalation 15-16"
  },
  {
    weekNumber: 141,
    reading1: "none",
    reading2: "none",
    reading3: "Revalation 17-18"
  },
  {
    weekNumber: 142,
    reading1: "none",
    reading2: "none",
    reading3: "Revalation 19-20"
  },
  {
    weekNumber: 143,
    reading1: "none",
    reading2: "none",
    reading3: "Revalation 21-22"
  }
]

const torahPortions = [
  {
    "weekNumber": 1,
    "Torah": "Genesis 1:1 - 6:8"
  },
  {
    "weekNumber": 2,
    "Torah": "Genesis 6:9 - 11:32"
  },
  {
    "weekNumber": 3,
    "Torah": "Genesis 12:1 - 17:27"
  },
  {
    "weekNumber": 4,
    "Torah": "Genesis 18:1 - 22:24"
  },
  {
    "weekNumber": 5,
    "Torah": "Genesis 23:1 - 25:18"
  },
  {
    "weekNumber": 6,
    "Torah": "Genesis 25:19 - 28:9"
  },
  {
    "weekNumber": 7,
    "Torah": "Genesis 28:10 - 32:3"
  },
  {
    "weekNumber": 8,
    "Torah": "Genesis 32:4 - 36:43"
  },
  {
    "weekNumber": 9,
    "Torah": "Genesis 37:1 - 40:23"
  },
  {
    "weekNumber": 10,
    "Torah": "Genesis 41:1 - 44:17"
  },
  {
    "weekNumber": 11,
    "Torah": "Genesis 44:18 - 47:27"
  },
  {
    "weekNumber": 12,
    "Torah": "Genesis 47:28 - 50:26"
  },
  {
    "weekNumber": 13,
    "Torah": "Exodus 1:1 - 6:1"
  },
  {
    "weekNumber": 14,
    "Torah": "Exodus 6:2 - 9:35"
  },
  {
    "weekNumber": 15,
    "Torah": "Exodus 10:1 - 13:16"
  },
  {
    "weekNumber": 16,
    "Torah": "Exodus 13:17 - 17:16"
  },
  {
    "weekNumber": 17,
    "Torah": "Exodus 18:1 - 20:23"
  },
  {
    "weekNumber": 18,
    "Torah": "Exodus 21:1 - 24:18"
  },
  {
    "weekNumber": 19,
    "Torah": "Exodus 25:1 - 27:19"
  },
  {
    "weekNumber": 20,
    "Torah": "Exodus 27:20 - 30:10"
  },
  {
    "weekNumber": 21,
    "Torah": "Exodus 30:11 - 34:35"
  },
  {
    "weekNumber": 22,
    "Torah": "Exodus 35:1 - 38:20"
  },
  {
    "weekNumber": 23,
    "Torah": "Exodus 38:21 - 40:38"
  },
  {
    "weekNumber": 24,
    "Torah": "Leviticus 1:1 - 5:26"
  },
  {
    "weekNumber": 25,
    "Torah": "Leviticus 6:1 - 8:36"
  },
  {
    "weekNumber": 26,
    "Torah": "Leviticus 9:1 - 11:47"
  },
  {
    "weekNumber": 27,
    "Torah": "Leviticus 12:1 - 13:59"
  },
  {
    "weekNumber": 28,
    "Torah": "Leviticus 14:1 - 15:33"
  },
  {
    "weekNumber": 29,
    "Torah": "Leviticus 16:1 - 18:30"
  },
  {
    "weekNumber": 30,
    "Torah": "Leviticus 19:1 - 20:27"
  },
  {
    "weekNumber": 31,
    "Torah": "Leviticus 21:1 - 24:23"
  },
  {
    "weekNumber": 32,
    "Torah": "Leviticus 25:1 - 26:2"
  },
  {
    "weekNumber": 33,
    "Torah": "Leviticus 26:3 - 27:34"
  },
  {
    "weekNumber": 34,
    "Torah": "Numbers 1:1 - 4:20"
  },
  {
    "weekNumber": 35,
    "Torah": "Numbers 4:21 - 7:89"
  },
  {
    "weekNumber": 36,
    "Torah": "Numbers 8:1 - 12:16"
  },
  {
    "weekNumber": 37,
    "Torah": "Numbers 13:1 - 15:41"
  },
  {
    "weekNumber": 38,
    "Torah": "Numbers 16:1 - 18:32"
  },
  {
    "weekNumber": 39,
    "Torah": "Numbers 19:1 - 22:1"
  },
  {
    "weekNumber": 40,
    "Torah": "Numbers 22:2 - 25:9"
  },
  {
    "weekNumber": 41,
    "Torah": "Numbers 25:10 - 30:1"
  },
  {
    "weekNumber": 42,
    "Torah": "Numbers 30:2 - 32:42"
  },
  {
    "weekNumber": 43,
    "Torah": "Numbers 33:1 - 36:13"
  },
  {
    "weekNumber": 44,
    "Torah": "Deuteronomy 1:1 - 3:22"
  },
  {
    "weekNumber": 45,
    "Torah": "Deuteronomy 3:23 - 7:11"
  },
  {
    "weekNumber": 46,
    "Torah": "Deuteronomy 7:12 - 11:25"
  },
  {
    "weekNumber": 47,
    "Torah": "Deuteronomy 11:26 - 16:17"
  },
  {
    "weekNumber": 48,
    "Torah": "Deuteronomy 16:18 - 21:9"
  },
  {
    "weekNumber": 49,
    "Torah": "Deuteronomy 21:10 - 25:19"
  },
  {
    "weekNumber": 50,
    "Torah": "Deuteronomy 26:1 - 29:8"
  },
  {
    "weekNumber": 51,
    "Torah": "Deuteronomy 29:9 - 30:20"
  },
  {
    "weekNumber": 52,
    "Torah": "Deuteronomy 31:1 - 31:30"
  },
  {
    "weekNumber": 53,
    "Torah": "Deuteronomy 32:1 - 32:52"
  },
  {
    "weekNumber": 54,
    "Torah": "Deuteronomy 33:1 - 34:12"
  }
]

const currentDate = new Date();

//torah portion date info
const torahPortionStartDate = new Date('October 2, 2021')
const torahPortionDays = Math.floor((currentDate - torahPortionStartDate) / (24 * 60 * 60 * 1000));
const torahPortionCurrentWeek = Math.ceil(torahPortionDays / 7);


//3 year reading plan date info
const threeYearStartDate = new Date('March 28, 2020');
const threeYearDays = Math.floor((currentDate - threeYearStartDate) / (24 * 60 * 60 * 1000));
const threeYearCurrentWeek = Math.ceil(threeYearDays / 7);

//retrieve DOM elements to be changed dynamically
const torah = document.getElementById('torah');
const reading1 = document.getElementById('reading1');
const reading2 = document.getElementById('reading2');
const reading3 = document.getElementById('reading3');

const setTorah = () => {
  for (let i = 0; i < torahPortions.length; i++) {
    if (torahPortions[i].weekNumber === torahPortionCurrentWeek) {
      torah.innerHTML = torahPortions[i].Torah;
    }
  }
};

const setReadings = () => {
  for (let i = 0; i < weeklyReadings.length; i++) {
    if (weeklyReadings[i].weekNumber === threeYearCurrentWeek) {
      reading1.innerHTML = weeklyReadings[i].reading1;
      reading2.innerHTML = weeklyReadings[i].reading2;
      reading3.innerHTML = weeklyReadings[i].reading3;
    }
  }
};

setTorah();
setReadings();