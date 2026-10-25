type LessonDetail = {
  label: string
  value: string
}

type Lesson = {
  week: number
  title: string
  details: LessonDetail[]
}

type AgeGroup = {
  id: string
  name: string
  ages: string
  theme: string
  lessons: Lesson[]
}

type CurriculumTerm = {
  id: string
  title: string
  focus: string
  summary: string
  ageGroups: AgeGroup[]
}

export const curriculumTerms: CurriculumTerm[] = [
  {
    id: 'term-1',
    title: 'Term 1',
    focus: 'Knowing God as Father and living as God’s sons and daughters',
    summary:
      'All three age groups study the same main topic, with teaching adapted to their age and level of understanding. Each group follows this curriculum for 12 weeks.',
    ageGroups: [
      {
        id: 'primary',
        name: 'Primary',
        ages: 'Ages 4–8',
        theme: 'God Is My Father, I Am His Child',
        lessons: [
          {
            week: 1,
            title: 'God Made Me',
            details: [
              { label: 'Bible story', value: 'Creation (Genesis 1–2)' },
              { label: 'Key truth', value: 'God is my Creator and He is good.' },
              { label: 'Memory verse', value: 'Genesis 1:27' },
              { label: 'Activity', value: 'Draw things God made, including yourself.' },
              { label: 'Take-home', value: 'Tell one thing God made this week.' },
            ],
          },
          {
            week: 2,
            title: 'God Knows My Name',
            details: [
              { label: 'Bible story', value: 'Adam and Eve' },
              { label: 'Key truth', value: 'God knows me personally and loves me.' },
              { label: 'Memory verse', value: 'Isaiah 43:1' },
              { label: 'Activity', value: 'Make a “God knows me” name tag.' },
              { label: 'Take-home', value: 'Say your name and “God loves me” before bed.' },
            ],
          },
          {
            week: 3,
            title: 'God’s Promise Never Fails',
            details: [
              { label: 'Bible story', value: 'Noah and the Ark' },
              { label: 'Key truth', value: 'God keeps His promises to His family.' },
              { label: 'Memory verse', value: 'Genesis 9:13 (the rainbow)' },
              { label: 'Activity', value: 'Make a rainbow craft.' },
              { label: 'Take-home', value: 'Look for a rainbow or retell the story.' },
            ],
          },
          {
            week: 4,
            title: 'God Calls Us His Own',
            details: [
              { label: 'Bible story', value: 'Abraham is called' },
              { label: 'Key truth', value: 'God chooses and calls His children.' },
              { label: 'Memory verse', value: 'Genesis 12:1–2 (simplified)' },
              { label: 'Activity', value: 'Play “Follow the Leader.”' },
              { label: 'Take-home', value: 'Practice obeying quickly at home.' },
            ],
          },
          {
            week: 5,
            title: 'God Provides',
            details: [
              { label: 'Bible story', value: 'Abraham and Isaac; God provides a ram.' },
              { label: 'Key truth', value: 'My Father always provides for me.' },
              { label: 'Memory verse', value: 'Philippians 4:19' },
              { label: 'Activity', value: 'Make “God will provide” thank-you cards.' },
              { label: 'Take-home', value: 'Thank God for one thing He gave you.' },
            ],
          },
          {
            week: 6,
            title: 'God’s Family Grows',
            details: [
              { label: 'Bible story', value: 'Jacob’s family' },
              { label: 'Key truth', value: 'I belong to God’s big family.' },
              { label: 'Memory verse', value: '1 John 3:1' },
              { label: 'Activity', value: 'Make a family tree with your church family.' },
              { label: 'Take-home', value: 'Name someone in your church family.' },
            ],
          },
          {
            week: 7,
            title: 'Forgiveness in the Family',
            details: [
              { label: 'Bible story', value: 'Joseph forgives his brothers.' },
              { label: 'Key truth', value: 'God’s children forgive like He forgives.' },
              { label: 'Memory verse', value: 'Ephesians 4:32' },
              { label: 'Activity', value: 'Role-play forgiving a friend.' },
              { label: 'Take-home', value: 'Say sorry to someone this week.' },
            ],
          },
          {
            week: 8,
            title: 'God Hears Me',
            details: [
              { label: 'Bible story', value: 'Baby Moses and Israel in Egypt' },
              { label: 'Key truth', value: 'My Father hears when I cry to Him.' },
              { label: 'Memory verse', value: 'Psalm 34:17' },
              { label: 'Activity', value: 'Have a simple prayer circle.' },
              { label: 'Take-home', value: 'Pray one-sentence prayer each night.' },
            ],
          },
          {
            week: 9,
            title: 'Jesus Loves the Children',
            details: [
              { label: 'Bible story', value: 'Jesus blesses the children.' },
              { label: 'Key truth', value: 'Jesus wants me near Him.' },
              { label: 'Memory verse', value: 'Mark 10:14' },
              { label: 'Activity', value: 'Sing “Come to Jesus” with motions.' },
              { label: 'Take-home', value: 'Sing the song at home.' },
            ],
          },
          {
            week: 10,
            title: 'Jesus Loves Me, This I Know',
            details: [
              { label: 'Bible story', value: 'The Gospel: a simple salvation story' },
              { label: 'Key truth', value: 'Jesus died so I can be God’s child forever.' },
              { label: 'Memory verse', value: 'John 3:16' },
              { label: 'Activity', value: 'Make a cross craft and say a simple salvation prayer.' },
              { label: 'Take-home', value: 'Invite a friend to hear about Jesus.' },
            ],
          },
          {
            week: 11,
            title: 'The Holy Spirit Is My Helper',
            details: [
              { label: 'Bible story', value: 'Pentecost (simplified, without complex doctrine)' },
              { label: 'Key truth', value: 'God’s Spirit lives in me to help me.' },
              { label: 'Memory verse', value: 'John 14:26' },
              { label: 'Activity', value: 'Play “Helper” charades.' },
              { label: 'Take-home', value: 'Ask the Spirit for help with something hard.' },
            ],
          },
          {
            week: 12,
            title: 'I Am God’s Beloved Child',
            details: [
              { label: 'Bible story', value: 'Review and celebration' },
              { label: 'Key truth', value: 'Everything I learned: God is my Father.' },
              { label: 'Memory verse', value: 'Romans 8:16' },
              { label: 'Activity', value: 'Have a celebration with certificates, songs, and testimonies.' },
              { label: 'Take-home', value: 'Share with your family what you learned this term.' },
            ],
          },
        ],
      },
      {
        id: 'junior',
        name: 'Junior',
        ages: 'Ages 9–12',
        theme: 'The Covenant Father — Knowing God, Knowing Myself as His Child',
        lessons: [
          {
            week: 1,
            title: 'What Does “Father” Really Mean?',
            details: [
              { label: 'Bible focus', value: 'Introduction: covenant versus contract' },
              { label: 'Key truth', value: 'God’s fatherhood is covenant love, not a transaction.' },
              { label: 'Discussion / application', value: 'Contrast earthly disappointments with God’s constancy.' },
              { label: 'Character link', value: 'Trust' },
            ],
          },
          {
            week: 2,
            title: 'The God Who Commits',
            details: [
              { label: 'Bible focus', value: 'Abraham called and covenant (Genesis 12, 15)' },
              { label: 'Key truth', value: 'God binds Himself to His people by promise.' },
              { label: 'Discussion / application', value: 'What does it mean that God cannot break His word?' },
              { label: 'Character link', value: 'Security' },
            ],
          },
          {
            week: 3,
            title: 'The Inherited Promise',
            details: [
              { label: 'Bible focus', value: 'Isaac and Jacob' },
              { label: 'Key truth', value: 'Sonship carries inheritance, not just identity.' },
              { label: 'Discussion / application', value: 'What has God given you as His child?' },
              { label: 'Character link', value: 'Gratitude' },
            ],
          },
          {
            week: 4,
            title: 'A Father’s Providence in Suffering',
            details: [
              { label: 'Bible focus', value: 'Joseph’s story' },
              { label: 'Key truth', value: 'God is Father even when life is unfair.' },
              { label: 'Discussion / application', value: 'Journal about a hard time God brought good from.' },
              { label: 'Character link', value: 'Resilience' },
            ],
          },
          {
            week: 5,
            title: 'A Father Even When We Wander',
            details: [
              { label: 'Bible focus', value: 'The cycle of the Judges (brief)' },
              { label: 'Key truth', value: 'God’s fatherhood does not depend on our performance.' },
              { label: 'Discussion / application', value: 'Discuss “orphan thinking”: earning love versus resting in it.' },
              { label: 'Character link', value: 'Humility' },
            ],
          },
          {
            week: 6,
            title: 'What Is Sin, Really?',
            details: [
              { label: 'Bible focus', value: 'Definition of sin and Romans 3:23' },
              { label: 'Key truth', value: 'Sin separates us but does not cancel God’s pursuit.' },
              { label: 'Discussion / application', value: 'Discuss sin as a relational break in an age-appropriate way.' },
              { label: 'Character link', value: 'Honesty' },
            ],
          },
          {
            week: 7,
            title: 'Repentance — Turning Home',
            details: [
              { label: 'Bible focus', value: 'The Prodigal Son (Luke 15)' },
              { label: 'Key truth', value: 'Repentance is coming home to the Father.' },
              { label: 'Discussion / application', value: 'Role-play and discuss the father’s response.' },
              { label: 'Character link', value: 'Restoration' },
            ],
          },
          {
            week: 8,
            title: 'Saved by Grace, Not by Earning',
            details: [
              { label: 'Bible focus', value: 'Ephesians 2:8–9' },
              { label: 'Key truth', value: 'Salvation is a gift I receive, not a wage I earn.' },
              { label: 'Discussion / application', value: 'Use a “gift versus wage” object lesson.' },
              { label: 'Character link', value: 'Grace' },
            ],
          },
          {
            week: 9,
            title: 'Who Is the Holy Spirit?',
            details: [
              { label: 'Bible focus', value: 'John 14–16 (introduction)' },
              { label: 'Key truth', value: 'The Spirit is a Person, not a force or feeling.' },
              { label: 'Discussion / application', value: 'Contrast “force” language from movies with the biblical Person.' },
              { label: 'Character link', value: 'Attentiveness' },
            ],
          },
          {
            week: 10,
            title: 'One God, Three Persons',
            details: [
              { label: 'Bible focus', value: 'Simple Trinity teaching; use caution with analogies.' },
              { label: 'Key truth', value: 'God is One, eternally Father, Son, and Spirit.' },
              { label: 'Discussion / application', value: 'Invite questions and avoid oversimplified heresies.' },
              { label: 'Character link', value: 'Reverence' },
            ],
          },
          {
            week: 11,
            title: 'Who Does God Say I Am?',
            details: [
              { label: 'Bible focus', value: 'Identity texts (Ephesians 1; 1 Peter 2:9)' },
              { label: 'Key truth', value: 'My identity comes from God, not peers or likes.' },
              { label: 'Discussion / application', value: 'Use peer-pressure scenarios and respond from identity.' },
              { label: 'Character link', value: 'Confidence' },
            ],
          },
          {
            week: 12,
            title: 'Covenant Family Night',
            details: [
              { label: 'Bible focus', value: 'Review and testimonies' },
              { label: 'Key truth', value: 'I belong to a covenant family that does not let go.' },
              { label: 'Discussion / application', value: 'Share testimonies and make a “family covenant” card.' },
              { label: 'Character link', value: 'Belonging' },
            ],
          },
        ],
      },
      {
        id: 'teen',
        name: 'Teen',
        ages: 'Ages 13–18',
        theme: 'Fatherhood of God, Sonship, and the Gift of Salvation in a Fatherless Culture',
        lessons: [
          {
            week: 1,
            title: 'The Fatherlessness Crisis',
            details: [
              { label: 'Core content', value: 'Cultural context and the Father heart of God (Psalm 68:5)' },
              { label: 'Key truth', value: 'God is Father to the fatherless, a direct answer to a felt need.' },
              { label: 'Discussion prompt', value: 'Why does this generation struggle to trust “Father” language?' },
              { label: 'Apologetic / cultural thread', value: 'Broken families versus God’s constancy' },
            ],
          },
          {
            week: 2,
            title: 'The Redemptive Storyline',
            details: [
              { label: 'Core content', value: 'Overview from Genesis to Revelation' },
              { label: 'Key truth', value: 'Scripture is one story of a Father restoring sons and daughters.' },
              { label: 'Discussion prompt', value: 'Map the storyline together on a timeline.' },
              { label: 'Apologetic / cultural thread', value: 'Meaning versus meaninglessness' },
            ],
          },
          {
            week: 3,
            title: 'Justification — Declared Righteous',
            details: [
              { label: 'Core content', value: 'Romans 3–5' },
              { label: 'Key truth', value: 'I am not just forgiven; I am declared righteous.' },
              { label: 'Discussion prompt', value: 'Discuss the difference between feeling righteous and being declared righteous.' },
              { label: 'Apologetic / cultural thread', value: 'Guilt and shame culture' },
            ],
          },
          {
            week: 4,
            title: 'Sanctification — Being Made Holy',
            details: [
              { label: 'Core content', value: 'Romans 6; 2 Corinthians 3:18' },
              { label: 'Key truth', value: 'Salvation is a process of becoming, not just a moment.' },
              { label: 'Discussion prompt', value: 'What growth areas is God working on in you?' },
              { label: 'Apologetic / cultural thread', value: 'Instant-gratification culture' },
            ],
          },
          {
            week: 5,
            title: 'Glorification and Wholeness',
            details: [
              { label: 'Core content', value: 'Romans 8 and healing texts' },
              { label: 'Key truth', value: 'Full salvation includes future hope and present wholeness.' },
              { label: 'Discussion prompt', value: 'What does “wholeness” mean beyond physical healing?' },
              { label: 'Apologetic / cultural thread', value: 'Mental health conversations' },
            ],
          },
          {
            week: 6,
            title: 'Who Is the Holy Spirit?',
            details: [
              { label: 'Core content', value: 'John 14–16; Acts 1' },
              { label: 'Key truth', value: 'The Spirit is fully God, a Person to know, not a power to use.' },
              { label: 'Discussion prompt', value: 'Person versus power: why does the distinction matter?' },
              { label: 'Apologetic / cultural thread', value: 'New Age “energy” language' },
            ],
          },
          {
            week: 7,
            title: 'The Work of the Spirit',
            details: [
              { label: 'Core content', value: 'Fruit, conviction, and empowerment' },
              { label: 'Key truth', value: 'The Spirit forms character and equips us for mission now.' },
              { label: 'Discussion prompt', value: 'Which fruit of the Spirit is hardest for you right now?' },
              { label: 'Apologetic / cultural thread', value: 'Self-improvement versus Spirit-formed character' },
            ],
          },
          {
            week: 8,
            title: 'Is Truth Relative?',
            details: [
              { label: 'Core content', value: 'Apologetics: truth claims' },
              { label: 'Key truth', value: 'Absolute truth exists and is knowable in Christ.' },
              { label: 'Discussion prompt', value: 'Practice responding respectfully to “your truth versus my truth.”' },
              { label: 'Apologetic / cultural thread', value: 'Relativism' },
            ],
          },
          {
            week: 9,
            title: 'Identity: Self-Made or God-Given?',
            details: [
              { label: 'Core content', value: 'Genesis 1:27; Psalm 139' },
              { label: 'Key truth', value: 'My identity is received from my Creator, not constructed.' },
              { label: 'Discussion prompt', value: 'Handle identity formation sensitively.' },
              { label: 'Apologetic / cultural thread', value: 'Self-identity culture' },
            ],
          },
          {
            week: 10,
            title: 'Identity in Christ vs. the Feed',
            details: [
              { label: 'Core content', value: 'Colossians 3:1–3' },
              { label: 'Key truth', value: 'My worth is not measured in likes, follows, or comparison.' },
              { label: 'Discussion prompt', value: 'Try a social media fast and reflect on the experience.' },
              { label: 'Apologetic / cultural thread', value: 'Comparison culture' },
            ],
          },
          {
            week: 11,
            title: 'Living as Sons, Not Orphans',
            details: [
              { label: 'Core content', value: 'Romans 8:15; Galatians 4' },
              { label: 'Key truth', value: 'Maturity means resting in sonship, not striving for approval.' },
              { label: 'Discussion prompt', value: 'Spot the difference between “orphan-spirit” and “son-spirit” behaviors.' },
              { label: 'Apologetic / cultural thread', value: 'Performance culture' },
            ],
          },
          {
            week: 12,
            title: 'Capstone: My Identity, My Calling',
            details: [
              { label: 'Core content', value: 'Testimony and commissioning' },
              { label: 'Key truth', value: 'We are sent out as secure sons and daughters with a mission.' },
              { label: 'Discussion prompt', value: 'Write a personal testimony and share a commissioning prayer.' },
            ],
          },
        ],
      },
    ],
  },
]
