/* Every item has an authored question for each age band and CEFR level.
   Age order: 5–8, 9–14, 15–17, 18+. Level order: A1, A2, B1. */
const Q = (a, b, c, d) => [a, b, c, d];
const I = (id, label, icon, questions, ageLabels) => ({ id, label, icon, questions, ageLabels });

window.GAME_DATA = [
  {
    id: 'tree', title: 'Decorate the Tree', ru: 'Наряди ёлку', preview: '🎄', caption: 'A little wish in every ornament', subtitle: 'Choose seven wishes for your tree.', color: '#dcf4ec',
    items: [
      I('success','Success','🏆',Q(
        ['What are you good at?','What new thing would you like to learn?','How do you feel when you finally learn something difficult?'],
        ['What is one thing you do well?','What school goal would make you proud this year?','Is success more about talent or practice? Give an example from your life.'],
        ['What goal matters to you now?','What have you worked hard to achieve recently?','How do you decide whether you have succeeded at something important?'],
        ['What does success mean to you?','Which recent achievement are you most pleased with?','How has your definition of success changed over time?'])),
      I('gifts','Lots of gifts','🎁',Q(
        ['What gift makes you happy?','Who would you give a present to, and what would it be?','Why can a small present sometimes feel very special?'],
        ['Do you like giving gifts?','What is the most thoughtful gift you have received?','Would you rather give someone a surprise or let them choose a gift? Why?'],
        ['What kind of gift do you appreciate?','How do you choose a present for someone you know well?','Can an experience make a better gift than an object? Explain.'],
        ['Do you enjoy choosing presents?','What gift has had a lasting meaning for you?','How do expectations around gift giving affect relationships?'])),
      I('love','Friendship','💝',Q(
        ['Who is your friend?','What do you like doing with your friends?','What can you do when a friend feels sad?'],
        ['What makes someone a good friend?','How do you show a friend that you care?','Can you stay close friends with someone whose interests are very different? How?'],
        ['What do you value in a close relationship?','How do you make time for people who matter to you?','What helps a relationship stay strong when people change?'],
        ['What makes you feel cared for?','How do you show affection in everyday life?','What matters more in a close relationship: shared interests or shared values?']),
        ['Friendship','Friendship','Close relationships','Love & connection']),
      I('treats','Sweet treats','🍪',Q(
        ['What sweet food do you like?','If you could make a new cookie, what would be in it?','Why do treats feel extra special on holidays?'],
        ['What is your favourite holiday treat?','When do you usually enjoy a special dessert?','Should a holiday treat be traditional or surprising? Why?'],
        ['What food reminds you of a celebration?','Have your tastes in desserts changed as you grew up?','How can a particular food bring back a strong memory?'],
        ['Which treat feels festive to you?','Is there a dessert connected to a family tradition?','Why do food traditions often outlast other holiday customs?'])),
      I('courage','Courage','🦁',Q(
        ['When do you feel brave?','What would you say to a friend who is afraid to try?','Can you be brave even when you feel scared? How?'],
        ['What is something brave you have done?','When did you try something that felt difficult at first?','Is asking for help a sign of courage? Explain with an example.'],
        ['When have you needed courage?','What helps you take a risk when the result is uncertain?','Is courage a skill that people can practise? Why or why not?'],
        ['What does everyday courage look like?','When have you acted despite feeling uncertain?','How do you distinguish courage from taking an unnecessary risk?'])),
      I('favorite-things','Favourite things','✨',Q(
        ['What is your favourite toy?','Which thing in your room do you like most, and why?','If you could keep only three favourite things, what would they be?'],
        ['What object is special to you?','What would you save first from your room, and why?','Do people need many things to feel happy? Explain.'],
        ['What possession matters most to you?','Why do you value that object more than others?','How can an ordinary object become personally valuable?'],
        ['What object would you never replace?','What makes something worth keeping for years?','How do you balance enjoying possessions with avoiding unnecessary purchases?'])),
      I('money','Money','💰',Q(
        ['What would you buy with ten coins?','Would you save your money or buy a toy? Why?','If you found money, what would be a kind way to use it?'],
        ['Do you like saving money?','What would you save up for this year?','Is it better to spend money on things or experiences? Why?'],
        ['What purchase would be worth saving for?','How do you decide whether something is worth its price?','What financial habit do you think young people should learn early?'],
        ['What do you prefer to spend money on?','What has saving for something taught you?','What would you change about the way you plan your spending?'])),
      I('dream-trip','Dream trip','✈️',Q(
        ['Where would you like to go?','Would you choose the beach or the mountains? Why?','What would you do on your perfect holiday?'],
        ['Where is your dream holiday?','Who would you take on a dream trip, and what would you do?','Would you rather revisit a place you love or explore somewhere new?'],
        ['What place is on your travel wish list?','What attracts you to that destination?','How might visiting another country change your view of home?'],
        ['Where would you travel if you could leave tomorrow?','What would make that trip meaningful to you?','Is the journey or the destination more important to you? Why?'])),
      I('hobby','New hobby','🎨',Q(
        ['What do you like to make?','Which new game or activity would you try?','What would you like to practise until you get really good at it?'],
        ['What hobby would you like to try?','Why does that activity interest you?','Is it more fun to start a hobby with friends or on your own?'],
        ['What new skill would you learn for fun?','What has stopped you from trying it so far?','How could a new hobby change your daily routine?'],
        ['What hobby would you start with a free afternoon each week?','What attracts you to it?','How do hobbies contribute to a balanced life?'])),
      I('health','Good health','🍎',Q(
        ['What helps you feel strong?','What healthy food do you enjoy?','How can you help your body rest after a busy day?'],
        ['What helps you stay healthy?','Which healthy habit would you like to improve?','Why can sleep be as important as exercise?'],
        ['What do you do when you need more energy?','How do you make time for healthy habits?','Which has a bigger effect on your wellbeing: sleep, food or movement? Why?'],
        ['What habit helps you feel well?','What healthy routine is hardest to maintain?','How should people adjust health advice to fit real life?'])),
      I('pet','A pet','🐕',Q(
        ['Do you like dogs or cats?','What would you name a pet?','How would you take care of a new animal friend?'],
        ['What animal would you like as a pet?','What would you need to do every day to care for it?','What should a family think about before getting a pet?'],
        ['Would a pet fit into your life now?','What responsibilities come with owning an animal?','Should people choose pets based on lifestyle rather than appearance? Why?'],
        ['Do you have or want a pet?','How has an animal affected your family or routine?','What responsibilities should a person consider before adopting a pet?'])),
      I('childhood','Childhood memories','🔔',Q(
        ['What toy did you love when you were little?','What game do you remember playing when you were younger?','If you could play one childhood game again, which would you choose?'],
        ['What is a happy memory from when you were younger?','Which old toy or game would you like to see again?','Why do certain small objects remind us of childhood?'],
        ['What childhood activity do you miss?','What memory comes back when you hear an old song?','How do childhood memories shape the things you enjoy today?'],
        ['What brings back a childhood memory for you?','Which tradition from childhood have you kept?','Why do some childhood experiences stay vivid for decades?'])),
      I('celebrity','Famous person','⭐',Q(
        ['Who is a famous person you like?','What would you ask your favourite singer or actor?','If you met a famous person, what would you do together?'],
        ['Who would you like to meet?','What would you ask that person in one minute?','Would meeting a famous person change how you feel about their work?'],
        ['Which public figure would you like to talk to?','What could you learn from their experience?','Is it useful to have role models you have never met? Why?'],
        ['Who would make an interesting dinner guest?','What would you ask them about their work?','How do public figures influence people’s ambitions and values?'])),
      I('friends','New friends','🤝',Q(
        ['How do you say hello to a new friend?','What game would you play with someone new?','How can you help a new child feel welcome?'],
        ['Where can you meet new friends?','What would you talk about when you first meet someone?','How can you include someone who feels left out?'],
        ['How do you usually meet new people?','What makes a first conversation easier?','Can online friendships be as meaningful as in-person ones? Explain.'],
        ['Where do you find it easiest to meet people?','What helps you build a new friendship?','How do friendships change as people move through different stages of life?']))
    ]
  },
  {
    id: 'halloween', title: 'Decorate the Haunted House', ru: 'Укрась дом на Хэллоуин', preview: '🏚️', caption: 'A playful little fright', subtitle: 'Choose seven decorations for the house.', color: '#f7e7de',
    items: [
      I('pumpkin','Pumpkin','🎃',Q(
        ['Do you like pumpkins?','What face would you draw on a pumpkin?','Would your pumpkin look funny or spooky? Why?'],
        ['What face would you carve on a pumpkin?','Where would you put a pumpkin decoration?','Why do you think pumpkins became a symbol of Halloween?'],
        ['Would you carve a pumpkin?','How would you design one that stands out?','What makes a familiar decoration feel creative rather than predictable?'],
        ['Do you decorate with pumpkins?','What design would you choose for a pumpkin lantern?','Why do simple symbols such as pumpkins become strong holiday traditions?'])),
      I('bat','Bat','🦇',Q(
        ['Can a bat fly?','Where would you put a paper bat?','What is interesting about animals that fly at night?'],
        ['Do bats seem scary or interesting?','How could you make a bat decoration?','Should Halloween decorations make people laugh or feel nervous?'],
        ['What do you know about bats?','Would you use realistic or cartoon bats to decorate?','How does knowing more about an animal change the way we fear it?'],
        ['Do bats make good Halloween decorations?','How would you create an atmospheric display with them?','Why do people turn misunderstood animals into holiday symbols?'])),
      I('ghost','Friendly ghost','👻',Q(
        ['Can you say boo?','What name would you give a friendly ghost?','What would a friendly ghost do to help people?'],
        ['Would your ghost be funny or spooky?','What story would you tell about this ghost?','Why do people enjoy ghost stories even when they feel a little scared?'],
        ['Do you enjoy ghost stories?','What setting would make a ghost story memorable?','Why can an unseen character be more effective than a visible one?'],
        ['What makes a ghost story enjoyable?','Would you prefer a humorous or mysterious ghost tale?','How do stories use uncertainty to create suspense?'])),
      I('spider','Spider','🕷️',Q(
        ['How many legs does a spider have?','Where would you hide a toy spider?','Why might a tiny spider look big in the dark?'],
        ['Are you afraid of spiders?','Where would you place a pretend spider?','Why do some people find harmless creatures frightening?'],
        ['How do you feel about spiders?','Would you add a realistic spider to the decorations?','How can a small detail make a setting feel dramatic?'],
        ['Do spiders bother you?','What small detail would make a Halloween room atmospheric?','How do decorations play with fears that people know are irrational?'])),
      I('web','Spiderweb','🕸️',Q(
        ['What makes a spiderweb?','Where could you hang a pretend web?','How could a web make a room look mysterious?'],
        ['Where would you put a spiderweb?','How could you make one from paper or string?','What makes a decoration look magical instead of messy?'],
        ['What would you use to make a fake web?','Where would you place it for the best effect?','How can texture change the feeling of a room?'],
        ['Would you use a spiderweb decoration?','Where would you place it to create atmosphere?','How much does setting influence the stories we imagine?'])),
      I('witch-hat','Witch hat','🧙',Q(
        ['What colour is a witch hat?','What magic would your hat give you?','If your hat could do one helpful trick, what would it do?'],
        ['Would you wear a witch hat?','What would your costume look like with this hat?','What magical power would be useful for one ordinary day?'],
        ['What would your witch costume look like?','What power would you choose for a fictional character?','Why do magical characters often wear recognisable costumes?'],
        ['Would you wear a costume to a Halloween party?','What imaginary power would you choose?','What do costumes allow people to express that everyday clothes do not?'])),
      I('black-cat','Black cat','🐈‍⬛',Q(
        ['Do you like cats?','What would you call this cat?','What adventure might a cat have on Halloween night?'],
        ['Would a black cat be a good Halloween friend?','What name would you give it?','Why do stories give black cats a mysterious role?'],
        ['Do you believe black cats are lucky?','How would you include one in a Halloween story?','Why do harmless animals sometimes become part of superstitions?'],
        ['What do you think of black cat superstitions?','Would you make a cat the hero of a Halloween story?','How do old beliefs continue to influence modern holiday imagery?'])),
      I('skeleton','Dancing skeleton','💀',Q(
        ['Can you dance like a skeleton?','What music would a silly skeleton dance to?','How could a dancing skeleton make people laugh?'],
        ['Would you make a funny skeleton decoration?','Where would you put it in the house?','Why can a silly decoration make a scary theme more enjoyable?'],
        ['Would your skeleton be creepy or comic?','How would you give it a personality?','How does humour change the way people react to scary images?'],
        ['Do you prefer playful or dark Halloween decor?','How would you style a skeleton decoration?','Why does humour often sit alongside fear at Halloween?'])),
      I('candle','Candle','🕯️',Q(
        ['Is a candle bright?','Where could a grown-up put a candle safely?','How can a small light make a room feel different?'],
        ['Do you like candlelight?','How could lights make the house look mysterious?','Why does dim light make familiar places feel unusual?'],
        ['What lighting would you use for a Halloween scene?','How would you make it atmospheric without being too scary?','Why does lighting affect our emotions so strongly?'],
        ['Do you prefer candles or electric lights for a party?','What lighting would create the right atmosphere?','How does light shape the mood of a space?'])),
      I('lantern','Lantern','🏮',Q(
        ['What colour is your lantern?','Where would you hang a glowing lantern?','How could a lantern help guests find a party?'],
        ['Where would you hang a lantern?','What colour light would you choose?','How could lighting guide visitors through a decorated house?'],
        ['What kind of lantern would you choose?','Where would it have the strongest effect?','How can lighting direct people’s attention in a room?'],
        ['Would lanterns suit your Halloween style?','Where would you place one for a warm welcome?','How can an entrance set expectations for an event?'])),
      I('broom','Magic broom','🧹',Q(
        ['Can a broom fly in stories?','Where would your magic broom take you?','What would you see on a night flight above your town?'],
        ['Would you ride a magic broom?','Where would you fly first?','What ordinary place would look amazing from the sky at night?'],
        ['Where would you go on a magic broom?','What would you notice from above your town?','Why is flying such a common fantasy in stories?'],
        ['Would you try flying on a magic broom?','Where would your first night flight go?','What does the fantasy of flying suggest about human wishes?'])),
      I('candy','Halloween candy','🍬',Q(
        ['What candy do you like?','Would you share your sweets with a friend?','How could you make sure everyone gets a treat?'],
        ['What Halloween treat would you choose?','How many treats would you share with friends?','Should parties have sweets or other surprises too? Why?'],
        ['What treat would you offer guests?','What could you serve instead of candy?','How can a party include guests with different tastes or needs?'],
        ['What would you serve at a Halloween gathering?','How would you plan treats for different guests?','How have holiday foods changed with people’s lifestyles?'])),
      I('mask','Costume mask','🎭',Q(
        ['What animal mask would you wear?','What costume could you make with this mask?','If your mask had a special power, what would it be?'],
        ['What would your Halloween mask show?','Would you make it funny, mysterious or colourful?','Is it more fun to hide your identity or show your personality in a costume?'],
        ['What kind of mask would suit you?','How would it change the way you act at a party?','Why might people feel freer when wearing a costume?'],
        ['Would you wear a mask to a themed party?','What character would you become?','How can dressing up alter people’s confidence or behaviour?'])),
      I('cauldron','Magic cauldron','🫕',Q(
        ['What is in your magic pot?','What happy surprise would you make in a cauldron?','If you could mix three things into a friendly potion, what would they be?'],
        ['What would your magic potion do?','Which three ingredients would you add?','Would you use a magical potion to help yourself or someone else? Why?'],
        ['What potion would you invent?','Who would benefit from it most?','What problems should magic never solve for us?'],
        ['What would you create in a fictional cauldron?','What problem would your potion address?','If an easy magical solution existed, what might people fail to learn?']))
    ]
  },
  {
    id: 'christmas', title: 'Christmas by the Fireplace', ru: 'Рождество у камина', preview: '🧦', caption: 'A cosy Christmas corner', subtitle: 'Place seven details around the fireplace.', color: '#f9eae5',
    items: [
      I('stocking','Stocking','🧦',Q(
        ['What colour is your stocking?','What little surprise would you put inside it?','Why can a tiny surprise make someone smile?'],
        ['What would you put in a Christmas stocking?','Who would you make one for?','Are small personal gifts more exciting than expensive ones?'],
        ['What would you include in a thoughtful stocking?','How would you choose something for a close friend?','Why can small traditions create lasting memories?'],
        ['What would go into a stocking for someone you care about?','Which small gift has felt especially personal to you?','What makes a holiday ritual meaningful across generations?'])),
      I('wreath','Wreath','🌿',Q(
        ['Is this wreath green?','Where would you hang it?','What would you add to make a wreath your own?'],
        ['Do you like making decorations?','How would you decorate a wreath?','Which is more fun: making decorations or buying them? Why?'],
        ['What style of wreath would you choose?','What materials would you use to make it?','How can handmade decorations change the feeling of a celebration?'],
        ['Would you hang a wreath at home?','How would you make it fit your style?','Why do people value handmade holiday objects?'])),
      I('gift-box','Gift box','🎁',Q(
        ['Who is this gift for?','What would you put inside the box?','How would you choose a gift that makes a friend happy?'],
        ['Who would you surprise with a gift?','What would you choose for that person?','Is it more important for a gift to be useful or personal?'],
        ['What gift would you choose for someone difficult to shop for?','How would you find out what they might enjoy?','Can giving a gift be more satisfying than receiving one?'],
        ['What makes a present thoughtful?','What is the best gift you have given someone?','How do you handle the pressure to spend money during the holidays?'])),
      I('bell','Christmas bell','🔔',Q(
        ['What sound does a bell make?','When would you ring this bell?','What sound makes you think of a holiday?'],
        ['What holiday sounds do you enjoy?','Where would you hang a Christmas bell?','How can one familiar sound bring back a memory?'],
        ['What sound reminds you of Christmas?','What memory comes with that sound?','Why can sounds trigger memories more strongly than images?'],
        ['Which sound feels festive to you?','What memory does it bring back?','How do sensory details shape a holiday atmosphere?'])),
      I('christmas-candle','Candle','🕯️',Q(
        ['Is candlelight warm or cold?','Where could an adult place a candle safely?','How would you make a room feel cosy with lights?'],
        ['Do you like soft lights at Christmas?','How would you light a cosy room?','Why does soft light change the feeling of an evening?'],
        ['What lighting makes a space feel festive?','How would you create a calm Christmas evening?','Why is atmosphere important to the way we remember holidays?'],
        ['Do you use candles during winter celebrations?','What creates a peaceful holiday atmosphere for you?','How can simple sensory details change the way people connect?'])),
      I('gingerbread','Gingerbread','🍪',Q(
        ['Do you like cookies?','What shape would your gingerbread be?','How would you decorate a gingerbread person?'],
        ['Have you tried gingerbread?','What would you bake for a Christmas party?','Why do some foods become part of family traditions?'],
        ['What festive food would you make?','Who taught you to make it?','How can a recipe connect people across generations?'],
        ['What food says Christmas to you?','Is there a recipe you associate with someone?','Why are food traditions often passed down more carefully than other customs?'])),
      I('candy-cane','Candy cane','🍭',Q(
        ['What colours are on a candy cane?','Would you eat it or hang it up?','What sweet decoration would you invent?'],
        ['Do you like candy canes?','How would you use them to decorate?','Can simple decorations be more memorable than expensive ones?'],
        ['What is your favourite edible decoration?','How would you combine food and design for a party?','Why do festive colours become so recognisable?'],
        ['Do candy canes remind you of Christmas?','How would you use food as part of a table setting?','How do colours and shapes become linked to a holiday?'])),
      I('garland','Garland','✨',Q(
        ['Is this garland shiny?','Where would you put it near the fireplace?','What colours would make your own garland look happy?'],
        ['What colour garland would you choose?','How could you make one with friends?','Is decorating together more enjoyable than seeing the finished room?'],
        ['Would you make or buy a garland?','How would you style it for this room?','What is the value of preparing for a holiday together?'],
        ['How do you feel about decorating for Christmas?','What would make your space feel festive?','Is the preparation sometimes more meaningful than the celebration itself?'])),
      I('snowflake','Snowflake','❄️',Q(
        ['Is a snowflake cold?','Where would you hang a paper snowflake?','How could you make two snowflakes look different?'],
        ['Do you enjoy snow at Christmas?','How would you make a paper snowflake?','Does Christmas feel different when the weather is warm?'],
        ['What weather do you imagine at Christmas?','How would you decorate if it never snowed?','Why do some holiday images stay popular in places with very different climates?'],
        ['Does winter weather matter to your Christmas mood?','What decoration would work in any climate?','How do global holiday images differ from local traditions?'])),
      I('hot-cocoa','Hot cocoa','☕',Q(
        ['Do you like hot chocolate?','Who would you share a warm drink with?','What would make a cold evening feel cosy?'],
        ['What warm drink do you like?','Who would you invite for hot chocolate?','Can a simple drink make time together feel special?'],
        ['What drink belongs at your Christmas gathering?','What conversation would you have over it?','Why are small shared rituals important to friendships?'],
        ['What drink feels like a winter treat?','Who would you like to catch up with by the fire?','How can an ordinary shared moment become a lasting holiday memory?'])),
      I('toy-train','Toy train','🚂',Q(
        ['Where is this train going?','Who would ride on your Christmas train?','What would you see on a train to a snowy town?'],
        ['Did you play with toy trains?','Where would your imaginary Christmas train go?','Why can old toys make a room feel nostalgic?'],
        ['What childhood toy would you display at Christmas?','What memory does it bring back?','Why does nostalgia become especially strong during the holidays?'],
        ['What toy or object brings back a holiday memory?','Who gave it to you?','How do family objects keep stories alive across time?'])),
      I('teddy','Teddy bear','🧸',Q(
        ['Do you have a teddy bear?','What name would you give this bear?','How could a teddy bear make a child feel welcome?'],
        ['Would a teddy bear be a good present?','Who would you give it to?','Why do some childhood gifts stay meaningful for years?'],
        ['What comforting object did you have as a child?','Would you give something similar to a younger child?','Why do people keep objects that no longer have practical use?'],
        ['What childhood gift do you still remember?','Who gave it to you?','How can a simple object carry emotional value long after childhood?'])),
      I('ribbon','Ribbon','🎀',Q(
        ['What colour is the ribbon?','Which present would you tie it around?','How can you make a small gift look special?'],
        ['Do you enjoy wrapping presents?','How would you use this ribbon?','Does beautiful wrapping make a gift more exciting? Why?'],
        ['How would you wrap a gift creatively?','What detail would show you know the person well?','How much does presentation influence how we value a gift?'],
        ['Do you put effort into wrapping gifts?','What small detail would make a package personal?','What does gift presentation communicate before the box is opened?'])),
      I('star','Star','🌟',Q(
        ['Can you see stars at night?','Where would you put this star?','If a star could grant a kind wish, what would you wish for?'],
        ['What would you wish on a star?','Where would you place this decoration?','Why do people connect stars with hope?'],
        ['What hope would you attach to this star?','Would you share that hope with someone?','Why do symbols help people express difficult feelings?'],
        ['What does a star symbolise to you?','What hope would you carry into the coming year?','Why do simple symbols appear in so many traditions?']))
    ]
  },
  {
    id: 'suitcase', title: 'Pack Your Suitcase', ru: 'Собери чемодан', preview: '🧳', caption: 'The journey starts here', subtitle: 'Pack seven things for your next adventure.', color: '#e5ecff',
    items: [
      I('passport','Passport','🛂',Q(
        ['What is your name?','Where would you go with a passport?','Why do people need a passport to visit some countries?'],
        ['Do you have a passport?','Which country would you like to visit first?','What would you check before travelling to another country?'],
        ['Where could your passport take you?','What would you prepare before an international trip?','How can visiting another country challenge your assumptions?'],
        ['Where would you fly next?','What do you always prepare before travelling abroad?','How has international travel changed the way you see other cultures?'])),
      I('map','Map','🗺️',Q(
        ['Can you find your home on a map?','What place would you find first on a map?','Would you rather follow a map or discover your own path? Why?'],
        ['Do you like reading maps?','Where would you look for interesting places to visit?','Is getting lost sometimes part of a good adventure?'],
        ['Do you use paper maps or your phone?','How do you plan a route in an unfamiliar city?','What do you gain by exploring without a strict plan?'],
        ['How do you navigate a new place?','Do you plan a route in detail or wander?','Has digital navigation changed the way we notice our surroundings?'])),
      I('camera','Camera','📷',Q(
        ['What would you take a photo of?','Who would you show your holiday photos to?','Can a photo help you remember how a place felt?'],
        ['Do you take many photos on trips?','What is the best holiday photo you have taken?','Would you enjoy a holiday without taking any photos? Why?'],
        ['What do you photograph while travelling?','How do you decide whether a moment needs a photo?','Can taking too many photos make it harder to enjoy an experience?'],
        ['What scene would make you reach for a camera?','Which travel photograph means the most to you?','How do photographs shape the stories we tell about our trips?'])),
      I('book','Book','📚',Q(
        ['Do you like stories?','What book would you take on a long trip?','What kind of story would be fun to read on a train?'],
        ['Do you read when you travel?','Which book would you pack for a long journey?','Would you choose a familiar book or a new one for a trip? Why?'],
        ['What would you read on a flight?','What makes a book a good travel companion?','Can the place where you read affect how you remember a book?'],
        ['Do you take books when you travel?','Have you ever associated a book with a particular place?','Does travel change the kind of reading you enjoy?'])),
      I('headphones','Headphones','🎧',Q(
        ['What song do you like?','What music would you listen to on a bus?','How can a song make a long journey more fun?'],
        ['Do you listen to music while travelling?','What would be on your travel playlist?','Does music help you enjoy a place or distract you from it?'],
        ['What do you listen to on a journey?','How would you choose a playlist for a road trip?','How can music become connected to a place in your memory?'],
        ['What do you listen to while in transit?','Is there a song that reminds you of a journey?','Can silence be more valuable than entertainment while travelling?'])),
      I('swimsuit','Swimsuit','🩱',Q(
        ['Do you like swimming?','Where would you like to swim?','What would your perfect day at the beach look like?'],
        ['Would you pack a swimsuit?','What would you do at a beach or pool?','Would you rather swim in the sea or in a pool? Why?'],
        ['Do you enjoy being near water?','What is your favourite water activity?','What makes a beach holiday relaxing or stressful for different people?'],
        ['Would you choose a seaside holiday?','How do you like to spend a day by the water?','What makes a coastal destination appealing beyond swimming?'])),
      I('warm-jacket','Warm jacket','🧥',Q(
        ['Is your jacket warm?','Where would you wear a big jacket?','What would you do on a snowy holiday?'],
        ['Would you travel somewhere cold?','What clothes would you pack for snow?','Is a winter trip more exciting than a summer trip? Why?'],
        ['Do you enjoy cold-weather travel?','What would you pack for a mountain trip?','How does the weather change the way people experience a place?'],
        ['Where would you wear a warm jacket on holiday?','How do you prepare for unpredictable weather?','Can challenging weather make a trip more memorable?'])),
      I('sneakers','Sneakers','👟',Q(
        ['Can you run in these shoes?','Where would you walk in your sneakers?','What could you discover on a long walk in a new city?'],
        ['Do you walk a lot on holiday?','What is the most interesting walk you have taken?','Would you rather explore a city on foot or by bus? Why?'],
        ['What kind of walking trip would you enjoy?','How do you choose shoes for a journey?','Why can walking reveal more about a city than a guided tour?'],
        ['Do you prefer exploring on foot?','What unexpected place have you found while walking?','How does moving slowly through a place affect what you notice?'])),
      I('sunglasses','Sunglasses','🕶️',Q(
        ['Is it sunny today?','Where would you wear your sunglasses?','What would you do on a very sunny day?'],
        ['Do you like hot weather?','What would you do on a sunny holiday afternoon?','Would you prefer a sunny beach or a cool forest? Why?'],
        ['What is your ideal holiday weather?','How do you plan your day when it is very hot?','Does sunshine influence your mood when you travel? How?'],
        ['Do you seek sunny destinations?','What do you enjoy doing on a bright day?','How much should climate influence a travel decision?'])),
      I('notebook','Notebook','📓',Q(
        ['What can you draw in a notebook?','What would you write about your trip?','If you drew one picture each day, what would you draw first?'],
        ['Would you keep a travel diary?','What would you write after an exciting day?','Why might a small note capture a trip better than a photo?'],
        ['Do you record your travel memories?','What detail would you put in a travel journal?','How might writing about a trip change your memory of it?'],
        ['Do you keep notes when you travel?','What would you want to remember ten years later?','Why do personal travel journals reveal more than itineraries?'])),
      I('snacks','Snacks','🍫',Q(
        ['What snack do you like?','What food would you take on a train?','If you shared a snack with a new friend, what would you choose?'],
        ['What snack would you pack?','What is the best food for a long journey?','Would you bring familiar food or try local snacks first? Why?'],
        ['What food do you take on a trip?','Have you discovered a favourite snack while travelling?','How can trying local food help you understand a place?'],
        ['What is your essential travel snack?','Which local food has surprised you on a trip?','To what extent is food part of the travel experience?'])),
      I('souvenir','Souvenir','🧸',Q(
        ['What little thing would you bring home?','Who would you buy a small gift for?','What souvenir could help you remember a happy day?'],
        ['Do you buy souvenirs?','What is the best thing you have brought home from a trip?','Are handmade souvenirs more meaningful than shop-bought ones?'],
        ['What souvenir would you look for?','What item reminds you of a place you visited?','Can an object capture the real spirit of a place?'],
        ['Do you collect souvenirs?','Which object brings back a travel memory for you?','What makes a souvenir meaningful rather than clutter?'])),
      I('phone','Phone','📱',Q(
        ['Can you call home?','Who would you call from your holiday?','Would you put your phone away to enjoy a new place?'],
        ['How do you use your phone on trips?','What app helps you most when you travel?','Would you enjoy a day of travel without your phone? Why?'],
        ['Which phone tool is most useful while travelling?','How do you stay in touch with home?','Does a phone make you more independent or more distracted on a trip?'],
        ['What role does your phone play when you travel?','When do you choose to disconnect?','How has constant connectivity changed the experience of being away?'])),
      I('toothbrush','Toothbrush','🪥',Q(
        ['Do you brush your teeth?','What do you do before bed on holiday?','What small thing might you forget to pack?'],
        ['What do you always pack first?','Have you ever forgotten something important on a trip?','Which everyday item would be hardest to replace while travelling?'],
        ['What essential item do you often forget?','How do you check that you have packed everything?','Are packing lists helpful or do they take the fun out of travel?'],
        ['What simple item do you never forget to pack?','Have you improvised when you forgot an essential?','What does your packing style say about how you approach travel?']))
    ]
  },
  {
    id: 'birthday', title: 'Plan a Birthday Party', ru: 'Подготовь день рождения', preview: '🎂', caption: 'Make their day unforgettable', subtitle: 'Choose seven details for the party.', color: '#f6e8f3',
    items: [
      I('balloons','Balloons','🎈',Q(
        ['What colour balloon do you like?','Where would you put the balloons?','What balloon shape would make your party special?'],
        ['What colours would you choose for a party?','How would you decorate with balloons?','Do decorations change how people feel at a party? Why?'],
        ['What kind of balloons would fit your party?','How would you choose a colour theme?','How much does the look of a party affect the experience?'],
        ['Would you use balloons for a celebration?','What visual style would you choose?','What makes an event feel personal rather than generic?'])),
      I('cake','Birthday cake','🎂',Q(
        ['What cake do you like?','What would you put on your birthday cake?','If you invented a new cake, what would be inside?'],
        ['What is your favourite cake?','Would you bake it or buy it for a party?','Should a birthday cake be a surprise or chosen by the birthday person?'],
        ['What kind of cake would you choose?','What cake have you enjoyed at a memorable birthday?','Why do particular foods become symbols of celebrations?'],
        ['What dessert would you serve at your birthday?','What birthday cake do you remember best?','Do traditional birthday rituals still feel meaningful to adults?'])),
      I('candles','Candles','🕯️',Q(
        ['Can you count the candles?','What wish would you make before blowing them out?','Why do people make wishes on birthdays?'],
        ['Do you make a birthday wish?','What kind of wish would you keep secret?','Do you think birthday wishes help people set real goals?'],
        ['What would you wish for this year?','How would you turn that wish into a plan?','Is a birthday a useful moment to reflect on your goals?'],
        ['Do you still make birthday wishes?','What would you like the coming year to bring?','How do milestones influence the way people set priorities?'])),
      I('party-gift','Present','🎁',Q(
        ['Do you like presents?','What gift would you give your friend?','How would you find out what a friend really likes?'],
        ['What present would you bring?','How do you choose a gift for a friend?','Is a homemade gift more personal than a bought one?'],
        ['What gift would suit a close friend?','What makes a present feel thoughtful?','Would you rather give a useful gift or a memorable experience?'],
        ['What makes a birthday present meaningful?','What was the most thoughtful gift you have received?','How can you celebrate someone without buying a gift?'])),
      I('party-hat','Party hat','🥳',Q(
        ['Would you wear a party hat?','What colour would your hat be?','How could you make a funny hat for a friend?'],
        ['Would you wear a party hat?','What would you add to make one unique?','Why do silly traditions make celebrations more fun?'],
        ['Would a party hat fit your ideal birthday?','What playful tradition would you include instead?','When do people stop enjoying childish party customs, if ever?'],
        ['Would you wear a party hat?','What playful tradition would you keep at an adult birthday?','Why can light-hearted rituals help guests relax?'])),
      I('invitation','Invitation','💌',Q(
        ['Who would you invite?','What would you draw on your invitation?','How would you help a new friend feel welcome?'],
        ['Who would you invite to your party?','What information would you put on the invitation?','Would you choose a small group of close friends or a big party? Why?'],
        ['How would you invite your friends?','What kind of party would the invitation promise?','How can you make guests from different groups feel included?'],
        ['Who would you invite to a celebration?','Would you send a formal invitation or a message?','How does the guest list shape the atmosphere of an event?'])),
      I('music','Music','🎵',Q(
        ['What song makes you dance?','What music would you play at the party?','How can music make a quiet party more fun?'],
        ['What song belongs on your party playlist?','Who would choose the music?','How can you pick songs that different guests will enjoy?'],
        ['What kind of music suits your party?','How would you build a playlist for mixed tastes?','Can the wrong music change the mood of a celebration?'],
        ['What music would you play for your guests?','How would you balance your taste with theirs?','How strongly does music influence the memory of an event?'])),
      I('confetti','Confetti','🎊',Q(
        ['What colour is the confetti?','When would you throw it?','What surprise would make everyone cheer?'],
        ['Would you use confetti at a party?','When would you create a big surprise?','What makes a celebration feel exciting without spending much money?'],
        ['Would confetti suit your party?','What moment would you make the highlight?','Does a party need a big surprise to be memorable?'],
        ['Would you plan a surprise moment?','What small gesture would delight your guests?','What makes a celebration memorable after the decorations are gone?'])),
      I('flowers','Flowers','💐',Q(
        ['What flower do you like?','Who would you give flowers to?','How could flowers make the room look happy?'],
        ['Would you decorate with flowers?','Which colours would you choose?','Why can a small bunch of flowers change a room?'],
        ['What flowers would match your party?','Would you choose fresh or paper flowers?','How can simple natural details improve a celebration?'],
        ['Do you like receiving flowers?','What arrangement would suit your event?','What do flowers communicate that other gifts may not?'])),
      I('photo','Photo','📸',Q(
        ['Who would be in your photo?','What funny pose would you choose?','How could you remember your birthday without a photo?'],
        ['Do you like taking party photos?','What moment would you want to capture?','Can too many photos make it harder to enjoy a party?'],
        ['What party moment would you photograph?','Would you share the photos online?','How does photographing an event affect the way people behave?'],
        ['Do you take many photos at celebrations?','Which moment would be worth capturing?','How do photos influence what people remember about an event?'])),
      I('game','Party game','🎲',Q(
        ['What game do you like?','What game would you play with your friends?','How could you change a game so everyone can join?'],
        ['What game would you play at a party?','How would you explain the rules to new players?','Should party games be competitive or cooperative? Why?'],
        ['What game could bring your guests together?','How would you include someone who feels shy?','What makes a group activity enjoyable for people with different personalities?'],
        ['Would you include a game at your party?','What kind of activity would suit your guests?','How do shared activities help people who have just met?'])),
      I('cupcake','Cupcake','🧁',Q(
        ['What colour icing do you like?','How would you decorate a cupcake?','What new cupcake flavour would you invent?'],
        ['Would you serve cupcakes?','Which flavours would you make?','Are small desserts better for a party than one big cake?'],
        ['What cupcake flavour would you choose?','How could you offer options for different guests?','How should a host balance fun food with guests’ different needs?'],
        ['Would cupcakes suit your birthday table?','What flavours would you serve?','How do you plan food when guests have very different preferences?'])),
      I('banner','Birthday banner','🎉',Q(
        ['What would your banner say?','Where would you hang it?','What kind message would you write for the birthday person?'],
        ['What message would you put on a banner?','Would you make it by hand?','Why can a personal message matter more than an expensive decoration?'],
        ['What would your party banner say?','How would you make it personal?','What makes public birthday messages feel genuine rather than routine?'],
        ['Would you display a birthday message?','What would you write for someone close to you?','Why do simple words sometimes matter more than elaborate celebrations?'])),
      I('ice-cream','Ice cream','🍨',Q(
        ['What ice cream flavour do you like?','Who would you share ice cream with?','What funny new flavour would you invent for a party?'],
        ['Would you serve ice cream at a birthday?','Which three flavours would you offer?','Would you rather have an ice cream bar or a traditional cake? Why?'],
        ['What dessert would your guests enjoy?','How would you choose flavours for different tastes?','Why do interactive food stations work well at parties?'],
        ['Would ice cream be part of your celebration?','What dessert setup would suit your guests?','How does letting guests customise food change a party?']))
    ]
  }
];

