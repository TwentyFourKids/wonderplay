/* Questions for the original ornament wishes, adapted to age and CEFR level. */
(() => {
  const Q = (children, preteens, teens, adults) => [children, preteens, teens, adults];
  const I = (id, label, questions, ageLabels) => ({ id, label, icon: window.HERITAGE_ICONS[id], questions, ageLabels });
  window.GAME_DATA.push({
    id: 'heritage', title: 'The Wish Tree', ru: 'Ёлка желаний', preview: window.HERITAGE_PREVIEW,
    caption: 'Choose a wish, tell its story', subtitle: 'Seven ornaments. Seven wishes for a new year.', color: '#f5ecdc',
    items: [
      I('success','Success',Q(
        ['What can you do well?','What would you like to get better at?','How do you feel when you practise and succeed?'],
        ['What are you proud of?','Which goal would you like to reach this year?','What helps you keep going when a goal is difficult?'],
        ['What does success mean to you now?','What achievement took more effort than people realise?','Can someone be successful without winning or earning a prize?'],
        ['What would a successful year look like for you?','Which personal achievement matters more than a public one?','How has your idea of success changed as you have grown older?'])),
      I('gifts','Lots of gifts',Q(
        ['What gift would make you smile?','Who would you give a present to?','Why is it fun to give someone a surprise?'],
        ['What present would you choose for a friend?','What is a gift you still remember?','Can a handmade present be better than one from a shop?'],
        ['Which gift has meant a lot to you?','How would you choose a present for someone very different from you?','Is attention more valuable than money when choosing a gift?'],
        ['What kind of gift feels thoughtful to you?','Have you ever received something small but unforgettable?','How do gift traditions influence what people expect from each other?'])),
      I('love','Passionate love',Q(
        ['Who do you love?','How can you show someone you care?','What makes a friendship feel warm and safe?'],
        ['Who makes you feel loved?','How do you show care without buying anything?','Why do close relationships need time and attention?'],
        ['What do you value in a close relationship?','How can people show affection in different ways?','What makes trust grow between two people?'],
        ['What does passionate love mean to you?','How do you balance excitement and trust in a relationship?','How can a relationship change while still remaining meaningful?'])),
      I('treats','Unlimited treats',Q(
        ['What is your favourite treat?','What would you put on a giant cookie?','Why do treats taste extra special on holidays?'],
        ['Which sweet would you choose first?','What treat would you share with your friends?','If treats were unlimited, would they still feel special?'],
        ['What food feels like a reward to you?','Would unlimited treats be exciting or too much?','Why do people often connect celebration with food?'],
        ['Which treat reminds you of childhood?','How do you decide when to indulge yourself?','Would abundance make pleasures more enjoyable or less memorable?'])),
      I('fortitude','Strength & fortitude',Q(
        ['When do you feel brave?','What helps you try again?','Can you be strong even when you ask for help?'],
        ['When did you keep trying?','What helps you stay calm in a hard moment?','Is courage something people can learn?'],
        ['What challenge has made you stronger?','How do you cope when a plan fails?','Can persistence ever become stubbornness?'],
        ['What does inner strength look like in daily life?','When has patience mattered more than confidence?','How do you know when to persevere and when to change direction?'])),
      I('luxury','Lots of branded items',Q(
        ['What is a special thing you own?','What would make a toy feel special?','Do you need an expensive thing to have fun?'],
        ['Do you like famous brands?','What makes something worth buying for you?','Can a simple object be more useful than an expensive one?'],
        ['Do brands affect what you choose?','Have you ever wanted something because it was popular?','How do advertising and friends influence what we value?'],
        ['What makes a purchase feel worthwhile?','Have you ever paid more for a brand, and why?','How much of a luxury item’s value comes from its story or status?'])),
      I('money','Earn a lot of money',Q(
        ['What would you save coins for?','What would you buy with your own money?','Why can saving for something be exciting?'],
        ['What would you like to save money for?','How could you earn money when you are older?','Would you rather spend money now or save for a big goal?'],
        ['What kind of work would you enjoy?','What would you do with a large amount of money?','Can a well-paid job also be a meaningful one?'],
        ['What does financial comfort mean to you?','Would you change careers for a much higher salary?','How do you balance earning more with having time for other priorities?'])),
      I('trip','Dream trip',Q(
        ['Where would you like to go?','What would you pack for a dream trip?','Who would you take on an adventure?'],
        ['What place would you love to visit?','What would you do on your first day there?','Would you prefer a busy city or a quiet island?'],
        ['Where is your dream destination?','What would you hope to learn on that trip?','Is the company or the destination more important?'],
        ['What trip have you imagined for years?','What would make that journey feel truly special?','How can travel change the way you see your everyday life?'])),
      I('hobby','Try a new hobby',Q(
        ['What game or sport would you try?','Would you like to learn to skate?','How does it feel to try something new?'],
        ['What new hobby sounds fun to you?','Who could teach you the first steps?','Why do people sometimes give up a hobby too soon?'],
        ['What activity would you try if you had more time?','How would you start learning it?','What can a hobby give you besides a new skill?'],
        ['Which hobby have you been postponing?','What small step would help you begin?','How do hobbies support a sense of identity outside work?'])),
      I('health','Good health',Q(
        ['What makes your body feel strong?','What healthy food do you like?','Why do we need both play and rest?'],
        ['What helps you feel well?','How do you relax after a busy day?','Why is sleep important for learning and mood?'],
        ['What healthy habit would you like to build?','How do you know when you need a break?','Why is health about more than exercise and food?'],
        ['What does feeling healthy mean to you?','Which habit has improved your energy or mood?','How do you keep healthy routines realistic during busy periods?'])),
      I('pet','Get a pet',Q(
        ['What animal would you choose?','What name would you give your pet?','How would you look after it every day?'],
        ['What pet would suit your home?','What would you need before bringing it home?','Why is a pet a responsibility as well as a friend?'],
        ['Would you like to have a pet?','How would a pet change your daily routine?','Should people choose pets for their personality or their lifestyle?'],
        ['What role do animals play in your life?','What would you consider before adopting a pet?','How can caring for an animal change a person’s habits?'])),
      I('childhood','Return to childhood',Q(
        ['What toy did you love?','What game would you like to play again?','What happy memory would you put in a magic bell?'],
        ['What reminds you of being little?','Which childhood game would you teach a friend?','Why can an old toy bring back strong feelings?'],
        ['What childhood moment would you revisit?','What song or smell brings that time back?','Would you want to relive a day from childhood exactly as it happened?'],
        ['What part of childhood do you miss?','What small ritual brings back that feeling now?','Why do people often remember childhood as simpler than it really was?'])),
      I('celebrity','Meet a celebrity',Q(
        ['Who is your hero?','What would you ask them?','What would you tell someone you admire?'],
        ['Who would you like to meet?','What question would you ask first?','Can a famous person be a good role model without being perfect?'],
        ['Which well-known person inspires you?','What would you want to discuss with them?','Why do people feel close to celebrities they have never met?'],
        ['Whom would you choose to meet for an hour?','What would you hope to learn from that conversation?','How much should public figures influence our personal goals?'])),
      I('friends','Make new friends',Q(
        ['What do you do with a friend?','How can you say hello to someone new?','What could you do to help a new child feel welcome?'],
        ['Where could you meet a new friend?','How do you start a conversation?','What helps a friendship grow after the first meeting?'],
        ['Is it easy for you to make new friends?','What would you ask someone you just met?','Why can friendships change as people get older?'],
        ['Where do you meet new people now?','What makes a new friendship worth developing?','How do adult friendships survive busy schedules and distance?']))
    ]
  });
})();
